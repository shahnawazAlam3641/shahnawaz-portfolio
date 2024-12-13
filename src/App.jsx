import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="max-w-[1060px] mx-auto">
      <Navbar />
      <Hero />
      <ProjectsSection />
    </div>
  );
}

export default App;
