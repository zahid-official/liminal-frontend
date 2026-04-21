import SectionHeader from "@/components/shared/SectionHeader";
import LiminalButton from "@/components/shared/LiminalButton";
import { Bookmark, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedPost = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-zinc-50/80">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Large Image - 7 columns */}
          <div className="lg:col-span-7 relative group animate-in fade-in slide-in-from-left-8 duration-1200 ease-out fill-mode-both">
            {/* Architectural Frame Decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-liminal-secondary/40 pointer-events-none z-20" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-liminal-secondary/40 pointer-events-none z-20" />

            <div className="relative aspect-video lg:aspect-4/3 rounded-[2.5rem] overflow-hidden border border-border/40 shadow-2xl bg-zinc-50/80">
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
          <div className="lg:col-span-5 space-y-10 animate-in fade-in slide-in-from-right-8 duration-1200 delay-300 ease-out fill-mode-both">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                <span>April 19, 2026</span>
                <span className="w-1 h-1 rounded-full bg-liminal-secondary" />
                <span>Architecture</span>
              </div>

              <SectionHeader
                variant="inline"
                title={
                  <>
                    The Anatomy of{" "}
                    <span className="text-liminal-secondary font-serif italic font-normal underline underline-offset-8 decoration-1">
                      Sustainable
                    </span>{" "}
                    Luxury.
                  </>
                }
                description="Redefining the boundaries of ultra-premium residential architecture through the integration of passive cooling systems and net-zero material sourcing."
              />
            </div>

            <div className="flex items-center gap-10">
              <Link href="/blog/featured-post">
                <LiminalButton>Read Full Story</LiminalButton>
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
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
                  Word Count
                </span>
                <p className="text-[15px] font-bold font-heading leading-none">
                  2,450 Words
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
                  Complexity
                </span>
                <p className="text-[15px] font-bold font-heading leading-none">
                  Technical Deep-Dive
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
