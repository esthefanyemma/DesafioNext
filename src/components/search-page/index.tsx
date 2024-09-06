'use client'

import { useState } from "react";
import PostCard from "../post-card";
import SecondarySearch from "./secondary-search";
import Link from 'next/link';
import { Product } from "@prisma/client";
import Paginacao from "../paginacao";

const itensPagina = 5;

type ProductProps = {
    product: Product[]
    totalPages: number
}

export default function SearchPage({product, totalPages} : ProductProps) {
    const [paginaAtual, setpaginaAtual] = useState(1);
    const trocarDePagina =  (page : number) => {
        setpaginaAtual(page);
    };
    const indexInicial = (paginaAtual - 1) * itensPagina;
    const itensAtuais = product.slice(indexInicial, indexInicial + itensPagina);

    const count = 0;
    return (
        <div className="w-full">
            <SecondarySearch count={count} />
            {count != 0 ? (
                <div className="w-full flex flex-col">
                    <span className="text-2xl font-anybody text-white">
                        Nenhuma publicação encontrada.
                    </span>
                    <span className="text-xl text-white/70">
                        Tente procurar por outra coisa, ou explore
                        <Link href={'/src/app/navegar/page.tsx'}></Link>
                    </span>
                </div>
            ) : (
                <div className="w-full flex flex-col gap-12">
                    {itensAtuais.map((game, index) => (
                        <PostCard game={game} key={index} />
                    ))}
                    <Paginacao paginaAtual={paginaAtual} totalPaginas={totalPages} trocarDePagina={trocarDePagina}/>
                </div>
            )}
        </div>
    )
}