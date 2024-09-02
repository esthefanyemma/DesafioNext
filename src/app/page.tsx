import Destaques from "@/components/home/destaques";
import Gratis from "@/components/home/gratis";
import HeroSection from "@/components/home/herosection";
import Image from "next/image";
import { gamescel } from "@/data/gamesData";
import getApi from "@/api/get-secao";
import Card from "@/components/home/secaoapi/card";
import { useEffect, useState } from "react";
import SecaoAPI from "@/components/home/secaoapi";

type ApiProps = {
  id: number,
  title: string,
  text: string
}

export default function Home() {
  return (
    <main className="flex flex-col gap-56">
      <HeroSection />
      <Destaques gamescel={gamescel} />
      <Gratis gamescel={gamescel} />
      <SecaoAPI />
    </main>
  );
}
