import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Palette, Smartphone, Rocket, Code2 } from 'lucide-react';

export default function Hero() {
  const [tagline, setTagline] = useState('');
  
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setTagline('Designing fresh starts.');
    else if (hour >= 12 && hour < 17) setTagline('Building experiences that flow.');
    else if (hour >= 17 && hour < 21) setTagline('Crafting ideas into reality.');
    else setTagline('Creating quietly brilliant design.');
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-28 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-[var(--color-bg-primary)]">
      {/* Background Grid - Airtable Style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Floating Elements (Airtable-like Motion) */}
      
      {/* 1. Top Left: UI/UX Design */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[15%] left-[5%] hidden xl:block"
      >
        <div className="glass-card p-4 flex items-center gap-3 shadow-[var(--shadow-card-hover)] rotate-[-3deg]">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
            <Palette size={20} />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Creative</div>
            <div className="text-sm font-semibold text-[var(--color-text-primary)]">UI/UX Design</div>
          </div>
        </div>
      </motion.div>

      {/* 2. Top Right: Mobile & SaaS */}
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-[20%] right-[8%] hidden xl:block"
      >
        <div className="glass-card p-4 flex items-center gap-3 shadow-[var(--shadow-card-hover)] rotate-[3deg]">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <Smartphone size={20} />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Development</div>
            <div className="text-sm font-semibold text-[var(--color-text-primary)]">Mobile & SaaS Apps</div>
          </div>
        </div>
      </motion.div>

      {/* 3. Bottom Left: Strategy */}
      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-[20%] left-[8%] hidden xl:block"
      >
        <div className="glass-card p-4 flex items-center gap-3 shadow-[var(--shadow-card-hover)] rotate-[2deg]">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
            <Rocket size={20} />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Strategy</div>
            <div className="text-sm font-semibold text-[var(--color-text-primary)]">Brand Identity</div>
          </div>
        </div>
      </motion.div>

      {/* 4. Bottom Right: Full Stack */}
      <motion.div
        animate={{ y: [-12, 12, -12] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-[25%] right-[5%] hidden xl:block"
      >
        <div className="glass-card p-4 flex items-center gap-3 shadow-[var(--shadow-card-hover)] rotate-[-2deg]">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <Code2 size={20} />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Engineering</div>
            <div className="text-sm font-semibold text-[var(--color-text-primary)]">Full Stack Apps</div>
          </div>
        </div>
      </motion.div>

      <div className="container relative z-10 text-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 border border-red-100 text-sm font-semibold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Web & Product Design Agency
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6 leading-[1.1]"
          >
            We build digital <br className="hidden md:block"/>
            products that <span className="text-[var(--color-primary)]">matter</span>.
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {tagline}
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#portfolio" className="btn-primary text-lg px-8 py-4 h-auto min-w-[180px]">
              View Our Work
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-lg text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] hover:border-[var(--color-text-primary)] transition-all duration-300 min-w-[180px]">
              Our Services
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[var(--color-border-hover)] to-transparent" />
      </motion.div>
    </section>
  );
}
