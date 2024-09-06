'use server'

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const itensPerPage = 5;

export async function fetchSearchProduct(query: string, currentPage: number) {
    const offset = (currentPage - 1) * itensPerPage
    const product = await prisma.product.findMany({
        where: {
            OR: [{ name: { contains: query, mode: "insensitive" } }]
        },
        orderBy: {
            name: "asc"
        },
        take: itensPerPage,
        skip: offset
    })

    const count = await prisma.product.count({
        where: {
            OR: [{ name: { contains: query, mode: "insensitive" } }]
        },
        orderBy: {
            name: "asc"
        },
    })

    const totalPages = Math.ceil(count / itensPerPage)

    return { product, count, totalPages };
}