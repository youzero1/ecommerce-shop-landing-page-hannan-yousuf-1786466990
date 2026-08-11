import { useState } from 'react';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    text: 'Hannan delivered an exceptional e-commerce platform that increased our conversions by 45%. Their attention to detail and performance optimization was outstanding.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Mike Chen',
    role: 'CEO',
    company: 'StartupXYZ',
    text: 'Working with Hannan was transformative for our team. They not only built our product but also mentored our developers. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Design Lead',
    company: 'CreativeAgency',
    text: 'Hannan perfectly translated our design vision into a functional, performant application. Their expertise in animations and UX was impressive.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="relative z-10 px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="font-mono text-xs uppercase tracking-widest text-lime mb-4">Social Proof</h2>
          <p className="text-3xl md:text-4xl font-bold">What Clients Say</p>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-white/60">{testimonial.role} @ {testimonial.company}</p>
            </div>
          </div>

          <blockquote className="text-lg text-white/80 mb-8 italic border-l-2 border-lime pl-4">
            "{testimonial.text}"
          </blockquote>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition ${
                    index === current ? 'w-8 bg-lime' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-white/20 text-white/60 hover:border-lime hover:text-lime transition"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full border border-white/20 text-white/60 hover:border-lime hover:text-lime transition"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
