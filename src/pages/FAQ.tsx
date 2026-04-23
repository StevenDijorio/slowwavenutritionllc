import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const FAQ = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <FAQSection standalone />
    <Footer />
  </div>
);

export default FAQ;
