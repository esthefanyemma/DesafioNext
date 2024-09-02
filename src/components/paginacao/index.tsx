type PaginacaoProps = {
    paginaAtual: number;
    totalPaginas: number;
    trocarDePagina: (page : number) => void;
};

export default function Paginacao({paginaAtual, totalPaginas, trocarDePagina} : PaginacaoProps) {
    return(
        <div className="container mx-auto p-4">
      <div className="flex justify-center">
        {Array.from({ length: totalPaginas }, (_, index) => (
          <button
            key={index}
            onClick={() => trocarDePagina(index + 1)}
            className={`px-4 py-2 text-sm md:px-6 md:py-4 mx-1 rounded-full font-anybody font-bold md:text-xl ${
              paginaAtual === index + 1 ? 'bg-azul text-roxo-escuro' : 'bg-azul/50'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    )
}