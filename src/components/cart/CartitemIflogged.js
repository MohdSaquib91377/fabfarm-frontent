import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart, incrementQuantity, decrementQuantity, updateCart, setPopupMessage, setPopup } from '../../redux/actions/productActions';
import { connect } from 'react-redux';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
const CartitemIflogged = ({ updateCart, cartLoading, items, isAuthorized, removeFromCart, setPopup, setPopupMessage }) => {
    // const [items, setItems] = useState([])
    // const { id, image: [{ image }], name, price, quantity } = items;
    // const [decrease, setDecrease] = useState("")
    const [loader, setloader] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const deleteCartItems = (id) => {
        removeFromCart(id);
        if (isAuthorized) {
            axiosPrivate.delete('/api/v1/cart/add-to-cart/', {
                data: {
                    product_id: id
                }
            })
                .then(() => {
                    updateCart()
                })
                .catch(error => {
                    throw (error)
                })
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
        let boolean = 'false'
        prductInCartQuantity(id, boolean)
    }
    const increaseCount = (id, cartQuantity, maxQuantity) => {
        let boolean = 'true'
        if (maxQuantity === cartQuantity) {
            setPopup(true)
            setPopupMessage('You have reach maximum quantity')
        }
        else (
            prductInCartQuantity(id, boolean)
        )
    }
    const cartItems = items.map((data, i) => {
        if (Object.keys(data).some(key => key === 'cartQuantity')) {
            const { cartQuantity, product: { id, image: [{ image }], name, price, maxQuantity } } = data;
            const total = cartQuantity * price;
            return (
                <>
                    {
                        cartLoading ?
                            <div>Loading...</div> :
                            <div
                                key={i}
                                style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center', margin: "15px 0" }}>

                                <div className="cart_block">
                                    <img
                                        style={{ maxHeight: '100px', maxWidth: '100px' }}
                                        src={process.env.REACT_APP_BASE_URL + image} alt={name}
                                    />
                                </div>

                                <div className="cart_block">
                                    <h5>{name}</h5>
                                    {
                                        loader ?
                                            <div>Loading...</div>
                                            :
                                            <div className="item_quantity" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <button className="quantity_minus" onClick={() => decreaseCount(id)} ><FontAwesomeIcon icon={faMinus} /></button>
                                                <input
                                                    type="text"
                                                    value={cartQuantity}
                                                    className="quantity"
                                                    disabled />
                                                <button className="quantity_plus" onClick={() => increaseCount(id, cartQuantity, maxQuantity)} ><FontAwesomeIcon icon={faPlus} /></button>
                                            </div>
                                    }
                                </div>
                                <div className="cart_block">
                                    <h4 style={{ display: 'flex' }}><span><FontAwesomeIcon icon={faIndianRupee} /></span>{total.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}</h4>
                                </div>
                                <button className='unset redbtn'
                                    onClick={() => deleteCartItems(id)}
                                ><FontAwesomeIcon icon={faTrash} /></button>
                            </div >
                    }
                </>
            )
        }
    })
    return (
        <>
            {
                cartItems
            }
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuthorized: state.shop.isAuthorized,
        user: state.shop.user,
        cart: state.shop.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        incrementQuantity: (id) => dispatch(incrementQuantity(id)),
        decrementQuantity: (id) => dispatch(decrementQuantity(id)),
        updateCart: () => dispatch(updateCart()),
        setPopup: (boolean) => dispatch(setPopup(boolean)),
        setPopupMessage: (string) => dispatch(setPopupMessage(string))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartitemIflogged)