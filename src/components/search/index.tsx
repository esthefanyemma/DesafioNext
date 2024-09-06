'use client'

import { Search as SearchIcon} from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState<string | ''>(searchParams.get('query') || '')
    
    const handleSearch = (query: string) => {
        if(!query) {
            return
        }
        const params = new URLSearchParams();
        params.set('query', query)
        router.push(`/search/?${params.toString()}`)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch(searchTerm)
    }

    return(
        <form onSubmit={handleSubmit} className="flex basis-full" autoComplete="off">
            <div className="flex w-full flex-col items-center gap-6">
                <div className="relative w-full">
                    <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-7 h-7 text-white" />
                    <input
                        id="search"
                        name="search"
                        type="text"
                        className="focus:outline-none focus:ring-0 shadow-[0_0_30px_rgba(189,120,255,0.5)] border-transparent hover:bg-roxo-escuro/50 duration-300 bg-roxo-escuro w-full rounded-xl pl-16 py-4 text-white"
                        placeholder="Faça sua busca!"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </form>
    )
}