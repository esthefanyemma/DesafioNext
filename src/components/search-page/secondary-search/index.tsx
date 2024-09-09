import Search from "@/components/search";
import { SearchIcon } from "lucide-react";

type SecondarySearchProps = {
    count: number;
}

export default function SecondarySearch({count} : SecondarySearchProps) {
    return(
        <form
        className="flex w-full lg:w-10/12"
        id="secondary-search"
        autoComplete="off">
            <div className="flex flex-col w-full gap-2 my-10">
                <span className="text-white/70">
                    Total de {count} publicações encontradas.
                </span>
            </div>

        </form>
    )
}