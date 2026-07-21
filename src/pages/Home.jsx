import Navbar from "../components/shared/Navbar";
import Hero from "../components/Hero";
import BrandLogos from "../components/BrandLogos";
import Features from "../components/Features";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <BrandLogos />

      <Features />

      <FeaturedProducts />

      <Footer />
    </>
  );
}