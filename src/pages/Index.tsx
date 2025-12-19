import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyOptimizeSection from "@/components/WhyOptimizeSection";
import ProblemSection from "@/components/ProblemSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyOptimizeSection />
        <ProblemSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
