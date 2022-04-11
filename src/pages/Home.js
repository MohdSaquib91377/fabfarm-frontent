import React from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
const Home = () => {
    return (
        <>
            <div className="clv_banner_slider">
                {/* <!-- Swiper --> */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="clv_slide">
                                <div className="container">
                                    <div className="clv_slide_inner">
                                        <h1>WELCOME TO</h1>
                                        <h2>Farmers Allaince For Business</h2>
                                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br />nostrud exercitation ullamco laboris nisi ut aliquipea commodand.</p>
                                        <div className="banner_btn">
                                            <span className="left_line"></span>
                                            <a href="#" className="clv_btn">Shop Now</a>
                                            <span className="right_line"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="clv_slide slide2">
                                <div className="container">
                                    <div className="clv_slide_inner">
                                        <h1>Extend Your Home</h1>
                                        <h2>With a Beautiful Garden</h2>
                                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br />nostrud exercitation ullamco laboris nisi ut aliquipea commodand.</p>
                                        <div className="banner_btn">
                                            <span className="left_line"></span>
                                            <a href="#" className="clv_btn">discover more</a>
                                            <span className="right_line"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Add Arrows --> */}
                    <span className="slider_arrow banner_left left_arrow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="10px"
                            height="20px"
                        >
                            <path
                                fillRule="evenodd"
                                fill="rgb(255, 255, 255)"
                                d="M0.272,10.703 L8.434,19.703 C8.792,20.095 9.372,20.095 9.731,19.703 C10.089,19.308 10.089,18.668 9.731,18.274 L2.217,9.990 L9.730,1.706 C10.089,1.310 10.089,0.672 9.730,0.277 C9.372,-0.118 8.791,-0.118 8.433,0.277 L0.271,9.274 C-0.082,9.666 -0.082,10.315 0.272,10.703 Z"
                            />
                        </svg>
                    </span>

                    <span className="slider_arrow banner_right right_arrow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="10px"
                            height="20px"
                        >
                            <path
                                fillRule="evenodd"
                                fill="rgb(255, 255, 255)"
                                d="M9.728,10.703 L1.566,19.703 C1.208,20.095 0.627,20.095 0.268,19.703 C-0.090,19.308 -0.090,18.668 0.268,18.274 L7.783,9.990 L0.269,1.706 C-0.089,1.310 -0.089,0.672 0.269,0.277 C0.627,-0.118 1.209,-0.118 1.567,0.277 L9.729,9.274 C10.081,9.666 10.081,10.315 9.728,10.703 Z"
                            />
                        </svg>

                    </span>
                </div>
            </div>
            <div className="garden_about_wrapper clv_section">
                <div className="container">
                    {/* <!--Service--> */}
                    <div className="garden_service_wrapper">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="garden_service_block">
                                    <div className="service_image">
                                        <span><img src={process.env.PUBLIC_URL + "images/garden_service1.png"} alt="" /></span>
                                    </div>
                                    <h3>Seeds</h3>
                                    <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">

                                <div className="garden_service_block">
                                    <div className="service_image">
                                        <span><img src={process.env.PUBLIC_URL + "images/garden_service1.png"} alt="" /></span>
                                    </div>
                                    <h3>Fertilizers</h3>
                                    <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="garden_service_block">
                                    <div className="service_image">
                                        <span><img src={process.env.PUBLIC_URL + "images/garden_service2.png"} alt="" /></span>
                                    </div>
                                    <h3>Soil Testing</h3>
                                    <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="garden_service_block">
                                    <div className="service_image">
                                        <span><img src={process.env.PUBLIC_URL + "images/garden_service3.png"} alt="" /></span>
                                    </div>
                                    <h3>Types Of Soil</h3>
                                    <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="garden_about_section">
                        <div className="row">
                            <div className="col-ld-6 col-md-6">
                                <div className="garden_about_image">
                                    <img src={process.env.PUBLIC_URL + "images//home/seed.jpg"} alt="" />
                                </div>
                            </div>
                            <div className="col-ld-6 col-md-6">
                                <div className="garden_about_content">
                                    <h2>We Are Nice People With A <br />Lot Of Experience.</h2>
                                    <h6>Farming is not just for growing crops, it is for the cultivation of human beings !!!</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod temponcididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatiomco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendeerit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                                    <div className="garden_contact_section">
                                        <a href="#" className="clv_btn">more details</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Counter Section--> */}
            <div class="clv_counter_wrapper clv_section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-6">
                            <div class="clv_heading white_heading">
                                <h3>we are an expert in this field</h3>
                                <div class="clv_underline"><img src="images/underline2.png" alt="image" /></div>
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="counter_section">
                        <div class="row">
                            <div class="col-lg-3 col-md-3">
                                <div class="counter_block">
                                    <div class="counter_img">
                                        <span class="red_bg"><img src="images/counter_customer.png" alt="image" class="img-fluid" /></span>
                                    </div>
                                    <div class="counter_text">
                                        <h4><span class="count_no" data-to="26" data-speed="3000">26</span><span>k+</span></h4>
                                        <h5>happy customers</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <div class="counter_block">
                                    <div class="counter_img">
                                        <span class="yellow_bg"><img src="images/counter_project.png" alt="image" class="img-fluid" /></span>
                                    </div>
                                    <div class="counter_text">
                                        <h4><span class="count_no" data-to="700" data-speed="3000">700</span><span>+</span></h4>
                                        <h5>Seeds Types</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <div class="counter_block">
                                    <div class="counter_img">
                                        <span class="orange_bg"><img src="images/counter_branch.png" alt="image" class="img-fluid" /></span>
                                    </div>
                                    <div class="counter_text">
                                        <h4><span class="count_no" data-to="200" data-speed="3000">200</span><span>+</span></h4>
                                        <h5>Soil Types</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <div class="counter_block">
                                    <div class="counter_img">
                                        <span class="blue_bg"><img src="images/counter_winner.png" alt="image" class="img-fluid" /></span>
                                    </div>
                                    <div class="counter_text">
                                        <h4><span class="count_no" data-to="6" data-speed="3000">6</span><span>k+</span></h4>
                                        <h5>award winner</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="garden_service_about_wrapper clv_section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="service_about_content">
                                <h1>The Best Lawn Moving <br /><span>& Gardening Service</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempoicididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderiit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <h5>We provide service since 25 years and we are still top landscape company</h5>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptateantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="service_about_image">
                                <img src="images/home/field.jpg" alt="image" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Testimonial--> */}
            <div class="garden_testimonial_wrapper clv_section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-6">
                            <div class="clv_heading white_heading">
                                <h3>customer feedback</h3>
                                <div class="clv_underline"><img src="images/underline2.png" alt="image" /></div>
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="garden_testimonial_slider">
                                <div class="thumb_slider">
                                    <div class="swiper-container">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="thumb_slide">
                                                    <span><img src="images/home/per1.jpg" alt="image" /></span>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="thumb_slide">
                                                    <span><img src="images/home/per1.jpg" alt="image" /></span>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="thumb_slide">
                                                    <span><img src="images/home/per1.jpg" alt="image" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Add Arrows --> */}
                                    <div class="test_arrow test_left_arrow">
                                        <span class="arrow">
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
                                        <span class="hover_arrow">
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
                                    <div class="test_arrow test_right_arrow">
                                        <span class="arrow">

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
                                        <span class="hover_arrow">
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
                                <div class="message_slider">
                                    <div class="swiper-container">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="message_slide">
                                                    <h3>Nosti D’coz</h3>
                                                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.t</p>
                                                    <span class="msg_quote left_quote"><img src="images/test_left_quote.png" alt="image" /></span>
                                                    <span class="msg_quote right_quote"><img src="images/test_right_quote.png" alt="image" /></span>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="message_slide">
                                                    <h3>Nosti D’coz</h3>
                                                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.t</p>
                                                    <span class="msg_quote left_quote"><img src="images/test_left_quote.png" alt="image" /></span>
                                                    <span class="msg_quote right_quote"><img src="images/test_right_quote.png" alt="image" /></span>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="message_slide">
                                                    <h3>Nosti D’coz</h3>
                                                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.t</p>
                                                    <span class="msg_quote left_quote"><img src="images/test_left_quote.png" alt="image" /></span>
                                                    <span class="msg_quote right_quote"><img src="images/test_right_quote.png" alt="image" /></span>
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
            {/* <!--Service 2--> */}
            <div class="garden_service2_wrapper clv_section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-6">
                            <div class="clv_heading">
                                <h3>discover services we provided</h3>
                                <div class="clv_underline"><img src="images/garden_underline.png" alt="image" /></div>
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="garden_service2_section">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="service2_block">
                                    <div class="service2_image"><img src="images/garden_service4.png" alt="image" /></div>
                                    <div class="service2_content">
                                        <h3>Hedge Cutting</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="service2_block">
                                    <div class="service2_image"><img src="images/garden_service5.png" alt="image" /></div>
                                    <div class="service2_content">
                                        <h3>Garden Clean Up</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="service2_block">
                                    <div class="service2_image"><img src="images/garden_service6.png" alt="image" /></div>
                                    <div class="service2_content">
                                        <h3>Watering</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="service2_block">
                                    <div class="service2_image"><img src="images/garden_service7.png" alt="image" /></div>
                                    <div class="service2_content">
                                        <h3>Snow & Ice Removal</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="service2_block">
                                    <div class="service2_image"><img src="images/garden_service8.png" alt="image" /></div>
                                    <div class="service2_content">
                                        <h3>Tree Planting</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="service2_block">
                                    <div class="service2_image"><img src="images/garden_service9.png" alt="image" /></div>
                                    <div class="service2_content">
                                        <h3>Rush Removal</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!--Shop--> */}
            <div class="garden_shop_wrapper clv_section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-6">
                            <div class="clv_heading">
                                <h3>our shop</h3>
                                <div class="clv_underline"><img src="images/garden_underline.png" alt="image" /></div>
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="garden_shop_slider">
                                <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="garden_shop_slide">
                                                <div class="item_image">
                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" class="img-fluid" />
                                                </div>
                                                <div class="item_details">
                                                    <div class="item_name">
                                                        <h5>Spinach Seeds / Palak Seeds</h5>
                                                    </div>
                                                    <h6><span><i class="fa fa-usd" aria-hidden="true"></i></span>25</h6>
                                                </div>
                                                <span class="label">30% off</span>
                                                <input type="checkbox" id="wishlist_1" />
                                                <label for="wishlist_1">
                                                    <span class="wish_icon"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                                    <span class="wish_icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="garden_shop_slide">
                                                <div class="item_image">
                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" class="img-fluid" />

                                                </div>
                                                <div class="item_details">
                                                    <div class="item_name">
                                                        <h5>Capsicum Green Vegetable seeds</h5>
                                                    </div>
                                                    <h6><span><i class="fa fa-usd" aria-hidden="true"></i></span>25</h6>
                                                </div>
                                                <span class="label">30% off</span>
                                                <input type="checkbox" id="wishlist_2" />
                                                <label for="wishlist_2">
                                                    <span class="wish_icon"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                                    <span class="wish_icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="garden_shop_slide">
                                                <div class="item_image">
                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" class="img-fluid" />

                                                </div>
                                                <div class="item_details">
                                                    <div class="item_name">
                                                        <h5>Capsicum Green Vegetable seeds</h5>
                                                    </div>
                                                    <h6><span><i class="fa fa-usd" aria-hidden="true"></i></span>25</h6>
                                                </div>
                                                <span class="label">30% off</span>
                                                <input type="checkbox" id="wishlist_3" />
                                                <label for="wishlist_3">
                                                    <span class="wish_icon"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                                    <span class="wish_icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="garden_shop_slide">
                                                <div class="item_image">
                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" class="img-fluid" />

                                                </div>
                                                <div class="item_details">
                                                    <div class="item_name">
                                                        <h5>Capsicum Green Vegetable seeds</h5>
                                                    </div>
                                                    <h6><span><i class="fa fa-usd" aria-hidden="true"></i></span>25</h6>
                                                </div>
                                                <span class="label">30% off</span>
                                                <input type="checkbox" id="wishlist_4" />
                                                <label for="wishlist_4">
                                                    <span class="wish_icon"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                                    <span class="wish_icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="garden_shop_slide">
                                                <div class="item_image">
                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" class="img-fluid" />
                                                </div>
                                                <div class="item_details">
                                                    <div class="item_name">
                                                        <h5>Capsicum Green Vegetable seeds</h5>
                                                    </div>
                                                    <h6><span><i class="fa fa-usd" aria-hidden="true"></i></span>25</h6>
                                                </div>
                                                <span class="label">30% off</span>
                                                <input type="checkbox" id="wishlist_5" />
                                                <label for="wishlist_5">
                                                    <span class="wish_icon"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                                    <span class="wish_icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!--Shop--> */}
            <div class="garden_shop_wrapper clv_section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-6">
                            <div class="clv_heading">
                                <h3>Soils</h3>
                                <div class="clv_underline"><img src="images/garden_underline.png" alt="image" /></div>
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="garden_shop_slider">
                                <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="garden_shop_slide">
                                                <div class="item_image">
                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" class="img-fluid" />
                                                </div>
                                                <div class="item_details">
                                                    <div class="item_name">
                                                        <h5>Soil</h5>
                                                    </div>
                                                    <h6><span><i class="fa fa-usd" aria-hidden="true"></i></span>25</h6>
                                                </div>
                                                <span class="label">30% off</span>
                                                <input type="checkbox" id="wishlist_1" />
                                                <label for="wishlist_1">
                                                    <span class="wish_icon"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                                    <span class="wish_icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="garden_shop_slide">
                                                <div class="item_image">
                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" class="img-fluid" />

                                                </div>
                                                <div class="item_details">
                                                    <div class="item_name">
                                                        <h5>Soil</h5>
                                                    </div>
                                                    <h6><span><i class="fa fa-usd" aria-hidden="true"></i></span>25</h6>
                                                </div>
                                                <span class="label">30% off</span>
                                                <input type="checkbox" id="wishlist_2" />
                                                <label for="wishlist_2">
                                                    <span class="wish_icon"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                                    <span class="wish_icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="garden_shop_slide">
                                                <div class="item_image">
                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" class="img-fluid" />

                                                </div>
                                                <div class="item_details">
                                                    <div class="item_name">
                                                        <h5>Soil</h5>
                                                    </div>
                                                    <h6><span><i class="fa fa-usd" aria-hidden="true"></i></span>25</h6>
                                                </div>
                                                <span class="label">30% off</span>
                                                <input type="checkbox" id="wishlist_3" />
                                                <label for="wishlist_3">
                                                    <span class="wish_icon"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                                    <span class="wish_icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="garden_shop_slide">
                                                <div class="item_image">
                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" class="img-fluid" />
                                                </div>
                                                <div class="item_details">
                                                    <div class="item_name">
                                                        <h5>Soil</h5>
                                                    </div>
                                                    <h6><span><i class="fa fa-usd" aria-hidden="true"></i></span>25</h6>
                                                </div>
                                                <span class="label">30% off</span>
                                                <input type="checkbox" id="wishlist_4" />
                                                <label for="wishlist_4">
                                                    <span class="wish_icon"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                                    <span class="wish_icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="garden_shop_slide">
                                                <div class="item_image">
                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" class="img-fluid" />
                                                </div>
                                                <div class="item_details">
                                                    <div class="item_name">
                                                        <h5>Soil</h5>
                                                    </div>
                                                    <h6><span><i class="fa fa-usd" aria-hidden="true"></i></span>25</h6>
                                                </div>
                                                <span class="label">30% off</span>
                                                <input type="checkbox" id="wishlist_5" />
                                                <label for="wishlist_5">
                                                    <span class="wish_icon"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                                    <span class="wish_icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--Seeds--> */}
            <div class="garden_shop_wrapper clv_section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-6">
                            <div class="clv_heading">
                                <h3>Seeds</h3>
                                <div class="clv_underline"><img src="images/garden_underline.png" alt="image" /></div>
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="garden_shop_slider">
                                <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="garden_shop_slide">
                                                <div class="item_image">
                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" class="img-fluid" />
                                                </div>
                                                <div class="item_details">
                                                    <div class="item_name">
                                                        <h5>Seeds</h5>
                                                    </div>
                                                    <h6><span><i class="fa fa-usd" aria-hidden="true"></i></span>25</h6>
                                                </div>
                                                <span class="label">30% off</span>
                                                <input type="checkbox" id="wishlist_1" />
                                                <label for="wishlist_1">
                                                    <span class="wish_icon"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                                    <span class="wish_icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="garden_shop_slide">
                                                <div class="item_image">
                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" class="img-fluid" />

                                                </div>
                                                <div class="item_details">
                                                    <div class="item_name">
                                                        <h5>Seeds</h5>
                                                    </div>
                                                    <h6><span><i class="fa fa-usd" aria-hidden="true"></i></span>25</h6>
                                                </div>
                                                <span class="label">30% off</span>
                                                <input type="checkbox" id="wishlist_2" />
                                                <label for="wishlist_2">
                                                    <span class="wish_icon"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                                    <span class="wish_icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="garden_shop_slide">
                                                <div class="item_image">
                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" class="img-fluid" />
                                                </div>
                                                <div class="item_details">
                                                    <div class="item_name">
                                                        <h5>Seeds</h5>
                                                    </div>
                                                    <h6><span><i class="fa fa-usd" aria-hidden="true"></i></span>25</h6>
                                                </div>
                                                <span class="label">30% off</span>
                                                <input type="checkbox" id="wishlist_1" />
                                                <label for="wishlist_1">
                                                    <span class="wish_icon"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                                    <span class="wish_icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="garden_shop_slide">
                                                <div class="item_image">
                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" class="img-fluid" />

                                                </div>
                                                <div class="item_details">
                                                    <div class="item_name">
                                                        <h5>Seeds</h5>
                                                    </div>
                                                    <h6><span><i class="fa fa-usd" aria-hidden="true"></i></span>25</h6>
                                                </div>
                                                <span class="label">30% off</span>
                                                <input type="checkbox" id="wishlist_2" />
                                                <label for="wishlist_2">
                                                    <span class="wish_icon"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                                    <span class="wish_icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="garden_shop_slide">
                                                <div class="item_image">
                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" class="img-fluid" />
                                                </div>
                                                <div class="item_details">
                                                    <div class="item_name">
                                                        <h5>Seeds</h5>
                                                    </div>
                                                    <h6><span><i class="fa fa-usd" aria-hidden="true"></i></span>25</h6>
                                                </div>
                                                <span class="label">30% off</span>
                                                <input type="checkbox" id="wishlist_1" />
                                                <label for="wishlist_1">
                                                    <span class="wish_icon"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                                    <span class="wish_icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="garden_shop_slide">
                                                <div class="item_image">
                                                    <img src="images/home/pumpkin-seeds.jpg" alt="image" class="img-fluid" />

                                                </div>
                                                <div class="item_details">
                                                    <div class="item_name">
                                                        <h5>Seeds</h5>
                                                    </div>
                                                    <h6><span><i class="fa fa-usd" aria-hidden="true"></i></span>25</h6>
                                                </div>
                                                <span class="label">30% off</span>
                                                <input type="checkbox" id="wishlist_2" />
                                                <label for="wishlist_2">
                                                    <span class="wish_icon"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                                    <span class="wish_icon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!--Partner--> */}
            <div class="clv_partner_wrapper clv_section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="partner_slider">
                                <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="partner_slide">
                                                <div class="partner_image">
                                                    <span>
                                                        <img src="images/home/brand1.jpg" alt="image" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="partner_slide">
                                                <div class="partner_image">
                                                    <span>
                                                        <img src="images/home/brand1.jpg" alt="image" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="partner_slide">
                                                <div class="partner_image" />
                                                <span>
                                                    <img src="images/ho/me/brand1.jpg" alt="image" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="partner_slide">
                                            <div class="partner_image">
                                                <span>
                                                    <img src="images/home/brand1.jpg" alt="image" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="partner_slide">
                                            <div class="partner_image">
                                                <span>
                                                    <img src="images/home/brand1.jpg" alt="image" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="partner_slide">
                                            <div class="partner_image">
                                                <span>
                                                    <img src="images/home/brand1.jpg" alt="image" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="partner_slide">
                                            <div class="partner_image">
                                                <span>
                                                    <img src="images/home/brand1.jpg" alt="image" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="partner_slide">
                                            <div class="partner_image">
                                                <span>
                                                    <img src="images/home/brand1.jpg" alt="image" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="partner_slide">
                                            <div class="partner_image">
                                                <span>
                                                    <img src="images/home/brand1.jpg" alt="image" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="partner_slide">
                                            <div class="partner_image">
                                                <span>
                                                    <img src="images/home/brand1.jpg" alt="image" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Add Arrows --> */}
                            <span class="slider_arrow partner_left left_arrow">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="10px"
                                    height="15px"
                                >
                                    <path
                                        fillRule="evenodd"
                                        fill="rgb(226, 226, 226)"
                                        d="M0.324,8.222 L7.117,14.685 C7.549,15.097 8.249,15.097 8.681,14.685 C9.113,14.273 9.113,13.608 8.681,13.197 L2.670,7.478 L8.681,1.760 C9.113,1.348 9.113,0.682 8.681,0.270 C8.249,-0.139 7.548,-0.139 7.116,0.270 L0.323,6.735 C0.107,6.940 -0.000,7.209 -0.000,7.478 C-0.000,7.747 0.108,8.017 0.324,8.222 Z"
                                    />
                                </svg>

                            </span>
                            <span class="slider_arrow partner_right right_arrow">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="19px"
                                    height="25px"
                                >
                                    <path
                                        fillRule="evenodd"
                                        fill="rgb(226, 226, 226)"
                                        d="M13.676,13.222 L6.883,19.685 C6.451,20.097 5.751,20.097 5.319,19.685 C4.887,19.273 4.887,18.608 5.319,18.197 L11.329,12.478 L5.319,6.760 C4.887,6.348 4.887,5.682 5.319,5.270 C5.751,4.861 6.451,4.861 6.884,5.270 L13.676,11.735 C13.892,11.940 14.000,12.209 14.000,12.478 C14.000,12.747 13.892,13.017 13.676,13.222 Z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <section className="container">
        //     <div className="banner">
        // <CarouselProvider
        //     naturalSlideWidth={100}
        //     naturalSlideHeight={50}
        //     totalSlides={2}
        //     interval={5000}
        //     isPlaying={true}
        // >
        //     <Slider                    >
        //         <Slide
        //             index={0}
        //         >
        //             <img src={process.env.PUBLIC_URL + "images/banner1.jpg"} alt="" />
        //             <span className="bannerBG"></span>

        //         </Slide>
        //         <Slide
        //             index={1}
        //         >
        //             <img src={process.env.PUBLIC_URL + "images/banner2.jpg"} alt="" />
        //             <span className="bannerBG"></span>
        //         </Slide>
        //     </Slider>
        // </CarouselProvider>
        //         <div className="inner">
        //             <div className="bannerArt">
        //                 <div className="insider">
        //                     <h2>WELCOME TO</h2>
        //                     <p>Farmers Allaince For Business</p>
        //                     <a href="#">SHOP NOW</a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="mainGrid1">
        //         <div className="inner">
        //             <div className="title">
        //                 <h1>
        //                     Farming is not just for growing crops, it is for the cultivation of human beings !!!
        //                 </h1>
        //             </div>
        //             <div className="insider">

        //                 <div className="col fig">
        //                     <img src={process.env.PUBLIC_URL + "images/corn-stalk-big.jpg"} alt="" />
        //                 </div>
        //                 <div className="col art">
        //                     <h4>What is Lorem Ipsum?</h4>
        //                     <p>“Lorem Ipsum is simply dummy text of,<span><br /></span> the printing and typesetting<span><br /></span>
        //                         industry. Lorem Ipsum <span><br /></span>
        //                         has been the industry's <span><br /></span>
        //                         standard dummy text”</p>
        //                     <div className="smallFig"><img src={process.env.PUBLIC_URL + "images/corn-stalk.png"} alt="" /></div>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>

        //     <div className="mainGrid2">
        //         <div className="inner">
        //             <div className="thumbBlog">
        //                 <img src={process.env.PUBLIC_URL + "images/sunflower.png"} alt="" />
        //                 <img src={process.env.PUBLIC_URL + "images/flax-seeds2.png"} alt="" />
        //                 <img src={process.env.PUBLIC_URL + "images/mustard.png"} alt="" />
        //                 <img src={process.env.PUBLIC_URL + "images/black-sesame.png"} alt="" />
        //             </div>

        //             <div className="button">
        //                 <a href="#">+ Shop all seeds</a>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="mainGrid3">
        //         <div className="inner">
        //             <div className="col bgArt">
        //                 <div className="pattern">
        //                     <h3>
        //                         What is <br />
        //                         <span>Lorem Ipsum?</span>
        //                     </h3>
        //                     <p>
        //                         “Lorem Ipsum is simply<span><br /></span>
        //                         dummy text of the printing<span><br /></span>
        //                         and typesetting <span><br /></span>
        //                         industry” .
        //                     </p>
        //                 </div>
        //                 <div className="seeds">
        //                     <img src={process.env.PUBLIC_URL + "images/flax-seeds.png"} alt="" />
        //                 </div>
        //                 <div className="butn">
        //                     <a href="#">Shop</a>
        //                 </div>
        //             </div>

        //             <div className="col art">
        //                 <h2>
        //                     What is Lorem Ipsum?
        //                 </h2>
        //                 <p>
        //                     “Lorem Ipsum is simply dummy text of <span><br /></span>
        //                     the printing and typesetting<span><br /></span>
        //                     industry. Lorem Ipsum <span><br /></span>
        //                     has been the industry's <span><br /></span>
        //                     standard dummy text”
        //                 </p>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="mainGrid4">
        //         <div className="inner">
        //             <div className="figArt">
        //                 <div className="col">
        //                     <div className="insider">
        //                         <img src={process.env.PUBLIC_URL + "images/typesOfSeeds.png"} alt="" />
        //                         <h4>Types Of Seeds</h4>
        //                     </div>
        //                 </div>

        //                 <div className="col">
        //                     <div className="insider">
        //                         <img src={process.env.PUBLIC_URL + "images/fertilizers.png"} alt="" />
        //                         <h4>Fertilizers</h4>
        //                     </div>
        //                 </div>

        //                 <div className="col">
        //                     <div className="insider">
        //                         <img src={process.env.PUBLIC_URL + "images/soilTesting.png"} alt="" />
        //                         <h4>Soil Testing</h4>
        //                         <img src={process.env.PUBLIC_URL + "images/flax-seeds.png"} alt="" />
        //                     </div>
        //                 </div>

        //                 <div className="col">
        //                     <div className="insider">
        //                         <img src={process.env.PUBLIC_URL + "images/typeOfSoil.png"} alt="" />
        //                         <h4>Types Of Soil</h4>
        //                     </div>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Home