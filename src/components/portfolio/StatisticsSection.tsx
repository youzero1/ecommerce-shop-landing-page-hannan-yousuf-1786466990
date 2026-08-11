import { useEffect, useState } from 'react';
import { statistics } from '@/lib/portfolioData';

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count}</span>;
}

export function StatisticsSection() {
  return (
    <section id="statistics" className="relative z-10 px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="font-mono text-xs uppercase tracking-widest text-lime mb-4">Quick Stats</h2>
          <p className="text-3xl md:text-4xl font-bold">By The Numbers</p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="group rounded-lg border border-white/10 bg-white/5 p-6 text-center hover:border-lime/50 hover:bg-white/10 transition-all"
            >
              <div className="text-4xl md:text-5xl font-bold text-lime mb-2">
                <AnimatedCounter target={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
