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
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-8">
          Trusted global partners working together with{' '}
          <span className="font-bold text-blue-600">ANIDEV TECHNOLOGIES</span>{' '}
          every day.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map(({ name, abbr }) => (
            <div
              key={name}
              className="text-gray-400 hover:text-blue-600 transition-colors flex items-center justify-center w-full h-16"
            >
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-50 transition-colors flex items-center justify-center">
                  <span className="text-sm font-bold">{abbr}</span>
                </div>
                <span className="text-xs font-semibold">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
