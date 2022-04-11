import * as React from 'react';
import {
    Drawer,
    Box
} from '@material-ui/core';
import { removeFromCart } from '../../redux/actions/productActions';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

const Cartdrawer = ({ opencart, closecart, removeFromCart }) => {
    const cartData = useSelector((state) => (state.shop.cart))
    const cartItems = cartData.map((products) => {
        const { id, title, image, price } = products;
        return (
            <tr>
                <td>
                    <img src={process.env.PUBLIC_URL + image} alt={title} />
                    <h5>{title}</h5>
                </td>
                <td>
                    <div className="qty">
                        <a href="#">-</a>
                        <span>1</span>
                        <a href="#">+</a>
                    </div>
                </td>
                <td>
                    <div className="price">
                        <span>₹</span>
                        <span>{price}</span>
                    </div>

                </td>
                <button
                    onClick={() => removeFromCart(id)}
                >x</button>
            </tr>
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
                    sx={{ width: 700 }}
                    className="header--navBar--menuBox"
                    role="presentation"
                >
                    <div className="shoppingCart">
                        <div className="inner">
                            <table className="shoppingCartDetails">
                                <thead>
                                    <tr>
                                        <th>
                                            <h5>product</h5>
                                        </th>
                                        <th>
                                            <h5>Qty </h5>
                                        </th>
                                        <th>
                                            <h5>price</h5>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems}
                                </tbody>
                            </table>
                        </div>
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