import HeroSection from "./components/HeroSection";
import FeaturedInfo from "./components/FeaturedInfo";
import NavBar from "./components/NavBar";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/blurbar.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mt-[11.75em]">
      {/* Blur divs for top and bottom of page */}
      <div className="gradient-blur topblur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="gradient-blur bottomblur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

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
