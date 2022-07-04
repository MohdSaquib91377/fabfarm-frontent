import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import { Navigation } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../../../redux/actions/productActions';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import { connect } from 'react-redux';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
const Carouselfeatured = ({ isAuthorized, catID, products, addToCart }) => {
  SwiperCore.use([Autoplay]);
  const axiosPrivate = useAxiosPrivate()
  const [loop, setLoop] = useState(false);
  const addToWishList = (id) => {
    if (isAuthorized) {
      axiosPrivate.post('/api/v1/wishlist/wishlist/add-to-wishlist/', { product_id: id })
        .then(response =>{})
        .catch(error => {throw(error)})
    }
  }
  useEffect(() => {
    if (products.length > 4) {
      setLoop(true)
    }
  }, [products])
  const Product = products.map((item, i) => {
    const { id, name, image: [{ image }], price } = item
    return (
      <SwiperSlide key={i}>
        <div className="product__box product__default--single text-center">
          <div className="product__img-box  pos-relative">
            <Link to={`/shop/${catID}/product/${id}`} className="product__img--link">
              <img className="product__img img-fluid"
                src={process.env.REACT_APP_BASE_URL + image} alt={name} />
            </Link>
            <span className="product__label product__label--sale-dis">-34%</span>
            <ul className="product__action--link pos-absolute">
              <li><button onClick={() => addToCart(id)}><FontAwesomeIcon icon={faShoppingCart} /></button></li>
              <li><Link to='/checkout'><button onClick={() => addToCart(id)}>Buy</button></Link></li>
              <li><button onClick={() => addToWishList(id)}><FontAwesomeIcon icon={faHeart} /></button></li>
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
            <Link to={`/product/${id}`} className="product__link">{name}</Link>
            <div className="product__price m-t-5">
              <span className="product__price">{price}</span>
            </div>
          </div>
        </div>
      </SwiperSlide >
    )
  })
  return (
    <>
      <Swiper
        autoplay={true}
        loop={loop}
        navigation={true}
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
const mapStateToProps = (state) => {
  return {
    isAuthorized: state.shop.isAuthorized
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Carouselfeatured)