import { X } from "lucide-react";
import Header from "..";
import { useState } from "react";

export default function MenuHam() {
    const [isOpen, setIsOpen] = useState(false);

    const MenuHam = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:w-auto bg-roxo-escuro w-full`}>
            <X className="text-white text-xl"></X>
        </div>
    )
}