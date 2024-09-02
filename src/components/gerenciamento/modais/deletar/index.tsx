export default function Deletar() {
    return(
        <div className="flex flex-col drop-shadow-roxinho2 absolute rounded-xl bg-roxo-medio w-3/4 gap-4 z-40 p-8 items-center md:w-3/5">
            <h1 className="text-white text-xl font-anton text-center drop-shadow-roxinho md:text-3xl lg:text-5xl">DELETAR</h1>
            <form action="" className="flex flex-col w-full gap-3 md:gap-6">
                <input type="text" name="titulo" id="titulo" className="outline-none p-2 bg-white rounded-md md:py-4" placeholder="Nome do Jogo" readOnly/>
                <textarea name="descricao" id="descricao" placeholder="Descrição" className="outline-none pl-2 bg-white rounded-md md:py-2" readOnly></textarea>
                <input type="number" name="preco" id="preco" placeholder="Preço" className="outline-none bg-white p-2 rounded-md md:py-4" readOnly/>
            </form>
            <button className="bg-roxo-claro p-2 font-anybody font-bold text-sm text-white rounded-xl md:text-xl">DELETAR</button>
        </div>
    )
}