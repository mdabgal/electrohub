import Navbar from "../components/shared/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Features from "../components/Features";
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
       <FeaturedProducts />
      <Features />
      
      <Footer />
    </>
  );
}