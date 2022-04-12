import React from 'react'

const Services = () => {
    return (
        <>
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
        </>
    )
}

export default Services