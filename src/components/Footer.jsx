import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Services: [
      { label: 'Website Development', href: '#services' },
      { label: 'Mobile Apps', href: '#services' },
      { label: 'UI/UX Design', href: '#services' },
      { label: 'Brand Identity', href: '#services' },
      { label: 'SaaS Products', href: '#services' },
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Process', href: '#process' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
  };

  return (
    <footer className="relative pt-20 pb-8 border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]">
      <div className="absolute inset-0 grid-bg opacity-30 mix-blend-multiply" />
      
      <div className="container relative z-10 px-6">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-16 mb-20 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="relative z-10 max-w-2xl">
            <h3
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ready to Launch Your <span className="gradient-text">Next Project</span>?
            </h3>
            <p className="text-[var(--color-text-secondary)] text-lg">
              Let's turn your vision into reality. Get in touch and let's start building.
            </p>
          </div>
          <a href="#contact" className="btn-primary text-base px-8 py-4 relative z-10 whitespace-nowrap" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Get Started Today
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <a href="#" className="block">
              <span 
                className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                OneXmedia
              </span>
            </a>
            <p className="text-[var(--color-text-secondary)] max-w-sm leading-relaxed">
              Premium digital agency specializing in custom websites, mobile apps,
              brand identity, and digital product engineering. We craft experiences
              that drive results.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[var(--color-text-primary)]"
                style={{ fontFamily: 'var(--font-accent)' }}>
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-[var(--color-border)]">
          <p className="text-sm text-[var(--color-text-muted)] flex items-center gap-1">
            © {new Date().getFullYear()} OneXmedia. Crafted with <Heart size={14} className="text-[var(--color-primary)] fill-current" /> in India.
          </p>
          
          <div className="flex items-center gap-6">
            {['Instagram', 'Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <a key={social} href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors text-sm font-medium">
                {social}
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)] transition-all ml-4"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
