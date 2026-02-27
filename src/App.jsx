import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutUs";
import TeamSection from "./components/Team";
import WorkshopsSection from "./components/Workshops";
import InstagramSection from "./components/Instagram";
import ContactSection from "./components/Contact";
import CallSection from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection/>
      <TeamSection/>
      <WorkshopsSection/>
      <InstagramSection/>
      <CallSection/>
      <Footer/>
    </>
  );
}

export default App;