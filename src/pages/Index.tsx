import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ScienceSection from "@/components/ScienceSection";
import IngredientsSection from "@/components/IngredientsSection";
import RitualSection from "@/components/RitualSection";
import PreOrderSection from "@/components/PreOrderSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <ScienceSection />
    <IngredientsSection />
    <RitualSection />
    <PreOrderSection />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;
