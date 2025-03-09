import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import AboutMeSection from "./components/AboutMeSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import Home from "./components/Home";
import GitHubActivity from "./components/cactro/GitHubActivity";
import RepoDetails from "./components/cactro/RepoDetails";
import CreateIssue from "./components/cactro/CreateIssue";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/github" element={<GitHubActivity />} />
      <Route path="/github/:repoName" element={<RepoDetails />} />
      <Route path="/github/:repoName/issues" element={<CreateIssue />} />
    </Routes>
  );
}

export default App;
