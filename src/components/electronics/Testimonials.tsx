import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Tech Enthusiast',
    avatar: '👩‍💻',
    rating: 5,
    text: 'ElectroHub has the best selection of premium electronics. The quality is exceptional and the customer service is outstanding!',
  },
  {
    id: 2,
    name: 'James Wilson',
    role: 'Software Developer',
    avatar: '👨‍💻',
    rating: 5,
    text: 'As a developer, I need reliable equipment. ElectroHub consistently delivers top-tier products with competitive pricing.',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Content Creator',
    avatar: '🎬',
    rating: 5,
    text: 'The audio and video equipment from ElectroHub transformed my production setup. Highly recommended!',
  },
  {
    id: 4,
    name: 'Michael Park',
    role: 'Business Professional',
    avatar: '👔',
    rating: 4,
    text: 'Great selection and fast shipping. The accessories collection is particularly impressive.',
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-slate-950 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Customer Reviews
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Hear what our satisfied customers have to say about their experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                  <p className="text-slate-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
