import { fetchProductsById } from "@/app/back/actions";
import IndividualJogo from "@/components/individual-jogo";
import { Product } from '@prisma/client';

type ID = {
    id: number;
}

export default async function ID({params}: {
    params: {id:string}
}) {
    const id = parseInt(params.id, 10);
    const product = await fetchProductsById(id);
    return(
        <div>
            {product?(
                <div className="w-full md:w-10/12 m-auto py-8 px-4 md:p-0 min-h-screen">
                    <IndividualJogo game = {product}/>
                </div>
            ):(
                <p>ERRO!</p>
            )}
        </div>
    )
}

