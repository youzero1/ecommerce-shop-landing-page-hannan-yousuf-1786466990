import { Link } from '@tanstack/react-router';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/electronics" className="text-2xl font-bold text-white hover:text-amber-400 transition">
          ElectroHub
        </Link>

        <nav className="hidden md:flex gap-8 items-center text-sm text-slate-300">
          <a href="#categories" className="hover:text-white transition">
            Categories
          </a>
          <a href="#featured" className="hover:text-white transition">
            Featured
          </a>
          <a href="#reviews" className="hover:text-white transition">
            Reviews
          </a>
          <a href="#faq" className="hover:text-white transition">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-slate-400 hover:text-white transition">
            <Search size={20} />
          </button>
          <button className="relative text-slate-400 hover:text-white transition">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-amber-500 text-slate-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-white transition"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 flex flex-col gap-4 text-sm text-slate-300">
          <a href="#categories" className="hover:text-white transition">
            Categories
          </a>
          <a href="#featured" className="hover:text-white transition">
            Featured
          </a>
          <a href="#reviews" className="hover:text-white transition">
            Reviews
          </a>
          <a href="#faq" className="hover:text-white transition">
            FAQ
          </a>
        </nav>
      )}
    </header>
  );
}
