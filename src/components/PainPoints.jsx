import { motion } from 'framer-motion'
import { FileX, AlertTriangle, ShieldOff } from 'lucide-react'

const pains = [
  {
    Icon: FileX,
    title: 'Manual Reporting Costs',
    body: 'Your team spends hours each week transcribing lab data and writing batch records by hand. Every manual step introduces errors, delays, and unnecessary labor cost that compounds daily.',
    stat: '$50K+',
    statLabel: 'avg. annual cost of manual QA reporting per facility',
  },
  {
    Icon: AlertTriangle,
    title: 'Batch Inconsistencies',
    body: 'Without real-time deviation detection, off-spec batches travel downstream before anyone notices, triggering costly rework, customer complaints, and raw material waste.',
    stat: '2–5%',
    statLabel: 'avg. production loss from undetected batch deviations',
  },
  {
    Icon: ShieldOff,
    title: 'Regulatory Non-Compliance',
    body: 'ISO standards, SDS requirements, and FDA regulations are moving targets. A missed document update can mean a failed audit, a production shutdown, or significant legal exposure.',
    stat: '47%',
    statLabel: 'of SMB manufacturers cite compliance as their #1 operational risk',
  },
]

export default function PainPoints() {
  return (
    <section id="pain" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-red-50 border border-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            The Real Cost of Manual Operations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 tracking-tight">
            What's Breaking Your Production Line
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            "General AI experts don't understand your production line.{' '}
            <span className="text-[#0a1628]">We do.</span>"
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map(({ Icon, title, body, stat, statLabel }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center mb-6">
                <Icon size={22} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-3">{title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-[15px]">{body}</p>
              <div className="border-t border-slate-200 pt-5">
                <div className="text-2xl font-bold text-red-500">{stat}</div>
                <div className="text-xs text-slate-400 mt-1 leading-snug">{statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
