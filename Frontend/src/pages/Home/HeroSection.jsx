import { ChevronRight } from 'lucide-react'
import { useLocale } from '../../i18n/LocaleContext'
import heroBg from '../../assets/HerosectionImage.png'
import shapeImg from '../../assets/shape-img.png'

export function HeroSection() {
  const { t } = useLocale()

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-20 pb-16 text-white md:pt-36 md:pb-24">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <img src={shapeImg} alt="" className="absolute inset-y-0 right-0 hidden h-full w-1/3 object-contain object-right lg:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-slate-950/20" />
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-[100%] grid md:grid-cols-1 gap-12 items-center max-w-7xl">
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base mb-4 text-white bg-label/30 inline-block px-4 py-2 rounded-full font-semibold">
              {t('Smart Talent. Global Reach.')}
            </p>
            <h1 className="text-4xl leading-[50px] uppercase md:text-5xl md:leading-[70px] lg:text-5xl lg:leading-[60px] font-bold mb-4">
              {t('Connecting Global Employers to Skilled Talents From Africa.')}
            </h1>
            <p className="text-lg md:text-lg mb-8 text-slate-200 leading-relaxed">
              {t("We're more than a BPO company. We are your strategic bridge to Africa's vibrant, tech-ready workforce. ANIDEV TECHNOLOGIES connects you with skilled, certified professionals who deliver excellence and drive innovation across borders.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-blue-400 text-slate-950 rounded-lg font-semibold hover:bg-blue-400 flex items-center justify-center transition-colors duration-300">
                {t('Hire with Us')} <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary flex items-center justify-center transition-colors duration-300">
                {t('Join our Talent')} <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
