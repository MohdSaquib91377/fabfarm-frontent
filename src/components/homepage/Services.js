import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import { Navigation } from "swiper";
import { useNavigate } from 'react-router-dom'
import { setMainCategory } from '../../redux/actions/productActions';
import { connect } from 'react-redux';
const Services = ({ category, setMainCategory }) => {
    let Navigate = useNavigate();
    SwiperCore.use([Autoplay]);
    const [boolean, setBoolean] = useState(false);

    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 810px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(max-width: 810px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, [])

    useEffect(() => {
        if (matches ? category.length > 1 : category.length > 4) {
            setBoolean(true)
        }
    }, [category, matches])
    const navigate = (id) => {
        setMainCategory(true)
        Navigate(`/shop/${id}/`)
    }

    return (
        <>
            <div className="garden_about_wrapper clv_section">
                <div className="container">
                    <div className="garden_service_wrapper">
                        <div className="row">
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
                                {
                                    category.map((category, index) => {
                                        const { id, name, image } = category;
                                        return (
                                            <div className="col-lg-3 col-md-6">
                                                <SwiperSlide key={index}>
                                                    <div className="garden_service_block" onClick={() => navigate(id)}>
                                                        <div className="service_image">
                                                            <span>
                                                                {
                                                                    image !== null ?
                                                                        <img width='64px' height='70px' src={process.env.REACT_APP_BASE_URL + image} alt="" />
                                                                        :
                                                                        undefined
                                                                }
                                                            </span>
                                                        </div>
                                                        <h3>{name}</h3>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        )
                                    })
                                }
                            </Swiper>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        setMainCategory: (boolean) => dispatch(setMainCategory(boolean)),
    };
};
export default connect(null, mapDispatchToProps)(Services)