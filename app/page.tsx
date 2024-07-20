import HeroSection from "./components/HeroSection";
import FeaturedInfo from "./components/FeaturedInfo";
import NavBar from "./components/NavBar";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <FeaturedInfo></FeaturedInfo>
      <Aboutme></Aboutme>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
