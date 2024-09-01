import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(
        <footer className="bg-gradient-to-t from-roxo-medio to-roxo-escuro w-full h-fit ">
            <div className="flex flex-col px-2 py-8 gap-8 lg:flex-row lg:items-center lg:px-32">
                <div className="flex flex-col items-center lg:w-1/3">
                    <Image 
                    src="/logo/logo.png" 
                    alt="Logo do site" 
                    width={500} 
                    height={500} 
                    className="w-32"
                    />
                    <div className="flex flex-row items-center gap-4">
                        <Youtube className="text-white h-10 w-10"></Youtube>
                        <Instagram className="text-white h-8 w-8"></Instagram>
                        <Twitter className="text-white h-10 w-10"></Twitter>
                        <Facebook className="text-white h-8 w-8"></Facebook>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6 px-4 w-fit">
                    <h1 className="text-white font-anybody text-sm font-bold text-center lg:text-xl">Fany Games © 2024. Todos os direitos reservados</h1>
                    <h1 className="text-white font-anybody text-sm text-center lg:text-xl lg:w-full">Sobre Nós:
                        Na Fany Games, nossa missão é oferecer os melhores jogos de
                        PC com o melhor atendimento ao cliente. Desde lançamentos
                        mais recentes até clássicos imperdíveis, temos algo para
                        todos os jogadores.</h1>
                </div>

                <div className="flex flex-col items-center w-full lg:w-1/3">
                    <h1 className="text-white font-anybody text-sm font-bold text-center lg:text-xl pb-6">Informações:</h1>
                    <h1 className="text-white font-anybody text-sm text-center lg:text-xl">Termos e Condições</h1>
                    <h1 className="text-white font-anybody text-sm text-center lg:text-xl">Política Privada</h1>
                    <h1 className="text-white font-anybody text-sm text-center lg:text-xl">Contato</h1>
                </div>
            </div>
        </footer>
    )
}