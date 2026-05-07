# Échappée

> Concierge de voyage personnalisé. PWA installable. **100 % hors-ligne, zéro coût.**

Sélectionnez vos envies pour une journée, et l'app compose trois programmes touristiques distincts du matin au soir, à partir d'un catalogue d'expériences curées (lieux, horaires, infos transport).

![capture](public/icon-512.png)

## Le pari

- **Pas d'API, pas de clé, pas d'abonnement.** Toutes les expériences sont curées en dur dans l'app.
- **Vraie PWA hors-ligne.** Une fois installée, fonctionne dans le métro, dans l'avion, sans réseau.
- **Instantané.** Pas de génération, pas d'attente — la composition est locale.
- **Statique.** Déployable sur n'importe quel hébergeur gratuit (Netlify, Cloudflare Pages, GitHub Pages, Vercel…).

## Stack

- **Vite + React 18** (front)
- **Tailwind CSS v3** (styles)
- **vite-plugin-pwa** (manifest + service worker, installable + offline complet)

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrez l'URL indiquée par Vite (généralement `http://localhost:5173`). C'est tout — aucune variable d'environnement nécessaire.

## Déployer (3 minutes, gratuit)

L'app étant 100 % statique, **n'importe quel hébergeur de fichiers statiques** marche.

### Build de production

```bash
npm run build
```

Les fichiers à déployer sont dans `dist/`.

### Hébergeurs recommandés

| Hébergeur | Comment |
|-----------|---------|
| **Netlify** | Drag & drop du dossier `dist/` sur [app.netlify.com/drop](https://app.netlify.com/drop) |
| **Cloudflare Pages** | Connectez le repo Git, build command `npm run build`, output `dist` |
| **GitHub Pages** | Workflow Actions → déployer `dist/` sur la branche `gh-pages` |
| **Vercel** | `vercel --prod` ou import via [vercel.com/new](https://vercel.com/new) |

### Installer comme PWA

Une fois déployée :
- **iOS Safari** : bouton Partager → "Sur l'écran d'accueil"
- **Android Chrome** : menu ⋮ → "Installer l'application"
- **Desktop Chrome/Edge** : icône d'installation dans la barre d'URL

Première visite avec connexion → toutes les ressources sont mises en cache. Les visites suivantes fonctionnent sans réseau.

## Comment ça marche

Le moteur compose des journées à partir d'un catalogue local :

1. **6 destinations curées** — Paris, Lyon, Marseille, Bordeaux, Lisbonne, Rome.
2. **~17 expériences par ville**, taggées par période (matin/midi/après-midi/soir/nuit) et par style (culture, gastronomie, nature, etc.).
3. **3 tonalités par destination** — *doux*, *vibrant*, *initié* — qui guident le choix des moments.
4. **Score local** : chaque expérience est notée selon les styles choisis + les mots-clés détectés dans vos notes (enfants → famille, budget → €, calme → bien-être…).

### Si vous choisissez une destination

→ trois variations d'une même ville : la version contemplative, la version rythmée, la version off-the-beaten.

### Si vous laissez "Surprise-moi"

→ trois villes différentes choisies pour matcher vos envies, une journée par ville.

## Personnaliser & étendre

| Quoi | Où |
|------|----|
| Ajouter une ville | `src/data/destinations.js` — copiez un bloc, gardez la structure |
| Ajouter une expérience | Ajoutez un objet dans `experiences[]` de la ville concernée |
| Modifier les styles | `src/App.jsx` → `TOURISM_STYLES` (et taggez les expériences en conséquence) |
| Mots-clés des notes | `src/data/compose.js` → `NOTES_KEYWORDS` |
| Couleurs (crème, encre, terracotta) | `src/App.jsx` (variables CSS `--cream`, `--ink`, etc.) |
| Polices | `index.html` (Google Fonts : Fraunces + Manrope) |
| Métadonnées PWA | `vite.config.js` → bloc `manifest` |

### Format d'une expérience

```js
{
  period: 'morning',           // morning | midday | afternoon | evening | night
  time: '09:30',               // heure suggérée
  title: "Titre du moment",
  description: "Deux phrases sensorielles et concrètes.",
  location: "Adresse précise",
  styles: ['culture', 'art'],  // tags qui matchent TOURISM_STYLES
  budget: '€'                  // € | €€ | €€€
}
```

### Format d'une tonalité de programme

```js
{
  tone: 'doux',
  title: 'Paris au ralenti',
  vibe: "Une phrase qui capture l'ambiance.",
  bestFor: "À qui s'adresse ce programme.",
  highlights: ['Tag 1', 'Tag 2', 'Tag 3'],
  preferStyles: ['bien-etre', 'culture'],   // styles boostés
  avoidStyles: ['nuit']                      // styles évités
}
```

## Structure

```
echappee/
├── public/
│   ├── icon.svg, icon-192.png, icon-512.png, icon-512-maskable.png
├── src/
│   ├── data/
│   │   ├── destinations.js   # Le catalogue curé
│   │   └── compose.js        # Moteur de composition local
│   ├── App.jsx               # UI principale
│   ├── main.jsx              # Entrée React
│   └── index.css             # Tailwind + styles custom
├── index.html
├── vite.config.js            # Config Vite + plugin PWA
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Licence

Personnel. Faites-en ce que vous voulez.
