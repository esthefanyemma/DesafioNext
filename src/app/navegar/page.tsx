'use client';

import Card from "@/components/navegar/card";
import Paginacao from "@/components/paginacao";
import { gamescel } from "@/data/gamesData";
import { useState } from "react";

const itensPagina = 8;

export default function  Navegar() {
    const [paginaAtual, setpaginaAtual] = useState(1);
    const trocarDePagina =  (page : number) => {
        setpaginaAtual(page);
    };
    const indexInicial = (paginaAtual - 1) * itensPagina;
    const itensAtuais = gamescel.slice(indexInicial, indexInicial + itensPagina);
    const totalPaginas = Math.ceil(gamescel.length/itensPagina);

    return(
        <main className="flex flex-col gap-4 md:gap-20">
            <h1 className="text-white text-xl font-anton text-center drop-shadow-roxinho md:text-3xl lg:text-5xl">NAVEGAR</h1>
            <div className="flex flex-wrap gap-8 justify-center px-10 md:px-14 lg:px-40">
            {itensAtuais.map((game, index) => (
                <Card game={game} key={index}/>
            ))}
            </div>
            <Paginacao paginaAtual={paginaAtual} totalPaginas={totalPaginas} trocarDePagina={trocarDePagina}/>
        </main>
    )
}