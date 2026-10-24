import { Award, Network, Shield, Users, ChevronRight } from 'lucide-react'

const items = [
  { icon: Award, title: 'BootCamp Training', text: 'A driving force for talent development' },
  { icon: Network, title: 'Cisco Networking Academy Courses', text: 'Now a Cisco Academy, teaching the Cisco Networking Academy curricula' },
  { icon: Shield, title: 'Talent Outsourcing', text: 'Career Launch & Job Placement' },
  { icon: Users, title: 'Back-Office Operations.', text: 'Complete HR outsourcing including recruitment, payroll processing, and employee management.' },
]

export default function ValueProposition() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-500 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mt-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-white text-sm mb-6 bg-label/30 inline-block px-4 py-2 rounded-full font-semibold">
              Our Value Proposition
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What&apos;s Make Us Different</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              We combine the best of African talent, modern, creative innovation, and proven processes to deliver exceptional talent solutions that drive business growth.
            </p>
            <div className="space-y-6">
              {items.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start">
                  <div className="w-12 h-12 bg-primary-800 rounded flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{title}</h3>
                    <p className="text-primary-200 text-sm">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-primary-50 flex items-center transition-colors duration-300">
              Learn More <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
