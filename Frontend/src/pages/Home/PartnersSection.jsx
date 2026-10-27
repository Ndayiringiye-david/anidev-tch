import styles from './PartnersSection.module.css'

const partners = [
  { name: 'Microsoft', abbr: 'MS' },
  { name: 'Google', abbr: 'G' },
  { name: 'AWS', abbr: 'AWS' },
  { name: 'GitHub', abbr: 'GH' },
  { name: 'Vercel', abbr: 'VCL' },
  { name: 'Cisco', abbr: 'CSC' },
]

export default function PartnersSection() {
  return (
    <section className="overflow-hidden bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-gray-600">
          Trusted global partners working together with{' '}
          <span className="font-bold text-blue-600">ANIDEV TECHNOLOGIES</span>{' '}
          every day.
        </p>
        <div className={styles.viewport}>
          <div className={styles.track}>
            {[0, 1].map((group) => (
              <div
                key={group}
                className={styles.group}
                aria-hidden={group === 1 ? 'true' : undefined}
              >
                {partners.map(({ name, abbr }) => (
                  <div key={name} className={styles.partner}>
                    <div className={styles.badge}>
                      <span className="text-base font-bold">{abbr}</span>
                    </div>
                    <span className="text-sm font-semibold">{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
