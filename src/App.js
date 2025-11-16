import HeroSection from "./HeroSection";
import react from "react";
import About from "./About";
import TechnologiesSection from "./TechnologiesSection"; 
import Expertise from "./Expertise";
import Navbar from "./Navbar";
function App() {
  return (
    <>
    <Navbar />
      <HeroSection />
      <About />
      <TechnologiesSection />
      <Expertise />
    </>
  );
}
export default App;
