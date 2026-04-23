import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Linkedin, ArrowRight, CheckCircle } from 'lucide-react'

const contactMethods = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'new.ai.ops@gmail.com',
    href: 'mailto:new.ai.ops@gmail.com',
    hoverColor: 'group-hover:bg-blue-600',
  },
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    value: '+44 7735 028617',
    href: 'https://wa.me/447735028617',
    hoverColor: 'group-hover:bg-green-600',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: 'Osnat Wertheim',
    href: 'https://www.linkedin.com/in/osnat-wertheim-b8146318/',
    hoverColor: 'group-hover:bg-blue-700',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const update = key => e => setForm(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // TODO: wire up backend (e.g. Formspree, EmailJS, or Make.com webhook)
    setSubmitted(true)
  }

  const inputClass =
    'w-full border border-slate-200 rounded-lg px-4 py-3 text-[15px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Let's Talk Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 tracking-tight">
            Book a Free Process Audit
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            30 minutes. No sales pitch. We'll identify the highest-impact automation opportunity in your operation, free.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a1628] rounded-2xl p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-white text-2xl font-bold mb-1">Wertheim AI Ops</h3>
              <p className="text-slate-400 mb-10 text-sm">AI Automation for Manufacturing</p>

              <div className="space-y-5">
                {contactMethods.map(({ Icon, label, value, href, hoverColor }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
                  >
                    <div className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${hoverColor}`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                      <div className="font-medium text-[15px]">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <div className="w-16 h-16 bg-green-50 border border-green-100 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#0a1628] mb-2">Audit Request Received</h3>
                <p className="text-slate-500 max-w-xs">
                  We'll be in touch within 24 hours to schedule your free process audit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Work Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@yourplant.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Company / Plant Name</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={update('company')}
                    placeholder="e.g. Acme Specialty Chemicals"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Biggest operational challenge *
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={update('message')}
                    rows={4}
                    placeholder="Describe the process or quality pain point you'd most like to solve..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0a1628] hover:bg-blue-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 group"
                >
                  Book Free Process Audit
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </button>

                <p className="text-xs text-slate-400 text-center">
                  No commitment. No sales pitch. Just a focused 30-minute process conversation.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
