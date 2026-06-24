import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBand } from "@/components/TrustBand";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { QuoteForm } from "@/components/QuoteForm";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";

export default function Page(): React.ReactElement {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <TrustBand />
        <Benefits />
        <HowItWorks />
        <Services />
        <WhyUs />
        <Testimonials />
        <Faq />
        <QuoteForm />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
