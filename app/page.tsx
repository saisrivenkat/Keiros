import Header from '@/components/header'
import Hero from '@/components/hero'
import HowItWorks from '@/components/how-it-works'
import Testimonials from '@/components/testimonials'
import AboutUs from '@/components/about-us'
import Footer from '@/components/footer'
import TestimonialCarousel from '@/components/TestimonialCarousal'
import PartnerLogos from '@/components/PartnerLogos'
import USPSection from '@/components/USPSection'
import KeirosLogo from '@/components/KeirosLogo'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <KeirosLogo/>
      <USPSection/>
      <TestimonialCarousel/>
      <PartnerLogos/>
      <Footer />
    </main>
  )
}
