import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../redux/actions/productActions';
import { connect } from 'react-redux';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
const Cartitems = ({ user, isAuthorized, removeFromCart, incrementQuantity, decrementQuantity, product }) => {
    const axiosPrivate = useAxiosPrivate();
    const { id, image: [{ image }], name, price, quantity } = product;
    const total = quantity * price;
    const deleteCartItems = (id) => {
        removeFromCart(id);
        if (isAuthorized) {
            axiosPrivate.delete('/api/v1/cart/add-to-cart/', {
                data: {
                    product_id: id
                }
            })
                .then(response => {

                })
                .catch(error => {
                    throw (error)
                })
        }
    }
    return (
        <div
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: "15px 0" }}>
            <div className="cart_block">
                <img
                    style={{ maxHeight: '100px', maxWidth: '100px' }}
                    src={process.env.REACT_APP_BASE_URL + image} alt={name}
                />
            </div>
            <div className="cart_block">
                <h5>{name}</h5>
                <div className="item_quantity" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="quantity_minus" onClick={() => decrementQuantity(id)} ><FontAwesomeIcon icon={faMinus} /></button>
                    <input
                        type="text"
                        value={quantity}
                        className="quantity"
                        disabled />
                    <button className="quantity_plus" onClick={() => incrementQuantity(id)} ><FontAwesomeIcon icon={faPlus} /></button>
                </div>
            </div>
            <div className="cart_block">
                <h4 style={{ display: 'flex' }}><span><FontAwesomeIcon icon={faIndianRupee} /></span>{total.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}</h4>
            </div>
            <button className='unset redbtn'
                onClick={() => deleteCartItems(id)}
            ><FontAwesomeIcon icon={faTrash} /></button>
        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        isAuthorized: state.shop.isAuthorized,
        user: state.shop.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        incrementQuantity: (id) => dispatch(incrementQuantity(id)),
        decrementQuantity: (id) => dispatch(decrementQuantity(id))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cartitems)