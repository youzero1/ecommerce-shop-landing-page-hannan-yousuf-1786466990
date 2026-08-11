const skills = ['React', 'TypeScript', 'Next.js', 'WebGL', 'Motion', 'Node.js', 'Design Systems', 'Creative Direction'];

export function SkillsSection() {
  return (
    <section className="overflow-hidden py-24 md:py-32">
      <div className="mb-20 flex w-max whitespace-nowrap border-y border-white/10 py-5">
        <div className="marquee flex shrink-0 items-center gap-8 pr-8 font-display text-5xl font-bold uppercase text-white/10 md:text-8xl">Code with character <span className="text-lime">✦</span> Design with purpose <span className="text-lime">✦</span> Code with character <span className="text-lime">✦</span> Design with purpose <span className="text-lime">✦</span></div>
      </div>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div><span className="font-mono text-xs uppercase tracking-[.2em] text-lime">Capabilities</span><h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">Tools are temporary.<br/>Craft is forever.</h2></div>
          <div className="grid sm:grid-cols-2">{skills.map((skill, i) => <div key={skill} className="group flex items-center justify-between border-b border-white/10 py-5 text-lg transition hover:border-lime hover:pl-3 hover:text-lime"><span>{skill}</span><span className="font-mono text-xs text-white/25">0{i + 1}</span></div>)}</div>
        </div>
      </div>
    </section>
  );
}
