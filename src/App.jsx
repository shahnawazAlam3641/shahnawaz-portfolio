import "./App.css";
import AboutMeSection from "./components/AboutMeSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="max-w-[1060px] mx-auto">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <AboutMeSection />
    </div>
  );
}

export default App;
