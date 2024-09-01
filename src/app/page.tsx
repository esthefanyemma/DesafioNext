import Destaques from "@/components/home/destaques";
import Gratis from "@/components/home/gratis";
import HeroSection from "@/components/home/herosection";
import Image from "next/image";
import { gamescel } from "@/data/gamesData";


export default function Home() {
  return (
    <main className="flex flex-col gap-40">
      <HeroSection />
      <Destaques gamescel={gamescel} />
      <Gratis gamescel={gamescel} />
    </main>
  );
}
