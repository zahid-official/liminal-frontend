import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Share2, Bookmark } from "lucide-react";

const FeaturedPost = () => {
  return (
    <section className="bg-zinc-50/50 py-16 lg:py-24 border-b border-border/40">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Featured Content Area */}
          <div className="lg:col-span-12 mb-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-liminal-secondary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-liminal-secondary">Editorial Pick</span>
            </div>
          </div>

          {/* Large Image - 7 columns */}
          <div className="lg:col-span-7 relative group">
            {/* Architectural Frame Decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-liminal-secondary/40 pointer-events-none z-20" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-liminal-secondary/40 pointer-events-none z-20" />
            
            <div className="relative aspect-video lg:aspect-4/3 rounded-[2.5rem] overflow-hidden border border-border/40 shadow-2xl bg-zinc-100">
              <Image 
                src="/assets/bg-blog.jpeg" 
                alt="Featured Post" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Rotating Technical Ring Decoration */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-dashed border-liminal-secondary/10 rounded-full group-hover:rotate-180 transition-transform duration-3000 pointer-events-none" />
          </div>

          {/* Text Content - 5 columns */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                <span>April 19, 2026</span>
                <span className="w-1 h-1 rounded-full bg-liminal-secondary" />
                <span>Architecture</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-[1.05] tracking-tight">
                The Anatomy of <span className="text-liminal-secondary font-serif italic font-normal">Sustainable</span> Luxury.
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                Redefining the boundaries of ultra-premium residential architecture through the integration of passive cooling systems and net-zero material sourcing.
              </p>
            </div>

            <div className="flex items-center gap-10">
              <Link href="/blog/featured-post" className="group/btn flex items-center gap-3 bg-liminal-secondary text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl shadow-liminal-secondary/20 hover:scale-105 transition-all">
                Read Full Story <ArrowUpRight size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>
              
              <div className="flex items-center gap-4">
                <button className="p-3 rounded-full border border-border/40 text-muted-foreground hover:text-liminal-secondary hover:border-liminal-secondary transition-all">
                  <Share2 size={18} />
                </button>
                <button className="p-3 rounded-full border border-border/40 text-muted-foreground hover:text-liminal-secondary hover:border-liminal-secondary transition-all">
                  <Bookmark size={18} />
                </button>
              </div>
            </div>

            {/* Technical Metadata */}
            <div className="pt-10 border-t border-border/40 grid grid-cols-2 gap-8">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Word Count</span>
                <p className="text-sm font-bold font-heading">2,450 Words</p>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Complexity</span>
                <p className="text-sm font-bold font-heading">Technical Deep-Dive</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
