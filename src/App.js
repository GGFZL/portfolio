import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Personalnfo from "./components/Personalnfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Personalnfo />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;