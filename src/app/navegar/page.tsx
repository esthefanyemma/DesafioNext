import Card from "@/components/navegar/card";
import { gamescel } from "@/data/gamesData";

export default function  Navegar() {
    return(
        <main className="flex flex-col gap-4 md:gap-20">
            <h1 className="text-white text-xl font-anton text-center drop-shadow-roxinho md:text-3xl lg:text-5xl">NAVEGAR</h1>
            <div className="flex flex-wrap gap-8 justify-center px-10 md:px-14 lg:px-40">
            {gamescel.map((game, index) => (
                <Card game={game} key={index}/>
            ))}
            </div>
        </main>
    )
}