import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToCart, incrementQuantity, decrementQuantity } from '../../redux/actions/productActions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faStar } from '@fortawesome/free-regular-svg-icons';
import { faTruckLoading, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import Tabtitle from '../../pages/Tabtitle'
import ReactImageMagnify from 'react-image-magnify';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import './product.css';
const Product = ({ currentItem, addToCart, incrementQuantity, decrementQuantity }) => {
    const { id, image, title, description, price, quantity } = currentItem;
    const [itemQuantity, setItemQuantity] = useState(1)
    const [prevImage, setPrevImage] = useState(0)
    Tabtitle('FAB | Shop')
    useEffect(() => {
        setItemQuantity(quantity)
    }, currentItem)
    const thumbImages = image.map((item, i) => {
        return (
            <SwiperSlide key={i} onClick={() => setPrevImage(i)} ><img src={process.env.REACT_APP_LOCAL_URL + item} alt='' /></SwiperSlide>
        )
    })
    return (
        <>
            {/* <!--Breadcrumb--> */}
            <div className="breadcrumb_wrapper" style={{ minHeight: '250px' }}>
                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="breadcrumb_inner">
                                <h3>{title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb_block">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/shop'>&nbsp;Shop</Link></li>
                        <li> &nbsp; {id}</li>
                    </ul>
                </div>
            </div>
            <div id="main-container" style={{
                marginTop: '100px'
            }}>

                {/* Start Product Details Gallery */}
                <div className="product-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="product-gallery-box product-gallery-box--default m-b-60">
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: process.env.REACT_APP_LOCAL_URL + image[prevImage]
                                        },
                                        largeImage: {
                                            src: process.env.REACT_APP_LOCAL_URL + image[prevImage],
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
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="product-details-box m-b-60">
                                    <h4 className="font--regular m-b-20">{title}</h4>
                                    <ul className="product__review">
                                        <li className="product__review--fill"><FontAwesomeIcon icon={faStar} /></li>
                                        <li className="product__review--fill"><FontAwesomeIcon icon={faStar} /></li>
                                        <li className="product__review--fill"><FontAwesomeIcon icon={faStar} /></li>
                                        <li className="product__review--fill"><FontAwesomeIcon icon={faStar} /></li>
                                        <li className="product__review--blank"><FontAwesomeIcon icon={faStar} /></li>
                                    </ul>
                                    <div className="product__price m-t-5">Rs
                                        <span className="product__price product__price--large">{price}</span>
                                        <span className="product__tag m-l-15 btn--tiny btn--green">-34%</span>
                                    </div>

                                    <div className="product__desc m-t-25 m-b-30">
                                        <p>{description}</p>
                                    </div>
                                    <div className="product-var p-tb-30">
                                        <div className="product__stock m-b-20">
                                            <span className="product__stock--in"><FontAwesomeIcon color='green' icon={faCheckCircle} /> 199 IN STOCK</span>
                                        </div>
                                        <div className="product-quantity product-var__item">
                                            <ul className="product-modal-group">
                                                <li><a href="#modalShippinginfo" data-bs-toggle="modal" className="link--gray link--icon-left"><FontAwesomeIcon icon={faTruckLoading} /> &nbsp; Shipping</a></li>
                                                <li><a href="#modalProductAsk" data-bs-toggle="modal" className="link--gray link--icon-left"><FontAwesomeIcon icon={faEnvelope} /> &nbsp; Ask About This product</a></li>
                                            </ul>
                                        </div>
                                        <div className="product-quantity product-var__item d-flex align-items-center">
                                            <span className="product-var__text">Quantity: </span>
                                            <form className="quantity-scale m-l-20">
                                                <button className="value-button" onclick={() => decrementQuantity(id)}>-</button>
                                                <input className='input-items-number' type="number" id="number" value={itemQuantity} />
                                                <button className="value-button" onclick={() => incrementQuantity(id)}>+</button>
                                            </form>
                                        </div>
                                        <div className="product-var__item">
                                            <a href="#modalAddCart" data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn--long btn--radius-tiny btn--green btn--green-hover-black btn--uppercase btn--weight m-r-20">Add to cart</a>
                                            <a href="wishlist.html" className="btn btn--round btn--round-size-small btn--green btn--green-hover-black">
                                            <FontAwesomeIcon icon={faHeart} />
                                            </a>
                                        </div>
                                        <div className="product-var__item">
                                            <div className="dynmiac_checkout--button">
                                                <input type="checkbox" id="buy-now-check" value="1" className="p-r-30" />
                                                <label htmlFor="buy-now-check" className="m-b-20 pl-4">I agree with the terms and condition</label>
                                                <a href="cart.html" className="btn btn--block btn--long btn--radius-tiny btn--green btn--green-hover-black text-uppercase m-r-35">Buy It Now</a>
                                            </div>
                                        </div>
                                        <div className="product-var__item">
                                            <span className="product-var__text">Guaranteed safe checkout </span>
                                            <ul className="payment-icon m-t-5">
                                                <li><img src="assets/img/icon/payment/paypal.svg" alt="" /></li>
                                                <li><img src="assets/img/icon/payment/amex.svg" alt="" /></li>
                                                <li><img src="assets/img/icon/payment/ipay.svg" alt="" /></li>
                                                <li><img src="assets/img/icon/payment/visa.svg" alt="" /></li>
                                                <li><img src="assets/img/icon/payment/shoify.svg" alt="" /></li>
                                                <li><img src="assets/img/icon/payment/mastercard.svg" alt="" /></li>
                                                <li><img src="assets/img/icon/payment/gpay.svg" alt="" /></li>
                                            </ul>
                                        </div>
                                        <div className="product-var__item d-flex align-items-center">
                                            <span className="product-var__text">Share: </span>
                                            <ul className="product-social m-l-20">
                                                <li><a href="#"><FontAwesomeIcon color='#4267B2' icon={faFacebook} /></a></li>
                                                <li><a href="#"><FontAwesomeIcon color='#00acee' icon={faTwitter} /></a></li>
                                                <li><a href="#"><FontAwesomeIcon color='#c8232c' icon={faPinterest} /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Product Details Gallery */}

                {/* Start Product Details Tab */}
                <div className="product-details-tab-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="product-details-content">
                                    <ul className="tablist tablist--style-black tablist--style-title tablist--style-gap-30 nav">
                                        <li><a className="nav-link active" data-bs-toggle="tab" href="#product-desc">Description</a></li>
                                        <li><a className="nav-link" data-bs-toggle="tab" href="#product-dis">Product Details</a></li>
                                        <li><a className="nav-link" data-bs-toggle="tab" href="#product-review">Reviews</a></li>
                                    </ul>
                                    <div className="product-details-tab-box">
                                        <div className="tab-content">
                                            {/* Start Tab - Product Description */}
                                            <div className="tab-pane show active" id="product-desc">
                                                <div className="para__content">
                                                    <p className="para__text">Use the Canon VIXIA GX10 Camcorder to capture UHD 4K video at 60 fps, recording in MP4 to dual SD memory card slots. This camcorder packs several pro-style features into its compact form, including Dual-Pixel Autofocus (DPAF). The GX10's 1" 8.29MP CMOS sensor and dual DIGIC DV 6 image processors support Wide DR Gamma with high sensitivity and low noise. Slow and fast-motion recording up to 120 fps offers special looks for highlighting sports and other special events. Smooth, steady shooting is assisted by the GX10's five-axis optical image stabilization. For composing and viewing your footage, the VIXIA GX10 incorporates a flip-out 3.5" touchscreen LCD, and a 0.24" electronic viewfinder. </p>
                                                    <p className="para__text">Additional GX10 features include an HDMI 2.0 port for outputting your 4K UHD footage, assignable user buttons, and remote control using the included WL-D89 controller. Wi-Fi connectivity offers live streaming, FTP file sharing, and remote control via iOS and Android apps.</p>
                                                    <h6 className="para__title">Product Highlights:</h6>
                                                    <ul className="para__list">
                                                        <li>UHD 4K Output up to 60 fps</li>
                                                        <li>8.29MP, 1" CMOS Sensor</li>
                                                        <li>Dual-Pixel CMOS Autofocus Feature</li>
                                                        <li>Integrated 15x Optical Zoom Lens</li>
                                                        <li>2 x DIGIC DV 6 Processors</li>
                                                        <li>5-Axis Optical Image Stabilization</li>
                                                        <li>Wide Dynamic Range Support</li>
                                                        <li>Records 4K UHD/HD to Dual SD Card Slots</li>
                                                        <li>3.5" Touchscreen LCD &amp; 0.24" EVF</li>
                                                        <li>Live Stream/FTP/Remote App via Wi-Fi</li>
                                                    </ul>
                                                </div>
                                            </div>  {/* End Tab - Product Description */}

                                            {/* Start Tab - Product Details */}
                                            <div className="tab-pane" id="product-dis">
                                                <div className="product-dis__content">
                                                    <a href="#" className="product-dis__img m-b-30"><img src="assets/img/logo/another-logo.jpg" alt="" /></a>
                                                    <div className="table-responsive-md">
                                                        <table className="product-dis__list table table-bordered">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="product-dis__title">Weight</td>
                                                                    <td className="product-dis__text">400 g</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="product-dis__title">Materials</td>
                                                                    <td className="product-dis__text">60% cotton, 40% polyester</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="product-dis__title">Dimensions</td>
                                                                    <td className="product-dis__text">10 x 10 x 15 cm</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="product-dis__title">Other Info</td>
                                                                    <td className="product-dis__text">American heirloom jean shorts pug seitan letterpress</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>  {/* End Tab - Product Details */}

                                            {/* Start Tab - Product Review */}
                                            <div className="tab-pane " id="product-review">
                                                {/* Start - Review Comment */}
                                                <ul className="comment">
                                                    {/* Start - Review Comment list*/}
                                                    <li className="comment__list">
                                                        <div className="comment__wrapper">
                                                            <div className="comment__img">
                                                                <img src="assets/img/user/image-1.png" alt="" />
                                                            </div>
                                                            <div className="comment__content">
                                                                <div className="comment__content-top">
                                                                    <div className="comment__content-left">
                                                                        <h6 className="comment__name">Kaedyn Fraser</h6>
                                                                        <ul className="product__review">
                                                                            <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                            <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                            <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                            <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                            <li className="product__review--blank"><i className="icon-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="comment__content-right">
                                                                        <a href="#" className="link--gray link--icon-left m-b-5"><i className="fas fa-reply"></i>Reply</a>
                                                                    </div>
                                                                </div>

                                                                <div className="para__content">
                                                                    <p className="para__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Start - Review Comment Reply*/}
                                                        <ul className="comment__reply">
                                                            <li className="comment__reply-list">
                                                                <div className="comment__wrapper">
                                                                    <div className="comment__img">
                                                                        <img src="assets/img/user/image-2.png" alt="" />
                                                                    </div>
                                                                    <div className="comment__content">
                                                                        <div className="comment__content-top">
                                                                            <div className="comment__content-left">
                                                                                <h6 className="comment__name">Oaklee Odom</h6>
                                                                            </div>
                                                                            <div className="comment__content-right">
                                                                                <a href="#" className="link--gray link--icon-left m-b-5"><i className="fas fa-reply"></i>Reply</a>
                                                                            </div>
                                                                        </div>

                                                                        <div className="para__content">
                                                                            <p className="para__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat. </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul> {/* End - Review Comment Reply*/}
                                                    </li> {/* End - Review Comment list*/}
                                                    {/* Start - Review Comment list*/}
                                                    <li className="comment__list">
                                                        <div className="comment__wrapper">
                                                            <div className="comment__img">
                                                                <img src="assets/img/user/image-3.png" alt="" />
                                                            </div>
                                                            <div className="comment__content">
                                                                <div className="comment__content-top">
                                                                    <div className="comment__content-left">
                                                                        <h6 className="comment__name">Jaydin Jones</h6>
                                                                        <ul className="product__review">
                                                                            <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                            <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                            <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                            <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                            <li className="product__review--blank"><i className="icon-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="comment__content-right">
                                                                        <a href="#" className="link--gray link--icon-left m-b-5"><i className="fas fa-reply"></i>Reply</a>
                                                                    </div>
                                                                </div>

                                                                <div className="para__content">
                                                                    <p className="para__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li> {/* End - Review Comment list*/}
                                                </ul>  {/* End - Review Comment */}

                                                {/* Start Add Review Form*/}
                                                <div className="review-form m-t-40">
                                                    <div className="section-content">
                                                        <h6 className="font--bold text-uppercase">ADD A REVIEW</h6>
                                                        <p className="section-content__desc">Your email address will not be published. Required fields are marked *</p>
                                                    </div>
                                                    <form className="form-box" action="#" method="post">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="form-box__single-group">
                                                                    <label htmlFor="form-name">Your Rating*</label>
                                                                    <ul className="product__review">
                                                                        <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                        <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                        <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                        <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                        <li className="product__review--blank"><i className="icon-star"></i></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-box__single-group">
                                                                    <label htmlFor="form-name">Your Name*</label>
                                                                    <input type="text" id="form-name" placeholder="Enter your name" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-box__single-group">
                                                                    <label htmlFor="form-email">Your Email*</label>
                                                                    <input type="email" id="form-email" placeholder="Enter your email" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-box__single-group">
                                                                    <label htmlFor="form-review">Your review*</label>
                                                                    <textarea id="form-review" rows="8" placeholder="Write a review"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <button className="btn btn--box btn--small btn--black btn--black-hover-green btn--uppercase font--bold m-t-30" type="submit">Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div> {/* End Add Review Form- */}
                                            </div>  {/* Start Tab - Product Review */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  {/* End Product Details Tab */}

                {/* ::::::  Start  Product Style - Default Section  ::::::  */}
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
                                        <div className="product__box product__default--single text-center">
                                            {/* Start Product Image */}
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src="assets/img/product/size-normal/product-home-1-img-1.jpg" alt="" />
                                                </a>
                                                {/* Start Procuct Label */}
                                                <span className="product__label product__label--sale-dis">-34%</span>
                                                {/* End Procuct Label */}
                                                {/* Start Product Action Link*/}
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-bs-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-bs-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul> {/* End Product Action Link */}
                                            </div> {/* End Product Image */}
                                            {/* Start Product Content */}
                                            <div className="product__content m-t-20">
                                                <ul className="product__review">
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--blank"><i className="icon-star"></i></li>
                                                </ul>
                                                <a href="product-single-default.html" className="product__link">Fresh green vegetable</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">$19.00 <del>$29.00</del></span>
                                                </div>
                                            </div> {/* End Product Content */}
                                        </div> {/* End Single Default Product */}

                                        {/* Start Single Default Product */}
                                        <div className="product__box product__default--single text-center">
                                            {/* Start Product Image */}
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src="assets/img/product/size-normal/product-home-1-img-2.jpg" alt="" />
                                                </a>
                                                {/* Start Product Action Link*/}
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-bs-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-bs-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul> {/* End Product Action Link */}
                                            </div> {/* End Product Image */}
                                            {/* Start Product Content */}
                                            <div className="product__content m-t-20">
                                                <ul className="product__review">
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--blank"><i className="icon-star"></i></li>
                                                </ul>
                                                <a href="product-single-default.html" className="product__link">Fresh river fish</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">$25.00</span>
                                                </div>
                                            </div> {/* End Product Content */}
                                        </div> {/* End Single Default Product */}

                                        {/* Start Single Default Product */}
                                        <div className="product__box product__default--single text-center">
                                            {/* Start Product Image */}
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src="assets/img/product/size-normal/product-home-1-img-3.jpg" alt="" />
                                                </a>
                                                {/* Start Procuct Label */}
                                                <span className="product__label product__label--sale-dis">-10%</span>
                                                {/* End Procuct Label */}
                                                {/* Start Product Countdown */}
                                                <div className="product__counter-box">
                                                    <div className="product__counter-item" data-countdown="2023/09/27"></div>
                                                </div> {/* End Product Countdown */}
                                                {/* Start Product Action Link*/}
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-bs-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-bs-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul> {/* End Product Action Link */}
                                            </div> {/* End Product Image */}
                                            {/* Start Product Content */}
                                            <div className="product__content m-t-20">
                                                <ul className="product__review">
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--blank"><i className="icon-star"></i></li>
                                                </ul>
                                                <a href="product-single-default.html" className="product__link">Fresh pomegranate</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">$19.00 <del>$21.00</del></span>
                                                </div>
                                            </div> {/* End Product Content */}
                                        </div> {/* End Single Default Product */}

                                        {/* Start Single Default Product */}
                                        <div className="product__box product__default--single text-center">
                                            {/* Start Product Image */}
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src="assets/img/product/size-normal/product-home-1-img-4.jpg" alt="" />
                                                </a>
                                                {/* Start Product Action Link*/}
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-bs-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-bs-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul> {/* End Product Action Link */}
                                            </div> {/* End Product Image */}
                                            {/* Start Product Content */}
                                            <div className="product__content m-t-20">
                                                <ul className="product__review">
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--blank"><i className="icon-star"></i></li>
                                                </ul>
                                                <a href="product-single-default.html" className="product__link">Cabbage vegetables</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">$50.00</span>
                                                </div>
                                            </div> {/* End Product Content */}
                                        </div> {/* End Single Default Product */}

                                        {/* Start Single Default Product */}
                                        <div className="product__box product__default--single text-center">
                                            {/* Start Product Image */}
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src="assets/img/product/size-normal/product-home-1-img-5.jpg" alt="" />
                                                </a>
                                                {/* Start Procuct Label */}
                                                <span className="product__label product__label--sale-dis">-31%</span>
                                                {/* End Procuct Label */}
                                                {/* Start Product Action Link*/}
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-bs-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-bs-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul> {/* End Product Action Link */}
                                            </div> {/* End Product Image */}
                                            {/* Start Product Content */}
                                            <div className="product__content m-t-20">
                                                <ul className="product__review">
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--blank"><i className="icon-star"></i></li>
                                                </ul>
                                                <a href="product-single-default.html" className="product__link">Best red meat</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">$55.00 <del>$80.00</del></span>
                                                </div>
                                            </div> {/* End Product Content */}
                                        </div> {/* End Single Default Product */}

                                        {/* Start Single Default Product */}
                                        <div className="product__box product__default--single text-center">
                                            {/* Start Product Image */}
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src="assets/img/product/size-normal/product-home-1-img-6.jpg" alt="" />
                                                </a>
                                                {/* Start Procuct Label */}
                                                <span className="product__label product__label--sale-dis">-34%</span>
                                                {/* End Procuct Label */}
                                                {/* Start Product Action Link*/}
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-bs-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-bs-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul> {/* End Product Action Link */}
                                            </div> {/* End Product Image */}
                                            {/* Start Product Content */}
                                            <div className="product__content m-t-20">
                                                <ul className="product__review">
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--blank"><i className="icon-star"></i></li>
                                                </ul>
                                                <a href="product-single-default.html" className="product__link">Fresh green apple</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">$19.00 <del>$29.00</del></span>
                                                </div>
                                            </div> {/* End Product Content */}
                                        </div> {/* End Single Default Product */}

                                        {/* Start Single Default Product */}
                                        <div className="product__box product__default--single text-center">
                                            {/* Start Product Image */}
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src="assets/img/product/size-normal/product-home-1-img-7.jpg" alt="" />
                                                </a>
                                                {/* Start Procuct Label */}
                                                <span className="product__label product__label--sale-dis">-34%</span>
                                                {/* End Procuct Label */}
                                                {/* Start Product Action Link*/}
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-bs-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-bs-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul> {/* End Product Action Link */}
                                            </div> {/* End Product Image */}
                                            {/* Start Product Content */}
                                            <div className="product__content m-t-20">
                                                <ul className="product__review">
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--blank"><i className="icon-star"></i></li>
                                                </ul>
                                                <a href="product-single-default.html" className="product__link">Juice fresh orange</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">$19.00 <del>$29.00</del></span>
                                                </div>
                                            </div> {/* End Product Content */}
                                        </div> {/* End Single Default Product */}

                                        {/* Start Single Default Product */}
                                        <div className="product__box product__default--single text-center">
                                            {/* Start Product Image */}
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src="assets/img/product/size-normal/product-home-1-img-8.jpg" alt="" />
                                                </a>
                                                {/* Start Procuct Label */}
                                                <span className="product__label product__label--sale-dis">-35%</span>
                                                {/* End Procuct Label */}
                                                {/* Start Product Countdown */}
                                                <div className="product__counter-box">
                                                    <div className="product__counter-item" data-countdown="2021/03/01"></div>
                                                </div> {/* End Product Countdown */}
                                                {/* Start Product Action Link*/}
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-bs-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-bs-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul> {/* End Product Action Link */}
                                            </div> {/* End Product Image */}
                                            {/* Start Product Content */}
                                            <div className="product__content m-t-20">
                                                <ul className="product__review">
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--blank"><i className="icon-star"></i></li>
                                                </ul>
                                                <a href="product-single-default.html" className="product__link">Best ripe grapes</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">$39.00 <del>$60.00</del></span>
                                                </div>
                                            </div> {/* End Product Content */}
                                        </div> {/* End Single Default Product */}

                                        {/* Start Single Default Product */}
                                        <div className="product__box product__default--single text-center">
                                            {/* Start Product Image */}
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src="assets/img/product/size-normal/product-home-1-img-9.jpg" alt="" />
                                                </a>
                                                {/* Start Procuct Label */}
                                                <span className="product__label product__label--sale-out">Soldout</span>
                                                {/* End Procuct Label */}
                                                {/* Start Product Action Link*/}
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-bs-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-bs-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul> {/* End Product Action Link */}
                                            </div> {/* End Product Image */}
                                            {/* Start Product Content */}
                                            <div className="product__content m-t-20">
                                                <ul className="product__review">
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--blank"><i className="icon-star"></i></li>
                                                </ul>
                                                <a href="product-single-default.html" className="product__link">Cow fresh milk</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">$55.00 <del>$75.00</del></span>
                                                </div>
                                            </div> {/* End Product Content */}
                                        </div> {/* End Single Default Product */}

                                        {/* Start Single Default Product */}
                                        <div className="product__box product__default--single text-center">
                                            {/* Start Product Image */}
                                            <div className="product__img-box  pos-relative">
                                                <a href="product-single-default.html" className="product__img--link">
                                                    <img className="product__img img-fluid" src="assets/img/product/size-normal/product-home-1-img-10.jpg" alt="" />
                                                </a>
                                                {/* Start Procuct Label */}
                                                <span className="product__label product__label--sale-out">Soldout</span>
                                                {/* End Procuct Label */}
                                                {/* Start Product Action Link*/}
                                                <ul className="product__action--link pos-absolute">
                                                    <li><a href="#modalAddCart" data-bs-toggle="modal"><i className="icon-shopping-cart"></i></a></li>
                                                    <li><a href="compare.html"><i className="icon-sliders"></i></a></li>
                                                    <li><a href="wishlist.html"><i className="icon-heart"></i></a></li>
                                                    <li><a href="#modalQuickView" data-bs-toggle="modal"><i className="icon-eye"></i></a></li>
                                                </ul> {/* End Product Action Link */}
                                            </div> {/* End Product Image */}
                                            {/* Start Product Content */}
                                            <div className="product__content m-t-20">
                                                <ul className="product__review">
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                    <li className="product__review--blank"><i className="icon-star"></i></li>
                                                </ul>
                                                <a href="product-single-default.html" className="product__link">Fresh Red Tomato</a>
                                                <div className="product__price m-t-5">
                                                    <span className="product__price">$10.00</span>
                                                </div>
                                            </div> {/* End Product Content */}
                                        </div> {/* End Single Default Product */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* ::::::  End  Product Style - Default Section  ::::::  */}

                {/* ::::::  Start  Company Logo Section  ::::::  */}
                <div className="company-logo m-t-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="company-logo__area default-slider">
                                    {/* Start Single Company Logo Item */}
                                    <div className="company-logo__item">
                                        <a href="#" className="company-logo__link">
                                            <img src="assets/img/company-logo/company-logo-1.png" alt="" className="company-logo__img" />
                                        </a>
                                    </div> {/* End Single Company Logo Item */}
                                    {/* Start Single Company Logo Item */}
                                    <div className="company-logo__item">
                                        <a href="#" className="company-logo__link">
                                            <img src="assets/img/company-logo/company-logo-2.png" alt="" className="company-logo__img" />
                                        </a>
                                    </div> {/* End Single Company Logo Item */}
                                    {/* Start Single Company Logo Item */}
                                    <div className="company-logo__item">
                                        <a href="#" className="company-logo__link">
                                            <img src="assets/img/company-logo/company-logo-3.png" alt="" className="company-logo__img" />
                                        </a>
                                    </div> {/* End Single Company Logo Item */}
                                    {/* Start Single Company Logo Item */}
                                    <div className="company-logo__item">
                                        <a href="#" className="company-logo__link">
                                            <img src="assets/img/company-logo/company-logo-4.png" alt="" className="company-logo__img" />
                                        </a>
                                    </div> {/* End Single Company Logo Item */}
                                    {/* Start Single Company Logo Item */}
                                    <div className="company-logo__item">
                                        <a href="#" className="company-logo__link">
                                            <img src="assets/img/company-logo/company-logo-5.png" alt="" className="company-logo__img" />
                                        </a>
                                    </div> {/* End Single Company Logo Item */}
                                    {/* Start Single Company Logo Item */}
                                    <div className="company-logo__item">
                                        <a href="#" className="company-logo__link">
                                            <img src="assets/img/company-logo/company-logo-6.png" alt="" className="company-logo__img" />
                                        </a>
                                    </div> {/* End Single Company Logo Item */}
                                    {/* Start Single Company Logo Item */}
                                    <div className="company-logo__item">
                                        <a href="#" className="company-logo__link">
                                            <img src="assets/img/company-logo/company-logo-7.png" alt="" className="company-logo__img" />
                                        </a>
                                    </div> {/* End Single Company Logo Item */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* ::::::  End  Company Logo Section  ::::::  */}

            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        currentItem: state.shop.currentItem,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        incrementQuantity: (id) => dispatch(incrementQuantity(id)),
        decrementQuantity: (id) => dispatch(decrementQuantity(id)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product)