import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Tabtitle from './Tabtitle'
import useBannerImages from '../hooks/useBannerImages'
import axios from '../components/API/axios'
import { FaSpinner } from 'react-icons/fa'
import { connect } from 'react-redux'
import { setPopup, setPopupMessage } from '../redux/actions/productActions'
const Contact = ({setPopup,setPopupMessage}) => {
    Tabtitle('FAB | Contact us')
    const banner = useBannerImages('contact')
    const [formErrors, setFormErrors] = useState({})
    const initialValues = {
        full_name: "",
        email: "",
        message: ""
    };
    const [formValues, setFormValues] = useState(initialValues)
    const [isSubmit, setIsSubmit] = useState(false)
    const [loader, setLoader] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateContact(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setLoader(true)
            axios.post('/api/v1/store/contact-us/', formValues)
                .then(() => {
                    setPopup(true)
                    setPopupMessage('Message sent successfully')
                    setLoader(false)
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

    const validateContact = (values) => {
        const errors = {};
        const regexFullName = /^[A-Za-z ]+$/;
        const regexemail = /\S+@\S+\.\S+/;

        if (!values.full_name) {
            errors.full_name = 'Full Name is required'
        }
        else if (!regexFullName.test(values.full_name)) {
            errors.full_name = 'Enter a valid name'
        }
        if (!values.email) {
            errors.email = 'Email is required!'
        } else if (!regexemail.test(values.email)) {
            errors.email = 'Enter a valid email!';
        }
        if (!values.message) {
            errors.message = 'Message is required'
        }
        return errors;
    }

    return (
        <>
            <div className="breadcrumb_wrapper"
                style={{
                    minHeight: '300px',
                    backgroundImage: `url(${banner[0]?.image_or_video})`
                }}>
                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="breadcrumb_inner">
                                <h3>contact us</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb_block">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li>contact us</li>
                    </ul>
                </div>
            </div>

            <div className="contact_form_wrapper clv_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="contact_form_section">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <h3> Send Us A Message.</h3>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="col-md-6 col-lg-6 my-3">
                                            <div className="form_block">
                                                <input type="text" name="full_name" value={formValues.full_name} onChange={handleChange} className="form_field require" placeholder="Full Name" />
                                                <p>{formErrors.full_name}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 my-3">
                                            <div className="form_block">
                                                <input type="text" name="email" value={formValues.email} onChange={handleChange} className="form_field require" placeholder="Email" data-valid="email" data-error="Email should be valid." />
                                                <p>{formErrors.email}</p>
                                            </div>
                                        </div>
                                        {/* add select option here */}
                                        <div className="col-md-12 col-lg-12 my-3">
                                            <div className="form_block">
                                                <textarea placeholder="Message" value={formValues.message} onChange={handleChange} name="message" className="form_field require" ></textarea>
                                                <p>{formErrors.message}</p>
                                                <div className="response"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12 my-3">
                                            <div className="form_block">
                                                <button type="submit" className="clv_btn submitForm" data-type="contact">{loader ? <FaSpinner icon="spinner" className="spinner" /> : 'send'}</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="working_time_section">
                                <div className="timetable_block">
                                    <h5>working hours</h5>
                                    <ul>
                                        <li>
                                            <p>monday to saturday</p>
                                            <p>9:30 am - 6:00 pm</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tollfree_block">
                                    <h5>toll free number</h5>
                                    <h3>+1-202-555-0101</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_blocks_wrapper clv_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="contact_block">
                                <span></span>
                                <div className="contact_icon"><img src="/images/contact_icon1.png" alt="image" /></div>
                                <h4>contact us</h4>
                                <p>
                                    09112293300
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="contact_block">
                                <span></span>
                                <div className="contact_icon"><img src="/images/contact_icon2.png" alt="image" /></div>
                                <h4>email</h4>
                                <p>
                                    farmersallianceforbusiness@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="contact_block">
                                <span></span>
                                <div className="contact_icon"><img src="/images/contact_icon3.png" alt="image" /></div>
                                <h4>address</h4>
                                <p>
                                    Baramati, Maharastra, India.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Contact Map--> */}
            <div className="contact_map_wrapper">
                <div id="map"> here map will be shown</div>
            </div>
            <br />
            <br />
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        setPopup: (boolean) => dispatch(setPopup(boolean)),
        setPopupMessage: (string) => dispatch(setPopupMessage(string))
    }

}
export default connect(null,mapDispatchToProps)(Contact)