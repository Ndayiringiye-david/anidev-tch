import { Link } from 'react-router-dom'
import { Award, Users, Globe, CheckCircle2, TrendingUp } from 'lucide-react'
import aboutLeft from '../../assets/about-left.png'
import medals from '../../assets/medals.png'
import visionVector from '../../assets/vision_vector.png'
import techImg from '../../assets/tech-img.png'
import whyChooseUs from '../../assets/why_choose_us.png'
import rwandaBuilding from '../../assets/stroke_rwanda_building.svg'
import lines from '../../assets/about-section-lines.png'

const ceo = '/Images/ceo.png'
const T = 'https://storage.solvit.africa/solvit/solvit/legacy/team/'

function LinkedinIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '2000+', label: 'Students Trained' },
  { value: '50+', label: 'Students Trained' },
  { value: '83%', label: 'Job Placement' },
]

const pillars = [
  {
    icon: Award,
    title: 'Quality and Reliability',
    text: 'Delivering world-class service by investing in state-of-the-art technology, continuous training, and international certifications.',
    points: ['State-of-the-art technology', 'Continuous training programs', 'International certifications'],
  },
  {
    icon: Users,
    title: 'Customized Development',
    text: 'Building a skilled workforce through partnerships with local universities, technical institutions, and global training providers.',
    points: ['University partnerships', 'Technical institutions', 'Global training providers'],
  },
  {
    icon: Globe,
    title: 'Market Integration',
    text: 'Establishing direct channels to European and U.S. markets through strategic partnerships, compliance with international data security standards (such as GDPR), and a client-centric operating model.',
    points: ['Strategic partnerships', 'GDPR compliance', 'Client-centric model'],
  },
]

