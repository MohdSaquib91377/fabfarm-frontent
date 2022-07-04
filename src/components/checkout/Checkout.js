import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './checkout.css'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Tabtitle from '../../pages/Tabtitle';
import { setCouponDetails, setSigninOpen } from '../../redux/actions/productActions';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Coupon from '../coupon/Coupon';
import { FaSpinner } from 'react-icons/fa';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const loadRazorpay = (src) => {
    return new Promise(resolve => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}


const Checkout = ({ couponDetails, setSigninOpen, isAuthorized, cartItem }) => {
    let Navigate = useNavigate()
    const axiosPrivate = useAxiosPrivate();
    const [totalPrice, setTotalPrice] = useState(0);
    // const [paymentMethodOne, setPaymentMethodOne] = useState(false);
    // const [paymentMethodTwo, setPaymentMethodTwo] = useState(false);
    // const [paymentMethodThree, setPaymentMethodThree] = useState(false);
    const [formErrors, setFormErrors] = useState({})
    const initialValues = {
        full_name: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        locality: "",
        landmark: "",
        address: "",
        alternate_number: "",
        payment_mode: "",
        message: "",
        locality: "",
        couponCode: ""
    };
    const [formValues, setFormValues] = useState(initialValues)
    const [isSubmit, setIsSubmit] = useState(false)
    const [loader, setLoader] = useState(false)
    Tabtitle('FAB | Checkout')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateCheckout(formValues));
        setIsSubmit(true);
    }

    // razorpay code 

    const displayRazorpay = async (data) => {
        const { razorpay_order_id, amount, razorpay_key_id } = data
        const res = await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay sdk failed to load. Are you online ?')
        }

        const options = {
            "key": razorpay_key_id, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "FAB",
            "description": "Test Transaction",
            "image": "images/home/logo.png",
            "order_id": razorpay_order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response) {
                axiosPrivate.post('/api/v1/payment/payment-success/', response)
                    .then(res => {
                        Navigate('/orderlist')
                    })
                    .catch(error => {
                        throw error
                    })
            },
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9999999999"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open()
        rzp1.on('payment.failed', function (response) {
            const { error: { code, description, source, step, reason, metadata: { order_id, payment_id } } } = response
            const data = {
                error_code: code,
                error_description: description,
                error_source: source,
                error_step: step,
                error_reason: reason,
                error_order_id: order_id,
                error_payment_id: payment_id
            }
            axiosPrivate.post('/api/v1/payment/payment-failure/', data)
                .catch(error => {
                    throw error
                })
        });

    }

    // razorpay code ends


    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setLoader(true)
            axiosPrivate.post('/api/v1/order/place-order/', formValues)
                .then(response => {
                    if (response.status === 201) {
                        setLoader(false)
                        displayRazorpay(response.data);
                    }
                    if (response.status === 200) {
                        setLoader(false)
                        Navigate('/orderlist')
                    }
                })
                .catch(error => {
                    setLoader(false)
                    throw error
                })
        }
        return () => {
            setIsSubmit(false)
        }
    }, [formErrors])
    useEffect(() => {
        let price = 0;
        cartItem.forEach(item => {
            price += item.quantity * item.price;
        })
        setTotalPrice(price);
    }, [cartItem, totalPrice, setTotalPrice]);

    useEffect(() => {
        if (couponDetails.length !== 0) {
            setFormValues({ couponCode: couponDetails.couponName })
        }
    }, [couponDetails])
    const validateCheckout = (values) => {
        const errors = {};
        const regexPincode = /^[1-9][0-9]{5}$/;
        const regexmobile = /^([+]\d{2})?\d{10}$/;
        if (!values.full_name) {
            errors.full_name = 'Full Name is required'
        }
        if (!values.country) {
            errors.country = 'Select country'
        }
        if (!values.address) {
            errors.address = 'Address is required'
        }
        if (!values.locality) {
            errors.locality = 'Locality is required'
        }
        if (!values.landmark) {
            errors.landmark = 'Landmark is required'
        }
        if (!values.state) {
            errors.state = 'Select state'
        }
        if (!values.city) {
            errors.city = 'Select city'
        }
        if (!values.pincode) {
            errors.pincode = 'Pincode is required'
        } else if (!regexPincode.test(values.pincode)) {
            errors.pincode = 'Enter a valid pincode!';
        }
        if (!values.alternate_number) {
            errors.alternate_number = 'Email is required!'
        } else if (!regexmobile.test(values.alternate_number)) {
            errors.alternate_number = 'Enter a valid mobile number!';
        }
        if (!values.payment_mode) {
            errors.payment_mode = 'Select payment mode'
        }
        return errors;
    }
    const productList = cartItem.map((item, i) => {
        const { title, price, quantity } = item;
        return (
            <li key={i} className="d-flex justify-content-between">
                <span className="your-order-middle-left font--semi-bold">{title}  {quantity} X {price}</span>
                <span className="your-order-middle-right font--semi-bold"><FontAwesomeIcon icon={faIndianRupee} />{quantity * price}</span>
            </li>
        )
    });
    return (
        <>
            <div className="breadcrumb_wrapper" style={{ minHeight: '250px' }}>
                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="breadcrumb_inner">
                                <h3>Checkout</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb_block">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li> &nbsp;checkout</li>
                    </ul>
                </div>
            </div>
            {
                isAuthorized ?
                    <main id="main-container" style={{
                        marginTop: '100px'
                    }} className="main-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="section-content">
                                        <h5 className="section-content__title">Billing Details</h5>
                                    </div>
                                    <form action="#" method="post" className="form-box">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-box__single-group">
                                                    <label htmlFor="form-first-name">Full name</label>
                                                    <input
                                                        name='full_name'
                                                        value={formValues.full_name}
                                                        onChange={handleChange}
                                                        type="text"
                                                        id="form-first-name" />
                                                    <p>{formErrors.full_name}</p>
                                                </div>
                                            </div>
                                            {/* <div className="col-md-6">
                                                <div className="form-box__single-group">
                                                    <label htmlFor="form-last-name">Last Name</label>
                                                    <input
                                                        name='lastName'
                                                        value={formValues.lastName}
                                                        onChange={handleChange}
                                                        type="text"
                                                        id="form-last-name" />
                                                </div>
                                            </div> */}
                                            {/* <div className="col-md-12">
                                            <div className="form-box__single-group">
                                                <label htmlFor="form-company-name">Company Name</label>
                                                <input type="text" id="form-company-name" />
                                            </div>
                                        </div> */}
                                            <div className="col-md-12">
                                                <div className="form-box__single-group">
                                                    <label htmlFor="form-country">* Country</label>
                                                    <select
                                                        name='country'
                                                        onChange={handleChange}
                                                        defaultValue={formValues.country || "select-country"}
                                                        id="form-country">
                                                        <option value="select-country" >Select a country</option>
                                                        <option value="IND">India</option>
                                                        {/* <option value="US">USA</option>
                                                    <option value="UK">UK</option>
                                                    <option value="TR">Turkey</option>
                                                    <option value="CA">Canada</option> */}
                                                    </select>
                                                    <p>{formErrors.country}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-box__single-group">
                                                    <label htmlFor="form-address-1">Street Address</label>
                                                    <input
                                                        name='address'
                                                        value={formValues.address}
                                                        onChange={handleChange}
                                                        type="text"
                                                        id="form-address-1"
                                                        placeholder="Address" />
                                                    <p>{formErrors.address}</p>

                                                    <input
                                                        name='locality'
                                                        value={formValues.locality}
                                                        onChange={handleChange}
                                                        type="text" className="m-t-10"
                                                        id="form-address-2"
                                                        placeholder="Locality" />
                                                    <p>{formErrors.locality}</p>

                                                    <input
                                                        name='landmark'
                                                        value={formValues.landmark}
                                                        onChange={handleChange}
                                                        type="text" className="m-t-10"
                                                        id="form-address-3"
                                                        placeholder="Landmark" />
                                                    <p>{formErrors.landmark}</p>

                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-box__single-group">
                                                    <label htmlFor="form-state">* Region / State</label>
                                                    <select
                                                        name='state'
                                                        onChange={handleChange}
                                                        defaultValue={formValues.state || "select-state"}
                                                        id="form-state">
                                                        <option value="select-state" >Select a state</option>
                                                        <option value="mh">Maharastra</option>
                                                        <option value="goa">Goa</option>
                                                        {/* <option value="Raj">Rajshahi</option>
                                                    <option value="Syl">Sylet</option>
                                                    <option value="Chi">Chittagong</option> */}
                                                    </select>
                                                    <p>{formErrors.state}</p>

                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-box__single-group">
                                                    <label htmlFor="form-city">* Region / city</label>
                                                    <select
                                                        name='city'
                                                        onChange={handleChange}
                                                        defaultValue={formValues.city || "select-city"}
                                                        id="form-city">
                                                        <option value="select-city" >Select a city</option>
                                                        <option value="mumbai">mumbai</option>
                                                        <option value="pune">pune</option>
                                                        {/* <option value="Raj">Rajshahi</option>
                                                    <option value="Syl">Sylet</option>
                                                    <option value="Chi">Chittagong</option> */}
                                                    </select>
                                                    <p>{formErrors.city}</p>

                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-box__single-group">
                                                    <label htmlFor="form-zipcode">* Zip/Postal Code</label>
                                                    <input
                                                        name='pincode'
                                                        value={formValues.pincode}
                                                        onChange={handleChange}
                                                        type="text" id="form-zipcode" />
                                                    <p>{formErrors.pincode}</p>

                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-box__single-group">
                                                    <label htmlFor="form-phone">Phone</label>
                                                    <input
                                                        name='alternate_number'
                                                        value={formValues.alternate_number}
                                                        onChange={handleChange}
                                                        type="text" id="form-phone" />
                                                    <p>{formErrors.alternate_number}</p>

                                                </div>
                                            </div>
                                            {/* <div className="col-md-6">
                                                <div className="form-box__single-group">
                                                    <label htmlFor="form-email">Email Address</label>
                                                    <input
                                                        name='email'
                                                        type="email" id="form-email" />
                                                    <p>{formErrors.email}</p>
                                                </div>
                                            </div> */}
                                            {/* <div className="col-md-12">
                                            <div className="m-tb-20">
                                                <label htmlFor="check-account">
                                                    <input type="checkbox" name="check-account" className="creat-account" id="check-account" />
                                                    <span>Create an account?</span>
                                                </label>
                                                <div className="toogle-form open-create-account">
                                                    <div className="form-box__single-group">
                                                        <label htmlFor="form-email-new-account">Email Address</label>
                                                        <input type="email" id="form-email-new-account" />
                                                    </div>
                                                    <div className="form-box__single-group">
                                                        <label htmlFor="form-password-new-account">Password</label>
                                                        <input type="password" id="form-password-new-account" />
                                                    </div>
                                                    <div className="from-box__buttons m-t-25">
                                                        <button className="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase btn--weight" type="submit">REGISTER</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                            <div className="col-md-12">
                                                <div className="form-box__single-group">
                                                    <h6>Additional information</h6>
                                                    <label htmlFor="form-additional-info">Order notes</label>
                                                    <textarea
                                                        name='message'
                                                        value={formValues.message}
                                                        onChange={handleChange}
                                                        id="form-additional-info" rows="5" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                                </div>
                                            </div>
                                            {/* <div className="col-md-12">
                                            <div className="m-tb-20">
                                                <label htmlFor="shipping-account">
                                                    <input type="checkbox" name="check-account" className="shipping-account" id="shipping-account" />
                                                    <span>Ship to a different address?</span>
                                                </label>
                                                <div className="toogle-form open-shipping-account">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-box__single-group">
                                                                <label htmlFor="shipping-form-first-name">First Name</label>
                                                                <input type="text" id="shipping-form-first-name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-box__single-group">
                                                                <label htmlFor="shipping-form-last-name">Last Name</label>
                                                                <input type="text" id="shipping-form-last-name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-box__single-group">
                                                                <label htmlFor="shipping-form-company-name">Company Name</label>
                                                                <input type="text" id="shipping-form-company-name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-box__single-group">
                                                                <label htmlFor="shipping-form-country">* Country</label>
                                                                <select id="shipping-form-country">
                                                                    <option value="select-country" selected>Select a country</option>
                                                                    <option value="BD">Bangladesh</option>
                                                                    <option value="US">USA</option>
                                                                    <option value="UK">UK</option>
                                                                    <option value="TR">Turkey</option>
                                                                    <option value="CA">Canada</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-box__single-group">
                                                                <label htmlFor="shipping-form-address-1">Street Address</label>
                                                                <input type="text" id="shipping-form-address-1" placeholder="House number and street name" />
                                                                <input type="text" className="m-t-10" id="shipping-form-address-2" placeholder="Apartment, suite, unit etc." />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-box__single-group">
                                                                <label htmlFor="shipping-form-state">* Region / State</label>
                                                                <select id="shipping-form-state">
                                                                    <option value="Dha" selected>Dhaka</option>
                                                                    <option value="Kha">Khulna</option>
                                                                    <option value="Raj">Rajshahi</option>
                                                                    <option value="Syl">Sylet</option>
                                                                    <option value="Chi">Chittagong</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-box__single-group">
                                                                <label htmlFor="shipping-form-zipcode">* Zip/Postal Code</label>
                                                                <input type="text" id="shipping-form-zipcode" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-box__single-group">
                                                                <label htmlFor="shipping-form-phone">Phone</label>
                                                                <input type="text" id="shipping-form-phone" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-box__single-group">
                                                                <label htmlFor="shipping-form-email">Email Address</label>
                                                                <input type="email" id="shipping-form-email" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        </div>
                                    </form>
                                </div>

                                <div className="col-lg-5">
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
                                                    <h5 className="your-order-total-right font--bold"><FontAwesomeIcon icon={faIndianRupee} />{totalPrice}</h5>
                                                </div>
                                                <div className="your-order-bottom d-flex justify-content-between">
                                                    <Coupon />
                                                </div>
                                                {
                                                    couponDetails.length !== 0 ?
                                                        <div className="your-order-total d-flex justify-content-between">
                                                            <h6 className="your-order-bottom-left font--bold">Disconted amount</h6>
                                                            <h5 className="your-order-total-right font--bold"><FontAwesomeIcon icon={faIndianRupee} />{couponDetails.couponDetails.discounted_price}</h5>
                                                        </div> :
                                                        undefined
                                                }
                                                <div className={couponDetails.length !== 0 ? "your-order-top d-flex justify-content-between" : "your-order-total d-flex justify-content-between"}>
                                                    <h5 className="your-order-total-left font--bold">Total payable</h5>
                                                    <h5 className="your-order-total-right font--bold"><FontAwesomeIcon icon={faIndianRupee} />{couponDetails.length !== 0 ? couponDetails.couponDetails.total_amount_payble : totalPrice}</h5>
                                                </div>
                                                <br />
                                                <div className="payment-method">
                                                    <div className="payment-accordion element-mrg">
                                                        <div className="panel-group" id="accordion">
                                                            {/* <div className="panel payment-accordion">
                                                                <div className="panel-heading" onClick={() => setPaymentMethodOne(!paymentMethodOne)}>
                                                                    <h4 className="panel-title">
                                                                        <a className=" d-flex justify-content-between align-items-center">
                                                                            Direct bank transfer <FontAwesomeIcon icon={paymentMethodOne ? faChevronUp : faChevronDown} />
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                                <div id="method1" className={paymentMethodOne ? 'panel-collapse collapse show' : 'panel-collapse collapse'}>
                                                                    <div className="panel-body">
                                                                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="panel payment-accordion">
                                                                <div className="panel-heading" onClick={() => setPaymentMethodTwo(!paymentMethodTwo)} >
                                                                    <h4 className="panel-title">
                                                                        <a className=" d-flex justify-content-between align-items-center" >
                                                                            Check payments <FontAwesomeIcon icon={paymentMethodTwo ? faChevronUp : faChevronDown} />
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                                <div id="method2" className={paymentMethodTwo ? 'panel-collapse collapse show' : 'panel-collapse collapse'} >
                                                                    <div className="panel-body">
                                                                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="panel payment-accordion">
                                                                <div className="panel-heading" onClick={() => setPaymentMethodThree(!paymentMethodThree)}>
                                                                    <h4 className="panel-title">
                                                                        <a className=" d-flex justify-content-between align-items-center">
                                                                            Cash on delivery <FontAwesomeIcon icon={paymentMethodThree ? faChevronUp : faChevronDown} />
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                                <div id="method3" className={paymentMethodThree ? 'panel-collapse collapse show' : 'panel-collapse collapse'}>
                                                                    <div className="panel-body">
                                                                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                                    </div>
                                                                </div>
                                                            </div> */}
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
                                </div>
                            </div>
                        </div>
                    </main>
                    :
                    <div className='text-center'>
                        <p className='para-text-sign-in'>You Are Not sign in </p>
                        <button className='text-signin'
                            onClick={() => setSigninOpen()}
                        >click here to sign in </button>
                    </div>
            }
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        cartItem: state.shop.cart,
        user: state.shop.user,
        isAuthorized: state.shop.isAuthorized,
        couponDetails: state.shop.couponDetails
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setSigninOpen: () => dispatch(setSigninOpen()),
        setCouponDetails: () => dispatch(setCouponDetails())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);