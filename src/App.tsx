import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Websites from "./components/Websites";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Skills />
        <Projects />
        <Websites />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
