'use client';
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from 'react';
import Visualizar from "@/components/gerenciamento/modais/visualizar";
import Editar from "../modais/editar";
import Deletar from "../modais/deletar";

type GameProp = {id: number; name: string; price: number; image: string; description: string|null; }
type CardProp = {
    game: GameProp;
}

type ModalType = 'view' | 'edit' | 'delete';

export default function Card({game} : CardProp) {
    const [isOpenVi, setIsOpenVi] = useState(false);
    const Modalvi = () => {
        setIsOpenVi(!isOpenVi);
    };

    const [isOpenEdi, setIsOpenEdi] = useState(false);
    const Modaledi = () => {
        setIsOpenEdi(!isOpenEdi);
    };

    const [isOpenDe, setIsOpenDe] = useState(false);
    const Modalde = () => {
        setIsOpenDe(!isOpenDe);
    };
    return (
        <div className={`xl:rounded-[60px] z-10  hover:bg-roxo-medio/80 duration-300 drop-shadow-roxinho2 justify-between flex flex-row font-antonio w-full bg-roxo-medio rounded-3xl lg:rounded-3xl items-center`}>
            <Image
                src={game.image}
                alt={game.name}
                width={500}
                height={500}
                className="w-20 h-24 md:w-32 md:h-36 lg:w-44 lg:h-48 xl:w-48 xl:h-52 rounded-l-3xl xl:rounded-l-[80px] lg:rounded-l-3xl"
            />
            <h1 className="text-white w-1/3 font-anybody text-center text-xs p-2 md:text-lg lg:text-2xl xl:text-3xl">{game.name}</h1>
            <div className="flex flex-col w-1/6 pr-4 gap-1 md:flex-row">

            <button onClick={Modalvi} className=" bg-roxo-claro/20 hover:bg-roxo-claro/40 duration-300 rounded-lg py-1 md:py-2 md:w-1/3 md:rounded-xl  lg:rounded-2xl">
            {/* {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />} */}
                {isOpenVi ? <Eye className="text-white w-full h-4 md:h-6 lg:h-8"></Eye> : 
                <Eye className="text-white w-full h-4 md:h-6 lg:h-8"></Eye>}
            </button>
            {isOpenVi && (
                    <div className="fixed inset-0 flex items-center justify-center z-auto">
                        <Visualizar />
                </div>
                )}

            <button onClick={Modaledi} className=" bg-roxo-claro/20 hover:bg-roxo-claro/40 duration-300 rounded-lg py-1 md:py-2 md:w-1/3 md:rounded-xl  lg:rounded-2xl">
                {isOpenEdi ? <Pencil className="text-white w-full h-4 md:h-6 lg:h-8"></Pencil> :
                <Pencil className="text-white w-full h-4 md:h-6 lg:h-8"></Pencil>}
            </button>
            {isOpenEdi && (
                    <div className="fixed inset-0 flex items-center justify-center z-auto">
                        <Editar />
                </div>
                )}

            <button onClick={Modalde} className=" bg-roxo-claro/20 hover:bg-roxo-claro/40 duration-300 rounded-lg py-1 md:py-2 md:w-1/3 md:rounded-xl lg:rounded-2xl">
                {isOpenDe ? <Trash2 className="text-white w-full h-4 md:h-6 lg:h-8"></Trash2> :
                <Trash2 className="text-white w-full h-4 md:h-6 lg:h-8"></Trash2>}
            </button>
            {isOpenDe && (
                    <div className="fixed inset-0 flex items-center justify-center z-auto">
                        <Deletar />
                </div>
                )}
            </div>
        </div>
    );
}
