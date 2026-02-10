import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  CheckCircle,
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, integrate with your backend/email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'onexmedia.studio@gmail.com', href: 'mailto:onexmedia.studio@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7002081304', href: 'tel:+917002081304' },
    { icon: MapPin, label: 'Location', value: 'Hailakandi, Assam, India', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={sectionRef}>
      <div className="glow-spot w-[600px] h-[600px] bg-[rgba(255,59,59,0.06)] top-[-10%] left-[50%] -translate-x-1/2" />

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
            Get In Touch
          </span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Got a project in mind? We'd love to hear about it. Fill out the form
            below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
                    style={{ fontFamily: 'var(--font-accent)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
                    style={{ fontFamily: 'var(--font-accent)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
                    style={{ fontFamily: 'var(--font-accent)' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
                    style={{ fontFamily: 'var(--font-accent)' }}>
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[var(--color-bg-primary)]">Select a service</option>
                    <option value="website" className="bg-[var(--color-bg-primary)]">Custom Website</option>
                    <option value="mobile-app" className="bg-[var(--color-bg-primary)]">Mobile App</option>
                    <option value="uiux" className="bg-[var(--color-bg-primary)]">UI/UX Design</option>
                    <option value="branding" className="bg-[var(--color-bg-primary)]">Branding & Social Media</option>
                    <option value="saas" className="bg-[var(--color-bg-primary)]">SaaS Product</option>
                    <option value="other" className="bg-[var(--color-bg-primary)]">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
                    style={{ fontFamily: 'var(--font-accent)' }}>
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formState.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[var(--color-bg-primary)]">Select budget range</option>
                  <option value="10k-25k" className="bg-[var(--color-bg-primary)]">₹10,000 - ₹25,000</option>
                  <option value="25k-50k" className="bg-[var(--color-bg-primary)]">₹25,000 - ₹50,000</option>
                  <option value="50k-1L" className="bg-[var(--color-bg-primary)]">₹50,000 - ₹1,00,000</option>
                  <option value="1L+" className="bg-[var(--color-bg-primary)]">₹1,00,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
                  style={{ fontFamily: 'var(--font-accent)' }}>
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="w-full px-4 py-3 bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center text-base py-4 cursor-pointer"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-center text-[var(--color-text-muted)]">
                We'll respond within 24 hours. No spam, we promise.
              </p>
            </form>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Details */}
            <div className="glass-card p-6 space-y-6">
              <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
                Contact Info
              </h3>
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[rgba(255,59,59,0.1)] flex items-center justify-center group-hover:bg-[rgba(255,59,59,0.2)] transition-colors">
                    <info.icon size={18} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-[0.1em]"
                      style={{ fontFamily: 'var(--font-accent)' }}>
                      {info.label}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Follow Us
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all cursor-pointer"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Trust Indicators */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Why Choose Us
              </h3>
              <div className="space-y-3">
                {[
                  'Free initial consultation',
                  'Transparent pricing — no hidden fees',
                  'Dedicated project manager',
                  'Post-launch support included',
                  '100% satisfaction guarantee',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                    <CheckCircle size={16} className="text-[var(--color-primary)] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
