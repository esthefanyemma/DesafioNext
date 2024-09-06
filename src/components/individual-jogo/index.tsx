import { MapPin, Plane, UsersRound } from "lucide-react"
import Image from "next/image"


export default function IndividualJogo() {
    return(
        <div className="w-full flex-col lg:grid-cols gap-8">
            <div className="lg:col-span-4">
                <Image
                src={'/public/home/gta.jpg'}
                alt="Placeholder" 
                width={500} 
                height={500} 
                className="lg:h-[700px] object-cove aspect-vídeo w-full rounded-xl"
                />
            </div>
            <div className="lg:col-span-4 lg:max-h-[700px] 3xl:max-h-max lg:px-4 overflow-auto flex-col gap-8 lg:gap-4">
                <div className="glex flex-wrap items-center gap-4 justify-between font-semibold text-green-600">
                    <h1 className="text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl line-clamp-2">
                        Placeholder
                    </h1>
                    <div className="flex items-center gap-1">
                        <Plane className="md:w-7 md:h-7"/>
                        <span className="text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl">7 dias</span>
                    </div>
                </div>
                <p className="text-teal-600 text-base 2xl:text-lg 3xl:text-xl text-justify">
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                </p>
                <p className="text-teal-600 text-base 2xl:text-lg 3xl:text-xl text-justify">
                    BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
                    BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB 
                    BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
                </p>
                <div className="space-y-4">
                    <h1 className="text-xl line-clamp-2 text-red-400 2xl:text-2xl 3xl:text-3xl">
                        INFORMAÇÕES ADICIONAIS
                    </h1>
                    <div className="flex gap-4 font-semibold text-green-400 text-sm">
                        <div className="flex items-center gap-1">
                            <UsersRound />
                            <span>1 0000 0000 000</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin />
                            <span>Paris França Brasil</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}