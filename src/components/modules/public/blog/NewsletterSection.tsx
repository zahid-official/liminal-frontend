import { ArrowUpRight, Send, CheckCircle2 } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50 relative overflow-hidden">
      {/* Background Decorative Element - Technical Stamp */}
      <div className="absolute -top-10 -right-10 w-64 h-64 border border-zinc-200 rounded-full opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-40 h-px bg-linear-to-r from-liminal-secondary/20 to-transparent" />

      <div className="custom-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-liminal-secondary" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-liminal-secondary">Liminal Journal</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold font-heading leading-tight">
                  Design intelligence, delivered to your <span className="text-liminal-secondary font-serif italic font-normal">inbox</span>.
                </h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  Join our community of architects, designers, and innovators. Get technical deep-dives into our latest projects and architectural theories once a month.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Early access to case studies",
                  "Technical engineering insights",
                  "Sustainability material reports"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                    <CheckCircle2 size={16} className="text-liminal-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form Area */}
            <div className="relative p-10 lg:p-14 bg-white rounded-[3rem] shadow-2xl shadow-zinc-200/50 border border-white">
              {/* Technical Corners */}
              <div className="absolute top-6 left-6 w-4 h-4 border-l-2 border-t-2 border-liminal-secondary/20" />
              <div className="absolute bottom-6 right-6 w-4 h-4 border-r-2 border-b-2 border-liminal-secondary/20" />

              <form className="space-y-8">
                <div className="space-y-1">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                  <div className="relative flex items-center group">
                    <input 
                      type="email" 
                      placeholder="arch@liminal.com" 
                      className="w-full bg-transparent border-b border-zinc-200 py-4 px-2 focus:outline-none focus:border-liminal-secondary transition-colors font-medium text-lg placeholder:text-zinc-300"
                    />
                    <Send size={20} className="absolute right-2 text-zinc-300 group-focus-within:text-liminal-secondary transition-colors" />
                  </div>
                </div>

                <button className="w-full group flex items-center justify-between bg-liminal-secondary text-white px-10 py-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-xl shadow-liminal-secondary/20 hover:scale-[1.02] transition-all overflow-hidden relative">
                  <span className="relative z-10 flex items-center gap-3">
                    Submit Registration <ArrowUpRight size={18} />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                </button>

                <p className="text-[10px] text-zinc-400 text-center uppercase tracking-widest font-bold">
                  * By subscribing, you agree to our privacy policy.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
