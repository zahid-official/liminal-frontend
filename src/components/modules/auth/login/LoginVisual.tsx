import Image from "next/image";
import React from "react";

const LoginVisual = () => {
  return (
    <div className="relative hidden h-full w-full flex-col bg-muted p-10 text-white lg:flex">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/auth/login-visual.png"
          alt="Liminal Design Excellence"
          fill
          className="object-cover brightness-[0.7] contrast-[1.1]"
          priority
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="relative z-20 flex items-center text-lg font-medium">
        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
          <span className="text-white font-bold">L</span>
        </div>
        <span className="tracking-[0.2em] uppercase text-sm font-semibold">Liminal Agency</span>
      </div>

      <div className="relative z-20 mt-auto">
        <blockquote className="space-y-4">
          <p className="text-4xl font-heading leading-tight tracking-tight max-w-md">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
          <footer className="text-sm">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-liminal-secondary" />
              <span className="text-zinc-400 font-light tracking-wide italic">Our Philosophy of Excellence</span>
            </div>
          </footer>
        </blockquote>
      </div>

      {/* Glassmorphism Badge */}
      <div className="absolute top-10 right-10 z-20 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:bg-white/10">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-liminal-secondary">Featured Project</span>
          <span className="text-sm font-medium">Penthouse Collection 2024</span>
        </div>
      </div>
    </div>
  );
};

export default LoginVisual;
