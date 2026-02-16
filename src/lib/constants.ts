// ============================================================================
// SORRISO LUMINOSO — Contenuti del Sito
// ============================================================================
// Questo file è l'UNICA FONTE DI VERITÀ per tutti i testi e le informazioni
// del sito. Per aggiornare qualsiasi contenuto, modifica solo questo file.
// ============================================================================

// ---------------------------------------------------------------------------
// Brand
// ---------------------------------------------------------------------------
export const SITE_NAME = 'Sorriso Luminoso';
export const SITE_TAGLINE = 'Il tuo sorriso, la nostra passione';
export const SITE_LOCALE = 'it_IT';
export const SITE_LANG = 'it';

// ---------------------------------------------------------------------------
// Contatti
// ---------------------------------------------------------------------------
export const CONTACT = {
  phone: '+39 02 1234567',
  phoneRaw: '+390212345678',
  // ⚠️ WHATSAPP — Sostituisci con il tuo numero reale (formato internazionale senza +)
  whatsapp: '393331234567',
  whatsappDisplay: '+39 333 1234567',
  email: 'info@sorrisoluminoso.it',
  address: {
    street: 'Via Roma 42',
    city: 'Milano',
    province: 'MI',
    cap: '20121',
    full: 'Via Roma 42, 20121 Milano, MI',
  },
  piva: 'IT12345678901',
  hours: [
    { days: 'Lunedì — Venerdì', time: '8:00 — 18:30' },
    { days: 'Sabato', time: '9:00 — 13:00' },
    { days: 'Domenica', time: 'Chiuso' },
  ],
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.1234567!2d9.19!3d45.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzEyLjAiTiA5wrAxMScyNC4wIkU!5e0!3m2!1sit!2sit!4v1234567890',
  googleMapsLink: 'https://maps.google.com/?q=Via+Roma+42,+20121+Milano+MI',
  googleRating: 4.9,
  googleReviewCount: 287,
  yearsActive: 15,
  patientsCount: '500+',
} as const;

// ---------------------------------------------------------------------------
// Navigazione
// ---------------------------------------------------------------------------
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Chi Siamo', href: '/chi-siamo/' },
  { label: 'Servizi', href: '/servizi/' },
  { label: 'Recensioni', href: '/recensioni/' },
  { label: 'Contatti', href: '/contatti/' },
] as const;

// ---------------------------------------------------------------------------
// Dottoressa
// ---------------------------------------------------------------------------
export const DOCTOR = {
  name: 'Dott.ssa Sara Martinelli',
  title: 'Odontoiatra — Direttrice Sanitaria',
  registration: 'Iscritta all\'Albo degli Odontoiatri di Milano, n. 4567',
  photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
  bio: `La Dott.ssa Sara Martinelli ha dedicato oltre quindici anni della sua carriera alla cura del sorriso dei suoi pazienti. Laureata con lode in Odontoiatria e Protesi Dentaria presso l'Università degli Studi di Milano, ha successivamente completato un Master in Implantologia Avanzata presso l'Università di Siena.

Il suo approccio combina le tecniche più innovative con un'attenzione sincera al benessere di ogni paziente. Crede fermamente che un ambiente sereno e accogliente sia il primo passo verso cure di qualità. Sotto la sua guida, lo studio Sorriso Luminoso è diventato un punto di riferimento per le famiglie milanesi che cercano un dentista di fiducia.`,
} as const;

// ---------------------------------------------------------------------------
// Team
// ---------------------------------------------------------------------------
export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export const TEAM: TeamMember[] = [
  {
    name: 'Dott.ssa Sara Martinelli',
    role: 'Direttrice Sanitaria',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    bio: 'Specializzata in implantologia e odontoiatria estetica con oltre 15 anni di esperienza.',
  },
  {
    name: 'Dott. Marco Ferretti',
    role: 'Ortodontista',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    bio: 'Esperto in ortodonzia invisibile e tradizionale, con una passione per i risultati perfetti.',
  },
  {
    name: 'Giulia Colombo',
    role: 'Assistente alla Poltrona',
    photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
    bio: 'Il suo sorriso rassicurante è la prima cosa che accoglie ogni paziente in studio.',
  },
];

