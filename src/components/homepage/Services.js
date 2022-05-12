import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <>
            <div className="garden_about_wrapper clv_section">
                <div className="container">
                    <div className="garden_service_wrapper">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <Link to='/seeds'>
                                    <div className="garden_service_block">
                                        <div className="service_image">
                                            <span><img src={process.env.PUBLIC_URL + "images/garden_service1.png"} alt="" /></span>
                                        </div>
                                        <h3>Seeds</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </Link>
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
                </div>
            </div>  
        </>
    )
}

export default Services