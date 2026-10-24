import { Check, ChevronRight } from 'lucide-react'
import aboutLeft from '../../assets/about-left.png'
import medals from '../../assets/medals.png'
import bothHands from '../../assets/both-hands.svg'
import aboutLines from '../../assets/about-section-lines.png'

const points = [
  "Bridging global businesses with Africa's talent",
  'Innovation-driven, tech-enabled services',
  'Creating jobs & skills for youth',
  'Reliable, scalable, and cost-effective',
]

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div
        className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-contain bg-right-top bg-no-repeat"
        style={{ backgroundImage: `url(${aboutLines})` }}
      />
      <div className="max-w-7xl mx-auto px-0">
        <div className="grid md:grid-cols-7 gap-16 md:gap-20 items-center">
          <div className="md:col-span-3 relative h-[500px] overflow-hidden">
            <img src={aboutLeft} alt="Team collaboration" className="w-[80%] h-full object-cover ml-8 z-10 relative" />
            <div
              className="absolute top-[17rem] -left-[40px] w-[100px] h-14 bg-primary"
              style={{ clipPath: 'polygon(1% 0, 100% 0, 100% 100%)' }}
            />
            <div className="absolute top-40 left-0 bg-primary text-white p-4 z-20">
              <div className="text-center">
                <img src={medals} alt="Medals" className="w-10 h-10 mx-auto mb-2" />
                <div className="text-2xl font-bold">10+</div>
                <div className="text-xs opacity-90">Working Experience</div>
              </div>
            </div>
            <div className="absolute bottom-4 right-2 w-[280px] h-[180px] z-10 bg-white border-8 border-white shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-primary rounded-full p-3 relative group cursor-pointer" aria-label="Play video">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  <div className="absolute inset-0 rounded-full bg-primary animate-pulse opacity-50 group-hover:opacity-75" />
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 ml-8">
            <div className="inline-block bg-primary-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              WHO WE ARE
            </div>
            <h2 className="text-3xl md:text-4xl font-[500] mb-6 text-gray-900 max-w-[500px] leading-tight">
              Shaping Africa&apos;s <span className="text-primary">Digital Workforce</span>
            </h2>
            <p className="text-[#787A81] mb-6 leading-relaxed font-normal">
              <span className="font-semibold text-primary-900 mr-1">ANIDEV TECHNOLOGIES</span>
              is a Kigali-based BPO company connecting global businesses to Africa&rsquo;s digital talent. We deliver world-class outsourcing solutions while creating jobs and transforming lives.
            </p>
            <div className="bg-primary-50 rounded-lg mb-8 h-[1px] w-full" />
            <div className="flex flex-col md:flex-row md:space-x-6 w-full justify-between">
              <div className="space-y-3 mb-6">
                {points.map((p) => (
                  <div key={p} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-[#445375]">{p}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white shadow-md shadow-gray-200 mb-6 flex justify-center relative rounded-lg w-[40%] md:w-[250px]">
                <div className="absolute left-0 bg-primary-900 h-full w-[5px] rounded-l-lg" />
                <div className="p-2 flex items-center w-full">
                  <img src={bothHands} alt="Both Hands" className="w-10 h-20 mr-2" />
                  <div className="text-primary mb-1 text-center">
                    <span className="text-3xl text-gray-900 font-bold">1660 +</span>
                    <div className="text-gray-600 text-[14px] font-normal mt-4">Talents Outsourced</div>
                  </div>
                </div>
              </div>
            </div>
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-800 flex items-center">
              Discover more about our mission <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
