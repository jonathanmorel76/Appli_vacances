import React, { useState, useEffect } from 'react';
import {
  Compass, ArrowRight, ArrowLeft, Sparkles, MapPin,
  Clock, RefreshCw, ChevronDown, Heart, Wallet, X, Calendar, Bus, Shuffle
} from 'lucide-react';
import { composeProposals } from './data/compose.js';
import { allDestinations } from './data/destinations.js';

const TOURISM_STYLES = [
  { id: 'culture',     label: 'Culture',      emoji: '🏛️' },
  { id: 'art',         label: 'Art & Musées', emoji: '🎨' },
  { id: 'gastronomie', label: 'Gastronomie',  emoji: '🍷' },
  { id: 'nature',      label: 'Nature',       emoji: '🌳' },
  { id: 'aventure',    label: 'Aventure',     emoji: '🎢' },
  { id: 'bien-etre',   label: 'Bien-être',    emoji: '🧘' },
  { id: 'shopping',    label: 'Shopping',     emoji: '🛍️' },
  { id: 'nuit',        label: 'Vie nocturne', emoji: '🌃' },
  { id: 'famille',     label: 'Famille',      emoji: '👨‍👩‍👧' },
  { id: 'romantique',  label: 'Romantique',   emoji: '💕' },
  { id: 'insolite',    label: 'Insolite',     emoji: '📸' },
  { id: 'spectacles',  label: 'Spectacles',   emoji: '🎭' }
];

const STORAGE_KEY = 'echappee.saved.v1';

const formatDateShort = (iso) => {
  if (!iso) return '';
  return new Date(iso + 'T12:00:00').toLocaleDateString('fr-FR', {
    weekday: 'short', day: 'numeric', month: 'short'
  });
};
const todayIso = () => new Date().toISOString().split('T')[0];
const addDays = (n) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().split('T')[0];
};
const nextSaturday = () => {
  const d = new Date();
  const diff = (6 - d.getDay() + 7) % 7 || 7;
  d.setDate(d.getDate() + diff);
  return d.toISOString().split('T')[0];
};

