import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import { Navigation } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faSliders, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import "swiper/css";
import "swiper/css/navigation";

const Carouselfeatured = ({ products }) => {
  console.log(products)
  SwiperCore.use([Autoplay]);
  const Product = products.map((item, i) => {
    const { id, name, image: [{ image }], price } = item
    return (
      <SwiperSlide key={i}>
        <div className="product__box product__default--single text-center">
          <div className="product__img-box  pos-relative">
            <a href="product-single-default.html" className="product__img--link">
              <img className="product__img img-fluid"
                src={process.env.REACT_APP_BASE_URL + image} alt={name} />
            </a>
            <span className="product__label product__label--sale-dis">-34%</span>
            <ul className="product__action--link pos-absolute">
              <li><a href="#modalAddCart" data-bs-toggle="modal"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
              <li><a href="compare.html"><FontAwesomeIcon icon={faSliders} /></a></li>
              <li><a href="wishlist.html"><FontAwesomeIcon icon={faHeart} /></a></li>
              <li><a href="#modalQuickView" data-bs-toggle="modal"><FontAwesomeIcon icon={faEye} /></a></li>
            </ul>
          </div>
          <div className="product__content m-t-20">
            <ul className="product__review">
              <li className="product__review--fill"><FontAwesomeIcon icon={faStar} /></li>
              <li className="product__review--fill"><FontAwesomeIcon icon={faStar} /></li>
              <li className="product__review--fill"><FontAwesomeIcon icon={faStar} /></li>
              <li className="product__review--fill"><FontAwesomeIcon icon={faStar} /></li>
              <li className="product__review--blank"><FontAwesomeIcon icon={faStar} /></li>
            </ul>
            <a href="product-single-default.html" className="product__link">{name}</a>
            <div className="product__price m-t-5">
              <span className="product__price">{price}</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    )
  })
  return (
    <>
      <Swiper
        autoplay={true}
        loop={true}
        navigation={true} slidesPerView={4} spaceBetween={10} modules={[Navigation]} className="mySwiper">
        {Product}
      </Swiper>
    </>
  )
}

export default Carouselfeatured