// ---------------------------------------------------------------------------
// Servizi
// ---------------------------------------------------------------------------
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string; // nome icona Lucide
  benefits: string[];
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 'odontoiatria-generale',
    title: 'Odontoiatria Generale',
    shortDescription: 'Visite di controllo, pulizie professionali e cure conservative per tutta la famiglia.',
    longDescription:
      'L\'odontoiatria generale è il fondamento di un sorriso sano. Il nostro team si occupa di visite di controllo approfondite, pulizie professionali con strumentazione ad ultrasuoni e cure conservative come otturazioni estetiche in composito. Crediamo nella prevenzione come migliore cura: per questo ogni visita include un esame completo con radiografie digitali a basso dosaggio.',
    icon: 'Stethoscope',
    benefits: [
      'Visita di controllo completa',
      'Pulizia dentale professionale',
      'Otturazioni estetiche in composito',
      'Radiografie digitali a basso dosaggio',
      'Piano di prevenzione personalizzato',
    ],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
  },
  {
    id: 'sbiancamento-dentale',
    title: 'Sbiancamento Dentale',
    shortDescription: 'Trattamenti professionali per denti più bianchi e un sorriso luminoso e naturale.',
    longDescription:
      'Il nostro sbiancamento professionale utilizza tecnologie LED di ultima generazione e gel a base di perossido di idrogeno in concentrazioni sicure ed efficaci. In una sola seduta di circa un\'ora potrai notare denti fino a otto tonalità più bianchi. Il trattamento è completamente indolore e i risultati durano fino a due anni con una corretta igiene domiciliare.',
    icon: 'Sparkles',
    benefits: [
      'Sbiancamento LED professionale in studio',
      'Risultati visibili in una sola seduta',
      'Kit di mantenimento domiciliare incluso',
      'Trattamento sicuro e indolore',
      'Fino a 8 tonalità più bianchi',
    ],
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&q=80',
  },
  {
    id: 'implantologia',
    title: 'Implantologia',
    shortDescription: 'Impianti dentali di ultima generazione per ritrovare denti fissi e un sorriso completo.',
    longDescription:
      'L\'implantologia moderna permette di sostituire uno o più denti mancanti con soluzioni fisse, stabili e dall\'aspetto del tutto naturale. Utilizziamo impianti in titanio di grado medicale e la chirurgia computer-guidata per garantire massima precisione e tempi di guarigione ridotti. Offriamo anche soluzioni a carico immediato per tornare a sorridere in giornata.',
    icon: 'Wrench',
    benefits: [
      'Chirurgia computer-guidata 3D',
      'Impianti in titanio certificati',
      'Possibilità di carico immediato',
      'Sedazione cosciente disponibile',
      'Garanzia a lungo termine',
    ],
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
  },
  {
    id: 'ortodonzia',
    title: 'Ortodonzia',
    shortDescription: 'Apparecchi invisibili e tradizionali per un sorriso perfettamente allineato.',
    longDescription:
      'Offriamo soluzioni ortodontiche per bambini, adolescenti e adulti. Dagli apparecchi tradizionali agli allineatori trasparenti di ultima generazione, ogni piano di trattamento è personalizzato per ottenere risultati ottimali nel minor tempo possibile. I nostri allineatori invisibili sono praticamente impercettibili e si rimuovono facilmente per mangiare e lavarsi i denti.',
    icon: 'AlignCenter',
    benefits: [
      'Allineatori trasparenti invisibili',
      'Apparecchi fissi tradizionali',
      'Scansione 3D senza impronte',
      'Piani di trattamento personalizzati',
      'Controlli periodici inclusi',
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
  },
  {
    id: 'pronto-soccorso-dentale',
    title: 'Pronto Soccorso Dentale',
    shortDescription: 'Assistenza rapida per emergenze dentali: dolore acuto, traumi e urgenze.',
    longDescription:
      'Sappiamo che un\'emergenza dentale non aspetta. Per questo riserviamo ogni giorno posti disponibili per urgenze come mal di denti acuto, denti rotti o fratturati, ascessi e traumi. Il nostro obiettivo è alleviare il dolore rapidamente e stabilizzare la situazione per poi programmare il trattamento definitivo in totale serenità.',
    icon: 'AlertCircle',
    benefits: [
      'Appuntamenti in giornata per urgenze',
      'Gestione del dolore acuto',
      'Trattamento di traumi dentali',
      'Drenaggio ascessi',
      'Riparazione denti fratturati',
    ],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
  },
  {
    id: 'odontoiatria-pediatrica',
    title: 'Odontoiatria Pediatrica',
    shortDescription: 'Cure dedicate ai più piccoli in un ambiente sereno e a misura di bambino.',
    longDescription:
      'Il primo approccio dal dentista è fondamentale per costruire un rapporto sereno con le cure odontoiatriche. Il nostro team è formato per accogliere i bambini con dolcezza e pazienza, trasformando ogni visita in un\'esperienza positiva. Dall\'educazione all\'igiene orale fino alle sigillature protettive, ci prendiamo cura dei sorrisi più piccoli con la massima attenzione.',
    icon: 'Baby',
    benefits: [
      'Ambiente accogliente per bambini',
      'Prima visita dai 3 anni',
      'Sigillature preventive',
      'Fluoroprofilassi',
      'Educazione all\'igiene orale giocosa',
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
  },
];

// ---------------------------------------------------------------------------
// Perché Sceglierci (Homepage)
// ---------------------------------------------------------------------------
export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const FEATURES: Feature[] = [
  {
    title: 'Un Team Gentile e Attento',
    description: 'Ogni paziente è unico. Ascoltiamo le tue esigenze e ti accompagniamo con cura in ogni fase del trattamento.',
    icon: 'Heart',
  },
  {
    title: 'Tecnologia All\'Avanguardia',
    description: 'Scanner 3D intraorali, radiografie digitali e laser: strumenti moderni per diagnosi precise e trattamenti rapidi.',
    icon: 'Monitor',
  },
  {
    title: 'Piani di Pagamento Flessibili',
    description: 'Finanziamenti a tasso zero fino a 24 mesi. Il tuo sorriso non deve aspettare per motivi economici.',
    icon: 'CreditCard',
  },
  {
    title: 'Appuntamenti Anche in Giornata',
    description: 'Per urgenze e dolore acuto, riserviamo posti ogni giorno. Non ti lasciamo mai senza assistenza.',
    icon: 'CalendarCheck',
  },
];

// ---------------------------------------------------------------------------
// Valori (Chi Siamo)
// ---------------------------------------------------------------------------
export const VALUES = [
  {
    title: 'Empatia',
    description: 'Ascoltiamo ogni paziente con attenzione genuina, perché dietro ogni sorriso c\'è una persona con le sue esigenze.',
    icon: 'Heart',
  },
  {
    title: 'Eccellenza Clinica',
    description: 'Formazione continua e tecnologie all\'avanguardia per offrirti sempre il meglio dell\'odontoiatria moderna.',
    icon: 'Award',
  },
  {
    title: 'Trasparenza',
    description: 'Preventivi chiari e dettagliati, senza sorprese. Ti spieghiamo ogni opzione perché tu possa scegliere con consapevolezza.',
    icon: 'Eye',
  },
  {
    title: 'Accoglienza',
    description: 'Un ambiente caldo e confortevole dove sentirti a casa, dalla sala d\'attesa alla poltrona del dentista.',
    icon: 'Home',
  },
];

// ---------------------------------------------------------------------------
// Foto Studio (Chi Siamo)
// ---------------------------------------------------------------------------
export const STUDIO_PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80',
    alt: 'La nostra sala d\'attesa accogliente',
    caption: 'La nostra sala d\'attesa',
  },
  {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80',
    alt: 'Tecnologia moderna nello studio',
    caption: 'Tecnologia moderna',
  },
  {
    src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
    alt: 'Ambiente rilassante dello studio dentistico',
    caption: 'Ambiente rilassante',
  },
  {
    src: 'https://images.unsplash.com/photo-1514912885225-5c1a44070fcc?w=600&q=80',
    alt: 'Area dedicata ai bambini',
    caption: 'Area bambini',
  },
];

