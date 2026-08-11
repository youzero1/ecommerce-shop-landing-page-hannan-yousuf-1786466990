import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy on all electronics. Items must be in original condition with all packaging and accessories included. Contact our support team to initiate a return.',
  },
  {
    id: 2,
    question: 'Do you offer warranty on products?',
    answer: 'Yes! All our products come with manufacturer warranties ranging from 1-3 years depending on the item. Extended warranty options are also available at checkout.',
  },
  {
    id: 3,
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 5-7 business days. We also offer expedited shipping (2-3 days) and overnight delivery options for most products.',
  },
  {
    id: 4,
    question: 'Are your products authentic?',
    answer: 'Absolutely! We source directly from authorized distributors and manufacturers. All products are 100% authentic with full manufacturer support.',
  },
  {
    id: 5,
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to over 50 countries worldwide. International shipping times vary, but we provide tracking for all orders.',
  },
  {
    id: 6,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, Apple Pay, Google Pay, and various digital wallets. All transactions are encrypted and secure.',
  },
];

export function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-slate-900 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Find answers to common questions about our products and services
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-slate-700 rounded-lg overflow-hidden hover:border-slate-600 transition"
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-slate-800 hover:bg-slate-800/80 transition text-left"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-amber-400 transition transform ${
                    expandedId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === faq.id && (
                <div className="px-6 py-4 bg-slate-900 border-t border-slate-700 text-slate-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
