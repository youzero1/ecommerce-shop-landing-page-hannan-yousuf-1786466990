const roles = [
  ['2022 — NOW', 'Independent Creative Developer', 'Global / Remote'],
  ['2020 — 2022', 'Senior Frontend Engineer', 'Studio North'],
  ['2018 — 2020', 'Interactive Developer', 'Form & Function'],
];

export function ExperienceSection() {
  return (
    <section id="experience" className="px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]"><div><div className="font-mono text-xs uppercase tracking-[.2em] text-lime">03 — Experience</div><h2 className="mt-5 text-5xl font-bold tracking-[-.05em] md:text-7xl">The road<br/>so far.</h2></div>
          <div>{roles.map(([year, role, company], i) => <div key={role} className="group grid gap-3 border-t border-white/15 py-8 transition hover:border-lime sm:grid-cols-[120px_1fr_auto]"><span className="font-mono text-[10px] tracking-wider text-white/35">{year}</span><div><h3 className="text-xl font-semibold transition group-hover:text-lime md:text-2xl">{role}</h3><p className="mt-2 text-sm text-white/40">Product experiences, creative systems, and high-performance interfaces.</p></div><span className="font-mono text-xs text-white/50">{company} <span className="ml-3 text-lime">0{i + 1}</span></span></div>)}</div>
        </div>
      </div>
    </section>
  );
}