// ---------------------------------------------------------------------------
// Testimonianze
// ---------------------------------------------------------------------------
export interface Testimonial {
  text: string;
  author: string;
  rating: number;
  serviceTag: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    text: 'Avevo il terrore del dentista da quando ero bambina. La Dott.ssa Martinelli e il suo team hanno cambiato completamente la mia esperienza. Ambiente sereno, zero dolore e finalmente un sorriso di cui vado fiera.',
    author: 'Anna M.',
    rating: 5,
    serviceTag: 'Implantologia',
  },
  {
    text: 'Dopo anni con un dente mancante, ho finalmente fatto un impianto. Il risultato è incredibile, sembra un dente vero! Professionalità e gentilezza al top.',
    author: 'Roberto F.',
    rating: 5,
    serviceTag: 'Implantologia',
  },
  {
    text: 'Ho portato mia figlia di 4 anni per la prima volta e si è trovata benissimo. L\'ambiente è colorato e accogliente, il team sa come trattare i più piccoli. Torneremo sicuramente.',
    author: 'Chiara L.',
    rating: 5,
    serviceTag: 'Odontoiatria Pediatrica',
  },
  {
    text: 'Lo sbiancamento ha superato ogni mia aspettativa. In un\'ora i miei denti erano visibilmente più bianchi e il trattamento è stato completamente indolore. Consigliatissimo!',
    author: 'Marco D.',
    rating: 5,
    serviceTag: 'Sbiancamento Dentale',
  },
  {
    text: 'Gli allineatori invisibili sono stati la scelta migliore. Nessuno si accorge che li porto e dopo sei mesi i risultati si vedono già. Studio organizzatissimo e puntuale.',
    author: 'Valentina R.',
    rating: 5,
    serviceTag: 'Ortodonzia',
  },
  {
    text: 'Mi si è rotto un dente di sabato mattina e mi hanno visitato in giornata. Problema risolto in un\'ora con grande professionalità. Un servizio che a Milano è raro trovare.',
    author: 'Giuseppe T.',
    rating: 5,
    serviceTag: 'Pronto Soccorso Dentale',
  },
  {
    text: 'Finalmente un dentista che spiega tutto con pazienza. Preventivo chiaro, nessuna sorpresa, e il piano di pagamento a rate mi ha permesso di fare le cure senza stress economico.',
    author: 'Francesca B.',
    rating: 5,
    serviceTag: 'Odontoiatria Generale',
  },
  {
    text: 'Studio moderno e pulitissimo, si vede che investono in tecnologia. La panoramica digitale e lo scanner 3D rendono tutto più veloce e preciso. Staff eccezionale.',
    author: 'Alessandro P.',
    rating: 5,
    serviceTag: 'Odontoiatria Generale',
  },
  {
    text: 'Dopo tre preventivi in altri studi, ho scelto Sorriso Luminoso per la trasparenza e l\'onestà. I miei impianti sono perfetti e il prezzo era il più corretto di tutti.',
    author: 'Paola G.',
    rating: 5,
    serviceTag: 'Implantologia',
  },
  {
    text: 'Porto tutta la famiglia qui da cinque anni. Dai nonni ai nipotini, ognuno riceve cure attente e personalizzate. Non cambierei dentista per nulla al mondo.',
    author: 'Luca S.',
    rating: 5,
    serviceTag: 'Odontoiatria Generale',
  },
];

