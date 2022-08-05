import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart, setPopup, setPopupMessage, updateCart } from '../../redux/actions/productActions';
import { axiosPrivate } from '../API/axios';

const Productcomponent = ({ updateCart, isAuthorized, product, i, categoryId, addToCart, setPopupMessage, setPopup, onlineCart, cart }) => {
    let Navigate = useNavigate();
    const [onlineCartCount, setOnlineCartCount] = useState(0)
    const { id, image: [{ image }], name, description, price, maxQuantity } = product;
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
    const buyButton = (id) => {
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
        Navigate('/checkout');
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
        <li key={i}>

            <div className="product_item_block">
                <div className="org_product_block">
                    <Link to={`/shop/${categoryId}/product/${id}`}>
                        <div className="org_product_image"><img src={process.env.REACT_APP_BASE_URL + image} alt={name} /></div>
                    </Link>
                    <Link to={`/shop/${categoryId}/product/${id}`}><h4 >{name}</h4></Link>
                    <h3><span><FontAwesomeIcon icon={faIndianRupee} /></span>{price}</h3>
                    {
                        maxQuantity !== 0 ?
                            <>
                                <button id={id} onClick={(event) => funcAddToCart(event)}>add to cart</button>
                                <button onClick={() => buyButton(id)}>Buy now</button>
                            </>
                            :
                            <p className='outofstocktext'>Out Of Stock</p>
                    }
                </div>
                <div className="content_block">
                    <div className="product_price_box">
                        <Link to={`/shop/${categoryId}/product/${id}`}>
                            <h3>
                                {name}
                            </h3>
                        </Link>
                        <h5><span><FontAwesomeIcon icon={faIndianRupee} /></span>{price}</h5>
                    </div>
                    <p>Farm & Garden</p>
                    <div className="rating_section">
                        <span>4.1</span>
                        <ul>
                            <li><a className="active" href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a className="active" href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a className="active" href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                        </ul>
                        <p>151 reviews</p>
                    </div>
                    <ul className="product_code">
                        <li>
                            <p>product code: 12948</p>
                        </li>
                        <li>
                            <p>availability: <span style={maxQuantity !== 0 ? { color: 'green' } : { color: 'red' }}>{maxQuantity !== 0 ? 'in stock' : 'out of stock'}</span></p>
                        </li>
                    </ul>
                    <p>{description}</p>
                </div>
            </div>
        </li >
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
        updateCart: () => dispatch(updateCart()),
        setPopup: (boolean) => dispatch(setPopup(boolean)),
        setPopupMessage: (string) => dispatch(setPopupMessage(string)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Productcomponent)