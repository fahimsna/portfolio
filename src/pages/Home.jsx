import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Experience from "../sections/Experience/Experience";
import Projects from "../sections/Projects/Projects";
import Skills from "../sections/Skills/Skills";
import Education from "../sections/Education/Education";
import Contact from "../sections/Contact/Contact";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