export default function App() {
  const [screen, setScreen] = useState('setup');
  const [destinationId, setDestinationId] = useState('');
  const [date, setDate] = useState(addDays(1));
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [notes, setNotes] = useState('');
  const [proposals, setProposals] = useState([]);
  const [saved, setSaved] = useState([]);
  const [error, setError] = useState(null);
  const [expandedIdx, setExpandedIdx] = useState(null);
  const [showSaved, setShowSaved] = useState(false);
  const [loadingDots, setLoadingDots] = useState('');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setSaved(JSON.parse(stored));
    } catch (_) {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(saved)); } catch (_) {}
  }, [saved]);

  useEffect(() => {
    if (screen !== 'loading') return;
    const id = setInterval(() => {
      setLoadingDots(d => d.length >= 3 ? '' : d + '·');
    }, 350);
    return () => clearInterval(id);
  }, [screen]);

  const toggleStyle = (id) => {
    setSelectedStyles(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const generate = () => {
    if (selectedStyles.length === 0) {
      setError("Choisissez au moins une envie pour composer la journée.");
      return;
    }
    setError(null);
    setExpandedIdx(null);
    setScreen('loading');

    setTimeout(() => {
      try {
        const result = composeProposals({
          destinationId,
          styles: selectedStyles,
          notes
        });
        if (!result || result.length === 0) {
          throw new Error("Aucune proposition générée");
        }
        setProposals(result);
        setScreen('results');
      } catch (e) {
        setError(`Impossible de composer la journée : ${e.message}`);
        setScreen('setup');
      }
    }, 700);
  };

  const toggleSave = (proposal) => {
    setSaved(prev => {
      const key = proposal.title + proposal.destination;
      const exists = prev.some(p => p.title + p.destination === key);
      return exists
        ? prev.filter(p => p.title + p.destination !== key)
        : [...prev, { ...proposal, savedAt: date }];
    });
  };

  const isSaved = (proposal) =>
    saved.some(p => p.title + p.destination === proposal.title + proposal.destination);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,800&family=Manrope:wght@300;400;500;600;700&display=swap');

        :root {
          --cream: #F4ECDD;
          --cream-2: #EADFC8;
          --ink: #1A1612;
          --ink-2: #4A3F33;
          --ink-3: #8B7B69;
          --terracotta: #B85230;
          --terracotta-dark: #8E3D22;
          --forest: #3F5641;
          --line: rgba(26, 22, 18, 0.12);
        }

        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }

        .app-root {
          font-family: 'Manrope', system-ui, sans-serif;
          color: var(--ink);
          background: var(--cream);
          background-image:
            radial-gradient(at 15% 12%, rgba(184, 82, 48, 0.07) 0%, transparent 45%),
            radial-gradient(at 88% 78%, rgba(63, 86, 65, 0.08) 0%, transparent 50%),
            radial-gradient(at 50% 100%, rgba(26, 22, 18, 0.04) 0%, transparent 40%);
          min-height: 100vh; min-height: 100dvh;
        }

        .display { font-family: 'Fraunces', serif; font-optical-sizing: auto; letter-spacing: -0.02em; }
        .serif-italic { font-family: 'Fraunces', serif; font-style: italic; font-variation-settings: "SOFT" 100, "WONK" 1; }

        .grain { position: relative; }
        .grain::before {
          content: ''; position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          pointer-events: none; mix-blend-mode: multiply; opacity: 0.5;
        }

        .chip {
          background: rgba(255,255,255,0.5);
          border: 1px solid var(--line);
          transition: all 0.18s ease;
          cursor: pointer;
        }
        .chip:hover { background: rgba(255,255,255,0.85); transform: translateY(-1px); }
        .chip.active { background: var(--ink); color: var(--cream); border-color: var(--ink); }

        .style-card {
          background: rgba(255,255,255,0.55);
          border: 1px solid var(--line);
          transition: all 0.2s ease;
          cursor: pointer; position: relative; overflow: hidden;
        }
        .style-card:hover { transform: translateY(-2px); border-color: var(--ink-3); }
        .style-card.active { background: var(--ink); color: var(--cream); border-color: var(--ink); }
        .style-card.active::after {
          content: '✓'; position: absolute; top: 6px; right: 8px;
          font-size: 12px; color: var(--terracotta); font-weight: 700;
        }

        .input-field {
          background: rgba(255,255,255,0.6);
          border: 1px solid var(--line);
          transition: border 0.18s ease, background 0.18s ease;
        }
        .input-field:focus-within { border-color: var(--ink); background: rgba(255,255,255,0.9); }

        .btn-primary { background: var(--ink); color: var(--cream); transition: all 0.2s ease; }
        .btn-primary:hover { background: var(--terracotta-dark); }
        .btn-primary:disabled { opacity: 0.4; cursor: not-allowed; }

        .btn-ghost {
          background: transparent;
          border: 1px solid var(--line);
          color: var(--ink); transition: all 0.2s ease;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.6); border-color: var(--ink); }

        .proposal-card {
          background: rgba(255,255,255,0.7);
          border: 1px solid var(--line);
          transition: all 0.25s ease;
        }
        .proposal-card:hover { border-color: var(--ink-3); }

        .timeline-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: var(--terracotta);
          box-shadow: 0 0 0 4px rgba(184, 82, 48, 0.15);
        }
        .timeline-line { width: 1px; background: var(--line); flex: 1; min-height: 12px; }

        .tag {
          background: rgba(184, 82, 48, 0.1);
          color: var(--terracotta-dark);
          border: 1px solid rgba(184, 82, 48, 0.2);
        }

        .transport-block {
          background: rgba(63, 86, 65, 0.07);
          border: 1px solid rgba(63, 86, 65, 0.18);
        }

        .fade-in { animation: fadeIn 0.5s ease both; }
        .stagger > * { animation: fadeUp 0.5s ease both; opacity: 0; }
        .stagger > *:nth-child(1) { animation-delay: 0.05s; }
        .stagger > *:nth-child(2) { animation-delay: 0.1s; }
        .stagger > *:nth-child(3) { animation-delay: 0.15s; }
        .stagger > *:nth-child(4) { animation-delay: 0.2s; }
        .stagger > *:nth-child(5) { animation-delay: 0.25s; }
        .stagger > *:nth-child(6) { animation-delay: 0.3s; }
        .stagger > *:nth-child(7) { animation-delay: 0.35s; }
        .stagger > *:nth-child(8) { animation-delay: 0.4s; }
        .stagger > *:nth-child(9) { animation-delay: 0.45s; }
        .stagger > *:nth-child(10) { animation-delay: 0.5s; }
        .stagger > *:nth-child(11) { animation-delay: 0.55s; }
        .stagger > *:nth-child(12) { animation-delay: 0.6s; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        .spin-slow { animation: spin-slow 4s linear infinite; }

        .divider-fancy { display: flex; align-items: center; gap: 12px; color: var(--ink-3); }
        .divider-fancy::before, .divider-fancy::after { content: ''; flex: 1; height: 1px; background: var(--line); }

        textarea, input, select { font-family: 'Manrope', sans-serif; }
        textarea:focus, input:focus, select:focus { outline: none; }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.3); cursor: pointer; }

        .heart-saved { color: var(--terracotta); fill: var(--terracotta); }
        .modal-backdrop { background: rgba(26, 22, 18, 0.4); backdrop-filter: blur(4px); }
      `}</style>

      <div className="app-root grain">
        <header className="px-5 pt-6 pb-2 max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass size={20} className="spin-slow" style={{ color: 'var(--terracotta)' }} />
            <span className="display text-xl font-semibold tracking-tight">Échappée</span>
          </div>
          <button
            onClick={() => setShowSaved(true)}
            className="btn-ghost rounded-full px-3 py-1.5 text-xs font-medium flex items-center gap-1.5"
          >
            <Heart size={13} />
            <span>{saved.length}</span>
          </button>
        </header>

        {screen === 'setup' && (
          <main className="max-w-3xl mx-auto px-5 pt-4 pb-20 fade-in">
            <div className="mb-8">
              <p className="serif-italic text-sm mb-3" style={{ color: 'var(--terracotta)' }}>— votre concierge de voyage</p>
              <h1 className="display text-4xl sm:text-5xl font-semibold leading-[1.05] mb-4">
                Quelle journée<br />
                <span className="serif-italic font-normal">envisagez-vous ?</span>
              </h1>
              <p className="text-sm sm:text-base max-w-md" style={{ color: 'var(--ink-2)' }}>
                Composez vos envies. Nous tracerons trois itinéraires distincts, du matin au soir.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="display text-xs uppercase tracking-[0.2em] font-medium mb-3" style={{ color: 'var(--ink-3)' }}>01 — Quand</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                <button onClick={() => setDate(todayIso())} className={`chip rounded-full px-4 py-2 text-sm font-medium ${date === todayIso() ? 'active' : ''}`}>Aujourd'hui</button>
                <button onClick={() => setDate(addDays(1))} className={`chip rounded-full px-4 py-2 text-sm font-medium ${date === addDays(1) ? 'active' : ''}`}>Demain</button>
                <button onClick={() => setDate(nextSaturday())} className={`chip rounded-full px-4 py-2 text-sm font-medium ${date === nextSaturday() ? 'active' : ''}`}>Samedi prochain</button>
              </div>
              <div className="input-field rounded-xl px-4 py-3 flex items-center gap-3">
                <Calendar size={16} style={{ color: 'var(--ink-3)' }} />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="bg-transparent text-sm flex-1 border-0" style={{ color: 'var(--ink)' }} />
                <span className="serif-italic text-xs hidden sm:inline" style={{ color: 'var(--ink-3)' }}>{formatDateShort(date)}</span>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="display text-xs uppercase tracking-[0.2em] font-medium mb-3" style={{ color: 'var(--ink-3)' }}>02 — Où</h2>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setDestinationId('')}
                  className={`chip rounded-full px-4 py-2 text-sm font-medium flex items-center gap-1.5 ${destinationId === '' ? 'active' : ''}`}
                >
                  <Shuffle size={13} />
                  Surprise-moi
                </button>
                {allDestinations.map(d => (
                  <button
                    key={d.id}
                    onClick={() => setDestinationId(d.id)}
                    className={`chip rounded-full px-4 py-2 text-sm font-medium ${destinationId === d.id ? 'active' : ''}`}
                  >
                    {d.name}
                  </button>
                ))}
              </div>
              <p className="serif-italic text-xs mt-2" style={{ color: 'var(--ink-3)' }}>
                {destinationId
                  ? `Trois variations pour ${allDestinations.find(d => d.id === destinationId)?.name}.`
                  : 'Trois villes différentes selon vos envies.'}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="display text-xs uppercase tracking-[0.2em] font-medium mb-3" style={{ color: 'var(--ink-3)' }}>
                03 — Vos envies <span className="lowercase normal-case opacity-70">(plusieurs possibles)</span>
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 stagger">
                {TOURISM_STYLES.map(style => (
                  <button
                    key={style.id}
                    onClick={() => toggleStyle(style.id)}
                    className={`style-card rounded-xl p-3 flex flex-col items-center gap-1.5 ${selectedStyles.includes(style.id) ? 'active' : ''}`}
                  >
                    <span className="text-2xl">{style.emoji}</span>
                    <span className="text-[11px] font-medium text-center leading-tight">{style.label}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="display text-xs uppercase tracking-[0.2em] font-medium mb-3" style={{ color: 'var(--ink-3)' }}>
                04 — Notes <span className="lowercase normal-case opacity-70">(facultatif)</span>
              </h2>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Avec mes enfants, plutôt à pied, budget serré, j'évite les foules…"
                rows={3}
                className="input-field rounded-xl px-4 py-3 text-sm w-full resize-none placeholder:opacity-50"
                style={{ color: 'var(--ink)' }}
              />
              <p className="serif-italic text-xs mt-2" style={{ color: 'var(--ink-3)' }}>
                Mots-clés détectés : <span className="opacity-70">enfants, budget, calme, marche, romantique, pluie, soleil…</span>
              </p>
            </section>

            {error && (
              <div className="rounded-xl px-4 py-3 mb-4 text-sm" style={{ background: 'rgba(184, 82, 48, 0.1)', color: 'var(--terracotta-dark)', border: '1px solid rgba(184, 82, 48, 0.3)' }}>
                {error}
              </div>
            )}

            <button
              onClick={generate}
              disabled={selectedStyles.length === 0}
              className="btn-primary rounded-full w-full py-4 px-6 flex items-center justify-center gap-2 font-medium text-base"
            >
              <Sparkles size={16} />
              <span>Composer ma journée</span>
              <ArrowRight size={16} />
            </button>
            <p className="text-center text-xs mt-3 serif-italic" style={{ color: 'var(--ink-3)' }}>
              Trois propositions vraiment différentes, instantanément, hors-ligne.
            </p>
          </main>
        )}

        {screen === 'loading' && (
          <main className="max-w-3xl mx-auto px-5 py-20 flex flex-col items-center text-center fade-in" style={{ minHeight: '60vh', justifyContent: 'center' }}>
            <Compass size={56} className="spin-slow mb-6" style={{ color: 'var(--terracotta)' }} />
            <h2 className="display text-3xl sm:text-4xl font-semibold mb-2">
              Nous composons<br />
              <span className="serif-italic font-normal">votre journée{loadingDots}</span>
            </h2>
            <p className="text-sm max-w-sm mt-3" style={{ color: 'var(--ink-2)' }}>
              Sélection des moments, calage des horaires, vérification du tempo.
            </p>
          </main>
        )}

        {screen === 'results' && (
          <main className="max-w-3xl mx-auto px-5 pt-2 pb-20 fade-in">
            <div className="flex items-center justify-between mb-6">
              <button onClick={() => setScreen('setup')} className="btn-ghost rounded-full px-3 py-1.5 text-xs font-medium flex items-center gap-1.5">
                <ArrowLeft size={13} /> Modifier
              </button>
              <button onClick={generate} className="btn-ghost rounded-full px-3 py-1.5 text-xs font-medium flex items-center gap-1.5">
                <RefreshCw size={13} /> Régénérer
              </button>
            </div>

            <div className="mb-8">
              <p className="serif-italic text-sm mb-2" style={{ color: 'var(--terracotta)' }}>— pour {formatDateShort(date)}</p>
              <h1 className="display text-3xl sm:text-4xl font-semibold leading-[1.1]">
                Trois<br />
                <span className="serif-italic font-normal">échappées possibles.</span>
              </h1>
            </div>

            <div className="space-y-5 stagger">
              {proposals.map((p, i) => (
                <ProposalCard
                  key={i}
                  proposal={p}
                  index={i}
                  expanded={expandedIdx === i}
                  onToggle={() => setExpandedIdx(expandedIdx === i ? null : i)}
                  saved={isSaved(p)}
                  onSave={() => toggleSave(p)}
                />
              ))}
            </div>

            <div className="divider-fancy text-xs uppercase tracking-[0.2em] mt-12 mb-6 display">
              <span>fin de la sélection</span>
            </div>

            <button onClick={generate} className="btn-ghost rounded-full w-full py-3 px-6 flex items-center justify-center gap-2 font-medium text-sm">
              <RefreshCw size={14} />
              <span>Trois autres propositions</span>
            </button>
          </main>
        )}

        {showSaved && (
          <div className="fixed inset-0 z-50 modal-backdrop flex items-end sm:items-center justify-center p-0 sm:p-5 fade-in" onClick={() => setShowSaved(false)}>
            <div
              className="w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl border max-h-[80vh] overflow-y-auto"
              style={{ borderColor: 'var(--line)', background: '#F4ECDD' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: 'var(--line)' }}>
                <h3 className="display text-xl font-semibold">Vos favoris</h3>
                <button onClick={() => setShowSaved(false)} className="btn-ghost rounded-full p-2"><X size={16} /></button>
              </div>
              <div className="p-5">
                {saved.length === 0 ? (
                  <p className="text-sm serif-italic text-center py-8" style={{ color: 'var(--ink-3)' }}>
                    Aucun favori pour l'instant. Touchez le cœur sur un programme pour le garder.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {saved.map((p, i) => (
                      <div key={i} className="proposal-card rounded-xl p-4">
                        <p className="text-[10px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--ink-3)' }}>
                          {formatDateShort(p.savedAt)} · {p.destination}
                        </p>
                        <h4 className="display text-lg font-semibold leading-tight mb-1">{p.title}</h4>
                        <p className="serif-italic text-sm" style={{ color: 'var(--ink-2)' }}>{p.vibe}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <footer className="text-center py-6 text-[11px] serif-italic" style={{ color: 'var(--ink-3)' }}>
          Échappée · composé avec attention · hors-ligne
        </footer>
      </div>
    </>
  );
}

function ProposalCard({ proposal, index, expanded, onToggle, saved, onSave }) {
  return (
    <article className="proposal-card rounded-2xl p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          <div className="flex items-baseline gap-3 mb-1 flex-wrap">
            <span className="display text-xs font-medium" style={{ color: 'var(--terracotta)' }}>
              Nº {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-[11px] uppercase tracking-[0.15em]" style={{ color: 'var(--ink-3)' }}>
              {proposal.destination}
            </span>
          </div>
          <h3 className="display text-2xl sm:text-[28px] font-semibold leading-[1.1] mb-2">
            {proposal.title}
          </h3>
          <p className="serif-italic text-sm sm:text-base" style={{ color: 'var(--ink-2)' }}>
            {proposal.vibe}
          </p>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onSave(); }}
          className="btn-ghost rounded-full p-2 flex-shrink-0"
          aria-label="Sauvegarder"
        >
          <Heart size={15} className={saved ? 'heart-saved' : ''} />
        </button>
      </div>

      <div className="flex flex-wrap gap-1.5 items-center mb-4">
        {(proposal.highlights || []).map((h, i) => (
          <span key={i} className="tag rounded-full px-2.5 py-1 text-[11px] font-medium">{h}</span>
        ))}
        {proposal.budget && (
          <span className="tag rounded-full px-2.5 py-1 text-[11px] font-medium flex items-center gap-1">
            <Wallet size={10} /> {proposal.budget}
          </span>
        )}
      </div>

      {proposal.bestFor && (
        <p className="text-xs mb-4" style={{ color: 'var(--ink-2)' }}>
          <span className="serif-italic">Pour : </span>{proposal.bestFor}
        </p>
      )}

      <button
        onClick={onToggle}
        className="btn-ghost rounded-full px-4 py-2 text-xs font-medium flex items-center gap-1.5 w-full sm:w-auto justify-center"
      >
        <Clock size={13} />
        <span>{expanded ? 'Réduire' : 'Voir le déroulé'}</span>
        <ChevronDown size={13} className="transition-transform" style={{ transform: expanded ? 'rotate(180deg)' : 'none' }} />
      </button>

      {expanded && (
        <div className="mt-5 pt-5 border-t fade-in" style={{ borderColor: 'var(--line)' }}>
          <ol className="space-y-0">
            {(proposal.moments || []).map((m, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex flex-col items-center pt-1.5">
                  <div className="timeline-dot" />
                  {i < (proposal.moments.length - 1) && <div className="timeline-line" style={{ minHeight: '60px' }} />}
                </div>
                <div className="flex-1 pb-5">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="display text-sm font-semibold" style={{ color: 'var(--terracotta)' }}>{m.time}</span>
                    <h4 className="font-semibold text-sm">{m.title}</h4>
                  </div>
                  <p className="text-[13px] mb-1.5 leading-relaxed" style={{ color: 'var(--ink-2)' }}>{m.description}</p>
                  {m.location && (
                    <p className="text-[11px] flex items-center gap-1" style={{ color: 'var(--ink-3)' }}>
                      <MapPin size={10} /> <span>{m.location}</span>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>

          {proposal.transport && (
            <div className="transport-block rounded-xl p-4 mt-2">
              <div className="flex items-center gap-2 mb-2">
                <Bus size={14} style={{ color: 'var(--forest)' }} />
                <span className="display text-xs uppercase tracking-[0.15em] font-semibold" style={{ color: 'var(--forest)' }}>
                  Transport · bon à savoir
                </span>
              </div>
              <p className="text-[13px] mb-2 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                {proposal.transport.summary}
              </p>
              {proposal.transport.tips && proposal.transport.tips.length > 0 && (
                <ul className="text-[12px] space-y-1" style={{ color: 'var(--ink-2)' }}>
                  {proposal.transport.tips.map((tip, i) => (
                    <li key={i} className="flex gap-2">
                      <span style={{ color: 'var(--forest)' }}>›</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
