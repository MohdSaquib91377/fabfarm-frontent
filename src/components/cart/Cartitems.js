import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupee, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../redux/actions/productActions';
import { connect } from 'react-redux';
const Cartitems = ({ removeFromCart, incrementQuantity, decrementQuantity, product }) => {
    return (
        <div
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',margin:"15px 0" }}>
            <div className="cart_block">
                <img
                    style={{ maxHeight: '100px', maxWidth: '100px' }}
                    src={process.env.PUBLIC_URL + product.image} alt={product.title}
                />
            </div>
            <div className="cart_block">
                <h5>{product.title}</h5>
                <div className="item_quantity" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="quantity_minus" onClick={() => decrementQuantity(product.id)} ><FontAwesomeIcon icon={faMinus} /></button>
                    <input
                        type="text"
                        value={product.quantity}
                        className="quantity"
                        disabled />
                    <button className="quantity_plus" onClick={() => incrementQuantity(product.id)} ><FontAwesomeIcon icon={faPlus} /></button>
                </div>
            </div>
            <div className="cart_block">
                <h4><small>RS</small>{product.quantity * product.price}</h4>
                {/* <h4><span><FontAwesomeIcon icon={faRupee} /></span>{product.quantity * product.price}</h4> */}
            </div>
            <button className='unset redbtn'
                onClick={() => removeFromCart(product.id)}
            >x</button>
        </div >
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        incrementQuantity: (id) => dispatch(incrementQuantity(id)),
        decrementQuantity: (id) => dispatch(decrementQuantity(id))
    };
};
export default connect(null, mapDispatchToProps)(Cartitems)