import HeroSection from './HeroSection'
import StatsBar from './StatsBar'
import AboutSection from './AboutSection'
import PartnersSection from './PartnersSection'
import WhyUsSection from './WhyUsSection'
import ChooseUsSection from './ChooseUsSection'
import TestimonialsSection from './TestimonialsSection'
import NewsSection from './NewsSection'
import HowItWorksSection from './HowItWorksSection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <PartnersSection />
      <WhyUsSection />
      <ChooseUsSection />
      <TestimonialsSection />
      <NewsSection />
      <HowItWorksSection />
    </div>
  )
}
