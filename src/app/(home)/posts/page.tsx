
import PostPage from "@/components/posts-page";
import { fetchProduct } from "../../back/admin/actions";
import { Product } from "@prisma/client";

async function getProduct() {
    try {
        const response = await fetchProduct();
        const product = response.product;
        const totalPages = response.totalPages;

     return({product, totalPages})
    } catch (error) {
        console.error('Erro ao buscar jogo:', error);
        return null
    }

}

export default async function Posts() {
    const product = await getProduct()

    return(
        <div className="flex flex-col gap-8 md:gap-20">
            <h1 className="text-white text-2xl font-anton text-center drop-shadow-roxinho md:text-3xl lg:text-5xl">JOGOS</h1>
        {product?(
        <div className="space-y-24 md:space-y-32 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto">
            <PostPage product={product.product} totalPages={product?.totalPages}/>
        </div>
        ):(
            <p>Houve um erro</p>
        )}

        </div>

    )
}

