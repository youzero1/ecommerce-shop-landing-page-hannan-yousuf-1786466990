import { useState, useMemo } from 'react';
import { projects } from '@/lib/portfolioData';
import { SearchBar } from './SearchBar';

export function ProjectsSection() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => techs.add(t)));
    return Array.from(techs).sort();
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesTech = !selectedTech || project.tech.includes(selectedTech);
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesTech && matchesSearch;
    });
  }, [selectedTech, searchQuery]);

  return (
    <section id="work" className="relative z-10 px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-lime mb-4">Portfolio</h2>
          <p className="text-3xl md:text-4xl font-bold">Featured Projects</p>
        </div>

        <SearchBar onSearch={setSearchQuery} placeholder="Search projects by name, tech, or description..." />

        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTech(null)}
            className={`px-4 py-2 rounded-full font-mono text-sm transition ${
              selectedTech === null
                ? 'bg-lime text-ink font-bold'
                : 'border border-white/20 text-white/60 hover:text-white hover:border-white/40'
            }`}
          >
            All
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full font-mono text-sm transition ${
                selectedTech === tech
                  ? 'bg-lime text-ink font-bold'
                  : 'border border-white/20 text-white/60 hover:text-white hover:border-white/40'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg border border-white/10 bg-white/5 overflow-hidden hover:border-lime/50 hover:bg-white/10 transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-lime/20 to-purple/20 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-lime transition">{project.title}</h3>
                <p className="text-sm text-white/60 mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-white/10 text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm px-3 py-2 rounded-full border border-lime/50 text-lime hover:bg-lime hover:text-ink transition"
                  >
                    View Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm px-3 py-2 rounded-full border border-white/20 text-white/60 hover:border-white/40 hover:text-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60">No projects match your search. Try a different query!</p>
          </div>
        )}
      </div>
    </section>
  );
}
