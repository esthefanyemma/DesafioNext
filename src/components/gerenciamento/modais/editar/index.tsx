import { editGame } from "@/app/back/admin/actions";
import { useState } from "react";

type GameProp = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string | null;
}

type EditarProps = {
    game: GameProp;
    onClose: () => void;
}

interface FormDataType {
    name: string;
    price: number;
    description: string;
    image: string;
}

export default function Editar({game, onClose}: EditarProps) {
    const [formData, setFormData] = useState({
        name: game.name || '',  // Valor inicial ou vazio se não houver
        price: game.price || '',
        description: game.description || ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

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
        editGame(game.id, data);
        onClose();
    }    
    if (!game) return null;
    return(
        <div className="flex justify-center flex-col drop-shadow-roxinho2 absolute rounded-xl bg-roxo-medio w-3/4 gap-4 z-40 p-8 items-center md:w-3/5">
            <h1 className="text-white text-xl font-anton text-center drop-shadow-roxinho md:text-3xl lg:text-5xl">EDITAR</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3 md:gap-6">
                <input type="text" name="name" id="titulo" className="outline-none p-2 bg-white rounded-md md:py-4" placeholder="Nome do Jogo" value={formData.name} onChange={handleChange} required/>
                <textarea name="description" id="descricao" placeholder="Descrição" className="outline-none pl-2 bg-white rounded-md md:py-2" required>{formData.description}</textarea>
                <input type="number" step={0.01} name="price" id="preco" placeholder="Preço" className="outline-none bg-white p-2 rounded-md md:py-4" value={formData.price} onChange={handleChange} required/>
            <button type="submit" className="bg-roxo-claro p-2 font-anybody font-bold text-sm text-white rounded-xl md:text-xl">SALVAR</button>
            </form>
        </div>
    )
}