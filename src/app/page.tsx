import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBand } from "@/components/TrustBand";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { HowItWorks } from "@/components/HowItWorks";
import { Gallery } from "@/components/Gallery";
import { ServiceArea } from "@/components/ServiceArea";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";

export default function Page(): React.ReactElement {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <TrustBand />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Gallery />
        <ServiceArea />
        <Testimonials />
        <Faq />
        <QuoteForm />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
