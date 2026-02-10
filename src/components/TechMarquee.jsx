import { motion } from 'framer-motion';

const tools = [
  'React', 'Next.js', 'Flutter', 'Figma', 'Tailwind CSS',
  'Node.js', 'Firebase', 'AWS', 'TypeScript', 'MongoDB',
  'PostgreSQL', 'Docker', 'GraphQL', 'Framer Motion',
];

export default function TechMarquee() {
  return (
    <section className="py-8 md:py-12 border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden relative">
      <div className="absolute inset-0 bg-[rgba(255,59,59,0.02)]" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden w-full"
      >
        <div className="flex gap-16 whitespace-nowrap w-max animate-scroll">
          {[...tools, ...tools, ...tools, ...tools].map((tool, i) => (
            <span
              key={i}
              className="text-lg md:text-xl font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-300 cursor-default flex items-center gap-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {tool}
              <span className="text-[var(--color-primary)] text-sm opacity-50">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
