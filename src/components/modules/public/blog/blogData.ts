// Blog Thumbnail Interface
export interface IBlogThumbnail {
  url: string;
  caption?: string;
}

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

// Blog Quote Interface
export interface IBlogQuote {
  text: string;
  attribution?: string;
}

// Content Block Interface
export interface IBlogContentBlock {
  id?: string;
  heading: string;
  paragraph: string;
}

// Blog Author Interface
export interface IBlogAuthor {
  name: string;
  email: string;
  role: string;
  picture?: string;
}

// Blog Article Interface
export interface IBlogArticle {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: [IBlogContentBlock, ...IBlogContentBlock[]];
  category: string;
  thumbnail: IBlogThumbnail;
  quote?: IBlogQuote;
  author: IBlogAuthor;
  createdAt: string;
  readTime: string;
  isFeatured?: boolean;
  tags?: string;
}

// Blog Sort Options
export const blogSortOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Title: A – Z", value: "az" },
  { label: "Title: Z – A", value: "za" },
  { label: "Read Time: Short to Long", value: "read-time-asc" },
  { label: "Read Time: Long to Short", value: "read-time-desc" },
] as const;
export type BlogSortValue = (typeof blogSortOptions)[number]["value"];

// Blog Articles Data
export const blogArticles: IBlogArticle[] = [
  {
    id: "1",
    title: "The Role of Light in Spatial Design",
    slug: "the-role-of-light-in-spatial-design",
    description:
      "How natural and artificial illumination shapes human experience, transforms architectural volumes and defines the emotional character of interior spaces. At Liminal, we treat light not simply as a functional utility, but as a primary material that sculpts form and evokes deep feeling.",
    content: [
      {
        id: "essence-of-light",
        heading: "The Essence of Architectural Light",
        paragraph:
          "Light is the most fundamental material in architecture. It is invisible yet omnipresent, shaping every surface it touches, defining depth, mood and the very essence of spatial experience. At Liminal, we treat light not as a byproduct of window placement, but as a design material to be sculpted with the same precision as stone or timber. When light engages with texture, it transforms quiet walls into living canvases that respond dynamically to the passage of hours. Subtle gradations of brightness guide movement through a space naturally, drawing the eye toward architectural focal points without demanding conscious thought. Ultimately, light governs how a space feels at sunrise, during the clarity of noon and in the contemplative stillness of evening.",
      },
      {
        id: "natural-light",
        heading: "Natural Light as Spatial Architecture",
        paragraph:
          "The interplay between natural light and interior surfaces creates a living artwork that shifts throughout the day. Morning light casts long, warm shadows that reveal the texture of travertine walls, while midday sun floods through carefully positioned apertures to illuminate gathering spaces with clean, neutral light.\n\nWe study the solar path for every project, understanding how light will travel through each room at different times of day and across seasons. This analysis informs window sizing, orientation, material selection and even furniture placement, where every decision is made in conversation with light.",
      },
      {
        id: "artificial-illumination",
        heading: "Artificial Illumination as Atmosphere",
        paragraph:
          "When the sun sets, artificial lighting takes over the narrative. But unlike conventional approaches that simply illuminate, our lighting design creates atmosphere. Recessed cove lighting washes walls with warm amber tones, pendant fixtures become sculptural focal points and carefully calibrated dimming systems allow spaces to transition from productive clarity to intimate warmth.",
      },
      {
        id: "emotional-spectrum",
        heading: "The Emotional Spectrum of Illumination",
        paragraph:
          "Every color temperature tells a different story. The warm glow of 2700K evokes intimacy and comfort, making it perfect for residential sanctuaries. The crisp neutrality of 4000K brings clarity and focus to workspaces. We layer these temperatures within single environments, creating zones of emotional experience that guide inhabitants through their daily rhythms.\n\nAt Liminal, we believe that the most powerful design decisions are often invisible. Light is the ultimate invisible architect: it shapes experience without being seen, creates mood without being touched and transforms space without occupying any of it.",
      },
    ],
    category: "Design",
    thumbnail: {
      url: "/assets/home/journal-1.png",
      caption: "The choreography of light through architectural apertures",
    },
    quote: {
      text: "Light is not what you see; it is what allows you to feel. A room bathed in the right light doesn't just look beautiful; it makes you breathe differently.",
      attribution: "Liminal Design Philosophy",
    },
    author: {
      name: "Liminal Studio",
      email: "contact@liminalbd.com",
      role: "Design Team",
    },
    createdAt: "May 2025",
    readTime: "6 min",
  },
  {
    id: "2",
    title: "Material Palettes: Curating Texture",
    slug: "material-palettes-curating-texture",
    description:
      "A deep exploration of how material selection, from raw stone to burnished metal, creates narrative depth and sensory richness in contemporary interiors. Each surface carries tactile memory, bridging historical craftsmanship with modern minimal sensibilities.",
    content: [
      {
        id: "materials-language",
        heading: "Materials as Architectural Language",
        paragraph:
          "In the hands of a thoughtful designer, materials become language. Each surface speaks: the warmth of oiled walnut, the cool permanence of honed marble, the honest roughness of raw concrete. At Liminal, we approach material selection as curation, assembling palettes that tell coherent stories across every room. By understanding the sensory weight of each material, we craft environments where touch and sight harmoniously align. Texture invites physical interaction, inviting inhabitants to run a hand over carved stone or feel the subtle grain of brushed timber. These tactile nuances anchor us in the physical world, turning ordinary daily routines into rich sensory experiences.",
      },
      {
        id: "material-truth",
        heading: "The Philosophy of Material Truth",
        paragraph:
          "We believe in material honesty, allowing stone to look like stone, wood to age like wood and metal to develop its natural patina over time. This commitment to authenticity creates spaces that grow more beautiful with age, developing character and memory rather than simply deteriorating.",
      },
      {
        id: "dialogue-surfaces",
        heading: "Dialogue Between Surfaces",
        paragraph:
          "The magic of material design lies not in individual surfaces, but in the conversations between them. The smoothness of polished brass against rough-hewn limestone. The warmth of cedar beside cool, veined marble. These juxtapositions create sensory depth that photographs can suggest but only physical presence can fully reveal.",
      },
      {
        id: "aging-design",
        heading: "Aging as Design Intent",
        paragraph:
          "We select materials that age gracefully. Brass that develops a rich patina. Leather that softens with use. Stone that wears smooth under footfall. These materials carry time within them, accumulating the marks of daily life and transforming houses into homes with layered histories.\n\nTrue luxury is not about pristine perfection; it is about materials so well-chosen and honestly expressed that they become more themselves over time. Every scratch tells a story. Every patina marks a memory.",
      },
    ],
    category: "Material",
    thumbnail: {
      url: "/assets/home/journal-2.png",
      caption: "Travertine: A material that bridges antiquity and modernity",
    },
    quote: {
      text: "A material palette is not a collection of pretty surfaces. It is an emotional vocabulary where each texture, each tone and each weight carries meaning that shapes how we feel within a space.",
      attribution: "Liminal Material Studies",
    },
    author: {
      name: "Liminal Studio",
      email: "contact@liminalbd.com",
      role: "Material Research",
    },
    createdAt: "Apr 2025",
    readTime: "8 min",
  },
  {
    id: "3",
    title: "Architecture of Silence: Designing Calm",
    slug: "architecture-of-silence-designing-calm",
    description:
      "In an age of sensory overload, the most powerful design choice may be restraint. Exploring how quiet spaces cultivate focus, reflection and wellbeing through visual silence, balanced acoustic design and distilled architectural forms.",
    content: [
      {
        id: "sanctuary-from-noise",
        heading: "Sanctuary from Modern Noise",
        paragraph:
          "We live in a world that constantly demands our attention. Notifications, screens, noise, visual clutter: modern life is an assault on the senses. In this context, the spaces we inhabit become either accomplices to chaos or sanctuaries from it. At Liminal, we choose sanctuary. Creating quiet spaces allows the human mind to rest, shed external stress and rediscover internal balance. When visual noise is stripped away, room is created for original thought and quiet contemplation. Silence within architectural spaces is not an empty void, but a rich atmosphere where clarity and peace can genuinely flourish.",
      },
      {
        id: "visual-silence",
        heading: "The Power of Visual Silence",
        paragraph:
          "Visual silence is not emptiness. It is the careful removal of everything unnecessary until only the essential remains. A room designed with visual silence has no wasted elements; every line, every surface and every object serves a purpose, whether functional or contemplative.",
      },
      {
        id: "acoustic-consideration",
        heading: "Acoustic Consideration in Design",
        paragraph:
          "Beyond the visual, we consider the acoustic landscape of every space. Hard surfaces reflect and amplify sound, creating environments that feel busy even when empty. Our approach layers sound-absorbing materials like thick textiles, upholstered panels and timber cladding to create rooms where conversations feel intimate and silence feels rich rather than hollow.",
      },
      {
        id: "mental-restoration",
        heading: "Designing for Mental Restoration",
        paragraph:
          "Research in environmental psychology consistently demonstrates that visual complexity increases cognitive load. Our design philosophy responds to this by creating environments that actively reduce mental burden through restrained color palettes, ordered proportions and intuitive spatial flow.\n\nThe result is spaces that function as mental reset environments. Walk into a Liminal-designed room and feel your shoulders drop, your breathing deepen, your thoughts clarify. This is not accidental. It is designed.",
      },
    ],
    category: "Philosophy",
    thumbnail: {
      url: "/assets/home/journal-3.png",
      caption:
        "Silence is not the absence of design; it is design at its most distilled",
    },
    quote: {
      text: "The measure of a truly great interior is not what it contains, but what it allows you to release. A calm space doesn't demand your attention; instead, it gives your attention back to you.",
      attribution: "Liminal Design Manifesto",
    },
    author: {
      name: "Liminal Studio",
      email: "contact@liminalbd.com",
      role: "Creative Direction",
    },
    createdAt: "Mar 2025",
    readTime: "5 min",
  },
  {
    id: "4",
    title: "The Art of Proportion in Interior Spaces",
    slug: "the-art-of-proportion-in-interior-spaces",
    description:
      "Why the golden ratio and classical proportional systems remain deeply relevant in contemporary interior design and how we apply them at Liminal. Proportional harmony creates an invisible spatial order that resonates with the human scale and spirit.",
    content: [
      {
        id: "invisible-framework",
        heading: "The Invisible Spatial Framework",
        paragraph:
          "Proportion is the invisible framework upon which all great design is built. Long before a single material is selected or a color is chosen, the proportional relationships between walls, openings, volumes and surfaces determine whether a space will feel harmonious or discordant. At Liminal, proportional thinking is where every project begins. By anchoring our geometry in classic spatial ratios, we create rooms that instantly evoke a subconscious sense of belonging. Harmonious dimensions establish an understated rhythm that connects individual rooms into a unified whole. When volume, light and human scale align in proper proportion, an interior achieves a timeless elegance that feels effortlessly natural.",
      },
      {
        id: "classical-principles",
        heading: "Classical Principles, Contemporary Expression",
        paragraph:
          "The golden ratio, the rule of thirds, the Fibonacci sequence: these mathematical relationships have guided architects and designers for millennia. We don't apply them rigidly or academically. Instead, we internalize these proportional systems and allow them to inform our intuitive decision-making, creating spaces that feel 'right' without the viewer understanding exactly why.",
      },
      {
        id: "human-scale",
        heading: "The Human Scale",
        paragraph:
          "Beyond abstract mathematical ratios, the most important proportion in interior design is the human body itself. Ceiling heights relate to standing posture. Counter heights respond to arm reach. Corridor widths accommodate comfortable passage. Window sills align with seated eye level. Every dimension in a well-designed interior has been calibrated to the body that will inhabit it.",
      },
      {
        id: "volume-emotion",
        heading: "Volume as Emotion",
        paragraph:
          "The proportional relationship between floor area and ceiling height fundamentally shapes emotional experience. A high-ceilinged narrow room inspires awe and vertical aspiration. A low-ceilinged wide room creates intimacy and horizontal calm. We manipulate these volumetric proportions deliberately, creating emotional journeys as inhabitants move through a sequence of spaces.",
      },
    ],
    category: "Architecture",
    thumbnail: {
      url: "/assets/blog/proportion.png",
      caption:
        "Proportion creates harmony that is felt before it is understood",
    },
    quote: {
      text: "A perfectly proportioned room is like a well-tuned instrument: you may not consciously register the tuning, but you immediately feel when something is off.",
      attribution: "Liminal Spatial Studies",
    },
    author: {
      name: "Liminal Studio",
      email: "contact@liminalbd.com",
      role: "Architecture Team",
    },
    createdAt: "Feb 2025",
    readTime: "7 min",
  },
  {
    id: "5",
    title: "From Concept to Completion: Our Design Process",
    slug: "from-concept-to-completion-our-design-process",
    description:
      "A transparent look inside Liminal's end-to-end design methodology, from initial client dialogue through material sourcing to final installation. Discover how our human-centered approach balances technical precision with subtle artistic expression.",
    content: [
      {
        id: "human-centered-beginnings",
        heading: "Human-Centered Design Beginnings",
        paragraph:
          "Every Liminal project begins with a conversation, not about square footage or budgets, but about how our clients want to feel in their spaces. This human-centered starting point shapes everything that follows, ensuring that technical decisions always serve emotional and experiential goals. Understanding these personal narratives allows us to translate abstract desires into tangible architectural forms. We explore how space can support daily rituals, foster deep family connections and offer quiet solitude. Every architectural detail we craft grows directly from this empathetic understanding, ensuring a result that feels uniquely resonant.",
      },
      {
        id: "deep-listening",
        heading: "Phase One: Deep Listening",
        paragraph:
          "Before we draw a single line, we spend time understanding. We visit existing spaces. We study how our clients live, work, entertain and rest. We ask about memories and which spaces from their past made them feel most alive, most calm, most inspired. These conversations reveal the emotional blueprint that will guide every design decision.",
      },
      {
        id: "conceptual-development",
        heading: "Phase Two: Conceptual Development",
        paragraph:
          "With a deep understanding of our client's vision, we develop conceptual narratives, which are stories that will be told through material, light and spatial sequence. We create mood boards, material palettes and spatial diagrams that communicate the sensory experience of each room before a single technical drawing is produced.",
      },
      {
        id: "precision-execution",
        heading: "Phase Three: Precision Execution",
        paragraph:
          "Once the concept is validated, our technical team translates vision into precise documentation, including detailed drawings, material specifications, lighting plans and construction schedules. We work with a curated network of craftsmen and fabricators who share our commitment to excellence, ensuring that the built reality matches or exceeds the conceptual promise.\n\nThe final installation is not simply a handover; it is a reveal. We style every surface, adjust every light and position every element with the same care that went into the initial concept. The moment our clients step into their completed space should be transformative.",
      },
    ],
    category: "Process",
    thumbnail: {
      url: "/assets/blog/studio.png",
      caption: "Our studio: where dialogue becomes design direction",
    },
    quote: {
      text: "We don't present floor plans first. We present feelings first. Technical precision follows emotional clarity, not the other way around.",
      attribution: "Liminal Process Guide",
    },
    author: {
      name: "Liminal Studio",
      email: "contact@liminalbd.com",
      role: "Project Management",
    },
    createdAt: "Jan 2025",
    readTime: "9 min",
  },
  {
    id: "6",
    title: "Travertine: The Timeless Surface",
    slug: "travertine-the-timeless-surface",
    description:
      "An exploration of travertine's enduring appeal in luxury interior design, focusing on its geological origins, textural variations and the warmth it brings to contemporary spaces. This sedimentary stone bridges antiquity and modern luxury with timeless grace.",
    content: [
      {
        id: "travertine-history",
        heading: "Travertine's Historical Weight",
        paragraph:
          "Few materials carry as much historical weight while remaining utterly contemporary as travertine. This sedimentary limestone, formed over millennia in hot springs and limestone caves, has graced the floors of Roman temples, the facades of Renaissance palaces and now, the interiors of the world's most discerning homes. Its natural warmth and subtle veining bring an earthy elegance that grounds modern architecture. The porous voids and subtle tonal shifts within travertine tell a story of geological patience that cannot be replicated synthetically. In modern residential design, it provides an enduring foundation that bridges classic craftsmanship with minimalist aesthetics.",
      },
      {
        id: "born-from-time",
        heading: "A Material Born from Time",
        paragraph:
          "Travertine is, quite literally, time made solid. Each layer represents centuries of mineral deposits, creating the characteristic banding and porous texture that makes every slab unique. When we select travertine for a Liminal project, we are bringing geological history into domestic space, serving as a reminder that the most beautiful things are often the result of patient, natural processes.",
      },
      {
        id: "finishes-expression",
        heading: "Finishes and Expression",
        paragraph:
          "The beauty of travertine lies in its versatility of finish. Honed travertine offers a smooth, matte surface that feels warm underfoot. Tumbled travertine reveals a more rustic, textured character. Filled travertine provides a uniform surface while maintaining natural beauty. Each finish tells a different story and serves a different spatial intention.",
      },
      {
        id: "contemporary-applications",
        heading: "Contemporary Applications",
        paragraph:
          "In our contemporary practice, we use travertine in unexpected ways, such as feature walls that create focal warmth, bathroom surfaces that transform daily rituals into sensory experiences and floor surfaces that ground entire homes with their quiet, timeless presence. Its warm, creamy tones complement both minimalist and richly layered interiors.",
      },
    ],
    category: "Material",
    thumbnail: {
      url: "/assets/blog/travertine.png",
      caption: "Every vein tells a story measured in millennia",
    },
    quote: {
      text: "Travertine doesn't just age; it matures. Like fine wine or aged leather, it becomes more beautiful with time, accumulating the gentle patina of daily life.",
      attribution: "Liminal Material Archive",
    },
    author: {
      name: "Liminal Studio",
      email: "contact@liminalbd.com",
      role: "Material Research",
    },
    createdAt: "Dec 2024",
    readTime: "6 min",
  },
  {
    id: "7",
    title: "The Threshold Experience: Designing Transitions",
    slug: "the-threshold-experience-designing-transitions",
    description:
      "How the moments between rooms, such as thresholds, corridors and transitions, shape the narrative arc of interior spaces and create emotional pacing. The in-between spaces frame our physical experience and heighten anticipation as we move from sanctuary to open hall.",
    content: [
      {
        id: "anatomy-of-thresholds",
        heading: "The Anatomy of In-Between Spaces",
        paragraph:
          "The name 'Liminal' comes from the Latin 'limen', meaning threshold. It represents the spaces between: the moment of transition from outside to inside, from public to private, from active to contemplative. These in-between moments are where the most powerful spatial experiences occur and they are central to our design philosophy. By designing transitions with intention, we prepare the spirit for the space that unfolds beyond. A thoughtful threshold acts as a psychological buffer, slowing our pace and shifting our frame of mind as we cross into a new volume. These subtle pause points heighten sensory awareness and make arriving at a destination feel meaningful.",
      },
      {
        id: "entry-sequence",
        heading: "The Entry Sequence",
        paragraph:
          "The journey from street to sanctuary is not a single step but a carefully choreographed sequence. A pathway narrows to create anticipation. A door pivots to reveal a carefully framed view. An entry hall compresses vertically before releasing into a double-height living space. Each transition is designed to heighten awareness and create emotional contrast.",
      },
      {
        id: "corridors-narrative",
        heading: "Corridors as Narrative Devices",
        paragraph:
          "In conventional design, corridors are afterthoughts, acting as mere connective tissue between 'important' rooms. At Liminal, corridors are narrative devices. A long corridor with a single artwork at its terminus creates a processional experience. A corridor that gradually widens as it approaches a living space builds a sense of arrival. Light changes, materials shift, ceiling heights adjust, all telling the story of what lies ahead.",
      },
      {
        id: "material-transitions",
        heading: "Material Transitions",
        paragraph:
          "Where one material meets another is a moment of design truth. The junction between timber flooring and stone reveals the designer's attention to craft. At Liminal, we treat these material transitions as design opportunities, such as flush brass inlays, shadow gaps and carefully aligned grain patterns, ensuring that every junction feels intentional and considered.",
      },
    ],
    category: "Design",
    thumbnail: {
      url: "/assets/blog/transitions.png",
      caption: "The threshold: where anticipation becomes experience",
    },
    quote: {
      text: "The beauty of a destination is amplified by the quality of the journey. A room entered through a thoughtfully designed threshold feels more significant than one accessed through a standard door.",
      attribution: "Liminal Design Philosophy",
    },
    author: {
      name: "Liminal Studio",
      email: "contact@liminalbd.com",
      role: "Design Team",
    },
    createdAt: "Nov 2024",
    readTime: "7 min",
  },
  {
    id: "8",
    title: "The Monolith Principle: Strength Through Simplicity",
    slug: "the-monolith-principle-strength-through-simplicity",
    description:
      "How the concept of the monolith, a single, unified form, informs our approach to kitchen islands, feature walls and sculptural furniture elements. Monolithic structures anchor living spaces, conveying authority, structural purity and material integrity.",
    content: [
      {
        id: "monolithic-authority",
        heading: "Understanding Monolithic Authority",
        paragraph:
          "A monolith is a single block of stone, hewn from the earth and standing with quiet authority. In interior design, the monolith principle applies to elements that command attention through their singular, unified presence, such as a kitchen island carved from a single stone, a feature wall of unbroken marble, or a bath sculpted from solid material. These sculpted elements bring a grounded permanence that balances lighter interior furnishings. By presenting a singular material form without joint lines or visual interruption, monolithic elements exude an unyielding structural purity. They serve as gravitational anchors in open-plan layouts around which daily domestic life naturally revolves.",
      },
      {
        id: "power-singularity",
        heading: "The Power of Singularity",
        paragraph:
          "In a world of visual complexity, a monolithic element provides rest for the eye and anchor for the room. It says: here is something true, something permanent, something considered. The monolith doesn't compete for attention; it earns it through the quality of its material and the clarity of its form.",
      },
      {
        id: "kitchen-anchors",
        heading: "Kitchen Islands as Spatial Anchors",
        paragraph:
          "The kitchen island is perhaps the most common expression of the monolith principle in residential design. When executed as a single, continuous form, with stone wrapping from counter to waterfall edges to integrated seating, it becomes the gravitational center of family life. Not merely a workstation, but a monument to gathering and nourishment.",
      },
      {
        id: "vertical-monoliths",
        heading: "Feature Walls and Vertical Monoliths",
        paragraph:
          "A floor-to-ceiling stone feature wall transforms the vertical plane into a geological event. Book-matched marble slabs create symmetrical patterns that echo butterfly wings. Fluted stone panels add rhythmic texture. These vertical monoliths establish the material identity of an entire room, providing a backdrop against which lighter elements, like textiles, furniture and artwork, can dance.",
      },
    ],
    category: "Design",
    thumbnail: {
      url: "/assets/blog/monoliths.png",
      caption: "Monolithic design: authority through material integrity",
    },
    quote: {
      text: "A monolith in a room is like a bass note in music; it grounds everything around it, providing the fundamental frequency against which all other elements resonate.",
      attribution: "Liminal Material Philosophy",
    },
    author: {
      name: "Liminal Studio",
      email: "contact@liminalbd.com",
      role: "Design Team",
    },
    createdAt: "Oct 2024",
    readTime: "6 min",
  },
  {
    id: "9",
    title: "The Colonnade Reimagined: Columns in Modern Interiors",
    slug: "the-colonnade-reimagined-columns-in-modern-interiors",
    description:
      "How we reinterpret the classical colonnade, utilizing columns, rhythm and structural expression, within contemporary residential and commercial interiors. Discover how vertical elements define boundary without closure, bringing timeless architectural dignity to modern design.",
    content: [
      {
        id: "ancient-form-modern-context",
        heading: "Ancient Form in Modern Context",
        paragraph:
          "The column is one of architecture's most ancient and enduring elements. From the fluted Doric columns of the Parthenon to the slender steel pillars of modernist pavilions, vertical structural members have always carried meaning beyond their load-bearing function. They create rhythm, define space and express the dialogue between gravity and aspiration. In modern interiors, reinterpreting columns offers a compelling way to divide space without sacrificing openness. Vertical pillars introduce an architectural tempo that organizes spatial flow while allowing light and sightlines to filter through freely. Reimagined colonnades elevate structural necessity into sculptural art that celebrates spatial transition.",
      },
      {
        id: "structural-poetry",
        heading: "Structural Poetry",
        paragraph:
          "In contemporary interiors, columns are often hidden, wrapped in drywall and treated as embarrassments rather than opportunities. At Liminal, we take the opposite approach. We celebrate structural elements, using them as design features that add rhythm and visual cadence to open-plan spaces.",
      },
      {
        id: "spatial-rhythm",
        heading: "Creating Spatial Rhythm",
        paragraph:
          "A series of evenly spaced columns creates rhythm, a visual beat that the eye follows as it moves through a space. This rhythm can be regular and stately, creating a sense of order and grandeur, or it can be syncopated and playful, introducing tension and surprise. The spacing between columns is as important as the columns themselves.",
      },
      {
        id: "material-expression",
        heading: "Material Expression",
        paragraph:
          "The material of a column communicates its intention. A column clad in brushed bronze speaks of warmth and permanence. A column wrapped in fluted timber introduces organic rhythm. A column left in raw concrete expresses structural honesty. We select column materials to complement and contrast with surrounding surfaces, creating dialogues that enrich the spatial narrative.\n\nIn our recent work, we have explored column-like elements as room dividers, serving as semi-structural screens that define zones without closing them, allowing light and air to flow while providing visual and psychological boundaries. These contemporary colonnades are perhaps the most exciting evolution of an ancient architectural idea.",
      },
    ],
    category: "Architecture",
    thumbnail: {
      url: "/assets/blog/colonnade.png",
      caption: "The colonnade: where structure becomes spatial music",
    },
    quote: {
      text: "A colonnade is frozen music. The spacing between columns is the rhythm, their height is the melody and the light that falls between them is the harmony.",
      attribution: "Liminal Architectural Notes",
    },
    author: {
      name: "Liminal Studio",
      email: "contact@liminalbd.com",
      role: "Architecture Team",
    },
    createdAt: "Sep 2024",
    readTime: "8 min",
  },
];