const team = [
  { name: 'David Ndayiringiye', role: 'Visionary Leader', img: T + '1739489720775-03786e43-4209-45b9-9d2a-f0516fdcbf03.jpeg', link: 'https://www.linkedin.com/in/ndayiringiye-david-2aa403326//' },
  { name: 'TWIZERIMANA Vicent', role: 'Legal Affairs and Executive Coordinator', img: T + 'WhatsApp_Image_2025-07-23_at_11.01.50-10dcd3b9-91ee-44da-af0b-d4ceed8f9d7c.jpeg', link: 'https://www.linkedin.com/in/agashumbusho-merci-b50839256/' },
  { name: 'AIMABLE Rutaha', role: 'Chief Operating Officer', img: T + 'My_Picture-d15a9457-7ea4-4300-8090-f98b18592e86.jpeg', link: 'https://www.linkedin.com/in/uwayo-emmanuel-39bab51a2/' },
  { name: 'NSHIMIYIMANA Keffa', role: 'Project Manager', img: T + 'WhatsApp_Image_2026-03-09_at_10.49.44-a3d07cdc-c0a0-4549-b6a6-e45be5caf1ed.jpeg', link: 'https://www.linkedin.com/in/gloria-uwamahoro-014126195/' },
  { name: 'NDACYAYISENGA Fabrice', role: 'Senior Software Engineer', img: T + 'WhatsApp_Image_2025-07-23_at_16.18.35_2-d53e70f0-ea4c-4149-ba60-f8de8b3fe917.jpeg', link: 'https://www.linkedin.com/in/fabrice-ndacyayisenga/' },
  { name: 'Jambo Habimana Florbert', role: 'Senior Software Engineer', img: T + 'WhatsApp_Image_2025-07-23_at_16.18.35_3-5eac6055-0549-4249-b594-4c97b8b585d0.jpeg', link: 'https://www.linkedin.com/in/jambo-florbert-b30ba11ab/' },
  { name: 'Queen Joelle Kamanzi Hirwe', role: 'Soft Skills Trainer - Facilitator', img: T + 'WhatsApp_Image_2025-07-23_at_16.18.33-124bc58e-e0a7-48f9-9abe-6828389c05c4.jpeg', link: 'https://www.linkedin.com/in/queen-joelle/' },
]

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-primary text-white py-16 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We are?</h1>
              <p className="text-lg md:text-xl leading-relaxed text-white">
                Anidev Technologies connects global businesses with Africa’s young, skilled, and multilingual workforce delivering reliable, innovative BPO solutions that drive growth and transformation. Together, we’re shaping Rwanda into a global hub for quality outsourcing.
              </p>
            </div>
            <div className="relative h-72 overflow-hidden rounded-2xl shadow-2xl md:h-80">
              <img src={whyChooseUs} alt="Anidev team presentation" className="absolute inset-0 h-full w-full object-cover object-top" />
              <img src={rwandaBuilding} alt="" className="absolute bottom-0 left-4 h-20 w-40 object-contain opacity-25" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-blue-400 opacity-15 rounded-b" />
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-7 gap-12 items-center">
            <div className="relative md:col-span-3 h-[500px] overflow-hidden">
              <div className="ml-8 h-[500px] overflow-hidden rounded-tr-[100px] rounded-br-[100px] rounded-bl-[120px]">
                <img src={aboutLeft} alt="Students learning and working together" className="h-full w-full object-cover" />
              </div>
              <div className="absolute top-[11rem] -left-[40px] w-[100px] h-14 bg-primary" style={{ clipPath: 'polygon(1% 0px, 100% 0px, 100% 100%)' }} />
              <div className="absolute top-[3rem] left-0 bg-primary text-white p-4 z-20">
                <div className="text-center">
                  <img src={medals} alt="" className="mx-auto mb-2 h-10 w-10" />
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs opacity-90">Working Experience</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-2 z-10 h-[180px] w-[280px] overflow-hidden rounded-tl-[100px] rounded-br-[100px] rounded-bl-[100px] border-8 border-white bg-white shadow-lg">
                <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Collaborative workspace" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="md:col-span-4 md:ml-8">
              <div className="inline-block bg-primary-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">OUR STORY</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">ANIDEV TECHNOLOGIES Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                   ANIDEV TECHNOLOGIES was co-founded by visionary entrepreneur <b>David Ndayiringiye</b> to bridge the gap between Africa’s untapped talent potential and the global demand for skilled professionals. Built on the belief that Africa’s youthful energy can power the world’s digital future, Anidev Technologies is redefining how outsourcing is done on the continent.
                </p>
                <p>
                  With over <b>a billion people, 60% under the age of 25</b>, Africa holds an immense reservoir of capable, ambitious talent. Yet, many remain disconnected from global opportunities. Anidev Technologies changes that by equipping young professionals with <b>industry-relevant skills</b> and linking them directly to international companies in need of reliable, cost-effective expertise. From its base in <b>Rwanda</b>, one of Africa’s fastest-growing and most connected economies, Anidev Technologies is pioneering a new era of <b>smart outsourcing</b>, one that delivers high-quality results for businesses while creating meaningful careers for Africa’s youth.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute bottom-0 left-20 h-px w-40 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50" />
      </section>

      {/* Milestones */}
      <section className="py-16 relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${lines})`, backgroundPosition: 'center' }} />
        <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary-50 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-gray-50">
              MILESTONES &amp; ACHIEVEMENTS
            </div>
            <p className="text-gray-700 max-w-2xl mx-auto">These numbers represent real lives transformed and careers launched across Africa.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white">
            {stats.map((s, i) => (
              <div key={i} className="text-center border border-blue-400 rounded-md py-3">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{s.value}</div>
                <div className="text-primary-600 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full transform -translate-x-24 translate-y-24" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="relative group">
              <div className="bg-[#01206E] rounded-2xl p-8 md:p-10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl min-h-[380px] flex flex-col items-start justify-between relative overflow-hidden">
                  <div aria-hidden="true" className="absolute top-0 right-0 h-[120px] w-[230px]" style={{ backgroundImage: `url(${visionVector})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
                <div className="flex items-center mb-6 relative z-10">
                  <div className="bg-[#BFD0FC]/20 px-4 py-2 rounded-[50px]">
                    <span className="text-sm font-semibold text-white">OUR MISSION</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight z-10 relative">
                  We create pathways for Africa’s youth to thrive in the global digital economy while helping companies scale efficiently and responsibly.
                </h3>
                <div className="h-2 bg-gradient-to-r w-20 from-blue-400 to-primary-600 rounded-full" />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-40" />
              <div className="bg-white border border-white/20 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl min-h-[380px] flex flex-col items-start justify-between relative overflow-hidden">
                <div aria-hidden="true" className="absolute top-0 right-0 h-[120px] w-[230px]" style={{ backgroundImage: `url(${visionVector})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
                <div className="flex items-center mb-6 relative z-10">
                  <div className="bg-[#BFD0FC]/20 px-4 py-2 rounded-[50px] border border-primary-900">
                    <span className="text-sm font-semibold text-primary">OUR VISION</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-primary relative z-10">
                  To transform Africa’s potential into global progress through inclusive, future-ready outsourcing.
                </h3>
                <div className="h-2 bg-gradient-to-r w-20 from-blue-400 to-primary-600 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-semibold text-primary bg-[#BFD0FC]/20 px-4 py-2 rounded-[50px] w-fit mx-auto mb-6">Our Core Pillars</div>
            <p className="text-gray-600 mb-4 max-w-md mx-auto">
              Our approach is grounded in three key pillars that drive excellence and innovation across all our operations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map(({ icon: Icon, title, text, points }) => (
              <div key={title} className="group">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary hover:shadow-xl transition-all duration-300 md:h-[450px]">
                  <div className="bg-primary text-white w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
                  <p className="text-gray-600 mb-6">{text}</p>
                  <ul className="space-y-3">
                    {points.map((p) => (
                      <li key={p} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO quote */}
      <section className="py-16 md:py-24 bg-[#03174B] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-0 h-[300px] w-[500px] opacity-90" style={{ backgroundImage: `url(${techImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'left top' }} />
        <div className="absolute bottom-0 right-0 h-[300px] w-[500px] rotate-180 opacity-90" style={{ backgroundImage: `url(${techImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} />
        <div aria-hidden="true" className="absolute -left-20 -top-24 h-80 w-80 rounded-full border border-cyan-300/10" />
        <div aria-hidden="true" className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full border border-cyan-300/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <blockquote className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed">
            “Africa’s young workforce is the continent’s greatest asset—equipped with the right skills, they can meet global business demand and transform the labor market.”
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-[80px] w-[80px] overflow-hidden rounded-full border-2 border-white/30 shadow-lg">
              <img src={ceo} alt="David Ndayiringiye" className="h-full w-full object-cover" />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg">David Ndayiringiye</p>
              <p className="text-primary-200 text-sm">CEO &amp; Founder, ANIDEV TECHNOLOGIES</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="inline-block text-primary text-sm font-semibold bg-[#BFD0FC]/20 px-4 py-2 rounded-[50px] mb-6">MEET OUR TEAM</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Meet The People Behind</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Our team is made up of global talent innovators and dedicated professionals shaping Africa's BPO future.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="group relative">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-[280px] overflow-hidden">
                    <img src={m.img} alt={m.name} className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="text-white relative">
                    <div className="absolute bottom-0 h-[130px] bg-primary w-full" style={{ clipPath: 'polygon(0px 18%, 100% 0px, 100% 100%, 0% 100%)' }} />
                    <div className="p-6 relative">
                      <h3 className="text-xl font-bold mb-1">{m.name}</h3>
                      <p className="text-primary-100 text-sm">{m.role}</p>
                      <a
                        href={m.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -top-6 right-6 -translate-y-1/2 bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors border-4 border-primary-900"
                      >
                        <LinkedinIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing banner */}
      <section className="py-16 md:py-24 bg-[#03174B] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <div className="md:text-xl font-normal mb-4">
                By equipping young Africans with in-demand skills, Anidev Technologies transforms the continent’s workforce into a reliable, skilled talent pool. We connect this top talent to global markets, offering businesses scalable outsourcing solutions.
              </div>
            </div>
            <div className="md:w-1/3 flex md:justify-end">
              <Link
                to="/contact"
                className="text-white px-8 py-4 rounded-[40px] font-semibold transition-colors whitespace-nowrap flex items-center space-x-2 border border-white hover:bg-white/10"
              >
                <span>Book Consultation</span>
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}