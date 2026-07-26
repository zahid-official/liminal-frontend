// Furniture Data - Static data layer for furniture collection
// This file will be replaced with dynamic API calls once the backend is ready

// Furniture Gallery Image Interface
export interface IFurnitureGalleryImage {
  url: string;
  caption?: string;
}

// Furniture Categories
export const furnitureCategories = [
  "All",
  "Seating",
  "Tables",
  "Beds",
  "Storage",
  "Lighting",
  "Decor",
] as const;
export type FurnitureCategory = (typeof furnitureCategories)[number];

// Furniture Availability Status
export const furnitureAvailabilityStatus = [
  "In Stock",
  "Out of Stock",
  "Pre-Order",
  "Made to Order",
  "Limited Edition",
] as const;
export type FurnitureStatus = (typeof furnitureAvailabilityStatus)[number];

// Furniture Dimensions Interface
export interface IFurnitureDimensions {
  height?: number;
  width?: number;
  depth?: number;
  unit: "cm" | "mm" | "in";
}

// Furniture Specifications Interface
export interface IFurnitureSpecifications {
  materials: string;
  weight: string;
  dimensions: IFurnitureDimensions;
  leadTime: string;
  warranty: string;
}

// Furniture Details Interface
export interface IFurnitureDetails {
  overview: string;
  designStory?: string;
  craftsmanship?: string;
}

// Furniture Interface
export interface IFurniture {
  id: string;
  productCode: string;
  title: string;
  slug: string;
  category: FurnitureCategory;
  tagline: string;
  description: string;
  status: FurnitureStatus;
  price: string;
  stock: number;
  thumbnail: string;
  galleryImages: IFurnitureGalleryImage[];
  details: IFurnitureDetails;
  specifications: IFurnitureSpecifications;
}

// ─────────────────────────────────────────────
// Mock Furniture Data
// ─────────────────────────────────────────────

