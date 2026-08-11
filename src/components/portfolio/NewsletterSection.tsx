import { useState } from 'react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="newsletter" className="relative z-10 px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg border border-lime/30 bg-gradient-to-br from-lime/10 to-lime/5 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Get weekly insights about web development, AI trends, and career tips delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-lime text-ink font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-lime/50 transition"
            >
              {submitted ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>

          {submitted && (
            <p className="text-sm text-lime mt-4">
              ✓ Thanks! Check your email for confirmation.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
