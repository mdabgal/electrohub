import Features from "./components/Features";
import Hero from "./components/Hero";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Features/>
      <Footer/>
    </>
  );
}

export default App;