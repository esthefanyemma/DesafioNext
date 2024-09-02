'use client'
import getApi from "@/api/get-secao";
import Card from "@/components/home/secaoapi/card";
import { useEffect, useState } from "react";

type ApiProps = {
  id: number,
  title: string,
  text: string
}

export default function SecaoAPI() {

  const [cards, setCards] = useState<ApiProps[]>([]);

  useEffect(() => {

    const fetchData = async () =>{

      try{

        const {identities} = await getApi();
        setCards(identities);

      }catch{
          console.error('Deu erro');
      }

    };
    fetchData();
  });
 
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col px-10 gap-10 md:flex-row md:gap-7 lg:px-80">
        {(cards.map((card) => (
          <Card id={card.id} title={card.title} text={card.text} />
        )))}
      </div>

    </div>
  );
}