export const collection: IFurniture[] = [
  {
    id: "1",
    productCode: "LFC-ST-001",
    title: "Horizon Sectional",
    slug: "horizon-sectional",
    category: "Seating",
    tagline: "Modular Seating Architecture",
    description:
      "A modular seating architecture balancing expansive comfort with a refined, low-profile silhouette. The Horizon Sectional redefines the living room as a landscape of repose.",
    status: "Made to Order",
    price: "$8,600",
    stock: 0,
    thumbnail: "/assets/furniture/horizon-sofa.png",
    galleryImages: [
      {
        url: "/assets/furniture/horizon-sectional-full.png",
        caption: "Full Configuration - Natural Bouclé Upholstery",
      },
      {
        url: "/assets/furniture/horizon-sectional-detail.png",
        caption: "Base Detail - Smoked Oak Finish",
      },
      {
        url: "/assets/furniture/horizon-sectional-mechanism.png",
        caption: "Connection System - Hidden Interlocking Mechanism",
      },
    ],
    details: {
      overview:
        "The Horizon Sectional was born from a singular observation: the most comfortable seating in the world means nothing if it doesn't belong in the room. Too many sofas demand attention. The Horizon earns its place through restraint, sitting low and wide like a geological formation that has always been there. Every dimension has been calibrated to the human body at rest - the seat depth of 620mm accommodates a full cross-legged position without sacrificing back support, while the armrest height aligns precisely with a relaxed elbow.",
      designStory:
        "The bouclé upholstery is sourced from a fourth-generation Italian mill that produces exclusively for the architectural furniture market. Each roll is inspected by hand for consistency of loop height and density. The smoked oak base is finished with a zero-VOC hardwax oil that deepens the grain while protecting against everyday wear, developing a richer patina with age.",
      craftsmanship:
        "The modular system uses a proprietary interlocking mechanism hidden beneath the upholstery, allowing configurations to be assembled and reconfigured without tools. Corner modules, chaise extensions, armless sections and ottoman units can be combined in over forty distinct arrangements, ensuring the Horizon adapts as your living space evolves.",
    },
    specifications: {
      materials: "Bouclé & Smoked Oak",
      weight: "128 kg",
      dimensions: { width: 3200, depth: 1050, height: 680, unit: "mm" },
      leadTime: "8-12 weeks",
      warranty: "10-year structural, 5-year upholstery",
    },
  },

  {
    id: "2",
    productCode: "LFC-TB-001",
    title: "Monolith Table",
    slug: "monolith-table",
    category: "Tables",
    tagline: "Sculptural Dining Centerpiece",
    description:
      "A brutalist-inspired centerpiece carved from a single slab of honed Nero Marquina marble. The Monolith Table transforms dining into a ritual, anchoring the room with the quiet authority of geological permanence.",
    status: "Limited Edition",
    price: "$5,400",
    stock: 3,
    thumbnail: "/assets/furniture/monolith-dining-table.png",
    galleryImages: [
      {
        url: "/assets/furniture/monolith-dining-table.png",
        caption: "Nero Marquina in natural daylight",
      },
      {
        url: "/assets/furniture/monolith-dining-table.png",
        caption: "350 million years of geological history",
      },
      {
        url: "/assets/furniture/monolith-dining-table.png",
        caption: "Honed edge finish at 45mm thickness",
      },
    ],
    details: {
      overview:
        "The Monolith Table began as a study in material honesty. We asked a simple question: what happens when you remove everything unnecessary from a dining table? The answer stands before you - a single slab of Nero Marquina marble, honed to a matte finish that reveals the stone's natural character without the distortion of high polish. The distinctive white veining against the deep black ground is a record of geological pressure applied over 350 million years.",
      designStory:
        "Each Monolith Table is cut from Spanish Nero Marquina marble quarried in the Basque region. No two tables are identical - the veining pattern on your table is unique in the history of the earth, a one-time expression of natural forces that will never be repeated. The honed surface offers a matte tactility that is warm to the touch, unlike the cold slickness of polished marble.",
      craftsmanship:
        "Despite its appearance of monolithic simplicity, the Monolith Table is an exercise in structural engineering. A concealed steel reinforcement frame distributes the 280 kg weight of the marble across four contact points, while allowing the stone to expand and contract naturally with temperature changes. The base geometry was optimised through computational modelling to ensure stability without visible hardware.",
    },
    specifications: {
      materials: "Nero Marquina Marble",
      weight: "280 kg",
      dimensions: { width: 2400, depth: 1100, height: 750, unit: "mm" },
      leadTime: "10-14 weeks",
      warranty: "Lifetime structural, 5-year surface finish",
    },
  },

  {
    id: "3",
    productCode: "LFC-SR-001",
    title: "Ether Sideboard",
    slug: "ether-sideboard",
    category: "Storage",
    tagline: "Minimalist Storage Architecture",
    description:
      "Minimalist storage featuring seamless joinery and hand-applied Eucalyptus veneer. The Ether Sideboard dissolves the boundary between furniture and architecture, becoming a tectonic presence along any wall.",
    status: "In Stock",
    price: "$5,200",
    stock: 8,
    thumbnail: "/assets/furniture/ether-sideboard.png",
    galleryImages: [
      {
        url: "/assets/furniture/ether-sideboard-front.png",
        caption: "Front View - Continuous Eucalyptus Grain",
      },
      {
        url: "/assets/furniture/ether-sideboard-detail.png",
        caption: "Leg Detail - Sand-Cast Bronze Base",
      },
      {
        url: "/assets/furniture/ether-sideboard-interior.png",
        caption: "Interior - Leather Lined Drawers",
      },
    ],
    details: {
      overview:
        "Storage furniture faces a fundamental paradox: it must contain the visual chaos of daily life while contributing order and beauty to the room. The Ether Sideboard resolves this tension through an architecture of concealment, where push-latch doors open without handles, and the external surface reads as a continuous plane of figured Eucalyptus veneer.",
      designStory:
        "Every joint in the Ether Sideboard is a celebration of cabinetmaking craft. The Eucalyptus veneer is book-matched across all four doors, creating a symmetrical grain pattern that flows uninterrupted from edge to edge. The veneer is laid by hand onto a dimensionally stable MDF substrate, then finished with six coats of hand-rubbed lacquer, each coat sanded back before the next is applied.",
      craftsmanship:
        "The bronze legs and accent trim are sand-cast using traditional lost-wax methods, then hand-finished to a warm satin patina. Over time, the bronze develops a deeper, richer tone that complements the natural darkening of the Eucalyptus veneer, meaning the sideboard grows more beautiful as it ages.",
    },
    specifications: {
      materials: "Eucalyptus & Bronze",
      weight: "85 kg",
      dimensions: { width: 2100, depth: 500, height: 720, unit: "mm" },
      leadTime: "Immediate dispatch",
      warranty: "8-year structural, 3-year finish",
    },
  },

  {
    id: "4",
    productCode: "LFC-ST-002",
    title: "Halo Chair",
    slug: "halo-chair",
    category: "Seating",
    tagline: "Sculptural Lounge Statement",
    description:
      "A study in circular geometry featuring a wraparound backrest and precision rotating base. The Halo Chair captures the essence of contemplative repose within a form that is simultaneously bold and inviting.",
    status: "In Stock",
    price: "$3,800",
    stock: 12,
    thumbnail: "/assets/furniture/halo-lounge-chair.png",
    galleryImages: [
      {
        url: "/assets/furniture/halo-lounge-chair.png",
        caption: "Lounge Profile - Bouclé And Brass Pairing",
      },
      {
        url: "/assets/furniture/halo-lounge-chair.png",
        caption: "Back Detail - Sculptural Curvature",
      },
      {
        url: "/assets/furniture/halo-lounge-chair.png",
        caption: "Base Mechanism - 360-Degree Swivel System",
      },
    ],
    details: {
      overview:
        "The Halo Chair emerged from our fascination with the circle as an architectural motif. Where most chairs define a direction, with a clear front and back, the Halo embraces all directions equally. Its continuous curved backrest creates a gentle enclosure, a private alcove within the larger room, that invites the occupant to settle in and let the world recede.",
      designStory:
        "The wraparound backrest follows a mathematically precise arc covering 270 degrees of the circle. This creates an opening wide enough for easy entry while providing the psychological comfort of enclosure on three sides. The interior upholstery in cream bouclé contrasts with the tighter weave of the exterior, creating a tactile distinction between the public face and private interior.",
      craftsmanship:
        "The precision-engineered brass rotating base allows 360-degree rotation with zero resistance at the start of movement and a gentle dampening that prevents free-spinning. This mechanism, borrowed from laboratory instrument design, ensures that every rotation is deliberate and controlled.",
    },
    specifications: {
      materials: "Bouclé & Brass",
      weight: "38 kg",
      dimensions: { width: 920, depth: 880, height: 740, unit: "mm" },
      leadTime: "Immediate dispatch",
      warranty: "10-year structural, 5-year upholstery",
    },
  },

  {
    id: "5",
    productCode: "LFC-SR-002",
    title: "Linear Library",
    slug: "linear-library",
    category: "Storage",
    tagline: "Vertical Shelving Sculpture",
    description:
      "A slender vertical shelving unit crafted from American Walnut with delicate brass accents. The Linear Library transforms book storage into an architectural event, turning your collection into a curated vertical gallery.",
    status: "Made to Order",
    price: "$4,900",
    stock: 0,
    thumbnail: "/assets/furniture/walnut-bookcase.png",
    galleryImages: [
      {
        url: "/assets/furniture/walnut-bookcase.png",
        caption: "Full Structure - Vertical Shelving Display",
      },
      {
        url: "/assets/furniture/walnut-bookcase.png",
        caption: "Joinery Detail - Precision Machined Brass",
      },
      {
        url: "/assets/furniture/walnut-bookcase.png",
        caption: "Wood Finish - Kiln-Dried American Walnut",
      },
    ],
    details: {
      overview:
        "The Linear Library was designed for readers who understand that a bookshelf is not merely storage - it is autobiography made visible. The books you choose to display, their arrangement, the objects you place among them: these reveal more about you than any portrait. We created a framework worthy of that revelation.",
      designStory:
        "At 2100mm tall and only 800mm wide, the Linear Library creates a deliberately vertical emphasis that draws the eye upward. This proportion was inspired by classical architectural pilasters, the decorative columns that articulate the rhythm of grand interiors. The narrow width prevents the visual heaviness that afflicts most bookcases, keeping the piece light and sculptural even when fully loaded.",
      craftsmanship:
        "The American Walnut used in every Linear Library is kiln-dried for 14 days to a moisture content of 8%, ensuring dimensional stability across seasonal humidity changes. The brass shelf brackets are precision-machined from solid bar stock, not cast, giving them a density and precision that you can feel when adjusting shelf heights.",
    },
    specifications: {
      materials: "Walnut & Brass",
      weight: "45 kg",
      dimensions: { width: 800, depth: 350, height: 2100, unit: "mm" },
      leadTime: "6-8 weeks",
      warranty: "Lifetime structural, 3-year finish",
    },
  },

  {
    id: "6",
    productCode: "LFC-TB-002",
    title: "Travertine Table",
    slug: "travertine-table",
    category: "Tables",
    tagline: "Geological Coffee Table",
    description:
      "An interplay of transparency and mass, pairing a honed travertine base with tinted glass. The Travertine Table brings geological time into the living room, grounding daily rituals with the quiet permanence of ancient stone.",
    status: "Limited Edition",
    price: "$3,400",
    stock: 5,
    thumbnail: "/assets/furniture/bespoke-coffee-table.png",
    galleryImages: [
      {
        url: "/assets/furniture/bespoke-coffee-table.png",
        caption: "Living Setting - Roman Travertine Surface",
      },
      {
        url: "/assets/furniture/bespoke-coffee-table.png",
        caption: "Glass Detail - Bronze-Tinted Tempered Glass",
      },
      {
        url: "/assets/furniture/bespoke-coffee-table.png",
        caption: "Base Integration - Concealed Steel Supports",
      },
    ],
    details: {
      overview:
        "The Travertine Table is an exercise in material dialogue. The base, carved from a single block of Roman travertine, speaks of geological patience - layers of mineral deposits accumulated over millennia in the thermal springs of central Italy. Above it, a disc of bronze-tinted glass floats on concealed supports, adding a contemporary lightness that prevents the stone from feeling heavy.",
      designStory:
        "The travertine we select is quarried near Tivoli, from the same geological formations that supplied the stone for the Colosseum. We choose blocks with an open, porous surface that reveals the stone's natural voids - these are not imperfections but evidence of the thermal springs and organic matter that shaped the stone millions of years ago.",
      craftsmanship:
        "The 15mm bronze-tinted glass top is tempered for safety and treated with an anti-fingerprint coating that maintains its clarity between cleanings. The warm bronze tint was selected to harmonise with the creamy undertones of the travertine, creating a colour relationship that feels inherent rather than designed.",
    },
    specifications: {
      materials: "Travertine & Glass",
      weight: "95 kg",
      dimensions: { width: 1100, depth: 1100, height: 320, unit: "mm" },
      leadTime: "4-6 weeks",
      warranty: "Lifetime stone, 5-year glass",
    },
  },

  {
    id: "7",
    productCode: "LFC-LT-001",
    title: "Arc Pendant",
    slug: "arc-pendant",
    category: "Lighting",
    tagline: "Sculptural Suspension Light",
    description:
      "A sweeping arc of hand-bent brass suspending a linen diffuser that casts a warm, enveloping glow. The Arc Pendant defines the space beneath it with light rather than walls, creating an intimate atmosphere above any table.",
    status: "In Stock",
    price: "$2,200",
    stock: 15,
    thumbnail: "/assets/furniture/horizon-sofa.png",
    galleryImages: [
      {
        url: "/assets/furniture/horizon-sofa.png",
        caption: "Suspension View - Omnidirectional Glow",
      },
      {
        url: "/assets/furniture/horizon-sofa.png",
        caption: "Diffuser Detail - Double Layer Belgian Linen",
      },
      {
        url: "/assets/furniture/horizon-sofa.png",
        caption: "Hardware - Solid Brass Accent",
      },
    ],
    details: {
      overview:
        "Lighting is architecture made visible. The Arc Pendant takes this principle literally, using a single curved brass element to define a zone of warmth and intimacy above the surfaces that matter most, whether a dining table, a reading nook or a kitchen island. The light it casts is not merely functional; it is atmospheric.",
      designStory:
        "The brass arc is hand-bent from a single length of 25mm solid rod, heated to a precise temperature that allows the metal to be shaped without cracking. Each bend requires the accumulated skill of craftsmen who have worked with brass for decades. The resulting curve is both structurally sound and visually fluid.",
      craftsmanship:
        "The cylindrical diffuser is constructed from a double layer of Belgian linen stretched over a minimal wire frame. This construction filters the LED source into a soft, omnidirectional glow at 2700K, the colour temperature of candlelight. The linen texture becomes part of the light itself, creating subtle shadow patterns on nearby surfaces.",
    },
    specifications: {
      materials: "Brass & Linen",
      weight: "4.8 kg",
      dimensions: { width: 900, depth: 350, height: 450, unit: "mm" },
      leadTime: "Immediate dispatch",
      warranty: "5-year structural, 3-year LED module",
    },
  },

  {
    id: "8",
    productCode: "LFC-TB-003",
    title: "Vestige Console",
    slug: "vestige-console",
    category: "Tables",
    tagline: "Architectural Entry Statement",
    description:
      "A slim console table bridging brutalist mass and refined detail, featuring a raw concrete base with a precision-milled brass top. The Vestige transforms entryways into curated moments of arrival.",
    status: "Made to Order",
    price: "$4,100",
    stock: 0,
    thumbnail: "/assets/furniture/monolith-dining-table.png",
    galleryImages: [
      {
        url: "/assets/furniture/monolith-dining-table.png",
        caption: "Entry Setting - Architectural Dialogue",
      },
      {
        url: "/assets/furniture/monolith-dining-table.png",
        caption: "Material Junction - 3mm Shadow Gap",
      },
      {
        url: "/assets/furniture/monolith-dining-table.png",
        caption: "Base Detail - Board-Marked Concrete",
      },
    ],
    details: {
      overview:
        "The entryway is the first and last space your guests experience. The Vestige Console was designed to make both moments memorable. Its raw concrete base provides visual weight and permanence while the brass top surface adds a warmth and refinement that invites the placement of personal objects, creating an altar of daily ritual.",
      designStory:
        "The 8mm brass top is CNC-milled from a single plate to ensure perfect flatness, then hand-finished to a warm satin patina. The junction between brass and concrete is a deliberate 3mm shadow gap, a detail borrowed from high-end joinery that visually separates the two materials while allowing each to express its own character.",
      craftsmanship:
        "The UHPC (Ultra-High Performance Concrete) base is cast in a single pour using a proprietary formwork that leaves a subtle board-marked texture on the exterior surfaces. This texture references the construction process, making the marks of making visible and honest.",
    },
    specifications: {
      materials: "Concrete & Brass",
      weight: "68 kg",
      dimensions: { width: 1400, depth: 350, height: 850, unit: "mm" },
      leadTime: "6-10 weeks",
      warranty: "Lifetime structural, 5-year surface finish",
    },
  },

  {
    id: "9",
    productCode: "LFC-LT-002",
    title: "Plinth Floor Lamp",
    slug: "plinth-floor-lamp",
    category: "Lighting",
    tagline: "Monumental Light Column",
    description:
      "A floor lamp conceived as a miniature architectural column, with a solid Carrara marble base and a slender blackened steel stem crowned by a hand-turned alabaster shade.",
    status: "Made to Order",
    price: "$3,200",
    stock: 0,
    thumbnail: "/assets/furniture/walnut-bookcase.png",
    galleryImages: [
      {
        url: "/assets/furniture/walnut-bookcase.png",
        caption: "Full Height - Architectural Column Presence",
      },
      {
        url: "/assets/furniture/walnut-bookcase.png",
        caption: "Shade Detail - Hand-Turned Alabaster",
      },
      {
        url: "/assets/furniture/walnut-bookcase.png",
        caption: "Base Profile - Honed Carrara Marble",
      },
    ],
    details: {
      overview:
        "Most floor lamps are afterthoughts, functional poles placed where light is needed. The Plinth is fundamentally different: it is a piece of architecture in miniature, a column that announces its presence and rewards close attention. The weight of the marble base, the precision of the steel stem and the translucency of the alabaster shade create a three-part composition that references classical column orders.",
      designStory:
        "The 200mm cube of Carrara marble that forms the base is cut from the same Tuscan quarries that supplied Michelangelo. Each block is selected for the subtlety of its grey veining, avoiding the dramatic markings that would compete with the lamp's overall composition. The honed finish gives the marble a soft, almost chalky texture that invites touch.",
      craftsmanship:
        "The alabaster shade is hand-turned on a lathe by a third-generation stone turner in Volterra, Italy. Each shade takes two days to complete, with the wall thickness gradually reduced to approximately 6mm, thin enough to be translucent while thick enough to maintain structural integrity. When illuminated, the alabaster reveals its internal crystalline structure, creating a glow that no synthetic material can replicate.",
    },
    specifications: {
      materials: "Marble & Alabaster",
      weight: "18 kg",
      dimensions: { width: 200, depth: 200, height: 1650, unit: "mm" },
      leadTime: "8-12 weeks",
      warranty: "Lifetime marble, 3-year LED, 5-year alabaster",
    },
  },

  {
    id: "10",
    productCode: "LFC-DC-001",
    title: "Strata Mirror",
    slug: "strata-mirror",
    category: "Decor",
    tagline: "Layered Reflection Object",
    description:
      "A wall mirror framed by concentric bands of oxidised brass, each layer set at a slightly different depth to create a topographic effect. The Strata Mirror transforms reflection into an art object worthy of contemplation.",
    status: "In Stock",
    price: "$2,800",
    stock: 6,
    thumbnail: "/assets/furniture/ether-sideboard.png",
    galleryImages: [
      {
        url: "/assets/furniture/ether-sideboard.png",
        caption: "Wall Installation - Spatial Depth",
      },
      {
        url: "/assets/furniture/ether-sideboard.png",
        caption: "Frame Detail - Concentric Oxidised Brass",
      },
      {
        url: "/assets/furniture/ether-sideboard.png",
        caption: "Reflection - Optical-Grade Glass",
      },
    ],
    details: {
      overview:
        "A mirror is the most honest piece of furniture: it shows you only what is real. The Strata Mirror honours this honesty while adding depth, literally. Five concentric bands of brass, each oxidised to a slightly different tone and set at a different depth, create a frame that is itself a landscape of light and shadow, changing character throughout the day as natural light shifts.",
      designStory:
        "The five concentric brass bands are individually formed, oxidised and assembled. The outermost band sits 25mm proud of the wall, while each subsequent band steps back by 5mm, creating a depth progression that catches light at different angles. This topographic quality means the frame appears to shift between warm gold and deep bronze as you move around the room.",
      craftsmanship:
        "The mirror glass is optical-grade, silver-backed and copper-protected for clarity and longevity. The 900mm diameter provides a generous reflective surface for dressing areas while remaining proportionally balanced as a decorative object in living spaces and entryways.",
    },
    specifications: {
      materials: "Oxidised Brass & Mirror",
      weight: "12 kg",
      dimensions: { width: 900, depth: 45, height: 900, unit: "mm" },
      leadTime: "Immediate dispatch",
      warranty: "10-year mirror, 5-year frame finish",
    },
  },

  {
    id: "11",
    productCode: "LFC-ST-003",
    title: "Form Dining Chair",
    slug: "form-dining-chair",
    category: "Seating",
    tagline: "Ergonomic Dining Sculpture",
    description:
      "A dining chair resolving the tension between visual lightness and seated comfort, featuring a steam-bent ash frame and a saddle-leather sling seat designed to keep guests at the table long after the meal.",
    status: "In Stock",
    price: "$1,800",
    stock: 24,
    thumbnail: "/assets/furniture/halo-lounge-chair.png",
    galleryImages: [
      {
        url: "/assets/furniture/halo-lounge-chair.png",
        caption: "Dining Arrangement - Steam-Bent Ash",
      },
      {
        url: "/assets/furniture/halo-lounge-chair.png",
        caption: "Seat Detail - Saddle Leather Sling",
      },
      {
        url: "/assets/furniture/halo-lounge-chair.png",
        caption: "Joinery - Concealed Brass Fixings",
      },
    ],
    details: {
      overview:
        "The dining chair is the most demanding typology in furniture design. It must be comfortable for hours, light enough to move, strong enough for daily use, stackable for storage and beautiful from every angle. The Form Dining Chair was our answer to all five demands simultaneously, achieved through steam-bent European ash and Italian saddle leather.",
      designStory:
        "The saddle leather seat is cut from a single hide of full-grain, vegetable-tanned Italian leather. It is secured to the frame with concealed brass fixings that allow the leather to be tensioned after installation. Over months of use, the leather moulds to the owner's posture, creating a personalised seat surface that becomes more comfortable with age.",
      craftsmanship:
        "The continuous back-and-leg structure is steam-bent from a single length of European ash, avoiding the joints and weak points that plague conventional chair construction. The wood is steamed for six hours at 100 degrees Celsius before being clamped into the forming jig, where it dries for 72 hours.",
    },
    specifications: {
      materials: "Ash & Leather",
      weight: "5.2 kg",
      dimensions: { width: 520, depth: 540, height: 780, unit: "mm" },
      leadTime: "Immediate dispatch",
      warranty: "10-year structural, 5-year leather",
    },
  },

  {
    id: "12",
    productCode: "LFC-DC-002",
    title: "Orbit Vase",
    slug: "orbit-vase",
    category: "Decor",
    tagline: "Ceramic Art Object",
    description:
      "A hand-thrown ceramic vase with an asymmetric orbital profile that transforms floral arrangement into sculptural composition. The Orbit Vase bridges the functional and the artistic, holding both water and attention.",
    status: "In Stock",
    price: "$680",
    stock: 18,
    thumbnail: "/assets/furniture/bespoke-coffee-table.png",
    galleryImages: [
      {
        url: "/assets/furniture/bespoke-coffee-table.png",
        caption: "Sculptural Composition - Asymmetric Profile",
      },
      {
        url: "/assets/furniture/bespoke-coffee-table.png",
        caption: "Surface Detail - Volcanic Ash Glaze",
      },
      {
        url: "/assets/furniture/bespoke-coffee-table.png",
        caption: "Display - Curated Botanicals",
      },
    ],
    details: {
      overview:
        "The Orbit Vase was not designed on a screen. It was born on the wheel, through the dialogue between a ceramic artist's hands and the spinning clay. The asymmetric form that resulted, a sphere seemingly caught mid-rotation, could only emerge through this direct, physical process. It is a record of a gesture, frozen in fired stoneware.",
      designStory:
        "Each Orbit Vase is thrown from a single piece of high-fire stoneware clay on a manual kick wheel. The asymmetry is intentional but not controlled; the ceramicist allows the clay to find its own balance point during the throwing process, accepting the form that emerges rather than imposing a predetermined shape. Every Orbit Vase is unique.",
      craftsmanship:
        "The exterior glaze is a proprietary volcanic ash formula that produces a matte, slightly rough texture reminiscent of weathered stone. The colour palette, ranging from warm sand to deep charcoal, is achieved through variations in firing temperature rather than pigment, resulting in colours with the depth and complexity of natural stone.",
    },
    specifications: {
      materials: "Stoneware",
      weight: "3.2 kg",
      dimensions: { width: 280, depth: 280, height: 350, unit: "mm" },
      leadTime: "Immediate dispatch",
      warranty: "Lifetime (excluding physical damage)",
    },
  },

  {
    id: "13",
    productCode: "LFC-BD-001",
    title: "Haven Platform Bed",
    slug: "haven-platform-bed",
    category: "Beds",
    tagline: "Architectural Sleep Platform",
    description:
      "A low-profile platform bed in solid white oak with an integrated floating nightstand and concealed under-bed storage. The Haven reduces the bedroom to its most essential gesture: the horizontal plane of rest.",
    status: "Made to Order",
    price: "$6,800",
    stock: 0,
    thumbnail: "/assets/furniture/horizon-sofa.png",
    galleryImages: [
      {
        url: "/assets/furniture/horizon-sofa.png",
        caption: "Bedroom Setting - White Oak Platform",
      },
      {
        url: "/assets/furniture/horizon-sofa.png",
        caption: "Storage Detail - Concealed Drawers",
      },
      {
        url: "/assets/furniture/horizon-sofa.png",
        caption: "Headboard - Natural Belgian Linen",
      },
    ],
    details: {
      overview:
        "The bedroom should be the quietest room in the house, both acoustically and visually. The Haven Platform Bed achieves this by eliminating everything unnecessary - no visible legs, no ornamental headboard, no bulky frame. What remains is a pure horizontal plane of white oak, floating 150mm above the floor, supporting nothing but rest.",
      designStory:
        "The integrated floating nightstands extend the platform language beyond the mattress, creating a continuous surface for the essential objects of bedside life: a glass of water, a book, a reading lamp. The concealed storage drawers below eliminate the need for separate bedroom furniture, reducing visual noise.",
      craftsmanship:
        "The white oak is quarter-sawn to reveal the characteristic medullary rays that give the wood its distinctive flecked appearance. The slatted support system provides optimal mattress ventilation while distributing weight evenly. Every joint uses traditional mortise-tenon construction reinforced with marine-grade adhesive for silent, creak-free performance.",
    },
    specifications: {
      materials: "White Oak & Linen",
      weight: "110 kg (Queen), 125 kg (King)",
      dimensions: { width: 1800, depth: 2200, height: 350, unit: "mm" },
      leadTime: "10-14 weeks",
      warranty:
        "Lifetime structural, 5-year upholstery, 10-year drawer mechanism",
    },
  },

  {
    id: "14",
    productCode: "LFC-BD-002",
    title: "Dusk Canopy Frame",
    slug: "dusk-canopy-frame",
    category: "Beds",
    tagline: "Minimalist Four-Poster",
    description:
      "A contemporary reinterpretation of the four-poster bed, using slender blackened steel posts and a floating oak canopy rail. The Dusk Canopy Frame defines the bed as a room within a room, a sanctuary within the sanctuary.",
    status: "Pre-Order",
    price: "$7,400",
    stock: 0,
    thumbnail: "/assets/furniture/monolith-dining-table.png",
    galleryImages: [
      {
        url: "/assets/furniture/monolith-dining-table.png",
        caption: "Room Within A Room - Architectural Frame",
      },
      {
        url: "/assets/furniture/monolith-dining-table.png",
        caption: "Canopy Detail - Oak Rail With LED",
      },
      {
        url: "/assets/furniture/monolith-dining-table.png",
        caption: "Post Structure - Blackened Steel Patina",
      },
    ],
    details: {
      overview:
        "The four-poster bed is one of the oldest and most psychologically powerful furniture archetypes, a room within a room, a defined territory of rest. The Dusk Canopy Frame strips this archetype to its structural essence: four slender posts and a connecting rail that define a volume of intimate space without enclosing it.",
      designStory:
        "The blackened steel posts are deliberately minimal at just 25mm square, thin enough to read as lines in space rather than heavy structural elements. The oak canopy rail provides the visual warmth that steel alone would lack, and houses a concealed LED strip that provides warm ambient light at 2200K, perfect for the transition between wakefulness and sleep.",
      craftsmanship:
        "Each steel post is hand-patinated using a proprietary blackening process that creates a surface with subtle tonal variation, preventing the clinical uniformity of powder coating. The oak rail is connected to the posts with concealed internal hardware, creating the impression that the wood is floating atop the metal.",
    },
    specifications: {
      materials: "Steel & Oak",
      weight: "65 kg",
      dimensions: { width: 1700, depth: 2200, height: 2100, unit: "mm" },
      leadTime: "12-16 weeks",
      warranty: "Lifetime structural, 3-year LED, 5-year finish",
    },
  },

  {
    id: "15",
    productCode: "LFC-ST-003",
    title: "Aura Lounge Chair",
    slug: "aura-lounge-chair",
    category: "Seating",
    tagline: "Archival Sculptural Armchair",
    description:
      "An archival collector piece featuring hand-sculpted solid walnut and tactile shearling upholstery. Designed as a sanctuary of quiet luxury.",
    status: "Out of Stock",
    price: "$4,200",
    stock: 0,
    thumbnail: "/assets/furniture/aura-lounge-chair.png",
    galleryImages: [
      {
        url: "/assets/furniture/aura-lounge-chair.png",
        caption: "Aura Lounge Chair - Natural Shearling & American Walnut",
      },
      {
        url: "/assets/furniture/aura-lounge-chair-detail.png",
        caption: "Hand-sculpted Walnut Armrest Detail",
      },
    ],
    details: {
      overview:
        "The Aura Lounge Chair is a celebrated architectural seating piece that fuses tactile warmth with sculptural discipline. Hand-crafted by master woodworkers, its curved walnut frame embraces the sitter while maintaining a visually light, floating stance in any space.",
      designStory:
        "Inspired by mid-century Nordic lounge silhouettes, the Aura Chair emphasizes raw material warmth and organic contours. Due to high demand and rare material allocations, current production runs have been fully allocated.",
      craftsmanship:
        "Each frame is individually turned and joined using traditional mortise-and-tenon craftsmanship. The shearling is hand-selected for uniform curl density and exceptional softness.",
    },
    specifications: {
      materials: "American Walnut & Natural Shearling",
      weight: "34 kg",
      dimensions: { width: 880, depth: 920, height: 760, unit: "mm" },
      leadTime: "Currently Unavailable",
      warranty: "10-year structural warranty",
    },
  },
];

