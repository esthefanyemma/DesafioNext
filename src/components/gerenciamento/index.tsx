'use client'

import Card from "@/components/gerenciamento/card";
import { gamescel } from "@/data/gamesData";
import { useState } from "react";
import Paginacao from "@/components/paginacao";
import Criar from "@/components/gerenciamento/modais/criar";
import { Product } from "@prisma/client";

const itensPagina = 5;

type ProductProps = {
    product: Product[]
    totalPaginas: number
}

export default function Gerenciar({product, totalPaginas} : ProductProps) {
const [paginaAtual, setpaginaAtual] = useState(1);
    const trocarDePagina =  (page : number) => {
        setpaginaAtual(page);
    };
    const indexInicial = (paginaAtual - 1) * itensPagina;
    const itensAtuais = product.slice(indexInicial, indexInicial + itensPagina);
    return (
        <main className="flex flex-col items-center gap-10 xl:gap-16">
            <div className="flex flex-col gap-4 md:gap-8 items-center">
                <button className="bg-azul w-fit p-4 rounded-xl font-anybody text-base font-semibold text-white xl:rounded-2xl xl:text-2xl">Novo Jogo</button>
                <h1 className="text-white text-xl font-anton text-center drop-shadow-roxinho md:text-3xl lg:text-5xl">GERENCIAMENTO</h1>
            </div>
            <div className="flex flex-wrap gap-8 justify-center px-10 md:px-14 lg:px-40 xl:gap-20">
            {itensAtuais.map((game, index) => (
                <Card game={game} key={index}/>
            ))}
            </div>
            <Paginacao paginaAtual={paginaAtual} totalPaginas={totalPaginas} trocarDePagina={trocarDePagina}/>
        </main>
    )
}