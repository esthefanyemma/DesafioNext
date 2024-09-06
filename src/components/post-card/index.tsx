import Link from "next/link";
import Image from "next/image";
import { Circle, CircleDollarSign, Plane } from "lucide-react";

type GameProp = {id: number; name: string; price: number; image: string; description: string|null; }
type CardProp = {
    game: GameProp;
}

export default function PostCard({game} : CardProp) {
    return (
        <Link
            href={`/individual/${game.id}`}
            className="w-full lg:w-full px-8 md:px-24 flex group"
        >
            <div className="bg-roxo-medio drop-shadow-roxinho2 w-full flex flex-col md:flex-row lg:flex-row shadow-lg rounded-xl group-hover:bg-roxo-medio/80 duration-300 overflow-hidden">
                <Image
                    src={game.image || '/public/home/StardewValley.jpg'}
                    alt={game.name}
                    width={500}
                    height={500}
                    className="max-w-full md:max-w-[100px] lg:max-w-[150px] lg:h-[210px] 2xl:max-w-[250px]"
                />
                <div className="flex flex-col justify-between gap-4 p-6">
                    <div>
                        <h1 className="text-xl 2xl:text-2xl 3xl:text-3xl tracking-widest font-anton text-white">
                            {game.name}
                        </h1>
                        <div className="flex gap-4">
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gal-1 text-azul">
                                    <CircleDollarSign className="h-5 w-5" />
                                    <span className="text-base 2xl:text-xl 3xl:text-2xl font-semibold">{game.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="line-clamp-3 text-base font-anybody text-white 2xl:text-xl 3xl:text-2xl">
                        {game.description}
                    </p>
                </div>
            </div>
        </Link>
    )
}