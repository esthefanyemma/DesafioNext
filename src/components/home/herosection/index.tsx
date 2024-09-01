'use client';
import Image from "next/image";

export default function HeroSection() {
    return(
        <div className="flex flex-col gap-4">
        <h1 className="text-white font-anton text-xl text-center drop-shadow-roxinho md:text-3xl">JOGOS MAIS RECENTES ADICIONADOS</h1>
        <div className="flex flex-col gap-2 items-center md:flex-row md:w-full md:justify-center">
          <div className="flex flex-col justify-center text-center bg-roxo-medio w-fit rounded-3xl">
            <Image
              src="/home/TheSims4.jpg"
              alt="The Sims 4"
              width={500}
              height={500}
              className="w-64 rounded-t-3xl md:w-96 lg:w-full"
            />
            <h1 className="text-white text-xl font-antonio p-4 md:text-2xl ">THE SIMS 4</h1>
          </div>
          <div className="flex flex-row w-full gap-2 px-10 md:flex-col md:w-1/5 md:py-0 md:gap-4 md:px-2">
            <div className="flex flex-row bg-roxo-medio rounded-3xl items-center w-1/2 md:w-full">
              <Image
                src="/home/StardewValley.jpg"
                alt="Stardew Valley"
                width={500}
                height={500}
                className="w-16 h-16 rounded-l-3xl lg:w-28 lg:h-28"
              />
              <h1 className="text-white font-antonio text-center text-base w-full md:text-lg xl:text-3xl">STARDEW VALLEY</h1>
            </div>

            <div className="flex flex-row bg-roxo-medio rounded-3xl items-center w-1/2 md:w-full">
              <Image
                src="/home/gta.jpg"
                alt="GTA"
                width={500}
                height={500}
                className="w-16 h-16 rounded-l-3xl lg:w-28 lg:h-28"
              />
              <h1 className="text-white text-base font-antonio text-center w-full md:text-xl xl:text-3xl">GTA</h1>
            </div>

            <div className="hidden md:flex md:flex-row md:bg-roxo-medio md:rounded-3xl md:items-center md:w-full">
              <Image
                src="/home/gta.jpg"
                alt="GTA"
                width={500}
                height={500}
                className="w-16 h-16 rounded-l-3xl lg:w-28 lg:h-28"
              />
              <h1 className="text-white font-antonio text-center w-full md:text-xl xl:text-3xl">GTA</h1>
            </div>

          </div>
        </div>
      </div>
    )
}
