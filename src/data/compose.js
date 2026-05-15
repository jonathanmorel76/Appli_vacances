// =============================================================================
// MOTEUR DE COMPOSITION — Échappée
// Assemble 3 programmes distincts à partir des expériences curées.
// 100 % local, déterministe avec aléa contrôlé.
//
// Garanties :
//  - Un petit-déj ouvre toujours la journée (si la ville en propose)
//  - Les 3 programmes d'une même ville sont VRAIMENT différents
//  - Le jour sélectionné influe (musées fermés lundi, marchés dimanche, etc.)
//  - Les régénérations donnent des résultats variés
// =============================================================================

import { destinations, allDestinations } from './destinations.js';

const PERIODS = ['morning', 'midday', 'afternoon', 'evening', 'night'];

// =============================================================================
// PETIT-DÉJEUNER — détection par mots-clés
// =============================================================================
const BREAKFAST_KEYWORDS = [
  'petit-déjeuner','petit déjeuner','petit-déj','petit dej',
  'café croissant','cappuccino',
  'pastel','burek','pain au','brunch','tartine','viennoiserie',
  'marché aux poissons','marché des capucins','marché de la croix-rousse',
  'marché dolac','marché central','marché tržnica'
];

function isBreakfast(exp) {
  if (exp.period !== 'morning') return false;
  const hour = parseInt(exp.time.split(':')[0], 10);
  if (hour > 9) return false;
  const haystack = (exp.title + ' ' + exp.description).toLowerCase();
  return BREAKFAST_KEYWORDS.some(kw => haystack.includes(kw));
}

// =============================================================================
// PARSING DES NOTES
// =============================================================================
const NOTES_RULES = [
  // Famille
  { match: /enfant|bébé|bebe|gosse|kids|famille/i,
    effect: { boostStyles: ['famille'], avoidStyles: ['nuit'] } },

  // Couple / romantique
  { match: /\bà deux\b|en couple|amoureux|romantique|en amoureux|notre couple|st valentin|saint-valentin|lune de miel/i,
    effect: { boostStyles: ['romantique','gastronomie'], avoidStyles: ['famille'] } },

  // Amis / groupe
  { match: /entre amis|avec mes amis|copains|copines|groupe d'amis|bande/i,
    effect: { boostStyles: ['nuit','spectacles','gastronomie'] } },

  // Solo
  { match: /\bseul\b|\bseule\b|en solo|tout seul/i,
    effect: { boostStyles: ['culture','art','bien-etre'] } },

  // Budget
  { match: /petit budget|budget serré|économique|economique|pas trop cher|pas cher|étudiant/i,
    effect: { boostBudget: '€' } },
  { match: /\bluxe\b|premium|raffiné|raffine|haut de gamme|grand restaurant|étoilé|etoile/i,
    effect: { boostBudget: '€€€' } },

  // Tempo
  { match: /tranquille|calme|reposant|sans courir|sans presser|détendu|detendu|chill|paisible|pas de foule|sans foule|slow/i,
    effect: { boostStyles: ['bien-etre','romantique'], avoidStyles: ['nuit','aventure'] } },
  { match: /intense|rythmé|rythme|energique|énergique|à fond|tout faire|découvrir un max|un maximum/i,
    effect: { boostStyles: ['aventure','spectacles','culture'] } },

  // Mobilité
  { match: /\bà pied\b|marche|marcher|randonn|balade|promenade/i,
    effect: { boostStyles: ['nature','aventure','bien-etre'] } },
  { match: /\bvélo\b|velo|cyclisme|cycliste/i,
    effect: { boostStyles: ['nature','aventure'] } },

  // Cuisine
  { match: /végétarien|vegetarien|vegan|végan/i,
    effect: { boostStyles: ['nature','bien-etre'] } },
  { match: /local|locaux|authentique|typique|traditionnel/i,
    effect: { boostStyles: ['gastronomie','culture','insolite'] } },
  { match: /petit-déj|petit déjeuner|breakfast|petit dej|brunch/i,
    effect: { wantsBreakfast: true, boostStyles: ['gastronomie'] } },
  { match: /vin|vins|œnologie|oenologie|dégustation|degustation/i,
    effect: { boostStyles: ['gastronomie','culture'] } },

  // Nuit
  { match: /\bfête\b|fete|teuf|soirée|soiree|sortir|clubbing|nightlife/i,
    effect: { boostStyles: ['nuit','spectacles'] } },
  { match: /coucher tôt|coucher tot|tôt au lit|fatigué|fatigue|pas tard/i,
    effect: { avoidStyles: ['nuit'] } },

  // Météo
  { match: /pluie|pluvieux|orage|mauvais temps|mauvaise météo|mauvaise meteo/i,
    effect: { boostStyles: ['art','culture','shopping'], avoidStyles: ['nature','aventure'] } },
  { match: /soleil|ensoleillé|ensoleille|beau temps|chaleur|canicule|grosse chaleur/i,
    effect: { boostStyles: ['nature','romantique','aventure'] } },

  // Accessibilité
  { match: /handicap|fauteuil|mobilité réduite|mobilite reduite|pmr|sans escalier/i,
    effect: { avoidStyles: ['aventure'] } }
];

