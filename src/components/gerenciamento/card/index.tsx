'use client';
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";

type GameProp = { name: string; price: number; image: string; description: string; }
type CardProp = {
    game: GameProp;
}

export default function Card({game} : CardProp) {
    return (
        <div className={`xl:rounded-[100px] drop-shadow-roxinho2 justify-between flex flex-row font-antonio w-full bg-roxo-medio rounded-3xl items-center`}>
            <Image
                src={game.image}
                alt={game.name}
                width={500}
                height={500}
                className="w-20 h-24 md:w-32 md:h-36 lg:w-44 lg:h-48 xl:w-60 xl:h-64 rounded-l-3xl xl:rounded-l-[100px]"
            />
            <h1 className="text-white w-1/3 font-anybody text-center text-xs p-2 md:text-lg lg:text-2xl xl:text-3xl">{game.name}</h1>
            <div className="flex flex-col w-1/6 pr-4 gap-1 md:flex-row">
            <button className=" bg-roxo-claro rounded-lg py-1 md:py-3 md:w-1/3 md:rounded-xl  lg:rounded-2xl">
                <Eye className="text-white w-full h-4 md:h-6 lg:h-11"></Eye>
            </button>
            <button className=" bg-roxo-claro rounded-lg py-1 md:py-3 md:w-1/3 md:rounded-xl  lg:rounded-2xl">
                <Pencil className="text-white w-full h-4 md:h-6 lg:h-11"></Pencil>
            </button>
            <button className=" bg-roxo-claro rounded-lg py-1 md:py-3 md:w-1/3 md:rounded-xl lg:rounded-2xl">
                <Trash2 className="text-white w-full h-4 md:h-6 lg:h-11"></Trash2>
            </button>
            </div>
        </div>
    );
}
