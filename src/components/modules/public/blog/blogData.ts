// Blog Data - Static data layer for blog articles
// This file will be replaced with dynamic API calls once the backend is ready

// Blog Article Interface
export interface IBlogArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: IBlogContentBlock[];
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorRole: string;
}

// Content Block Types for structured article body
export type IBlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; id: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; alt: string; caption?: string };

// Blog Categories
export const blogCategories = [
  "All",
  "Design",
  "Material",
  "Philosophy",
  "Process",
  "Architecture",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

// Blog Articles Data
export const blogArticles: IBlogArticle[] = [
  {
    id: "1",
    slug: "the-role-of-light-in-spatial-design",
    title: "The Role of Light in Spatial Design",
    description:
      "How natural and artificial illumination shapes human experience, transforms architectural volumes and defines the emotional character of interior spaces. At Liminal, we treat light not simply as a functional utility, but as a primary material that sculpts form and evokes deep feeling.",
    content: [
      {
        type: "paragraph",
        text: "Light is the most fundamental material in architecture. It is invisible yet omnipresent, shaping every surface it touches, defining depth, mood and the very essence of spatial experience. At Liminal, we treat light not as a byproduct of window placement, but as a design material to be sculpted with the same precision as stone or timber.",
      },
      {
        type: "heading",
        text: "Natural Light as Spatial Architecture",
        id: "natural-light",
      },
      {
        type: "paragraph",
        text: "The interplay between natural light and interior surfaces creates a living artwork that shifts throughout the day. Morning light casts long, warm shadows that reveal the texture of travertine walls, while midday sun floods through carefully positioned apertures to illuminate gathering spaces with clean, neutral light.",
      },
      {
        type: "image",
        alt: "Light and shadow interplay in a minimal interior space",
        caption: "The choreography of light through architectural apertures",
      },
      {
        type: "paragraph",
        text: "We study the solar path for every project, understanding how light will travel through each room at different times of day and across seasons. This analysis informs window sizing, orientation, material selection and even furniture placement, where every decision is made in conversation with light.",
      },
      {
        type: "heading",
        text: "Artificial Illumination as Atmosphere",
        id: "artificial-illumination",
      },
      {
        type: "paragraph",
        text: "When the sun sets, artificial lighting takes over the narrative. But unlike conventional approaches that simply illuminate, our lighting design creates atmosphere. Recessed cove lighting washes walls with warm amber tones, pendant fixtures become sculptural focal points and carefully calibrated dimming systems allow spaces to transition from productive clarity to intimate warmth.",
      },
      {
        type: "quote",
        text: "Light is not what you see; it is what allows you to feel. A room bathed in the right light doesn't just look beautiful; it makes you breathe differently.",
        attribution: "Liminal Design Philosophy",
      },
      {
        type: "heading",
        text: "The Emotional Spectrum of Illumination",
        id: "emotional-spectrum",
      },
      {
        type: "paragraph",
        text: "Every color temperature tells a different story. The warm glow of 2700K evokes intimacy and comfort, making it perfect for residential sanctuaries. The crisp neutrality of 4000K brings clarity and focus to workspaces. We layer these temperatures within single environments, creating zones of emotional experience that guide inhabitants through their daily rhythms.",
      },
      {
        type: "paragraph",
        text: "At Liminal, we believe that the most powerful design decisions are often invisible. Light is the ultimate invisible architect: it shapes experience without being seen, creates mood without being touched and transforms space without occupying any of it.",
      },
    ],
    category: "Design",
    date: "May 2025",
    readTime: "6 min",
    image: "/assets/home/journal-1.png",
    author: "Liminal Studio",
    authorRole: "Design Team",
  },
  {
    id: "2",
    slug: "material-palettes-curating-texture",
    title: "Material Palettes: Curating Texture",
    description:
      "A deep exploration of how material selection, from raw stone to burnished metal, creates narrative depth and sensory richness in contemporary interiors. Each surface carries tactile memory, bridging historical craftsmanship with modern minimal sensibilities.",
    content: [
      {
        type: "paragraph",
        text: "In the hands of a thoughtful designer, materials become language. Each surface speaks: the warmth of oiled walnut, the cool permanence of honed marble, the honest roughness of raw concrete. At Liminal, we approach material selection as curation, assembling palettes that tell coherent stories across every room.",
      },
      {
        type: "heading",
        text: "The Philosophy of Material Truth",
        id: "material-truth",
      },
      {
        type: "paragraph",
        text: "We believe in material honesty, allowing stone to look like stone, wood to age like wood and metal to develop its natural patina over time. This commitment to authenticity creates spaces that grow more beautiful with age, developing character and memory rather than simply deteriorating.",
      },
      {
        type: "image",
        alt: "Travertine wall detail showing natural texture and warmth",
        caption: "Travertine: A material that bridges antiquity and modernity",
      },
      {
        type: "heading",
        text: "Dialogue Between Surfaces",
        id: "dialogue-surfaces",
      },
      {
        type: "paragraph",
        text: "The magic of material design lies not in individual surfaces, but in the conversations between them. The smoothness of polished brass against rough-hewn limestone. The warmth of cedar beside cool, veined marble. These juxtapositions create sensory depth that photographs can suggest but only physical presence can fully reveal.",
      },
      {
        type: "quote",
        text: "A material palette is not a collection of pretty surfaces. It is an emotional vocabulary where each texture, each tone and each weight carries meaning that shapes how we feel within a space.",
        attribution: "Liminal Material Studies",
      },
      {
        type: "heading",
        text: "Aging as Design Intent",
        id: "aging-design",
      },
      {
        type: "paragraph",
        text: "We select materials that age gracefully. Brass that develops a rich patina. Leather that softens with use. Stone that wears smooth under footfall. These materials carry time within them, accumulating the marks of daily life and transforming houses into homes with layered histories.",
      },
      {
        type: "paragraph",
        text: "True luxury is not about pristine perfection; it is about materials so well-chosen and honestly expressed that they become more themselves over time. Every scratch tells a story. Every patina marks a memory.",
      },
    ],
    category: "Material",
    date: "Apr 2025",
    readTime: "8 min",
    image: "/assets/home/journal-2.png",
    author: "Liminal Studio",
    authorRole: "Material Research",
  },
  {
    id: "3",
    slug: "architecture-of-silence-designing-calm",
    title: "Architecture of Silence: Designing Calm",
    description:
      "In an age of sensory overload, the most powerful design choice may be restraint. Exploring how quiet spaces cultivate focus, reflection and wellbeing through visual silence, balanced acoustic design and distilled architectural forms.",
    content: [
      {
        type: "paragraph",
        text: "We live in a world that constantly demands our attention. Notifications, screens, noise, visual clutter: modern life is an assault on the senses. In this context, the spaces we inhabit become either accomplices to chaos or sanctuaries from it. At Liminal, we choose sanctuary.",
      },
      {
        type: "heading",
        text: "The Power of Visual Silence",
        id: "visual-silence",
      },
      {
        type: "paragraph",
        text: "Visual silence is not emptiness. It is the careful removal of everything unnecessary until only the essential remains. A room designed with visual silence has no wasted elements; every line, every surface and every object serves a purpose, whether functional or contemplative.",
      },
      {
        type: "image",
        alt: "A serene minimal interior with clean lines and natural light",
        caption: "Silence is not the absence of design; it is design at its most distilled",
      },
      {
        type: "heading",
        text: "Acoustic Consideration in Design",
        id: "acoustic-consideration",
      },
      {
        type: "paragraph",
        text: "Beyond the visual, we consider the acoustic landscape of every space. Hard surfaces reflect and amplify sound, creating environments that feel busy even when empty. Our approach layers sound-absorbing materials like thick textiles, upholstered panels and timber cladding to create rooms where conversations feel intimate and silence feels rich rather than hollow.",
      },
      {
        type: "quote",
        text: "The measure of a truly great interior is not what it contains, but what it allows you to release. A calm space doesn't demand your attention; instead, it gives your attention back to you.",
        attribution: "Liminal Design Manifesto",
      },
      {
        type: "heading",
        text: "Designing for Mental Restoration",
        id: "mental-restoration",
      },
      {
        type: "paragraph",
        text: "Research in environmental psychology consistently demonstrates that visual complexity increases cognitive load. Our design philosophy responds to this by creating environments that actively reduce mental burden through restrained color palettes, ordered proportions and intuitive spatial flow.",
      },
      {
        type: "paragraph",
        text: "The result is spaces that function as mental reset environments. Walk into a Liminal-designed room and feel your shoulders drop, your breathing deepen, your thoughts clarify. This is not accidental. It is designed.",
      },
    ],
    category: "Philosophy",
    date: "Mar 2025",
    readTime: "5 min",
    image: "/assets/home/journal-3.png",
    author: "Liminal Studio",
    authorRole: "Creative Direction",
  },
  {
    id: "4",
    slug: "the-art-of-proportion-in-interior-spaces",
    title: "The Art of Proportion in Interior Spaces",
    description:
      "Why the golden ratio and classical proportional systems remain deeply relevant in contemporary interior design and how we apply them at Liminal. Proportional harmony creates an invisible spatial order that resonates with the human scale and spirit.",
    content: [
      {
        type: "paragraph",
        text: "Proportion is the invisible framework upon which all great design is built. Long before a single material is selected or a color is chosen, the proportional relationships between walls, openings, volumes and surfaces determine whether a space will feel harmonious or discordant. At Liminal, proportional thinking is where every project begins.",
      },
      {
        type: "heading",
        text: "Classical Principles, Contemporary Expression",
        id: "classical-principles",
      },
      {
        type: "paragraph",
        text: "The golden ratio, the rule of thirds, the Fibonacci sequence: these mathematical relationships have guided architects and designers for millennia. We don't apply them rigidly or academically. Instead, we internalize these proportional systems and allow them to inform our intuitive decision-making, creating spaces that feel 'right' without the viewer understanding exactly why.",
      },
      {
        type: "image",
        alt: "Architectural interior demonstrating proportional harmony",
        caption: "Proportion creates harmony that is felt before it is understood",
      },
      {
        type: "heading",
        text: "The Human Scale",
        id: "human-scale",
      },
      {
        type: "paragraph",
        text: "Beyond abstract mathematical ratios, the most important proportion in interior design is the human body itself. Ceiling heights relate to standing posture. Counter heights respond to arm reach. Corridor widths accommodate comfortable passage. Window sills align with seated eye level. Every dimension in a well-designed interior has been calibrated to the body that will inhabit it.",
      },
      {
        type: "quote",
        text: "A perfectly proportioned room is like a well-tuned instrument: you may not consciously register the tuning, but you immediately feel when something is off.",
        attribution: "Liminal Spatial Studies",
      },
      {
        type: "heading",
        text: "Volume as Emotion",
        id: "volume-emotion",
      },
      {
        type: "paragraph",
        text: "The proportional relationship between floor area and ceiling height fundamentally shapes emotional experience. A high-ceilinged narrow room inspires awe and vertical aspiration. A low-ceilinged wide room creates intimacy and horizontal calm. We manipulate these volumetric proportions deliberately, creating emotional journeys as inhabitants move through a sequence of spaces.",
      },
    ],
    category: "Architecture",
    date: "Feb 2025",
    readTime: "7 min",
    image: "/assets/blog/proportion.png",
    author: "Liminal Studio",
    authorRole: "Architecture Team",
  },
  {
    id: "5",
    slug: "from-concept-to-completion-our-design-process",
    title: "From Concept to Completion: Our Design Process",
    description:
      "A transparent look inside Liminal's end-to-end design methodology, from initial client dialogue through material sourcing to final installation. Discover how our human-centered approach balances technical precision with subtle artistic expression.",
    content: [
      {
        type: "paragraph",
        text: "Every Liminal project begins with a conversation, not about square footage or budgets, but about how our clients want to feel in their spaces. This human-centered starting point shapes everything that follows, ensuring that technical decisions always serve emotional and experiential goals.",
      },
      {
        type: "heading",
        text: "Phase One: Deep Listening",
        id: "deep-listening",
      },
      {
        type: "paragraph",
        text: "Before we draw a single line, we spend time understanding. We visit existing spaces. We study how our clients live, work, entertain and rest. We ask about memories and which spaces from their past made them feel most alive, most calm, most inspired. These conversations reveal the emotional blueprint that will guide every design decision.",
      },
      {
        type: "image",
        alt: "Liminal design studio workspace with material samples",
        caption: "Our studio: where dialogue becomes design direction",
      },
      {
        type: "heading",
        text: "Phase Two: Conceptual Development",
        id: "conceptual-development",
      },
      {
        type: "paragraph",
        text: "With a deep understanding of our client's vision, we develop conceptual narratives, which are stories that will be told through material, light and spatial sequence. We create mood boards, material palettes and spatial diagrams that communicate the sensory experience of each room before a single technical drawing is produced.",
      },
      {
        type: "quote",
        text: "We don't present floor plans first. We present feelings first. Technical precision follows emotional clarity, not the other way around.",
        attribution: "Liminal Process Guide",
      },
      {
        type: "heading",
        text: "Phase Three: Precision Execution",
        id: "precision-execution",
      },
      {
        type: "paragraph",
        text: "Once the concept is validated, our technical team translates vision into precise documentation, including detailed drawings, material specifications, lighting plans and construction schedules. We work with a curated network of craftsmen and fabricators who share our commitment to excellence, ensuring that the built reality matches or exceeds the conceptual promise.",
      },
      {
        type: "paragraph",
        text: "The final installation is not simply a handover; it is a reveal. We style every surface, adjust every light and position every element with the same care that went into the initial concept. The moment our clients step into their completed space should be transformative.",
      },
    ],
    category: "Process",
    date: "Jan 2025",
    readTime: "9 min",
    image: "/assets/blog/studio.png",
    author: "Liminal Studio",
    authorRole: "Project Management",
  },
  {
    id: "6",
    slug: "travertine-the-timeless-surface",
    title: "Travertine: The Timeless Surface",
    description:
      "An exploration of travertine's enduring appeal in luxury interior design, focusing on its geological origins, textural variations and the warmth it brings to contemporary spaces. This sedimentary stone bridges antiquity and modern luxury with timeless grace.",
    content: [
      {
        type: "paragraph",
        text: "Few materials carry as much historical weight while remaining utterly contemporary as travertine. This sedimentary limestone, formed over millennia in hot springs and limestone caves, has graced the floors of Roman temples, the facades of Renaissance palaces and now, the interiors of the world's most discerning homes.",
      },
      {
        type: "heading",
        text: "A Material Born from Time",
        id: "born-from-time",
      },
      {
        type: "paragraph",
        text: "Travertine is, quite literally, time made solid. Each layer represents centuries of mineral deposits, creating the characteristic banding and porous texture that makes every slab unique. When we select travertine for a Liminal project, we are bringing geological history into domestic space, serving as a reminder that the most beautiful things are often the result of patient, natural processes.",
      },
      {
        type: "image",
        alt: "Close-up of travertine surface showing natural texture and warmth",
        caption: "Every vein tells a story measured in millennia",
      },
      {
        type: "heading",
        text: "Finishes and Expression",
        id: "finishes-expression",
      },
      {
        type: "paragraph",
        text: "The beauty of travertine lies in its versatility of finish. Honed travertine offers a smooth, matte surface that feels warm underfoot. Tumbled travertine reveals a more rustic, textured character. Filled travertine provides a uniform surface while maintaining natural beauty. Each finish tells a different story and serves a different spatial intention.",
      },
      {
        type: "quote",
        text: "Travertine doesn't just age; it matures. Like fine wine or aged leather, it becomes more beautiful with time, accumulating the gentle patina of daily life.",
        attribution: "Liminal Material Archive",
      },
      {
        type: "heading",
        text: "Contemporary Applications",
        id: "contemporary-applications",
      },
      {
        type: "paragraph",
        text: "In our contemporary practice, we use travertine in unexpected ways, such as feature walls that create focal warmth, bathroom surfaces that transform daily rituals into sensory experiences and floor surfaces that ground entire homes with their quiet, timeless presence. Its warm, creamy tones complement both minimalist and richly layered interiors.",
      },
    ],
    category: "Material",
    date: "Dec 2024",
    readTime: "6 min",
    image: "/assets/blog/travertine.png",
    author: "Liminal Studio",
    authorRole: "Material Research",
  },
  {
    id: "7",
    slug: "the-threshold-experience-designing-transitions",
    title: "The Threshold Experience: Designing Transitions",
    description:
      "How the moments between rooms, such as thresholds, corridors and transitions, shape the narrative arc of interior spaces and create emotional pacing. The in-between spaces frame our physical experience and heighten anticipation as we move from sanctuary to open hall.",
    content: [
      {
        type: "paragraph",
        text: "The name 'Liminal' comes from the Latin 'limen', meaning threshold. It represents the spaces between: the moment of transition from outside to inside, from public to private, from active to contemplative. These in-between moments are where the most powerful spatial experiences occur and they are central to our design philosophy.",
      },
      {
        type: "heading",
        text: "The Entry Sequence",
        id: "entry-sequence",
      },
      {
        type: "paragraph",
        text: "The journey from street to sanctuary is not a single step but a carefully choreographed sequence. A pathway narrows to create anticipation. A door pivots to reveal a carefully framed view. An entry hall compresses vertically before releasing into a double-height living space. Each transition is designed to heighten awareness and create emotional contrast.",
      },
      {
        type: "image",
        alt: "Architectural transition space with dramatic light and materiality",
        caption: "The threshold: where anticipation becomes experience",
      },
      {
        type: "heading",
        text: "Corridors as Narrative Devices",
        id: "corridors-narrative",
      },
      {
        type: "paragraph",
        text: "In conventional design, corridors are afterthoughts, acting as mere connective tissue between 'important' rooms. At Liminal, corridors are narrative devices. A long corridor with a single artwork at its terminus creates a processional experience. A corridor that gradually widens as it approaches a living space builds a sense of arrival. Light changes, materials shift, ceiling heights adjust, all telling the story of what lies ahead.",
      },
      {
        type: "quote",
        text: "The beauty of a destination is amplified by the quality of the journey. A room entered through a thoughtfully designed threshold feels more significant than one accessed through a standard door.",
        attribution: "Liminal Design Philosophy",
      },
      {
        type: "heading",
        text: "Material Transitions",
        id: "material-transitions",
      },
      {
        type: "paragraph",
        text: "Where one material meets another is a moment of design truth. The junction between timber flooring and stone reveals the designer's attention to craft. At Liminal, we treat these material transitions as design opportunities, such as flush brass inlays, shadow gaps and carefully aligned grain patterns, ensuring that every junction feels intentional and considered.",
      },
    ],
    category: "Design",
    date: "Nov 2024",
    readTime: "7 min",
    image: "/assets/blog/transitions.png",
    author: "Liminal Studio",
    authorRole: "Design Team",
  },
  {
    id: "8",
    slug: "the-monolith-principle-strength-through-simplicity",
    title: "The Monolith Principle: Strength Through Simplicity",
    description:
      "How the concept of the monolith, a single, unified form, informs our approach to kitchen islands, feature walls and sculptural furniture elements. Monolithic structures anchor living spaces, conveying authority, structural purity and material integrity.",
    content: [
      {
        type: "paragraph",
        text: "A monolith is a single block of stone, hewn from the earth and standing with quiet authority. In interior design, the monolith principle applies to elements that command attention through their singular, unified presence, such as a kitchen island carved from a single stone, a feature wall of unbroken marble, or a bath sculpted from solid material.",
      },
      {
        type: "heading",
        text: "The Power of Singularity",
        id: "power-singularity",
      },
      {
        type: "paragraph",
        text: "In a world of visual complexity, a monolithic element provides rest for the eye and anchor for the room. It says: here is something true, something permanent, something considered. The monolith doesn't compete for attention; it earns it through the quality of its material and the clarity of its form.",
      },
      {
        type: "image",
        alt: "A monolithic stone kitchen island in a luxury interior",
        caption: "Monolithic design: authority through material integrity",
      },
      {
        type: "heading",
        text: "Kitchen Islands as Spatial Anchors",
        id: "kitchen-anchors",
      },
      {
        type: "paragraph",
        text: "The kitchen island is perhaps the most common expression of the monolith principle in residential design. When executed as a single, continuous form, with stone wrapping from counter to waterfall edges to integrated seating, it becomes the gravitational center of family life. Not merely a workstation, but a monument to gathering and nourishment.",
      },
      {
        type: "quote",
        text: "A monolith in a room is like a bass note in music; it grounds everything around it, providing the fundamental frequency against which all other elements resonate.",
        attribution: "Liminal Material Philosophy",
      },
      {
        type: "heading",
        text: "Feature Walls and Vertical Monoliths",
        id: "vertical-monoliths",
      },
      {
        type: "paragraph",
        text: "A floor-to-ceiling stone feature wall transforms the vertical plane into a geological event. Book-matched marble slabs create symmetrical patterns that echo butterfly wings. Fluted stone panels add rhythmic texture. These vertical monoliths establish the material identity of an entire room, providing a backdrop against which lighter elements, like textiles, furniture and artwork, can dance.",
      },
    ],
    category: "Design",
    date: "Oct 2024",
    readTime: "6 min",
    image: "/assets/blog/monoliths.png",
    author: "Liminal Studio",
    authorRole: "Design Team",
  },
  {
    id: "9",
    slug: "the-colonnade-reimagined-columns-in-modern-interiors",
    title: "The Colonnade Reimagined: Columns in Modern Interiors",
    description:
      "How we reinterpret the classical colonnade, utilizing columns, rhythm and structural expression, within contemporary residential and commercial interiors. Discover how vertical elements define boundary without closure, bringing timeless architectural dignity to modern design.",
    content: [
      {
        type: "paragraph",
        text: "The column is one of architecture's most ancient and enduring elements. From the fluted Doric columns of the Parthenon to the slender steel pillars of modernist pavilions, vertical structural members have always carried meaning beyond their load-bearing function. They create rhythm, define space and express the dialogue between gravity and aspiration.",
      },
      {
        type: "heading",
        text: "Structural Poetry",
        id: "structural-poetry",
      },
      {
        type: "paragraph",
        text: "In contemporary interiors, columns are often hidden, wrapped in drywall and treated as embarrassments rather than opportunities. At Liminal, we take the opposite approach. We celebrate structural elements, using them as design features that add rhythm and visual cadence to open-plan spaces.",
      },
      {
        type: "image",
        alt: "Reimagined colonnade in a contemporary interior space",
        caption: "The colonnade: where structure becomes spatial music",
      },
      {
        type: "heading",
        text: "Creating Spatial Rhythm",
        id: "spatial-rhythm",
      },
      {
        type: "paragraph",
        text: "A series of evenly spaced columns creates rhythm, a visual beat that the eye follows as it moves through a space. This rhythm can be regular and stately, creating a sense of order and grandeur, or it can be syncopated and playful, introducing tension and surprise. The spacing between columns is as important as the columns themselves.",
      },
      {
        type: "quote",
        text: "A colonnade is frozen music. The spacing between columns is the rhythm, their height is the melody and the light that falls between them is the harmony.",
        attribution: "Liminal Architectural Notes",
      },
      {
        type: "heading",
        text: "Material Expression",
        id: "material-expression",
      },
      {
        type: "paragraph",
        text: "The material of a column communicates its intention. A column clad in brushed bronze speaks of warmth and permanence. A column wrapped in fluted timber introduces organic rhythm. A column left in raw concrete expresses structural honesty. We select column materials to complement and contrast with surrounding surfaces, creating dialogues that enrich the spatial narrative.",
      },
      {
        type: "paragraph",
        text: "In our recent work, we have explored column-like elements as room dividers, serving as semi-structural screens that define zones without closing them, allowing light and air to flow while providing visual and psychological boundaries. These contemporary colonnades are perhaps the most exciting evolution of an ancient architectural idea.",
      },
    ],
    category: "Architecture",
    date: "Sep 2024",
    readTime: "8 min",
    image: "/assets/blog/colonnade.png",
    author: "Liminal Studio",
    authorRole: "Architecture Team",
  },
];

// Helper: get article by slug or id
export const getArticleBySlug = (slug: string): IBlogArticle | undefined =>
  blogArticles.find((a) => a.slug === slug || a.id === slug);


// Helper: get related articles (same category, excluding current)
export const getRelatedArticles = (
  currentSlug: string,
  limit: number = 3
): IBlogArticle[] => {
  const current = blogArticles.find((a) => a.slug === currentSlug);
  if (!current) return [];

  const sameCategory = blogArticles.filter(
    (a) => a.slug !== currentSlug && a.category === current.category
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const others = blogArticles.filter(
    (a) => a.slug !== currentSlug && a.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, limit);
};

// Helper: get adjacent articles for prev/next navigation
export const getAdjacentArticles = (
  currentSlug: string
): { prev: IBlogArticle | null; next: IBlogArticle | null } => {
  const index = blogArticles.findIndex((a) => a.slug === currentSlug);
  return {
    prev: index > 0 ? blogArticles[index - 1] : null,
    next: index < blogArticles.length - 1 ? blogArticles[index + 1] : null,
  };
};
