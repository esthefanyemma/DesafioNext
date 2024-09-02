import Image from "next/image";

export default function Login() {
    return(
        <main className="flex flex-col items-center px-16 md:px-44 xl:px-[500px]">
            <div className="flex flex-col w-full gap-4 rounded-2xl drop-shadow-roxinho2 mx-10 py-10 bg-roxo-medio items-center xl:gap-14 xl:rounded-3xl xl:py-24 md:px-10 md:flex-row">
                <Image 
                src="/logo/logo.png" 
                alt="logo" 
                width={500} 
                height={500} 
                className="w-20 md:w-32 xl:w-40"
                />
                <div className="flex flex-col gap-4 w-full items-center">
                <h1 className="text-white text-xl font-anton text-center drop-shadow-roxinho md:text-3xl lg:text-5xl">LOGIN</h1>
                <div className="flex flex-col w-full px-4 gap-4">
                    <input className="outline-none py-1 px-2 rounded-lg xl:py-2" type="email" placeholder="digite seu email"/>
                    <input className="outline-none py-1 px-2 rounded-lg xl:py-2" type="password" placeholder="informe sua senha"/>
                </div>
                <h1 className="font-anybody text-lg text-slate-500 xl:text-xl">Cadastre-se</h1>
                </div>
            </div>
        </main>
    )
}