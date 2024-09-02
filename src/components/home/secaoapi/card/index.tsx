type Card = {
    id: number,
    title: string,
    text: string
}

export default function Card({id, title, text}:Card){
    return(
        <div className="flex flex-col bg-roxo-medio rounded-lg justify-start items-center gap-4 p-4">
            <h1 className="text-white font-anybody text-xl text-center lg:text-3xl">{title}</h1>
            <p className="text-base text-white font-anybody text-center lg:text-xl">{text}</p>
        </div>
    )
}