import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Signin = ({ open, trigger, handleClose }) => {
    const initialValues = { email: '', password: '' }
    const [input, setInput] = useState(initialValues)
    const [inputErrors, setInputErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = (e.target)
        setInput({ ...input, [name]: value })
    }
    const handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        setInputErrors(validateSignin(input))
        setIsSubmit(true)
    }
    useEffect(() => {
        if (Object.keys(inputErrors).length === 0 && isSubmit) {
            console.log(input)
        }
    }, [inputErrors])
    const validateSignin = (value) => {
        const erros = {};
        const regexemail = /\S+@\S+\.\S+/;
        const regexmobile = /^\d{10}$/;
        if (!value.email) {
            erros.email = 'Email is required'
        }
        else if (!value.email.test(regexemail)) {
            erros.email = 'Enter a valid email';
        }
        if (!value.password) {
            erros.password = 'Password is required'
        }
    }
    return (
        <>
            <div className={open ? 'signin_wrapper open_signin' : 'signin_wrapper'}>
                <div className="signup_inner">
                    <div className="signup_details">
                        <div className="site_logo">
                            <a href="index.html"> <img src={process.env.PUBLIC_URL + "images/logo.png"} alt="image" /></a>
                        </div>
                        <h3>welcome to cultivation!</h3>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 212.982 212.982"
                            width="11px"
                            height="11px"
                        // {...props}
                        >
                            <path
                                fill="#fec007"
                                d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            />
                        </svg>

                        <p>Consectetur adipisicing elit sed do eiusmod por incididunt uttelabore et dolore magna aliqu.</p>
                        <button onClick={trigger} className="clv_btn white_btn pop_signup">sign up</button>
                        <ul>
                            <li><a href="javascript:;"><span><FontAwesomeIcon icon={faFacebook} /></span></a></li>
                            <li><a href="javascript:;"><span><FontAwesomeIcon icon={faTwitter} /></span></a></li>
                            <li><a href="javascript:;"><span><FontAwesomeIcon icon={faLinkedin} /></span></a></li>
                            <li><a href="javascript:;"><span><FontAwesomeIcon icon={faYoutube} /></span></a></li>
                        </ul>
                    </div>
                    <div className="signup_form_section">
                        <h4>sign in account</h4>
                        <img src={process.env.PUBLIC_URL + "images/clv_underline.png"} alt="image" />
                        <div className="form_block">
                            <input
                                type="text"
                                name='email'
                                value={input.email}
                                className="form_field"
                                placeholder="Email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form_block">
                            <input
                                type="text"
                                name='password'
                                value={input.password}
                                className="form_field"
                                placeholder="Password"
                                onChange={handleChange} />
                        </div>
                        <button onClick={() => handleSubmit()} className="clv_btn">sign in</button>
                        <div className="social_button_section">
                            <a href="#" className="fb_btn">
                                <span><img src={process.env.PUBLIC_URL + "images/fb.png"} alt="image" /></span>
                                <span>facebook</span>
                            </a>
                            <a href="#" className="google_btn">
                                <span><img src={process.env.PUBLIC_URL + "images/google.png"} alt="image" /></span>
                                <span>google+</span>
                            </a>
                        </div>
                        <span className="success_close"
                            onClick={handleClose}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 212.982 212.982"
                                width="11px"
                                height="11px"
                            // {...props}
                            >
                                <path
                                    fill="#fec007"
                                    d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin
