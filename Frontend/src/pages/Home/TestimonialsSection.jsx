import { useState } from 'react'
import { Star, Quote, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote: 'James Mwangi is a young web developer from Kenya whose journey reflects the true impact of Anidev\'s training programs. After completing our Full-Stack Bootcamp in 2025, he built his first SaaS product and secured his first client within 3 months.\n\nThe experience opened doors he never imagined. James now works as a Junior Developer at a fintech startup in Nairobi, contributing to products that serve thousands of customers daily. His story is a powerful example of how Anidev bridges the gap between education and meaningful tech employment.',
    author: 'James Mwangi',
    role: 'Full-Stack Developer · FinTech Nairobi',
  },
  {
    id: 2,
    rating: 5,
    quote: 'Working with Anidev Technologies was a game-changer for our business. They delivered our e-commerce platform on time and within budget. The team\'s communication was excellent throughout the project, and the final product exceeded all our expectations.\n\nWe\'ve seen a 40% increase in online sales since launching the new platform. I highly recommend Anidev to any business looking for reliable, skilled tech partners.',
    author: 'Sarah Okonkwo',
    role: 'CEO · RetailHub Africa',
  },
  {
    id: 3,
    rating: 5,
    quote: 'Anidev helped us build our mobile app from scratch. Their React Native expertise was outstanding, and they guided us through every technical decision. The app launched with zero critical bugs and received excellent reviews from our users.\n\nThe ongoing support they provide is exceptional. They respond quickly and proactively identify issues before they become problems.',
    author: 'Dr. Emmanuel Kagabo',
    role: 'Founder · HealthTech Rwanda',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section aria-labelledby="testimonials-heading" className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 py-20 text-white md:py-28">
      {/* Right decorative shape */}
      <div className="pointer-events-none absolute -right-24 top-0 hidden w-1/2 opacity-10 lg:block">
        <svg viewBox="0 0 400 400" className="w-full">
          {[0,30,60,90,120].map(i => (
            <circle key={i} cx="200" cy="200" r={100+i} fill="none" stroke="white" strokeWidth="1" />
          ))}
        </svg>
      </div>
      {/* Left blur */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-wider text-blue-200">Testimonials</p>
            <h2 id="testimonials-heading" className="mt-3 text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem]">
              What Our Partners Say About Us
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-blue-100">
              Discover how Anidev Technologies empowers developers to thrive and helps businesses build the products they envision.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Rating badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 text-sm backdrop-blur-sm">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-bold tabular-nums">5.0</span>
              <span className="text-blue-200">· {testimonials.length} stories</span>
            </span>

            {/* Nav arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-blue-600 focus-visible:outline-none active:scale-95"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-blue-600 focus-visible:outline-none active:scale-95"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <Link
              to="/testimonials"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-600 shadow-lg transition-colors hover:bg-blue-50"
            >
              Read all stories
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Card */}
        <div className="mt-12">
          <figure className="flex h-full flex-col rounded-3xl bg-white p-7 text-gray-900 shadow-xl shadow-blue-900/20 sm:p-8 max-w-2xl">
            {/* Stars + quote icon */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5" role="img" aria-label={`Rating: ${t.rating}/5`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote className="ml-auto h-8 w-8 -scale-x-100 fill-blue-100 text-blue-100" />
            </div>

            {/* Quote */}
            <blockquote className="mt-5 flex-1">
              <p className="line-clamp-6 whitespace-pre-line leading-relaxed text-gray-700">
                {t.quote}
              </p>
              <Link
                to="/testimonials"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline"
              >
                Read the full story <ArrowRight className="h-4 w-4" />
              </Link>
            </blockquote>

            {/* Author */}
            <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
              <span className="relative inline-flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-50 to-blue-100 text-sm font-semibold text-blue-700 ring-4 ring-blue-50">
                {t.avatar
                  ? <img alt={t.author} className="h-full w-full object-cover" src={t.avatar} />
                  : <span aria-hidden="true">{t.author.split(' ').map(n => n[0]).join('')}</span>
                }
                {!t.avatar && <span className="sr-only">{t.author}</span>}
              </span>
              <div className="min-w-0">
                <p className="truncate font-semibold text-gray-900">{t.author}</p>
                <p className="truncate text-sm text-gray-500">{t.role}</p>
              </div>
            </figcaption>
          </figure>

          {/* Dots */}
          <div className="flex items-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`inline-block h-2 cursor-pointer rounded-full bg-white/35 transition-all duration-300 hover:bg-white/60
                  ${i === current ? 'w-8 bg-white' : 'w-2'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
