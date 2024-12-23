import "./App.css";
import AboutMeSection from "./components/AboutMeSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div>
      <div className=" mx-auto relative bg-[#2121215a] z-10">
        <div className="absolute opacity-20 inset-0 -z-10 overflow-hidden">
          <div className="animate-moveBlur bg-yellow-400 rounded-full blur-[120px] opacity-40 w-[500px] h-[500px] absolute top-[-200px] left-[-100px]"></div>
          <div className="animate-moveBlur bg-yellow-400 rounded-full blur-[120px] opacity-40 w-[600px] h-[600px] absolute bottom-[-150px] right-[-150px]"></div>
        </div>
        <Navbar />
        <Hero />
        <ProjectsSection />
        <AboutMeSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
