import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import { useLocale } from '../../i18n/LocaleContext'
import internshipImage from '../../assets/about-left.png'
import trainingImage from '../../assets/why_choose_us.png'
import consultingImage from '../../assets/HerosectionImage.png'

const categories = ['All', 'Internships', 'Training', 'Consulting']

const services = [
  {
    title: 'Internships',
    category: 'Internships',
    items: ['High School Students', 'University Students'],
    image: internshipImage,
  },
  {
    title: 'Software Development Training',
    category: 'Training',
    items: ['Learn software development fundamentals', 'Practice through guided projects', 'Build skills for real-world work'],
    image: trainingImage,
  },
  {
    title: 'Digital Transformation Consulting',
    category: 'Consulting',
    items: ['Assess your business needs and processes', 'Identify opportunities to use digital tools', 'Plan practical next steps for going digital'],
    image: consultingImage,
  },
]

const gradients = ['from-navy to-brand', 'from-brand to-navy-mid', 'from-navy-mid to-brand']

function ServiceCard({ service, index, isOpen, onToggle, t }) {
  const hasItems = service.items.length > 0
  const backgroundStyle = service.image
    ? { backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : undefined

  const titleInner = (
    <>
      <span className="text-base md:text-lg font-semibold text-left text-navy">{t(service.title)}</span>
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
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col justify-end max-h-full">
        {hasItems && isOpen && (
          <ul className="mb-2 max-h-[240px] overflow-y-auto rounded-xl bg-white/95 divide-y divide-gray-100 shadow-md">
            {service.items.map((item) => (
              <li key={item}>
                <Link
                  to="/contact"
                  className="flex items-center justify-between gap-3 px-5 py-3 text-sm text-gray-800 hover:text-brand transition-colors"
                >
                  <span>{t(item)}</span>
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
  const { t } = useLocale()
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
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-navy via-navy-mid to-brand text-white">
        <div aria-hidden="true" className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div aria-hidden="true" className="absolute -right-10 -top-16 h-72 w-72 rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
            {t('What we offer')}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            {t('Services that help people and businesses grow')}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-blue-50/90 sm:text-lg">
            {t('We help students gain experience, teach software development, and guide businesses as they move their work into the digital world.')}
          </p>
        </div>
      </section>

      <section className="px-4 pt-12 sm:px-6 lg:px-12">
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
                  {t(c)}
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
              <span>{t(active)}</span>
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
                    {t(c)}
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
              t={t}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
