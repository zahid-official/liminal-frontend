import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const FeaturedPost = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="custom-container">
        <div className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-900 aspect-video md:aspect-21/9 lg:aspect-3/1 border border-white/10 shadow-2xl">
          {/* Background Image */}
          <Image
            src="/assets/blog-1.png"
            alt="Featured architectural design"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-70"
            priority
          />

          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-px h-full bg-white/5" />
            <div className="absolute top-0 left-2/4 w-px h-full bg-white/10" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-white/5" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-20 z-10 transition-colors duration-500">
            {/* Background Accent Decorative */}
            <div className="absolute top-10 right-10 flex flex-col items-end opacity-40">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white">Ref: LBD-FEAT-2026</span>
              <div className="w-12 h-px bg-liminal-secondary mt-2 shadow-[0_0_10px_rgba(var(--liminal-secondary),0.5)]" />
            </div>

            <div className="space-y-6 max-w-3xl">
              <div className="flex flex-wrap items-center gap-6">
                <span className="px-4 py-1.5 rounded-full bg-liminal-secondary/90 text-white text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                  FEATURED INSIGHT
                </span>
                <div className="flex items-center gap-2 text-white/60 text-xs font-medium uppercase tracking-widest">
                  <Calendar size={14} className="text-liminal-secondary" />
                  April 15, 2026
                </div>
                <div className="flex items-center gap-2 text-white/60 text-xs font-medium uppercase tracking-widest">
                  <Clock size={14} className="text-liminal-secondary" />
                  8 MIN READ
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-[1.1] tracking-tight group-hover:text-liminal-secondary transition-colors duration-500">
                The Future of Minimalist <br className="hidden md:block" />
                <span className="italic font-serif">Structural Elegance</span>
              </h2>

              <p className="text-white/70 text-lg md:text-xl max-w-2xl font-light leading-relaxed line-clamp-2 md:line-clamp-none">
                Exploring how modern architectural practices are redefining the boundaries between functional space 
                and poetic minimalism in the 21st century.
              </p>

              <div className="pt-4">
                <Link
                  href="/blog/future-of-minimalism"
                  className="inline-flex items-center gap-4 group/btn"
                >
                  <span className="text-sm font-bold uppercase tracking-[0.3em] text-white group-hover/btn:text-liminal-secondary transition-colors">
                    READ FULL ARTICLE
                  </span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover/btn:border-liminal-secondary group-hover/btn:bg-liminal-secondary group-hover/btn:text-white transition-all duration-500">
                    <ArrowRight size={20} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
