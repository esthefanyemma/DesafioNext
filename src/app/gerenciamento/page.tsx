'use server';

import Card from "@/components/gerenciamento/card";
import { gamescel } from "@/data/gamesData";
import { useState } from "react";
import Paginacao from "@/components/paginacao";
import Criar from "@/components/gerenciamento/modais/criar";
import Gerenciar from "@/components/gerenciamento";
import { Product } from "@prisma/client";
import { fetchProduct } from "../back/actions";

export default async function Gerenciamento() {
    let product: Product[] = [];
    let totalPages: number = 0;

    try {
        const response = await fetchProduct();
        product = response.product;
        totalPages = response.totalPages;
    } catch (error) {
        console.error('Erro ao buscar jogo:', error);
    }
    return(
        <Gerenciar product={product} totalPaginas={totalPages}/>
    )
}


