import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faIndianRupee, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, setPopup, setPopupMessage, setSigninOpen, updateCart } from '../../../redux/actions/productActions'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
import { FaSpinner } from 'react-icons/fa'

const Basictemplate = ({ item, isAuthorized, addToCart, setPopup, setPopupMessage, updateCart, onlineCart, cart, setSigninOpen }) => {
    const axiosPrivate = useAxiosPrivate()
    const [addedToWhislist, setAddedToWhislist] = useState(false)
    const [onlineCartCount, setOnlineCartCount] = useState(0)
    const [loader, setLoader] = useState(false)
    const { id, name, category, image: [{ image }], price, maxQuantity, is_product_in_wishlist_for_current_user } = item

    const funcAddToCart = (event) => {
        if (maxQuantity === onlineCartCount) {
            setPopup(true)
            setPopupMessage('Maximum quantity has reached')
        }
        else if (isAuthorized) {
            axiosPrivate.post('/api/v1/cart/add-to-cart/',
                [{
                    product_id: parseInt(event.currentTarget.id),
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
            addToCart(parseInt(event.currentTarget.id))
        }
    }
    const addToWishList = (id) => {
        if (isAuthorized) {
            setLoader(true)
            axiosPrivate.post('/api/v1/wishlist/wishlist/add-to-wishlist/', { product_id: id })
                .then((response) => {
                    if (response.status === 200) {
                        setLoader(false)
                        setPopup(true)
                        setPopupMessage(response.data.message)
                    }
                    else {
                        setLoader(false)
                        setPopup(true)
                        setPopupMessage(response.data.message)
                    }
                })
                .catch(error => { throw (error) })
        }
        else {
            setSigninOpen()
        }
    }

    const handleWishlist = (id) => {
        addToWishList(id)
        if (isAuthorized) {
            setAddedToWhislist(!addedToWhislist)
        }
    }

    useEffect(() => {
        if (isAuthorized) {
            const onlineCurrentProduct = onlineCart.filter((items) => {
                return items?.product?.id === parseInt(id)
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
                return items?.id === parseInt(id)
            })
            if (offlineCurrentProduct.length !== 0) {
                setOnlineCartCount(offlineCurrentProduct[0]?.quantity)
            }
            else (
                setOnlineCartCount(1)
            )
        }
    }, [isAuthorized, onlineCart, cart])



    return (
        <>
            <div className="product__box product__default--single text-center">
                <div className="product__img-box  pos-relative">
                    <Link to={`/shop/${category.id}/product/${id}`} className="product__img--link">
                        <img className="product__img img-fluid"
                            src={process.env.REACT_APP_BASE_URL + image} alt={name} />
                    </Link>
                    <span className="product__label product__label--sale-dis"></span>
                    <ul className="product__action--link pos-absolute">
                        {
                            maxQuantity !== 0 ?
                                <>
                                    <li><button id={id} onClick={(event) => funcAddToCart(event)}><FontAwesomeIcon icon={faShoppingCart} /></button></li>
                                    <li><Link to='/checkout'><button id={id} onClick={(event) => funcAddToCart(event)}>Buy</button></Link></li>
                                </>
                                :
                                undefined
                        }
                        <li><button onClick={() => handleWishlist(id)}>
                            {
                                loader ?
                                    <FaSpinner icon="spinner" className="spinner" />
                                    :
                                    <FontAwesomeIcon
                                        color={is_product_in_wishlist_for_current_user || addedToWhislist ? 'red' : 'white'}
                                        icon={faHeart}
                                    />
                            }
                        </button></li>
                    </ul>
                </div>
                <div className="product__content m-t-20">
                    {/* <ul className="product__review">
                        <li className="product__review--fill"><FontAwesomeIcon icon={faStar} /></li>
                        <li className="product__review--fill"><FontAwesomeIcon icon={faStar} /></li>
                        <li className="product__review--fill"><FontAwesomeIcon icon={faStar} /></li>
                        <li className="product__review--fill"><FontAwesomeIcon icon={faStar} /></li>
                        <li className="product__review--blank"><FontAwesomeIcon icon={faStar} /></li>
                    </ul> */}
                    <Link to={`/shop/${category.id}/product/${id}`} className="product__link">{name}</Link>
                    <div className="product__price m-t-5">
                        {
                            maxQuantity !== 0?

                            <span className="product__price"><FontAwesomeIcon icon={faIndianRupee} /> {price.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}</span>
                            :
                            <span style={{
                                color:'red'
                            }}>Out Of Stock</span>
                        }
                    </div>
                    
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuthorized: state.shop.isAuthorized,
        onlineCart: state.shop.onlineCart,
        cart: state.shop.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        setPopup: (boolean) => dispatch(setPopup(boolean)),
        setPopupMessage: (string) => dispatch(setPopupMessage(string)),
        updateCart: () => dispatch(updateCart()),
        setSigninOpen: () => dispatch(setSigninOpen()),
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Basictemplate)