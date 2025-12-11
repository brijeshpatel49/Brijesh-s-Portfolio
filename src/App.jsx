import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import NotFound from "./components/NotFound";
import Chatbot from "./components/Chatbot";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <About />
      <Education />
      <Contact />
    </main>
  );
};

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Chatbot />
    </div>
  );
};

export default App;
