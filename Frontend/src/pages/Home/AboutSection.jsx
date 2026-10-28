import { Check, ChevronRight, UsersRound } from 'lucide-react'
import { useLocale } from '../../i18n/LocaleContext'
import aboutLeft from '../../assets/about-left.png'
import aboutLines from '../../assets/about-section-lines.png'
import bothHands from '../../assets/both-hands.svg'
import medals from '../../assets/medals.png'

const points = [
  "Bridging global businesses with Africa's talent",
  'Innovation-driven, tech-enabled services',
  'Creating jobs & skills for youth',
  'Reliable, scalable, and cost-effective',
]

export function AboutSection() {
  const { t } = useLocale()

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div aria-hidden="true" className="absolute right-0 top-0 h-72 w-72 bg-contain bg-right-top bg-no-repeat opacity-50" style={{ backgroundImage: `url(${aboutLines})` }} />
      <div className="max-w-7xl mx-auto px-0">
        <div className="grid md:grid-cols-7 gap-16 md:gap-20 items-center">
          <div className="md:col-span-3 relative min-h-[500px] overflow-hidden">
            <div className="ml-8 h-[420px] overflow-hidden rounded-[2rem] shadow-xl shadow-blue-950/10">
              <img src={aboutLeft} alt="Students learning and working together at laptops" className="h-full w-full object-cover" />
            </div>
            <div
              className="absolute top-[17rem] -left-[40px] w-[100px] h-14 bg-primary"
              style={{ clipPath: 'polygon(1% 0, 100% 0, 100% 100%)' }}
            />
            <div className="absolute left-0 top-32 z-20 rounded-xl bg-primary p-4 text-white shadow-lg">
              <div className="text-center">
                <img src={medals} alt="" className="mx-auto mb-2 h-9 w-9" />
                <div className="text-2xl font-bold">10+</div>
                <div className="text-xs opacity-90">{t('Working Experience')}</div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 z-10 flex h-28 w-56 items-center gap-3 overflow-hidden rounded-2xl border-4 border-white bg-white p-4 shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaborating around a laptop"
                className="absolute inset-0 h-full w-full object-cover opacity-20"
              />
              <img src={bothHands} alt="" className="relative z-10 h-12 w-12 shrink-0 object-contain" />
              <div className="relative z-10 text-sm font-semibold leading-5 text-slate-800">
                {t('People-first')}
                <span className="block font-normal text-slate-500">{t('digital solutions')}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 ml-8">
            <div className="inline-block bg-primary-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {t('WHO WE ARE')}
            </div>
            <h2 className="text-3xl md:text-4xl font-[500] mb-6 text-gray-900 max-w-[500px] leading-tight">
              {t("Shaping Africa's")} <span className="text-primary">{t('Digital Workforce')}</span>
            </h2>
            <p className="text-[#787A81] mb-6 leading-relaxed font-normal">
              <span className="font-semibold text-primary-900 mr-1">ANIDEV TECHNOLOGIES</span>
              {t('is a Kigali-based BPO company connecting global businesses to Africa’s digital talent. We deliver world-class outsourcing solutions while creating jobs and transforming lives.')}
            </p>
            <div className="bg-primary-50 rounded-lg mb-8 h-[1px] w-full" />
            <div className="flex flex-col md:flex-row md:space-x-6 w-full justify-between">
              <div className="space-y-3 mb-6">
                {points.map((p) => (
                  <div key={p} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-600">{t(p)}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white shadow-md shadow-gray-200 mb-6 flex justify-center relative rounded-lg w-[40%] md:w-[250px]">
                <div className="absolute left-0 bg-primary-900 h-full w-[5px] rounded-l-lg" />
                <div className="p-2 flex items-center w-full">
                  <UsersRound className="mr-3 h-10 w-10 shrink-0 text-primary" aria-hidden="true" />
                  <div className="text-primary mb-1 text-center">
                    <span className="text-3xl text-gray-900 font-bold">1660 +</span>
                    <div className="text-gray-600 text-[14px] font-normal mt-4">{t('Talents Outsourced')}</div>
                  </div>
                </div>
              </div>
            </div>
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-800 flex items-center">
              {t('Discover more about our mission')} <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
