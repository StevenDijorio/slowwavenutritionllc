import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ScienceSection from "@/components/ScienceSection";
import IngredientsSection from "@/components/IngredientsSection";
import RitualSection from "@/components/RitualSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <ScienceSection />
    <IngredientsSection />
    <RitualSection />
    <WaitlistSection />
    <Footer />
  </div>
);

export default Index;
