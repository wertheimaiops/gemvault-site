import { Mail, MessageCircle, Linkedin } from 'lucide-react'

const navLinks = [
  { href: '#pain', label: 'The Problem' },
  { href: '#services', label: 'Services' },
  { href: '#advantage', label: 'Our Edge' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { Icon: Mail, href: 'mailto:new.ai.ops@gmail.com', label: 'Email' },
  { Icon: MessageCircle, href: 'https://wa.me/447735028617', label: 'WhatsApp' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/osnat-wertheim-b8146318/', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-[#060f1e] border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/Wertheim-logo.png" alt="Wertheim AI Ops logo" className="h-10 w-auto" />
              <div>
                <div className="text-white font-bold text-sm tracking-widest uppercase">Wertheim AI Ops</div>
                <div className="text-slate-500 text-xs">Process Integrity & AI Automation</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Engineering-grade AI automation for manufacturing, food, and specialty chemical operations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-slate-300 font-semibold text-sm mb-4">Navigation</div>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-slate-300 font-semibold text-sm mb-4">Get In Touch</div>
            <div className="space-y-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 text-slate-500 hover:text-slate-300 text-sm transition-colors group"
                >
                  <Icon size={16} className="flex-shrink-0" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Wertheim AI Ops. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Built with React · Vite · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
