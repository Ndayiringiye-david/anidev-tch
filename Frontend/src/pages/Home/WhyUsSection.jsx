import { Award, Network, Shield, Users, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: Award,
    title: 'Cutting-Edge Tech Stack',
    desc: 'A driving force for digital product development',
  },
  {
    icon: Network,
    title: 'Agile & Scalable Delivery',
    desc: 'Fast turnaround with modern agile methodologies',
  },
  {
    icon: Shield,
    title: 'Full-Stack Development',
    desc: 'Web, mobile, backend, cloud — all under one roof',
  },
  {
    icon: Users,
    title: 'Dedicated Client Support',
    desc: 'Long-term partnership with transparent communication',
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white relative overflow-hidden">
      {/* Right glow */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/20 to-transparent" />
      </div>
      {/* Decorative bottom-left */}
      <div className="absolute bottom-0 left-0 w-[40%] hidden lg:block opacity-10">
        <svg viewBox="0 0 400 400" className="w-full">
          <rect x="50" y="50" width="300" height="200" rx="10" fill="none" stroke="white" strokeWidth="2" />
          <rect x="80" y="100" width="80" height="100" rx="5" fill="none" stroke="white" strokeWidth="1.5" />
          <rect x="180" y="80" width="140" height="120" rx="5" fill="none" stroke="white" strokeWidth="1.5" />
          <line x1="0" y1="300" x2="400" y2="300" stroke="white" strokeWidth="1" />
          <line x1="200" y1="250" x2="200" y2="400" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mt-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <p className="text-white text-sm mb-6 bg-white/20 inline-block px-4 py-2 rounded-full font-semibold">
              Our Value Proposition
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Makes Us Different</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              We combine the best of African talent, modern creative innovation, and proven delivery processes to build exceptional digital products that drive business growth.
            </p>

            <div className="space-y-6">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start">
                  <div className="w-12 h-12 bg-blue-800 rounded flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{title}</h3>
                    <p className="text-blue-200 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/services"
              className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 flex items-center w-fit transition-colors duration-300"
            >
              Learn More <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Right image */}
          <div className="hidden lg:block">
            <div className="bg-white/10 rounded-lg border border-white/20 shadow-lg overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-white/60 p-8">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium">Professional Team at Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
