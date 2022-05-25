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
import axios from '../API/axios';
import CartitemIflogged from './CartitemIflogged';
import { setSigninOpen, setTotalCartCount } from '../../redux/actions/productActions';
const Cartdrawer = ({ totalCartCount, setTotalCartCount, setSigninOpen, user, isAuthorized, cart, opencart, closecart }) => {

    const [totalPrice, setTotalPrice] = React.useState(0);
    const [cartProducts, setCartProducts] = React.useState([])
    const [items, setItems] = React.useState([])
    // const [cartDataifloggedin, setCartDataifLoggedin] = React.useState([])
    React.useEffect(() => {
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
        if (isAuthorized && cart.length !== 0) {
            const postCartData = () => {
                axios.post('/api/v1/cart/add-to-cart/', cartProducts, {
                    headers: {
                        Authorization: `Bearer ${user.access}`
                    }
                })
                    .then(response => {
                        // console.log(response)
                    })
                    .catch(response => {
                        console.log(response)
                    })
            }
            postCartData()

        }



    }, [cart, totalPrice, setTotalPrice, isAuthorized, user]);

    React.useEffect(() => {
        if (isAuthorized) {
            axios.get('/api/v1/cart/add-to-cart/', {
                headers: {
                    Authorization: `Bearer ${user.access}`
                }
            })
                .then(response => {
                    setItems(response.data)
                    response.data.map((data) => {
                        if (Object.keys(data).some(key => key === 'cart_item')) {
                            setTotalCartCount(data.cart_item)
                        }
                    })

                })
                .catch(response => {
                    console.log(response)
                })
        }
    }, [cartProducts, totalPrice])
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
                    sx={{ width: 400 }}
                    // className="header--navBar--menuBox"
                    role="presentation"
                >
                    <div className="clv_cart_box cart_box_open">
                        <div className="cart_section" style={{ padding: '20px' }}>
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
                                    isAuthorized ?
                                        totalCartCount !== 0 ? <CartitemIflogged items={items} /> : <p>your cart is empty</p>
                                        :
                                        cart.length !== 0 ? <> {cartItems}</> : <p>your cart is empty</p>
                                }
                            </div>
                            {cart.length === 0 ? <></> : <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: '10px', position: 'absolute', bottom: '50px', width: '360px' }}>
                                <h3>Total</h3>
                                <h4><span><FontAwesomeIcon icon={faIndianRupee} /></span>{totalPrice}</h4>
                            </div>}
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
                                        check out</button>
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
                                        check out
                                    </button>
                                </Link>
                                : undefined

                    }
                </Box>
            </Drawer>
        </div >
    );
};
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
        isAuthorized: state.shop.isAuthorized,
        user: state.shop.user,
        totalCartCount: state.shop.totalCartCount
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTotalCartCount: (total) => dispatch(setTotalCartCount(total)),
        setSigninOpen: () => dispatch(setSigninOpen()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cartdrawer);