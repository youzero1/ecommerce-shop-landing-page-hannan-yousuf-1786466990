import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Pro Wireless Earbuds',
    price: '$199.99',
    rating: 4.8,
    reviews: 324,
    image: '🎧',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Ultra HD Smartwatch',
    price: '$349.99',
    rating: 4.7,
    reviews: 256,
    image: '⌚',
    badge: 'New',
  },
  {
    id: 3,
    name: '4K Webcam Pro',
    price: '$249.99',
    rating: 4.9,
    reviews: 189,
    image: '📷',
    badge: null,
  },
  {
    id: 4,
    name: 'Gaming Mouse X1',
    price: '$79.99',
    rating: 4.6,
    reviews: 512,
    image: '🖱️',
    badge: null,
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    price: '$159.99',
    rating: 4.8,
    reviews: 428,
    image: '⌨️',
    badge: 'Popular',
  },
  {
    id: 6,
    name: 'USB-C Hub Master',
    price: '$89.99',
    rating: 4.7,
    reviews: 301,
    image: '🔌',
    badge: null,
  },
];

export function FeaturedProducts() {
  return (
    <section id="featured" className="py-20 bg-slate-900 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Featured Products
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Handpicked selection of our best-rated electronics and gadgets
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-amber-500 transition transform hover:shadow-2xl"
            >
              {/* Product Image Area */}
              <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 h-48 flex items-center justify-center overflow-hidden">
                <span className="text-7xl">{product.image}</span>
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                    {product.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-400">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-400">{product.price}</span>
                  <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 p-2 rounded-lg transition transform hover:scale-110">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
