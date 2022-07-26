import Coupon from '../coupon/Coupon';
import { FaSpinner } from 'react-icons/fa';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
const Billcard = ({ formErrors, formValues, setFormValues, handleChange, handleSubmit, loader, couponDetails, onlineCart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        onlineCart.map((item) => {
            if (item.cart_total !== undefined)
                return setTotalPrice(item.cart_total)
        })
    }, [onlineCart])
    useEffect(() => {
        if (couponDetails.length !== 0) {
            setFormValues({ couponCode: couponDetails.couponName })
        }
    }, [couponDetails])

    const productList = onlineCart.map((item, i) => {
        if (item.product !== undefined) {
            const { cartCost, cartQuantity, product: { name, price } } = item;
            return (
                <li key={i} className="d-flex justify-content-between">
                    <span className="your-order-middle-left w-75 font--semi-bold"> <span className='addlimitedtext'>{name}</span> <span className='price'> ₹{price} X {cartQuantity}  </span></span>
                    <span className="your-order-middle-right w-25 text-right  font--semi-bold"><FontAwesomeIcon icon={faIndianRupee} />{cartCost.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}</span>
                </li>
            )
        }

    });
    return (
        <div className="your-order-section">
            <div className="section-content">
                <h5 className="section-content__title">Your order</h5>
            </div>
            <div className="your-order-box gray-bg m-t-40 m-b-30">
                <div className="your-order-product-info">
                    <div className="your-order-top d-flex justify-content-between">
                        <h6 className="your-order-top-left font--bold">Product</h6>
                        <h6 className="your-order-top-right font--bold">Total</h6>
                    </div>
                    <ul className="your-order-middle">
                        {productList}
                    </ul>
                    <div className="your-order-bottom d-flex justify-content-between">
                        <h6 className="your-order-bottom-left font--bold">Shipping</h6>
                        <span className="your-order-bottom-right font--semi-bold">Free shipping</span>
                    </div>
                    <div className="your-order-total d-flex justify-content-between">
                        <h5 className="your-order-total-left font--bold">Total</h5>
                        <h5 className="your-order-total-right font--bold"><FontAwesomeIcon icon={faIndianRupee} />{totalPrice.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}</h5>
                    </div>
                    <div className="your-order-bottom d-flex justify-content-between">
                        <Coupon />
                    </div>
                    {
                        couponDetails.length !== 0 ?
                            <div className="your-order-total d-flex justify-content-between">
                                <h6 className="your-order-bottom-left font--bold">Disconted amount</h6>
                                <h5 className="your-order-total-right font--bold"><FontAwesomeIcon icon={faIndianRupee} />{couponDetails.couponDetails.discounted_price.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}</h5>
                            </div> :
                            undefined
                    }
                    <div className={couponDetails.length !== 0 ? "your-order-top d-flex justify-content-between" : "your-order-total d-flex justify-content-between"}>
                        <h5 className="your-order-total-left font--bold">Total payable</h5>
                        <h5 className="your-order-total-right font--bold"><FontAwesomeIcon icon={faIndianRupee} />{couponDetails.length !== 0 ? couponDetails.couponDetails.total_amount_payble.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',') : totalPrice.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}</h5>
                    </div>
                    <br />
                    <div className="payment-method">
                        <div className="payment-accordion element-mrg">
                            <div className="panel-group" id="accordion">
                                <div>
                                    <FormControl>
                                        <FormLabel>Select Payment Mode</FormLabel>
                                        <RadioGroup
                                            name="payment_mode"
                                            value={formValues.payment_mode}
                                            onChange={handleChange}
                                        >
                                            <FormControlLabel value="razor_pay" control={<Radio />} label="Razor Pay" />
                                            <FormControlLabel value="cod" control={<Radio />} label="Cash on delevery" />
                                        </RadioGroup>
                                        <p style={{
                                            color: 'red'
                                        }}>{formErrors.payment_mode}</p>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button
                    onClick={handleSubmit}
                    className="btn btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--bold" type="submit">{loader ? <FaSpinner icon="spinner" className="spinner" /> : "PLACE ORDER"}</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        couponDetails: state.shop.couponDetails,
        onlineCart: state.shop.onlineCart
    }
}

export default connect(mapStateToProps)(Billcard)