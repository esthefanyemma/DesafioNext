export default function Contato() {
    return (
        <main className="flex flex-col px-10 gap-4 md:px-48 xl:px-[700px] xl:gap-12">
            <h1 className="text-white text-xl font-anton text-center drop-shadow-roxinho md:text-3xl lg:text-5xl">ENTRE EM CONTATO</h1>
            <div className="flex flex-col w-full drop-shadow-roxinho2 bg-roxo-medio py-4 rounded-2xl gap-4 items-center xl:py-8">
                <div className="flex flex-col items-center">
                    <h1 className="text-base font-anybody font-bold text-white xl:text-3xl">Telefone:</h1>
                    <h1 className="text-base font-anybody font-normal tracking-widest text-white xl:text-2xl">32 985853231</h1>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-base font-anybody font-bold text-white xl:text-3xl">Email:</h1>
                    <h1 className="text-base font-anybody font-normal tracking-widest text-white xl:text-2xl">fanygames@gmail.com</h1>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-base font-anybody font-bold text-white xl:text-3xl">Localização:</h1>
                    <h1 className="text-base font-anybody font-normal tracking-widest text-white xl:text-2xl">Rua Arco-íris, nº 99</h1>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-base font-anybody font-bold text-white xl:text-3xl">CEP:</h1>
                    <h1 className="text-base font-anybody font-normal tracking-widest text-white xl:text-2xl">36.077-11</h1>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-base font-anybody font-bold text-white xl:text-3xl">Instagram:</h1>
                    <h1 className="text-base font-anybody font-normal tracking-widest text-white xl:text-2xl">@fanygames</h1>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-base font-anybody font-bold text-white xl:text-3xl">Facebook:</h1>
                    <h1 className="text-base font-anybody font-normal tracking-widest text-white xl:text-2xl">Fany Games</h1>
                </div>
            </div>
        </main>
    )
}