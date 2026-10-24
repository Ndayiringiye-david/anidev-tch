import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const articles = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Technology',
    title: 'Anidev Launches New AI-Powered Web Development Bootcamp',
    author: 'Anidev Team',
    date: '10/12/2026',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Innovation',
    title: 'Empowering Rwanda\'s Youth: Anidev\'s Collaboration with Digital Skills Programs',
    author: 'Sharon N.',
    date: '8/5/2026',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Success Story',
    title: 'Client Success Story: Building Africa\'s First EdTech Platform with Anidev',
    author: 'James M.',
    date: '7/15/2026',
  },
]

export default function NewsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-blue-600 font-semibold mb-2">LATEST NEWS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Checkout Our Latest News &amp;<br />Resources
            </h2>
          </div>
          <Link
            to="/insights"
            className="hidden md:flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            View All Articles <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map(({ id, image, tag, title, author, date }) => (
            <article key={id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <div className="relative overflow-hidden w-full" style={{ height: '250px' }}>
                  <img
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    src={image}
                  />
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                  {tag}
                </span>
              </div>
              <div className="px-6 py-4">
                <h3 className="font-bold text-lg mb-3 text-gray-900 line-clamp-2">{title}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span>By {author}</span>
                  <span className="mx-2">•</span>
                  <span>{date}</span>
                </div>
                <Link
                  to="/insights"
                  className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition"
                >
                  Read More <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile button */}
        <div className="mt-8 text-center md:hidden">
          <Link to="/insights" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            View All Articles <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
