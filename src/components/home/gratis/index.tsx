'use client';
import Image from "next/image";
import Carrossel from "@/components/carrossel";

type GameProp = { name: string; price: number; image: string; description: string; }[]
type GratisProp = {
    gamescel: GameProp;
}
export default function Gratis({ gamescel }: GratisProp) {
    return (
        <div>
            <div className="flex flex-col gap-6 bg-roxo-medio p-6 pt-12">
                <h1 className="text-white text-xl font-anton text-center drop-shadow-roxinho md:text-5xl">
                    JOGOS GRÁTIS
                </h1>
                <Carrossel gamescel={gamescel} cor="azul" classname="w-52 h-48 rounded-t-3xl md:w-60 md:h-56 lg:w-72 lg:h-64 xl:w-80 xl:h-72"/>
            </div>
        </div>
    )
}
