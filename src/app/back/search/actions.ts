'use server'

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const itensPagina = 5;

export async function fetchSearchProduct(query: string, currentPage: number) {
    const offset = (currentPage - 1) * itensPagina
    const product = await prisma.product.findMany({
        where: {
            OR: [{ name: { contains: query, mode: "insensitive" } }]
        },
        orderBy: {
            name: "asc"
        },
        take: itensPagina,
        // skip: offset
    })
    console.log(product)

    const count = await prisma.product.count({
        where: {
            OR: [{ name: { contains: query, mode: "insensitive" } }]
        },
        orderBy: {
            name: "asc"
        },
    })

    const totalPages = Math.ceil(count / itensPagina)

    return { product, count, totalPages };
}