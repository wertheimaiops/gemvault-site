import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#pain', label: 'The Problem' },
  { href: '#services', label: 'Services' },
  { href: '#advantage', label: 'Our Edge' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-lg border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img src="/Wertheim-logo.png" alt="Wertheim AI Ops logo" className="h-10 w-auto" />
          <div>
            <div className="text-white font-bold text-sm tracking-widest uppercase leading-tight">
              Wertheim AI Ops
            </div>
            <div className="text-slate-400 text-xs leading-tight">Process Integrity & AI Automation</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/gemvault/index.html"
            className="flex items-center gap-1.5 text-sm font-semibold text-violet-300 hover:text-violet-100 transition-colors duration-200 border border-violet-500/30 hover:border-violet-400/50 px-3 py-1.5 rounded-lg"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L2 8l10 14L22 8z" fill="currentColor" opacity="0.9"/>
            </svg>
            GemVault
          </a>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200"
          >
            Book a Process Audit
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          className="md:hidden text-white p-1"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a1628] border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 text-sm font-medium py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/gemvault/index.html"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-violet-300 text-sm font-semibold py-1"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L2 8l10 14L22 8z" fill="currentColor" opacity="0.9"/>
                </svg>
                GemVault
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-semibold text-center mt-2"
              >
                Book a Process Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