// Helper: get article by slug or id
export const getArticleBySlug = (slug: string): IBlogArticle | undefined =>
  blogArticles.find((a) => a.slug === slug || a.id === slug);

// Helper: get related articles (same category, excluding current)
export const getRelatedArticles = (
  currentSlug: string,
  limit: number = 3,
): IBlogArticle[] => {
  const current = blogArticles.find((a) => a.slug === currentSlug);
  if (!current) return blogArticles.slice(0, limit);

  const related = blogArticles.filter(
    (a) => a.category === current.category && a.slug !== currentSlug,
  );

  if (related.length >= limit) return related.slice(0, limit);

  const additional = blogArticles.filter(
    (a) => a.category !== current.category && a.slug !== currentSlug,
  );

  return [...related, ...additional].slice(0, limit);
};

// Helper: get adjacent (prev / next) articles for navigation
export const getAdjacentArticles = (
  currentSlug: string,
): { prev: IBlogArticle | null; next: IBlogArticle | null } => {
  const index = blogArticles.findIndex((a) => a.slug === currentSlug);
  if (index === -1) return { prev: null, next: null };

  const prev = index > 0 ? blogArticles[index - 1] : null;
  const next = index < blogArticles.length - 1 ? blogArticles[index + 1] : null;

  return { prev, next };
};

