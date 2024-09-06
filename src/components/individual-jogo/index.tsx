import Image from "next/image";
import { Circle, CircleDollarSign, Plane, MapPin, UsersRound } from "lucide-react";
import { useRouter } from 'next/router';

type GameProp = { id: number; name: string; price: number; image: string; description: string | null; }
type CardProp = {
    game: GameProp;
}

export default function IndividualJogo({ game }: CardProp) {
    return (
        <div className="w-full bg-white/10 rounded-lg pb-8 flex-col flex md:flex-row md:items-start lg:grid-cols lg:gap-8">
            <div className="lg:col-span-4 p-8">
                <Image
                    src={game.image}
                    alt={game.name}
                    width={500}
                    height={500}
                    className="max-w-full md:max-w-[200px] lg:max-w-[300px] object-cove aspect-vídeo rounded-xl"
                />
            </div>
            <div className=" overflow-auto flex flex-col md:pt-10 md:pb-10 lg:col-span-4 lg:max-h-[700px] 3xl:max-h-max lg:px-4 lg:gap-4">
                <div className="flex flex-col gap-6 justify-between font-semibold text-white">
                    <div className="flex flex-row justify-center">
                        <h1 className="text-2xl font-antonio tracking-widest md:text-3xl lg:text-4xl 2xl:text-4xl 3xl:text-5xl line-clamp-2">
                            {game.name}
                        </h1>
                    </div>
                    <div className="flex gap-4 pl-8 font-semibold text-azul text-base">
                        <div className="flex items-center gap-1">
                            <CircleDollarSign className="max-w-full h-5 lg:h-10" />
                            <span className="lg:text-xl">{game.price}</span>
                        </div>
                    </div>
                </div>
                <p className="text-white font-anybody pl-8 text-base lg:text-lg 3xl:text-xl text-justify">
                    {game.description}
                </p>
            </div>
        </div>
    )
}