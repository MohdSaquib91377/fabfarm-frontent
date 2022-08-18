import React, { useEffect, useState } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Productimages = ({ image }) => {
    const [prevImage, setPrevImage] = useState(0)
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 500px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(max-width: 500px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, [])
    const thumbImages = image.map((item, i) => {
        return (
            <SwiperSlide key={i} onClick={() => setPrevImage(i)} ><img src={process.env.REACT_APP_BASE_URL + item.image} alt={item.image_caption} /></SwiperSlide>
        )
    })

    if (matches) {
        return (
            <div className='prduct-images-cantainer'>
                {
                    image.length !== 0 ?
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "blue",
                                "--swiper-pagination-color": "blue",
                            }}
                            zoom={true}
                            navigation={false}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Zoom, Navigation, Pagination]}
                            className="prduct-images-swiper-cantainer"
                        >
                            {
                                image.map((item, i) => {
                                    return (
                                        <SwiperSlide key={i}><img src={process.env.REACT_APP_BASE_URL + item.image} alt={item.image_caption} /></SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        :
                        <img src="/images/noimagefound.jpg" alt='not found' />

                }
            </div>
        )
    }
    else {
        return (
            <div className='productNameProductPage'>
                <div id="gallery-zoom" className="product-image--thumb product-image--thumb-horizontal pos-relative PRODUCT-RESPONSIVE">
                    {
                        image.length !== 0 ?
                            <Swiper
                                direction={"vertical"}
                                navigation={true}
                                slidesPerView={5}
                                spaceBetween={20}
                                modules={[Navigation]}
                                className="swiper-container-vertical">
                                {thumbImages}
                            </Swiper>
                            :
                            <img src="/images/noimagefound.jpg" alt='not found' />
                    }
                </div>
                <div>
                    {
                        image.length !== 0 ?
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: image[prevImage].image_caption,
                                    isFluidWidth: false,
                                    src: process.env.REACT_APP_BASE_URL + image[prevImage].image,
                                    width: 400,
                                    height: 500
                                },
                                largeImage: {
                                    src: process.env.REACT_APP_BASE_URL + image[prevImage].image,
                                    width: 1000,
                                    height: 1800,
                                    opacity: '100',
                                    backgroundColor: 'black'
                                },
                                enlargedImageContainerDimensions: {
                                    width: '180%',
                                    height: '100%',
                                },
                                enlargedImageContainerStyle: {
                                    border: 'red 1px solid',
                                    zIndex: '1',
                                    background: 'white'
                                },
                            }} />
                            :
                            <img src="/images/noimagefound.jpg" alt='not found' />
                    }
                </div>


            </div>
        )
    }

}

export default Productimages