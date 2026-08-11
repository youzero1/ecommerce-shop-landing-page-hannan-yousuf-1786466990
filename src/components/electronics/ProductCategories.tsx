import { Smartphone, Headphones, Watch, Cpu, Monitor, Package } from 'lucide-react';

const categories = [
  { id: 1, name: 'Smartphones', icon: Smartphone, color: 'bg-blue-500' },
  { id: 2, name: 'Laptops', icon: Monitor, color: 'bg-purple-500' },
  { id: 3, name: 'Audio', icon: Headphones, color: 'bg-pink-500' },
  { id: 4, name: 'Wearables', icon: Watch, color: 'bg-cyan-500' },
  { id: 5, name: 'Components', icon: Cpu, color: 'bg-orange-500' },
  { id: 6, name: 'Accessories', icon: Package, color: 'bg-emerald-500' },
];

export function ProductCategories() {
  return (
    <section id="categories" className="py-20 bg-slate-950 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Shop by Category
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Browse our extensive collection of premium electronics organized by product type
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ id, name, icon: Icon, color }) => (
            <div
              key={id}
              className="group cursor-pointer p-8 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition transform hover:scale-105 hover:shadow-lg"
            >
              <div className={`${color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                <Icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
              <p className="text-slate-400 text-sm">Explore our {name.toLowerCase()} collection</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
