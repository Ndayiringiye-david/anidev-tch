import { useState } from 'react'
import { Menu, ChevronDown } from 'lucide-react'
import heroBg from '../../assets/hero.png'
import imgA from '../../assets/HerosectionImage.png'
import imgB from '../../assets/convetional.jpg'
import imgC from '../../assets/about-left.png'
import imgD from '../../assets/why_choose_us.png'
import imgE from '../../assets/about_top-header.png'

const categories = ['All', 'Career', 'Tech', 'Inspiration', 'Community']
const PER_PAGE = 8

// Edit this list to change the posts. "featured: true" shows the post in the Featured section.
const posts = [
  { id: 1, featured: true, category: 'Inspiration', readTime: '5 min read', img: imgA, title: 'From Classroom to Global Client: A Graduate Story', excerpt: 'How one young professional turned practical training and mentorship into a career serving international clients from Kigali.', author: 'Anidev Technologies', date: 'October 14, 2026' },
  { id: 2, featured: true, category: 'Career', readTime: '6 min read', img: imgB, title: 'Building a Future-Ready Outsourcing Workforce in Rwanda', excerpt: 'Why skills, certifications and a client-first mindset are shaping Rwanda into a hub for quality outsourcing.', author: 'Anidev Technologies', date: 'September 29, 2026' },
  { id: 3, featured: false, category: 'Tech', readTime: '7 min read', img: imgC, title: 'Bootcamp Graduation: Celebrating Our Latest Cohort', excerpt: 'We celebrated the successful completion of an intensive preparatory phase with a cohort known for its energy and commitment.', author: 'Anidev Technologies', date: 'September 18, 2026' },
  { id: 4, featured: false, category: 'Community', readTime: '5 min read', img: imgD, title: 'Disability Inclusion Capacity Building Session', excerpt: 'A practical session on inclusive principles, designed to open equal opportunities for every learner and professional.', author: 'Anidev Technologies', date: 'September 5, 2026' },
  { id: 5, featured: false, category: 'Inspiration', readTime: '7 min read', img: imgE, title: 'Alumni Return to Inspire the Next Generation', excerpt: 'Former trainees came back to share their journey from learner to professional, and to encourage the current cohort.', author: 'Anidev Technologies', date: 'August 22, 2026' },
  { id: 6, featured: false, category: 'Community', readTime: '6 min read', img: imgA, title: 'Three Days of Innovation, Networking and Discovery', excerpt: 'Our cohort explored cutting-edge technology and met industry leaders, returning more confident and ready to grow.', author: 'Anidev Technologies', date: 'August 10, 2026' },
  { id: 7, featured: false, category: 'Community', readTime: '6 min read', img: imgB, title: 'Life-Saving Skills: First Aid Training for the Team', excerpt: 'A hands-on first-aid session gave participants and staff vital skills they can use in everyday life.', author: 'Anidev Technologies', date: 'July 28, 2026' },
  { id: 8, featured: false, category: 'Tech', readTime: '4 min read', img: imgC, title: 'Empowering Young Women in Digital Health Innovation', excerpt: 'A workshop on how digital tools are changing health services, and how young people can help build them.', author: 'Anidev Technologies', date: 'July 15, 2026' },
  { id: 9, featured: false, category: 'Career', readTime: '6 min read', img: imgD, title: 'Tips for Young Women on Being Tech Savvy', excerpt: 'Practical advice on closing the gender gap in technology through digital skills, entrepreneurship and capacity building.', author: 'Anidev Technologies', date: 'June 30, 2026' },
  { id: 10, featured: false, category: 'Inspiration', readTime: '7 min read', img: imgE, title: 'Coding Her Future: A Bootcamp Journey', excerpt: 'Six months ago coding felt out of reach. This is the story of how steady practice and support changed everything.', author: 'Anidev Technologies', date: 'June 12, 2026' },
  { id: 11, featured: false, category: 'Career', readTime: '5 min read', img: imgA, title: 'How to Prepare for Your First Remote Job', excerpt: 'Communication, time management and the habits that help new professionals succeed with global teams.', author: 'Anidev Technologies', date: 'May 27, 2026' },
  { id: 12, featured: false, category: 'Tech', readTime: '6 min read', img: imgB, title: 'Why Data Security Matters in Outsourcing', excerpt: 'An introduction to the standards and daily practices that keep client data safe across borders.', author: 'Anidev Technologies', date: 'May 9, 2026' },
]