// Helper: parse read time in minutes
export const parseBlogReadTime = (readTimeStr?: string): number => {
  if (!readTimeStr) return 0;
  return parseInt(readTimeStr.replace(/[^0-9]/g, ""), 10) || 0;
};

// Filter and sort blog articles
export const filterBlogArticles = (options: {
  category?: string;
  search?: string;
  sort?: BlogSortValue;
}): IBlogArticle[] => {
  let results = [...blogArticles];

  // Category filter
  if (options.category && options.category !== "All") {
    results = results.filter(
      (article) => article.category === options.category,
    );
  }

  // Search filter
  if (options.search?.trim()) {
    const query = options.search.toLowerCase().trim();
    results = results.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.author.name.toLowerCase().includes(query) ||
        article.author.role.toLowerCase().includes(query) ||
        (article.tags && article.tags.toLowerCase().includes(query)),
    );
  }

  // Sort
  if (options.sort) {
    switch (options.sort) {
      case "oldest":
        results.reverse();
        break;
      case "az":
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "za":
        results.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "read-time-asc":
        results.sort(
          (a, b) =>
            parseBlogReadTime(a.readTime) - parseBlogReadTime(b.readTime),
        );
        break;
      case "read-time-desc":
        results.sort(
          (a, b) =>
            parseBlogReadTime(b.readTime) - parseBlogReadTime(a.readTime),
        );
        break;
      case "newest":
      default:
        break;
    }
  }

  return results;
};

