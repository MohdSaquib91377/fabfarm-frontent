import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addToCart, incrementQuantity, decrementQuantity, setProducts, updateCart } from '../../redux/actions/productActions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faStar } from '@fortawesome/free-regular-svg-icons';
import { faTruckLoading, faEnvelope, faHeart, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
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
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
const Product = ({ totalCartCount, updateCart, isAuthorized, products, setProducts, addToCart, incrementQuantity, decrementQuantity }) => {
    let { productID } = useParams();
    let { categoryId } = useParams();
    const [currentItem, setCurrentItem] = useState([]);
    // const [decrease, setDecrease] = useState(false);
    // const [decreaseID, setDecreaseID] = useState("");
    // const [loader, setloader] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState([])
    // const [productCount, setProductCount] = useState()
    let axiosPrivate = useAxiosPrivate();
    Tabtitle('FAB | Shop')
    const { id, image, name, description, price, maxQuantity, category, old_price, sub_category_name } = currentItem;

    const funcAddToCart = (event) => {
        const id = parseInt(event.currentTarget.id)
        if (isAuthorized) {
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
        if (isAuthorized) {
            let boolean = 'true'
            prductInCartQuantity(id, boolean)
        } else {
            incrementQuantity(id)
        }
    }
    useEffect(() => {
        const fetchCurrentItem = () => {
            axios.get(`/api/v1/store/product-details/${productID}/`)
                .then(response => {
                    console.log(response)
                    setCurrentItem(response.data[0])
                    setProducts(response.data)
                    setRelatedProducts(response?.data[1].recommend_products)
                }
                )
                .catch(error => {

                    throw (error)
                })
        }
        fetchCurrentItem();


    }, [])
    // useEffect(() => {
    //     if (products[0]?.quantity === 1 && typeof (decreaseID) === 'number') {
    //         setloader(true)
    //         axiosPrivate.delete('/api/v1/cart/add-to-cart/', {
    //             data: {
    //                 product_id: decreaseID
    //             }
    //         })
    //             .then(() => {
    //                 setloader(false)
    //             })
    //             .catch(error => {
    //                 setloader(false)
    //                 throw (error)
    //             })
    //     }
    // }, [decrease, decreaseID])

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
                {/* <div className="breadcrumb_block">
                                <ul>
                                    <li><Link to='/'>home</Link></li>
                                    <li><Link to={`/shop/${categoryId}`}>&nbsp;{category}</Link></li>
                                    <li> &nbsp; {name} </li>
                                </ul>
                            </div> */}
            </div>
            <div id="main-container" style={{
                marginTop: '30px'
            }}>

                {/* Start Product Details Gallery */}
                <div className="product-details">
                    <div className='container mt-3'>
                        <p className='m-0'>
                            <span className='breadcrum-width-dot'><Link to='/'>Home </Link>  </span>
                            <span className='breadcrum-width-dot'>&nbsp;>&nbsp;</span>
                            <span className='breadcrum-width-dot'> <Link to={`/shop/${categoryId}`}>&nbsp;{category?.name}</Link></span>
                            <span className='breadcrum-width-dot'> &nbsp; > &nbsp;</span>
                            <span className='breadcrum-width-dot'> <Link to={`/shop/${categoryId}`}>&nbsp;{sub_category_name}</Link></span>
                            <span className='breadcrum-width-dot'> &nbsp; > &nbsp;</span>
                            <span className='breadcrum-width-dot'>   {name}</span> </p>
                    </div>
                    <div className="container pt-3">
                        <div style={{
                            display: 'flex',
                        }}>
                            <div style={{
                                width: '800px'
                            }} className>
                                <div className='add-image-radius'>
                                    <Productimages image={image} />
                                </div>
                                <div className='button-buy-parent'>
                                    <button id={id} onClick={(event) => funcAddToCart(event)} className="btn btn--long btn--radius-tiny btn--green btn--green-hover-black btn--uppercase btn--weight m-r-20 button-buy">Add To Cart</button>
                                    <Link to='/checkout'>
                                        <button
                                            id={id}
                                            onClick={(event) => funcAddToCart(event)}
                                            className="btn  btn--long btn--radius-tiny btn--green btn--green-hover-black text-uppercase button-buy">Buy Now</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="product-details-box m-b-60">
                                    <h4 className="font--regular m-b-20">{name}</h4>
                                    <ul className="product__review">
                                        <li className="product__review--fill"><FontAwesomeIcon icon={faStar} /></li>
                                        <li className="product__review--fill"><FontAwesomeIcon icon={faStar} /></li>
                                        <li className="product__review--fill"><FontAwesomeIcon icon={faStar} /></li>
                                        <li className="product__review--fill"><FontAwesomeIcon icon={faStar} /></li>
                                        <li className="product__review--blank"><FontAwesomeIcon icon={faStar} /></li>
                                    </ul>
                                    <h6>Special price</h6>
                                    <div className="product__price m-t-5">Rs
                                        <span className="product__price product__price--large">{price}</span>
                                        <span> <s>Rs {old_price}</s></span>
                                        <span className="product__tag m-l-15 btn--tiny btn--green">-34%</span>
                                    </div>

                                    <div className="product__desc m-t-25 m-b-10">
                                        <p>{description}</p>
                                    </div>
                                    <div className="product-var p-tb-10">
                                        <div className="product__stock m-b-20">
                                            <span className="product__stock--in"><FontAwesomeIcon color='green' icon={faCheckCircle} /> {maxQuantity} IN STOCK</span>
                                        </div>
                                        <div className="product-quantity product-var__item">
                                            <ul className="product-modal-group">
                                                <li><a href="#modalShippinginfo" data-bs-toggle="modal" className="link--gray link--icon-left"><FontAwesomeIcon icon={faTruckLoading} /> &nbsp; Shipping</a></li>
                                                <li><a href="#modalProductAsk" data-bs-toggle="modal" className="link--gray link--icon-left"><FontAwesomeIcon icon={faEnvelope} /> &nbsp; Ask About This product</a></li>
                                            </ul>
                                        </div>
                                        <div className="product-quantity product-var__item d-flex align-items-center">
                                            <span className="product-var__text">Quantity: </span>
                                            <div className="quantity-scale m-l-20">
                                                <button className="value-button" onClick={() => decreaseCount(id)} >
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </button>
                                                <input className='input-items-number' type="text" readOnly id="number" value={products[0].quantity} />
                                                <button className="value-button" onClick={() => increaseCount(id)
                                                }>
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </button>
                                            </div>
                                        </div>
                                        {/* <div className="product-var__item">
                                                        <button onClick={() => addToCart(id)} className="btn btn--long btn--radius-tiny btn--green btn--green-hover-black btn--uppercase btn--weight m-r-20">Add to cart</button>
                                                        <a href="wishlist.html" className="btn btn--round btn--round-size-small btn--green btn--green-hover-black">
                                                            <FontAwesomeIcon icon={faHeart} />
                                                        </a>
                                                    </div> */}
                                        {/* <div className="product-var__item">
                                                        <div className="dynmiac_checkout--button">
                                                            
                                                            <Link to='/checkout'>
                                                                <button style={{
                                                                    width: "285px"
                                                                }}
                                                                    onClick={() => addToCart(id)}
                                                                    className="btn btn--block btn--long btn--radius-tiny btn--green btn--green-hover-black text-uppercase m-r-35">Buy It Now</button>
                                                            </Link>
                                                        </div>
                                                    </div> */}
                                        <div className="product-var__item">
                                            <span className="product-var__text">Guaranteed safe checkout </span>
                                            <ul className="payment-icon m-t-5">
                                                <li><FontAwesomeIcon icon={faPaypal} color="" /></li>
                                            </ul>
                                        </div>
                                        <div className="product-var__item">
                                            <span className="product-var__text">services</span>
                                            <ul>
                                                <li>7 days return policy</li>
                                                <li>Cash on Delivery available</li>
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
                <Relatedproducts products={relatedProducts} />
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
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
        isAuthorized: state.shop.isAuthorized,
        totalCartCount: state.shop.totalCartCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        incrementQuantity: (id) => dispatch(incrementQuantity(id)),
        decrementQuantity: (id) => dispatch(decrementQuantity(id)),
        setProducts: (id) => dispatch(setProducts(id)),
        updateCart: () => dispatch(updateCart())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product)        