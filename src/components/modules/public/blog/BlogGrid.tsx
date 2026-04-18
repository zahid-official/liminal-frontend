import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, User, Tag } from "lucide-react";

const blogPosts = [
  {
    id: "01",
    ref: "LBD-ART-B01",
    title: "Light & Shadow: Designing for Contrast",
    excerpt: "How to manipulate natural light to create dramatic, evolving spaces throughout the diurnal cycle.",
    image: "/assets/blog-2.png",
    date: "April 12, 2026",
    author: "Zahidul Islam",
    category: "Design Theory",
    readTime: "5 min",
  },
  {
    id: "02",
    ref: "LBD-ART-B02",
    title: "Sustainable Brutalism in Modern Living",
    excerpt: "Merging raw concrete aesthetics with carbon-negative materials for the eco-conscious urbanite.",
    image: "/assets/blog-3.png",
    date: "April 08, 2026",
    author: "Elena Rossi",
    category: "Architecture",
    readTime: "7 min",
  },
  {
    id: "03",
    ref: "LBD-ART-B03",
    title: "The Renaissance of Curved Geometry",
    excerpt: "Breaking away from linear constraints to embrace organic forms inspired by the Fibonacci sequence.",
    image: "/assets/blog-1.png",
    date: "April 02, 2026",
    author: "Marcus Chen",
    category: "Innovation",
    readTime: "6 min",
  },
  {
    id: "04",
    ref: "LBD-ART-B04",
    title: "Materiality: The Soul of the Interior",
    excerpt: "Exploring the tactile relationship between human touch and curated architectural surfaces.",
    image: "/assets/blog-2.png",
    date: "March 28, 2026",
    author: "Zahidul Islam",
    category: "Materials",
    readTime: "4 min",
  },
  {
    id: "05",
    ref: "LBD-ART-B05",
    title: "Vertical Gardens: Breathing Structures",
    excerpt: "Integrating biophilic design into high-density urban residential complexes for wellness.",
    image: "/assets/blog-3.png",
    date: "March 22, 2026",
    author: "Sarah Jenkins",
    category: "Landscape",
    readTime: "8 min",
  },
  {
    id: "06",
    ref: "LBD-ART-B06",
    title: "Digital Fabrication in Bespoke Joinery",
    excerpt: "How CNC and 3D printing are revolutionizing traditional craftsmanship in luxury interiors.",
    image: "/assets/blog-1.png",
    date: "March 15, 2026",
    author: "Tom Baker",
    category: "Technology",
    readTime: "5 min",
  },
];

const BlogGrid = () => {
  return (
    <section className="py-20 bg-zinc-50/50 relative overflow-hidden">
      {/* Background Decorative Line */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-border/20 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-border/40 to-transparent z-0 pointer-events-none" />

      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {blogPosts.map((post) => (
            <article key={post.id} className="group flex flex-col h-full">
              {/* Image Container */}
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden border border-border/40 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-liminal-secondary/5 mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Floating Technical Tag */}
                <div className="absolute top-6 right-6 px-3 py-1 bg-black/40 border border-white/20 rounded-full flex items-center gap-2 backdrop-blur-md">
                   <div className="w-1.5 h-1.5 rounded-full bg-liminal-secondary" />
                   <span className="text-[9px] font-bold text-white uppercase tracking-widest">{post.ref}</span>
                </div>

                {/* Border Overlay */}
                <div className="absolute inset-4 border border-white/10 rounded-2xl pointer-events-none group-hover:border-white/20 transition-colors duration-500" />
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-6 mb-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                <div className="flex items-center gap-2 group-hover:text-liminal-secondary transition-colors duration-300">
                  <Tag size={12} strokeWidth={2.5} />
                  {post.category}
                </div>
                <div className="w-1 h-1 rounded-full bg-border" />
                <div className="flex items-center gap-2">
                  <Calendar size={12} strokeWidth={2.5} />
                  {post.date}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold font-heading tracking-tight mb-4 grow group-hover:text-liminal-secondary transition-colors duration-500 line-clamp-2">
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h3>

              {/* Excerpt */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-3 font-light">
                {post.excerpt}
              </p>

              {/* Author & CTA */}
              <div className="pt-8 border-t border-dashed border-border flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 border border-border/40 flex items-center justify-center text-liminal-secondary">
                    <User size={14} />
                  </div>
                  <span className="text-xs font-bold text-foreground tracking-tight">{post.author}</span>
                </div>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-liminal-secondary hover:text-white hover:border-liminal-secondary transition-all duration-500 transform group-hover:rotate-45"
                >
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
