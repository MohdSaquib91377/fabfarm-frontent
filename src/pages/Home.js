import React from 'react'
import Testimonial from '../components/homepage/Testimonial';
import Banner from '../components/homepage/Banner';
import Services from '../components/homepage/Services';
import Counter from '../components/homepage/Counter';
// import Partner from '../components/homepage/Partner';
import Topproducts from '../components/homepage/Topproducts';
import Tabtitle from './Tabtitle';
const Home = () => {
    Tabtitle('FAB')
    return (
        <>
            <Banner />
            <Services />
            <Counter />
            <div className="garden_service_about_wrapper clv_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="service_about_content">
                                <h1>The Best Lawn Moving <br /><span>& Gardening Service</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempoicididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderiit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <h5>We provide service since 25 years and we are still top landscape company</h5>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptateantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="service_about_image">
                                <img src="images/home/field.jpg" alt="image" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonial />
            <div className="garden_service2_wrapper clv_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="clv_heading">
                                <h3>discover services we provided</h3>
                                <div className="clv_underline"><img src="images/garden_underline.png" alt="image" /></div>
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="garden_service2_section">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="service2_block">
                                    <div className="service2_image"><img src="images/garden_service4.png" alt="image" /></div>
                                    <div className="service2_content">
                                        <h3>Hedge Cutting</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service2_block">
                                    <div className="service2_image"><img src="images/garden_service5.png" alt="image" /></div>
                                    <div className="service2_content">
                                        <h3>Garden Clean Up</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service2_block">
                                    <div className="service2_image"><img src="images/garden_service6.png" alt="image" /></div>
                                    <div className="service2_content">
                                        <h3>Watering</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="service2_block">
                                    <div className="service2_image"><img src="images/garden_service7.png" alt="image" /></div>
                                    <div className="service2_content">
                                        <h3>Snow & Ice Removal</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service2_block">
                                    <div className="service2_image"><img src="images/garden_service8.png" alt="image" /></div>
                                    <div className="service2_content">
                                        <h3>Tree Planting</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service2_block">
                                    <div className="service2_image"><img src="images/garden_service9.png" alt="image" /></div>
                                    <div className="service2_content">
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

            <Topproducts />

            {/* <!--Partner--> */}
            {/* <Partner /> */}
        </>
    )
}

export default Home