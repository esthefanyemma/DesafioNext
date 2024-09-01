import Destaques from "@/components/home/destaques/intex";
import Gratis from "@/components/home/gratis";
import HeroSection from "@/components/home/herosection";
import Image from "next/image";

const gamescel = [
  {
    name: "THE SIMS 4",
    price: 10.98,
    image:
      "https://upload.wikimedia.org/wikipedia/pt/3/34/Nova_capa_de_The_Sims_4.png",
    description: "Product Description",
  },
  {
    name: "HOGWARTS LEGACY",
    price: 10.98,
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202208/0921/Ah7Ar9MU0r1BBlzAUflmhyQP.png",
    description: "Product Description",
  },
  {
    name: "HADES",
    price: 10.98,
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202104/0517/9AcM3vy5t77zPiJyKHwRfnNT.png",
    description: "Product Description",
  },
  {
    name: "HERO SIEGE",
    price: 10.98,
    image:
      "https://images.stopgame.ru/games/logos/17058/c280x280/4lyj9DarccbGh8SyVFRmWQ/hero_siege-square.jpg",
    description: "Product Description",
  },
  {
    name: "A HAT IN TIME",
    price: 10.98,
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/2a/A_Hat_in_Time_cover_art.png",
    description: "Product Description",
  },
  {
    name: "BATLEFIELD 4",
    price: 10.98,
    image:
      "https://upload.wikimedia.org/wikipedia/pt/8/84/Battlefield_4_capa.png",
    description: "Product Description",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-40">
      <HeroSection />
      <Destaques gamescel={gamescel} />
      <Gratis gamescel={gamescel} />
    </main>
  );
}
