'use client';
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from 'react';
import ViewModal from "@/components/gerenciamento/modais/visualizar";
import EditModal from "@/components/gerenciamento/modais/editar";
import CriarModal from "@/components/gerenciamento/modais/criar";
import DeletarModal from "@/components/gerenciamento/modais/deletar"

type GameProp = {id: number; name: string; price: number; image: string; description: string|null; }
type CardProp = {
    game: GameProp;
}

type ModalType = 'view' | 'edit' | 'delete';

export default function Card({game} : CardProp) {
    const [modalOpen, setModalOpen] = useState<ModalType | null>(null);

    const openModal = (modalType: ModalType) => {
        setModalOpen(modalType);
    };

    const closeModal = () => {
        setModalOpen(null);
    };
    return (
        <div className={`xl:rounded-[80px] drop-shadow-roxinho2 justify-between flex flex-row font-antonio w-full bg-roxo-medio rounded-3xl lg:rounded-[50px] items-center`}>
            <Image
                src={game.image}
                alt={game.name}
                width={500}
                height={500}
                className="w-20 h-24 md:w-32 md:h-36 lg:w-44 lg:h-48 xl:w-48 xl:h-52 rounded-l-3xl xl:rounded-l-[80px] lg:rounded-l-[50px]"
            />
            <h1 className="text-white w-1/3 font-anybody text-center text-xs p-2 md:text-lg lg:text-2xl xl:text-3xl">{game.name}</h1>
            <div className="flex flex-col w-1/6 pr-4 gap-1 md:flex-row">
            <button onClick={() => openModal('view')} className=" bg-roxo-claro rounded-lg py-1 md:py-2 md:w-1/3 md:rounded-xl  lg:rounded-2xl">
                <Eye className="text-white w-full h-4 md:h-6 lg:h-8"></Eye>
            </button>
            <button className=" bg-roxo-claro rounded-lg py-1 md:py-2 md:w-1/3 md:rounded-xl  lg:rounded-2xl">
                <Pencil className="text-white w-full h-4 md:h-6 lg:h-8"></Pencil>
            </button>
            <button className=" bg-roxo-claro rounded-lg py-1 md:py-2 md:w-1/3 md:rounded-xl lg:rounded-2xl">
                <Trash2 className="text-white w-full h-4 md:h-6 lg:h-8"></Trash2>
            </button>
            </div>
        </div>
    );
}