// ─────────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────────

// Format structured dimensions to display string
export const formatDimensions = (dimensions: IFurnitureDimensions): string => {
  const parts: string[] = [];
  if (dimensions.width !== undefined) parts.push(dimensions.width.toString());
  if (dimensions.depth !== undefined) parts.push(dimensions.depth.toString());
  if (dimensions.height !== undefined) parts.push(dimensions.height.toString());
  return `${parts.join(" x ")} ${dimensions.unit}`;
};

// Get a furniture by slug
export const getFurnitureBySlug = (slug: string): IFurniture | undefined =>
  collection.find((item) => item.slug === slug);

// Get related furniture items (same category, excluding current)
export const getRelatedFurniture = (
  currentSlug: string,
  limit: number = 3,
): IFurniture[] => {
  const current = collection.find((item) => item.slug === currentSlug);
  if (!current) return [];

  // get all furniture in same category
  const sameCategory = collection.filter(
    (item) => item.slug !== currentSlug && item.category === current.category,
  );

  // if same category is more than or equal to limit, return same category furniture
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  // if same category is less than limit, get other category furniture
  const others = collection.filter(
    (item) => item.slug !== currentSlug && item.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, limit);
};

// Get category counts for the filter bar
export const getFurnitureCategoryCounts = (): Record<
  FurnitureCategory,
  number
