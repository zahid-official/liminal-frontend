import PageHeader from "@/components/shared/PageHeader";
import FeaturedPost from "@/components/modules/public/blog/FeaturedPost";
import BlogGrid from "@/components/modules/public/blog/BlogGrid";
import { Search, SlidersHorizontal } from "lucide-react";
import NewsletterSection from "@/components/modules/public/home/NewsletterSection";

const BlogPage = () => {
  return (
    <main>
      <PageHeader
        title="Journal & Insights"
        items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        bgImage="/assets/blog-1.png"
      />

      {/* Featured Section */}
      <FeaturedPost />

      {/* Search & Filter Bar - Technical Design */}
      <section className="py-10 border-y border-border/40 bg-white">
        <div className="custom-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-liminal-secondary transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="SEARCH TECHNICAL PAPERS..." 
                className="w-full bg-zinc-50 border border-border/60 rounded-full py-4 pl-16 pr-8 text-xs font-bold uppercase tracking-[0.2em] focus:outline-hidden focus:ring-1 focus:ring-liminal-secondary/50 transition-all focus:bg-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-10 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto scrollbar-hide">
              <div className="hidden lg:flex items-center gap-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-60">
                <SlidersHorizontal size={14} />
                FILTER BY:
              </div>
              <div className="flex items-center gap-8">
                {["ALL ARCHIVE", "DESIGN THEORY", "ARCHITECTURE", "INNOVATION", "TECHNOLOGY"].map((cat) => (
                  <button 
                    key={cat}
                    className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-liminal-secondary transition-colors relative group"
                  >
                    {cat}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-liminal-secondary group-hover:w-full transition-all duration-500" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <BlogGrid />

      {/* Pagination - Minimalist Technical Style */}
      <section className="py-20 bg-zinc-50/50">
        <div className="custom-container">
          <div className="flex flex-col items-center gap-10">
            {/* System Info Decor */}
            <div className="flex items-center gap-6 opacity-30">
               <div className="w-12 h-px bg-foreground" />
               <span className="text-[9px] font-bold uppercase tracking-[0.6em]">Query Completed: 0.042ms</span>
               <div className="w-12 h-px bg-foreground" />
            </div>

            <nav className="flex items-center gap-3">
              {[1, 2, 3, "...", 12].map((num, i) => (
                <button 
                  key={i}
                  className={`w-12 h-12 rounded-full border flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                    num === 1 
                      ? "bg-liminal-secondary border-liminal-secondary text-white shadow-lg shadow-liminal-secondary/20" 
                      : "border-border hover:border-liminal-secondary hover:text-liminal-secondary"
                  }`}
                >
                  {num}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </main>
  );
};

export default BlogPage;
