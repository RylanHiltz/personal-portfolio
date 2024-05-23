import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedInfo from "./components/FeaturedInfo";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection></HeroSection>
      <FeaturedInfo></FeaturedInfo>
      <NavBar></NavBar>
    </main>
  );
}
