import React from 'react'

const Testimonial = () => {
    return (
        <div className="garden_testimonial_wrapper clv_section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="clv_heading white_heading">
                            <h3>customer feedback</h3>
                            <div className="clv_underline"><img src="images/underline2.png" alt="image" /></div>
                            <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="garden_testimonial_slider">
                            <div className="thumb_slider">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="thumb_slide">
                                                <span><img src="images/home/per1.jpg" alt="image" /></span>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="thumb_slide">
                                                <span><img src="images/home/per1.jpg" alt="image" /></span>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="thumb_slide">
                                                <span><img src="images/home/per1.jpg" alt="image" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Add Arrows --> */}
                                <div className="test_arrow test_left_arrow">
                                    <span className="arrow">
                                        <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 129 129"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            enableBackground="new 0 0 129 129"
                                            width="20px"
                                            height="20px"
                                        >
                                            <g>
                                                <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" />
                                            </g>
                                        </svg>

                                    </span>
                                    <span className="hover_arrow">
                                        <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 31.494 31.494"
                                            style={{ enableBackground: "new 0 0 31.494 31.494" }}
                                            xmlSpace="preserve"
                                            width="20px"
                                            height="20px"
                                        >
                                            <path
                                                style={{ fill: "#2a7d2e" }}
                                                d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
                            c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
                            c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className="test_arrow test_right_arrow">
                                    <span className="arrow">

                                        <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 129 129"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            enableBackground="new 0 0 129 129"
                                            width="20px"
                                            height="20px"
                                        >
                                            <g>
                                                <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
                                            </g>
                                        </svg>

                                    </span>
                                    <span className="hover_arrow">
                                        <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 31.49 31.49"
                                            style={{ enableBackground: "new 0 0 31.49 31.49" }}
                                            xmlSpace="preserve"
                                            width="20px"
                                            height="20px"
                                        >
                                            <path
                                                style={{ fill: "#2a7d2e" }}
                                                d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
                            C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
                            c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
                                            />
                                        </svg>

                                    </span>
                                </div>
                            </div>
                            <div className="message_slider">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="message_slide">
                                                <h3>Nosti D’coz</h3>
                                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.t</p>
                                                <span className="msg_quote left_quote"><img src="images/test_left_quote.png" alt="image" /></span>
                                                <span className="msg_quote right_quote"><img src="images/test_right_quote.png" alt="image" /></span>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="message_slide">
                                                <h3>Nosti D’coz</h3>
                                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.t</p>
                                                <span className="msg_quote left_quote"><img src="images/test_left_quote.png" alt="image" /></span>
                                                <span className="msg_quote right_quote"><img src="images/test_right_quote.png" alt="image" /></span>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="message_slide">
                                                <h3>Nosti D’coz</h3>
                                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.t</p>
                                                <span className="msg_quote left_quote"><img src="images/test_left_quote.png" alt="image" /></span>
                                                <span className="msg_quote right_quote"><img src="images/test_right_quote.png" alt="image" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial