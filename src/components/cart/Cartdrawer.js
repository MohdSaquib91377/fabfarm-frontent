import * as React from 'react';
import Cartitems from './Cartitems';
import {
    Drawer,
    Box
} from '@material-ui/core';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faShoppingCart, faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CartitemIflogged from './CartitemIflogged';
import { makeCartEmpty, setOnlineCart, setSigninOpen, setTotalCartCount, updateCart } from '../../redux/actions/productActions';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useState } from 'react';
import { useEffect } from 'react';
const Cartdrawer = ({ updateCart, updatedCart, totalCartCount, setTotalCartCount, makeCartEmpty, user, isAuthorized, cart, opencart, closecart, setOnlineCart }) => {
    const axiosPrivate = useAxiosPrivate();
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartProducts, setCartProducts] = useState([])
    const [items, setItems] = useState([])
    const [ifloggedTotalPrice, setIfloggedTotalPrice] = useState()
    const [cartLoading, setCartLoading] = useState(false);
    // const [cartDataifloggedin, setCartDataifLoggedin] = useState([])


    useEffect(() => {
        if (isAuthorized && cart.length !== 0) {
            const postCartData = () => {
                axiosPrivate.post('/api/v1/cart/add-to-cart/', cartProducts)
                    .then(() => {
                        makeCartEmpty([])
                        updateCart()
                    })
                    .catch(error => {
                        throw (error)
                    })
            }
            postCartData()
        }
    }, [isAuthorized, cart])


    useEffect(() => {
        let price = 0;
        cart.forEach(item => {
            price += item.quantity * item.price;
        })
        setTotalPrice(price);
        let items = [];
        cart.forEach(item => {
            items.push(
                {
                    product_id: item.id,
                    quantity: item.quantity
                }
            )
        })
        setCartProducts(items)

    }, [cart, totalPrice, setTotalPrice, isAuthorized, user]);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getCartItems = async () => {
            try {
                if (isAuthorized && isMounted) {
                    setCartLoading(true)
                    const response = await axiosPrivate.get('/api/v1/cart/add-to-cart/')
                    setItems(response.data)
                    setOnlineCart(response?.data)
                    setCartLoading(false)
                    response.data.map((data) => {
                        if (Object.keys(data).some(key => key === 'cart_item')) {
                            setTotalCartCount(data.cart_item)
                            setIfloggedTotalPrice(data.cart_total)
                        }
                    })
                }
            } catch (error) {
                setCartLoading(false)
                throw error
            }
        }

        getCartItems();
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [isAuthorized, updatedCart])
    const cartItems = cart.map((products, i) => {
        if (!isAuthorized) {
            return (
                <Cartitems product={products} key={i} />
            );
        }
    });
    return (
        <div>
            <Drawer
                anchor={"right"}
                open={opencart}
                onClose={closecart}
                variant="temporary"
            >
                <Box
                    sx={{ width: 'unset' }}
                    // className="header--navBar--menuBox"
                    role="presentation"
                >
                    <div className="clv_cart_box cart_box_open">
                        <div className="cart_section" style={{ padding: '20px 0px 20px 20px ' }}>
                            <div className="cart-header" >
                                <div className="cart">
                                    <h5><FontAwesomeIcon icon={faShoppingCart} />Cart</h5>
                                </div>
                                <div className="close">

                                    <h5
                                        onClick={closecart}
                                    ><FontAwesomeIcon icon={faClose} /></h5>
                                </div>
                            </div>
                            <div className="overflow-cart">
                                {
                                    cartLoading ?
                                        <p>Loading...</p>
                                        :
                                        isAuthorized ?

                                            totalCartCount !== 0 ? <CartitemIflogged cartLoading={cartLoading} items={items} /> : <p>Your cart is empty</p>
                                            :
                                            cart.length !== 0 ? <> {cartItems}</> : <p>Your cart is empty</p>
                                }
                            </div>
                            {
                                isAuthorized ?
                                    ifloggedTotalPrice !== undefined && ifloggedTotalPrice !== 0 ?
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: '10px', position: 'absolute', bottom: '50px', width: '280px' }}>
                                            <h3>Total</h3>
                                            <h4><span><FontAwesomeIcon icon={faIndianRupee} /></span>{ifloggedTotalPrice.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}</h4>
                                        </div> :
                                        undefined
                                    :
                                    cart.length !== 0 ?
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: '10px', position: 'absolute', bottom: '50px', width: '280px' }}>
                                            <h3>Total</h3>
                                            <h4><span><FontAwesomeIcon icon={faIndianRupee} /></span>{totalPrice.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}</h4>
                                        </div>
                                        :
                                        undefined
                            }
                        </div>
                    </div>
                    {
                        isAuthorized ?
                            totalCartCount !== 0 ?
                                <Link to='/checkout'>
                                    <button
                                        onClick={closecart}
                                        style={{
                                            backgroundColor: '#2a7d2e',
                                            width: '100%',
                                            height: '50px',
                                            alignItem: 'center',
                                            color: '#fff'
                                        }}
                                        className="cart_action_btn">
                                        Checkout</button>
                                </Link> :
                                undefined
                            :
                            cart.length !== 0 ?
                                <Link to='/checkout'>
                                    <button
                                        onClick={closecart}
                                        style={{
                                            backgroundColor: '#2a7d2e',
                                            width: '100%',
                                            height: '50px',
                                            alignItem: 'center',
                                            color: '#fff'
                                        }}
                                        className="cart_action_btn">
                                        Checkout
                                    </button>
                                </Link>
                                : undefined

                    }
                </Box >
            </Drawer >
        </div >
    );
};
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
        isAuthorized: state.shop.isAuthorized,
        user: state.shop.user,
        totalCartCount: state.shop.totalCartCount,
        updatedCart: state.shop.updatedCart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTotalCartCount: (total) => dispatch(setTotalCartCount(total)),
        setSigninOpen: () => dispatch(setSigninOpen()),
        makeCartEmpty: (empty) => dispatch(makeCartEmpty(empty)),
        updateCart: () => dispatch(updateCart()),
        setOnlineCart: (cartItems) => dispatch(setOnlineCart(cartItems))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cartdrawer);