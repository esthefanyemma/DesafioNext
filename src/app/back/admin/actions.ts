'use server'

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { gamescel } from "../../../data/gamesData";

const itensPerPage = 5;

export async function fetchProduct() {
    const product = await prisma.product.findMany({
        orderBy:{
            id:"asc",
        },
    });

    const count= await prisma.product.count();
    const totalPages = Math.ceil(count / 5)

    return{product, totalPages};
};

export async function fetchProductsById(id:number | undefined) {
    const product = await prisma.product.findUnique({
        where:{id},
    })
    return product;
}

export async function createGame(game: {name: string, price: number, image: string, description: string}) {
    try {
        await prisma.product.create({
            data: {
                name: game.name,
                price: game.price,
                description: game.description,
                image: game.image,
            },
        });
        revalidatePath('/gerenciamento');
    } catch (error) {
        console.error("Erro ao criar o jogo:", error);
    }
}

export async function editGame(id: number, game: {name: string, price: number, description: string}) {
    await prisma.product.update({
        where:{
            id,
        },
        data: {
            name: game.name,
            price: game.price,
            description: game.description,
        },
    });

    revalidatePath('/admin/product');
}

export async function deleteGame(id: number) {
    await prisma.product.delete({
        where:{
            id,
        },
    });

    revalidatePath('/admin/product');
}