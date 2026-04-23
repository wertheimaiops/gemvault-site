import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { AuroraBackground } from './ui/aurora-background'

const stats = [
  { value: '90%', label: 'Reduction in manual QA reporting time' },
  { value: '< 1 min', label: 'Lab-to-certificate turnaround' },
  { value: '24/7', label: 'Automated compliance monitoring' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section id="hero">
      <AuroraBackground className="pt-24 pb-16 overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 bg-blue-950/60 border border-blue-700/40 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          Chemical Engineering × QA Expertise × AI Automation
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-6xl lg:text-[72px] font-bold text-white leading-[1.1] mb-6 tracking-tight"
        >
          Building{' '}
          <span className="text-blue-400">AI-Driven<br className="hidden sm:block" /> Process Integrity</span>
          <br />for Manufacturers.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Eliminate batch errors, automate regulatory compliance, and scale your operations with engineering-grade precision.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200 group"
          >
            Book a Process Audit
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-1.5">{s.value}</div>
              <div className="text-sm text-slate-500 leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600"
        aria-hidden="true"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
      </AuroraBackground>
    </section>
  )
}
