'use client';
import Image from "next/image";

type GameProp = { name: string; price: number; image: string; description: string; }
type CardProp = {
    game: GameProp;
}

export default function Card({game} : CardProp) {
    return (
        <div
            className={`drop-shadow-roxinho2 flex flex-col font-antonio w-fit bg-roxo-medio rounded-3xl items-center`}
        >
            <Image
                src={game.image}
                alt={game.name}
                width={500}
                height={500}
                className="w-32 h-36 md:w-48 md:h-56 lg:w-64 lg:h-72 xl:w-80 xl:h-96 rounded-t-3xl"
            />
            <h1 className="text-white font-antonio text-center text-base p-2 xl:text-3xl">{game.name}</h1>
        </div>
    );
}
