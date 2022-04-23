import React from 'react';
import { Link } from 'react-router-dom';
import Tabtitle from './Tabtitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const About = () => {
    Tabtitle('FAB | About us')
    return (
        <>
            {/* <!--Breadcrumb--> */}
            <div className="breadcrumb_wrapper" style={{ minHeight: '250px' }}>
                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
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
                                <img src="https://via.placeholder.com/570x510" alt="image" />
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
            {/* <!--Counter Section--> */}
            <div className="clv_counter_wrapper clv_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="clv_heading white_heading">
                                <h3>we are an expert in this field</h3>
                                <div className="clv_underline"><img src="images/underline2.png" alt="image" /></div>
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="counter_section">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="counter_block">
                                    <div className="counter_img">
                                        <span className="red_bg"><img src="images/counter_customer.png" alt="image" className="img-fluid" /></span>
                                    </div>
                                    <div className="counter_text">
                                        <h4><span className="count_no" data-to="26" data-speed="3000">26</span><span>k+</span></h4>
                                        <h5>happy customers</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="counter_block">
                                    <div className="counter_img">
                                        <span className="yellow_bg"><img src="images/counter_project.png" alt="image" className="img-fluid" /></span>
                                    </div>
                                    <div className="counter_text">
                                        <h4><span className="count_no" data-to="700" data-speed="3000">700</span><span>+</span></h4>
                                        <h5>project complete</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="counter_block">
                                    <div className="counter_img">
                                        <span className="orange_bg"><img src="images/counter_branch.png" alt="image" className="img-fluid" /></span>
                                    </div>
                                    <div className="counter_text">
                                        <h4><span className="count_no" data-to="200" data-speed="3000">200</span><span>+</span></h4>
                                        <h5>world wide branch</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="counter_block">
                                    <div className="counter_img">
                                        <span className="blue_bg"><img src="images/counter_winner.png" alt="image" className="img-fluid" /></span>
                                    </div>
                                    <div className="counter_text">
                                        <h4><span className="count_no" data-to="6" data-speed="3000">6</span><span>k+</span></h4>
                                        <h5>award winner</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--About Agriculture--> */}
            <div className="clv_about_product clv_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div className="about_product_contect">
                                <h2>We Provide<br />High-quality organic products</h2>
                                <h6>Sed do eiusmod tempor incididunt ut labore et dolore magnaliqua Ut enim ad minim veniam ullamco </h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod temponcididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatiomco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quaiitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sitrnatur aut odit aut fugit, sed quia consequuntur magni .</p>
                                <div className="about_product_contact">
                                    <h4>Friendly And Dedicated Support Every Steps On The Way</h4>
                                    <h3>(+61) 1080-1247-1247</h3>
                                    <span>
                                        {/* <?xml version="1.0" encoding="iso-8859-1"?> */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            x="0"
                                            y="0"
                                            enableBackground="new 0 0 480.56 480.56"
                                            viewBox="0 0 480.56 480.56"
                                        >
                                            <g fill="#fff">
                                                <path d="M365.354 317.9c-15.7-15.5-35.3-15.5-50.9 0-11.9 11.8-23.8 23.6-35.5 35.6-3.2 3.3-5.9 4-9.8 1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3 1.8-9.4 11.9-11.5 23.5-23.3 35.2-35.1 16.3-16.4 16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12 11.8-23.5 23.9-35.7 35.5-11.3 10.7-17 23.8-18.2 39.1-1.9 24.9 4.2 48.4 12.8 71.3 17.6 47.4 44.4 89.5 76.9 128.1 43.9 52.2 96.3 93.5 157.6 123.3 27.6 13.4 56.2 23.7 87.3 25.4 21.4 1.2 40-4.2 54.9-20.9 10.2-11.4 21.7-21.8 32.5-32.7 16-16.2 16.1-35.8.2-51.8-19-19.1-38.1-38.1-57.2-57.1zM346.254 238.2l36.9-6.3c-5.8-33.9-21.8-64.6-46.1-89-25.7-25.7-58.2-41.9-94-46.9l-5.2 37.1c27.7 3.9 52.9 16.4 72.8 36.3 18.8 18.8 31.1 42.6 35.6 68.8zM403.954 77.8c-42.6-42.6-96.5-69.5-156-77.8l-5.2 37.1c51.4 7.2 98 30.5 134.8 67.2 34.9 34.9 57.8 79 66.1 127.5l36.9-6.3c-9.7-56.2-36.2-107.2-76.6-147.7z"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="about_product_image">
                                <img src="https://via.placeholder.com/530x570" alt="image" />
                                <div className="play_btn_block">
                                    <a href="https://www.youtube.com/watch?v=tqwRLdBsFw8" className="play_video">
                                        <span className="agri_play_icon">
                                            {/* <?xml version="1.0" encoding="iso-8859-1"?> */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="30"
                                                x="0"
                                                y="0"
                                                enableBackground="new 0 0 191.255 191.255"
                                                viewBox="0 0 191.255 191.255"
                                            >
                                                <path
                                                    fill="#eab318"
                                                    d="M162.929 66.612a6 6 0 10-6.35 10.183c6.544 4.081 10.45 11.121 10.45 18.833s-3.906 14.752-10.45 18.833l-98.417 61.365c-6.943 4.329-15.359 4.542-22.512.573-7.154-3.97-11.425-11.225-11.425-19.406V34.262c0-8.181 4.271-15.436 11.425-19.406 7.153-3.969 15.569-3.756 22.512.573l57.292 35.723a6 6 0 106.35-10.183L64.512 5.247c-10.696-6.669-23.661-7-34.685-.883-11.021 6.116-17.601 17.293-17.601 29.898v122.73c0 12.605 6.58 23.782 17.602 29.898 5.25 2.913 10.939 4.364 16.616 4.364 6.241 0 12.467-1.754 18.068-5.247l98.417-61.365c10.082-6.287 16.101-17.133 16.101-29.015s-6.019-22.728-16.101-29.015z"
                                                ></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Services--> */}
            <div className="clv_service_wrapper clv_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="clv_heading">
                                <h3>Discover Services We Provided</h3>
                                <div className="clv_underline"><img src="images/garden_underline.png" alt="image" /></div>
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="service_main_wrapper">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="service_block">
                                            <span></span>
                                            <div className="service_icon"><img src="images/event_service.png" alt="image" /></div>
                                            <h4>education & events</h4>
                                            <div className="clv_underline"><img src="images/service_underline.png" alt="image" /></div>
                                            <p>Dolor sit amet consectetur adipiscing elieri sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service_block">
                                            <span></span>
                                            <div className="service_icon"><img src="images/egg_service.png" alt="image" /></div>
                                            <h4>organic eggs</h4>
                                            <div className="clv_underline"><img src="images/service_underline.png" alt="image" /></div>
                                            <p>Dolor sit amet consectetur adipiscing elieri sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service_block">
                                            <span></span>
                                            <div className="service_icon"><img src="images/farm_service.png" alt="image" /></div>
                                            <h4>our farms</h4>
                                            <div className="clv_underline"><img src="images/service_underline.png" alt="image" /></div>
                                            <p>Dolor sit amet consectetur adipiscing elieri sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service_block">
                                            <span></span>
                                            <div className="service_icon"><img src="images/hens_service.png" alt="image" /></div>
                                            <h4>the best hens</h4>
                                            <div className="clv_underline"><img src="images/service_underline.png" alt="image" /></div>
                                            <p>Dolor sit amet consectetur adipiscing elieri sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="service_girl_img">
                                    <img src="https://via.placeholder.com/642x852" alt="image" />
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
            {/* <!--Team--> */}
            <div className="clv_team_wrapper clv_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="clv_heading">
                                <h3>our team</h3>
                                <div className="clv_underline"><img src="images/garden_underline.png" alt="image" /></div>
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="team_section">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="team_block">
                                            <div className="team_image">
                                                <img src="https://via.placeholder.com/270x304" alt="image" />
                                                <div className="social_overlay">
                                                    <p>you can join us</p>
                                                    <ul>
                                                        <li><a href="#"><span><i className="fa fa-facebook" aria-hidden="true"></i></span></a></li>
                                                        <li><a href="#"><span><i className="fa fa-twitter" aria-hidden="true"></i></span></a></li>
                                                        <li><a href="#"><span><i className="fa fa-linkedin" aria-hidden="true"></i></span></a></li>
                                                        <li><a href="#"><span><i className="fa fa-youtube-play" aria-hidden="true"></i></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team_details">
                                                <div className="team_name">
                                                    <h3>Rouis r. weons</h3>
                                                    <p>Poultry Farmers</p>
                                                    <span className="divider"></span>
                                                    <a href="#">yourmail@example.com</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="team_block">
                                            <div className="team_image">
                                                <img src="https://via.placeholder.com/270x304" alt="image" />
                                                <div className="social_overlay">
                                                    <p>you can join us</p>
                                                    <ul>
                                                        <li><a href="#"><span><i className="fa fa-facebook" aria-hidden="true"></i></span></a></li>
                                                        <li><a href="#"><span><i className="fa fa-twitter" aria-hidden="true"></i></span></a></li>
                                                        <li><a href="#"><span><i className="fa fa-linkedin" aria-hidden="true"></i></span></a></li>
                                                        <li><a href="#"><span><i className="fa fa-youtube-play" aria-hidden="true"></i></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team_details">
                                                <div className="team_name">
                                                    <h3>Rouis r. weons</h3>
                                                    <p>Poultry Farmers</p>
                                                    <span className="divider"></span>
                                                    <a href="#">yourmail@example.com</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="team_block">
                                            <div className="team_image">
                                                <img src="https://via.placeholder.com/270x304" alt="image" />
                                                <div className="social_overlay">
                                                    <p>you can join us</p>
                                                    <ul>
                                                        <li><a href="#"><span><i className="fa fa-facebook" aria-hidden="true"></i></span></a></li>
                                                        <li><a href="#"><span><i className="fa fa-twitter" aria-hidden="true"></i></span></a></li>
                                                        <li><a href="#"><span><i className="fa fa-linkedin" aria-hidden="true"></i></span></a></li>
                                                        <li><a href="#"><span><i className="fa fa-youtube-play" aria-hidden="true"></i></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team_details">
                                                <div className="team_name">
                                                    <h3>Rouis r. weons</h3>
                                                    <p>Poultry Farmers</p>
                                                    <span className="divider"></span>
                                                    <a href="#">yourmail@example.com</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="team_block">
                                            <div className="team_image">
                                                <img src="https://via.placeholder.com/270x304" alt="image" />
                                                <div className="social_overlay">
                                                    <p>you can join us</p>
                                                    <ul>
                                                        <li><a href="#"><span><i className="fa fa-facebook" aria-hidden="true"></i></span></a></li>
                                                        <li><a href="#"><span><i className="fa fa-twitter" aria-hidden="true"></i></span></a></li>
                                                        <li><a href="#"><span><i className="fa fa-linkedin" aria-hidden="true"></i></span></a></li>
                                                        <li><a href="#"><span><i className="fa fa-youtube-play" aria-hidden="true"></i></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team_details">
                                                <div className="team_name">
                                                    <h3>Rouis r. weons</h3>
                                                    <p>Poultry Farmers</p>
                                                    <span className="divider"></span>
                                                    <a href="#">yourmail@example.com</a>
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
        </>
    )
}

export default About