import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Basictemplate from '../../util/productstemplates/Basictemplate';
const Basiccarousel = ({ products }) => {
    SwiperCore.use([Autoplay]);
    const [boolean, setBoolean] = useState(false);

    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 500px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(max-width: 500px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, [])

    useEffect(() => {
        if (matches ? products.length > 0 : products.length > 4) {
            setBoolean(true)
        }
    }, [products, matches])
    const Product = products.map((item, i) => {
        return (
            <SwiperSlide key={i}>
                <Basictemplate item={item} />
            </SwiperSlide >
        )
    })
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                loop={boolean}
                navigation={boolean}
                slidesPerView={1}
                spaceBetween={10}
                modules={[Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                className="mySwiper">
                {Product}
            </Swiper>
        </>
    )
}

export default Basiccarousel