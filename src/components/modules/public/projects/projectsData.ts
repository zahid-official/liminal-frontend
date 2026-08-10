// Gallery Image Interface
export interface IProjectGalleryImage {
  url: string;
  caption?: string;
}

// Project Status Type
export type ProjectStatus = "Completed" | "In Progress" | "Concept";

// Project Categories
export const projectCategories = [
  "All",
  "Residential",
  "Commercial",
  "Institutional",
  "Interior",
] as const;
export type ProjectCategory = (typeof projectCategories)[number];

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

export interface IProjectNarratives {
  projectContext: string;
  clientVision: string;
  designObjectives: string;
  spatialChallenges: string;
  overallConcept: string;
  theRealization: string;
}

// Project Interface
export interface IProject {
  id: string;
  title: string;
  slug: string;
  category: string;
  projectType: string;
  interiorStyle: string;
  isFeatured: boolean;
  status: ProjectStatus;
  area: string;
  location: string;
  duration: string;
  completionYear: string;
  thumbnail: string;
  thumbnailCaption?: string;
  galleryImages: IProjectGalleryImage[];
  description: string;
  narratives: IProjectNarratives;
}

// ─────────────────────────────────────────────
// Mock Project Data
// ─────────────────────────────────────────────

export const projects: IProject[] = [
  {
    id: "1",
    title: "Apex Residence",
    slug: "apex-residence",
    category: "Interior",
    projectType: "Private Residence",
    interiorStyle: "Contemporary Minimal",
    isFeatured: true,
    status: "Completed",
    area: "4,200 sq ft",
    location: "Baridhara, Dhaka",
    duration: "14 Months",
    completionYear: "2024",
    thumbnail: "/assets/projects/apex-residence.png",
    galleryImages: [
      {
        url: "/assets/projects/liminal-living-room.png",
        caption: "Living Room - Travertine Feature Wall",
      },
      {
        url: "/assets/projects/liminal-kitchen.png",
        caption: "Kitchen - Walnut Cabinetry & Stone Counters",
      },
      {
        url: "/assets/projects/liminal-bedroom.png",
        caption: "Master Bedroom - Serene Sanctuary",
      },
      {
        url: "/assets/projects/liminal-bathroom.png",
        caption: "Bathroom - Italian Marble Surfaces",
      },
      {
        url: "/assets/projects/liminal-lounge.png",
        caption: "Art Lounge - Curated Collection",
      },
      {
        url: "/assets/projects/interior-premium.png",
        caption: "Hallway - Brass Detail & Natural Light",
      },
    ],
    description:
      "A transformative residential project where minimalist architecture meets warm materiality. The Apex Residence redefines modern living through carefully orchestrated spatial sequences, natural light choreography, and a material palette that bridges contemporary precision with timeless comfort.",
    narratives: {
      projectContext:
        "Located on the top floor of a premium residential tower in Baridhara, the space offered panoramic views and abundant natural light. The challenge was to honor these qualities while creating defined interior zones that maintained visual continuity.",
      clientVision:
        "The client, an art collector, envisioned a home serving as both a private retreat and a gallery for their collection. They sought spaces that felt calm and refined without sacrificing warmth or livability - a home where every room tells a story.",
      designObjectives:
        "To create a seamless spatial narrative where art, architecture, and daily life coexist. Every transition needed to feel intentional, and every material needed to resonate with the client's sensibility for authenticity and craft.",
      spatialChallenges:
        "The original floor plan featured fragmented rooms with inconsistent ceiling heights. Structural columns interrupted sight lines, and limited electrical systems restricted lighting. We opened key walls while preserving structural integrity.",
      overallConcept:
        "The Threshold Continuum - inspired by Liminal's core philosophy, the design creates spatial thresholds where rooms gradually reveal themselves. Materials shift from stone to timber as light narrows and expands, creating an emotional journey.",
      theRealization:
        "The home radiates a quiet confidence - spaces that feel both grounded and elevated, substantial yet serene. The interplay of natural light with stone and timber creates a meditative quality that deepens with each visit.",
    },
  },
  {
    id: "2",
    title: "Corporate Zen",
    slug: "corporate-zen",
    category: "Commercial",
    projectType: "Corporate Office",
    interiorStyle: "Warm Modernism",
    isFeatured: true,
    status: "Completed",
    area: "8,500 sq ft",
    location: "Motijheel, Dhaka",
    duration: "10 Months",
    completionYear: "2024",
    thumbnail: "/assets/projects/corporate-zen.png",
    galleryImages: [
      {
        url: "/assets/projects/liminal-office.png",
        caption: "Open Workspace - Timber & Light",
      },
      {
        url: "/assets/projects/office-zen.png",
        caption: "Focus Pods - Acoustic Privacy",
      },
      {
        url: "/assets/projects/premium-office.png",
        caption: "Meeting Suite - Refined Formality",
      },
      {
        url: "/assets/projects/office.png",
        caption: "Collaboration Zone - Casual Geometry",
      },
    ],
    description:
      "A forward-thinking corporate workspace where biophilic design meets precision engineering. Corporate Zen redefines office life through a modular spatial framework, circadian-responsive lighting, and a soothing material palette of timber and stone that balances productivity with sensory wellbeing.",
    narratives: {
      projectContext:
        "Occupying an entire floor of a commercial tower in the business heart of Dhaka, the space needed to accommodate 45 employees across departments while maintaining the intimate, focused atmosphere the client valued.",
      clientVision:
        "The partners sought a workspace embodying their company's ethos of mindful productivity. They wanted an office employees would actively want to be in - reducing stress, encouraging collaboration, and feeling different from typical corporate spaces.",
      designObjectives:
        "To create a workspace that balances open collaboration with deep focus, integrates acoustic design seamlessly into the visual language and expresses the company's brand identity through spatial experience rather than surface-level graphics.",
      spatialChallenges:
        "The floor plate had low ceiling heights and minimal natural light. Dense HVAC infrastructure further constrained the ceiling design. We needed to create a sense of openness and calm within genuinely restrictive physical parameters.",
      overallConcept:
        "The Breathing Grid - a modular framework alternating between zones of expansion (collaborative areas with high ceilings) and compression (focus pods with intimate proportions). This rhythm mirrors natural breathing patterns to unconsciously promote calm.",
      theRealization:
        "The office feels like a refined workshop rather than a corporate environment. There is a sense of purposeful calm - every surface and spatial decision supports concentrated work while maintaining human warmth and connection.",
    },
  },
  {
    id: "3",
    title: "Marble Haven",
    slug: "marble-haven",
    category: "Interior",
    projectType: "Private Penthouse",
    interiorStyle: "Organic Modern",
    isFeatured: true,
    status: "Completed",
    area: "3,100 sq ft",
    location: "Gulshan, Dhaka",
    duration: "11 Months",
    completionYear: "2024",
    thumbnail: "/assets/projects/minimalist-hero.png",
    galleryImages: [
      {
        url: "/assets/projects/minimalist-interior-1.png",
        caption: "Living Area - Book-Matched Marble Feature",
      },
      {
        url: "/assets/projects/minimalist-interior-2.png",
        caption: "Dining Space - Limestone Rhythm",
      },
      {
        url: "/assets/projects/bathroom.png",
        caption: "Master Bath - Bronze & Stone",
      },
      {
        url: "/assets/projects/minimalist-sanctuary.png",
        caption: "Bedroom - Organic Tranquility",
      },
    ],
    description:
      "An elevated penthouse residence where monumental stone meets soft, textured interiors. Marble Haven redefines contemporary luxury through custom book-matched marble, fluted limestone columns, and a warm material dialogue that bridges raw texture with quiet sophistication.",
    narratives: {
      projectContext:
        "A newly constructed apartment in Gulshan's most sought-after residential tower. The blank canvas offered freedom but also the challenge of creating character and warmth in a space with no existing architectural features.",
      clientVision:
        "A young family wanted their first home to feel enduringly sophisticated without being cold. They admired the permanence of natural stone but worried about creating a space that felt like a showroom rather than a home.",
      designObjectives:
        "To balance monumental stone with soft, approachable textures. To create a home that photographs beautifully but, more importantly, feels warm and inviting when lived in daily.",
      spatialChallenges:
        "Sourcing a marble block large enough for book-matching across a four-meter wall, integrating underfloor heating with stone flooring without compromising thermal efficiency, and balancing a bold stone presence with a child-friendly environment.",
      overallConcept:
        "The Geological Home - inspired by the idea that a home should feel as though it grew from the earth. Stone grounds the space, timber adds organic warmth, and textiles soften edges - each layer representing a stratum of comfort and permanence.",
      theRealization:
        "Sculptural yet approachable. The monumental stone features provide a sense of gravity and significance, while the soft textures and warm lighting ensure the space never feels cold or intimidating. It is a home that impresses without exhausting.",
    },
  },
  {
    id: "4",
    title: "The Glass Pavilion",
    slug: "the-glass-pavilion",
    category: "Institutional",
    projectType: "Cultural Pavilion",
    interiorStyle: "Industrial Refined",
    isFeatured: false,
    status: "Completed",
    area: "6,800 sq ft",
    location: "Dhanmondi, Dhaka",
    duration: "18 Months",
    completionYear: "2023",
    thumbnail: "/assets/projects/glass-house.png",
    galleryImages: [
      {
        url: "/assets/projects/pavilion.png",
        caption: "Exterior - Corten & Glass Dialogue",
      },
      {
        url: "/assets/projects/premium-cultural.png",
        caption: "Main Gallery - Raw Concrete & Light",
      },
      {
        url: "/assets/projects/museum-wing.png",
        caption: "Exhibition Wing - Curated Volumes",
      },
      {
        url: "/assets/projects/gallery-1.png",
        caption: "Detail - Structural Glass Junction",
      },
      {
        url: "/assets/projects/gallery-2.png",
        caption: "Landscape - Inside-Outside Blur",
      },
    ],
    description:
      "A transparent cultural pavilion where raw concrete, glass, and Corten steel meet the landscape. The Glass Pavilion dissolves spatial boundaries through fluid thresholds, optimized natural daylighting, and an honest material expression that bridges structure with nature.",
    narratives: {
      projectContext:
        "Situated on a leafy corner plot in Dhanmondi's cultural precinct, the site offered mature trees and a quiet residential character. The design needed to be boldly contemporary while respecting the scale and atmosphere of the neighborhood.",
      clientVision:
        "An arts foundation sought a multipurpose cultural space for exhibitions, lectures and performances. The building needed to be as architecturally significant as the art it would house, becoming a destination in itself.",
      designObjectives:
        "To create a building that dissolves the boundary between inside and outside, allows maximum flexibility for diverse programming and provides gallery-quality environmental control while maintaining architectural transparency.",
      spatialChallenges:
        "Achieving structural glass spans of up to six meters without framing, managing solar heat gain through floor-to-ceiling glazing in Dhaka's climate, and creating acoustic isolation within an open architectural concept.",
      overallConcept:
        "The Transparent Threshold - glass and concrete planes sliding past each other, blurring the line between gallery, garden, and city. The design lets you feel inside and outside at once, seeing through the structure to the landscape.",
      theRealization:
        "The pavilion creates a sense of lightness, transparency and intellectual openness. It feels like being inside a thought - clear, structured, but permeable. The honesty of raw materials creates an atmosphere of trust and authenticity.",
    },
  },
  {
    id: "5",
    title: "Sanctuary Penthouse",
    slug: "sanctuary-penthouse",
    category: "Interior",
    projectType: "Private Penthouse",
    interiorStyle: "Scandinavian Luxe",
    isFeatured: false,
    status: "Completed",
    area: "3,800 sq ft",
    location: "Banani, Dhaka",
    duration: "12 Months",
    completionYear: "2023",
    thumbnail: "/assets/projects/penthouse.png",
    galleryImages: [
      {
        url: "/assets/projects/residential-premium.png",
        caption: "Living Room - Venetian Plaster Warmth",
      },
      {
        url: "/assets/projects/bedroom.png",
        caption: "Master Suite - Linen Canopy & Oak",
      },
      {
        url: "/assets/projects/kitchen.png",
        caption: "Kitchen - Basalt & White Oak",
      },
      {
        url: "/assets/projects/living-room.png",
        caption: "Reading Nook - City Panorama",
      },
    ],
    description:
      "A Nordic-inspired penthouse sanctuary where simple warmth meets expansive city views. The Sanctuary Penthouse redefines high-rise living through hand-applied Venetian plaster, light-filtering linen, and a white oak palette that bridges modern elegance with quiet tranquility.",
    narratives: {
      projectContext:
        "A top-floor apartment in one of Banani's earliest luxury towers. The building offered solid construction and generous proportions but the interior was trapped in a previous era of gilt mirrors, heavy curtains and dark wood paneling.",
      clientVision:
        "An established couple, downsizing from a large home, wanted their penthouse to feel like a Nordic retreat in Dhaka. They desired simplicity, warmth, and a deep sense of calm - a space celebrating light, texture, and the art of living well with less.",
      designObjectives:
        "To strip away decades of ornate detailing and replace them with quiet, considered surfaces. To maximize the penthouse's extraordinary views and natural light while creating intimate, cocooning spaces for rest and reflection.",
      spatialChallenges:
        "Removing extensive plasterwork without structural damage, updating original plumbing and wiring within unalterable walls, and creating a sense of lightness and expansion within a structure designed for visual heaviness.",
      overallConcept:
        "The Nordic Sanctuary - rooted in hygge and the Scandinavian tradition of finding beauty in simplicity. Every surface is reduced to its essence, every material is chosen for its natural warmth, and every space is designed to encourage mindful presence.",
      theRealization:
        "The penthouse feels like a warm embrace. Soft, luminous surfaces absorb the day's stress. The quietness of the material palette allows the mind to rest. Cashmere throws and linen curtains move gently in the breeze - the space breathes.",
    },
  },
  {
    id: "6",
    title: "Urban Loft Studio",
    slug: "urban-loft-studio",
    category: "Commercial",
    projectType: "Creative Studio",
    interiorStyle: "Industrial Refined",
    isFeatured: false,
    status: "Completed",
    area: "2,400 sq ft",
    location: "Uttara, Dhaka",
    duration: "8 Months",
    completionYear: "2023",
    thumbnail: "/assets/projects/urban-loft.png",
    galleryImages: [
      {
        url: "/assets/projects/project-corporate.png",
        caption: "Main Studio - Industrial Poetry",
      },
      {
        url: "/assets/projects/project-1.png",
        caption: "Material Library - Curated Inspiration",
      },
      {
        url: "/assets/projects/project-2.png",
        caption: "Meeting Space - Reclaimed Timber",
      },
      {
        url: "/assets/projects/project-4.png",
        caption: "Client Lounge - Brick & Steel",
      },
      {
        url: "/assets/projects/project-6.png",
        caption: "Workshop - Making Space",
      },
    ],
    description:
      "A dynamic creative workspace where industrial heritage meets contemporary collaboration. The Urban Loft Studio celebrates the beauty of making through exposed brickwork, raw steel partitions, and custom reclaimed timber details that bridge history with modern design.",
    narratives: {
      projectContext:
        "A ground-floor warehouse unit in an industrial precinct of Uttara undergoing creative repurposing. The raw space featured exposed brick walls, steel columns and generous ceiling heights - an ideal canvas for industrial-refined design.",
      clientVision:
        "A growing design collective needed a studio reflecting their creative philosophy - honest, hands-on, and materially driven. They wanted a workspace that felt like a workshop rather than a corporate office, while remaining professional for client meetings.",
      designObjectives:
        "To preserve and enhance the building's industrial character while creating a functional, comfortable workspace. To design a space that inspires creativity through material honesty and spatial generosity.",
      spatialChallenges:
        "The structure had moisture issues requiring waterproofing before interior work, and warehouse acoustics created echo problems for calls and presentations. Uneven floors also required leveling while preserving the industrial character.",
      overallConcept:
        "The Honest Workshop - a space that celebrates the beauty of making. Every material is visible, every connection is expressed and every surface tells the story of its construction. The design adds refinement without concealing the building's industrial truth.",
      theRealization:
        "The studio feels alive and purposeful - a space where work happens and materials are celebrated. The industrial honesty creates an atmosphere of authenticity and creative energy. It is a space that feels both rugged and refined.",
    },
  },
  {
    id: "7",
    title: "The Concrete Villa",
    slug: "concrete-villa",
    category: "Residential",
    projectType: "Private Villa",
    interiorStyle: "Contemporary Minimal",
    isFeatured: false,
    status: "Completed",
    area: "5,800 sq ft",
    location: "Gulshan, Dhaka",
    duration: "16 Months",
    completionYear: "2023",
    thumbnail: "/assets/projects/premium-villa.png",
    galleryImages: [
      {
        url: "/assets/projects/villa.png",
        caption: "Exterior - Concrete & Teak Harmony",
      },
      {
        url: "/assets/projects/staircase.png",
        caption: "Staircase - Floating Geometry",
      },
      {
        url: "/assets/projects/living-room.png",
        caption: "Living Space - Double Height Volume",
      },
    ],
    description:
      "A monolithic residential sanctuary where raw concrete meets a lush tropical landscape. The Concrete Villa redefines open-plan living through an internal courtyard, passive climate shading, and a double-height glass pavilion that bridges protective privacy with natural light.",
    narratives: {
      projectContext:
        "Located in a quiet residential pocket of Gulshan, surrounded by mature trees that the design works around.",
      clientVision:
        "The client wanted a multigenerational family home that felt strongly connected to nature, offering privacy from the busy city streets while maintaining open, light-filled communal spaces.",
      designObjectives:
        "To design a home that ages gracefully, utilizing raw materials that require minimal maintenance while optimizing airflow to reduce energy consumption.",
      spatialChallenges:
        "Developing high-quality fair-faced concrete surfaces in local humidity and designing cantilevered concrete slabs that shade the interior spaces from the harsh summer sun.",
      overallConcept:
        "The Monolithic Canopy - a raw concrete shell that acts as a protective shield while opening up to lush internal courtyards and water bodies.",
      theRealization:
        "A sense of absolute sanctuary, quiet protection and calm alignment with the elements.",
    },
  },
  {
    id: "8",
    title: "Bespoke Lounge",
    slug: "bespoke-lounge",
    category: "Interior",
    projectType: "Private Lounge",
    interiorStyle: "Organic Modern",
    isFeatured: false,
    status: "Completed",
    area: "1,200 sq ft",
    location: "Banani, Dhaka",
    duration: "6 Months",
    completionYear: "2022",
    thumbnail: "/assets/projects/project-furniture-bespoke.png",
    galleryImages: [
      {
        url: "/assets/projects/minimalist-interior-1.png",
        caption: "Bespoke Lounge - Curated Seating",
      },
      {
        url: "/assets/projects/project-1.png",
        caption: "Joinery Detail - Walnut & Brass",
      },
    ],
    description:
      "An intimate penthouse lounge where organic modernism meets highly tactile furniture design. The Bespoke Lounge redefines leisure spaces through hand-finished oiled walnut joinery, raw travertine elements, and a material palette that bridges sculptural beauty with conversational warmth.",
    narratives: {
      projectContext:
        "An addition to a luxury residence in Banani, serving as a quiet relaxation space away from the main family zones.",
      clientVision:
        "The client requested a dedicated lounge space in their penthouse to host intimate gatherings and relax, centered around custom furniture that acts as functional art.",
      designObjectives:
        "To craft individual furniture pieces that prioritize sculptural silhouettes, ergonomics and rare materials like oiled walnut and raw travertine.",
      spatialChallenges:
        "Sourcing flawless walnut timber with complex grain patterns and executing seamless hidden wood-to-metal joints for structural longevity.",
      overallConcept:
        "Sculpted Tactility - where every piece of furniture is designed to be touched and experienced, showcasing raw beauty without unnecessary ornamentation.",
      theRealization:
        "Warm, welcoming and deeply intimate - a place for slow conversations and quiet relaxation.",
    },
  },
  {
    id: "9",
    title: "Luxe Retail Atelier",
    slug: "retail-atelier",
    category: "Commercial",
    projectType: "Retail Boutique",
    interiorStyle: "Art Deco Revival",
    isFeatured: false,
    status: "Completed",
    area: "2,800 sq ft",
    location: "Gulshan, Dhaka",
    duration: "9 Months",
    completionYear: "2024",
    thumbnail: "/assets/projects/retail.png",
    galleryImages: [
      {
        url: "/assets/projects/project-2.png",
        caption: "Main Display - Fluted Glass & Gold",
      },
      {
        url: "/assets/projects/staircase.png",
        caption: "Mezzanine Transition - Sculpted Curves",
      },
    ],
    description:
      "An immersive fashion atelier where classical Art Deco symmetry meets contemporary minimalism. The Luxe Retail Atelier redefines the boutique experience through custom brass displays, honed marble pathways, and a material palette that bridges dramatic elegance with intimate comfort.",
    narratives: {
      projectContext:
        "A prominent multi-level storefront space in Gulshan's premium commercial hub.",
      clientVision:
        "A luxury fashion brand required an international-standard showroom that showcases garments like art pieces, establishing a sophisticated brand presence.",
      designObjectives:
        "To design custom brass display racks, integrate theatrical accent lighting and establish a luxurious fitting room suite for high-end clients.",
      spatialChallenges:
        "Balancing high-level lighting requirements for garment color accuracy with the warm, moody atmosphere requested by the brand identity.",
      overallConcept:
        "The Stage of Elegance - a sequence of gallery-like rooms that elevate the products, utilizing mirrors and gold finishes to create depth.",
      theRealization:
        "Exclusivity, premium luxury and artistic sophistication.",
    },
  },
  {
    id: "10",
    title: "Eco-Luxe Pavilion",
    slug: "eco-luxe-pavilion",
    category: "Commercial",
    projectType: "Sustainable Workspace",
    interiorStyle: "Organic Modern",
    isFeatured: false,
    status: "Completed",
    area: "7,500 sq ft",
    location: "Uttara, Dhaka",
    duration: "11 Months",
    completionYear: "2023",
    thumbnail: "/assets/projects/sustainable-premium.png",
    galleryImages: [
      {
        url: "/assets/projects/liminal-office.png",
        caption: "Collaboration Hub - Bamboo & Plants",
      },
      {
        url: "/assets/projects/project-6.png",
        caption: "Quiet Zone - Cork Wall Panels",
      },
    ],
    description:
      "A biophilic workspace where circular design meets healthy indoor ecosystems. The Eco-Luxe Pavilion redefines sustainable office spaces through self-watering green walls, natural cork acoustic panels, and daylight-harvesting systems that bridge human productivity with environmental harmony.",
    narratives: {
      projectContext:
        "A modern green-certified commercial building in Uttara, utilizing energy-efficient building infrastructure.",
      clientVision:
        "An environmental consultancy wanted an office that reflected their core mission, showcasing sustainable construction materials and optimizing employee wellbeing.",
      designObjectives:
        "To maximize natural daylight penetration, integrate vertical green walls and ensure all materials are zero-waste or highly recyclable.",
      spatialChallenges:
        "Engineering a self-watering vertical green wall system indoors without increasing local humidity past optimal comfort ranges.",
      overallConcept:
        "The Living Workspace - a spatial ecosystem where human productivity, indoor plants and natural materials coexist in dynamic balance.",
      theRealization:
        "Energizing, clean and deeply connected to nature - a breath of fresh air in the middle of the city.",
    },
  },
  {
    id: "11",
    title: "Metropolitan Bistro",
    slug: "metropolitan-bistro",
    category: "Commercial",
    projectType: "Bespoke Restaurant",
    interiorStyle: "Industrial Refined",
    isFeatured: false,
    status: "Completed",
    area: "3,200 sq ft",
    location: "Dhanmondi, Dhaka",
    duration: "7 Months",
    completionYear: "2022",
    thumbnail: "/assets/projects/commercial-premium.png",
    galleryImages: [
      {
        url: "/assets/projects/project-corporate.png",
        caption: "Bistro Dining - Terrazzo & Copper Details",
      },
      {
        url: "/assets/projects/project-4.png",
        caption: "Booth Seating - Brick & Oak",
      },
    ],
    description:
      "A high-energy bistro where raw industrial details meet warm culinary hospitality. The Metropolitan Bistro redefines shared dining through a hand-hammered central copper bar, exposed brick textures, and a material palette that bridges urban character with welcoming comfort.",
    narratives: {
      projectContext:
        "A converted warehouse-style commercial storefront in Dhanmondi's bustling dining street.",
      clientVision:
        "A culinary group desired a neighborhood eatery that feels rustic yet polished, serving as a social landmark for local food enthusiasts.",
      designObjectives:
        "To build a large central bar, optimize seating capacity without crowding and design custom lighting to make the food look spectacular.",
      spatialChallenges:
        "Integrating heavy-duty commercial kitchen ventilation through old building structures without disrupting residential tenants above.",
      overallConcept:
        "The Culinary Hearth - centered around the visual drama of a copper bar and open kitchen prep line, celebrating the shared joy of dining.",
      theRealization:
        "Lively, warm and inviting - a space that celebrates culinary craft and community.",
    },
  },
];

