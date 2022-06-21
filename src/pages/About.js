import React from 'react';
import { Link } from 'react-router-dom';
import Tabtitle from './Tabtitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Counterabout from '../components/about/Counterabout';
const About = () => {
    Tabtitle('FAB | About us')
    return (
        <>
            {/* <!--Breadcrumb--> */}
            <div className="breadcrumb_wrapper" style={{ minHeight: '250px' }}>
                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="breadcrumb_inner">
                                <h3>about us</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb_block">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li>about us</li>
                    </ul>
                </div>
            </div>
            {/* <!--About Section--> */}
            <div className="clv_about_wrapper clv_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about_img">
                                <img src="images/hands-g0eecfe8b7_640.jpg" alt="image" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_content">
                                <div className="about_heading">
                                    <h2>Welcome to Our <span>Poultry Farm</span></h2>
                                    <h6>Lorem Ipsum is simply dummy text of the printing</h6>
                                    <div className="clv_underline"><img src="images/underline.png" alt="image" /></div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatiomco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fuiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offi deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error  eivoluptatem accusantium doloremque laudantium.</p>
                                <div className="video_block">
                                    <div className="video_btn">
                                        <a href="https://www.youtube.com/watch?v=tqwRLdBsFw8" className="play_video"><span className="pulse"><FontAwesomeIcon icon={faPlay} /></span> watch video</a>
                                    </div>
                                    <a href="#" className="clv_btn">read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Testimonial--> */}
            <div className="clv_testimonial_wrapper clv_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="clv_heading white_heading">
                                <h3>what people say about us</h3>
                                <div className="clv_underline"><img src="images/underline2.png" alt="image" /></div>
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="testimonial_slider">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="testimonial_slide">
                                                <span className="rounded_quote"><img src="images/quote.png" alt="image" /></span>
                                                <span className="bg_quote"><img src="images/bg_quote.png" alt="image" /></span>
                                                <div className="client_img">
                                                    <img src="https://via.placeholder.com/150x160" alt="image" />
                                                </div>
                                                <div className="client_message">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ilabore et dadhjiolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi liquip ex ea commodoersio consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugt nulla pariatuaerniri Excepteur sint occaecat cupidatat non proident.</p>
                                                    <h3>Halil Alex <span> Agriculture Expert</span></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial_slide">
                                                <span className="rounded_quote"><img src="images/quote.png" alt="image" /></span>
                                                <span className="bg_quote"><img src="images/bg_quote.png" alt="image" /></span>
                                                <div className="client_img">
                                                    <img src="https://via.placeholder.com/150x160" alt="image" />
                                                </div>
                                                <div className="client_message">
                                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi liquip ex ea commodoersio consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugt nulla pariatuaerniri Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ilabore et dadhjiolore magna aliqua.</p>
                                                    <h3>john paradox <span> Agriculture Expert</span></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Add Arrows --> */}
                                    <span className="slider_arrow testimonial_left left_arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></span>
                                    <span className="slider_arrow testimonial_right right_arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About