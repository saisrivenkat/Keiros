import Header from '@/components/header'
import KeirosLogo from '@/components/KeirosLogo'
import MediaSection from '@/components/MediaSection'
import HomeSections from '@/components/home-sections'
import UseCases from '@/components/use-cases'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <KeirosLogo />
      {/* <MediaSection /> */}
      <HomeSections />
      <UseCases />
      <Footer />
    </main>
  )
}
