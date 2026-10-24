import { Mail, Phone, Globe } from 'lucide-react'

const svgProps = {
  className: 'w-4 h-4',
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
}

const XIcon = () => (
  <svg {...svgProps} viewBox="0 0 512 512">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg {...svgProps}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const InstagramIcon = () => (
  <svg {...svgProps} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
)

const YoutubeIcon = () => (
  <svg {...svgProps}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const FacebookIcon = () => (
  <svg {...svgProps}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const linkClass = 'hover:text-blue-200 transition-colors'

export default function Topbar() {
  return (
    <div className="w-full bg-primary-600 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10 text-sm">
          {/* Left: contact */}
          <div className="flex items-center space-x-6">
            <a href="mailto:info@anidev.tech" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">info@anidev.tech</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">+250 7916 318 91</span>
            </a>
          </div>

          {/* Right: language + socials */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" aria-hidden="true" />
              <select className="bg-transparent border-none text-white text-sm focus:outline-none cursor-pointer">
                <option value="en" className="bg-white text-black">???? English</option>
                <option value="fr" className="bg-white text-black">???? Fran�ais</option>
              </select>
            </div>
            <span className="hidden md:inline text-xs">Follow Us:</span>
            <div className="flex items-center space-x-3">
              <a href="https://linkedin.com/company/anidev-technologies" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={linkClass}><LinkedinIcon /></a>
              <a href="https://x.com/anidevtech" target="_blank" rel="noopener noreferrer" aria-label="X" className={linkClass}><XIcon /></a>
              <a href="https://instagram.com/anidevtech" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={linkClass}><InstagramIcon /></a>
              <a href="https://youtube.com/@anidevtech" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={linkClass}><YoutubeIcon /></a>
              <a href="https://facebook.com/anidevtech" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={linkClass}><FacebookIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
