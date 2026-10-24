import { useState } from 'react'
import { Users, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const tabs = {
  talents: {
    title: 'Join Anidev & Launch Your Global Tech Career',
    subtitle: 'The platform that equips you with in-demand skills and connects you to top employers across Africa and beyond.',
    steps: [
      {
        num: '1',
        title: 'Sign Up & Create Profile',
        desc: 'Register and showcase your skills, experience, and career goals',
      },
      {
        num: '2',
        title: 'Get Trained & Certified',
        desc: 'Access industry-relevant training programs to enhance your tech skills',
      },
      {
        num: '3',
        title: 'Connect with Employers',
        desc: 'Get matched with global companies seeking your expertise',
      },
    ],
    cta: { label: 'Start Your Journey', href: '/contact' },
  },
  business: {
    title: 'Scale Your Business with Anidev Technologies',
    subtitle: 'From web apps to mobile solutions — we build the digital products your business needs to grow.',
    steps: [
      {
        num: '1',
        title: 'Share Your Requirements',
        desc: 'Tell us your project goals, timeline, and tech stack preferences',
      },
      {
        num: '2',
        title: 'We Build Your Team',
        desc: 'We match you with the right developers and begin building immediately',
      },
      {
        num: '3',
        title: 'Launch & Scale',
        desc: 'Deploy your product and scale with ongoing support and maintenance',
      },
    ],
    cta: { label: 'Start a Project', href: '/contact' },
  },
}

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState('talents')
  const tab = tabs[activeTab]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-6 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Work With Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works?</h2>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab('talents')}
              className={`px-8 py-3 rounded-full font-semibold flex items-center transition ${
                activeTab === 'talents'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <Users className="mr-2 w-5 h-5" /> For Talents
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`px-8 py-3 rounded-full font-semibold flex items-center transition ${
                activeTab === 'business'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <Building2 className="mr-2 w-5 h-5" /> For Business
            </button>
          </div>
        </div>

        {/* Dark card */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute bottom-0 right-0 w-1/2 hidden lg:block opacity-10 pointer-events-none">
            <svg viewBox="0 0 300 300" className="w-full">
              {[0,30,60,90,120].map(i => (
                <circle key={i} cx="300" cy="300" r={50+i} fill="none" stroke="white" strokeWidth="1" />
              ))}
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-1/2 scale-x-[-1] hidden lg:block opacity-10 pointer-events-none">
            <svg viewBox="0 0 300 300" className="w-full">
              {[0,30,60,90,120].map(i => (
                <circle key={i} cx="0" cy="300" r={50+i} fill="none" stroke="white" strokeWidth="1" />
              ))}
            </svg>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">{tab.title}</h3>
            <p className="text-lg text-blue-100 mb-8 text-center">{tab.subtitle}</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {tab.steps.map(({ num, title, desc }) => (
                <div key={num} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">{num}</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{title}</h4>
                  <p className="text-blue-100 text-sm">{desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to={tab.cta.href}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
              >
                {tab.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
