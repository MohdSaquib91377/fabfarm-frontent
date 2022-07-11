import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import { Navigation } from "swiper";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faSliders, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import "swiper/css";
import "swiper/css/navigation";

const Relatedproducts = ({ products }) => {
    SwiperCore.use([Autoplay]);
    const Product = products.map((item, i) => {
        const { id, name, image, price } = item
        console.log(image[0]?.image)
        return (
            <SwiperSlide key={i}>
                <div className="product__box product__default--single text-center">
                    {/* Start Product Image */}
                    <div className="product__img-box  pos-relative">
                        <a href="product-single-default.html" className="product__img--link">
                            <img className="product__img img-fluid"
                                src={process.env.REACT_APP_BASE_URL + image[0]?.image} alt={name} />
                        </a>
                        {/* Start Procuct Label */}
                        <span className="product__label product__label--sale-dis">-34%</span>
                        {/* End Procuct Label */}
                        {/* Start Product Action Link*/}
                        <ul className="product__action--link pos-absolute">
                            <li><a href="#modalAddCart" data-bs-toggle="modal"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
                            <li><a href="compare.html"><FontAwesomeIcon icon={faSliders} /></a></li>
                            <li><a href="wishlist.html"><FontAwesomeIcon icon={faHeart} /></a></li>
                            <li><a href="#modalQuickView" data-bs-toggle="modal"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul> {/* End Product Action Link */}
                    </div> {/* End Product Image */}
                    {/* Start Product Content */}
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
                    </div> {/* End Product Content */}
                </div>
            </SwiperSlide>
        )
    })
    return (
        <>
            <div className="product m-t-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Start Section Title */}
                            <div className="section-content section-content--border m-b-35">
                                <h5 className="section-content__title">Related Product
                                </h5>
                                <a href="shop-sidebar-grid-left.html" className="btn btn--icon-left btn--small btn--radius btn--transparent btn--border-green btn--border-green-hover-green font--regular text-capitalize">More Products<i className="fal fa-angle-right"></i></a>
                            </div>  {/* End Section Title */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="default-slider default-slider--hover-bg-red product-default-slider">
                                <div className="product-default-slider-4grid-1rows gap__col--30 gap__row--40">

                                    {/* Start Single Default Product */}
                                    <Swiper
                                        autoplay={true}
                                        loop={true}
                                        navigation={true} slidesPerView={4} spaceBetween={10} modules={[Navigation]} className="mySwiper">
                                        {Product}
                                    </Swiper>
                                    {/* End Single Default Product */}

                                    {/* Start Single Default Product */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
    }
}
export default connect(mapStateToProps)(Relatedproducts)