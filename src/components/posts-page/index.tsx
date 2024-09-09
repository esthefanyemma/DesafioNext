'use client'

import { Product } from "@prisma/client";
import PostCard from "../post-card";
import { useState } from "react";
import Paginacao from "../paginacao";

const itensPagina = 5;

type ProductProps = {
    product: Product[]
    totalPages: number
}

export default function PostPage({ product, totalPages }: ProductProps) {
    const [paginaAtual, setpaginaAtual] = useState(1);
    const trocarDePagina = (page: number) => {
        setpaginaAtual(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const indexInicial = (paginaAtual - 1) * itensPagina;
    const itensAtuais = product.slice(indexInicial, indexInicial + itensPagina);

    return (
        <div className="w-full flex flex-col gap-12">
            {itensAtuais.map((game, index) => (
                <PostCard game={game} key={index} />
            ))}
            <Paginacao paginaAtual={paginaAtual} totalPaginas={totalPages} trocarDePagina={trocarDePagina} />

        </div>
    )
}