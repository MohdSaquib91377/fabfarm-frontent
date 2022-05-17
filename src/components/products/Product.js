import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addToCart, incrementQuantity, decrementQuantity, setProducts } from '../../redux/actions/productActions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faStar } from '@fortawesome/free-regular-svg-icons';
import { faTruckLoading, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import Tabtitle from '../../pages/Tabtitle'
import Details from './Details';
import "swiper/css";
import "swiper/css/navigation";
import './product.css';
import Relatedproducts from './Relatedproducts';
import axios from '../API/axios';
import Productimages from './Productimages';
import { FaSpinner } from 'react-icons/fa';
const Product = ({ setProducts, addToCart, incrementQuantity, decrementQuantity }) => {
    let { productID } = useParams();
    const [currentItem, setCurrentItem] = useState([]);
    // const [itemQuantity, setItemQuantity] = useState(1)
    Tabtitle('FAB | Shop')
    // useEffect(() => {
    //     setItemQuantity(quantity)
    // }, currentItem)

    useEffect(() => {
        const fetchCurrentItem = () => {
            axios.get(`/api/v1/store/product-details/${productID}/`)
                .then(response => {
                    setCurrentItem(response.data[0])
                    setProducts(response.data)
                }
                )
                .catch(error => {

                    console.log(error)
                })
        }
        fetchCurrentItem();
    }, [])
    const { id, image, name, description, price, quantity } = currentItem;

    console.log(id)
    return (
        <>
            {/* <!--Breadcrumb--> */}
            {
                currentItem.length === 0 ?
                    <div style={{ height: '800px', width: 'auto' }}>
                        <div style={{
                            position: 'relative',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100px',
                            display: 'flex',
                            alignContent: 'center',
                            justifyContent: 'center',
                        }}>
                            <FaSpinner icon="spinner" className="spinner" />
                        </div>
                    </div>
                    :
                    <>
                        <div className="breadcrumb_wrapper" style={{ minHeight: '250px' }}>
                            <div className="container" style={{ marginTop: '130px' }}>
                                <div className="row justify-content-center">
                                    <div className="col-md-4">
                                        <div className="breadcrumb_inner">
                                            <h3>{name}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="breadcrumb_block">
                                <ul>
                                    <li><Link to='/'>home</Link></li>
                                    {/* <li><Link to='/shop/'>&nbsp;Shop</Link></li> */}
                                    <li> &nbsp; {id} </li>
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
                                                <Productimages image={image} />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="product-details-box m-b-60">
                                                <h4 className="font--regular m-b-20">{ }</h4>
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
                                                    {/* <div className="product-quantity product-var__item d-flex align-items-center">
                                            <span className="product-var__text">Quantity: </span>
                                            <div className="quantity-scale m-l-20">
                                                <button className="value-button" >-</button>
                                                <input className='input-items-number' type="text" readOnly id="number" value={itemQuantity} />
                                                <button className="value-button" >+</button>
                                            </div>
                                        </div> */}
                                                    <div className="product-var__item">
                                                        <button onClick={() => addToCart(id)} className="btn btn--long btn--radius-tiny btn--green btn--green-hover-black btn--uppercase btn--weight m-r-20">Add to cart</button>
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
                            {/* <Details /> */}
                            {/* End Product Details Tab */}

                            {/* ::::::  Start  Product Style - Default Section  ::::::  */}
                            {/* <Relatedproducts /> */}
                            {/* ::::::  End  Product Style - Default Section  ::::::  */}

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
            }
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        incrementQuantity: (id) => dispatch(incrementQuantity(id)),
        decrementQuantity: (id) => dispatch(decrementQuantity(id)),
        setProducts: (id) => dispatch(setProducts(id))
    };
};
export default connect(null, mapDispatchToProps)(Product)