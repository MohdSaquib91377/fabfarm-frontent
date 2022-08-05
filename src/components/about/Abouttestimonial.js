import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
const Abouttestimonial = () => {
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


    return (
        <>
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                loop={true}
                navigation={true}
                slidesPerView={1}
                spaceBetween={10}
                modules={[Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="testimonial_slide">
                            <span className="rounded_quote"><img src={process.env.PUBLIC_URL + "/images/quote.png"} alt="image" /></span>
                            <span className="bg_quote"><img src={process.env.PUBLIC_URL + "/images/bg_quote.png"} alt="image" /></span>
                            <div className="client_img">
                                <img src="https://via.placeholder.com/150x160" alt="image" />
                            </div>
                            <div className="client_message">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ilabore et dadhjiolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi liquip ex ea commodoersio consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugt nulla pariatuaerniri Excepteur sint occaecat cupidatat non proident.</p>
                                <h3>Halil Alex <span> Agriculture Expert</span></h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide >

                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="testimonial_slide">
                            <span className="rounded_quote"><img src="/images/quote.png" alt="image" /></span>
                            <span className="bg_quote"><img src="/images/bg_quote.png" alt="image" /></span>
                            <div className="client_img">
                                <img src="https://via.placeholder.com/150x160" alt="image" />
                            </div>
                            <div className="client_message">
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi liquip ex ea commodoersio consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugt nulla pariatuaerniri Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ilabore et dadhjiolore magna aliqua.</p>
                                <h3>john paradox <span> Agriculture Expert</span></h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide >

            </Swiper>
        </>
    )
}

export default Abouttestimonial