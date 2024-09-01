"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Search from "@/components/search";
import { CirclePlus, Menu, Phone, User } from "lucide-react";

const links = [
    { href: "/posts", label: "Publicações" },
    { href: "/admin", label: "Admin" },
];

export default function Header() {
    return (
        <header className=" content-center top-0 z-20 mx-auto w-full h-fit md:p-0 mb-20">

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
                        <Link
                            href="/"
                            className="md:text-3xl text-2xl text-roxo-claro hover:drop-shadow-[0_0_30px_rgba(189,120,255,1.0)] font-antonio"
                        >
                            CATEGORIAS
                        </Link>
                        <Link
                            href="/navegar"
                            className="md:text-3xl text-2xl text-roxo-claro hover:drop-shadow-[0_0_30px_rgba(189,120,255,1.0)] font-antonio"
                        >
                            NAVEGAR
                        </Link>
                    </div>

                </div>
                <div className="text-white flex flex-row gap-4 pl-8">
                    <Link href="/">
                        <User className="w-10 h-10 hover:drop-shadow-[0_0_15px_#be78ff]"></User>
                    </Link>
                    <Link href="/">
                        <Phone className="w-10 h-10 hover:drop-shadow-[0_0_15px_#be78ff]"></Phone>
                    </Link>
                    <Link href="/gerenciamento">
                        <CirclePlus className="w-10 h-10 hover:drop-shadow-[0_0_15px_#be78ff]"></CirclePlus>
                    </Link>
                </div>
            </div>

            {/* CELULAR */}

            <div className="lg:hidden flex flex-col gap-2 justify-between items-center w-full pb-8">
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
                    <Menu className="text-white h-8 w-8"></Menu>
                </div>

                <div className="flex flex-row justify-between w-full items-center gap-6 px-4">
                    <div className="flex-1 flex justify-center ">
                        <Search />
                    </div>
                    <Link
                        href="/"
                        className="md:text-3xl bg-roxo-medio rounded-lg p-2 text-lg text-white hover:drop-shadow-[0_0_30px_rgba(189,120,255,1.0)] font-antonio"
                    >
                        NAVEGAR
                    </Link>
                </div>
            </div>
        </header>
    );
}
