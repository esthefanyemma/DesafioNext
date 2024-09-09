type GameProp = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string | null;
}

type DeletarProps = {
    game: GameProp;
    onClose: () => void;
}

export default function Deletar({game, onClose}: DeletarProps) {
    if (!game) return null;
    return(
        <div className="flex flex-col drop-shadow-roxinho2 absolute rounded-xl bg-roxo-medio w-3/4 gap-4 z-40 p-8 items-center md:w-3/5">
            <h1 className="text-white text-xl font-anton text-center drop-shadow-roxinho md:text-3xl lg:text-5xl">DELETAR</h1>
            <form action="" className="flex flex-col w-full gap-3 md:gap-6">
                <h1 className="outline-none p-2 bg-white/10 rounded-md md:py-4 font-anybody text-white font-bold lg:text-2xl text-center">Certeza que deseja Deletar?</h1>
            </form>
            <button onClick={onClose} className="bg-roxo-claro p-2 font-anybody font-bold text-sm text-white rounded-xl md:text-xl">DELETAR</button>
        </div>
    )
}