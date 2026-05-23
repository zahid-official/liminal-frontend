// Interface for Blog / Journal Article
export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category:
    | "Philosophy"
    | "Materiality"
    | "Structure"
    | "Illumination"
    | "Geometry"
    | "Curation";
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

// Typographically verified blog posts (Strictly no em-dashes)
export const blogArticles: BlogArticle[] = [
  {
    id: "architecture-of-silence",
    title: "The Architecture of Silence: Designing Calm in Chaos",
    excerpt:
      "In an age defined by sensory overload, restraint becomes our most powerful tool. We examine how minimalist geometries, quiet acoustics, and negative space cultivate profound mental clarity and emotional wellbeing.",
    category: "Philosophy",
    date: "May 2026",
    readTime: "7 min",
    image: "/assets/blog/silence.png",
    featured: true,
  },
  {
    id: "travertine-monoliths",
    title: "Travertine Monoliths: The Language of Raw Stone",
    excerpt:
      "A tactile investigation into travertine, exploring its geological narrative, porous texture, and the unique ways it anchors architectural forms with timeless mass.",
    category: "Materiality",
    date: "May 2026",
    readTime: "5 min",
    image: "/assets/blog/travertine.png",
  },
  {
    id: "the-colonnade-rhythm",
    title: "The Colonnade: Ordering Light and Shadow",
    excerpt:
      "An analysis of repetitive classical structures in contemporary projects. How columns create a rhythmic transition between interior enclosures and open skies.",
    category: "Structure",
    date: "April 2026",
    readTime: "6 min",
    image: "/assets/blog/colonnade.png",
  },
  {
    id: "chasing-shadows-chiaroscuro",
    title: "Chasing Shadows: The Power of Chiaroscuro",
    excerpt:
      "Lighting is only as good as the darkness it leaves behind. Discover how we utilize shade, occlusion, and low-level lighting to carve out intimate, atmospheric corners.",
    category: "Illumination",
    date: "March 2026",
    readTime: "8 min",
    image: "/assets/blog/shadow.png",
  },
  {
    id: "golden-section-proportion",
    title: "The Golden Section: Finding Proportion in Details",
    excerpt:
      "From cabinet hardware to ceiling heights, we explore how proportional math creates a felt sense of spatial harmony that the mind instantly recognizes.",
    category: "Geometry",
    date: "February 2026",
    readTime: "5 min",
    image: "/assets/blog/proportion.png",
  },
  {
    id: "spatial-thresholds-transitions",
    title: "Spatial Thresholds: Transitioning Between Rooms",
    excerpt:
      "The transition is where the magic happens. We explore how thresholds, portals, and recessed steps act as sensory palate cleansers between functional zones.",
    category: "Philosophy",
    date: "January 2026",
    readTime: "6 min",
    image: "/assets/blog/transitions.png",
  },
  {
    id: "curation-philosophy-art",
    title: "The Curation Philosophy: Art, Objects, and Atmosphere",
    excerpt:
      "Spaces only come alive when they are inhabited by memory. We discuss our approach to layering custom furniture, rare artwork, and heirloom objects to tell client stories.",
    category: "Curation",
    date: "December 2025",
    readTime: "7 min",
    image: "/assets/blog/curation.png",
  },
  {
    id: "monolithic-volumes-furniture",
    title: "Monolithic Volumes: Grounding Contemporary Interiors",
    excerpt:
      "Designing statement furniture and fireplaces as seamless extensions of the building structure itself, creating a unified feeling of permanence and weight.",
    category: "Materiality",
    date: "November 2025",
    readTime: "5 min",
    image: "/assets/blog/monoliths.png",
  },
];

// Reusable quote block for the breathing space in the grid
export const studioReflection = {
  quote:
    "Craft is the silent partner of design. Without the hand that knows the weight of wood, the grain of stone, and the temper of steel, the grandest blueprint remains just a drawing. We build because we must touch what we imagine.",
  author: "Liminal Design Studio",
  context: "From the Studio",
  image: "/assets/blog/studio.png",
};
