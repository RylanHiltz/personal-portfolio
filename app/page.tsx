import HeroSection from "./components/HeroSection";
import FeaturedInfo from "./components/FeaturedInfo";
import NavBar from "./components/NavBar";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection></HeroSection>
      <FeaturedInfo></FeaturedInfo>
      <NavBar></NavBar>
      <Aboutme></Aboutme>
      <Projects></Projects>
      <Skills></Skills>
    </main>
  );
}
