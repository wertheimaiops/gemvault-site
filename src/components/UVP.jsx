import { motion } from 'framer-motion'
import { Beaker, ShieldCheck, Cpu } from 'lucide-react'

const pillars = [
  {
    Icon: Beaker,
    title: 'Engineering Logic',
    description:
      'A Chemical Engineer designs processes to spec. Material balances, yield optimization, safety protocols. That discipline is the foundation of every automation we build.',
  },
  {
    Icon: ShieldCheck,
    title: 'QA Discipline',
    description:
      'Quality isn\'t an afterthought. Every automation is built with validation, traceability, and audit-readiness baked in from day one, not bolted on at the end.',
  },
  {
    Icon: Cpu,
    title: 'AI Execution',
    description:
      'We pair engineering intelligence with modern AI tools, Make.com, Claude AI, and custom Python pipelines, to deliver automation that holds up at production scale.',
  },
]

export default function UVP() {
  return (
    <section id="advantage" className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Quote block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700/40 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
              The Engineering Advantage
            </div>

            <blockquote className="text-3xl md:text-[38px] font-bold text-white leading-[1.25] mb-10">
              "As a Chemical Engineer, I speak the language of{' '}
              <span className="text-blue-400">'Yield'</span> and{' '}
              <span className="text-blue-400">'Safety Protocols'</span>.{' '}
              I don't just build bots,{' '}
              <span className="text-blue-400">I ensure process integrity</span>."
            </blockquote>

            <div className="flex items-center gap-4">
              {/* Avatar placeholder — replace src with real photo */}
              <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center border-2 border-blue-500 flex-shrink-0">
                <span className="text-white font-bold text-lg select-none">OW</span>
              </div>
              <div>
                <div className="text-white font-semibold">Osnat Wertheim</div>
                <div className="text-slate-400 text-sm">
                  Chemical Engineer & Founder, Wertheim AI Ops
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Pillars */}
          <div className="space-y-5">
            {pillars.map(({ Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex gap-5 bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-blue-600/20 border border-blue-600/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                  <p className="text-slate-400 leading-relaxed text-[15px]">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
