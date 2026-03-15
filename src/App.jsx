import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutUs";
import WorkshopsSection from "./components/Workshops";
import Footer from "./components/Footer";
import BrandsSection from "./components/BrandSection";
import KidfluencerDeck from "./components/KidFluencer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <BrandsSection />
      <WorkshopsSection />
      
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route
          path="/kidfluencer-deck"
          element={<KidfluencerDeck />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;