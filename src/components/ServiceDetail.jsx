
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Smartphone, Globe, Palette, Share2, Layers, Monitor, Search, Code2, Server, Database, Cloud, Lock, Feather, MousePointer, Gauge } from 'lucide-react';
import Contact from './Contact';
import Footer from './Footer';

const servicesData = {
  'Custom Website Development': {
    title: 'Custom Website Development',
    icon: Globe,
    desc: 'We build high-performance, responsive websites that not only look stunning but drive conversions. From corporate sites to complex web applications, we engineer digital experiences that scale.',
    heroColor: 'bg-blue-600',
    gradient: 'from-blue-500 to-blue-700',
    deliverables: [
      { title: 'Responsive Design', desc: 'Websites that adapt perfectly to any screen size, ensuring a seamless experience on mobile, tablet, and desktop.' },
      { title: 'SEO Optimization', desc: 'Built with SEO best practices from the ground up to help you rank higher on search engines.' },
      { title: 'CMS Integration', desc: 'Easy-to-use content management systems (like Strapi, Sanity, or WordPress) so you can update your site effortlessly.' },
      { title: 'Performance Tuning', desc: 'Lightning-fast load times with optimized assets, code splitting, and modern caching strategies.' }
    ],
    tools: [
      { name: 'React', icon: Code2 },
      { name: 'Next.js', icon: Monitor },
      { name: 'Tailwind CSS', icon: Palette },
      { name: 'Node.js', icon: Server }
    ]
  },
  'Mobile App Development': {
    title: 'Mobile App Development',
    icon: Smartphone,
    desc: 'Turn your ideas into powerful mobile applications. We specialize in building cross-platform apps that provide native-like performance and engage users on both iOS and Android.',
    heroColor: 'bg-purple-600',
    gradient: 'from-purple-500 to-purple-700',
    deliverables: [
      { title: 'Cross-Platform Apps', desc: 'Write once, run everywhere. We use React Native/Flutter to deploy to both iOS and Android efficiently.' },
      { title: 'Native Performance', desc: 'Smooth animations, fast transitions, and hardware hardware access for a premium user feel.' },
      { title: 'App Store Deployment', desc: 'We handle the entire submission process to the Apple App Store and Google Play Store.' },
      { title: 'Offline Functionality', desc: 'Apps that work even without an internet connection, syncing data when connectivity returns.' }
    ],
    tools: [
      { name: 'React Native', icon: Smartphone },
      { name: 'Flutter', icon: Layers },
      { name: 'Firebase', icon: Cloud },
      { name: 'Redux', icon: Database }
    ]
  },
  'Product & UI/UX Design': {
    title: 'Product & UI/UX Design',
    icon: Palette,
    desc: 'Design that speaks to your users. we create intuitive, accessible, and beautiful interfaces that solve real problems and delight your customers at every touchpoint.',
    heroColor: 'bg-pink-600',
    gradient: 'from-pink-500 to-pink-700',
    deliverables: [
      { title: 'User Research', desc: 'Deep dive into user needs, behaviors, and pain points to inform design decisions.' },
      { title: 'Wireframing', desc: 'Low-fidelity layouts to map out user flows and information architecture before visual design.' },
      { title: 'Interactive Prototypes', desc: 'Clickable prototypes that feel like the real product, perfect for user testing and stakeholder buy-in.' },
      { title: 'Design Systems', desc: 'Comprehensive component libraries and style guides to ensure consistency across all your products.' }
    ],
    tools: [
      { name: 'Figma', icon: Feather },
      { name: 'Adobe XD', icon: MousePointer },
      { name: 'Sketch', icon: Palette },
      { name: 'Maze', icon: Search }
    ]
  },
  'Social Media & Brand Presence': {
    title: 'Social Media & Brand Presence',
    icon: Share2,
    desc: 'Amplify your voice. We craft cohesive brand identities and strategic social media campaigns that build community, drive engagement, and turn followers into loyal customers.',
    heroColor: 'bg-green-600',
    gradient: 'from-green-500 to-green-700',
    deliverables: [
      { title: 'Brand Identity', desc: 'Logo design, color palettes, typography, and brand guidelines that tell your unique story.' },
      { title: 'Content Strategy', desc: 'Data-driven content calendars tailored to your audience and business goals.' },
      { title: 'Visual Content Creation', desc: 'High-quality graphics, videos, and animations that stop the scroll and capture attention.' },
      { title: 'Community Management', desc: 'Active engagement with your audience to build trust and foster a loyal community.' }
    ],
    tools: [
      { name: 'Photoshop', icon: Palette },
      { name: 'Illustrator', icon: Feather },
      { name: 'Canva', icon: Layers },
      { name: 'Buffer', icon: Share2 }
    ]
  },
  'SaaS & Digital Product Engineering': {
    title: 'SaaS & Digital Product Engineering',
    icon: Layers,
    desc: 'Scale your business with robust SaaS solutions. We architect, build, and deploy secure, scalable, and maintainable software products that grow with your user base.',
    heroColor: 'bg-orange-600',
    gradient: 'from-orange-500 to-orange-700',
    deliverables: [
      { title: 'Scalable Architecture', desc: 'Microservices or modular monoliths designed to handle varying loads and future growth.' },
      { title: 'API Development', desc: 'Secure, efficient RESTful or GraphQL APIs to power your frontend and integrate with third-party services.' },
      { title: 'Cloud Infrastructure', desc: 'Automated deployment pipelines and serverless infrastructure on AWS, Google Cloud, or Azure.' },
      { title: 'Security Compliance', desc: 'Implementation of industry-standard security practices (GDPR, SOC2 readiness) to protect user data.' }
    ],
    tools: [
      { name: 'Docker', icon: Server },
      { name: 'Kubernetes', icon: Gauge },
      { name: 'AWS', icon: Cloud },
      { name: 'PostgreSQL', icon: Database }
    ]
  }
};

