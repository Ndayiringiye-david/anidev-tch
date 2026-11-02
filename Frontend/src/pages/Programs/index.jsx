import { ArrowRight, BrainCircuit, CheckCircle2, Cloud, Code2, Database, Palette } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'

const availableProgram = {
  title: 'Full-Stack Development',
  description: 'Learn to build complete web applications, from responsive user interfaces to server-side features and data storage.',
  topics: ['HTML, CSS, and JavaScript', 'React user interfaces', 'Node.js and APIs', 'Databases and project deployment'],
}

const upcomingPrograms = [
  {
    title: 'Frontend Development',
    description: 'Focus on responsive interfaces, modern JavaScript, and building polished experiences for the web.',
    icon: Code2,
  },
  {
    title: 'Backend Development',
    description: 'Explore server-side development, APIs, databases, and the foundations of reliable applications.',
    icon: Database,
  },
  {
    title: 'Data & AI',
    description: 'Discover practical data skills and the fundamentals of building with artificial intelligence.',
    icon: BrainCircuit,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Learn the concepts behind cloud infrastructure, deployment, and modern development operations.',
    icon: Cloud,
  },
  {
    title: 'UI/UX Design',
    description: 'Practice user research, interface design, and prototyping for useful digital products.',
    icon: Palette,
  },
]

export default function ProgramsPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div aria-hidden="true" className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-blue-200/10" />
        <div aria-hidden="true" className="absolute -right-10 -top-16 h-72 w-72 rounded-full border border-blue-200/10" />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_0%,rgba(59,130,246,0.25),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-12">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
            <Code2 className="h-4 w-4" aria-hidden="true" />
            {t('Anidev learning programs')}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {t('Build skills for your next opportunity')}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-blue-50/80 sm:text-lg">
            {t('Explore practical technology learning paths. Apply to the program that is open now, or see what is coming next.')}
          </p>
          <a
            href="#available-programs"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            {t('Explore programs')}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="available-programs" className="scroll-mt-24 px-4 py-14 sm:px-6 md:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{t('Enrollment open')}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t('Available program')}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              {t('Start with a hands-on learning path designed to build practical skills through software projects.')}
            </p>
          </div>

          <article className="grid overflow-hidden rounded-3xl bg-white shadow-[0_24px_70px_-38px_rgba(15,23,42,0.35)] ring-1 ring-slate-200 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative flex min-h-64 flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 p-7 text-white sm:p-10">
              <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/15" />
              <div aria-hidden="true" className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/15" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-300/15 px-3 py-1.5 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-200/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  {t('Applications open')}
                </span>
                <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                  <Code2 className="h-7 w-7 text-blue-200" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-2xl font-bold sm:text-3xl">{t(availableProgram.title)}</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-blue-50/80">{t(availableProgram.description)}</p>
              </div>
              <p className="relative mt-8 text-sm font-medium text-blue-100/80">{t('Choose the next available cohort when you apply.')}</p>
            </div>

            <div className="flex flex-col justify-between p-7 sm:p-10">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">{t('What you will explore')}</h4>
                <ul className="mt-5 space-y-4">
                  {availableProgram.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                      {t(topic)}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/apply-now"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                {t('Apply to this program')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{t('More learning paths')}</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t('Coming soon')}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{t('These programs are in preparation. Contact us if you would like to hear when they launch.')}</p>
            </div>
            <Link to="/contact" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900">
              {t('Ask about upcoming programs')}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingPrograms.map(({ title, description, icon: Icon }) => (
              <article key={title} className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    {t('Coming soon')}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{t(title)}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{t(description)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
