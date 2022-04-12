import * as React from 'react';
import {
    Drawer,
    Box
} from '@material-ui/core';
import { removeFromCart } from '../../redux/actions/productActions';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faShoppingCart, faRupee } from '@fortawesome/free-solid-svg-icons';
const Cartdrawer = ({ opencart, closecart, removeFromCart }) => {
    const cartData = useSelector((state) => (state.shop.cart))
    const countTotal = (items) => items.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    const cartItems = cartData.map((products, i) => {
        const { id, title, image, price } = products;
        return (
            // <tr>
            //     <td>
            //         <img src={process.env.PUBLIC_URL + image} alt={title} />
            //         <h5>{title}</h5>
            //     </td>
            //     <td>
            //         <div className="qty">
            //             <a href="#">-</a>
            //             <span>1</span>
            //             <a href="#">+</a>
            //         </div>
            //     </td>
            //     <td>
            //         <div className="price">
            //             <span>₹</span>
            //             <span>{price}</span>
            //         </div>

            //     </td>
            //     <button
            //         onClick={() => removeFromCart(id)}
            //     >x</button>
            // </tr>
            <div
                key={i}
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <div className="cart_block">
                    <img
                        style={{ maxHeight: '100px', maxWidth: '100px' }}
                        src={process.env.PUBLIC_URL + image} alt={title}
                    />
                </div>
                <div className="cart_block">
                    <h5>{title}</h5>
                    <div className="item_quantity">
                        <a href="#" className="quantity_minus" >-</a>
                        <input type="text" value="1" className="quantity" disabled />
                        <a href="#" className="quantity_plus" >+</a>
                    </div>
                </div>
                <div className="cart_block">
                    <h4><span><FontAwesomeIcon icon={faRupee} /></span>{price}</h4>
                </div>
                <button
                    onClick={() => removeFromCart(id)}
                >x</button>
            </div>
        );
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
                        <div className="cart_section" style={{ padding: '35px' }}>
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

                                {cartItems}


                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h3>total</h3>
                                <h4><span><FontAwesomeIcon icon={faRupee} /></span>{countTotal(cartData)}</h4>
                            </div>
                        </div>
                        <button style={{ backgroundColor: '#2a7d2e', width: '100%', height: '50px', alignItem: 'center' }} className="cart_action_btn">check out</button>
                    </div>
                </Box>
            </Drawer>
        </div >
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
};
export default connect(null, mapDispatchToProps)(Cartdrawer);