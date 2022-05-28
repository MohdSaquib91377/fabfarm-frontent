import React, { lazy, Suspense } from 'react'
import Tabtitle from './Tabtitle';
const Banner = lazy(() => import('../components/homepage/Banner'))
const Testimonial = lazy(() => import('../components/homepage/Testimonial'))
const Services = lazy(() => import('../components/homepage/Services'))
const Counter = lazy(() => import('../components/homepage/Counter'))
const Weare = lazy(() => import('../components/homepage/Weare'))
const Featuredproducts = lazy(() => import('../components/homepage/allproducts/Featuredproducts'))
const Seeds = lazy(() => import('../components/homepage/topproducts/Seeds'))
const Fertilizers = lazy(() => import('../components/homepage/topproducts/Fertilizers'))
const Soils = lazy(()=>import('../components/homepage/topproducts/Soils'))
const Home = () => {
    Tabtitle('FAB')
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Banner />
            </Suspense>
            <Suspense >
                <Services />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Weare />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Featuredproducts />
            </Suspense>
            {/* <!--Shop--> */}

            {/* <Suspense fallback={<div>Loading...</div>}>
                <Seeds />
            </Suspense> */}
{/* 
            <Suspense fallback={<div>Loading...</div>}>
                <Fertilizers />
            </Suspense> */}
            <Suspense fallback={<div>Loading...</div>}>
                <Counter />
            </Suspense>
            {/* <Suspense fallback={<div>Loading...</div>}>
                <Soils />
            </Suspense> */}
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
            {/* <Suspense fallback={<div>Loading...</div>}>
                <Testimonial />
            </Suspense> */}
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
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="service2_block">
                                    <div className="service2_image"><img src="images/garden_service4.png" alt="image" /></div>
                                    <div className="service2_content">
                                        <h3>Seeds</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-4">
                                <div className="service2_block">
                                    <div className="service2_image"><img src="images/garden_service5.png" alt="image" /></div>
                                    <div className="service2_content">
                                        <h3>Fertilizers</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-md-4">
                                <div className="service2_block">
                                    <div className="service2_image"><img src="images/garden_service6.png" alt="image" /></div>
                                    <div className="service2_content">
                                        <h3>Fertilizers</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="service2_block">
                                    <div className="service2_image"><img src="images/garden_service7.png" alt="image" /></div>
                                    <div className="service2_content">
                                        <h3>Soil Testing</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-4">
                                <div className="service2_block">
                                    <div className="service2_image"><img src="images/garden_service8.png" alt="image" /></div>
                                    <div className="service2_content">
                                        <h3>Types Of Soil</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-md-4">
                                <div className="service2_block">
                                    <div className="service2_image"><img src="images/garden_service9.png" alt="image" /></div>
                                    <div className="service2_content">
                                        <h3>Types Of Soil</h3>
                                        <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!--Partner--> */}
            {/* <Partner /> */}
        </>
    )
}

export default Home