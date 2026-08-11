import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ElectroHub</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted source for premium electronics and cutting-edge gadgets since 2020.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Smartphones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Laptops
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Audio & Wearables
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-slate-400 text-sm mb-6 md:mb-0">
            © 2024 ElectroHub. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-slate-900 hover:bg-amber-500 text-slate-400 hover:text-slate-900 p-3 rounded-full transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="bg-slate-900 hover:bg-amber-500 text-slate-400 hover:text-slate-900 p-3 rounded-full transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="bg-slate-900 hover:bg-amber-500 text-slate-400 hover:text-slate-900 p-3 rounded-full transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="bg-slate-900 hover:bg-amber-500 text-slate-400 hover:text-slate-900 p-3 rounded-full transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="bg-slate-900 hover:bg-amber-500 text-slate-400 hover:text-slate-900 p-3 rounded-full transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
