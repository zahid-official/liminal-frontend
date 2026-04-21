import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  LayoutGrid,
  List,
  Search,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Blog Categories
const blogCategories = [
  { name: "All Insights", count: 24, slug: "all" },
  { name: "Architecture", count: 8, slug: "architecture" },
  { name: "Interior Design", count: 6, slug: "interior" },
  { name: "Sustainability", count: 4, slug: "sustainability" },
  { name: "Smart Living", count: 3, slug: "smart-living" },
  { name: "Materials", count: 3, slug: "materials" },
];

// Blog Data
const blogData = [
  {
    id: 1,
    title: "Structural Integrity: The Intersection of Form and Physics",
    summary:
      "Exploring how modern architectural techniques allow for dramatic cantilevered designs without compromising structural stability. A deep dive into the engineering behind Liminal's latest projects.",
    tag: "Architecture",
    date: "April 15, 2026",
    author: "Zahid Hasan",
    image: "/assets/about-1.webp",
    readTime: "8 min read",
    ref: "LBD-JRNL-001",
  },
  {
    id: 2,
    title: "Biophilic Design: Bringing the Outdoors In",
    summary:
      "How to integrate natural elements into commercial spaces to improve mental well-being and productivity. We look at the latest trends in living walls and natural light optimization.",
    tag: "Interior",
    date: "April 12, 2026",
    author: "Sara Ahmed",
    image: "/assets/about-2.webp",
    readTime: "5 min read",
    ref: "LBD-JRNL-002",
  },
  {
    id: 3,
    title: "The Future of Concrete: Self-Healing and Carbon Neutral",
    summary:
      "Materials science is transforming the way we build. Discover how carbon-negative concrete is becoming a reality in contemporary high-end developments.",
    tag: "Materials",
    date: "April 08, 2026",
    author: "Rayhan Kabir",
    image: "/assets/project-1.png",
    readTime: "12 min read",
    ref: "LBD-JRNL-003",
  },
  {
    id: 4,
    title: "Minimalism vs. Maximalism: The Architectural Debate",
    summary:
      "Is the 'less is more' philosophy still relevant in 2026? We analyze the shift towards expressive minimalism in luxury residential architecture.",
    tag: "Design Theory",
    date: "April 05, 2026",
    author: "Zahid Hasan",
    image: "/assets/about-1.webp",
    readTime: "6 min read",
    ref: "LBD-JRNL-004",
  },
  {
    id: 5,
    title: "Lighting as a Sculptural Element in Modern Homes",
    summary:
      "Beyond illumination, lighting serves as a tool for defining space. Learn how to use hidden LED troughs and focal pendants to create drama.",
    tag: "Interior",
    date: "April 01, 2026",
    author: "Sara Ahmed",
    image: "/assets/about-2.webp",
    readTime: "7 min read",
    ref: "LBD-JRNL-005",
  },
  {
    id: 6,
    title: "Renewable Energy Integration for Luxury Villas",
    summary:
      "Solar glass and geothermal heating are no longer niche. A technical guide to making high-end homes energy independent.",
    tag: "Sustainability",
    date: "March 28, 2026",
    author: "Rayhan Kabir",
    image: "/assets/project-1.png",
    readTime: "10 min read",
    ref: "LBD-JRNL-006",
  },
];

interface BlogGridProps {
  activeCategory?: string;
  activePage?: string;
}

