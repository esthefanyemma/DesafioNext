"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Search from "@/components/search";
import { CirclePlus, Menu, Phone, User, X } from "lucide-react";

const links = [
    { href: "/posts", label: "Publicações" },
    { href: "/admin", label: "Admin" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const MenuHam = () => {
        setIsOpen(!isOpen);
    };

    const [isOpen2, setIsOpen2] = useState(false);

    const Categ = () => {
        setIsOpen2(!isOpen2);
    };

    return (
        <header className=" content-center top-0 z-20 mx-auto w-full h-fit md:p-0 mb-24">

            {/* COMPUTADOR  */}

            <div className="bg-gradient-to-b from-roxo-medio to-roxo-escuro lg:flex hidden flex-row gap-2 py-10 px-20 justify-between items-center w-full">
                <Link href="/" className="flex gap-2 items-center">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo/logo.png"
                            alt="Logo do site"
                            width={500}
                            height={500}
                            className="w-24"
                        />
                        <span className="text-white hidden md:block text-3xl">|</span>
                        <span
                            className={`md:text3xl text-4xl text-white hidden md:block font-anton`}
                        >
                            STORE
                        </span>
                    </div>
                </Link>

                <div className="flex flex-row w-full px-32 items-center">

                    <div className="flex-1 flex justify-center mx-8">
                        <Search />
                    </div>

                    <div className="flex flex-row gap-x-20 content-center md:gap-x-8">
                        <Link href="/" onClick={Categ}>
                            {isOpen2 ? <h1 className="md:text-3xl text-2xl text-roxo-claro hover:drop-shadow-[0_0_30px_rgba(189,120,255,1.0)] font-antonio">
                                CATEGORIAS</h1> :
                                <h1 className="md:text-3xl text-2xl text-roxo-claro hover:drop-shadow-[0_0_30px_rgba(189,120,255,1.0)] font-antonio">
                                    CATEGORIAS</h1>}
                        </Link>
                        
                        <Link
                            href="/posts"
                            className="md:text-3xl text-2xl text-roxo-claro hover:drop-shadow-[0_0_30px_rgba(189,120,255,1.0)] font-antonio"
                        >
                            JOGOS
                        </Link>
                    </div>

                </div>
                <div className="text-white flex flex-row gap-4 pl-8">
                    <Link href="/login">
                        <User className="w-10 h-10 hover:drop-shadow-[0_0_15px_#be78ff]"></User>
                    </Link>
                    <Link href="/contato">
                        <Phone className="w-10 h-10 hover:drop-shadow-[0_0_15px_#be78ff]"></Phone>
                    </Link>
                    <Link href="/gerenciamento">
                        <CirclePlus className="w-10 h-10 hover:drop-shadow-[0_0_15px_#be78ff]"></CirclePlus>
                    </Link>
                </div>
            </div>
            {isOpen2 && (
                            <div className="bg-roxo-escuro z-20 absolute justify-center h-fit w-full flex flex-row gap-4 px-8">
                                <div className="flex flex-row gap-8">
                                <h1 className="text-white font-anybody text-xl">SOBREVIVÊNCIA</h1>
                                <h1 className="text-white font-anybody text-xl">CARTAS</h1>
                                <h1 className="text-white font-anybody text-xl">TERROR</h1>
                                <h1 className="text-white font-anybody text-xl">PUZZEL</h1>
                                <h1 className="text-white font-anybody text-xl">DESPORTO</h1>
                                <h1 className="text-white font-anybody text-xl">AÇÃO</h1>
                                <h1 className="text-white font-anybody text-xl">RPG</h1>
                                <h1 className="text-white font-anybody text-xl">AVENTURA</h1>
                                <h1 className="text-white font-anybody text-xl">CORRIDA</h1>
                                <h1 className="text-white font-anybody text-xl">FPS</h1>
                                <h1 className="text-white font-anybody text-xl">SIMULADOR</h1>
                                <h1 className="text-white font-anybody text-xl">CASUAL</h1>
                                </div>
                            </div>
                        )}

            {/* CELULAR */}

            <div className="lg:hidden flex flex-col gap-2 justify-between items-center w-full pb-0">
                <div className="bg-gradient-to-b from-roxo-medio to-roxo-escuro flex py-4 px-4 flex-row justify-between w-full items-center">
                    <Link href="/" className="flex gap-2 items-center">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo/logo.png"
                                alt="Logo do site"
                                width={500}
                                height={500}
                                className="w-14"
                            />
                            <span className="text-white md:block text-3xl">|</span>
                            <span
                                className={`md:text3xl text-xl text-white md:block font-anton`}
                            >
                                STORE
                            </span>
                        </div>
                    </Link>
                    <button onClick={MenuHam} className="text-white">
                        {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                    </button>
                </div>

                {isOpen && (
                    <div className="bg-roxo-escuro w-full flex flex-col gap-4 pt-4 pb-20 px-8">
                        <Link href="/categoriascel" className="text-lg text-white font-antonio bg-roxo-escuro p-3 rounded-md drop-shadow-roxinho2">
                            CATEGORIAS
                        </Link>
                        <Link href="/login" className="text-lg text-white font-antonio bg-roxo-escuro p-3 rounded-md drop-shadow-roxinho2">
                            LOGAR
                        </Link>
                        <Link href="/contato" className="text-lg text-white font-antonio bg-roxo-escuro p-3 rounded-md drop-shadow-roxinho2">
                            CONTATO
                        </Link>
                        <Link href="/gerenciamento" className="text-lg text-white font-antonio bg-roxo-escuro p-3 rounded-md drop-shadow-roxinho2">
                            GERENCIAMENTO
                        </Link>

                    </div>
                )}

                <div className="flex flex-row justify-between w-full items-center gap-6 px-4">
                    <div className="flex-1 flex justify-center ">
                        <Search />
                    </div>
                    <Link
                        href="/posts"
                        className="md:text-3xl bg-roxo-medio rounded-lg p-2 text-lg text-white hover:drop-shadow-[0_0_30px_rgba(189,120,255,1.0)] font-antonio"
                    >
                        JOGOS
                    </Link>
                </div>
            </div>
        </header>
    );
}
