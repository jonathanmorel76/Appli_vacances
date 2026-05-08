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
  },

  // ──────────────────────────────────────────────────────────── ZAGREB ──
  zagreb: {
    id: 'zagreb',
    name: 'Zagreb',
    region: "Zagreb",
    country: 'Croatie',
    transport: {
      summary: "Tramway dense, marche idéale pour le centre, funiculaire entre les deux villes.",
      tips: [
        "Tramway ZET, billet à valider à bord (~0,53 €)",
        "Funiculaire Uspinjača (66 m, le plus court du monde) entre Donji et Gornji Grad",
        "Vélos en libre-service Nextbike pour les grandes distances"
      ]
    },
    programs: [
      {
        tone: 'doux',
        title: 'Zagreb café-rituels',
        vibe: "Terrasses fleuries, marchés colorés et musées intimes à l'abri.",
        bestFor: "Pour qui aime les villes mitteleuropéennes et le tempo viennois.",
        highlights: ['Cafés', 'Marchés', 'Habsbourg'],
        preferStyles: ['culture','romantique','gastronomie','art'],
        avoidStyles: ['nuit','aventure']
      },
      {
        tone: 'vibrant',
        title: 'Zagreb des deux villes',
        vibe: "Ville haute médiévale, ville basse Habsbourg, et la rue Tkalčićeva qui ne dort pas.",
        bestFor: "Pour les explorateurs urbains qui aiment les contrastes.",
        highlights: ['Gornji Grad', 'Donji Grad', 'Tkalčićeva'],
        preferStyles: ['culture','gastronomie','nuit','spectacles'],
        avoidStyles: []
      },
      {
        tone: 'initie',
        title: "Zagreb hors les murs",
        vibe: "Cimetière-cathédrale de Mirogoj, parc Maksimir, ateliers et brocantes.",
        bestFor: "Pour ceux qui cherchent l'âme d'une ville derrière sa carte postale.",
        highlights: ['Mirogoj', 'Maksimir', 'Off-tourist'],
        preferStyles: ['insolite','art','nature','culture'],
        avoidStyles: ['shopping']
      }
    ],
    experiences: [
      { period: 'morning', time: '08:30', title: "Marché Dolac, le ventre de Zagreb",
        description: "Étals couverts d'ombrelles rouges, fruits paysans, fromages de Bjelovar, paprika fumé. Le rendez-vous des cuisiniers de la ville.",
        location: "Place Dolac, Gornji Grad",
        styles: ['gastronomie','culture','famille'], budget: '€' },
      { period: 'morning', time: '09:00', title: "Café au Cogito Coffee",
        description: "Torréfaction locale, baristas qui connaissent leurs producteurs. La tasse parfaite avant l'ascension vers la haute ville.",
        location: "Trg Petra Preradovića 5",
        styles: ['gastronomie','culture'], budget: '€' },
      { period: 'morning', time: '09:30', title: "Place Saint-Marc et son toit en mosaïque",
        description: "Tuiles vernissées dessinant les blasons de Croatie et de Zagreb. Parlement et palais présidentiel se font face en silence.",
        location: "Trg svetog Marka, Gornji Grad",
        styles: ['culture','art','romantique'], budget: '€' },
      { period: 'morning', time: '10:00', title: "Musée des Relations Brisées",
        description: "Une collection mondiale d'objets de ruptures amoureuses, chacun accompagné d'un récit. Concept né à Zagreb, copié partout depuis.",
        location: "Ćirilometodska 2",
        styles: ['art','culture','insolite'], budget: '€€' },
      { period: 'morning', time: '10:30', title: "Cathédrale et tours néogothiques",
        description: "Flèches jumelles de 105 m visibles de toute la ville. Intérieur sombre, vitraux profonds, atmosphère grave.",
        location: "Kaptol 31",
        styles: ['culture','art'], budget: '€' },

      { period: 'midday', time: '12:00', title: "Štrukli au La Štruk",
        description: "La spécialité de Zagreb : pâte fine fourrée au fromage frais, gratinée à la crème. Salée ou sucrée, toujours réconfortante.",
        location: "Skalinska ulica 5",
        styles: ['gastronomie','culture'], budget: '€' },
      { period: 'midday', time: '12:30', title: "Pique-nique au parc Maksimir",
        description: "316 hectares à l'anglaise, lacs, écureuils peu farouches, zoo gratuit pour qui s'y aventure. Un poumon vert oublié des touristes.",
        location: "Maksimirski perivoj",
        styles: ['nature','famille','romantique'], budget: '€' },
      { period: 'midday', time: '13:00', title: "Konoba Didov San, cuisine slavone",
        description: "Čevapi, sarma au chou farci, vin Graševina au pichet. Cuisine roborative dans une salle aux murs de pierre.",
        location: "Mletačka 11",
        styles: ['gastronomie','culture'], budget: '€€' },

      { period: 'afternoon', time: '14:30', title: "Funiculaire Uspinjača",
        description: "66 mètres en 64 secondes, depuis 1893. Le plus court funiculaire au monde, charmant et inutile au sens strict.",
        location: "Tomićeva ulica",
        styles: ['culture','insolite','famille'], budget: '€' },
      { period: 'afternoon', time: '15:00', title: "Galerie Mestrović",
        description: "Atelier-maison du sculpteur croate le plus célèbre, transformé en musée. Volumes monumentaux dans des espaces intimes.",
        location: "Mletačka 8",
        styles: ['art','culture'], budget: '€€' },
      { period: 'afternoon', time: '15:30', title: "Cimetière-jardin de Mirogoj",
        description: "Allées d'arcades en pierre couvertes de lierre, conçues par Bollé en 1879. L'un des plus beaux cimetières d'Europe, paisible.",
        location: "Aleja Hermanna Bollea 27",
        styles: ['insolite','romantique','art'], budget: '€' },
      { period: 'afternoon', time: '16:00', title: "Cafés terrasse Tkalčićeva",
        description: "Rue piétonne à flanc de colline, terrasses serrées, cafés qui s'égayent. Une dolce vita zagrébienne, café après café.",
        location: "Ulica Ivana Tkalčića",
        styles: ['gastronomie','culture','romantique'], budget: '€' },

      { period: 'evening', time: '18:30', title: "Apéro Aperol Cvjetni trg",
        description: "Place Fleurie, terrasses circulaires, étudiants et professeurs mêlés. Le « špica » du week-end, rituel social zagrébien.",
        location: "Trg Petra Preradovića",
        styles: ['gastronomie','culture','nuit'], budget: '€' },
      { period: 'evening', time: '19:30', title: "Dîner gastronomique au Noel",
        description: "Cuisine créative d'un jeune chef étoilé, produits croates revisités, cave pointue de Plešivica et Istrie.",
        location: "Popa Dukljanina 1",
        styles: ['gastronomie'], budget: '€€€' },
      { period: 'evening', time: '20:00', title: "Opéra ou ballet au HNK",
        description: "Théâtre national de 1895, façade jaune impériale, dorures et velours. Programmation classique et exigeante.",
        location: "Trg Republike Hrvatske 15",
        styles: ['spectacles','culture','romantique'], budget: '€€' },

      { period: 'night', time: '22:00', title: "Tournée des bars Tkalčićeva",
        description: "La rue change de visage : bars à craft beer, cocktails, rakija aux fruits. Foule jeune, locale, joyeuse.",
        location: "Tkalčićeva, partie haute",
        styles: ['nuit','culture'], budget: '€' },
      { period: 'night', time: '22:30', title: "Concert intime au Vintage Industrial",
        description: "Salle indé installée dans une ancienne usine, programmation pointue rock, électro, jazz alternatif.",
        location: "Savska cesta 160",
        styles: ['nuit','spectacles','insolite'], budget: '€€' }
    ]
  },

  // ───────────────────────────────────────────────────────────── SPLIT ──
  split: {
    id: 'split',
    name: 'Split',
    region: "Dalmatie centrale",
    country: 'Croatie',
    transport: {
      summary: "Vieille ville 100 % piétonne, bus pour les plages et ferries pour les îles.",
      tips: [
        "Ferries Jadrolinija depuis le port central pour Hvar, Brač, Vis (réservation conseillée l'été)",
        "Bus #37 pour Klis Fortress, #25 pour Salona — gare bus à 50 m du port",
        "Évitez la voiture dans la vieille ville : labyrinthe et zones interdites"
      ]
    },
    programs: [
      {
        tone: 'doux',
        title: 'Split et la pierre dorée',
        vibe: "Palais de Dioclétien, Riva à l'heure dorée, ferries qui glissent vers les îles.",
        bestFor: "Pour qui veut vivre l'antique sans courir.",
        highlights: ['Dioclétien', 'Riva', 'Pierre blanche'],
        preferStyles: ['culture','romantique','gastronomie','art'],
        avoidStyles: ['nuit','aventure']
      },
      {
        tone: 'vibrant',
        title: 'Split entre îles et palais',
        vibe: "Brač ou Hvar le matin, Marjan en milieu d'après-midi, Bačvice à la nuit tombée.",
        bestFor: "Pour les nageurs et marcheurs qui veulent tout faire en un jour.",
        highlights: ['Îles', 'Plages', 'Bateau'],
        preferStyles: ['nature','aventure','gastronomie','nuit'],
        avoidStyles: []
      },
      {
        tone: 'initie',
        title: "Split au-delà du palais",
        vibe: "Marjan, Veli Varoš, Klis et Salona — la ville et son territoire.",
        bestFor: "Pour ceux qui veulent voir Split par ses collines et ses ruines voisines.",
        highlights: ['Marjan', 'Klis', 'Salona'],
        preferStyles: ['nature','culture','insolite'],
        avoidStyles: ['shopping']
      }
    ],
    experiences: [
      { period: 'morning', time: '07:30', title: "Lever de soleil sur la Riva",
        description: "Palmiers se découpant sur l'Adriatique rose, ferries qui appareillent, premier café aux comptoirs encore endormis.",
        location: "Obala Hrvatskog narodnog preporoda",
        styles: ['bien-etre','romantique','nature'], budget: '€' },
      { period: 'morning', time: '08:30', title: "Marché aux poissons Ribarnica",
        description: "Sans mouches, dit la légende : les exhalaisons sulfureuses des thermes voisins les éloignent. Loups, dorades, calmars frais sortis des barques.",
        location: "Kraj Sv. Marije 8",
        styles: ['gastronomie','culture','insolite'], budget: '€' },
      { period: 'morning', time: '09:00', title: "Cathédrale Saint-Domnius",
        description: "Mausolée de Dioclétien transformé en cathédrale au VIIe siècle. Monter au campanile pour la vue, descendre dans la crypte pour le frisson.",
        location: "Kraj Sv. Duje 5",
        styles: ['culture','art','aventure'], budget: '€€' },
      { period: 'morning', time: '09:30', title: "Substructures du palais",
        description: "Salles voûtées sous le palais, intactes depuis 1700 ans. Atmosphère vaguement Game of Thrones (et pour cause, on y a tourné).",
        location: "Sous le Peristyle",
        styles: ['culture','insolite'], budget: '€' },
      { period: 'morning', time: '10:00', title: "Place Peristyle au matin",
        description: "Cœur du palais, colonnes en granit rose d'Égypte, sphinx de 3 500 ans. L'opéra y est joué les soirs d'été.",
        location: "Peristil",
        styles: ['culture','art','romantique'], budget: '€' },

      { period: 'midday', time: '12:00', title: "Pašticada à Veli Varoš",
        description: "Bœuf mariné trois jours dans le vinaigre et le vin doux, servi avec gnocchis maison. Le plat dominical dalmate par excellence.",
        location: "Konoba Marjan ou Konoba Trattoria Bajamonti",
        styles: ['gastronomie','culture'], budget: '€€' },
      { period: 'midday', time: '12:30', title: "Pique-nique sur Bačvice",
        description: "Plage de sable au sud de la ville, eau peu profonde, jeunes locaux qui jouent au picigin (ballon en équilibre). Sandwich peka acheté en route.",
        location: "Plaža Bačvice",
        styles: ['nature','famille','romantique'], budget: '€' },
      { period: 'midday', time: '13:00', title: "Crni rižot à Konoba Matejuška",
        description: "Risotto à l'encre de seiche, rouge profond presque noir, parfum d'iode. Adresse de pêcheurs devenue institution discrète.",
        location: "Tomića stine 3",
        styles: ['gastronomie','romantique'], budget: '€€' },

      { period: 'afternoon', time: '14:30', title: "Promenade colline Marjan",
        description: "Pinède odorante, ermitages creusés dans la falaise, vue à 360° sur Split, les îles et la mer. Comptez deux heures.",
        location: "Park Šuma Marjan",
        styles: ['nature','bien-etre','romantique'], budget: '€' },
      { period: 'afternoon', time: '15:00', title: "Ferry pour Brač et Zlatni Rat",
        description: "Une heure de navigation, puis la fameuse « Corne dorée » qui change de forme avec les courants. Eau cristalline garantie.",
        location: "Embarcadère Split → Bol",
        styles: ['nature','aventure','romantique'], budget: '€€' },
      { period: 'afternoon', time: '15:30', title: "Klis Fortress, vue panoramique",
        description: "Forteresse perchée sur un piton, gardienne des Romains aux Ottomans, Meereen dans Game of Thrones. Vue qui justifie la grimpette.",
        location: "Tvrđava Klis, 13 km de Split",
        styles: ['culture','aventure','insolite'], budget: '€' },
      { period: 'afternoon', time: '16:00', title: "Salona, l'antique capitale",
        description: "Ruines romaines à 8 km, ancienne capitale provinciale de Dalmatie, amphithéâtre dans les herbes hautes. Très peu fréquenté.",
        location: "Solin, près de Split",
        styles: ['culture','art','insolite'], budget: '€' },

      { period: 'evening', time: '18:30', title: "Apéro Aperol sur la Riva",
        description: "Terrasses face aux palmiers et à la mer, ferries éclairés qui rentrent au port. Le crépuscule dalmate dans toute sa douceur.",
        location: "Riva, partie centrale",
        styles: ['romantique','gastronomie','nuit'], budget: '€' },
      { period: 'evening', time: '19:30', title: "Dîner créatif à Bokeria",
        description: "Ancienne épicerie reconvertie en gastrobar, cuisine ouverte, ardoise au gré des arrivages. La modernité dalmate.",
        location: "Domaldova 8",
        styles: ['gastronomie'], budget: '€€€' },
      { period: 'evening', time: '20:00', title: "Concert klapa dans la cathédrale",
        description: "Chant a cappella dalmate inscrit à l'Unesco, voix masculines superposées qui résonnent sous les voûtes romanes.",
        location: "Cathédrale Saint-Domnius",
        styles: ['culture','spectacles','romantique'], budget: '€€' },

      { period: 'night', time: '22:00', title: "Marvlvs Library Jazz Bar",
        description: "Bibliothèque-bar dans un ancien palais, livres anciens, jazz live, cocktails à base de rakija. L'élégance de Split la nuit.",
        location: "Papalićeva 4",
        styles: ['nuit','culture','romantique'], budget: '€€' },
      { period: 'night', time: '22:30', title: "Bačvice plage-clubs",
        description: "La plage se transforme en chapelet de bars-clubs en bord de mer, terrasses sur le sable, musique jusqu'à l'aube.",
        location: "Plaža Bačvice",
        styles: ['nuit','spectacles'], budget: '€€' }
    ]
  },

  // ───────────────────────────────────────────────────────── DUBROVNIK ──
  dubrovnik: {
    id: 'dubrovnik',
    name: 'Dubrovnik',
    region: "Dalmatie du sud",
    country: 'Croatie',
    transport: {
      summary: "Vieille ville 100 % piétonne, bus pour le reste, téléphérique pour le panorama.",
      tips: [
        "Bus #1A/#3/#8 entre Pile Gate et le port (~1,80 €)",
        "Téléphérique pour Mont Srđ depuis la porte Buža (vue spectaculaire)",
        "Dubrovnik Card 1/3/7 jours pour transports + remparts + musées (rentable dès 2 visites)"
      ]
    },
    programs: [
      {
        tone: 'doux',
        title: 'Dubrovnik perle baroque',
        vibe: "Remparts au lever du jour, Stradun en marbre, ruelles à arpenter lentement.",
        bestFor: "Pour qui veut savourer la pierre dorée et la mer Adriatique.",
        highlights: ['Remparts', 'Stradun', 'Marbre'],
        preferStyles: ['culture','romantique','art'],
        avoidStyles: ['nuit']
      },
      {
        tone: 'vibrant',
        title: "Dubrovnik et l'Adriatique",
        vibe: "Kayak autour des remparts, Lokrum au déjeuner, Mont Srđ pour le coucher.",
        bestFor: "Pour qui veut goûter la mer en plus des pierres.",
        highlights: ['Kayak', 'Lokrum', 'Mont Srđ'],
        preferStyles: ['aventure','nature','gastronomie'],
        avoidStyles: []
      },
      {
        tone: 'initie',
        title: "Dubrovnik côté locals",
        vibe: "Cavtat, Konavle viticole, Buža bar dans la falaise, ruelles secondaires.",
        bestFor: "Pour qui veut échapper aux foules de la haute saison.",
        highlights: ['Cavtat', 'Konavle', 'Buža'],
        preferStyles: ['insolite','nature','gastronomie'],
        avoidStyles: ['shopping']
      }
    ],
    experiences: [
      { period: 'morning', time: '07:30', title: "Remparts à l'ouverture",
        description: "Deux kilomètres de marche en hauteur, mer turquoise d'un côté, tuiles ocres de l'autre. Foules absentes avant 9 h.",
        location: "Entrée Pile Gate, vieille ville",
        styles: ['culture','romantique','aventure'], budget: '€€' },
      { period: 'morning', time: '08:30', title: "Burek et café local",
        description: "Pâtisserie feuilletée à la viande ou au fromage, café turc serré au comptoir. Le petit-déjeuner balkanique.",
        location: "Mlinar, vieille ville ou Buffet Škola",
        styles: ['gastronomie','culture'], budget: '€' },
      { period: 'morning', time: '09:30', title: "Cathédrale et trésor",
        description: "Reliquaires d'or et de pierreries, Vierges aux visages graves, atmosphère dense et solennelle.",
        location: "Poljana Marina Držića",
        styles: ['culture','art'], budget: '€' },
      { period: 'morning', time: '10:00', title: "Monastère franciscain",
        description: "Cloître roman aux 60 chapiteaux tous différents. Pharmacie en activité depuis 1317, troisième plus ancienne d'Europe.",
        location: "Stradun 2",
        styles: ['culture','insolite'], budget: '€' },
      { period: 'morning', time: '10:30', title: "Stradun désertée",
        description: "Marbre poli par cinq siècles de pas, façades baroques rosées dans la lumière oblique. La rue mythique avant l'affluence.",
        location: "Stradun, vieille ville",
        styles: ['culture','romantique'], budget: '€' },

      { period: 'midday', time: '12:00', title: "Déjeuner au Proto",
        description: "Restaurant historique fréquenté par Tito et Burton, terrasse fleurie, poisson grillé sur les braises. La maison ne triche pas.",
        location: "Široka 1",
        styles: ['gastronomie','romantique','culture'], budget: '€€€' },
      { period: 'midday', time: '12:30', title: "Pique-nique sur Lokrum",
        description: "Quinze minutes de bateau, paons en liberté, monastère bénédictin du XIe, plage rocheuse pour la baignade.",
        location: "Île de Lokrum",
        styles: ['nature','aventure','famille'], budget: '€€' },
      { period: 'midday', time: '13:00', title: "Huîtres de Mali Ston, Pelješac",
        description: "Une heure au nord, dégustation directement chez l'ostréiculteur dans la baie protégée, vin Dingač en accompagnement.",
        location: "Mali Ston, péninsule de Pelješac",
        styles: ['gastronomie','nature','insolite'], budget: '€€' },

      { period: 'afternoon', time: '14:30', title: "Téléphérique Mont Srđ",
        description: "Quatre minutes d'ascension pour l'une des plus belles vues d'Europe : la vieille ville en miniature, les îles Élaphites au loin.",
        location: "Petra Krešimira IV",
        styles: ['culture','aventure','romantique'], budget: '€€' },
      { period: 'afternoon', time: '15:00', title: "Kayak autour des remparts",
        description: "Trois heures à pagayer le long des fortifications, pause baignade dans une grotte marine, vue à fleur d'eau imprenable.",
        location: "Plage Pile, départs en groupe",
        styles: ['aventure','nature','bien-etre'], budget: '€€' },
      { period: 'afternoon', time: '15:30', title: "Cavtat et Mestrović",
        description: "Village de pêcheurs à 30 minutes au sud, mausolée Račić sculpté par Mestrović en 1922, promenade en bord de mer.",
        location: "Cavtat, sud de Dubrovnik",
        styles: ['culture','romantique','insolite'], budget: '€' },
      { period: 'afternoon', time: '16:00', title: "Plage Banje au pied des remparts",
        description: "Galets blancs, transats, vue sur la vieille ville depuis l'eau. Spritz dans la foulée au bar de plage East-West.",
        location: "Frana Supila",
        styles: ['nature','romantique','bien-etre'], budget: '€€' },

      { period: 'evening', time: '18:30', title: "Coucher de soleil au Buža",
        description: "Bar accroché à la falaise, accessible par un trou dans les remparts. Cocktails simples, panorama qui justifie le détour.",
        location: "Buža Bar I et II, sud des remparts",
        styles: ['romantique','nuit','insolite'], budget: '€' },
      { period: 'evening', time: '19:30', title: "Dîner au Restaurant 360",
        description: "Étoilé Michelin sur les remparts, terrasse au-dessus du vieux port, cuisine méditerranéenne précise.",
        location: "Sv. Dominika 1",
        styles: ['gastronomie','romantique'], budget: '€€€' },
      { period: 'evening', time: '20:00', title: "Festival d'été dans le Palais des Recteurs",
        description: "Concerts classiques et opéra dans la cour Renaissance du palais. Programmation de juillet à août, billets très demandés.",
        location: "Pred Dvorom 3",
        styles: ['spectacles','culture','romantique'], budget: '€€' },

      { period: 'night', time: '22:00', title: "Cellar Buža, club dans une cave",
        description: "Caves voûtées sous la vieille ville, DJ sets indé, ambiance feutrée. Loin du bruit des terrasses de Stradun.",
        location: "Crijevićeva 9",
        styles: ['nuit','insolite'], budget: '€€' },
      { period: 'night', time: '22:30', title: "Stradun illuminée",
        description: "Marbre poli reflétant les lampions baroques, pas qui résonnent dans le silence. La ville rendue à elle-même.",
        location: "Stradun, vieille ville",
        styles: ['romantique','culture'], budget: '€' }
    ]
  },

  // ───────────────────────────────────────────────────────────── ZADAR ──
  zadar: {
    id: 'zadar',
    name: 'Zadar',
    region: "Dalmatie du nord",
    country: 'Croatie',
    transport: {
      summary: "Vieille ville sur péninsule, marche idéale, bus pour parcs et arrière-pays.",
      tips: [
        "Vieille ville à pied : tout est à 10 min",
        "Gare routière pour Plitvice (2 h), Krka (1 h), Paklenica (40 min)",
        "Ferries Jadrolinija pour Ugljan, Pašman, Dugi Otok depuis Gaženica"
      ]
    },
    programs: [
      {
        tone: 'doux',
        title: 'Zadar musical',
        vibe: "Orgue de mer, salutation au soleil, sunsets que Hitchcock disait les plus beaux du monde.",
        bestFor: "Pour les âmes sensibles à la lumière et au son.",
        highlights: ['Orgue de mer', 'Sunsets', 'Forum'],
        preferStyles: ['romantique','culture','art','bien-etre'],
        avoidStyles: ['nuit','aventure']
      },
      {
        tone: 'vibrant',
        title: 'Zadar et ses îles',
        vibe: "Kornati, Telašćica, Dugi Otok — l'archipel à explorer en bateau.",
        bestFor: "Pour les amateurs de mer et de calcaire blanc.",
        highlights: ['Kornati', 'Bateau', 'Plages'],
        preferStyles: ['nature','aventure','gastronomie'],
        avoidStyles: []
      },
      {
        tone: 'initie',
        title: "Zadar arrière-pays",
        vibe: "Plitvice, Paklenica, fromage de Pag — la Dalmatie continentale et sauvage.",
        bestFor: "Pour les randonneurs et les curieux d'agriculture insulaire.",
        highlights: ['Plitvice', 'Paklenica', 'Pag'],
        preferStyles: ['nature','aventure','insolite','gastronomie'],
        avoidStyles: ['shopping']
      }
    ],
    experiences: [
      { period: 'morning', time: '08:00', title: "Café au Forum romain",
        description: "Terrasses installées entre les colonnes brisées du Ier siècle, le passé en toile de fond, le café turc en premier plan.",
        location: "Zeleni trg, vieille ville",
        styles: ['gastronomie','culture','romantique'], budget: '€' },
      { period: 'morning', time: '09:00', title: "Église Saint-Donat",
        description: "Édifice circulaire pré-roman du IXe siècle, construit avec les pierres romaines récupérées. Acoustique exceptionnelle.",
        location: "Trg Sv. Stošije",
        styles: ['culture','art'], budget: '€' },
      { period: 'morning', time: '09:30', title: "Cathédrale Sainte-Anastasie et clocher",
        description: "180 marches pour la vue sur les toits orange et l'archipel. Cathédrale romane du XIIIe à la base, sobre et intense.",
        location: "Trg Sv. Stošije",
        styles: ['culture','romantique','aventure'], budget: '€' },
      { period: 'morning', time: '10:00', title: "Place des Cinq Puits",
        description: "Cinq citernes vénitiennes alignées sur une terrasse fortifiée, escalier monumental qui descend vers les remparts. Atmosphère cinématographique.",
        location: "Trg pet bunara",
        styles: ['culture','insolite','romantique'], budget: '€' },

      { period: 'midday', time: '12:00', title: "Pašticada à Pet Bunara",
        description: "Restaurant slow food, ingrédients locaux strictement de saison, pašticada cuite douze heures, gnocchis maison.",
        location: "Stratico 1",
        styles: ['gastronomie','culture'], budget: '€€' },
      { period: 'midday', time: '12:30', title: "Anchois marinés et pique-nique sur les remparts",
        description: "Boqueria au marché Pijaca, fromage de Pag, pain dalmate et tomates. Pique-nique face à la mer sur les murailles vénitiennes.",
        location: "Marché Pijaca puis Bedemi",
        styles: ['gastronomie','nature','romantique'], budget: '€' },
      { period: 'midday', time: '13:00', title: "Konoba sur Ugljan",
        description: "Vingt minutes de ferry, taverne paysanne dans une crique, calmars frits, vin maison au pichet. Le temps s'étire.",
        location: "Préko, île d'Ugljan",
        styles: ['gastronomie','nature','romantique'], budget: '€€' },

      { period: 'afternoon', time: '14:30', title: "Plitvice, lacs en cascade",
        description: "Seize lacs turquoise reliés par des cascades, passerelles en bois sur l'eau, forêt primaire. Compter la journée — départ tôt si possible.",
        location: "Parc national de Plitvice",
        styles: ['nature','aventure','famille','romantique'], budget: '€€€' },
      { period: 'afternoon', time: '15:00', title: "Bateau pour les Kornati",
        description: "Archipel de 89 îles inhabitées, calcaire blanc, eau émeraude, criques inaccessibles à pied. Excursion à la journée depuis le port.",
        location: "Parc national des Kornati",
        styles: ['nature','aventure','romantique'], budget: '€€€' },
      { period: 'afternoon', time: '15:30', title: "Pag, fromage et salines",
        description: "Île austère, paysage lunaire, fromage de brebis paški sir affiné dans la sauge sauvage. Salines en exploitation depuis le XVe siècle.",
        location: "Île de Pag",
        styles: ['gastronomie','culture','insolite'], budget: '€€' },
      { period: 'afternoon', time: '16:00', title: "Distillerie Maraska",
        description: "Liqueur de marasques inventée à Zadar, exportée par les Habsbourg dans toute l'Europe. Visite de la distillerie et dégustation guidée.",
        location: "Vladimira Nazora",
        styles: ['gastronomie','culture','insolite'], budget: '€' },

      { period: 'evening', time: '18:30', title: "Orgue de mer (Morske orgulje)",
        description: "Trente-cinq tubes cachés sous le quai, jouant au gré des vagues. Une œuvre signée Nikola Bašić, à la fois architecture et instrument.",
        location: "Riva, pointe ouest",
        styles: ['art','culture','romantique','insolite'], budget: '€' },
      { period: 'evening', time: '19:00', title: "Salutation au Soleil",
        description: "Trois cents panneaux solaires circulaires de 22 m de diamètre qui s'illuminent au coucher. Hitchcock parlait du plus beau coucher de soleil du monde.",
        location: "À côté de l'Orgue de mer",
        styles: ['romantique','art','famille'], budget: '€' },
      { period: 'evening', time: '19:30', title: "Dîner brodet sur le Riva",
        description: "Soupe de poissons dalmate riche en safran, pain frotté à l'ail, vin Maraština. Sur la terrasse face au coucher de soleil.",
        location: "Restaurant Foša ou Bruschetta",
        styles: ['gastronomie','romantique'], budget: '€€' },

      { period: 'night', time: '22:00', title: "Cocktails au Garden Lounge",
        description: "Terrasse sur les remparts vénitiens, mer en contrebas, cocktails élaborés et lounge music. L'ambiance la plus chic de Zadar.",
        location: "Bedemi gradski",
        styles: ['nuit','romantique'], budget: '€€' },
      { period: 'night', time: '22:30', title: "Bar à rakija dans la vieille ville",
        description: "Cinquante variétés d'eaux-de-vie de fruits, sauge à la pêche, fenouil, miel. Comptoir minuscule et patron passionné.",
        location: "Brane Tavern, Vrata Sv. Krševana",
        styles: ['nuit','culture','insolite'], budget: '€' }
    ]
  },

  // ───────────────────────────────────────────────────────────── PULA ──
  pula: {
    id: 'pula',
    name: 'Pula',
    region: "Istrie",
    country: 'Croatie',
    transport: {
      summary: "Vieille ville à pied, bus locaux pour les plages, voiture utile pour l'arrière-pays.",
      tips: [
        "Bus #2 et #3 pour l'amphithéâtre depuis la gare routière",
        "Bus pour Rovinj (45 min) et Brijuni (port de Fažana, 15 min)",
        "Voiture quasi indispensable pour Cape Kamenjak et les villages truffiers"
      ]
    },
    programs: [
      {
        tone: 'doux',
        title: 'Pula antique',
        vibe: "Amphithéâtre, Forum, Temple d'Auguste : la Rome adriatique en plus calme.",
        bestFor: "Pour les amoureux d'archéologie et de pierre dorée.",
        highlights: ['Amphithéâtre', 'Forum', 'Romain'],
        preferStyles: ['culture','art','romantique'],
        avoidStyles: ['nuit','aventure']
      },
      {
        tone: 'vibrant',
        title: 'Istrie côté mer',
        vibe: "Brijuni au matin, Cape Kamenjak l'après-midi, Rovinj au coucher du soleil.",
        bestFor: "Pour les baigneurs et les amateurs de criques sauvages.",
        highlights: ['Brijuni', 'Kamenjak', 'Rovinj'],
        preferStyles: ['nature','aventure','romantique'],
        avoidStyles: []
      },
      {
        tone: 'initie',
        title: "Istrie gourmande",
        vibe: "Truffes du Motovun, huile d'olive, Malvazija et Teran — la Toscane secrète.",
        bestFor: "Pour les épicuriens curieux des terroirs méconnus.",
        highlights: ['Truffes', 'Olive', 'Vins istriens'],
        preferStyles: ['gastronomie','insolite','culture','nature'],
        avoidStyles: ['shopping']
      }
    ],
    experiences: [
      { period: 'morning', time: '08:30', title: "Amphithéâtre romain à l'ouverture",
        description: "Sixième plus grand au monde, presque intact, Ier siècle. Sous-sols visitables avec amphores à huile d'olive et cages de gladiateurs.",
        location: "Flavijevska ulica",
        styles: ['culture','art','aventure'], budget: '€€' },
      { period: 'morning', time: '09:30', title: "Forum et Temple d'Auguste",
        description: "Place antique restée vivante 2 000 ans plus tard, terrasses de cafés autour des colonnes corinthiennes du temple d'Auguste.",
        location: "Forum",
        styles: ['culture','art','gastronomie'], budget: '€' },
      { period: 'morning', time: '10:00', title: "Arc des Sergii",
        description: "Arc de triomphe du Ier siècle, érigé par une famille patricienne. James Joyce, qui enseignait à Pula, le décrivait dans ses lettres.",
        location: "Sergijevaca",
        styles: ['culture','insolite'], budget: '€' },
      { period: 'morning', time: '10:30', title: "Marché central Tržnica",
        description: "Halle Art nouveau de 1903, étals de poissons en bas, comptoirs gourmands à l'étage. Burek aux cinq fromages dès 9 h.",
        location: "Narodni trg 9",
        styles: ['gastronomie','culture'], budget: '€' },

      { period: 'midday', time: '12:00', title: "Truffes à Konoba Batelina",
        description: "Konoba familiale tenue par les frères Skoko, pêcheurs eux-mêmes. Plats du jour selon la prise, fuži aux truffes en signature.",
        location: "Banjole, près de Pula",
        styles: ['gastronomie','insolite'], budget: '€€€' },
      { period: 'midday', time: '12:30', title: "Pique-nique à la plage Hawaii",
        description: "Crique cristalline de la presqu'île Verudela, eau si claire qu'on voit le fond à dix mètres. Sandwich pršut acheté en route.",
        location: "Verudela, sud de Pula",
        styles: ['nature','romantique','famille'], budget: '€' },
      { period: 'midday', time: '13:00', title: "Pizza istrienne Jupiter",
        description: "Pâte fine étirée à la main, prosciutto de Tinjan, fromage de chèvre fumé, roquette sauvage. Une institution depuis 1990.",
        location: "Castropola 38",
        styles: ['gastronomie','famille'], budget: '€' },

      { period: 'afternoon', time: '14:30', title: "Brijuni en bateau",
        description: "Quatorze îles de calcaire blanc, ancienne résidence de Tito, parc safari avec descendants des cadeaux d'États. Vélo recommandé.",
        location: "Embarcadère Fažana",
        styles: ['nature','culture','famille','aventure'], budget: '€€€' },
      { period: 'afternoon', time: '15:00', title: "Cape Kamenjak",
        description: "Réserve naturelle au bout de l'Istrie, falaises sauvages, grottes marines, criques sans aménagement. Vélo de location à l'entrée.",
        location: "Premantura, sud de Pula",
        styles: ['nature','aventure','bien-etre'], budget: '€' },
      { period: 'afternoon', time: '15:30', title: "Huilerie Chiavalon",
        description: "L'une des huiles d'olive les plus primées au monde, cinq variétés monocépages, dégustation comparée et visite des oliveraies.",
        location: "Vodnjan, près de Pula",
        styles: ['gastronomie','insolite','culture','nature'], budget: '€' },
      { period: 'afternoon', time: '16:00', title: "Rovinj, vieille ville sur l'eau",
        description: "Quarante-cinq minutes au nord, ruelles serrées qui montent à l'église Sainte-Euphémie, façades vénitiennes, lumière qui ricoche partout.",
        location: "Rovinj, Istrie ouest",
        styles: ['culture','romantique','art'], budget: '€' },

      { period: 'evening', time: '18:30', title: "Apéro au Cvajner sur le Forum",
        description: "Bar dans une banque néoclassique reconvertie, terrasse face aux colonnes du temple. Cocktails créatifs, prix doux.",
        location: "Forum 2",
        styles: ['gastronomie','romantique','culture'], budget: '€' },
      { period: 'evening', time: '19:30', title: "Concert dans l'amphithéâtre",
        description: "Festival d'été : Sting, Tom Jones, Manu Chao y sont passés. Acoustique romaine et atmosphère unique sous les étoiles.",
        location: "Amphithéâtre romain",
        styles: ['spectacles','culture','romantique'], budget: '€€€' },
      { period: 'evening', time: '20:00', title: "Dîner à Bajamonti, Rovinj",
        description: "Konoba sur les pavés de la vieille ville, poisson grillé au charbon, vin Malvazija fraîche. Le coucher de soleil sur l'Adriatique en bonus.",
        location: "Konoba Bajamonti, Rovinj",
        styles: ['gastronomie','romantique'], budget: '€€' },

      { period: 'night', time: '22:00', title: "Craft beer au Pivnica Pulska",
        description: "Brasserie indépendante du quartier de la marine, bières istriennes, ambiance cosmopolite et conviviale.",
        location: "Centre de Pula",
        styles: ['nuit','gastronomie'], budget: '€' },
      { period: 'night', time: '22:30', title: "Baignade nocturne à Stoja",
        description: "Plage de roches plates au coucher du soleil prolongé, eau encore tiède en août, lumières lointaines de Pula et de la lune sur l'eau.",
        location: "Camping Stoja",
        styles: ['romantique','insolite','bien-etre'], budget: '€' }
    ]
  }

};

// Helpers
export const allDestinations = Object.values(destinations);

export function getDestination(id) {
  return destinations[id];
}
