// Projects Data - Static data layer for portfolio projects
// This file will be replaced with dynamic API calls once the backend is ready

// Gallery Image Interface
export interface IProjectGalleryImage {
  src: string;
  alt: string;
  caption?: string;
  span?: "full" | "half"; // layout hint for the gallery grid
}

// Design Highlight Interface
export interface IProjectHighlight {
  icon: string; // lucide-react icon name
  title: string;
  description: string;
}

// Client Testimonial Interface
export interface IProjectTestimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

// Design Philosophy Section
export interface IProjectDesignPhilosophy {
  spacePlanning: string;
  materialSelection: string;
  lighting: string;
  colorPalette: string;
  furnitureChoices: string;
  userExperience: string;
  emotionalAtmosphere: string;
}

// Project Interface
export interface IProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  type: ProjectType;
  location: string;
  area: string;
  completionYear: string;
  timeline: string;
  status: ProjectStatus;
  interiorStyle: string;
  scope: string;
  services: string[];
  materials: string[];
  photographyCredit: string;
  heroImage: string;
  galleryImages: IProjectGalleryImage[];
  shortIntro: string;
  clientVision: string;
  designObjectives: string;
  context: string;
  challenges: string;
  overallConcept: string;
  designPhilosophy: IProjectDesignPhilosophy;
  designHighlights: IProjectHighlight[];
  clientTestimonial: IProjectTestimonial;
  isFeatured: boolean;
}

// Project Status Type
export type ProjectStatus = "Completed" | "In Progress" | "Concept";

// Project Type
export type ProjectType =
  | "Residential"
  | "Commercial"
  | "Cultural"
  | "Hospitality";

// Project Categories
export const projectCategories = [
  "All",
  "Interior Design",
  "Architecture",
  "Renovation",
  "Space Planning",
  "Furniture Design",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

// Project Types
export const projectTypes: ProjectType[] = [
  "Residential",
  "Commercial",
  "Cultural",
  "Hospitality",
];

// Interior Styles
export const projectStyles = [
  "All Styles",
  "Contemporary Minimal",
  "Warm Modernism",
  "Industrial Refined",
  "Scandinavian Luxe",
  "Organic Modern",
  "Art Deco Revival",
] as const;

export type ProjectStyle = (typeof projectStyles)[number];

// Locations
export const projectLocations = [
  "All Locations",
  "Gulshan, Dhaka",
  "Baridhara, Dhaka",
  "Banani, Dhaka",
  "Dhanmondi, Dhaka",
  "Motijheel, Dhaka",
  "Uttara, Dhaka",
] as const;

export type ProjectLocation = (typeof projectLocations)[number];

// Completion Years
export const projectYears = ["All Years", "2024", "2023", "2022"] as const;

// Sort Options
export const projectSortOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "A – Z", value: "az" },
  { label: "Z – A", value: "za" },
] as const;

export type ProjectSortValue = (typeof projectSortOptions)[number]["value"];

// ─────────────────────────────────────────────
// Mock Project Data
// ─────────────────────────────────────────────

