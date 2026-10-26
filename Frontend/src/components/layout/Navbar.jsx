import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Our Story',
    dropdown: [
      { label: 'Who We Are', href: '/who-we-are' },
      { label: 'Why Us', href: '/why-us' },
      { label: 'Testimonials', href: '/testimonials' },
    ],
  },
  { label: 'Services', href: '/services' },
  {
    label: 'Products',
    dropdown: [
      { label: 'DevBox', href: '/products/devbox' },
      { label: 'View All Products', href: '/products' },
    ],
  },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  const isActive = (href) => location.pathname === href
  const isDropdownActive = (items) =>
    items.some(({ href }) => location.pathname === href || location.pathname.startsWith(`${href}/`))

  return (
    <header className="sticky top-0 z-50 isolate w-full">
      <div className="border-b border-slate-200/80 bg-white/95 shadow-[0_4px_24px_-18px_rgba(15,23,42,0.35)] backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between gap-4 px-3 sm:px-5 lg:px-6">
          {/* Logo */}
          <Link to="/" aria-label="AnidevTech home" className="group -ml-2 flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">
            <span className="hidden text-xl font-bold tracking-tight text-slate-900 sm:inline">Anidev<span className="text-blue-600">Tech</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null)
                  }}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.label}
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className={`flex cursor-pointer select-none items-center gap-1.5 rounded-full px-1.5 py-2 text-base font-semibold uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                      isDropdownActive(link.dropdown) || openDropdown === link.label
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute left-0 top-full z-50 w-56 pt-2">
                      <div className="rounded-2xl border border-slate-200/80 bg-white p-2 shadow-[0_16px_40px_-16px_rgba(15,23,42,0.25)]">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            aria-current={isActive(item.href) ? 'page' : undefined}
                            className={`flex items-center rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 ${
                              isActive(item.href)
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-blue-700'
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`relative flex cursor-pointer select-none items-center gap-1 rounded-full px-1.5 py-2 text-base font-semibold uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2
                    ${isActive(link.href)
                      ? 'text-blue-700'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                    }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <Link
              to="/become-a-partner"
              className="rounded-full border border-slate-200 px-4 py-2.5 text-[13px] font-semibold text-slate-700 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              Partner With Us
            </Link>
            <Link
              to="/contact"
              className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 text-[13px] font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:translate-y-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/70"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-[min(88vw,360px)] flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div>
            <span className="text-lg font-bold tracking-tight text-slate-900">Anidev<span className="text-blue-600">Tech</span></span>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            onClick={() => setMobileOpen(false)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 space-y-1 overflow-y-auto px-4 py-5">
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mb-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-3 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/70"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Get a Quote
          </Link>
          <Link
            to="/become-a-partner"
            onClick={() => setMobileOpen(false)}
            className="mb-3 flex w-full items-center justify-center rounded-xl border border-blue-200 py-2.5 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Partner with us
          </Link>

          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <p className="px-4 pb-1 pt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  {link.label}
                </p>
                {link.dropdown.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 ${
                      isActive(item.href)
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600
                  ${isActive(link.href)
                    ? 'bg-blue-50 font-semibold text-blue-700'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`}
              >
                {link.label}
                {isActive(link.href) && <Zap className="w-3.5 h-3.5 text-blue-600" />}
              </Link>
            )
          )}
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-[2px] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  )
}
