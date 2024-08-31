import { Search as SearchIcon} from "lucide-react";

export default function Search() {
    return(
        <form className="flex basis-full" autoComplete="off">
            <div className="flex w-full flex-col items-center gap-6">
                <div className="relative w-full">
                    <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-7 h-7 text-white" />
                    <input
                        id="search"
                        name="search"
                        type="text"
                        className="focus:outline-none focus:ring-0 shadow-[0_0_30px_rgba(189,120,255,0.5)] border-transparent bg-roxo-escuro w-full rounded-xl pl-16 py-4 text-white"
                        placeholder="Faça sua busca!"
                    />
                </div>
            </div>
        </form>
    )
}