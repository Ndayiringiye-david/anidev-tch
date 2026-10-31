import { ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'
import teamPhoto from '../../assets/why_choose_us.png'
import ChooseUsSection from '../Home/ChooseUsSection'

export default function WhyChooseUsPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-white">
      <section className="relative isolate overflow-hidden bg-primary-950 text-white">
        <div className="absolute inset-0 -z-20">
          <img
            src={teamPhoto}
            alt=""
            className="h-full w-full object-cover object-center opacity-30"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-950 via-primary-950/95 to-primary-900/70" />
        <div aria-hidden="true" className="absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full border border-white/10" />
        <div aria-hidden="true" className="absolute -right-12 -top-20 -z-10 h-72 w-72 rounded-full border border-white/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
              {t('WHY PARTNER WITH ANIDEV')}
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {t('Skilled African talent.')}
              <span className="mt-2 block text-blue-200">{t('Reliable delivery. A partner in your growth.')}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-50/85 sm:text-lg sm:leading-8">
              {t('From building a capable team to delivering digital solutions, we combine practical expertise, collaborative delivery, and ongoing support to help your business move forward.')}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950"
              >
                {t('Talk to our team')}
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {t('Explore our services')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
                {t('A partner for your next move')}
              </p>
              <p className="mt-4 text-2xl font-semibold leading-snug text-white">
                {t('Tell us what you are working toward. We will help you find the right people and approach to get there.')}
              </p>
              <div className="mt-8 h-1 w-16 rounded-full bg-blue-400" />
            </div>
          </div>
        </div>
      </section>

      <ChooseUsSection />

      <section className="px-4 pb-20 sm:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-primary px-6 py-10 text-white shadow-xl shadow-primary-900/15 sm:px-10 md:flex-row md:items-center md:justify-between md:py-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("Let's make progress together.")}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
              {t('Discover how our team can support your next step.')}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            {t('Talk to our team')}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  )
}