export const projects: IProject[] = [
  {
    id: "1",
    slug: "apex-residence",
    title: "Apex Residence",
    category: "Interior Design",
    type: "Residential",
    location: "Baridhara, Dhaka",
    area: "4,200 sq ft",
    completionYear: "2024",
    timeline: "14 Months",
    status: "Completed",
    interiorStyle: "Contemporary Minimal",
    scope: "Full Interior Design & Furnishing",
    services: [
      "Space Planning",
      "Interior Design",
      "Custom Furniture",
      "Lighting Design",
      "Art Curation",
    ],
    materials: [
      "Italian Travertine",
      "Oiled Walnut",
      "Brushed Brass",
      "Linen Textiles",
      "Smoked Glass",
    ],
    photographyCredit: "Liminal Studio Archives",
    heroImage: "/assets/projects/apex-residence.png",
    galleryImages: [
      {
        src: "/assets/projects/liminal-living-room.png",
        alt: "Apex Residence living room with travertine feature wall",
        caption: "Living Room — Travertine Feature Wall",
        span: "full",
      },
      {
        src: "/assets/projects/liminal-kitchen.png",
        alt: "Apex Residence minimalist kitchen with walnut cabinetry",
        caption: "Kitchen — Walnut Cabinetry & Stone Counters",
        span: "half",
      },
      {
        src: "/assets/projects/liminal-bedroom.png",
        alt: "Apex Residence master bedroom sanctuary",
        caption: "Master Bedroom — Serene Sanctuary",
        span: "half",
      },
      {
        src: "/assets/projects/liminal-bathroom.png",
        alt: "Apex Residence marble bathroom",
        caption: "Bathroom — Italian Marble Surfaces",
        span: "full",
      },
      {
        src: "/assets/projects/liminal-lounge.png",
        alt: "Apex Residence art lounge with curated pieces",
        caption: "Art Lounge — Curated Collection",
        span: "half",
      },
      {
        src: "/assets/projects/interior-premium.png",
        alt: "Apex Residence hallway with brass accents",
        caption: "Hallway — Brass Detail & Natural Light",
        span: "half",
      },
    ],
    shortIntro:
      "A 4,200 square foot penthouse residence transformed into a sanctuary of understated luxury, where Italian travertine meets oiled walnut in a dialogue of warmth and permanence.",
    clientVision:
      "The client, a seasoned art collector and entrepreneur, envisioned a home that could serve as both a private retreat and an intimate gallery for their growing collection. They sought spaces that felt calm and refined without sacrificing warmth or livability — a home where every room tells a story.",
    designObjectives:
      "To create a seamless spatial narrative where art, architecture, and daily life coexist harmoniously. Every transition between rooms needed to feel intentional, every material needed to resonate with the client's sensibility for authenticity and craft.",
    context:
      "Located on the top floor of a premium residential tower in Baridhara, the space offered panoramic views and abundant natural light. The challenge was to honor these qualities while creating defined interior zones that maintained visual continuity.",
    challenges:
      "The original floor plan featured fragmented rooms with inconsistent ceiling heights. Structural columns interrupted sight lines, and the existing electrical infrastructure limited lighting placement. We worked closely with structural engineers to open key walls while preserving load-bearing integrity.",
    overallConcept:
      "The Threshold Continuum — inspired by Liminal's core philosophy, the design creates a sequence of spatial thresholds where each room gradually reveals itself as you move deeper into the home. Light narrows and expands, materials shift from cool stone to warm timber, and ceiling heights compress and release to create an emotional journey through domestic space.",
    designPhilosophy: {
      spacePlanning:
        "We dissolved unnecessary partitions to create a flowing open plan that maintains distinct zones through material transitions and ceiling height variations. The living, dining, and kitchen areas form a continuous spatial experience connected by a travertine floor plane.",
      materialSelection:
        "Italian travertine anchors the public spaces with its warm, creamy tones. Oiled walnut introduces organic warmth in private areas. Brushed brass hardware and accents provide subtle luminosity, while smoked glass partitions define zones without interrupting sight lines.",
      lighting:
        "A layered lighting strategy combines recessed cove lighting for ambient warmth, adjustable track systems for art illumination, and sculptural pendants as focal points. The lighting transitions from cool clarity in working areas to warm intimacy in living spaces.",
      colorPalette:
        "A restrained palette of warm neutrals — cream, sand, charcoal, and deep umber — allows materials and textures to become the color story. Accent colors appear only through art and carefully curated objects.",
      furnitureChoices:
        "A mix of bespoke pieces designed specifically for the space and curated selections from European artisan makers. Every piece was selected for its material integrity, proportional harmony, and tactile quality.",
      userExperience:
        "The spatial sequence creates a journey from the more public, expansive living areas through progressively intimate spaces. Entry compression releases into the double-height living room, creating a moment of arrival that residents experience daily.",
      emotionalAtmosphere:
        "The home radiates a quiet confidence — spaces that feel both grounded and elevated, substantial yet serene. The interplay of natural light with stone and timber creates a meditative quality that deepens with each visit.",
    },
    designHighlights: [
      {
        icon: "Armchair",
        title: "Bespoke Furniture Collection",
        description:
          "Eight custom furniture pieces designed exclusively for the residence, crafted by local artisans using traditional joinery techniques.",
      },
      {
        icon: "Leaf",
        title: "Sustainable Material Sourcing",
        description:
          "All timber sourced from FSC-certified suppliers. Local stone was prioritized to minimize transportation impact.",
      },
      {
        icon: "Lightbulb",
        title: "Adaptive Lighting System",
        description:
          "Tunable white lighting that adjusts color temperature throughout the day, syncing with the natural light cycle.",
      },
      {
        icon: "Layers",
        title: "Hidden Storage Integration",
        description:
          "Over 200 linear feet of concealed storage, including a hidden gallery archive and climate-controlled wine storage.",
      },
    ],
    clientTestimonial: {
      quote:
        "Liminal understood something that no other studio grasped — that our home needed to breathe. Every room feels like it has its own personality, yet the whole space flows as one continuous experience. Walking through our front door still takes our breath away, even after a year of living here.",
      name: "Arthur Pendelton",
      role: "Client, Apex Residence",
      avatar: "https://i.pravatar.cc/150?img=57",
    },
    isFeatured: true,
  },
  {
    id: "2",
    slug: "corporate-zen",
    title: "Corporate Zen",
    category: "Space Planning",
    type: "Commercial",
    location: "Motijheel, Dhaka",
    area: "8,500 sq ft",
    completionYear: "2024",
    timeline: "10 Months",
    status: "Completed",
    interiorStyle: "Warm Modernism",
    scope: "Complete Office Redesign",
    services: [
      "Space Planning",
      "Interior Design",
      "Acoustic Design",
      "Lighting Design",
      "Branding Integration",
    ],
    materials: [
      "Micro-Cement",
      "Fluted Timber Panels",
      "Acoustic Felt",
      "Blackened Steel",
      "Natural Linen",
    ],
    photographyCredit: "Liminal Studio Archives",
    heroImage: "/assets/projects/corporate-zen.png",
    galleryImages: [
      {
        src: "/assets/projects/liminal-office.png",
        alt: "Corporate Zen open workspace with timber partitions",
        caption: "Open Workspace — Timber & Light",
        span: "full",
      },
      {
        src: "/assets/projects/office-zen.png",
        alt: "Corporate Zen quiet focus zone",
        caption: "Focus Pods — Acoustic Privacy",
        span: "half",
      },
      {
        src: "/assets/projects/premium-office.png",
        alt: "Corporate Zen executive meeting room",
        caption: "Meeting Suite — Refined Formality",
        span: "half",
      },
      {
        src: "/assets/projects/office.png",
        alt: "Corporate Zen collaborative breakout area",
        caption: "Collaboration Zone — Casual Geometry",
        span: "full",
      },
    ],
    shortIntro:
      "An 8,500 square foot corporate headquarters reimagined as a sanctuary of productive calm, where acoustic precision and material warmth replace the sterility of conventional office design.",
    clientVision:
      "The founding partners sought a workspace that embodied their company's ethos of mindful productivity. They wanted an office that people would actively want to be in — a space that reduced stress, encouraged collaboration, and felt distinctly different from every other corporate environment in the district.",
    designObjectives:
      "To create a workspace that balances open collaboration with deep focus, integrates acoustic design seamlessly into the visual language, and expresses the company's brand identity through spatial experience rather than surface-level graphics.",
    context:
      "Occupying an entire floor of a commercial tower in the business heart of Dhaka, the space needed to accommodate 45 employees across departments while maintaining the intimate, focused atmosphere the client valued.",
    challenges:
      "The floor plate had low ceiling heights and minimal natural light penetration beyond the perimeter. Dense HVAC infrastructure further constrained ceiling design. We needed to create a sense of openness and calm within genuinely restrictive physical parameters.",
    overallConcept:
      "The Breathing Grid — a modular spatial framework that alternates between zones of expansion (collaborative areas with higher perceived ceilings and wider sight lines) and compression (focus pods and meeting rooms with lower, more intimate proportions). The rhythm mirrors natural breathing patterns, creating an environment that unconsciously promotes calm.",
    designPhilosophy: {
      spacePlanning:
        "The floor plan radiates from a central communal hub — the heartbeat of the office — outward toward progressively quieter zones. Collaborative spaces face the perimeter for natural light, while focus pods are internalized with controlled artificial light.",
      materialSelection:
        "Micro-cement floors provide a monolithic base that unifies the entire space. Fluted timber panels add warmth and acoustic absorption. Acoustic felt in deep earth tones creates visual depth while controlling reverberation. Blackened steel frames provide structural rhythm.",
      lighting:
        "Human-centric lighting with circadian-responsive color temperatures. Task lighting at individual workstations operates independently from ambient systems. Feature pendant clusters define gathering points and create visual landmarks for wayfinding.",
      colorPalette:
        "A considered palette of charcoal, warm grey, sand, and deep forest green. Brand colors appear only at key moments — the reception desk, meeting room accent walls, and wayfinding signage — creating a subtle integration rather than visual dominance.",
      furnitureChoices:
        "Ergonomic workstations paired with bespoke communal tables crafted from reclaimed timber. Soft seating in breakout areas uses high-durability natural fabrics. All furniture was selected for both comfort during extended use and visual coherence with the material palette.",
      userExperience:
        "The spatial sequence guides employees from the energizing arrival experience through collaborative zones to individual focus areas. Transitions between zones are marked by material shifts underfoot and subtle changes in lighting warmth.",
      emotionalAtmosphere:
        "The office feels like a refined workshop rather than a corporate environment. There is a sense of purposeful calm — every surface and spatial decision supports concentrated work while maintaining human warmth and connection.",
    },
    designHighlights: [
      {
        icon: "Volume2",
        title: "Acoustic Performance Engineering",
        description:
          "Custom acoustic strategy achieving NRC 0.85 in focus zones, using material-integrated sound absorption rather than visible panels.",
      },
      {
        icon: "Sun",
        title: "Circadian Lighting System",
        description:
          "Automated lighting that adjusts color temperature from energizing 5000K mornings to relaxing 2700K afternoons.",
      },
      {
        icon: "Recycle",
        title: "Reclaimed Material Integration",
        description:
          "Communal tables crafted from century-old reclaimed teak, preserving history while reducing environmental impact.",
      },
      {
        icon: "Maximize2",
        title: "Modular Space Configuration",
        description:
          "Movable timber partition system allows the floor plan to adapt for different team configurations and event hosting.",
      },
    ],
    clientTestimonial: {
      quote:
        "Our team's productivity and wellbeing have measurably improved since moving into this space. People comment on how calm and focused they feel the moment they step off the elevator. Liminal didn't just design an office — they designed a better way of working.",
      name: "Marcus Thorne",
      role: "Founder, Corporate Zen",
      avatar: "https://i.pravatar.cc/150?img=56",
    },
    isFeatured: true,
  },
  {
    id: "3",
    slug: "marble-haven",
    title: "Marble Haven",
    category: "Interior Design",
    type: "Residential",
    location: "Gulshan, Dhaka",
    area: "3,100 sq ft",
    completionYear: "2024",
    timeline: "11 Months",
    status: "Completed",
    interiorStyle: "Organic Modern",
    scope: "Interior Design & Renovation",
    services: [
      "Interior Design",
      "Renovation",
      "Custom Furniture",
      "Material Sourcing",
      "Styling",
    ],
    materials: [
      "Book-Matched Marble",
      "Fluted Limestone",
      "Warm Bronze",
      "White Oak",
      "Bouclé Textiles",
    ],
    photographyCredit: "Liminal Studio Archives",
    heroImage: "/assets/projects/minimalist-hero.png",
    galleryImages: [
      {
        src: "/assets/projects/minimalist-interior-1.png",
        alt: "Marble Haven living area with book-matched marble wall",
        caption: "Living Area — Book-Matched Marble Feature",
        span: "full",
      },
      {
        src: "/assets/projects/minimalist-interior-2.png",
        alt: "Marble Haven dining space with fluted limestone columns",
        caption: "Dining Space — Limestone Rhythm",
        span: "half",
      },
      {
        src: "/assets/projects/bathroom.png",
        alt: "Marble Haven luxury bathroom with warm bronze fixtures",
        caption: "Master Bath — Bronze & Stone",
        span: "half",
      },
      {
        src: "/assets/projects/minimalist-sanctuary.png",
        alt: "Marble Haven master bedroom with organic textures",
        caption: "Bedroom — Organic Tranquility",
        span: "full",
      },
    ],
    shortIntro:
      "A 3,100 square foot family residence where book-matched marble and organic textures create an environment of sculptural serenity — a home that feels both grounding and aspirational.",
    clientVision:
      "A young family wanted their first home to feel enduringly sophisticated without being cold or untouchable. They admired the permanence of natural stone but worried about creating a space that felt like a showroom rather than a home.",
    designObjectives:
      "To balance monumental stone with soft, approachable textures. To create a home that photographs beautifully but, more importantly, feels warm and inviting when lived in daily.",
    context:
      "A newly constructed apartment in Gulshan's most sought-after residential tower. The blank canvas offered freedom but also the challenge of creating character and warmth in a space with no existing architectural features.",
    challenges:
      "Sourcing a single marble block large enough for book-matching across a four-meter feature wall. Integrating underfloor heating with stone flooring without compromising thermal efficiency. Balancing the client's desire for bold stone presence with a child-friendly environment.",
    overallConcept:
      "The Geological Home — inspired by the idea that a home should feel as though it grew from the earth itself. Stone grounds the space, timber adds organic warmth, and textiles soften edges — each layer representing a geological stratum of comfort and permanence.",
    designPhilosophy: {
      spacePlanning:
        "An open-plan living, dining, and kitchen zone flows around a central marble island that serves as both functional anchor and sculptural centerpiece. Private zones are accessed through a corridor defined by fluted limestone columns.",
      materialSelection:
        "Book-matched Calacatta marble creates a dramatic living room feature wall. Fluted limestone columns add texture and rhythm. White oak flooring and bouclé upholstery introduce warmth, while warm bronze fixtures and hardware provide subtle metallic luminosity.",
      lighting:
        "Concealed perimeter lighting washes the marble wall to enhance its veining. Pendant clusters above the dining table create intimate focal lighting. Reading nooks feature adjustable wall-mounted fixtures with warm brass finishes.",
      colorPalette:
        "White, cream, warm grey, and touches of sage green. The marble's natural veining provides organic pattern, reducing the need for decorative color. Bronze accents add depth without introducing competing hues.",
      furnitureChoices:
        "Low-profile, rounded furniture forms that complement the stone's angular geometry. Custom bouclé sofas with deep seats for family comfort. A bespoke dining table with a marble base and white oak top bridges the material narrative.",
      userExperience:
        "The home feels like a progression from public grandeur to private softness. The marble-dominated living area gradually transitions through the limestone corridor into the textile-rich bedrooms, creating a sensory journey from cool permanence to warm embrace.",
      emotionalAtmosphere:
        "Sculptural yet approachable. The monumental stone features provide a sense of gravity and significance, while the soft textures and warm lighting ensure the space never feels cold or intimidating. It is a home that impresses without exhausting.",
    },
    designHighlights: [
      {
        icon: "Diamond",
        title: "Book-Matched Marble Feature",
        description:
          "A single Calacatta marble block, split and mirrored to create a symmetrical four-meter feature wall of extraordinary natural beauty.",
      },
      {
        icon: "Columns3",
        title: "Fluted Limestone Colonnade",
        description:
          "Custom-carved limestone columns with contemporary fluting that reference classical architecture while maintaining a modern sensibility.",
      },
      {
        icon: "ThermometerSun",
        title: "Integrated Climate Comfort",
        description:
          "Underfloor heating beneath stone flooring ensures the natural stone surfaces feel warm and comfortable year-round.",
      },
      {
        icon: "Baby",
        title: "Child-Friendly Luxury",
        description:
          "Rounded furniture edges, washable bouclé upholstery, and concealed storage make luxury living compatible with family life.",
      },
    ],
    clientTestimonial: {
      quote:
        "We were nervous about using so much stone in a family home, but Liminal balanced it perfectly. Our children play freely while we live surrounded by genuine beauty. Friends can't believe how warm and inviting it feels despite the marble — that's the Liminal magic.",
      name: "Tanvir Kabir",
      role: "Client, Marble Haven",
      avatar: "https://i.pravatar.cc/150?img=68",
    },
    isFeatured: true,
  },
  {
    id: "4",
    slug: "the-glass-pavilion",
    title: "The Glass Pavilion",
    category: "Architecture",
    type: "Cultural",
    location: "Dhanmondi, Dhaka",
    area: "6,800 sq ft",
    completionYear: "2023",
    timeline: "18 Months",
    status: "Completed",
    interiorStyle: "Industrial Refined",
    scope: "Architectural Design & Interior Fit-Out",
    services: [
      "Architectural Design",
      "Interior Design",
      "Landscape Integration",
      "Exhibition Design",
      "Lighting Design",
    ],
    materials: [
      "Structural Glass",
      "Exposed Concrete",
      "Corten Steel",
      "Polished Aggregate",
      "Raw Timber",
    ],
    photographyCredit: "Liminal Studio Archives",
    heroImage: "/assets/projects/glass-house.png",
    galleryImages: [
      {
        src: "/assets/projects/pavilion.png",
        alt: "The Glass Pavilion exterior with Corten steel and glass",
        caption: "Exterior — Corten & Glass Dialogue",
        span: "full",
      },
      {
        src: "/assets/projects/premium-cultural.png",
        alt: "The Glass Pavilion main gallery space",
        caption: "Main Gallery — Raw Concrete & Light",
        span: "half",
      },
      {
        src: "/assets/projects/museum-wing.png",
        alt: "The Glass Pavilion exhibition wing",
        caption: "Exhibition Wing — Curated Volumes",
        span: "half",
      },
      {
        src: "/assets/projects/gallery-1.png",
        alt: "The Glass Pavilion detail of structural glass connection",
        caption: "Detail — Structural Glass Junction",
        span: "half",
      },
      {
        src: "/assets/projects/gallery-2.png",
        alt: "The Glass Pavilion landscape integration",
        caption: "Landscape — Inside-Outside Blur",
        span: "half",
      },
    ],
    shortIntro:
      "A 6,800 square foot cultural pavilion where structural glass, exposed concrete, and Corten steel create a dialogue between art and architecture — a building that is itself an exhibit.",
    clientVision:
      "An arts foundation sought a multipurpose cultural space that could host exhibitions, lectures, and intimate performances. The building needed to be as architecturally significant as the art it would house, becoming a destination in itself.",
    designObjectives:
      "To create a building that dissolves the boundary between inside and outside, allows maximum flexibility for diverse programming, and provides gallery-quality environmental control while maintaining architectural transparency.",
    context:
      "Situated on a leafy corner plot in Dhanmondi's cultural precinct, the site offered mature trees and a quiet residential character. The design needed to be boldly contemporary while respecting the scale and atmosphere of the neighborhood.",
    challenges:
      "Achieving structural glass spans of up to six meters without visible framing. Managing solar heat gain through floor-to-ceiling glazing in Dhaka's climate. Creating acoustic isolation between the performance space and gallery areas within an otherwise open architectural concept.",
    overallConcept:
      "The Transparent Threshold — a building conceived as a series of glass and concrete planes that slide past each other, creating partially enclosed volumes that blur the distinction between gallery, garden, and city. The architecture creates thresholds everywhere — you are always simultaneously inside and outside, seeing through the building to the landscape beyond.",
    designPhilosophy: {
      spacePlanning:
        "The plan consists of three interlocking rectangular volumes — gallery, performance, and administration — connected by glass corridors that frame garden views. The main gallery has no fixed walls, allowing complete reconfiguration for each exhibition.",
      materialSelection:
        "Structural glass panels provide transparency and lightness. Exposed concrete ceilings and walls offer thermal mass and a raw textural backdrop for art. Corten steel exterior cladding weathers naturally, evolving the building's appearance over time. Polished aggregate floors provide durability with visual depth.",
      lighting:
        "A dual lighting system combines museum-grade track lighting with flexible color temperature control for exhibitions, and ambient uplighting that washes concrete surfaces for evening events. Natural light is managed through automated exterior blinds.",
      colorPalette:
        "The palette is entirely material-driven: concrete grey, Corten rust, glass transparency, and the green of surrounding landscape. No applied color — every hue is honest to its material origin.",
      furnitureChoices:
        "Minimal, moveable furniture including raw timber benches for gallery seating, lightweight aluminum lecture chairs, and custom reception pieces in Corten steel and concrete. All furniture is designed to be cleared completely for exhibitions.",
      userExperience:
        "Visitors experience a gradual transition from the leafy exterior through an open forecourt into the main gallery volume. The glass walls create a constant awareness of nature and sky, ensuring the art experience remains connected to the natural world.",
      emotionalAtmosphere:
        "The pavilion creates a sense of lightness, transparency, and intellectual openness. It feels like being inside a thought — clear, structured, but permeable. The honesty of raw materials creates an atmosphere of trust and authenticity.",
    },
    designHighlights: [
      {
        icon: "Frame",
        title: "Structural Glass Innovation",
        description:
          "Six-meter frameless glass spans using point-fixed structural silicone glazing, achieving maximum transparency with minimal structure.",
      },
      {
        icon: "TreePine",
        title: "Landscape Integration",
        description:
          "Three existing mature trees preserved and integrated into the building's courtyard, with root zones protected by cantilevered foundations.",
      },
      {
        icon: "Thermometer",
        title: "Passive Climate Strategy",
        description:
          "Automated exterior blinds and thermal mass concrete reduce cooling loads by 40% compared to conventional glazed buildings.",
      },
      {
        icon: "Palette",
        title: "Gallery-Grade Environment",
        description:
          "Museum-standard climate control maintaining 21°C ±1° and 50% RH ±5% for conservation-quality art display.",
      },
    ],
    clientTestimonial: {
      quote:
        "Liminal created a building that artists love to exhibit in. The quality of light, the raw honesty of materials, and the connection to the garden create an atmosphere that elevates every artwork we show. It has become a cultural landmark in its own right.",
      name: "Farhan Huq",
      role: "Curator, Arts Foundation",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    isFeatured: false,
  },
  {
    id: "5",
    slug: "sanctuary-penthouse",
    title: "Sanctuary Penthouse",
    category: "Renovation",
    type: "Residential",
    location: "Banani, Dhaka",
    area: "3,800 sq ft",
    completionYear: "2023",
    timeline: "12 Months",
    status: "Completed",
    interiorStyle: "Scandinavian Luxe",
    scope: "Complete Renovation & Interior Design",
    services: [
      "Renovation",
      "Interior Design",
      "Lighting Design",
      "Custom Storage",
      "Textile Curation",
    ],
    materials: [
      "White Oak",
      "Venetian Plaster",
      "Polished Nickel",
      "Cashmere Textiles",
      "Honed Basalt",
    ],
    photographyCredit: "Liminal Studio Archives",
    heroImage: "/assets/projects/penthouse.png",
    galleryImages: [
      {
        src: "/assets/projects/residential-premium.png",
        alt: "Sanctuary Penthouse living room with Venetian plaster walls",
        caption: "Living Room — Venetian Plaster Warmth",
        span: "full",
      },
      {
        src: "/assets/projects/bedroom.png",
        alt: "Sanctuary Penthouse bedroom with linen canopy",
        caption: "Master Suite — Linen Canopy & Oak",
        span: "half",
      },
      {
        src: "/assets/projects/kitchen.png",
        alt: "Sanctuary Penthouse kitchen with basalt counters",
        caption: "Kitchen — Basalt & White Oak",
        span: "half",
      },
      {
        src: "/assets/projects/living-room.png",
        alt: "Sanctuary Penthouse reading nook with city views",
        caption: "Reading Nook — City Panorama",
        span: "full",
      },
    ],
    shortIntro:
      "A 3,800 square foot penthouse renovation that transformed a dated luxury apartment into a Scandinavian-inspired sanctuary where Venetian plaster, white oak, and cashmere textiles create an environment of cultivated tranquility.",
    clientVision:
      "An established couple, downsizing from a large family home, wanted their penthouse to feel like a Nordic retreat in the heart of Dhaka. They desired simplicity, warmth, and a deep sense of calm — a space that celebrated light, texture, and the art of living well with less.",
    designObjectives:
      "To strip away decades of ornate detailing and replace them with quiet, considered surfaces. To maximize the penthouse's extraordinary views and natural light while creating intimate, cocooning spaces for rest and reflection.",
    context:
      "A top-floor apartment in one of Banani's earliest luxury towers. The building offered solid construction and generous proportions but the interior was trapped in a previous era of gilt mirrors, heavy curtains, and dark wood paneling.",
    challenges:
      "Removing extensive ornamental plasterwork without damaging the underlying structure. Updating the building's original plumbing and electrical systems within walls that could not be significantly altered. Creating a sense of lightness and expansion within a structure designed for visual heaviness.",
    overallConcept:
      "The Nordic Sanctuary — a design philosophy rooted in hygge and the Scandinavian tradition of finding beauty in simplicity. Every surface is reduced to its essence, every material is chosen for its natural warmth, and every space is designed to encourage mindful presence.",
    designPhilosophy: {
      spacePlanning:
        "The renovation opened the main living area into a single flowing space oriented toward the best views. The former formal dining room became a library alcove. Two guest bedrooms were consolidated into a generous master suite with separate his-and-hers dressing areas.",
      materialSelection:
        "Venetian plaster walls provide a luminous, handcrafted surface that changes character with the light. White oak flooring and millwork create warmth and continuity. Honed basalt in wet areas adds grounding darkness. Polished nickel hardware provides quiet metallic accent.",
      lighting:
        "Minimal visible fixtures — recessed slots in ceiling and wall niches provide ambient illumination. Large-format windows are dressed with sheer linen panels that filter light without blocking views. Candle-height table lamps encourage evening intimacy.",
      colorPalette:
        "Off-white, pale ash, warm grey, and muted blush. The palette evolves from cooler tones in daytime spaces to warmer, deeper shades in the bedroom suite. No primary colors — warmth comes from material, not pigment.",
      furnitureChoices:
        "Low Scandinavian-inspired furniture with organic curves and natural fabric upholstery. Vintage Danish pieces mixed with custom designs. Emphasis on comfort and tactility — every surface invites touch.",
      userExperience:
        "Entry through a compressed vestibule with Venetian plaster walls releases into the panoramic living space — a deliberate moment of spatial drama. The apartment flows from social to private with graduated intimacy.",
      emotionalAtmosphere:
        "The penthouse feels like a warm embrace. Soft, luminous surfaces absorb the day's stress. The quietness of the material palette allows the mind to rest. Cashmere throws and linen curtains move gently in the breeze — the space breathes.",
    },
    designHighlights: [
      {
        icon: "Paintbrush",
        title: "Artisan Venetian Plaster",
        description:
          "Hand-applied Venetian plaster across all main walls by master craftsmen, creating a luminous surface with depth and movement.",
      },
      {
        icon: "Wind",
        title: "Natural Ventilation Design",
        description:
          "Cross-ventilation corridors and operable clerestory windows reduce dependence on mechanical cooling by 35%.",
      },
      {
        icon: "Gem",
        title: "Vintage Danish Furniture Curation",
        description:
          "Authentic mid-century Danish pieces sourced from European dealers, restored and reupholstered in natural fabrics.",
      },
      {
        icon: "Eye",
        title: "Panoramic View Optimization",
        description:
          "Window treatments and furniture placement carefully designed to frame and maximize the penthouse's 270-degree city views.",
      },
    ],
    clientTestimonial: {
      quote:
        "After decades in a grand, ornate home, we feared that simplicity might feel like deprivation. Liminal proved us completely wrong. This apartment feels more luxurious than anything we've ever lived in — because the luxury is in the quality of every surface and the peace of every room.",
      name: "Michael Vance",
      role: "Client, Sanctuary Penthouse",
      avatar: "https://i.pravatar.cc/150?img=55",
    },
    isFeatured: false,
  },
  {
    id: "6",
    slug: "urban-loft-studio",
    title: "Urban Loft Studio",
    category: "Renovation",
    type: "Commercial",
    location: "Uttara, Dhaka",
    area: "2,400 sq ft",
    completionYear: "2023",
    timeline: "8 Months",
    status: "Completed",
    interiorStyle: "Industrial Refined",
    scope: "Renovation & Creative Studio Design",
    services: [
      "Renovation",
      "Interior Design",
      "Furniture Design",
      "Acoustic Design",
      "Brand Identity Integration",
    ],
    materials: [
      "Exposed Brick",
      "Raw Steel",
      "Polished Concrete",
      "Reclaimed Wood",
      "Industrial Glass",
    ],
    photographyCredit: "Liminal Studio Archives",
    heroImage: "/assets/projects/urban-loft.png",
    galleryImages: [
      {
        src: "/assets/projects/project-corporate.png",
        alt: "Urban Loft Studio main creative workspace",
        caption: "Main Studio — Industrial Poetry",
        span: "full",
      },
      {
        src: "/assets/projects/project-1.png",
        alt: "Urban Loft Studio material library corner",
        caption: "Material Library — Curated Inspiration",
        span: "half",
      },
      {
        src: "/assets/projects/project-2.png",
        alt: "Urban Loft Studio meeting area with reclaimed wood table",
        caption: "Meeting Space — Reclaimed Timber",
        span: "half",
      },
      {
        src: "/assets/projects/project-4.png",
        alt: "Urban Loft Studio lounge with exposed brick",
        caption: "Client Lounge — Brick & Steel",
        span: "half",
      },
      {
        src: "/assets/projects/project-6.png",
        alt: "Urban Loft Studio workshop and prototyping area",
        caption: "Workshop — Making Space",
        span: "half",
      },
    ],
    shortIntro:
      "A 2,400 square foot former warehouse unit transformed into a creative studio that celebrates the raw beauty of industrial materials while providing a refined, inspiring environment for design work.",
    clientVision:
      "A growing design collective needed a studio that reflected their creative philosophy — honest, hands-on, and materially driven. They wanted a workspace that felt like a workshop, not a corporate office, while still being professional enough for client meetings.",
    designObjectives:
      "To preserve and enhance the building's industrial character while creating a functional, comfortable workspace. To design a space that inspires creativity through material honesty and spatial generosity.",
    context:
      "A ground-floor warehouse unit in an industrial precinct of Uttara undergoing creative repurposing. The raw space featured exposed brick walls, steel columns, and generous ceiling heights — an ideal canvas for industrial-refined design.",
    challenges:
      "The existing structure had significant moisture issues requiring comprehensive waterproofing before interior work could begin. The open warehouse acoustics created echo problems for video calls and client presentations. Uneven floors required leveling while preserving the industrial character.",
    overallConcept:
      "The Honest Workshop — a space that celebrates the beauty of making. Every material is visible, every connection is expressed, and every surface tells the story of its construction. The design adds refinement without concealing the building's industrial truth.",
    designPhilosophy: {
      spacePlanning:
        "A central open studio dominates the space, flanked by a material library, a meeting room with industrial glass partitions, a client lounge, and a small workshop for physical prototyping. The plan maintains visual connectivity across all areas.",
      materialSelection:
        "Existing brick walls were cleaned and sealed, revealing their rich terracotta warmth. New steel elements — shelving, partitions, mezzanine railings — are finished in matte black. Polished concrete floors provide a continuous, low-maintenance surface. Reclaimed wood adds historical warmth.",
      lighting:
        "Industrial pendant fixtures with exposed Edison bulbs provide ambient warmth. Adjustable task lights on articulated arms serve individual workstations. Track lighting with LED spots illuminates the material library and exhibition wall.",
      colorPalette:
        "The palette emerges entirely from materials: brick red-brown, steel black, concrete grey, and reclaimed wood honey. The only added color comes from the work displayed on the studio walls — the space is deliberately neutral to let creative work take center stage.",
      furnitureChoices:
        "Custom steel-frame desks with reclaimed wood tops. Industrial stools and task chairs. A large communal table built from a single reclaimed timber slab supported by raw steel trestles. Vintage industrial shelving for material storage.",
      userExperience:
        "Entering through a reclaimed timber and steel pivot door, visitors experience the full volume of the space immediately. The material library acts as a curated gallery of textures and samples. The client lounge offers comfortable seating within the industrial atmosphere.",
      emotionalAtmosphere:
        "The studio feels alive and purposeful — a space where work happens and materials are celebrated. The industrial honesty creates an atmosphere of authenticity and creative energy. It is a space that feels both rugged and refined.",
    },
    designHighlights: [
      {
        icon: "Hammer",
        title: "Custom Craftsmanship",
        description:
          "All steel furniture and fixtures fabricated by local metalworkers, celebrating traditional craft within a contemporary design framework.",
      },
      {
        icon: "Warehouse",
        title: "Heritage Preservation",
        description:
          "Original brick walls, steel columns, and timber trusses preserved and restored, maintaining the building's industrial narrative.",
      },
      {
        icon: "Mic",
        title: "Acoustic Zoning",
        description:
          "Strategic use of acoustic panels disguised as display boards, creating quiet zones for calls and presentations within the open plan.",
      },
      {
        icon: "Droplets",
        title: "Comprehensive Waterproofing",
        description:
          "Full basement-grade waterproofing system installed before fit-out, ensuring long-term protection against the building's historical moisture issues.",
      },
    ],
    clientTestimonial: {
      quote:
        "Liminal took our raw warehouse and turned it into the studio we always dreamed of. Clients are impressed the moment they walk in, and our team has never been more inspired. The space feels like it was always meant to be this way — they just revealed what was already there.",
      name: "Farhan Huq",
      role: "Founder, Design Collective",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    isFeatured: false,
  },
];

// ─────────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────────

// Get featured project
export const getFeaturedProject = (): IProject | undefined =>
  projects.find((p) => p.isFeatured);

// Get a project by slug or id
export const getProjectBySlug = (slug: string): IProject | undefined =>
  projects.find((p) => p.slug === slug || p.id === slug);

// Get related projects (same type, excluding current)
export const getRelatedProjects = (
  currentId: string,
  limit: number = 3
): IProject[] => {
  const current = projects.find((p) => p.id === currentId);
  if (!current) return [];

  const sameType = projects.filter(
    (p) => p.id !== currentId && p.type === current.type
  );

  if (sameType.length >= limit) {
    return sameType.slice(0, limit);
  }

  const others = projects.filter(
    (p) => p.id !== currentId && p.type !== current.type
  );

  return [...sameType, ...others].slice(0, limit);
};

// Filter and sort projects
export const filterProjects = (options: {
  search?: string;
  category?: string;
  type?: string;
  style?: string;
  location?: string;
  year?: string;
  featured?: boolean;
  sort?: ProjectSortValue;
}): IProject[] => {
  let results = [...projects];

  // Category filter
  if (options.category && options.category !== "All") {
    results = results.filter((p) => p.category === options.category);
  }

  // Type filter
  if (options.type && options.type !== "All Types") {
    results = results.filter((p) => p.type === options.type);
  }

  // Style filter
  if (options.style && options.style !== "All Styles") {
    results = results.filter((p) => p.interiorStyle === options.style);
  }

  // Location filter
  if (options.location && options.location !== "All Locations") {
    results = results.filter((p) => p.location === options.location);
  }

  // Year filter
  if (options.year && options.year !== "All Years") {
    results = results.filter((p) => p.completionYear === options.year);
  }

  // Featured filter
  if (options.featured) {
    results = results.filter((p) => p.isFeatured);
  }

  // Search filter
  if (options.search?.trim()) {
    const query = options.search.toLowerCase().trim();
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query) ||
        p.shortIntro.toLowerCase().includes(query)
    );
  }

  // Sort
  switch (options.sort) {
    case "oldest":
      results.sort(
        (a, b) => parseInt(a.completionYear) - parseInt(b.completionYear)
      );
      break;
    case "az":
      results.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "za":
      results.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "newest":
    default:
      results.sort(
        (a, b) => parseInt(b.completionYear) - parseInt(a.completionYear)
      );
      break;
  }

  return results;
};
