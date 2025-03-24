import { AnimatedBeamSection } from '@/components/home/animated-beam'
import { FeatureSection } from '@/components/home/cards'
import { ClientSection } from '@/components/home/clients'
import CtaSection from '@/components/home/cta'
import FaqSection from '@/components/home/faqs'
import { HeroSection } from '@/components/home/hero'
import { IconCloudSection } from '@/components/home/icon-cloud'
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
      <AnimatedBeamSection/>
      <TestimonialSection />
      <FaqSection />
      <IconCloudSection/>
      <CtaSection />
    </>
  )
}

export default HomePage
