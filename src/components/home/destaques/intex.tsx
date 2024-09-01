'use client';
import Image from "next/image";
import Carrossel from "@/components/carrossel";

type GameProp = { name: string; price: number; image: string; description: string; }[]
type DestaqueProp = {
    gamescel: GameProp;
}
export default function Destaques({ gamescel }: DestaqueProp) {
    return (
        <div>
            <div className="flex flex-col gap-4">
                <h1 className="text-white text-xl font-anton text-center drop-shadow-roxinho md:text-3xl">
                    DESTAQUES
                </h1>
                <Carrossel gamescel={gamescel} cor="roxo-medio" classname="w-44 h-52 md:w-60 md:h-72 lg:w-64 lg:h-72 xl:w-80 xl:h-96 rounded-t-3xl" />
            </div>
        </div>
    )
}
