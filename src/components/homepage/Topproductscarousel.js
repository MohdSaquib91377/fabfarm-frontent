import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";


const Topproductscarousel = ({ seeds }) => {
    SwiperCore.use([Autoplay]);
    const productSeeds = seeds.map((items, i) => {
        const { name, price, offer } = items;
        return (
            <SwiperSlide key={i}>
                <div className="garden_shop_slide" style={{ height: '420px', width: '250px' }}>
                    <div className="item_image">
                        <img src="images/home/pumpkin-seeds.jpg" alt="image" className="img-fluid" />
                    </div>
                    <div className="item_details">
                        <div className="item_name">
                            <h5>{name}</h5>
                        </div>
                        <h6><span><i className="fa fa-usd" aria-hidden="true"></i></span>{price}</h6>
                    </div>
                    <span className="label">{offer}</span>
                    <input type="checkbox" id="wishlist_1" />
                    <label htmlFor="wishlist_1">
                        <span className="wish_icon"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                        <span className="wish_icon"><i className="fa fa-heart" aria-hidden="true"></i></span>
                    </label>
                </div>
            </SwiperSlide>
        );
    })
    return (
        <Swiper
            autoplay={true}
            loop={true}
            navigation={true} slidesPerView={4} spaceBetween={10} modules={[Navigation]} className="mySwiper">
            {productSeeds}
        </Swiper>
    )
}

export default Topproductscarousel