export default function InsightsPage() {
  const [active, setActive] = useState('All')
  const [page, setPage] = useState(1)
  const [menuOpen, setMenuOpen] = useState(false)

  const featured = posts.filter((p) => p.featured)
  const latestAll = posts.filter((p) => !p.featured)
  const latest = active === 'All' ? latestAll : latestAll.filter((p) => p.category === active)
  const pages = Math.max(1, Math.ceil(latest.length / PER_PAGE))
  const visible = latest.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const chooseCategory = (c) => {
    setActive(c)
    setPage(1)
    setMenuOpen(false)
  }

  const goToPage = (n) => {
    setPage(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gray-900 py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary transform skew-x-12 origin-top-right opacity-80" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Insights &amp; News</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Stories, tips, and insights from the Anidev Technologies community</p>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b border-gray-200 sticky top-20 bg-white z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4">
          <div className="sm:hidden relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              className="flex w-full items-center justify-between gap-3 rounded-full bg-gray-100 px-4 py-2 text-gray-800 font-medium"
            >
              <span className="flex items-center gap-3">
                <Menu className="w-5 h-5" />
                {active}
              </span>
              <ChevronDown className={'w-[18px] h-[18px] transition-transform ' + (menuOpen ? 'rotate-180' : '')} />
            </button>
            {menuOpen && (
              <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => chooseCategory(c)}
                    className={'block w-full text-left px-4 py-2 text-sm ' + (active === c ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100')}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden sm:flex gap-3 overflow-x-auto">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => chooseCategory(c)}
                className={'px-4 py-2 rounded-full whitespace-nowrap transition-all ' + (active === c ? 'bg-primary text-white scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-12 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-primary" />
            <h2 className="text-2xl font-bold text-gray-800">Featured</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((p) => (
              <article key={p.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-primary text-xs font-bold rounded-full">{p.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{p.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {p.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{p.author}</p>
                        <p className="text-xs text-gray-500">{p.date}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{p.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-primary" />
              <h2 className="text-2xl font-bold text-gray-800">Latest Posts</h2>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap">{latest.length} posts</span>
          </div>

          {visible.length === 0 ? (
            <p className="text-center text-gray-500 py-16">No posts in this category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((p) => (
                <article
                  key={p.id}
                  className="group h-full flex flex-col bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-primary uppercase">{p.category}</span>
                      <span className="text-xs text-gray-400">&bull;</span>
                      <span className="text-xs text-gray-500">{p.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{p.excerpt}</p>
                    <div className="mt-auto flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                        {p.author.charAt(0)}
                      </div>
                      <span className="text-xs text-gray-600">{p.author}</span>
                      <span className="text-xs text-gray-400">&bull;</span>
                      <span className="text-xs text-gray-500">{p.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {pages > 1 && (
            <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Insights pagination">
              <button
                disabled={page === 1}
                onClick={() => goToPage(page - 1)}
                className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Previous
              </button>
              {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => goToPage(n)}
                  aria-current={n === page ? 'page' : undefined}
                  className={'w-10 h-10 rounded-lg text-sm font-medium transition-all ' + (n === page ? 'bg-primary text-white' : 'border border-gray-200 text-gray-700 hover:border-primary hover:text-primary')}
                >
                  {n}
                </button>
              ))}
              <button
                disabled={page === pages}
                onClick={() => goToPage(page + 1)}
                className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Next
              </button>
            </nav>
          )}
        </div>
      </section>
    </main>
  )
}