import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Globe,
  Smartphone,
  Palette,
  Share2,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Custom Website Development',
    desc: 'High-performance, responsive websites built with modern frameworks. From landing pages to complex web applications.',
    features: ['React / Next.js', 'Responsive Design', 'SEO Optimized', 'Lightning Fast'],
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile apps that users love. Beautiful interfaces, smooth performance, and seamless deployment.',
    features: ['React Native', 'iOS & Android', 'Push Notifications', 'Offline Mode'],
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    icon: Palette,
    title: 'Product & UI/UX Design',
    desc: 'Design that doesn\'t just look good — it converts. User-centered design thinking, interactive prototypes, and pixel-perfect handoff.',
    features: ['Figma Design', 'Prototyping', 'Design Systems', 'User Research'],
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
  },
  {
    icon: Share2,
    title: 'Social Media & Brand Presence',
    desc: 'Complete brand identity and social media management. We create content strategies, design visual assets, and build your online presence.',
    features: ['Brand Identity', 'Content Strategy', 'Visual Assets', 'Engagement'],
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
  },
  {
    icon: Layers,
    title: 'SaaS & Digital Product Engineering',
    desc: 'End-to-end SaaS product development from concept to scale. Architecture, development, deployment, and growth.',
    features: ['Full Stack', 'Cloud Architecture', 'API Development', 'Scalability'],
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
];

function ServiceCard({ service, i, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className={`glass-card p-8 h-full flex flex-col hover:border-[var(--color-primary)] transition-colors group relative overflow-hidden cursor-pointer`}
      onClick={onClick}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${service.bg} ${service.color}`}>
        <service.icon size={28} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold mb-3 text-[var(--color-text-primary)] tracking-tight">
        {service.title}
      </h3>
      
      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 flex-grow">
        {service.desc}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {service.features.map((f) => (
          <span
            key={f}
            className="text-xs font-semibold px-3 py-1 rounded-md bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)] uppercase tracking-wide"
          >
            {f}
          </span>
        ))}
      </div>
      
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
        <ArrowUpRight className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)]" size={20} />
      </div>
    </motion.div>
  );
}

export default function Services({ onServiceClick }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-[var(--color-bg-secondary)]" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(var(--color-border) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-16 max-w-3xl mx-auto"
        >
          <span className="section-badge inline-flex mx-auto">
            What We Do
          </span>
          <h2 className="section-title">
            Services We <span className="text-[var(--color-primary)]">Deliver</span>
          </h2>
          <p className="section-subtitle mx-auto">
            End-to-end digital solutions — from pixel-perfect designs to
            production-grade code. Whatever your business needs, we've got
            you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              i={index} 
              onClick={() => onServiceClick(service.title)}
            />
          ))}
          
          {/* Last card as CTA to align grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-8 h-full flex flex-col justify-center items-center text-center bg-[var(--color-bg-primary)] border-dashed border-2 border-[var(--color-border-hover)] hover:border-[var(--color-primary)] group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors">
              <span className="text-2xl font-bold text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors">+</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]">Need Something Else?</h3>
            <p className="text-[var(--color-text-secondary)] mb-6 text-sm">
              We love tackling unique challenges. Let's discuss your custom requirements.
            </p>
            <a href="#contact" className="text-sm font-semibold text-[var(--color-primary)] hover:underline flex items-center gap-1">
              Contact Us <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