> => {
  const counts = { All: collection.length } as Record<
    FurnitureCategory,
    number
  >;
  furnitureCategories.forEach((cat) => {
    if (cat !== "All") {
      counts[cat] = collection.filter((item) => item.category === cat).length;
    }
  });
  return counts;
};

// Sort Options
export const furnitureSortOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A to Z", value: "name-asc" },
  { label: "Name: Z to A", value: "name-desc" },
] as const;

export type FurnitureSortType = (typeof furnitureSortOptions)[number]["value"];

// Filter and sort furniture
export const filterFurniture = (options: {
  category?: string;
  search?: string;
  sort?: FurnitureSortType;
}): IFurniture[] => {
  let results = [...collection];

  // Category filter
  if (options.category && options.category !== "All") {
    results = results.filter((item) => item.category === options.category);
  }

  // Search filter
  if (options.search?.trim()) {
    const query = options.search.toLowerCase().trim();
    results = results.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.tagline.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query),
    );
  }

  // Helper to parse price string to number for sorting
  const parsePrice = (priceStr: string) =>
    parseFloat(priceStr.replace(/[^0-9.-]+/g, "")) || 0;

  // Sort
  switch (options.sort) {
    case "price-asc":
      results.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      break;
    case "price-desc":
      results.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      break;
    case "name-asc":
      results.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "name-desc":
      results.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "oldest":
      // Keep original order (since collection is likely ordered newest to oldest, or we reverse newest)
      break;
    case "newest":
    default:
      // Since we don't have a date, we can fallback to ID or keep current order
      // We'll reverse the array to simulate "newest" if ID is roughly sequential,
      // or just leave it for now.
      results.reverse(); // Simplified implementation
      break;
  }

  return results;
};

// Get previous and next furniture for navigation
export const getPrevNextFurniture = (
  currentSlug: string,
): { prev: IFurniture | null; next: IFurniture | null } => {
  const currentIndex = collection.findIndex(
    (item) => item.slug === currentSlug,
  );
  if (currentIndex === -1) return { prev: null, next: null };

  const prev = currentIndex > 0 ? collection[currentIndex - 1] : null;
  const next =
    currentIndex < collection.length - 1 ? collection[currentIndex + 1] : null;

  return { prev, next };
};
