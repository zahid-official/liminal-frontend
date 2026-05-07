import Image from "next/image";

// AboutStory Component — Editorial Origin Narrative
const AboutStory = () => {
  return (
    <section
      id="about-story"
      aria-labelledby="story-heading"
      className="relative overflow-hidden"
    >
      {/* Full-Bleed Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/about-us/story-hero.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/[0.92]" />
      </div>

      {/* Content — Narrow editorial column */}
      <div className="py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 relative">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-5 mb-14">
            <div className="w-16 h-px bg-liminal-secondary/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-liminal-secondary">
              Our Story
            </span>
            <div className="w-16 h-px bg-liminal-secondary/40" />
          </div>

          {/* Headline */}
          <h2
            id="story-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight font-heading text-center mb-12"
          >
            Born from a Belief That
            <br />
            <span className="italic font-serif font-light text-liminal-secondary">
              Spaces Shape Souls
            </span>
          </h2>

          {/* Editorial Body — Magazine style */}
          <div className="space-y-6 text-foreground/80 leading-[1.85] font-light text-[16.5px] sm:text-[17px]">
            {/* Drop Cap Paragraph */}
            <p className="first-letter:text-6xl first-letter:font-heading first-letter:font-bold first-letter:text-liminal-secondary first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.8]">
              Liminal was born not from a business plan, but from a deeply held
              conviction: that the spaces we inhabit are not passive backdrops to
              our lives — they are active participants in shaping how we think,
              feel, and connect. In 2024, our founding team came together in
              Dhaka with a shared vision — to create an interior design studio
              that would challenge the conventional and celebrate the
              extraordinary.
            </p>

            <p>
              The name{" "}
              <em className="font-serif text-foreground not-italic font-medium">
                Liminal
              </em>{" "}
              itself speaks to our ethos. Derived from the Latin{" "}
              <em className="font-serif">limen</em> — meaning threshold — it
              represents the transformative space between what was and what could
              be. Every project we undertake exists in this threshold: between
              vision and reality, between art and function, between the architect
              and the inhabitant.
            </p>

            {/* Pull Quote */}
            <blockquote className="relative my-10 py-8 px-0 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-7xl text-liminal-secondary/15 font-serif leading-none select-none pointer-events-none">
                &ldquo;
              </div>
              <p className="text-xl sm:text-2xl font-serif italic text-foreground/90 leading-relaxed max-w-xl mx-auto pt-4">
                We saw an industry focused on surfaces. We chose to design for
                the soul beneath.
              </p>
              <footer className="mt-5 flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-liminal-secondary/40" />
                <cite className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground not-italic">
                  Founding Principle
                </cite>
                <div className="w-8 h-px bg-liminal-secondary/40" />
              </footer>
            </blockquote>

            <p>
              From our earliest residential projects to our most ambitious
              commercial environments, a singular thread has connected every
              space we have touched: the relentless pursuit of emotional truth in
              design. We don&apos;t chase trends. We study how light falls
              across a room at different hours of the day. We consider how a
              material ages, how a corridor guides movement, how a ceiling
              height influences conversation.
            </p>

            <p>
              Today, Liminal stands as a testament to the idea that interior
              design, at its finest, is not about decoration — it is about
              creating the conditions for life to be lived more deeply, more
              intentionally, and more beautifully.
            </p>
          </div>

          {/* Bottom Ornament */}
          <div className="flex items-center justify-center mt-14">
            <div className="w-12 h-px bg-border" />
            <div className="w-2 h-2 rotate-45 border border-liminal-secondary/40 mx-4" />
            <div className="w-12 h-px bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
