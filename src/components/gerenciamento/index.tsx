'use client'

import Card from "@/components/gerenciamento/card";
import { gamescel } from "@/data/gamesData";
import { useState } from "react";
import Paginacao from "@/components/paginacao";
import Criar from "@/components/gerenciamento/modais/criar";
import { Product } from "@prisma/client";
import { Eye } from 'lucide-react';
import Visualizar from "./modais/visualizar";
import Editar from "./modais/editar";
import Deletar from "./modais/deletar";

const itensPagina = 5;

type ProductProps = {
    product: Product[]
    totalPaginas: number
}

type ModalType = 'view' | 'edit' | 'delete' | 'create' | null;

type GameProp = { id: number; name: string; price: number; image: string; description: string | null }

export default function Gerenciar({product, totalPaginas} : ProductProps) {
    const [paginaAtual, setpaginaAtual] = useState(1);
    const [openModal, setOpenModal] = useState<ModalType>(null);
    const [selectedGame, setSelectedGame] = useState<GameProp | null>(null);

    const openModalHandler = (type: ModalType, game: GameProp) => {
        setOpenModal(type);
        setSelectedGame(game);
    };

    const closeModalHandler = () => {
        setOpenModal(null);
        setSelectedGame(null);
    };

    const ModalComponent = () => {
        switch (openModal) {
            case 'view':
                return <Visualizar game={selectedGame} onClose={closeModalHandler}/>;
            case 'edit':
                return <Editar game={selectedGame} onClose={closeModalHandler}/>;
            case 'delete':
                return <Deletar game={selectedGame} onClose={closeModalHandler}/>;
            case 'create':
                    return <Criar onClose={closeModalHandler} />;
            default:
                return null;
        }
    };

    const trocarDePagina =  (page : number) => {
        setpaginaAtual(page);
    };

    const indexInicial = (paginaAtual - 1) * itensPagina;
    const itensAtuais = product.slice(indexInicial, indexInicial + itensPagina);
    return (
        <main className="flex flex-col items-center gap-10 xl:gap-16">
            <div className="flex flex-col gap-4 md:gap-8 items-center">
                <button onClick={() => openModalHandler('create', null)}
                 className="bg-azul w-fit p-4 rounded-xl font-anybody text-base font-semibold text-white xl:rounded-2xl xl:text-2xl">Novo Jogo</button>
                <h1 className="text-white text-xl font-anton text-center drop-shadow-roxinho md:text-3xl lg:text-5xl">GERENCIAMENTO</h1>
            </div>
            <div className="flex flex-wrap gap-8 justify-center px-10 md:px-14 lg:px-40 xl:gap-20">
            {itensAtuais.map((game, index) => (
                    <Card
                        game={game}
                        key={index}
                        openModal={openModalHandler}
                    />
                ))}
            </div>
            <Paginacao paginaAtual={paginaAtual} totalPaginas={totalPaginas} trocarDePagina={trocarDePagina}/>
            {openModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white p-4 rounded-lg z-60 flex items-center justify-center">
                        <ModalComponent />
                    </div>
                </div>
            )}
            
        </main>
    )
}