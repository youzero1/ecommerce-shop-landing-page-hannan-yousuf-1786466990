import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const links = ['about', 'work', 'experience', 'contact'];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'border-b border-white/10 bg-ink/85 backdrop-blur-xl' : ''}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8" aria-label="Main navigation">
        <a href="#top" className="font-mono text-lg font-bold tracking-tighter text-white">HANNAN<span className="text-lime">.</span>DEV</a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link, index) => <a key={link} href={`#${link}`} className="group font-mono text-xs uppercase tracking-[.18em] text-white/60 transition hover:text-white"><span className="mr-2 text-lime">0{index + 1}</span>{link}</a>)}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="hidden rounded-full border border-lime/50 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-lime transition hover:bg-lime hover:text-ink md:block">Let's talk ↗</a>
        </div>
        <button type="button" onClick={() => setOpen(!open)} className="rounded-full border border-white/15 p-3 md:hidden" aria-label="Toggle menu" aria-expanded={open}><span className="block h-px w-5 bg-white" /><span className="mt-1.5 block h-px w-5 bg-white" /></button>
      </nav>
      {open && <div className="border-t border-white/10 bg-ink px-5 py-5 md:hidden">{links.map(link => <a onClick={() => setOpen(false)} key={link} href={`#${link}`} className="block border-b border-white/10 py-4 text-2xl capitalize">{link}</a>)}</div>}
    </header>
  );
}
