import React, { useState } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Productimages = ({ image }) => {
    const [prevImage, setPrevImage] = useState(0)

    const thumbImages = image.map((item, i) => {
        return (
            <SwiperSlide key={i} onClick={() => setPrevImage(i)} ><img src={process.env.REACT_APP_BASE_URL + item.thumbnail} alt={item.image_caption} /></SwiperSlide>
        )
    })
    return (
        <>
            <ReactImageMagnify {...{
                smallImage: {
                    alt: image[prevImage].image_caption,
                    isFluidWidth: true,
                    src: process.env.REACT_APP_BASE_URL + image[prevImage].image
                },
                largeImage: {
                    src: process.env.REACT_APP_BASE_URL + image[prevImage].image,
                    width: 1200,
                    height: 1800
                },
                enlargedImageContainerDimensions: {
                    width: '200%',
                    height: '100%',
                }
            }} />

            <div id="gallery-zoom" className="product-image--thumb product-image--thumb-horizontal pos-relative">
                <Swiper navigation={true} slidesPerView={4} spaceBetween={10} modules={[Navigation]} className="mySwiper">
                    {thumbImages}
                </Swiper>
            </div>
        </>
    )
}

export default Productimages