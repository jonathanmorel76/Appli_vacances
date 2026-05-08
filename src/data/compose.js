// =============================================================================
// MOTEUR DE COMPOSITION — Échappée
// Assemble 3 programmes distincts à partir des expériences curées.
// 100 % local, déterministe avec un peu d'aléa contrôlé pour la variété.
// =============================================================================

import { destinations, allDestinations } from './destinations.js';

const PERIODS = ['morning', 'midday', 'afternoon', 'evening', 'night'];

// Mots-clés des notes → boost de styles spécifiques
const NOTES_KEYWORDS = {
  enfant: ['famille'], enfants: ['famille'], famille: ['famille'], gosse: ['famille'],
  bebe: ['famille'], bébé: ['famille'], kids: ['famille'],
  budget: { boostBudget: '€' }, économique: { boostBudget: '€' }, economique: { boostBudget: '€' },
  cher: { boostBudget: '€' }, 'petit prix': { boostBudget: '€' },
  luxe: { boostBudget: '€€€' }, premium: { boostBudget: '€€€' },
  marche: ['nature','aventure'], marcher: ['nature','aventure'], pied: ['nature','aventure'],
  calme: ['bien-etre'], tranquille: ['bien-etre'], reposant: ['bien-etre'], 'pas de foule': ['bien-etre','insolite'],
  romantique: ['romantique'], couple: ['romantique'], amoureux: ['romantique'],
  vegan: ['nature','bien-etre'], vegetarien: ['nature','bien-etre'], végétarien: ['nature','bien-etre'],
  fete: ['nuit','spectacles'], fête: ['nuit','spectacles'], soiree: ['nuit'], soirée: ['nuit'],
  pluie: { avoid: ['nature','aventure'], boost: ['art','culture','shopping'] },
  pluvieux: { avoid: ['nature','aventure'], boost: ['art','culture','shopping'] },
  soleil: { boost: ['nature','romantique'] }, ensoleillé: { boost: ['nature','romantique'] }
};

function parseNotes(notes = '') {
  const lower = notes.toLowerCase();
  const boostStyles = [];
  const avoidStyles = [];
  let boostBudget = null;

  for (const [keyword, effect] of Object.entries(NOTES_KEYWORDS)) {
    if (!lower.includes(keyword)) continue;
    if (Array.isArray(effect)) {
      boostStyles.push(...effect);
    } else if (typeof effect === 'object') {
      if (effect.boost) boostStyles.push(...effect.boost);
      if (effect.avoid) avoidStyles.push(...effect.avoid);
      if (effect.boostBudget) boostBudget = effect.boostBudget;
    }
  }
  return { boostStyles, avoidStyles, boostBudget };
}

// Score d'une expérience selon les préférences utilisateur + tonalité du programme
function scoreExperience(exp, userStyles, programPrefer = [], programAvoid = [], notesParsed) {
  let score = 0;

  // Match avec les styles choisis par l'utilisateur (priorité forte)
  const userMatches = exp.styles.filter(s => userStyles.includes(s)).length;
  score += userMatches * 5;

  // Match avec les préférences du programme (priorité moyenne)
  const programMatches = exp.styles.filter(s => programPrefer.includes(s)).length;
  score += programMatches * 2;

  // Pénalité si l'expérience est dans les styles évités
  const programAvoids = exp.styles.filter(s => programAvoid.includes(s)).length;
  score -= programAvoids * 3;

  // Boost depuis les notes
  if (notesParsed) {
    const noteBoosts = exp.styles.filter(s => notesParsed.boostStyles.includes(s)).length;
    score += noteBoosts * 1.5;
    const noteAvoids = exp.styles.filter(s => notesParsed.avoidStyles.includes(s)).length;
    score -= noteAvoids * 2;
    if (notesParsed.boostBudget && exp.budget === notesParsed.boostBudget) score += 1;
  }

  // Petit aléa pour varier les compositions d'une fois sur l'autre
  score += Math.random() * 0.8;

  return score;
}

// Compose un programme à partir d'une destination + une tonalité
function composeProgram(dest, programTemplate, userStyles, notesParsed) {
  const moments = [];
  const usedTitles = new Set();

  for (const period of PERIODS) {
    const candidates = dest.experiences.filter(e =>
      e.period === period && !usedTitles.has(e.title)
    );
    if (candidates.length === 0) continue;

    const scored = candidates
      .map(e => ({ e, score: scoreExperience(e, userStyles, programTemplate.preferStyles, programTemplate.avoidStyles, notesParsed) }))
      .sort((a, b) => b.score - a.score);

    const top = scored[0].e;
    usedTitles.add(top.title);
    moments.push({
      time: top.time,
      title: top.title,
      description: top.description,
      location: top.location,
      styles: top.styles,
      budget: top.budget
    });
  }

  // Calcule un budget global (le plus représenté)
  const budgetCount = moments.reduce((acc, m) => {
    acc[m.budget] = (acc[m.budget] || 0) + 1;
    return acc;
  }, {});
  const dominantBudget = Object.entries(budgetCount).sort((a, b) => b[1] - a[1])[0]?.[0] || '€€';

  return {
    title: programTemplate.title,
    vibe: programTemplate.vibe,
    destination: `${dest.name}${dest.region && dest.region !== dest.name ? ', ' + dest.region : ''}`,
    destinationId: dest.id,
    country: dest.country,
    bestFor: programTemplate.bestFor,
    highlights: programTemplate.highlights,
    budget: dominantBudget,
    tone: programTemplate.tone,
    moments,
    transport: dest.transport
  };
}

// Choisit les 3 destinations qui matchent le mieux les styles de l'utilisateur
function pickBestDestinations(userStyles, n = 3) {
  if (userStyles.length === 0) {
    // Aléatoire si rien de spécifié
    return shuffle([...allDestinations]).slice(0, n);
  }

  const scored = allDestinations.map(dest => {
    // Score = somme des matches dans les expériences de la ville
    const totalMatches = dest.experiences.reduce((sum, exp) =>
      sum + exp.styles.filter(s => userStyles.includes(s)).length, 0
    );
    return { dest, score: totalMatches + Math.random() };
  });

  return scored.sort((a, b) => b.score - a.score).slice(0, n).map(s => s.dest);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// =============================================================================
// API publique
// =============================================================================

export function composeProposals({ destinationId, styles = [], notes = '' }) {
  const notesParsed = parseNotes(notes);
  const allBoostedStyles = [...new Set([...styles, ...notesParsed.boostStyles])];

  // CAS 1 — Une destination spécifique : on retourne ses 3 programmes
  if (destinationId && destinations[destinationId]) {
    const dest = destinations[destinationId];
    return dest.programs.map(programTemplate =>
      composeProgram(dest, programTemplate, allBoostedStyles, notesParsed)
    );
  }

  // CAS 2 — Pas de destination : 3 villes différentes, un programme par ville
  const picks = pickBestDestinations(allBoostedStyles, 3);
  // Pour chaque ville, on prend le programme le mieux adapté aux styles
  return picks.map(dest => {
    const bestProgram = dest.programs
      .map(p => {
        const overlap = p.preferStyles.filter(s => allBoostedStyles.includes(s)).length;
        const avoidance = p.avoidStyles.filter(s => allBoostedStyles.includes(s)).length;
        return { p, score: overlap - avoidance + Math.random() * 0.3 };
      })
      .sort((a, b) => b.score - a.score)[0].p;
    return composeProgram(dest, bestProgram, allBoostedStyles, notesParsed);
  });
}
