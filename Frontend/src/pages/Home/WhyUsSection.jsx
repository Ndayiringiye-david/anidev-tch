import { ArrowRight, Award, Network, Shield, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import teamPhoto from '../../assets/about-left.png'

const features = [
  {
    icon: Award,
    title: 'Modern expertise',
    desc: 'A future-ready mix of skills and technologies for products built to last.',
  },
  {
    icon: Network,
    title: 'Agile delivery',
    desc: 'A focused, collaborative process that keeps good work moving forward.',
  },
  {
    icon: Shield,
    title: 'End-to-end capability',
    desc: 'From web and mobile to backend and cloud, bring the pieces together.',
  },
  {
    icon: Users,
    title: 'People-first partnership',
    desc: 'A dedicated team, clear communication, and support beyond launch.',
  },
]

export default function WhyUsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      <div className="pointer-events-none absolute -right-36 -top-40 h-[28rem] w-[28rem] rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[28rem] w-[28rem] rounded-full bg-indigo-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-12 max-w-2xl md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            The ANIDEV difference
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Built around people.
            <span className="block text-blue-700">Designed for what&apos;s next.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            We bring skilled African talent, thoughtful technology, and dependable delivery
            together to help ambitious teams move forward.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
          <div className="group relative min-h-[420px] overflow-hidden rounded-[1.75rem] bg-slate-900 shadow-xl shadow-slate-900/10 sm:min-h-[500px]">
            <img
              src={teamPhoto}
              alt="African technology professionals collaborating in their workspace"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                Talent with purpose
              </span>
              <h3 className="mt-4 max-w-md text-2xl font-semibold leading-snug text-white sm:text-3xl">
                Local expertise.
                <br />
                Global perspective.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
                We create meaningful opportunities while helping organizations access the skills
                they need to grow.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, desc }, index) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/[0.06] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold tracking-wider text-slate-300">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
              </article>
            ))}

            <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 p-6 text-white shadow-lg shadow-blue-900/15 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8">
              <div>
                <p className="text-lg font-semibold">Let&apos;s make progress together.</p>
                <p className="mt-1 text-sm text-blue-100">
                  Discover how our team can support your next step.
                </p>
              </div>
              <Link
                to="/services"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-800 sm:mt-0"
              >
                Explore our services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
