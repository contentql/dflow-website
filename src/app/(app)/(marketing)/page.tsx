import { FeatureSection } from '@/components/home/cards'
import { ClientSection } from '@/components/home/clients'
import CtaSection from '@/components/home/cta'
import FaqSection from '@/components/home/faqs'
import { HeroSection } from '@/components/home/hero'
import { TabsSection } from '@/components/home/tabs'
import TestimonialSection from '@/components/home/testimonial'
import { VideoDialogSection } from '@/components/home/video'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TabsSection />
      <ClientSection />
      <VideoDialogSection/>
      <FeatureSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}

export default HomePage
