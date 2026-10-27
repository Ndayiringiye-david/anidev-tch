import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  Code2,
  GraduationCap,
  Handshake,
  Lightbulb,
  UsersRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const partnershipTypes = [
  {
    icon: UsersRound,
    title: 'Talent partnerships',
    description:
      'Connect your team with skilled professionals and build the capacity to take on what comes next.',
    detail: 'Sourcing · Team extension · Talent development',
  },
  {
    icon: GraduationCap,
    title: 'Learning partnerships',
    description:
      'Create practical learning opportunities that help people grow relevant skills and move into tech careers.',
    detail: 'Training · Mentorship · Career pathways',
  },
  {
    icon: Code2,
    title: 'Technology partnerships',
    description:
      'Work alongside a delivery partner to shape, build, and support digital products for your organization.',
    detail: 'Product delivery · Engineering · Support',
  },
  {
    icon: Lightbulb,
    title: 'Ecosystem partnerships',
    description:
      'Bring complementary ideas and expertise together to create more opportunity across the tech ecosystem.',
    detail: 'Community · Knowledge sharing · Initiatives',
  },
]

const principles = [
  'Start with your goals, not a one-size-fits-all package',
  'Agree on clear responsibilities and practical next steps',
  'Build a relationship around open communication',
]

const steps = [
  {
    number: '01',
    title: 'Tell us what you have in mind',
    description: 'Share your goals, the people involved, and the kind of collaboration you are exploring.',
  },
  {
    number: '02',
    title: 'Shape the right approach',
    description: 'We will discuss where our capabilities align and outline a practical way to work together.',
  },
  {
    number: '03',
    title: 'Make progress together',
    description: 'Agree on clear next steps, keep communication open, and build from there.',
  },
]

export default function PartnershipPage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative isolate bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(37,99,235,0.28),transparent_42%),linear-gradient(120deg,#071426_0%,#0b1c34_55%,#102b54_100%)]" />
        <div className="absolute -right-36 top-12 -z-10 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-20 top-28 -z-10 h-64 w-64 rounded-full border border-white/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-100">
              <Handshake className="h-4 w-4" aria-hidden="true" />
              Let&apos;s build something meaningful
            </div>
            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Better outcomes
              <span className="block text-blue-300">start with</span>
              the right partnership.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              We work with organizations that want to grow talent, deliver technology, and create
              more opportunity. Bring us your goals; we&apos;ll explore the best way to work together.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#partnership-paths"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore partnership paths
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                Collaborative by design
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                Built around your goals
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/10 blur-2xl" />
            <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-blue-200">A shared starting point</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">What can we do together?</h2>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-400/15 text-blue-200">
                  <Building2 className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Every organization brings a different challenge. We start by understanding yours,
                then find a practical way to combine our strengths.
              </p>
              <div className="mt-7 space-y-3">
                {[
                  'Grow and develop talent',
                  'Deliver digital products',
                  'Create new learning opportunities',
                  'Strengthen the tech ecosystem',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-slate-950/20 px-4 py-3 text-sm text-slate-100"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-sm leading-6 text-slate-300">
                  Not sure where to begin? That&apos;s a good place to start the conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partnership-paths" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
              Ways to work together
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              A partnership that fits your ambition
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Whether you are looking to develop people, deliver a product, or explore a new
              initiative, we can shape the collaboration around what you want to achieve.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {partnershipTypes.map(({ icon: Icon, title, description, detail }) => (
              <article
                key={title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 min-h-[5.5rem] text-sm leading-6 text-slate-600">{description}</p>
                <p className="mt-5 border-t border-slate-100 pt-4 text-xs font-medium leading-5 text-slate-500">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
              A thoughtful approach
            </p>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Good partnerships are built on clarity and trust.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
              We believe the best collaborations begin with listening. Together, we can define a
              focused approach, set expectations, and keep the work moving with purpose.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:gap-3 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
            >
              Talk with our team
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
            <p className="text-sm font-semibold text-slate-900">What you can expect</p>
            <div className="mt-6 space-y-5">
              {principles.map((principle, index) => (
                <div key={principle} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700">
                    0{index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-6 text-slate-600">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
              The process
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              From first conversation to shared momentum
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="relative border-t border-slate-200 pt-6">
                <span className="text-sm font-semibold tracking-wide text-blue-600">{number}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-700 to-slate-900 px-6 py-12 text-white sm:px-12 sm:py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
                Your next step
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Have an idea for working together?
              </h2>
              <p className="mt-4 text-base leading-7 text-blue-100">
                Tell us a little about your organization and what you hope to achieve. We&apos;ll take
                it from there.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-blue-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-800"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
