'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type GameProp = { name: string; price: number; image: string; description: string; }[]
type CarrosselProp = {
    gamescel: GameProp;
    cor: string;
    classname: string;
}
export default function Carrossel({ gamescel, cor, classname }: CarrosselProp) {
    return (

        <div className="flex flex-col items-center justify-center px-6 md:gap-8 md:py-12 lg:gap-16 w-full">
            <Swiper
                modules={[Pagination, Autoplay, EffectFade, Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    1920: {
                        slidesPerView: 5,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: { // lg breakpoint
                        slidesPerView: 3,
                    },
                }}
                className="w-full drop-shadow-roxinho2"
            >
                {gamescel.map((game, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex w-full justify-center">
                            <div className={`flex flex-col font-antonio w-fit bg-${cor} rounded-3xl items-center`}>
                                <Image
                                    src={game.image}
                                    alt={game.name}
                                    width={500}
                                    height={500}
                                    className={classname}
                                    // className="w-44 h-52 md:w-60 md:h-72 lg:w-64 lg:h-72 xl:w-80 xl:h-96 rounded-t-3xl"
                                />
                                <h1 className="text-white text-center p-2 xl:text-3xl">{game.name}</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}
