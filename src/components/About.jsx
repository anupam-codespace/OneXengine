import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Zap, Target, Users, Award, ArrowRight } from 'lucide-react';

function Counter({ target, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      desc: 'Cutting-edge tech & modern design patterns.',
    },
    {
      icon: Target,
      title: 'Results',
      desc: 'Engineered for conversion and engagement.',
    },
    {
      icon: Users,
      title: 'Client First',
      desc: 'Your vision drives our entire process.',
    },
    {
      icon: Award,
      title: 'Premium',
      desc: 'Craftsmanship in design and development.',
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[var(--color-bg-secondary)]" ref={sectionRef}>
      {/* Background accents */}
      <div className="glow-spot w-[600px] h-[600px] bg-[rgba(255,59,59,0.06)] top-[-10%] right-[-10%]" />
      <div className="glow-spot w-[400px] h-[400px] bg-[rgba(59,130,246,0.04)] bottom-0 left-[-5%]" />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <motion.span variants={itemVariants} className="section-badge mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                Who We Are
              </motion.span>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Your Digital <span className="gradient-text">Growth Partner</span>
              </motion.h2>
            </div>
            <motion.p variants={itemVariants} className="text-[var(--color-text-secondary)] text-lg md:max-w-md">
              We build digital experiences that look stunning, perform flawlessly, and drive real business impact.
            </motion.p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Big Intro Card */}
            <motion.div variants={itemVariants} className="glass-card md:col-span-8 p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(255,59,59,0.05)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--color-text-primary)] leading-snug">
                We're a passionate team of designers, developers, and strategists.
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8 max-w-2xl">
                We don't just build websites; we engineer digital products that set your brand apart. From concept to launch, we treat every project like it's our own, refusing to cut corners on quality or performance.
              </p>
              <a href="#portfolio" className="inline-flex items-center gap-2 font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors group/link mt-auto">
                Discover our work
                <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Stats Card */}
            <motion.div variants={itemVariants} className="glass-card md:col-span-4 p-8 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] flex flex-col justify-center relative overflow-hidden border-none group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-center relative z-10 w-full mb-8">
                <div className="text-6xl lg:text-7xl font-black mb-2 tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
                  <Counter target={50} suffix="+" />
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-[#a1a1aa] font-accent">
                  Projects Delivered
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/10 mb-8" />

              <div className="text-center relative z-10 w-full">
                <div className="text-6xl lg:text-7xl font-black mb-2 tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
                  <Counter target={99} suffix="%" />
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-[#a1a1aa] font-accent">
                  Client Satisfaction
                </div>
              </div>
            </motion.div>

            {/* 4 Value Cards in a row at the bottom of the bento */}
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="glass-card md:col-span-3 p-8 flex flex-col group hover:-translate-y-2 hover:border-[var(--color-primary)] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-tertiary)] flex items-center justify-center mb-6 group-hover:bg-[rgba(255,59,59,0.1)] transition-colors duration-300">
                  <item.icon size={22} className="text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold mb-3 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.div>
      </div>
    </section>
  );
}
