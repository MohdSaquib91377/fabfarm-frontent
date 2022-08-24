import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addToCart, incrementQuantity, decrementQuantity, setProducts, updateCart, setMainCategory, setPopupMessage, setPopup } from '../../redux/actions/productActions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faStar, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faTruckLoading, faEnvelope, faMinus, faPlus, faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faPinterest, faPaypal } from '@fortawesome/free-brands-svg-icons';
import Tabtitle from '../../pages/Tabtitle'
import Details from './Details';
import "swiper/css";
import "swiper/css/navigation";
import './product.css';
import Relatedproducts from './Relatedproducts';
import axios from '../API/axios';
import Productimages from './Productimages';
import { FaSpinner } from 'react-icons/fa';
import useBannerImages from '../../hooks/useBannerImages';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Recentlyviewed from './Recentlyviewed';
import Shareonsocial from './Shareonsocial';
import Ratingandreview from './Ratingandreview';
const Product = ({ onlineCart, cart, updateCart, isAuthorized, setProducts, addToCart, incrementQuantity, decrementQuantity, setMainCategory, setPopup, setPopupMessage }) => {
    let { productID } = useParams();
    let { categoryId } = useParams();
    const [currentItem, setCurrentItem] = useState([]);
    // const [decrease, setDecrease] = useState(false);
    // const [decreaseID, setDecreaseID] = useState("");
    // const [loader, setloader] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState([])
    const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([])
    // const [productCount, setProductCount] = useState()
    let axiosPrivate = useAxiosPrivate();
    const [onlineCartCount, setOnlineCartCount] = useState(0)
    Tabtitle('FAB | Shop')
    const banner = useBannerImages('shop')
    const { id, image, name, description, price, maxQuantity, category, old_price, sub_category } = currentItem;

    const funcAddToCart = (event) => {
        const id = parseInt(event.currentTarget.id)
        if (maxQuantity === onlineCartCount) {
            setPopup(true)
            setPopupMessage('Maximum quantity has reached')
        }
        else if (isAuthorized) {
            axiosPrivate.post('/api/v1/cart/add-to-cart/',
                [{
                    product_id: id,
                    quantity: 1
                }
                ]
            )
                .then(() => {
                    updateCart()
                })
                .catch(error => {
                    throw (error)
                })
        }
        else {
            addToCart(id)
        }
    }
    const prductInCartQuantity = (id, boolean) => {
        axiosPrivate.put('/api/v1/cart/add-to-cart/', {
            product_id: id,
            action: boolean
        })
            .then(() => {
                updateCart()
            })
            .catch(error => {
                throw (error)
            })
    }
    const decreaseCount = (id) => {
        if (isAuthorized) {
            let boolean = 'false'
            prductInCartQuantity(id, boolean)
        } else {
            // setDecrease(!decrease)
            // setDecreaseID(id)
            decrementQuantity(id)
        }

    }
    const increaseCount = (id) => {
        if (maxQuantity === onlineCartCount) {
            setPopup(true)
            setPopupMessage('Maximum quantity has reached')
        }
        else if (isAuthorized) {
            let boolean = 'true'
            prductInCartQuantity(id, boolean)
        } else {
            incrementQuantity(id)
        }
    }
    useEffect(() => {
        const fetchCurrentItem = () => {
            if (isAuthorized) {
                axiosPrivate.get(`/api/v1/store/product-details/${productID}/`)
                    .then(response => {
                        setCurrentItem(response.data[0])
                        setProducts(response.data[1]?.recommend_products)
                        setRelatedProducts(response?.data[1].recommend_products)
                        const recentlyView = response?.data[2]?.recently_views.map((items) => {
                            const { product } = items;
                            return product;
                        })
                        setRecentlyViewedProducts(recentlyView)
                    }
                    )
                    .catch(error => {

                        throw (error)
                    })
            }
            else {
                axios.get(`/api/v1/store/product-details/${productID}/`)
                    .then(response => {
                        setCurrentItem(response.data[0])
                        setProducts(response.data[1]?.recommend_products)
                        setRelatedProducts(response?.data[1].recommend_products)
                    }
                    )
                    .catch(error => {

                        throw (error)
                    })
            }
        }
        fetchCurrentItem();


    }, [isAuthorized, productID])
    useEffect(() => {
        if (isAuthorized) {
            const onlineCurrentProduct = onlineCart.filter((items) => {
                return items?.product?.id === parseInt(productID)
            })
            if (onlineCurrentProduct.length !== 0) {
                setOnlineCartCount(onlineCurrentProduct[0]?.cartQuantity)
            }
            else (
                setOnlineCartCount(1)
            )
        }
        else {
            const offlineCurrentProduct = cart.filter((items) => {
                return items?.id === parseInt(productID)
            })
            if (offlineCurrentProduct.length !== 0) {
                setOnlineCartCount(offlineCurrentProduct[0]?.quantity)
            }
            else (
                setOnlineCartCount(1)
            )
        }
    }, [isAuthorized, onlineCart, cart])
    if (currentItem.length === 0) {
        return (
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
        )
    }
    return (
        <>
            <div className="breadcrumb_wrapper"
                style={{
                    minHeight: '250px',
                    backgroundImage: `url(${banner[0]?.image_or_video})`
                }}>
                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="breadcrumb_inner">
                                <h3>{name}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main-container" style={{
                marginTop: '30px'
            }}>

                {/* Start Product Details Gallery */}
                <div className="product-details">
                    <div className='container mt-3'>
                        <p className='m-0'>
                            <span className='breadcrum-width-dot'><Link to='/'>Home </Link>  </span>
                            <span className='breadcrum-width-dot'>&nbsp;{'>'}&nbsp;</span>
                            <span className='breadcrum-width-dot'> <Link to={`/shop/${categoryId}`} onClick={() => setMainCategory(true)}>&nbsp;{category?.name}</Link></span>
                            <span className='breadcrum-width-dot'> &nbsp; {'>'} &nbsp;</span>
                            <span className='breadcrum-width-dot'> <Link to={`/shop/${categoryId}/${sub_category.id}`} onClick={() => setMainCategory(false)}>&nbsp;{sub_category.name}</Link></span>
                            <span className='breadcrum-width-dot'> &nbsp; {'>'} &nbsp;</span>
                            <span className='breadcrum-width-dot'>   {name}</span> </p>
                    </div>
                    <div className="container pt-3">
                        <div className='customBoxImageProduct ' style={{
                            display: 'flex',
                            // flexWrap: 'wrap',
                        }}>
                            <div className=' col-sm-6 col-12'>
                                <div className='add-image-radius'>
                                    <Productimages image={image} />
                                </div>
                                {
                                    maxQuantity !== 0 ?
                                        <div className='button-buy-parent'>
                                            <button id={id} onClick={(event) => funcAddToCart(event)} className="btn btn--long btn--radius-tiny btn--green btn--green-hover-black btn--uppercase btn--weight m-r-20 button-buy">Add To Cart</button>
                                            <Link to='/checkout'>
                                                <button
                                                    id={id}
                                                    onClick={(event) => funcAddToCart(event)}
                                                    className="btn  btn--long btn--radius-tiny btn--green btn--green-hover-black btn-uppercase button-buy">Buy Now</button>
                                            </Link>
                                        </div>
                                        :
                                        undefined
                                }

                            </div>
                            <div className="col-lg-7">
                                <div className="product-details-box m-b-60">
                                    <h4 className=" m-b-20 mt-4 productNameText">{name}</h4>
                                    <h6>Special price</h6>
                                    <div className="product__price m-t-5">
                                        <span className="product__price product__price--large"><FontAwesomeIcon icon={faIndianRupee} /> {price.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}</span>
                                        <span> <s><FontAwesomeIcon icon={faIndianRupee} /> {old_price.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}</s></span>
                                    </div>

                                    <div className="product__desc m-t-25 m-b-10">
                                        <p>{description}</p>
                                    </div>
                                    <div className="product-var p-tb-10">
                                        <div className="product__stock m-b-20">
                                            {
                                                maxQuantity !== 0 ?
                                                    <span className="product__stock--in"><FontAwesomeIcon color='green' icon={faCheckCircle} /> {maxQuantity} IN STOCK</span>
                                                    :
                                                    <span className="product__stock--in" style={{ color: 'red' }}><FontAwesomeIcon color='red' icon={faCircleXmark} /> Out Of Stock</span>
                                            }
                                        </div>
                                        {/* <div className="product-quantity product-var__item">
                                            <ul className="product-modal-group">
                                                <li><a href="#modalShippinginfo" data-bs-toggle="modal" className="link--gray link--icon-left"><FontAwesomeIcon icon={faTruckLoading} /> &nbsp; Shipping</a></li>
                                                <li><a href="#modalProductAsk" data-bs-toggle="modal" className="link--gray link--icon-left"><FontAwesomeIcon icon={faEnvelope} /> &nbsp; Ask About This product</a></li>
                                            </ul>
                                        </div> */}
                                        {
                                            maxQuantity !== 0 ?
                                                <div className="product-quantity product-var__item d-flex align-items-center">
                                                    <span className="product-var__text">Quantity: </span>
                                                    <div className="quantity-scale m-l-20">
                                                        <button className="value-button" onClick={() => decreaseCount(id)} >
                                                            <FontAwesomeIcon icon={faMinus} />
                                                        </button>
                                                        <input className='input-items-number' type="text" readOnly id="number" value={onlineCartCount !== 0 ? onlineCartCount : 1} />
                                                        <button className="value-button" onClick={() => increaseCount(id)
                                                        }>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </button>
                                                    </div>
                                                </div> :
                                                undefined
                                        }
                                        <div className="product-var__item">
                                            <span className="product-var__text">Guaranteed safe checkout </span>
                                            <ul className="payment-icon m-t-5">
                                                <li><img src='https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Razorpay_logo.svg/1024px-Razorpay_logo.svg.png' width={100} /></li>
                                            </ul>
                                        </div>
                                        <div className="product-var__item">
                                            <span className="product-var__text">Services</span>
                                            <ul>
                                                <li>7 days return policy</li>
                                                <li>Cash on Delivery available</li>
                                            </ul>
                                        </div>
                                        <div className="product-var__item d-flex align-items-center">
                                            <span className="product-var__text">Share: </span>
                                            <Shareonsocial
                                                url={window.location.href}
                                                title={name}
                                            />
                                        </div>
                                    </div>
                                    <Ratingandreview currentItem={currentItem} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Product Details Gallery */}

                {/* Start Product Details Tab */}
                {/* <Details /> */}
                {/* End Product Details Tab */}

                {/* ::::::  Start  Product Style - Default Section  ::::::  */}
                <Relatedproducts products={relatedProducts} />

                {/* ::::::  End  Product Style - Default Section  ::::::  */}
                {
                    isAuthorized ?
                        <Recentlyviewed products={recentlyViewedProducts} />
                        :
                        undefined
                }

            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
        isAuthorized: state.shop.isAuthorized,
        totalCartCount: state.shop.totalCartCount,
        onlineCart: state.shop.onlineCart,
        cart: state.shop.cart,
        updatedCart: state.shop.updatedCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        incrementQuantity: (id) => dispatch(incrementQuantity(id)),
        decrementQuantity: (id) => dispatch(decrementQuantity(id)),
        setProducts: (id) => dispatch(setProducts(id)),
        updateCart: () => dispatch(updateCart()),
        setMainCategory: (boolean) => dispatch(setMainCategory(boolean)),
        setPopup: (boolean) => dispatch(setPopup(boolean)),
        setPopupMessage: (string) => dispatch(setPopupMessage(string))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product)        