import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ShortAboutMe from "./components/ShortAboutMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection></HeroSection>
      <ShortAboutMe></ShortAboutMe>
    </main>
  );
}
