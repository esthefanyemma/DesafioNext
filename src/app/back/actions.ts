'use server'

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export async function searchProduct() {
    
}