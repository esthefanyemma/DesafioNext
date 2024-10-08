'use client';
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from 'react';
import Visualizar from "@/components/gerenciamento/modais/visualizar";
import Editar from "@/components/gerenciamento/modais/editar";
import Deletar from "@/components/gerenciamento/modais/deletar";
import Link from "next/link";

type GameProp = { id: number; name: string; price: number; image: string; description: string | null; }
type CardProp = { game: GameProp;  openModal: (type: 'view' | 'edit' | 'delete', game: GameProp) => void;}

type ModalType = 'view' | 'edit' | 'delete' | null;

export default function Card({ game, openModal }: CardProp) {
    const ActionButton = ({ type, Icon }: { type: 'view' | 'edit' | 'delete', Icon: any }) => (
        <button
            onClick={() => openModal(type, game)}
            className="bg-roxo-claro/20 hover:bg-roxo-claro/40 duration-300 rounded-lg py-1 md:py-2 md:w-1/3 md:rounded-xl lg:rounded-2xl"
        >
            <Icon className="text-white w-full h-4 md:h-6 lg:h-8" />
        </button>
    );

    return (
        <div className="relative xl:rounded-[60px] hover:bg-roxo-medio/80 duration-300 drop-shadow-roxinho2 justify-between flex flex-row font-antonio w-full bg-roxo-medio rounded-3xl lg:rounded-3xl items-center">
            <Image
                src={game.image}
                alt={game.name}
                width={500}
                height={500}
                className="w-20 h-24 md:w-32 md:h-36 lg:w-44 lg:h-48 xl:w-48 xl:h-52 rounded-l-3xl xl:rounded-l-[80px] lg:rounded-l-3xl"
            />
            <h1 className="text-white w-1/3 font-anybody text-center text-xs p-2 md:text-lg lg:text-2xl xl:text-3xl">{game.name}</h1>
            <div className="flex flex-col w-1/6 pr-4 gap-1 md:flex-row">
                <Link className="bg-roxo-claro/20 hover:bg-roxo-claro/40 duration-300 rounded-lg py-1 md:py-2 md:w-1/3 md:rounded-xl lg:rounded-2xlcontain" href={`/individual/${game.id}`}>
                    <Eye className="text-white w-full h-4 md:h-6 lg:h-8" />
                </Link>
                <ActionButton type="edit" Icon={Pencil} />
                <ActionButton type="delete" Icon={Trash2} />
            </div>
        </div>
    );
}
