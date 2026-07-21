import Navbar from "../components/shared/Navbar";
import Hero from "../components/Hero";
import BrandLogos from "../components/BrandLogos";
import Features from "../components/Features";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/shared/Footer";
import Categories from "../components/Categories";
import FlashSale from "../components/FlashSale";
import NewArrivals from "../components/NewArrivals";
import BestSellers from "../components/BestSEllers";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <BrandLogos />

<Categories/>

      <FeaturedProducts />
       <Features />
       <FlashSale/>
       <NewArrivals/>
       <BestSellers/>
       <Testimonials/>
       <FAQ/>
       <Newsletter/>
      <Footer />
    </>
  );
}