// ---------------------------------------------------------------------------
// FAQ (Servizi)
// ---------------------------------------------------------------------------
export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'Ogni quanto dovrei fare una visita di controllo?',
    answer:
      'Consigliamo una visita di controllo e una pulizia professionale ogni sei mesi. Questo permette di individuare eventuali problemi nelle fasi iniziali, quando sono più facili e meno costosi da trattare. Per pazienti con particolari condizioni, come malattia parodontale, potrebbero essere necessari controlli più frequenti.',
  },
  {
    question: 'Lo sbiancamento dentale è sicuro?',
    answer:
      'Assolutamente sì. Lo sbiancamento professionale eseguito in studio utilizza prodotti certificati e concentrazioni controllate che non danneggiano lo smalto. A differenza dei prodotti fai-da-te, il trattamento viene personalizzato in base alla sensibilità dei tuoi denti e monitorato dal dentista durante tutta la seduta.',
  },
  {
    question: 'Accettate assicurazioni sanitarie?',
    answer:
      'Sì, collaboriamo con le principali compagnie assicurative e fondi sanitari integrativi. Tra i più comuni: Unisalute, Fondo Est, Previmedical, Fasdac e molti altri. Il nostro staff amministrativo ti assisterà con tutta la documentazione necessaria per il rimborso.',
  },
  {
    question: 'Cosa faccio in caso di emergenza dentale?',
    answer:
      'In caso di emergenza dentale, chiamaci immediatamente al nostro numero di telefono. Riserviamo ogni giorno posti per le urgenze e faremo il possibile per visitarti in giornata. Nel frattempo, applica del ghiaccio sulla zona e, in caso di dolore intenso, puoi assumere un antidolorifico da banco.',
  },
  {
    question: 'A che età dovrei portare mio figlio dal dentista?',
    answer:
      'La prima visita è consigliata intorno ai 3-4 anni, oppure prima se noti anomalie o il bambino lamenta dolore. La prima visita serve soprattutto a creare un rapporto positivo con l\'ambiente dello studio. Il nostro team pediatrico è specializzato nel rendere l\'esperienza divertente e rassicurante per i più piccoli.',
  },
  {
    question: 'Gli impianti dentali sono dolorosi?',
    answer:
      'L\'intervento di implantologia viene eseguito in anestesia locale e nella maggior parte dei casi è meno fastidioso di un\'estrazione. Grazie alla chirurgia computer-guidata, l\'intervento è minimamente invasivo e il gonfiore post-operatorio è generalmente contenuto. Offriamo anche la sedazione cosciente per i pazienti più ansiosi.',
  },
];

