// =============================================================================
// CATALOGUE DES DESTINATIONS — Échappée
// Tout est curé à la main. Pas d'API, pas de coût, fonctionne hors-ligne.
// Pour ajouter une ville : copiez un bloc, gardez la même structure.
// =============================================================================

// Périodes possibles : 'morning' (06–11h), 'midday' (11–14h),
//                     'afternoon' (14–18h), 'evening' (18–22h), 'night' (22h+)

// Styles autorisés (doivent matcher TOURISM_STYLES dans App.jsx) :
// culture, art, gastronomie, nature, aventure, bien-etre, shopping,
// nuit, famille, romantique, insolite, spectacles

export const destinations = {

  // ─────────────────────────────────────────────────────────────── PARIS ──
  paris: {
    id: 'paris',
    name: 'Paris',
    region: 'Île-de-France',
    country: 'France',
    transport: {
      summary: "Métro et RER omniprésents, Vélib' et marche pour le centre.",
      tips: [
        "Carte Navigo Easy ou tickets t+ en carnet",
        "Vélib' (vélos mécaniques et électriques) pour les beaux jours",
        "Évitez la voiture intra-périphérique : zones piétonnes et bouchons"
      ]
    },
    programs: [
      {
        tone: 'doux',
        title: 'Paris au ralenti',
        vibe: "Une journée flâneuse, du café croissant à la lumière dorée des berges.",
        bestFor: "Pour ceux qui préfèrent savourer plutôt que cocher.",
        highlights: ['Flânerie', 'Lumière douce', 'Bistrots'],
        preferStyles: ['bien-etre', 'culture', 'romantique', 'gastronomie'],
        avoidStyles: ['nuit', 'aventure']
      },
      {
        tone: 'vibrant',
        title: 'Paris grand format',
        vibe: "De l'effervescence du marché à la nuit cuivrée des rooftops, sans temps mort.",
        bestFor: "Pour les explorateurs qui veulent tout voir, tout goûter.",
        highlights: ['Tempo soutenu', 'Toits & terrasses', 'Bonnes tables'],
        preferStyles: ['gastronomie', 'shopping', 'nuit', 'spectacles'],
        avoidStyles: []
      },
      {
        tone: 'initie',
        title: "L'autre Paris",
        vibe: "Adresses confidentielles, ateliers de quartier et instants à contre-courant.",
        bestFor: "Pour les curieux qui veulent voir derrière la carte postale.",
        highlights: ['Off-the-beaten', 'Ateliers', 'Quartiers vivants'],
        preferStyles: ['insolite', 'art', 'culture'],
        avoidStyles: ['shopping']
      }
    ],
    experiences: [
      // MORNING
      { period: 'morning', time: '07:30', title: "Footing sur les berges au lever du jour",
        description: "Brume sur la Seine, péniches qui s'éveillent, lumière rasante sur les ponts. Fin de course à un kiosque pour un café noir.",
        location: "Berges rive gauche, du pont de Sully au pont Alexandre III",
        styles: ['bien-etre','nature'], budget: '€' },
      { period: 'morning', time: '08:00', title: "Café croissant au comptoir",
        description: "Pain au chocolat encore tiède, café serré et brouhaha matinal d'un troquet de quartier. La journée commence comme on aime.",
        location: "Café du Marché, 11e arrondissement",
        styles: ['gastronomie','culture'], budget: '€' },
      { period: 'morning', time: '09:00', title: "Marché aux fleurs de l'Île de la Cité",
        description: "Pavillons de verre, parfums humides de roses et de muguet. Un instant suspendu à deux pas de la Seine.",
        location: "Place Louis-Lépine, 4e",
        styles: ['nature','romantique','insolite'], budget: '€' },
      { period: 'morning', time: '09:30', title: "Le Louvre dès l'ouverture",
        description: "Les premières heures sont les plus calmes : la Victoire de Samothrace pour soi seul, les galeries italiennes encore feutrées.",
        location: "Musée du Louvre, entrée Pyramide",
        styles: ['art','culture'], budget: '€€' },
      { period: 'morning', time: '10:00', title: "Atelier des Lumières, expo immersive",
        description: "Une ancienne fonderie transformée en cathédrale visuelle : Klimt, Van Gogh ou Cézanne projetés sur 10 mètres de hauteur.",
        location: "38 rue Saint-Maur, 11e",
        styles: ['art','insolite','spectacles'], budget: '€€' },

      // MIDDAY
      { period: 'midday', time: '12:00', title: "Déjeuner dans un bistrot du 11e",
        description: "Ardoise du jour, vins nature et tables serrées. Le Paris qui ronronne, le coude sur le zinc.",
        location: "Le Servan ou Clamato, rue Saint-Maur",
        styles: ['gastronomie'], budget: '€€' },
      { period: 'midday', time: '12:30', title: "Pique-nique aux Buttes-Chaumont",
        description: "Pelouses inclinées, faux temple romantique au sommet d'une falaise. Pain Poilâne, fromage, fruits — la simplicité parisienne.",
        location: "Parc des Buttes-Chaumont, 19e",
        styles: ['nature','famille','romantique'], budget: '€' },
      { period: 'midday', time: '13:00', title: "Table d'hôtes secrète du Marais",
        description: "Une cour pavée, une porte sans enseigne, une cuisinière qui sert ce qu'elle a trouvé au marché. Place réservée à l'avance.",
        location: "Quartier du Marais, 4e",
        styles: ['gastronomie','insolite'], budget: '€€€' },

      // AFTERNOON
      { period: 'afternoon', time: '14:30', title: "Centre Pompidou et son panorama",
        description: "Collection moderne du 5e étage, puis terrasse avec vue sur tous les toits de Paris. Le geste architectural qui choquait fait toujours mouche.",
        location: "Place Georges-Pompidou, 4e",
        styles: ['art','culture'], budget: '€€' },
      { period: 'afternoon', time: '15:00', title: "Vélib' le long du canal Saint-Martin",
        description: "Passerelles tournantes, écluses qui s'ouvrent doucement. Pause glace artisanale chez Bachir et lecture sur les berges.",
        location: "Canal Saint-Martin, 10e",
        styles: ['nature','aventure','romantique'], budget: '€' },
      { period: 'afternoon', time: '15:30', title: "Atelier dégustation de chocolat",
        description: "Un maître chocolatier déroule ses fèves comme on parle d'un grand cru : torréfaction, conchage, dégustation aveugle.",
        location: "Rive gauche, 6e arrondissement",
        styles: ['gastronomie','insolite','famille'], budget: '€€' },
      { period: 'afternoon', time: '16:00', title: "Bouquinistes et thé Mariage Frères",
        description: "Boîtes vertes le long de la Seine, pile de livres anciens, puis un Marco Polo dans la salle boisée du Marais.",
        location: "Quais de Seine puis 35 rue du Bourg-Tibourg, 4e",
        styles: ['culture','romantique'], budget: '€€' },
      { period: 'afternoon', time: '16:30', title: "Galeries Lafayette et leur coupole",
        description: "Coupole Art nouveau de 33 mètres, terrasse avec vue à 360° sur l'opéra, le Sacré-Cœur et la Tour Eiffel. Gratuit.",
        location: "40 boulevard Haussmann, 9e",
        styles: ['shopping','culture'], budget: '€€' },

      // EVENING
      { period: 'evening', time: '18:30', title: "Apéro sur une péniche-bar",
        description: "Vue rasante sur la Seine, planche de charcuterie, pet-nat frais. Le soleil descend derrière la Conciergerie.",
        location: "Quai d'Austerlitz ou port Debilly",
        styles: ['romantique','gastronomie','nuit'], budget: '€€' },
      { period: 'evening', time: '19:00', title: "Dîner dans une cave à manger",
        description: "Ardoise courte, vins vivants, cuisine des saisons. Adresses qui changent souvent — demandez aux locaux.",
        location: "Quartier du Sentier ou République",
        styles: ['gastronomie','insolite'], budget: '€€' },
      { period: 'evening', time: '20:00', title: "Concert classique à la Sainte-Chapelle",
        description: "Vivaldi sous 600 mètres carrés de vitraux du XIIIe siècle, l'acoustique intime d'un écrin de pierre.",
        location: "8 boulevard du Palais, 1er",
        styles: ['culture','romantique','spectacles'], budget: '€€€' },
      { period: 'evening', time: '20:30', title: "Spectacle d'humour à la Nouvelle Seine",
        description: "Une péniche-théâtre amarrée près de Notre-Dame. Stand-up en français, ambiance complice.",
        location: "Port Saint-Bernard, 5e",
        styles: ['spectacles','nuit'], budget: '€€' },

      // NIGHT
      { period: 'night', time: '22:00', title: "Jazz club à Saint-Germain",
        description: "Caves voûtées du Caveau de la Huchette ou Sunset Sunside. Be-bop, swing, piano-trio jusqu'au petit matin.",
        location: "5 rue de la Huchette ou 60 rue des Lombards",
        styles: ['nuit','culture','spectacles'], budget: '€€' },
      { period: 'night', time: '22:30', title: "Cocktails dans un speakeasy",
        description: "Une pizzeria en façade, une porte cachée, un bar de 30 places à la mixologie pointue. Le Paris des initiés.",
        location: "Le Mary Celeste, 3e ou Le Comptoir Général",
        styles: ['nuit','insolite'], budget: '€€' },
      { period: 'night', time: '23:00', title: "Tour Eiffel scintillante depuis le Trocadéro",
        description: "À l'heure pile, les lumières dansent pendant cinq minutes. Le moment carte postale qui marche toujours.",
        location: "Place du Trocadéro, 16e",
        styles: ['romantique','famille'], budget: '€' }
    ]
  },

  // ─────────────────────────────────────────────────────────────── LYON ──
  lyon: {
    id: 'lyon',
    name: 'Lyon',
    region: "Auvergne-Rhône-Alpes",
    country: 'France',
    transport: {
      summary: "Métro, tram, funiculaire et vélos en libre-service couvrent toute la ville.",
      tips: [
        "Pass TCL 24h pour métro/tram/funiculaire",
        "Vélo'v ou marche pour la Presqu'île et le Vieux-Lyon",
        "Funiculaire pour monter à Fourvière (économise 20 min de côte)"
      ]
    },
    programs: [
      {
        tone: 'doux',
        title: 'Lyon en pas feutrés',
        vibe: "Traboules, soyeux, lumière rose des quais à l'heure dorée.",
        bestFor: "Pour qui aime se laisser porter par l'histoire d'une ville.",
        highlights: ['Traboules', 'Vieux-Lyon', 'Soieries'],
        preferStyles: ['culture','romantique','art'],
        avoidStyles: ['nuit']
      },
      {
        tone: 'vibrant',
        title: 'Lyon gourmande',
        vibe: "Halles, bouchons, bistrots de quartier, terrasses des berges.",
        bestFor: "Pour les épicuriens prêts à manger trois fois.",
        highlights: ['Bouchons', 'Halles', 'Marchés'],
        preferStyles: ['gastronomie','shopping'],
        avoidStyles: []
      },
      {
        tone: 'initie',
        title: 'Lyon Croix-Rousse',
        vibe: "Le plateau des canuts, ses ateliers, ses libraires et ses guinguettes.",
        bestFor: "Pour les curieux qui aiment les villages dans la ville.",
        highlights: ['Canuts', 'Ateliers', 'Marché Boulevard'],
        preferStyles: ['insolite','art','culture','nature'],
        avoidStyles: ['shopping']
      }
    ],
    experiences: [
      { period: 'morning', time: '08:00', title: "Marché de la Croix-Rousse",
        description: "Étals du boulevard, fromages saint-marcellin, picodons et le brouhaha des canuts. On pioche, on goûte, on discute.",
        location: "Boulevard de la Croix-Rousse, 4e",
        styles: ['gastronomie','culture'], budget: '€' },
      { period: 'morning', time: '09:00', title: "Traboules du Vieux-Lyon",
        description: "Passages secrets entre les rues, cours Renaissance, escaliers en colimaçon. Carte des traboules ouvertes à l'office du tourisme.",
        location: "Quartier Saint-Jean, 5e",
        styles: ['culture','insolite','romantique'], budget: '€' },
      { period: 'morning', time: '10:00', title: "Basilique de Fourvière",
        description: "Funiculaire depuis Saint-Jean, mosaïques byzantines à l'intérieur, panorama sur la ville et les Alpes par temps clair.",
        location: "8 place de Fourvière, 5e",
        styles: ['culture','romantique'], budget: '€' },
      { period: 'morning', time: '10:30', title: "Musée des Tissus et des Arts décoratifs",
        description: "L'âme soyeuse de Lyon racontée par 2 500 ans de textile : Coptes, soieries lyonnaises, robes de cour.",
        location: "34 rue de la Charité, 2e",
        styles: ['art','culture','insolite'], budget: '€€' },

      { period: 'midday', time: '12:00', title: "Déjeuner dans un bouchon authentique",
        description: "Tablier de sapeur, quenelle de brochet sauce Nantua, tarte aux pralines. Nappe à carreaux et patron qui passe vous saluer.",
        location: "Daniel & Denise, 3 rue Pravaz ou Café des Fédérations",
        styles: ['gastronomie','culture'], budget: '€€' },
      { period: 'midday', time: '12:30', title: "Halles Paul Bocuse",
        description: "Cathédrale de la gastronomie : fromager Mons, charcutier Bobosse, pâtissier Pignol. On compose son déjeuner sur place.",
        location: "102 cours Lafayette, 3e",
        styles: ['gastronomie','shopping'], budget: '€€' },
      { period: 'midday', time: '13:00', title: "Pique-nique au parc de la Tête d'Or",
        description: "117 hectares, lac, roseraie, zoo gratuit. Bancs ombragés et écureuils peu farouches.",
        location: "Boulevard des Belges, 6e",
        styles: ['nature','famille','romantique'], budget: '€' },

      { period: 'afternoon', time: '14:30', title: "Musée des Confluences",
        description: "Architecture cristalline à la pointe de la presqu'île, expos qui croisent sciences et anthropologie.",
        location: "86 quai Perrache, 2e",
        styles: ['culture','art','famille'], budget: '€€' },
      { period: 'afternoon', time: '15:00', title: "Murs peints du quartier des Canuts",
        description: "Le Mur des Canuts, le Mur des Lyonnais. Des trompe-l'œil monumentaux qui racontent la ville à pied.",
        location: "Boulevard des Canuts puis quai Saint-Vincent",
        styles: ['art','insolite','culture'], budget: '€' },
      { period: 'afternoon', time: '15:30', title: "Atelier de soierie aux Canuts",
        description: "Démonstration sur métier Jacquard du XIXe par les artisans de l'Atelier de Soierie. Le geste, le bruit, la lumière du fil.",
        location: "33 rue Romarin, 1er",
        styles: ['insolite','art','culture'], budget: '€' },
      { period: 'afternoon', time: '16:00', title: "Croisière sur la Saône",
        description: "Une heure et demie au fil de l'eau, du parc de la Tête d'Or à la confluence. La ville change de visage vue depuis le quai.",
        location: "Embarcadère quai Claude Bernard",
        styles: ['nature','romantique','famille'], budget: '€€' },

      { period: 'evening', time: '18:30', title: "Apéro sur les berges du Rhône",
        description: "Péniches alignées, transats, planches de cochonnaille et verres de Côtes-du-Rhône. La promenade s'éveille avec le soir.",
        location: "Quais entre pont Lafayette et pont de la Guillotière",
        styles: ['gastronomie','nuit','romantique'], budget: '€' },
      { period: 'evening', time: '19:30', title: "Dîner gastronomique à L'Auberge de Bocuse",
        description: "L'institution étoilée à Collonges-au-Mont-d'Or, à 12 km. Loup en croûte feuilletée, soupe VGE — le grand classique.",
        location: "40 quai de la Plage, Collonges-au-Mont-d'Or",
        styles: ['gastronomie'], budget: '€€€' },
      { period: 'evening', time: '20:00', title: "Concert à La Marquise",
        description: "Une péniche-club amarrée quai Augagneur, programmation indé pointue, son qui claque.",
        location: "Quai Augagneur, 3e",
        styles: ['spectacles','nuit'], budget: '€€' },

      { period: 'night', time: '22:00', title: "Verre dans une cave à vin de la Presqu'île",
        description: "Sélection courte de vins du Rhône et nature, planche d'Auvergne. Conversation jusqu'à la fermeture.",
        location: "Le Vercoquin, rue Pizay ou Le Bouchon des Filles",
        styles: ['nuit','gastronomie'], budget: '€€' },
      { period: 'night', time: '22:30', title: "Soirée jazz au Hot Club",
        description: "Caveau historique du quartier Bellecour, programmation jazz-manouche et bebop tous les soirs.",
        location: "26 rue Lanterne, 1er",
        styles: ['nuit','culture','spectacles'], budget: '€€' }
    ]
  },

  // ────────────────────────────────────────────────────────── MARSEILLE ──
  marseille: {
    id: 'marseille',
    name: 'Marseille',
    region: "Provence-Alpes-Côte d'Azur",
    country: 'France',
    transport: {
      summary: "Métro court mais utile, bus, et la mer comme alternative.",
      tips: [
        "Métro 2 lignes, idéal Vieux-Port → Castellane",
        "Bateau-bus pour traverser le Vieux-Port pour 0,50 €",
        "Navette maritime pour les calanques (Goudes, Callelongue)"
      ]
    },
    programs: [
      {
        tone: 'doux',
        title: 'Marseille bord de mer',
        vibe: "Bouillabaisse, pétanque sur le port, lumière qui ricoche sur l'eau.",
        bestFor: "Pour qui veut se poser face à la grande bleue.",
        highlights: ['Vieux-Port', 'Pointe', 'Bouillabaisse'],
        preferStyles: ['gastronomie','romantique','culture'],
        avoidStyles: ['aventure']
      },
      {
        tone: 'vibrant',
        title: 'Calanques et cabanons',
        vibe: "Du Mucem au Frioul, du sentier des douaniers à la nuit chaude des Catalans.",
        bestFor: "Pour les marcheurs et les nageurs.",
        highlights: ['Calanques', 'Mer', 'Sentiers'],
        preferStyles: ['nature','aventure','bien-etre'],
        avoidStyles: []
      },
      {
        tone: 'initie',
        title: 'Marseille des quartiers',
        vibe: "Le Panier, Noailles, le Cours Julien : ateliers, fresques, marchés multiculturels.",
        bestFor: "Pour les amateurs de villes vivantes et plurielles.",
        highlights: ['Le Panier', 'Cours Ju', 'Street art'],
        preferStyles: ['culture','art','insolite'],
        avoidStyles: ['shopping']
      }
    ],
    experiences: [
      { period: 'morning', time: '08:00', title: "Marché aux poissons du Vieux-Port",
        description: "Les pêcheurs déchargent leur prise du matin, les rougets et les daurades scintillent. Spectacle vivant, gratuit et bruyant.",
        location: "Quai des Belges, Vieux-Port",
        styles: ['culture','insolite','famille'], budget: '€' },
      { period: 'morning', time: '09:00', title: "Notre-Dame de la Garde",
        description: "La Bonne Mère qui veille sur la ville. Mosaïques dorées, ex-voto de marins, panorama qui justifie la grimpette.",
        location: "Rue Fort-du-Sanctuaire, 6e",
        styles: ['culture','romantique'], budget: '€' },
      { period: 'morning', time: '10:00', title: "Mucem et son passage suspendu",
        description: "Architecture-dentelle de Rudy Ricciotti, expos sur les civilisations méditerranéennes, passerelle vers le fort Saint-Jean.",
        location: "1 esplanade J4, 2e",
        styles: ['culture','art','insolite'], budget: '€€' },
      { period: 'morning', time: '10:30', title: "Promenade dans Le Panier",
        description: "Plus vieux quartier de France, ruelles colorées, ateliers de céramistes et savonniers. Le linge sèche aux fenêtres.",
        location: "Quartier Le Panier, 2e",
        styles: ['culture','art','romantique'], budget: '€' },

      { period: 'midday', time: '12:00', title: "Bouillabaisse face à la mer",
        description: "La vraie : poissons servis entiers, soupe à part, croûtons et rouille. Comptez deux heures et un bon appétit.",
        location: "Chez Fonfon ou Le Petit Nice, vallon des Auffes",
        styles: ['gastronomie','romantique'], budget: '€€€' },
      { period: 'midday', time: '12:30', title: "Pique-nique aux Goudes",
        description: "Petit village au bout du monde, criques transparentes, bar à pieds nus. Sandwich pan-bagnat acheté en route.",
        location: "Les Goudes, 8e",
        styles: ['nature','aventure'], budget: '€' },
      { period: 'midday', time: '13:00', title: "Panisses et navettes au Cours Julien",
        description: "Spécialités provençales aux comptoirs des bars du Cours Ju, terrasses au soleil, fresques qui changent chaque mois.",
        location: "Cours Julien, 6e",
        styles: ['gastronomie','culture','insolite'], budget: '€' },

      { period: 'afternoon', time: '14:30', title: "Calanque de Sugiton à pied",
        description: "Une heure de marche depuis Luminy, criques d'eau émeraude entre falaises blanches. Réservation obligatoire l'été.",
        location: "Luminy, parking départ GR98",
        styles: ['nature','aventure','bien-etre'], budget: '€' },
      { period: 'afternoon', time: '15:00', title: "Îles du Frioul en navette",
        description: "20 minutes de bateau depuis le Vieux-Port, plages de galets, criques pour la baignade et fort en ruines à explorer.",
        location: "Embarcadère Vieux-Port, navettes Frioul If Express",
        styles: ['nature','aventure','famille'], budget: '€€' },
      { period: 'afternoon', time: '15:30', title: "Friche Belle de Mai",
        description: "Ancienne manufacture devenue lieu culturel : expos, ateliers d'artistes, skatepark, librairie, terrasse rooftop.",
        location: "41 rue Jobin, 3e",
        styles: ['art','culture','insolite'], budget: '€' },
      { period: 'afternoon', time: '16:00', title: "Savonnerie Marius Fabre",
        description: "Visite gratuite de l'une des dernières savonneries traditionnelles, à 30 min en train vers Salon. Cuves de cuivre, cubes verts.",
        location: "148 avenue Paul-Bourret, Salon-de-Provence",
        styles: ['culture','insolite','shopping'], budget: '€' },

      { period: 'evening', time: '18:30', title: "Apéro pastis à la Plaine",
        description: "Place Jean-Jaurès, terrasses serrées, ricard glaçon, olives noires. La Marseille populaire et vraie.",
        location: "Place Jean-Jaurès, 5e",
        styles: ['gastronomie','culture','nuit'], budget: '€' },
      { period: 'evening', time: '19:00', title: "Coucher de soleil sur la corniche",
        description: "Le fameux banc géant face à la mer, le Pont des Catalans, les nageurs des dernières heures. Lumière dorée garantie.",
        location: "Corniche Kennedy, 7e",
        styles: ['romantique','nature'], budget: '€' },
      { period: 'evening', time: '19:30', title: "Dîner à la criée",
        description: "Pieuvre grillée, oursins de saison, vin blanc de Cassis. Tables en bord de mer, simple et juste.",
        location: "Vallon des Auffes ou Pointe-Rouge",
        styles: ['gastronomie','romantique'], budget: '€€' },

      { period: 'night', time: '22:00', title: "Concert au Cabaret Aléatoire",
        description: "Friche Belle de Mai by night, programmation électro et indé pointue, ambiance défricheuse.",
        location: "41 rue Jobin, 3e",
        styles: ['nuit','spectacles'], budget: '€€' },
      { period: 'night', time: '22:30', title: "Verre face au port à La Caravelle",
        description: "Bar mythique du Vieux-Port, balcon avec vue, jazz live le jeudi. Cocktails simples, ambiance sans chichi.",
        location: "34 quai du Port, 2e",
        styles: ['nuit','romantique','culture'], budget: '€€' }
    ]
  },

  // ─────────────────────────────────────────────────────────── BORDEAUX ──
  bordeaux: {
    id: 'bordeaux',
    name: 'Bordeaux',
    region: "Nouvelle-Aquitaine",
    country: 'France',
    transport: {
      summary: "Tramway impeccable, vélos partout, ville plate idéale à pied.",
      tips: [
        "Pass tramway 24h à 5,50 €",
        "Vélo en libre-service VCub très complet",
        "Bus-bateau BAT3 pour traverser la Garonne"
      ]
    },
    programs: [
      {
        tone: 'doux',
        title: 'Bordeaux ville-musée',
        vibe: "Façades 18e blondes, miroir d'eau et terrasses des Chartrons.",
        bestFor: "Pour qui aime la pierre, le vin et la lumière.",
        highlights: ['Miroir d\'eau', 'Chartrons', 'Façades'],
        preferStyles: ['culture','romantique','gastronomie'],
        avoidStyles: ['nuit','aventure']
      },
      {
        tone: 'vibrant',
        title: 'Vignobles et tables',
        vibe: "Saint-Émilion ou Médoc le matin, dîner gastro le soir.",
        bestFor: "Pour les œnophiles et les gourmets.",
        highlights: ['Vignobles', 'Dégustation', 'Étoilés'],
        preferStyles: ['gastronomie','culture','nature'],
        avoidStyles: []
      },
      {
        tone: 'initie',
        title: 'Bordeaux côté fleuve',
        vibe: "La rive droite, Darwin, les guinguettes, le street art des hangars.",
        bestFor: "Pour ceux qui aiment les friches reconverties.",
        highlights: ['Darwin', 'Rive droite', 'Friches'],
        preferStyles: ['insolite','art','aventure'],
        avoidStyles: ['shopping']
      }
    ],
    experiences: [
      { period: 'morning', time: '08:30', title: "Marché des Capucins",
        description: "Le ventre de Bordeaux : huîtres du bassin d'Arcachon ouvertes au comptoir, vin blanc dès 9h. Le vrai petit-déjeuner local.",
        location: "Place des Capucins",
        styles: ['gastronomie','culture','insolite'], budget: '€' },
      { period: 'morning', time: '09:00', title: "Place de la Bourse et Miroir d'eau",
        description: "Façade royale du XVIIIe reflétée dans deux centimètres d'eau, brume rafraîchissante toutes les 15 minutes. Magique tôt le matin.",
        location: "Quai du Maréchal-Lyautey",
        styles: ['culture','romantique','famille'], budget: '€' },
      { period: 'morning', time: '10:00', title: "Cité du Vin",
        description: "Bâtiment aux courbes liquides, 19 modules ludiques sur le vin du monde, dégustation panoramique au 8e étage incluse.",
        location: "1 esplanade de Pontac",
        styles: ['culture','gastronomie','famille'], budget: '€€' },
      { period: 'morning', time: '10:30', title: "Tour Pey-Berland",
        description: "229 marches pour le panorama le plus complet sur la ville et la cathédrale Saint-André à ses pieds.",
        location: "Place Pey-Berland",
        styles: ['culture','aventure'], budget: '€' },

      { period: 'midday', time: '12:00', title: "Déjeuner dans une bouchon bordelais",
        description: "Entrecôte à la bordelaise, sauce vin rouge et moelle, frites maison. Verre de Saint-Émilion au comptoir.",
        location: "La Tupina, 6 rue Porte de la Monnaie",
        styles: ['gastronomie','culture'], budget: '€€' },
      { period: 'midday', time: '12:30', title: "Pique-nique au parc Bordelais",
        description: "Allées arborées, étang, mini-zoo gratuit. Détour par la pâtisserie Antoine pour un canelé encore tiède.",
        location: "Rue du Bocage",
        styles: ['nature','famille'], budget: '€' },
      { period: 'midday', time: '13:00', title: "Bistronomie à Darwin",
        description: "Cantine bio dans une caserne militaire reconvertie en éco-quartier alternatif. Skatepark juste à côté.",
        location: "87 quai des Queyries, rive droite",
        styles: ['gastronomie','insolite'], budget: '€€' },

      { period: 'afternoon', time: '14:30', title: "Saint-Émilion vignobles",
        description: "40 minutes en voiture, village classé Unesco, dégustation dans un château et descente dans une cave troglodyte.",
        location: "Saint-Émilion, Gironde",
        styles: ['gastronomie','culture','nature'], budget: '€€€' },
      { period: 'afternoon', time: '15:00', title: "Quartier des Chartrons",
        description: "Rue Notre-Dame et ses antiquaires, ruelles pavées, échoppes à vin et boutiques de créateurs. Adresses qui ne crient pas.",
        location: "Rue Notre-Dame et alentours",
        styles: ['shopping','culture','romantique'], budget: '€€' },
      { period: 'afternoon', time: '15:30', title: "CAPC, art contemporain dans un entrepôt",
        description: "Ancien entrepôt de denrées coloniales transformé en musée. Volumes de cathédrale, expositions audacieuses.",
        location: "7 rue Ferrère",
        styles: ['art','culture','insolite'], budget: '€€' },
      { period: 'afternoon', time: '16:00', title: "Vélo le long de la Garonne",
        description: "Piste cyclable jusqu'au pont Chaban-Delmas, écluses, péniches reconverties. Pause guinguette possible.",
        location: "Quais rive gauche",
        styles: ['nature','aventure','bien-etre'], budget: '€' },

      { period: 'evening', time: '18:30', title: "Apéro à La Cité du Vin terrasse",
        description: "8e étage, vue panoramique sur Bordeaux et la Garonne, dégustation comparée au choix. Le soleil tombe sur les toits.",
        location: "1 esplanade de Pontac",
        styles: ['gastronomie','romantique'], budget: '€€' },
      { period: 'evening', time: '19:30', title: "Dîner étoilé à La Grande Maison",
        description: "Pierre Gagnaire en plein cœur de la ville, cuisine inventive et cave d'exception. Réservation longtemps à l'avance.",
        location: "10 rue Labottière",
        styles: ['gastronomie'], budget: '€€€' },
      { period: 'evening', time: '20:00', title: "Concert au Rocher de Palmer",
        description: "Salle multi-styles à Cenon, rive droite. Programmation jazz, musiques du monde, électro.",
        location: "1 rue Aristide Briand, Cenon",
        styles: ['spectacles','nuit'], budget: '€€' },

      { period: 'night', time: '22:00', title: "Bar à vins place du Parlement",
        description: "Place pavée, vingt cavistes-bars sur 200 mètres, ardoise au verre. On butine, on compare, on discute.",
        location: "Place du Parlement",
        styles: ['nuit','gastronomie'], budget: '€€' },
      { period: 'night', time: '22:30', title: "Iboat, club sur un bateau",
        description: "Cargo amarré aux Bassins à flot, club indé pointu, line-up électro et live nocturnes.",
        location: "Quai Armand-Lalande, Bassin à flot n°1",
        styles: ['nuit','spectacles','insolite'], budget: '€€' }
    ]
  },

  // ────────────────────────────────────────────────────────── LISBONNE ──
  lisbonne: {
    id: 'lisbonne',
    name: 'Lisbonne',
    region: "Lisbonne",
    country: 'Portugal',
    transport: {
      summary: "Métro, tramways jaunes, funiculaires et beaucoup, beaucoup d'escaliers.",
      tips: [
        "Carte Viva Viagem rechargeable (transports en commun)",
        "Tram 28E historique mais bondé : prendre tôt ou tard",
        "Chaussures plates obligatoires : 7 collines et calçada glissante"
      ]
    },
    programs: [
      {
        tone: 'doux',
        title: 'Lisbonne en pastel',
        vibe: "Azulejos, cafés à miradouros, pastéis de nata encore tièdes.",
        bestFor: "Pour les amoureux de la lumière et du tempo lent.",
        highlights: ['Miradouros', 'Azulejos', 'Pastéis'],
        preferStyles: ['culture','romantique','gastronomie'],
        avoidStyles: ['nuit','aventure']
      },
      {
        tone: 'vibrant',
        title: 'Lisbonne d\'eau',
        vibe: "Du Tage à la côte de Cascais, surf, sardines grillées et nuits de fado.",
        bestFor: "Pour ceux qui veulent goûter la mer et la nuit.",
        highlights: ['Côte', 'Sardines', 'Fado'],
        preferStyles: ['nature','aventure','gastronomie','spectacles'],
        avoidStyles: []
      },
      {
        tone: 'initie',
        title: 'Lisbonne authentique',
        vibe: "Alfama et Mouraria, fado vadio dans des tascas, ateliers d'artisans.",
        bestFor: "Pour entendre l'âme de la ville chuchotée dans les ruelles.",
        highlights: ['Alfama', 'Tasca', 'Fado vadio'],
        preferStyles: ['insolite','culture','art'],
        avoidStyles: ['shopping']
      }
    ],
    experiences: [
      { period: 'morning', time: '08:00', title: "Café et pastel de nata à Belém",
        description: "Pâte feuilletée caramélisée, crème vanille brûlée, café noir au comptoir. La queue mythique vaut l'attente.",
        location: "Pastéis de Belém, Rua de Belém 84",
        styles: ['gastronomie','culture'], budget: '€' },
      { period: 'morning', time: '09:00', title: "Monastère des Jerónimos",
        description: "Manuélin flamboyant, cloître à colonnes torsadées, tombeau de Vasco de Gama. Lever tôt pour éviter la file.",
        location: "Praça do Império, Belém",
        styles: ['culture','art','romantique'], budget: '€€' },
      { period: 'morning', time: '10:00', title: "Tram 28 jusqu'à Graça",
        description: "Le tramway jaune cliquetant grimpe les ruelles, traverse Alfama, débouche sur le miradouro da Graça pour la vue.",
        location: "Départ Praça Martim Moniz",
        styles: ['culture','romantique','insolite'], budget: '€' },
      { period: 'morning', time: '10:30', title: "Musée national de l'azulejo",
        description: "Couvent du XVIe siècle dédié à 500 ans de céramique portugaise, cloître bleu lumineux, panorama de Lisbonne en azulejos.",
        location: "Rua da Madre de Deus 4",
        styles: ['art','culture','insolite'], budget: '€€' },

      { period: 'midday', time: '12:00', title: "Bifana et imperial à Tasca",
        description: "Sandwich de porc mariné, bière Sagres pression, comptoir en formica. La cantine populaire dans toute sa splendeur.",
        location: "Tasca da Esquina, Campo de Ourique",
        styles: ['gastronomie','culture'], budget: '€' },
      { period: 'midday', time: '12:30', title: "Time Out Market",
        description: "Halle gastronomique avec 26 chefs lisboètes, du chouriço grillé à la pâtisserie de José Avillez. Tables communes.",
        location: "Avenida 24 de Julho 49",
        styles: ['gastronomie','famille','shopping'], budget: '€€' },
      { period: 'midday', time: '13:00', title: "Sardines grillées à Cascais",
        description: "30 min en train vers la côte, restaurants au-dessus de la baie, sardines fraîches grillées au charbon, vinho verde glacé.",
        location: "Mar do Inferno, Av. Rei Humberto II de Itália",
        styles: ['gastronomie','nature','romantique'], budget: '€€' },

      { period: 'afternoon', time: '14:30', title: "Belvédères de l'Alfama",
        description: "Santa Luzia, Portas do Sol, Senhora do Monte. Les trois plus belles vues de la ville à la suite, escaliers compris.",
        location: "Alfama / Graça",
        styles: ['romantique','culture','aventure'], budget: '€' },
      { period: 'afternoon', time: '15:00', title: "Plage de Carcavelos surf",
        description: "Cours d'initiation au surf à 25 minutes du centre, école sur la plage, combinaison et planche fournies.",
        location: "Praia de Carcavelos, Cascais",
        styles: ['aventure','nature','bien-etre'], budget: '€€' },
      { period: 'afternoon', time: '15:30', title: "LX Factory, friche créative",
        description: "Ancienne usine textile transformée en village d'ateliers, librairie Ler Devagar, boutiques de design portugais.",
        location: "Rua Rodrigues de Faria 103",
        styles: ['art','shopping','insolite'], budget: '€' },
      { period: 'afternoon', time: '16:00', title: "Sintra et Pena Palace",
        description: "40 minutes en train, palais romantique multicolore perché sur la sierra. Forêt enchantée, microclimat humide.",
        location: "Sintra, ligne CP depuis Rossio",
        styles: ['culture','nature','romantique'], budget: '€€' },

      { period: 'evening', time: '18:30', title: "Coucher de soleil au Bairro Alto",
        description: "Miradouro de São Pedro de Alcântara, ginjinha au verre en plastique, le Tage qui devient orange, le château qui s'illumine.",
        location: "Miradouro de São Pedro de Alcântara",
        styles: ['romantique','culture'], budget: '€' },
      { period: 'evening', time: '19:30', title: "Dîner à Bairro Alto puis ginjinha",
        description: "Restaurant à tapas portugais (petiscos), bacalhau à brás, vinho do dão. Ginjinha en digestif au comptoir d'à côté.",
        location: "Quartier Bairro Alto",
        styles: ['gastronomie','culture','nuit'], budget: '€€' },
      { period: 'evening', time: '20:00', title: "Soirée fado à Alfama",
        description: "Petite tasca à 12 places, chanteur, guitare portugaise, lumière de bougie. La saudade en direct, à entendre une fois.",
        location: "Mesa de Frades ou Tasca do Chico",
        styles: ['culture','spectacles','romantique'], budget: '€€€' },

      { period: 'night', time: '22:00', title: "Ginjinha tour du Bairro Alto",
        description: "Les ruelles s'animent, on glisse de bar en bar, ginjinha à 1,50 €, cocktails dans des dés-à-coudre, foule mélangée.",
        location: "Quartier Bairro Alto",
        styles: ['nuit','culture'], budget: '€' },
      { period: 'night', time: '22:30', title: "Lux Frágil, club de John Malkovich",
        description: "Club mythique sur les docks, trois étages, terrasse face au Tage, line-up électro et house pointu.",
        location: "Avenida Infante D. Henrique, Cais da Pedra",
        styles: ['nuit','spectacles','insolite'], budget: '€€' }
    ]
  },

  // ───────────────────────────────────────────────────────────── ROME ──
  rome: {
    id: 'rome',
    name: 'Rome',
    region: "Latium",
    country: 'Italie',
    transport: {
      summary: "Métro limité (3 lignes), bus partout, marche reine pour le centre.",
      tips: [
        "Roma Pass 48h ou 72h pour transports + musées",
        "Centre historique entièrement piéton ou semi-piéton",
        "Évitez la voiture : ZTL et stationnement impossible"
      ]
    },
    programs: [
      {
        tone: 'doux',
        title: 'Rome lumière dorée',
        vibe: "Cafés sur les places, marche entre baroque et antique, gelato à six heures.",
        bestFor: "Pour ceux qui veulent que chaque coin de rue soit un tableau.",
        highlights: ['Places', 'Baroque', 'Gelato'],
        preferStyles: ['culture','romantique','gastronomie','art'],
        avoidStyles: ['nuit','aventure']
      },
      {
        tone: 'vibrant',
        title: 'Rome impériale',
        vibe: "Du Colisée aux musées du Vatican, marche soutenue et émerveillements en série.",
        bestFor: "Pour les passionnés d'histoire et d'art.",
        highlights: ['Antique', 'Vatican', 'Marche'],
        preferStyles: ['culture','art','aventure'],
        avoidStyles: []
      },
      {
        tone: 'initie',
        title: 'Rome de quartier',
        vibe: "Trastevere, Testaccio, Pigneto : tavernes, marchés, fresques contemporaines.",
        bestFor: "Pour qui veut sentir la Rome qui vit, pas seulement la Rome qui pose.",
        highlights: ['Trastevere', 'Testaccio', 'Tavernes'],
        preferStyles: ['gastronomie','insolite','culture'],
        avoidStyles: ['shopping']
      }
    ],
    experiences: [
      { period: 'morning', time: '07:30', title: "Cappuccino au comptoir Sant'Eustachio",
        description: "Mousse compacte, mélange à l'arôme légendaire, debout au bar comme tous les Romains. 1,30 € et le sourire en prime.",
        location: "Piazza Sant'Eustachio 82",
        styles: ['gastronomie','culture'], budget: '€' },
      { period: 'morning', time: '08:30', title: "Colisée à l'ouverture",
        description: "Premières lueurs sur l'amphithéâtre, foules quasi absentes. Réservation impérative en ligne, créneau 8:30.",
        location: "Piazza del Colosseo",
        styles: ['culture','aventure'], budget: '€€' },
      { period: 'morning', time: '09:30', title: "Forum Romain et Palatin",
        description: "Vestiges arasés où Cicéron a parlé, où César a marché. Le Palatin offre la meilleure vue sur le Forum à ses pieds.",
        location: "Via della Salara Vecchia",
        styles: ['culture','art'], budget: '€€' },
      { period: 'morning', time: '10:00', title: "Musées du Vatican et Sixtine",
        description: "Réservation obligatoire. Galerie des cartes, chambres de Raphaël et le plafond de Michel-Ange en bouquet final.",
        location: "Viale Vaticano",
        styles: ['art','culture'], budget: '€€€' },

      { period: 'midday', time: '12:00', title: "Cacio e pepe à Trastevere",
        description: "Pâtes al dente, pecorino romano fondu et poivre noir. Trois ingrédients, un sommet d'équilibre.",
        location: "Da Enzo al 29 ou Roma Sparita, Trastevere",
        styles: ['gastronomie','culture'], budget: '€€' },
      { period: 'midday', time: '12:30', title: "Marché de Testaccio",
        description: "Marché couvert moderne, comptoirs de street food du quartier le plus authentique : trapizzino, suppli, porchetta.",
        location: "Via Beniamino Franklin",
        styles: ['gastronomie','insolite'], budget: '€' },
      { period: 'midday', time: '13:00', title: "Pizza al taglio Pizzarium",
        description: "Bonci, le Léonard de la pizza romaine. Dix variétés à la part, pâte aérienne, garnitures saisonnières folles.",
        location: "Via della Meloria 43",
        styles: ['gastronomie','insolite'], budget: '€' },

      { period: 'afternoon', time: '14:30', title: "Panthéon et café Tazza d'Oro",
        description: "Oculus de béton de 43 m de diamètre, 2 000 ans d'âge. Café granité ensuite à deux pas, le meilleur de Rome.",
        location: "Piazza della Rotonda",
        styles: ['culture','art','gastronomie'], budget: '€' },
      { period: 'afternoon', time: '15:00', title: "Galerie Borghèse",
        description: "Réservation par créneau de 2 heures. Bernins prodigieux (Apollon et Daphné, Persée), Caravage en série.",
        location: "Piazzale del Museo Borghese 5",
        styles: ['art','culture'], budget: '€€' },
      { period: 'afternoon', time: '15:30', title: "Vélo sur la Via Appia Antica",
        description: "Ancienne voie romaine pavée bordée de tombeaux et de pins parasols. Location de vélos sur place, dimanche fermé aux voitures.",
        location: "Parc régional de l'Appia Antica",
        styles: ['nature','aventure','culture'], budget: '€' },
      { period: 'afternoon', time: '16:00', title: "Rooftop du Castel Sant'Angelo",
        description: "Mausolée d'Hadrien transformé en forteresse, terrasse panoramique sur le Vatican et le Tibre.",
        location: "Lungotevere Castello 50",
        styles: ['culture','romantique','aventure'], budget: '€€' },

      { period: 'evening', time: '18:30', title: "Aperitivo Campo dei Fiori",
        description: "Spritz Aperol, planche de fromages et charcuteries, place vivante avec son marché qui se replie. La Rome qu'on aime.",
        location: "Campo dei Fiori",
        styles: ['gastronomie','romantique','culture'], budget: '€' },
      { period: 'evening', time: '19:30', title: "Dîner à Trastevere",
        description: "Carbonara servie dans une coque de pecorino, vin des Castelli, terrasse pavée qui s'éclaire de lampions.",
        location: "Quartier Trastevere",
        styles: ['gastronomie','romantique','culture'], budget: '€€' },
      { period: 'evening', time: '20:00', title: "Opéra aux Thermes de Caracalla",
        description: "Saison estivale uniquement : opéra en plein air dans des ruines romaines monumentales. Aida ou Tosca sous les étoiles.",
        location: "Viale delle Terme di Caracalla",
        styles: ['spectacles','culture','romantique'], budget: '€€€' },

      { period: 'night', time: '22:00', title: "Glace au Tre Scalini sur Piazza Navona",
        description: "Le Tartufo, boule de chocolat amer enrobée, créée en 1946. Sur la place baroque la plus théâtrale de Rome.",
        location: "Piazza Navona 28",
        styles: ['gastronomie','romantique'], budget: '€' },
      { period: 'night', time: '22:30', title: "Bars du Pigneto",
        description: "Quartier alternatif loin des touristes, bars à vins italiens, cocktails créatifs, ambiance bohème.",
        location: "Via del Pigneto",
        styles: ['nuit','insolite','culture'], budget: '€€' }
    ]
  }

};

// Helpers
export const allDestinations = Object.values(destinations);

export function getDestination(id) {
  return destinations[id];
}