// ─────────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────────

// Get featured project
export const getFeaturedProject = (): IProject | undefined =>
  projects.find((p) => p.isFeatured);

// Get a project by slug
export const getProjectBySlug = (slug: string): IProject | undefined =>
  projects.find((p) => p.slug === slug);

// Get related projects (same category, excluding current)
export const getRelatedProjects = (
  currentSlug: string,
  limit: number = 3,
): IProject[] => {
  const current = projects.find((p) => p.slug === currentSlug);
  if (!current) return [];

  // get same category projects
  const sameCategory = projects.filter(
    (p) => p.id !== current.id && p.category === current.category,
  );

  // if same category is more than or equal to limit, return same category projects
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  // if same category is less than limit, get other category projects
  const others = projects.filter(
    (p) => p.id !== current.id && p.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, limit);
};

// Status Options
export const projectStatusOptions = [
  { label: "All Status", value: "All" },
  { label: "Completed", value: "Completed" },
  { label: "In Progress", value: "In Progress" },
  { label: "Concept", value: "Concept" },
] as const satisfies readonly { label: string; value: "All" | ProjectStatus }[];

// Sort Options
export const projectSortOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "A – Z", value: "az" },
  { label: "Z – A", value: "za" },
] as const;
export type ProjectSortValue = (typeof projectSortOptions)[number]["value"];

// Filter and sort projects
export const filterProjects = (options: {
  category?: string;
  search?: string;
  sort?: ProjectSortValue;
}): IProject[] => {
  let results = [...projects];

  // Category filter
  if (options.category && options.category !== "All") {
    results = results.filter((p) => p.category === options.category);
  }

  // Search filter
  if (options.search?.trim()) {
    const query = options.search.toLowerCase().trim();
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query),
    );
  }

  // Sort
  switch (options.sort) {
    case "oldest":
      results.sort(
        (a, b) => parseInt(a.completionYear) - parseInt(b.completionYear),
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
        (a, b) => parseInt(b.completionYear) - parseInt(a.completionYear),
      );
      break;
  }

  return results;
};

// Get previous and next projects for navigation
export const getPrevNextProjects = (
  currentSlug: string
): { prev: IProject | null; next: IProject | null } => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return { prev: null, next: null };

  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return { prev, next };
};
