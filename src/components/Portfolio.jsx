import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'TechVault',
    category: 'SaaS Platform',
    desc: 'Real-time analytics dashboard with predictive insights.',
    color: 'bg-blue-600',
    tags: ['React', 'D3.js', 'Node.js'],
  },
  {
    title: 'Lumina',
    category: 'E-commerce',
    desc: 'Modern lifestyle brand store with AR product previews.',
    color: 'bg-purple-600',
    tags: ['Next.js', 'Shopify', 'WebGL'],
  },
  {
    title: 'FlowState',
    category: 'Productivity App',
    desc: 'Task management for creative teams with focus mode.',
    color: 'bg-amber-500',
    tags: ['React Native', 'Firebase'],
  },
  {
    title: 'NeonSpace',
    category: 'Web3 / NFT',
    desc: 'NFT marketplace with zero-gas minting and social features.',
    color: 'bg-pink-500',
    tags: ['Solana', 'Rust', 'Next.js'],
  },
];

const tags = ['All', 'Web Design', 'Development', 'Mobile Apps', 'Branding'];

export default function Portfolio({ onViewCaseStudies }) {
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Simplified filter for now as projects don't exactly match tags in this demo data
  const filteredProjects = projects; 

  return (
    <section id="portfolio" className="section-padding relative bg-[var(--color-bg-primary)]" ref={sectionRef}>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto"
        >
          <span className="section-badge inline-flex mx-auto">Selected Work</span>
          <h2 className="section-title mb-6">
            Featured <span className="text-[var(--color-primary)]">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mb-10">
            A curated selection of our favorite builds. We treat every project like it's our own.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === tag
                    ? 'bg-[var(--color-text-primary)] text-white shadow-md'
                    : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] border border-transparent hover:border-[var(--color-border)]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass-card overflow-hidden hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 group-hover:-translate-y-2">
                {/* Project Thumbnail (Abstract) */}
                <div className={`h-64 ${project.color} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  <div className="w-32 h-32 bg-white/10 rounded-full blur-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
                  
                  <h3 className="relative z-10 text-white text-3xl font-bold tracking-tight opacity-90 group-hover:scale-105 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-bold text-[var(--color-text-primary)] uppercase tracking-wider mb-1 block">
                        {project.category}
                      </span>
                      <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed max-w-sm">
                        {project.desc}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-text-primary)] group-hover:text-white transition-all duration-300 shrink-0">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border)]">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium text-[var(--color-text-muted)] bg-[var(--color-bg-tertiary)] px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button onClick={onViewCaseStudies} className="btn-primary inline-flex items-center gap-2">
            View All Case Studies <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
