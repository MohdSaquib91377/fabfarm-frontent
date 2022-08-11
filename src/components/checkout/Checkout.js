import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './checkout.css'
import { connect } from 'react-redux'
import Tabtitle from '../../pages/Tabtitle';
import { setCouponDetails, setSigninOpen, updateCart } from '../../redux/actions/productActions';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Billcard from './Billcard';
import useBannerImages from '../../hooks/useBannerImages';
import Deliveryaddress from './deliveryaddress/Deliveryaddress';


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


const Checkout = ({ setSigninOpen, isAuthorized, updateCart, onlineCart }) => {
    let Navigate = useNavigate()
    const axiosPrivate = useAxiosPrivate();
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
        couponCode: ""
    };
    const [formValues, setFormValues] = useState(initialValues)
    const [isSubmit, setIsSubmit] = useState(false)
    const [loader, setLoader] = useState(false)
    Tabtitle('FAB | Checkout')
    const banner = useBannerImages('checkout')


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
                    .then(() => {
                        updateCart();
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
                        updateCart();
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

    const validateCheckout = (values) => {
        const errors = {};
        const regexFullName = /^[A-Za-z ]+$/;
        const regexPincode = /^[1-9][0-9]{5}$/;
        const regexmobile = /^([+]\d{2})?\d{10}$/;
        if (!values.full_name) {
            errors.full_name = 'Full Name is required'
        }
        else if (!regexFullName.test(values.full_name)) {
            errors.full_name = 'Enter a valid name'
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
            errors.alternate_number = 'Mobile number is required!'
        } else if (!regexmobile.test(values.alternate_number)) {
            errors.alternate_number = 'Enter a valid mobile number!';
        }
        if (!values.message) {
            errors.message = 'Message is required'
        }
        if (!values.payment_mode) {
            errors.payment_mode = 'Select payment mode'
        }
        return errors;
    }
    return (
        <>
            <div className="breadcrumb_wrapper"
                style={{
                    minHeight: '250px',
                    backgroundImage: `url(${banner[0]?.image_or_video})`
                }}
            >
                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="breadcrumb_inner">
                                <h3>Checkout</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container ">
                    <div className="row">
                        <div className="col-12  my-3">
                            <p className='m-0'>
                                <span className='breadcrum-width-dot'><Link to='/'>Home </Link>  </span>
                                <span className='breadcrum-width-dot'>&nbsp;{'>'}&nbsp;</span>
                                <span className='breadcrum-width-dot'>Checkout  </span>
                            </p>
                        </div>
                    </div>
                </div>
            {
                isAuthorized ?
                    onlineCart.length !== 1 ?
                        <main id="main-container" style={{
                            marginTop: '100px'
                        }} className="main-container">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <Deliveryaddress/>
                                        {/* <form action="#" method="post" className="form-box">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-box__single-group">
                                                        <label htmlFor="form-first-name">Full name*</label>
                                                        <input
                                                            name='full_name'
                                                            value={formValues.full_name}
                                                            onChange={handleChange}
                                                            type="text"
                                                            id="form-first-name" />
                                                        <p>{formErrors.full_name}</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-12">
                                                    <div className="form-box__single-group">
                                                        <label htmlFor="form-country">Country*</label>
                                                        <select
                                                            name='country'
                                                            onChange={handleChange}
                                                            defaultValue={formValues.country || "select-country"}
                                                            id="form-country">
                                                            <option value="select-country" >Select a country</option>
                                                            <option value="IND">India</option>
                                                        </select>
                                                        <p>{formErrors.country}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-box__single-group">
                                                        <label htmlFor="form-address-1">Street Address*</label>
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
                                                        <label htmlFor="form-state">Region / State*</label>
                                                        <select
                                                            name='state'
                                                            onChange={handleChange}
                                                            defaultValue={formValues.state || "select-state"}
                                                            id="form-state">
                                                            <option value="select-state" >Select a state</option>
                                                            <option value="mh">Maharastra</option>
                                                            <option value="goa">Goa</option>
                                                        </select>
                                                        <p>{formErrors.state}</p>

                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-box__single-group">
                                                        <label htmlFor="form-city">Region / city*</label>
                                                        <select
                                                            name='city'
                                                            onChange={handleChange}
                                                            defaultValue={formValues.city || "select-city"}
                                                            id="form-city">
                                                            <option value="select-city" >Select a city</option>
                                                            <option value="mumbai">mumbai</option>
                                                            <option value="pune">pune</option>
                                                        </select>
                                                        <p>{formErrors.city}</p>

                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-box__single-group">
                                                        <label htmlFor="form-zipcode">Zip/Postal Code*</label>
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
                                                        <label htmlFor="form-phone">Phone*</label>
                                                        <input
                                                            name='alternate_number'
                                                            value={formValues.alternate_number}
                                                            onChange={handleChange}
                                                            type="text" id="form-phone" />
                                                        <p>{formErrors.alternate_number}</p>

                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-12">
                                                    <div className="form-box__single-group">
                                                        <h6>Additional information*</h6>
                                                        <label htmlFor="form-additional-info">Order notes</label>
                                                        <textarea
                                                            name='message'
                                                            value={formValues.message}
                                                            onChange={handleChange}
                                                            id="form-additional-info" rows="5" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                                        <p>{formErrors.message}</p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </form> */}
                                    </div>

                                    <div className="col-lg-5">
                                        <Billcard
                                            formValues={formValues}
                                            setFormValues={setFormValues}
                                            formErrors={formErrors}
                                            handleChange={handleChange}
                                            handleSubmit={handleSubmit}
                                            loader={loader}
                                        />
                                    </div>
                                </div>
                            </div>
                        </main>
                        :
                        <div className='text-center'>
                            <p className='para-text-sign-in'>You have no products in cart </p>
                        </div>
                    :
                    <div className='text-center'>
                        <p className='para-text-sign-in'>You Are Not Sign In </p>
                        <button className='text-signin'
                            onClick={() => setSigninOpen()}
                        >Click Here To Sign In</button>
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
        couponDetails: state.shop.couponDetails,
        onlineCart: state.shop.onlineCart

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setSigninOpen: () => dispatch(setSigninOpen()),
        setCouponDetails: () => dispatch(setCouponDetails()),
        updateCart: () => dispatch(updateCart())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);