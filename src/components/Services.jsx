import { motion } from 'framer-motion'
import { Eye, BookOpen, Package, FlaskConical } from 'lucide-react'

const services = [
  {
    Icon: Eye,
    tagline: 'Real-Time Deviation Detection',
    title: 'AI Quality Auditor',
    description:
      'Continuous monitoring of production reports against your SOPs. Deviations are flagged the moment they occur, before they become batch failures, customer complaints, or regulatory violations.',
    features: ['SOP vs. actual comparison', 'Automated deviation alerts', 'Batch trend analysis dashboard'],
  },
  {
    Icon: BookOpen,
    tagline: 'Digital Workflow Intelligence',
    title: 'Automated SOP Manager',
    description:
      'Convert decades of tribal knowledge into living, AI-powered digital SOPs. Always current, always version-controlled, always enforceable, accessible from any device on the floor.',
    features: ['Tribal knowledge capture', 'Version-controlled updates', 'Operator-accessible digital format'],
  },
  {
    Icon: Package,
    tagline: 'Hazmat & Regulatory Compliance',
    title: 'Smart Inventory & SDS Manager',
    description:
      'Automated tracking of hazardous material inventories and their Safety Data Sheets. Stay audit-ready 365 days a year without a single manual document search.',
    features: ['SDS auto-updates from suppliers', 'Regulatory deadline tracking', 'Hazmat inventory alerts'],
  },
  {
    Icon: FlaskConical,
    tagline: 'Instant Quality Certificates',
    title: 'Automated Lab-to-Report',
    description:
      'Raw lab data in. Client-ready Certificates of Analysis out. Eliminate the bottleneck between your quality lab and your customers, in under 60 seconds.',
    features: ['Raw data ingestion (CSV, LIMS, manual)', 'Automated spec compliance check', 'Professional CoA generation'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Solutions Built for Manufacturing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 tracking-tight">
            Engineering-Grade AI Services
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Every solution is designed around the realities of industrial production, not generic business software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7">
          {services.map(({ Icon, tagline, title, description, features }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-[#0a1628] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon size={26} className="text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="min-w-0">
                  <div className="text-blue-600 text-xs font-semibold uppercase tracking-wider mb-1">{tagline}</div>
                  <h3 className="text-xl font-bold text-[#0a1628] mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-5 text-[15px]">{description}</p>
                  <ul className="space-y-2">
                    {features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-500">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 mt-1.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