// ---------------------------------------------------------------------------
// SEO — Meta per ogni pagina
// ---------------------------------------------------------------------------
export const SEO = {
  home: {
    title: 'Sorriso Luminoso — Dentista a Milano | Prenota la Tua Visita',
    description:
      'Studio dentistico moderno a Milano. Implantologia, ortodonzia, sbiancamento, odontoiatria pediatrica. Prenota la tua visita: il tuo comfort viene prima di tutto.',
  },
  chiSiamo: {
    title: 'Chi Siamo — Sorriso Luminoso, Dentista a Milano',
    description:
      'Conosci il team della Dott.ssa Sara Martinelli. Oltre 15 anni di esperienza, tecnologia avanzata e un approccio umano alla cura del sorriso.',
  },
  servizi: {
    title: 'I Nostri Servizi — Sorriso Luminoso, Dentista a Milano',
    description:
      'Odontoiatria generale, sbiancamento, implantologia, ortodonzia, pronto soccorso dentale e odontoiatria pediatrica. Scopri tutti i nostri servizi.',
  },
  contatti: {
    title: 'Contatti e Prenotazioni — Sorriso Luminoso, Dentista a Milano',
    description:
      'Contatta Sorriso Luminoso. Chiamaci o scrivici. Via Roma 42, Milano. Appuntamenti anche in giornata.',
  },
  recensioni: {
    title: 'Recensioni Pazienti — Sorriso Luminoso, Dentista a Milano',
    description:
      'Leggi le esperienze dei nostri pazienti. 4.9 su 5 su Google con oltre 287 recensioni. Scopri perché ci scelgono ogni giorno.',
  },
} as const;

