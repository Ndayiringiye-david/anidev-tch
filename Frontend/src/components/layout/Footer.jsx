import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Facebook, Linkedin, Instagram, Youtube } from '../icons/BrandIcons'

const XIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
)

const socials = [
  { href: 'https://facebook.com/anidevtech', icon: Facebook, label: 'Facebook' },
  { href: 'https://x.com/anidevtech', icon: XIcon, label: 'X' },
  { href: 'https://instagram.com/anidevtech', icon: Instagram, label: 'Instagram' },
  { href: 'https://linkedin.com/company/anidev-technologies', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://youtube.com/@anidevtech', icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <div className="bg-primary-900 relative py-8 md:py-16 overflow-hidden">
      {/* decorative overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '20px 20px' }}
      />

      <footer className="text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">

            {/* Col 1 — Brand */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-xl">A</span>
                </div>
                <span className="text-white font-bold text-xl">Anidev<span className="text-blue-300">Tech</span></span>
              </div>
              <p className="text-blue-100 mb-4 md:mb-6 text-sm md:text-base">
                Building Digital Solutions for Africa &amp; Beyond.
              </p>
              <h5 className="text-white mb-3 mt-3 text-sm md:text-base font-medium">JOIN US ON</h5>
              <div className="flex space-x-3 md:space-x-4">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Company Links */}
            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-sm md:text-base">About Company</h4>
              <ul className="space-y-3 md:space-y-4 text-blue-100 text-sm md:text-base">
                {[
                  { label: 'Who We Are', href: '/who-we-are' },
                  { label: 'Testimonials', href: '/testimonials' },
                  { label: 'Services', href: '/services' },
                  { label: 'Insights', href: '/insights' },
                  { label: 'Contact Us', href: '/contact' },
                  { label: 'Partner With Us', href: '/become-a-partner', badge: 'NEW' },
                ].map(({ label, href, badge }) => (
                  <li key={href}>
                    <Link to={href} className="hover:text-blue-200 transition-colors flex items-center gap-2">
                      {label}
                      {badge && <span className="px-1.5 py-0.5 text-[10px] font-bold bg-green-500 text-white rounded-full">{badge}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Contact */}
            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-sm md:text-base">Contact Us</h4>
              <ul className="space-y-3 md:space-y-4 text-blue-100 mt-2 md:mt-4">
                <li className="flex items-center text-sm md:text-base">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-white flex-shrink-0" />
                  <span>+250 791 631 89</span>
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-white flex-shrink-0" />
                  <span className="break-all">info@anidev.tech</span>
                </li>
                <li className="flex items-start text-sm md:text-base">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-white flex-shrink-0 mt-0.5" />
                  <span>123 Tech Avenue, Innovation Hub, Kigali, Rwanda</span>
                </li>
              </ul>
            </div>

            {/* Col 4 — Newsletter */}
            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-sm md:text-base">Stay Connected</h4>
              <p className="text-blue-300 mb-4 font-thin text-sm md:text-base">Subscribe for latest update</p>
              <form className="flex bg-white/10 border border-none rounded-[30px] overflow-hidden backdrop-blur-sm p-1">
                <input
                  type="email"
                  placeholder="Your email...."
                  required
                  className="flex-1 px-3 md:px-4 py-2 bg-transparent text-white placeholder-blue-300 focus:outline-none text-sm md:text-base"
                />
                <button className="px-2 py-2 md:px-3 md:py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-6 md:pt-8 text-center text-blue-100">
          <p className="text-sm md:text-base">© {new Date().getFullYear()} Anidev Technologies Ltd. All rights reserved.</p>
          <p className="mt-2 text-xs text-blue-300/70 max-w-3xl mx-auto">
            Empowering Africa through technology — web, mobile, cloud, and digital transformation solutions.
          </p>
        </div>
      </footer>
    </div>
  )
}
