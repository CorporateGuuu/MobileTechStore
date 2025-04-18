import TopHeader from "@/components/layout/TopHeader";
import MainHeader from "@/components/layout/MainHeader";
import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import PromoBanner from "@/components/home/PromoBanner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandsBanner from "@/components/home/BrandsBanner";
import InfoBanner from "@/components/home/InfoBanner";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <MainHeader />
      <MainNavigation />
      <main>
        <HeroSlider />
        <FeaturedCategories />
        <PromoBanner />
        <FeaturedProducts />
        <BrandsBanner />
        <InfoBanner />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
