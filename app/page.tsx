import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedInfo from "./components/FeaturedInfo";
import NavBar from "./components/NavBar";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection></HeroSection>
      <FeaturedInfo></FeaturedInfo>
      <NavBar></NavBar>
      <Aboutme></Aboutme>
      <Projects></Projects>
    </main>
  );
}
