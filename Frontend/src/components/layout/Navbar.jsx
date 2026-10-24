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

  return (
    <header className="w-full z-50 sticky top-0 transition-all duration-500">
      <div className="mx-auto transition-all duration-500 max-w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-blue-900 font-bold text-lg hidden sm:inline">Anidev<span className="text-blue-600">Tech</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer select-none text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer select-none
                    ${isActive(link.href)
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <Link
              to="/become-a-partner"
              className="px-4 py-2 text-sm font-semibold rounded-full border-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-600"
            >
              Partner With Us
            </Link>
            <Link
              to="/contact"
              className="relative flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-full bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
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
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-all duration-200"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[300px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="text-blue-900 font-bold">AnidevTech</span>
          </div>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-600 transition-all"
            onClick={() => setMobileOpen(false)}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 mb-2 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20"
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
            className="flex items-center justify-center w-full py-2.5 mb-3 text-sm font-semibold text-blue-600 border-2 border-blue-600/30 rounded-xl hover:bg-blue-50 transition-all"
          >
            Partner with us
          </Link>

          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <p className="px-4 pb-1 text-[10px] font-bold tracking-[0.12em] uppercase text-gray-400 pt-3">
                  {link.label}
                </p>
                {link.dropdown.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2.5 px-4 rounded-xl text-sm font-medium transition-all text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-sm font-medium transition-all
                  ${isActive(link.href)
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
              >
                {link.label}
                {isActive(link.href) && <Zap className="w-3.5 h-3.5 text-blue-600" />}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  )
}
