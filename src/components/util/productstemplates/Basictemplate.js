import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons'
import { faIndianRupee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, setPopup, setPopupMessage, updateCart } from '../../../redux/actions/productActions'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'

const Basictemplate = ({ item, isAuthorized, addToCart, setPopup, setPopupMessage, updateCart }) => {
    const axiosPrivate = useAxiosPrivate()
    const funcAddToCart = (event) => {
        if (isAuthorized) {
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
            axiosPrivate.post('/api/v1/wishlist/wishlist/add-to-wishlist/', { product_id: id })
                .then((response) => {
                    if (response.status === 200) {
                        setPopupMessage(response.data.message)
                    }
                    else {
                        setPopupMessage(response.data.message)
                    }
                    setPopup(true)
                })
                .catch(error => { throw (error) })
        }
        else {
            alert('Login to add wishlist')
        }
    }
    const { id, name, category, image: [{ image }], price } = item

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
                        <li><button id={id} onClick={(event) => funcAddToCart(event)}><FontAwesomeIcon icon={faShoppingCart} /></button></li>
                        <li><Link to='/checkout'><button id={id} onClick={(event) => funcAddToCart(event)}>Buy</button></Link></li>
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
                    <Link to={`/shop/${category.id}/product/${id}`} className="product__link">{name}</Link>
                    <div className="product__price m-t-5">
                        <span className="product__price"><FontAwesomeIcon icon={faIndianRupee} /> {price}</span>
                    </div>
                </div>
            </div>
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
        setPopup: (boolean) => dispatch(setPopup(boolean)),
        setPopupMessage: (string) => dispatch(setPopupMessage(string)),
        updateCart: () => dispatch(updateCart())
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Basictemplate)