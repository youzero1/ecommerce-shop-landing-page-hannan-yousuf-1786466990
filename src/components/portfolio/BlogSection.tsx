import { useState, useMemo } from 'react';
import { blogPosts } from '@/lib/portfolioData';

const categories = ['All', 'Web Dev', 'AI', 'Design', 'Career'];

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="blog" className="relative z-10 px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-lime mb-4">Articles</h2>
          <p className="text-3xl md:text-4xl font-bold">Latest Blog Posts</p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-mono text-sm transition ${
                activeCategory === cat
                  ? 'bg-lime text-ink font-bold'
                  : 'border border-white/20 text-white/60 hover:text-white hover:border-white/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-white/10 bg-white/5 p-6 hover:border-lime/50 hover:bg-white/10 transition-all"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-lime">{post.category}</span>
                <span className="text-xs text-white/40">{post.readTime} min read</span>
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-lime transition">{post.title}</h3>
              <p className="text-sm text-white/60 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/40">{new Date(post.date).toLocaleDateString()}</span>
                <span className="text-lime group-hover:translate-x-2 transition">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
