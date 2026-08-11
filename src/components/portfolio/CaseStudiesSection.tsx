import { caseStudies } from '@/lib/portfolioData';

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative z-10 px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-lime mb-4">Deep Dives</h2>
          <p className="text-3xl md:text-4xl font-bold">Featured Case Studies</p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`rounded-lg border border-white/10 bg-white/5 p-8 hover:border-lime/50 hover:bg-white/10 transition-all ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{study.title}</h3>
                <p className="text-white/60 mb-6">{study.description}</p>

                <div className="grid gap-6 md:grid-cols-2 mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-lime mb-2">Challenge</p>
                    <p className="text-sm text-white/80">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-lime mb-2">Solution</p>
                    <p className="text-sm text-white/80">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest text-lime mb-2">Result</p>
                  <p className="text-lg font-bold text-lime">{study.result}</p>
                </div>

                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest text-white/60 mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded bg-white/10 text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 rounded-full border border-lime/50 text-lime hover:bg-lime hover:text-ink transition"
                  >
                    View Live ↗
                  </a>
                  <a
                    href={study.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 rounded-full border border-white/20 text-white/60 hover:border-white/40 hover:text-white transition"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
