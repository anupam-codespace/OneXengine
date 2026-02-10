import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'CEO, TechStartup Inc.',
    text: 'OneXmedia transformed our idea into a stunning product. Their attention to detail and commitment to quality is unmatched. The website they built exceeded all expectations.',
    rating: 5,
    avatar: 'RS',
  },
  {
    name: 'Priya Patel',
    role: 'Founder, EcoFashion',
    text: 'Working with the OneXmedia team was a game-changer for our brand. They rebuilt our entire digital presence — from branding to social media. Results were immediate.',
    rating: 5,
    avatar: 'PP',
  },
  {
    name: 'Arjun Mehta',
    role: 'CTO, FinFlow',
    text: 'The mobile app they developed is lightning fast and users love the interface. Their process is transparent and they deliver on time, every time. Highly recommended.',
    rating: 5,
    avatar: 'AM',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Marketing Head, GrowthCo',
    text: 'From the first call to final delivery, OneXmedia was professional, creative, and incredibly responsive. They truly understand how to design for conversion.',
    rating: 5,
    avatar: 'SK',
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      <div className="glow-spot w-[400px] h-[400px] bg-[rgba(255,59,59,0.05)] top-[20%] right-[10%]" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-16"
        >
          <span className="section-badge inline-flex mx-auto">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
            Testimonials
          </span>
          <h2 className="section-title">
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it — hear from the businesses we've
            helped grow.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-12 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8">
              <Quote size={48} className="text-[var(--color-primary)] opacity-20" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[activeIndex].rating }).map((_, j) => (
                <Star key={j} size={18} className="text-[var(--color-primary)] fill-[var(--color-primary)]" />
              ))}
            </div>

            {/* Quote Text */}
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed italic mb-8">
              "{testimonials[activeIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-white font-bold text-sm"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all cursor-pointer bg-transparent"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all cursor-pointer bg-transparent"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer border-none ${
                  i === activeIndex
                    ? 'w-8 bg-[var(--color-primary)]'
                    : 'bg-[var(--color-border)] hover:bg-[var(--color-text-muted)]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
