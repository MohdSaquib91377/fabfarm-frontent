import * as React from 'react';
import Cartitems from './Cartitems';
import {
    Drawer,
    Box
} from '@material-ui/core';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faShoppingCart, faRupee } from '@fortawesome/free-solid-svg-icons';
const Cartdrawer = ({ cart, opencart, closecart}) => {

    const [totalPrice, setTotalPrice] = React.useState(0);
    React.useEffect(() => {
        let price = 0;
        cart.forEach(item => {
            price += item.quantity * item.price;
        })
        setTotalPrice(price);

    }, [cart, totalPrice, setTotalPrice]);
    const cartItems = cart.map((products, i) => {
        return (
            <Cartitems product={products} key={i} />
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

                                {cartItems}


                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between',marginRight:'30px' }}>
                                <h3>Total</h3>
                                <h4><small>Rs</small>{totalPrice}</h4>
                                {/* <h4><span><FontAwesomeIcon icon={faRupee} /></span>{totalPrice}</h4> */}
                            </div>
                        </div>
                        <button style={{ backgroundColor: '#2a7d2e', width: '100%', height: '50px', alignItem: 'center', color:'#fff' }} className="cart_action_btn">check out</button>
                    </div>
                </Box>
            </Drawer>
        </div >
    );
};
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    }
}

export default connect(mapStateToProps)(Cartdrawer);