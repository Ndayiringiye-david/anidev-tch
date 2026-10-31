import { BrainCircuit, ChartNoAxesCombined, Handshake, Check } from 'lucide-react'
import { useLocale } from '../../i18n/LocaleContext'

const cards = [
  {
    icon: BrainCircuit,
    title: 'We Are Current with Trending Technologies',
    desc: 'We continuously upskill in AI, cloud, React, Node.js, and more — ensuring our solutions stay innovative, competitive, and future-ready for every client.',
    bullets: ['Continuous Learning', 'Certified Expertise', 'Modern Tools', 'Scalable Innovation'],
  },
  {
    icon: ChartNoAxesCombined,
    title: 'We Are Efficient and Cost-Effective',
    desc: 'Through smart delivery practices and Africa\'s skilled talent pool, we help businesses scale faster while significantly reducing costs and maintaining top quality.',
    bullets: ['Smart Operations', 'Optimized Resources', 'Scalable Solutions'],
  },
  {
    icon: Handshake,
    title: 'We Go the Extra Mile for Our Clients',
    desc: 'Scale your product without the overhead. Get top engineering talent at competitive rates while we ensure compliance and long-term satisfaction.',
    bullets: ['Ongoing Support', 'Performance Tracking', 'Cultural Alignment', 'Client Satisfaction'],
  },
]

export default function ChooseUsSection() {
  const { t } = useLocale()

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {t('Why CHOOSE ANIDEV TECHNOLOGIES?')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t("We're more than a development agency. We're your end-to-end partner for building and scaling world-class digital products across Africa and beyond.")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map(({ icon: Icon, title, desc, bullets }) => (
            <div
              key={title}
              className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-600 hover:shadow-2xl transition-all group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 mb-6">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t(title)}</h3>
              <p className="text-gray-600 mb-6">{t(desc)}</p>
              <ul className="space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700">{t(b)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
