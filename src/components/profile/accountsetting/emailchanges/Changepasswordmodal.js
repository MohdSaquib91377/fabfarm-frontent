import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
const Changepasswordmodal = ({ changeState, setChangeState }) => {
    const [viewPassword, setViewPassword] = useState(false)

    return (
        <div className={changeState ? 'signin_wrapper open_signin' : 'signin_wrapper'}>
            <div className="signup_inner">
                <div className="signup_details">
                    <div className="site_logo">
                        <a href="index.html"> <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="change-passwordimage" /></a>
                    </div>
                    <h3>welcome to cultivation!</h3>
                    <p>Consectetur adipisicing elit sed do eiusmod por incididunt uttelabore et dolore magna aliqu.</p>

                </div>
                <div className="account-details">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-box__single-group">
                                <h5 className="title">Password change</h5>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-box__single-group">
                                <input type="password" placeholder="Current Password" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-box__single-group">
                                <input type="password" placeholder="New Password" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-box__single-group" style={{
                                position: 'relative'
                            }}>
                                <input type={viewPassword ? 'text' : 'password'} placeholder="Confirm Password" />
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px'
                                    }}><FontAwesomeIcon
                                        icon={viewPassword ? faEyeSlash : faEye}
                                        onMouseDown={() => setViewPassword(true)}
                                        onMouseUp={() => setViewPassword(false)}
                                    /></span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-box__single-group">
                                <button className="btn btn--box btn--radius btn--small btn--black btn--black-hover-green btn--uppercase font--bold">Save Change</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="close"
                onClick={() => setChangeState()}
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
                        fill="#1f2f22"
                        d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />
                </svg>
            </span>
        </div>
    )
}

export default Changepasswordmodal