function parseNotes(notes = '') {
  const result = {
    boostStyles: [],
    avoidStyles: [],
    boostBudget: null,
    wantsBreakfast: false
  };
  if (!notes.trim()) return result;

  for (const rule of NOTES_RULES) {
    if (!rule.match.test(notes)) continue;
    const e = rule.effect;
    if (e.boostStyles) result.boostStyles.push(...e.boostStyles);
    if (e.avoidStyles) result.avoidStyles.push(...e.avoidStyles);
    if (e.boostBudget) result.boostBudget = e.boostBudget;
    if (e.wantsBreakfast) result.wantsBreakfast = true;
  }
  return result;
}

// =============================================================================
// CONTEXTE DE LA DATE — jour de semaine + saison
// =============================================================================
function parseDateContext(isoDate) {
  if (!isoDate) return { boostStyles: [], avoidStyles: [], penalize: [], boost: [] };

  const d = new Date(isoDate + 'T12:00:00');
  const day = d.getDay();        // 0=dim, 1=lun, ..., 6=sam
  const month = d.getMonth() + 1; // 1=jan, ..., 12=déc

  const ctx = { boostStyles: [], avoidStyles: [], penalize: [], boost: [] };

  // ─── Jour de semaine ────────────────────────────────────────────────────
  if (day === 0) {
    // Dimanche : brunch / marché / famille / promenades, pas de shopping commercial
    ctx.boostStyles.push('famille','romantique','bien-etre','gastronomie');
    ctx.avoidStyles.push('shopping');
    ctx.boost.push(/marché|brunch|parc|promenade|berges|miroir|pique-nique/i);
  } else if (day === 1) {
    // Lundi : Orsay, Mucem, Borghese, beaucoup d'autres musées fermés (mais Louvre ouvert)
    ctx.penalize.push(/orsay|mucem|borghèse|mestrović|relations brisées|musée des tissus|capc|musée national de l'azulejo/i);
    ctx.boostStyles.push('nature','gastronomie');
    ctx.boost.push(/marché|monument|cathédrale|forum|colisée|panthéon|amphithéâtre|parc/i);
  } else if (day === 2) {
    // Mardi : Louvre, Pompidou, Atelier des Lumières fermés en France
    ctx.penalize.push(/louvre|pompidou|atelier des lumières/i);
  } else if (day === 5) {
    // Vendredi soir : nightlife boost
    ctx.boostStyles.push('nuit','spectacles','gastronomie');
  } else if (day === 6) {
    // Samedi : marchés, sorties, vie nocturne
    ctx.boostStyles.push('nuit','spectacles','shopping','gastronomie');
    ctx.boost.push(/marché|festival|concert/i);
  }

  // ─── Saison ─────────────────────────────────────────────────────────────
  if (month >= 6 && month <= 8) {
    // Été : plages, terrasses, festivals plein air, baignade
    ctx.boostStyles.push('nature','aventure','romantique');
    ctx.boost.push(/plage|baignade|ferry|île|îles|kayak|terrasse|coucher de soleil|sentier|cala|crique|nuit chaude/i);
    ctx.penalize.push(/musée fermé|chocolat chaud/i);
  } else if (month === 12 || month <= 2) {
    // Hiver : intérieurs, gastronomie, art, marchés couverts
    ctx.boostStyles.push('culture','art','gastronomie','bien-etre');
    ctx.avoidStyles.push('aventure');
    ctx.penalize.push(/plage|baignade|kayak|surf|sentier/i);
    ctx.boost.push(/musée|chocolat|bistrot|opéra|concert/i);
  } else if (month >= 3 && month <= 5) {
    // Printemps : parcs, balades, marchés aux fleurs
    ctx.boostStyles.push('nature','romantique');
    ctx.boost.push(/parc|jardin|fleurs|berges|terrasse|promenade/i);
  } else {
    // Automne : culture, gastronomie, marchés
    ctx.boostStyles.push('culture','gastronomie','art');
  }

  return ctx;
}

// =============================================================================
// SCORING
// =============================================================================
function scoreExperience(exp, userStyles, programPrefer, programAvoid, notesParsed, dateCtx, alreadyUsed) {
  let score = 0;

  // Préférences utilisateur (priorité forte)
  const userMatches = exp.styles.filter(s => userStyles.includes(s)).length;
  score += userMatches * 5;

  // Préférences du programme (tonalité)
  const programMatches = exp.styles.filter(s => programPrefer.includes(s)).length;
  score += programMatches * 3;

  const programAvoids = exp.styles.filter(s => programAvoid.includes(s)).length;
  score -= programAvoids * 4;

  // Notes
  if (notesParsed) {
    const noteBoosts = exp.styles.filter(s => notesParsed.boostStyles.includes(s)).length;
    score += noteBoosts * 1.5;
    const noteAvoids = exp.styles.filter(s => notesParsed.avoidStyles.includes(s)).length;
    score -= noteAvoids * 2.5;
    if (notesParsed.boostBudget && exp.budget === notesParsed.boostBudget) score += 1.5;
  }

  // Contexte de date (jour + saison)
  if (dateCtx) {
    const text = (exp.title + ' ' + exp.description + ' ' + exp.location).toLowerCase();
    const dateBoosts = exp.styles.filter(s => dateCtx.boostStyles.includes(s)).length;
    score += dateBoosts * 1.2;
    const dateAvoids = exp.styles.filter(s => dateCtx.avoidStyles.includes(s)).length;
    score -= dateAvoids * 2;

    // Pénalités regex (musées fermés, météo…)
    for (const re of dateCtx.penalize) {
      if (re.test(text)) { score -= 10; break; }
    }
    // Boosts regex (saison, jour spécifique)
    for (const re of dateCtx.boost) {
      if (re.test(text)) { score += 2; break; }
    }
  }

  // DIVERSITÉ : pénalité forte pour les expériences déjà utilisées dans un autre programme
  // (assez forte pour battre la quasi-totalité des scores de match)
  if (alreadyUsed && alreadyUsed.has(exp.title)) {
    score -= 15;
  }

  // Aléa pour la variété entre régénérations
  score += Math.random() * 2;

  return score;
}

// =============================================================================
// COMPOSITION D'UN PROGRAMME
// =============================================================================
function composeProgram(dest, programTemplate, userStyles, notesParsed, dateCtx, alreadyUsed = new Set()) {
  const moments = [];
  const usedTitles = new Set();

  for (const period of PERIODS) {
    let candidates = dest.experiences.filter(e =>
      e.period === period && !usedTitles.has(e.title)
    );
    if (candidates.length === 0) continue;

    // Petit-déj garanti en ouverture
    if (period === 'morning') {
      const breakfasts = candidates.filter(isBreakfast);
      if (breakfasts.length > 0) {
        // PAS de pénalité alreadyUsed pour le petit-déj — un café au comptoir
        // est un rituel matinal qui peut se répéter entre programmes.
        const scored = breakfasts
          .map(e => ({ e, score: scoreExperience(e, userStyles, programTemplate.preferStyles, programTemplate.avoidStyles, notesParsed, dateCtx, null) }))
          .sort((a, b) => b.score - a.score);

        // Boost supplémentaire si l'utilisateur a explicitement demandé un petit-déj local
        if (notesParsed && notesParsed.wantsBreakfast) {
          scored.forEach(s => {
            const text = (s.e.title + ' ' + s.e.description).toLowerCase();
            if (text.includes('local') || text.includes('marché') || text.includes('comptoir') || text.includes('quartier') || text.includes('typique')) {
              s.score += 4;
            }
          });
          scored.sort((a, b) => b.score - a.score);
        }

        const breakfast = scored[0].e;
        usedTitles.add(breakfast.title);
        alreadyUsed.add(breakfast.title);
        moments.push(extractMoment(breakfast));

        // Deuxième moment du matin : monument/musée/marché APRÈS le petit-déj
        const next = candidates.filter(e =>
          e.title !== breakfast.title &&
          e.time > breakfast.time
        );
        if (next.length > 0) {
          const scoredNext = next
            .map(e => ({ e, score: scoreExperience(e, userStyles, programTemplate.preferStyles, programTemplate.avoidStyles, notesParsed, dateCtx, alreadyUsed) }))
            .sort((a, b) => b.score - a.score);
          const top = scoredNext[0].e;
          usedTitles.add(top.title);
          alreadyUsed.add(top.title);
          moments.push(extractMoment(top));
        }
        continue;
      }
    }

    // Autres périodes : un seul moment, le mieux scoré
    const scored = candidates
      .map(e => ({ e, score: scoreExperience(e, userStyles, programTemplate.preferStyles, programTemplate.avoidStyles, notesParsed, dateCtx, alreadyUsed) }))
      .sort((a, b) => b.score - a.score);

    const top = scored[0].e;
    usedTitles.add(top.title);
    alreadyUsed.add(top.title);
    moments.push(extractMoment(top));
  }

  moments.sort((a, b) => a.time.localeCompare(b.time));

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

function extractMoment(exp) {
  return {
    time: exp.time,
    title: exp.title,
    description: exp.description,
    location: exp.location,
    styles: exp.styles,
    budget: exp.budget
  };
}

// =============================================================================
// SÉLECTION DE DESTINATIONS
// =============================================================================
function pickBestDestinations(userStyles, n = 3) {
  if (userStyles.length === 0) {
    return shuffle([...allDestinations]).slice(0, n);
  }
  const scored = allDestinations.map(dest => {
    const totalMatches = dest.experiences.reduce((sum, exp) =>
      sum + exp.styles.filter(s => userStyles.includes(s)).length, 0
    );
    return { dest, score: totalMatches + Math.random() * 2 };
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

export function composeProposals({ destinationId, styles = [], notes = '', date = null }) {
  const notesParsed = parseNotes(notes);
  const dateCtx = parseDateContext(date);
  const allBoostedStyles = [...new Set([
    ...styles,
    ...notesParsed.boostStyles,
    ...dateCtx.boostStyles
  ])];

  // CAS 1 — Destination choisie : 3 programmes de la même ville, AVEC DIVERSITÉ
  if (destinationId && destinations[destinationId]) {
    const dest = destinations[destinationId];
    const sharedUsed = new Set(); // expériences déjà utilisées → pénalisées dans les suivantes
    return dest.programs.map(programTemplate =>
      composeProgram(dest, programTemplate, allBoostedStyles, notesParsed, dateCtx, sharedUsed)
    );
  }

  // CAS 2 — Surprise : 3 villes différentes, une par programme
  const picks = pickBestDestinations(allBoostedStyles, 3);
  return picks.map(dest => {
    const bestProgram = dest.programs
      .map(p => {
        const overlap = p.preferStyles.filter(s => allBoostedStyles.includes(s)).length;
        const avoidance = p.avoidStyles.filter(s => allBoostedStyles.includes(s)).length;
        return { p, score: overlap - avoidance + Math.random() * 0.5 };
      })
      .sort((a, b) => b.score - a.score)[0].p;
    return composeProgram(dest, bestProgram, allBoostedStyles, notesParsed, dateCtx);
  });
}
