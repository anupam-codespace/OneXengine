import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  HeadphonesIcon,
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    desc: 'We dive deep into your business, audience, and goals. Understanding the landscape is the first step to building something extraordinary.',
    details: ['Market Research', 'Competitor Analysis', 'Requirements Gathering', 'Project Scoping'],
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Design',
    desc: 'From wireframes to high-fidelity prototypes, we craft pixel-perfect designs that align with your brand and optimize for conversion.',
    details: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Design System'],
  },
  {
    icon: Code2,
    number: '03',
    title: 'Development',
    desc: 'Clean code, modern frameworks, and agile methodology. We build fast, scalable, and maintainable digital products.',
    details: ['Frontend Dev', 'Backend Dev', 'API Integration', 'Quality Assurance'],
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Deployment',
    desc: 'Thorough testing, optimization, and a smooth launch. We ensure your product goes live without a hitch.',
    details: ['Performance Audit', 'SEO Setup', 'Launch Strategy', 'Cloud Hosting'],
  },
  {
    icon: HeadphonesIcon,
    number: '05',
    title: 'Support',
    desc: 'Our relationship doesn\'t end at launch. Ongoing maintenance, updates, and support to keep your product thriving.',
    details: ['24/7 Monitoring', 'Bug Fixes', 'Feature Updates', 'Growth Strategy'],
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="process" className="section-padding relative overflow-hidden" ref={sectionRef}>
      <div className="glow-spot w-[500px] h-[500px] bg-[rgba(255,59,59,0.04)] top-[40%] left-[-10%]" />

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
            How We Work
          </span>
          <h2 className="section-title">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A proven 5-step process that transforms ideas into world-class
            digital products.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-[var(--color-border)] hidden sm:block">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[var(--color-primary)] to-transparent"
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`relative flex flex-col sm:flex-row items-start gap-6 md:gap-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${isEven ? 'md:text-right md:pr-0' : 'md:text-left md:pl-0'}`}>
                    <div className="glass-card p-6 md:p-8 relative overflow-hidden group">
                      {/* Step Number Background */}
                      <div
                        className="absolute top-4 right-4 text-6xl font-black opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {step.number}
                      </div>

                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                        <div className="w-10 h-10 rounded-xl bg-[rgba(255,59,59,0.1)] flex items-center justify-center group-hover:bg-[rgba(255,59,59,0.2)] transition-colors">
                          <step.icon size={20} className="text-[var(--color-primary)]" />
                        </div>
                        <div>
                          <span className="text-xs text-[var(--color-primary)] uppercase tracking-[0.15em]"
                            style={{ fontFamily: 'var(--font-accent)' }}>
                            Step {step.number}
                          </span>
                          <h3
                            className="text-xl font-bold"
                            style={{ fontFamily: 'var(--font-heading)' }}
                          >
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                        {step.desc}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                        {step.details.map((d) => (
                          <span
                            key={d}
                            className="text-xs px-3 py-1 rounded-full bg-[rgba(255,59,59,0.06)] text-[var(--color-primary)] border border-[rgba(255,59,59,0.12)]"
                            style={{ fontFamily: 'var(--font-accent)' }}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden sm:flex absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[var(--color-bg-primary)] border-2 border-[var(--color-primary)] z-10 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
