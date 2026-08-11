const stats = [['07+', 'Years crafting'], ['42', 'Projects shipped'], ['09', 'Design awards']];

export function AboutSection() {
  return (
    <section id="about" className="border-y border-fuchsia-300/10 bg-[linear-gradient(145deg,#110819_0%,#0b0612_58%,#16091f_100%)] px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-4 font-mono text-xs uppercase tracking-[.22em] text-lime"><span>01</span><span className="h-px w-16 bg-lime/50" />About me</div>
        <div className="grid gap-16 lg:grid-cols-2">
          <h2 className="font-display text-5xl font-bold leading-[.98] tracking-[-.05em] md:text-7xl">Building the web<br/>with <span className="text-white/35">curiosity</span><br/>& precision.</h2>
          <div>
            <p className="text-2xl leading-snug text-white/85">I'm Hannan — an independent developer who turns ambitious ideas into fast, tactile digital products.</p>
            <p className="mt-7 leading-relaxed text-white/50">My work lives at the intersection of design and technology. I collaborate with forward-thinking teams to create interfaces that feel as good as they look — considered in every interaction, accessible to everyone, and built to last.</p>
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">{stats.map(([value, label]) => <div key={label}><div className="text-3xl font-bold text-lime md:text-5xl">{value}</div><div className="mt-2 font-mono text-[9px] uppercase tracking-widest text-white/35">{label}</div></div>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
