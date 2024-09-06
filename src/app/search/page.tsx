import SearchPage from "@/components/search-page";
import { fetchSearchProduct } from "../back/search/actions";

type ProductProp = {
    query: string
    currentPage: number
}

async function getProduct({query, currentPage} : ProductProp) {
    try {
        const response = await fetchSearchProduct(query, currentPage);
        const product = response.product;
        const totalPages = response.totalPages;

     return({product, totalPages})
    } catch (error) {
        console.error('Erro ao buscar jogo:', error);
        return null
    }
}

export default async function Search({
    searchParams,
}: {
    searchParams: {
        query: string
        currentPage: number;
    }
} ) {

    // const query = searchParams?.query || ''
    // const currentPage = searchParams?.currentPage || 1
    const product = await getProduct(searchParams)

    return(
        <div>
            {product?(
                <div className="space-y-24 md:space-y-32 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto">
                    <SearchPage product={product.product} totalPages={product?.totalPages}/>
                </div>
                ):(
                    <p>Houve um erro</p>
                )}
        </div>
    )
}