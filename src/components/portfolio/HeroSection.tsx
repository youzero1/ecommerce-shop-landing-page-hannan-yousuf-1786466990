export function HeroSection() {
  return (
    <section className="grid-bg relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_82%_18%,rgba(139,92,246,.16),transparent_30%),radial-gradient(circle_at_15%_75%,rgba(255,79,216,.11),transparent_28%)] px-5 pb-16 pt-32 md:px-8">
      <div className="absolute left-[12%] top-28 h-60 w-60 rounded-full bg-lime/20 blur-[100px]" />
      <div className="mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[1fr_330px]">
        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[.2em] text-white/60"><span className="h-2 w-2 animate-pulse rounded-full bg-lime shadow-[0_0_18px_#ff4fd8]" />Available for select projects · 2025</div>
          <h1 className="font-display text-[clamp(4.2rem,12vw,10.5rem)] font-bold uppercase leading-[.78] tracking-[-.075em]">
            Creative<br/><span className="text-lime">Developer</span>
          </h1>
          <div className="mt-10 flex flex-col gap-7 border-l border-white/20 pl-5 md:ml-[40%] md:max-w-xl">
            <p className="text-lg leading-relaxed text-white/65 md:text-xl">I design and build memorable digital experiences where sharp engineering meets expressive motion.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-lime px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-ink transition hover:scale-105">Explore my work ↓</a>
              <a href="#contact" className="rounded-full border border-white/20 px-7 py-3.5 font-mono text-xs uppercase tracking-wider transition hover:border-white">Start a project ↗</a>
            </div>
          </div>
        </div>
        <aside className="float relative hidden rounded-[2rem] border border-white/10 bg-panel/80 p-5 backdrop-blur lg:block">
          <div className="aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-lime via-[#c026d3] to-[#7c3aed] p-px shadow-[0_0_70px_rgba(168,85,247,.22)]">
            <div className="relative h-full rounded-[1.4rem] bg-[#12091b] p-7">
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">Current focus</div>
              <div className="mt-20 text-5xl font-bold tracking-tighter">MOTION<br/>WITH<br/><span className="text-lime">MEANING.</span></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between border-t border-white/15 pt-4 font-mono text-[10px] text-white/45"><span>React / TypeScript</span><span>01 — 25</span></div>
            </div>
          </div>
        </aside>
      </div>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[9px] uppercase tracking-[.3em] text-white/35"><span>Scroll</span><span className="pulse-line h-8 w-px origin-top bg-lime" /></div>
    </section>
  );
}