export default function ServiceDetail({ serviceTitle, onBack }) {
  const service = servicesData[serviceTitle];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-primary)]">
        <div className="text-center p-8 max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">Service Not Found</h1>
          <p className="text-[var(--color-text-secondary)] mb-6">
            Could not find details for: <span className="font-mono text-[var(--color-primary)]">{serviceTitle || 'Unknown Service'}</span>
          </p>
          <button onClick={onBack} className="btn-primary">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const Icon = service.icon || Globe;

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 overflow-hidden ${service.heroColor}`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        
        <div className="container relative z-10 text-center">
            <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="absolute left-4 top-4 md:left-0 md:-top-16 flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </motion.button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20"
          >
            <Icon size={40} className="text-white" />
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {service.title}
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            {service.desc}
          </motion.p>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section className="section-padding bg-[var(--color-bg-secondary)]">
        <div className="container">
            <div className="text-center mb-16">
            <h2 className="section-title">What We <span className="text-[var(--color-primary)]">Provide</span></h2>
            <p className="section-subtitle mx-auto">Comprehensive solutions tailored to your unique requirements.</p>
            </div>
            
          <div className="grid md:grid-cols-2 gap-8">
            {service.deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 flex items-start gap-4 hover:border-[var(--color-primary)] transition-colors group"
              >
                <div className="mt-1">
                  <CheckCircle className="text-[var(--color-primary)] group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--color-text-primary)]">{item.title}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="section-padding bg-[var(--color-bg-primary)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Tools & <span className="gradient-text">Technologies</span></h2>
            <p className="section-subtitle mx-auto">We use the latest and greatest tools to ensure top-notch quality.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {service.tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-20 h-20 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-primary)] group-hover:shadow-lg transition-all duration-300">
                  <tool.icon size={32} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors" />
                </div>
                <span className="font-semibold text-[var(--color-text-primary)]">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reused Contact Section */}
      <div className="border-t border-[var(--color-border)]">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}
