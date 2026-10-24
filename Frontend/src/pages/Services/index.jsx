import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ChevronDown, ArrowUpRight } from 'lucide-react'

// Card photos: every .jpg/.jpeg/.webp in src/assets is used in rotation.
// To pick a specific photo for a card, import it and add `image: myPhoto` to that service.
const photoModules = import.meta.glob('../../assets/*.{jpg,jpeg,webp}', { eager: true, import: 'default' })
const photos = Object.keys(photoModules).sort().map((k) => photoModules[k])

const categories = ['All', 'Talent', 'Training', 'Software', 'Consulting']

const services = [
  { title: 'Talent Placement', category: 'Talent', items: ['Vetted Developer Sourcing', 'Dedicated Remote Teams', 'Staff Augmentation'] },
  { title: 'Training Programs', category: 'Training', items: ['Bootcamps', 'Corporate Upskilling', 'Mentorship'] },
  { title: 'Software Development', category: 'Software', items: ['Web Applications', 'Mobile Applications', 'Custom Platforms', 'Maintenance & Support'] },
  { title: 'Digital Transformation', category: 'Consulting', items: ['Process Automation', 'Cloud Migration', 'Data & Analytics'] },
  { title: 'Technical Consultation', category: 'Consulting', items: [], href: '/contact' },
  { title: 'Managed Services', category: 'Software', items: [], href: '/contact' },
  { title: 'Remote Team Management', category: 'Talent', items: ['Onboarding', 'Performance Tracking'] },
  { title: 'Career Development', category: 'Training', items: ['Interview Prep', 'Soft Skills', 'Portfolio Building'] },
  { title: 'Project Consultation', category: 'Consulting', items: [], href: '/contact' },
]

const gradients = ['from-navy to-brand', 'from-brand to-navy-mid', 'from-navy-mid to-brand']

function ServiceCard({ service, index, isOpen, onToggle }) {
  const hasItems = service.items.length > 0
  const photo = service.image || (photos.length ? photos[index % photos.length] : null)
  const bg = photo
    ? { backgroundImage: `url(${photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : undefined

  const titleInner = (
    <>
      <span className="text-base md:text-lg font-semibold text-left text-navy">{service.title}</span>
      {hasItems ? (
        <ChevronDown className={`w-5 h-5 shrink-0 text-brand transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      ) : (
        <ArrowUpRight className="w-5 h-5 shrink-0 text-brand" />
      )}
    </>
  )

  const barClass =
    'w-full flex items-center justify-between gap-3 px-5 py-4 rounded-xl bg-white/95 hover:bg-white shadow-md transition-colors'

  return (
    <div
      className={`relative h-[360px] rounded-2xl overflow-hidden bg-gradient-to-br ${gradients[index % gradients.length]}`}
      style={bg}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col justify-end max-h-full">
        {hasItems && isOpen && (
          <ul className="mb-2 max-h-[240px] overflow-y-auto rounded-xl bg-white/95 divide-y divide-gray-100 shadow-md">
            {service.items.map((item) => (
              <li key={item}>
                <Link
                  to="/contact"
                  className="flex items-center justify-between gap-3 px-5 py-3 text-sm text-gray-800 hover:text-brand transition-colors"
                >
                  <span>{item}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        )}
        {hasItems ? (
          <button type="button" onClick={onToggle} className={barClass}>
            {titleInner}
          </button>
        ) : (
          <Link to={service.href || '/contact'} className={barClass}>
            {titleInner}
          </Link>
        )}
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [openTitle, setOpenTitle] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const cat = searchParams.get('cat')
  const active = categories.includes(cat) ? cat : 'All'
  const visible = active === 'All' ? services : services.filter((s) => s.category === active)

  const select = (c) => {
    setSearchParams(c === 'All' ? {} : { cat: c })
    setOpenTitle(null)
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <section className="h-[311px] bg-gradient-to-r from-navy via-navy-mid to-brand" />

      {/* Heading */}
      <section className="px-4 sm:px-6 lg:px-12 pt-14 pb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 capitalize">Services</h1>
          <div className="mt-3 h-1 w-16 rounded-full bg-brand" />
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6 lg:px-12 pb-10">
        <div className="max-w-7xl mx-auto">
          <ul className="hidden md:flex flex-wrap gap-x-8 gap-y-2 border-b border-gray-200">
            {categories.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => select(c)}
                  className={`pb-3 -mb-px text-base font-medium border-b-2 transition-colors ${
                    active === c
                      ? 'text-brand border-brand'
                      : 'text-gray-600 border-transparent hover:text-brand'
                  }`}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>

          <div className="md:hidden relative">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 font-medium"
            >
              <span>{active}</span>
              <ChevronDown className={`w-5 h-5 text-brand transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
            </button>
            {menuOpen && (
              <div className="absolute z-20 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => select(c)}
                    className={`w-full text-left px-4 py-3 text-sm ${
                      active === c ? 'text-brand font-semibold bg-gray-50' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="px-4 sm:px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((s, i) => (
            <ServiceCard
              key={s.title}
              service={s}
              index={i}
              isOpen={openTitle === s.title}
              onToggle={() => setOpenTitle(openTitle === s.title ? null : s.title)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
