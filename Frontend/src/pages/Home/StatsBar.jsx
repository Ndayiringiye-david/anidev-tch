import { useLocale } from '../../i18n/LocaleContext'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '120+', label: 'Projects Delivered' },
  { value: '30+', label: 'Partner Companies' },
  { value: '98%', label: 'Client Satisfaction' },
]

export default function StatsBar() {
  const { t } = useLocale()

  return (
    <section className="text-white">
      <div className="py-12 bg-blue-600 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{value}</div>
              <div className="text-sm md:text-base text-blue-100">{t(label)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
