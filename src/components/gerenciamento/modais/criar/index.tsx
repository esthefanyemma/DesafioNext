import { useState } from "react";
import { createGame } from "@/app/back/admin/actions";
import { Product } from "@prisma/client";

type CriarProps = {
    onClose: () => void;
};

interface FormDataType {
    name: string;
    price: number;
    description: string;
    image: string;
}

export default function Criar({ onClose }: CriarProps) {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Impede o comportamento padrão do formulário
        
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
    
        // Converte FormData em um objeto do tipo esperado
        const data: FormDataType = {
            name: formData.get('name') as string,
            description: formData.get('description') as string,
            price: Number(formData.get('price')) as number,
            image: "/home/gta.jpg",
        };
        console.log(data)
        
        // Chama a função updateMember com os dados do formulário
        createGame(data);
        onClose();
    }    

    return(
        <div className="flex flex-col drop-shadow-roxinho2 absolute rounded-xl bg-roxo-medio w-3/4 gap-4 z-40 p-8 items-center md:w-3/5">
            <h1 className="text-white text-xl font-anton text-center drop-shadow-roxinho md:text-3xl lg:text-5xl">CRIAR</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3 md:gap-6">
                <input type="text" name="name" id="titulo" className="outline-none p-2 bg-white rounded-md md:py-4" placeholder="Nome do Jogo" required/>
                <textarea name="description" id="descricao" placeholder="Descrição" className="outline-none pl-2 bg-white rounded-md md:py-2" required></textarea>
                <input type="number" step={0.01} name="price" id="price" placeholder="Preço" className="outline-none bg-white p-2 rounded-md md:py-4" required/>
            <button type="submit" className="bg-roxo-claro p-2 font-anybody font-bold text-sm text-white rounded-xl md:text-xl">SALVAR</button>
            </form>
        </div>
    )
}