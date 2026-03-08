import Header from "@/components/header";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import AboutUs from "@/components/about-us";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <AboutUs />
      <Footer />
    </main>
  );
}
