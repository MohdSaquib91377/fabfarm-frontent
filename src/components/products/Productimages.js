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
        <div style={{
            display: 'flex'
        }}>
            <div id="gallery-zoom" className="product-image--thumb product-image--thumb-horizontal pos-relative PRODUCT-RESPONSIVE">
                <Swiper direction={"vertical"}
                    navigation={true}
                    slidesPerView={3}
                    spaceBetween={10}
                    modules={[Navigation]}
                    className="mySwiper">
                    {thumbImages}
                </Swiper>
            </div>
            <div>
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
                        width: 1200,
                        height: 1800,
                        opacity: '100',
                        backgroundColor: 'black'
                    },
                    enlargedImageContainerDimensions: {
                        width: '200%',
                        height: '100%',
                    },
                    enlargedImageContainerStyle: {
                        border: 'red 1px solid',
                        zIndex: '1',
                        background: 'white'
                    },
                }} />
            </div>


        </div>
    )
}

export default Productimages