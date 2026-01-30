import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductInActionSection from "@/components/ProductInActionSection";
import CEOSection from "@/components/CEOSection";
import ProductGridSection from "@/components/ProductGridSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import CatalogSection from "@/components/CatalogSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
       <ProductGridSection />
        <CEOSection />
        <ProductInActionSection />
        <AdvantagesSection />
        <CatalogSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