// Blog Grid Component
const BlogGrid = ({
  activeCategory = "all",
  activePage = "1",
}: BlogGridProps) => {
  // Map slugs back to display names for filtering
  const categoryMap: Record<string, string> = {
    all: "All Insights",
    architecture: "Architecture",
    interior: "Interior",
    sustainability: "Sustainability",
    "smart-living": "Smart Living",
    materials: "Materials",
  };

  const displayName = categoryMap[activeCategory] || "All Insights";
  const currentPage = Number(activePage) || 1;
  const postsPerPage = 4;

  const filteredPosts =
    activeCategory === "all"
      ? blogData
      : blogData.filter(
          (post) =>
            post.tag.toLowerCase().replace(/\s+/g, "-") === activeCategory,
        );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-clip bg-background">
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Sidebar / Filters */}
          <aside className="lg:col-span-3 space-y-12 lg:sticky lg:top-32 self-start animate-in fade-in slide-in-from-left-8 duration-1200 ease-out fill-mode-both">
            <div className="space-y-8">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full bg-zinc-50 border border-border/40 rounded-full py-4 px-6 pl-14 text-sm focus:outline-none focus:ring-1 focus:ring-liminal-secondary transition-all"
                />
                <Search
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-liminal-secondary transition-colors"
                  size={18}
                />
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-liminal-secondary" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-liminal-secondary">
                    Categories
                  </span>
                </div>
                <ul className="space-y-2">
                  {blogCategories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/blog?category=${cat.slug}&page=1`}
                        scroll={false}
                        className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-sm transition-all ${
                          activeCategory === cat.slug
                            ? "bg-liminal-secondary text-white shadow-xl shadow-liminal-secondary/20"
                            : "hover:bg-zinc-50 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="font-medium">{cat.name}</span>
                        <span
                          className={`text-[10px] font-bold ${activeCategory === cat.slug ? "text-white/60" : "text-muted-foreground/40"}`}
                        >
                          {cat.count.toString().padStart(2, "0")}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Teaser in Sidebar */}
              <div className="p-8 bg-zinc-50/80 border border-border/40 rounded-3xl relative overflow-hidden group">
                <div className="relative z-10 space-y-4">
                  <h4 className="text-xl font-bold font-heading leading-tight">
                    Stay informed with our technical newsletter.
                  </h4>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-liminal-secondary flex items-center gap-2 group/btn">
                    Subscribe Now{" "}
                    <ArrowUpRight
                      size={14}
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                  </button>
                </div>
                {/* Decorative technical ring */}
                <div className="absolute -bottom-10 -right-10 w-28 h-28 border border-dashed border-liminal-secondary/40 rounded-full group-hover:rotate-90 transition-transform duration-1000" />
              </div>
            </div>
          </aside>

          {/* Blog Content */}
          <div className="lg:col-span-9 space-y-16 animate-in fade-in slide-in-from-right-8 duration-1200 delay-300 ease-out fill-mode-both">
            {/* Controls / View Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-border/40">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-heading tracking-tight">
                  Recent Publications
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-60">
                  Ref: {filteredPosts.length} Articles // Category:{" "}
                  {displayName}
                </p>
              </div>
              <div className="flex items-center gap-4 bg-zinc-50 p-1.5 rounded-full border border-border/20">
                <button className="p-2 bg-white rounded-full shadow-sm text-liminal-secondary">
                  <LayoutGrid size={18} />
                </button>
                <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                  <List size={18} />
                </button>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 lg:gap-x-12 lg:gap-y-20">
              {currentPosts.map((post) => (
                <article key={post.id} className="group relative">
                  <Link href={`/blog/${post.id}`} className="block space-y-10">
                    {/* Image Container with Architectural Decoration */}
                    <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-zinc-100 border border-border/40 transition-all duration-700 group-hover:shadow-3xl group-hover:shadow-liminal-secondary/10">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-all duration-1000 group-hover:scale-110"
                      />

                      {/* Floating Status Badge */}
                      <div className="absolute top-8 left-8 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[8px] font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                        <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                        Status: Investigation
                      </div>

                      {/* Top-right Badge */}
                      <div className="absolute top-8 right-8 z-10 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md text-liminal-secondary text-[9px] font-extrabold tracking-widest uppercase border border-white/20 shadow-xl">
                        {post.tag}
                      </div>

                      {/* Hover Overlay Architectural Elements */}
                      <div className="absolute inset-0 border-20 border-white/0 group-hover:border-white/5 transition-all duration-1000 pointer-events-none" />

                      {/* Technical Corners */}
                      <div className="absolute top-10 left-10 w-6 h-6 border-l border-t border-white/0 group-hover:border-white/40 transition-all duration-700 pointer-events-none" />
                      <div className="absolute bottom-10 right-10 w-6 h-6 border-r border-b border-white/0 group-hover:border-white/40 transition-all duration-700 pointer-events-none" />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6 px-4 relative">
                      {/* Technical Ref Line */}
                      <div className="absolute -left-4 top-0 bottom-0 w-px bg-linear-to-b from-liminal-secondary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-6 text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground opacity-60">
                          <div className="flex items-center gap-2 group-hover:text-liminal-secondary transition-colors">
                            <User
                              size={12}
                              className="text-liminal-secondary"
                            />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock
                              size={12}
                              className="text-liminal-secondary"
                            />
                            {post.readTime}
                          </div>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold font-heading leading-tight group-hover:text-liminal-secondary transition-colors duration-500">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground text-[15px] sm:text-base leading-relaxed line-clamp-3 font-light">
                          {post.summary}
                        </p>
                      </div>

                      <div className="pt-6 flex items-center justify-between border-t border-dashed border-border/40">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-liminal-secondary group/ink">
                          Read Full Investigation
                          <ArrowUpRight
                            size={14}
                            className="group-hover/ink:translate-x-0.5 group-hover/ink:-translate-y-0.5 transition-transform"
                          />
                        </div>
                        <span className="text-[9px] font-bold text-zinc-300 tracking-widest">
                          {post.ref}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination - Centered on page */}
        {totalPages > 1 && (
          <div className="pt-20 flex items-center justify-center gap-4">
            <Link
              href={`/blog?category=${activeCategory}&page=${Math.max(1, currentPage - 1)}`}
              className={`w-12 h-12 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:border-liminal-secondary hover:text-liminal-secondary transition-all ${
                currentPage === 1 ? "opacity-30 pointer-events-none" : ""
              }`}
            >
              <ChevronLeft size={20} />
            </Link>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Link
                    key={page}
                    href={`/blog?category=${activeCategory}&page=${page}`}
                    className={`w-12 h-12 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                      currentPage === page
                        ? "bg-liminal-secondary text-white shadow-lg shadow-liminal-secondary/20"
                        : "border border-border/40 text-muted-foreground hover:border-liminal-secondary hover:text-liminal-secondary"
                    }`}
                  >
                    {page.toString().padStart(2, "0")}
                  </Link>
                ),
              )}
            </div>

            <Link
              href={`/blog?category=${activeCategory}&page=${Math.min(totalPages, currentPage + 1)}`}
              className={`w-12 h-12 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:border-liminal-secondary hover:text-liminal-secondary transition-all ${
                currentPage === totalPages
                  ? "opacity-30 pointer-events-none"
                  : ""
              }`}
            >
              <ChevronRight size={20} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
