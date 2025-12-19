import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyOptimizeSection from "@/components/WhyOptimizeSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BoostCTASection from "@/components/BoostCTASection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyOptimizeSection />
        <ProblemSection />
        <SolutionSection />
        <PricingSection />
        <TestimonialsSection />
        <BoostCTASection />
        <ProcessSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
