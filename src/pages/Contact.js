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
                    setFormValues(initialValues)
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
        const regexemail = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}/;

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
                {/* <div className="breadcrumb_block">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li>contact us</li>
                    </ul>
                </div> */}
            </div>
                <div className="container ">
                    <div className="row">
                        <div className="col-12 px-5 my-3">
                            <p className='m-0'>
                                <span className='breadcrum-width-dot'><Link to='/'>Home </Link>  </span>
                                <span className='breadcrum-width-dot'>&nbsp;{'>'}&nbsp;</span>
                                <span className='breadcrum-width-dot'><Link to='/'>Contact </Link>  </span>
                            </p>
                        </div>
                    </div>
                </div>
            <div className="contact_form_wrapper clv_section pt-2">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-8 ">
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
                        <div className="col-lg-4 ">
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
                                <a className="tollfree_block" href='tel:12025550101'>
                                    <h5>toll free number</h5>
                                    <h3>+1-202-555-0101</h3>
                                </a>
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
                                <a href='tel:919112293300' className='normalLink'>

                                <p>
                                    09112293300
                                </p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="contact_block">
                                <span></span>
                                <div className="contact_icon"><img src="/images/contact_icon2.png" alt="image" /></div>
                                <h4>email</h4>
                                <a className='normalLink' href="mailto:farmersallianceforbusiness@gmail.com">

                                    <p className='normalLink'>
                                        farmersallianceforbusiness@gmail.com
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="contact_block">
                                <span></span>
                                <div className="contact_icon"><img src="/images/contact_icon3.png" alt="image" /></div>
                                <h4>address</h4>
                                <a href='https://goo.gl/maps/WDEtXJeW2ha5tXFa7' target="_blank" className='normalLink'>

                                <p className='normalLink'>
                                    Baramati, Maharastra, India.
                                </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Contact Map--> */}
            <div className="contact_map_wrapper">
                {/* map iframe  */}
                <div id="map"> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60650.7600801978!2d74.5553722474847!3d18.17899432569775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3a03bdb59287f%3A0x36e4fb47fb8d8a9d!2sBaramati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1658899556967!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
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