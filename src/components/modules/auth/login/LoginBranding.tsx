"use client";

import Image from "next/image";
import Logo from "@/components/shared/Logo";

const LoginBranding = () => {
  return (
    <div className="relative hidden h-full w-full flex-col bg-zinc-950 lg:flex overflow-hidden">
      {/* High-Impact Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/auth/showcase-1.png"
          alt="Liminal Architectural Excellence"
          fill
          className="object-cover opacity-30 animate-pulse-slow scale-105"
          priority
        />
        {/* Deep gradient overlay for premium feel */}
        <div className="absolute inset-0 bg-linear-to-tr from-zinc-950 via-zinc-950/60 to-zinc-950/20" />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-between p-16 animate-fade-in">
        <div>
          <Logo isScrolled={false} />
        </div>

        <div className="max-w-xl">
          <div className="space-y-8">
            {/* Minimalist Heading */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-liminal-secondary">
                Studio Portal / 01
              </span>
              <h1 className="text-6xl font-heading font-bold text-white tracking-tighter leading-[0.95]">
                Defining the <br />
                <span className="italic font-light opacity-80">Liminal Space</span>
              </h1>
            </div>
            
            {/* Meaningful, Clean Description */}
            <p className="text-lg text-zinc-400 font-sans leading-relaxed border-l border-zinc-800 pl-8 max-w-sm">
              An exclusive gateway for our clients and partners. 
              Securely access your project data, technical blueprints, 
              and design narratives in one unified space.
            </p>
          </div>
        </div>

        {/* Technical/Professional Detail Footer */}
        <div className="flex items-end justify-between text-zinc-600">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-mono uppercase tracking-[0.3em]">System Status</span>
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-liminal-secondary animate-pulse" />
              <span className="text-[10px] font-mono text-zinc-400">Encrypted / Secure Node</span>
            </div>
          </div>
          
          <div className="text-right">
            <span className="text-[9px] font-mono uppercase tracking-[0.3em] block mb-1">Location</span>
            <span className="text-[10px] font-mono text-zinc-400">23.8103° N, 90.4125° E</span>
          </div>
        </div>
      </div>

      {/* Subtle Grid Pattern for Technical Feel */}
      <div className="absolute inset-0 z-5 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  );
};

export default LoginBranding;
