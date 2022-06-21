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
         
            {/* <Suspense fallback={<div>Loading...</div>}>
                <Testimonial />
            </Suspense> */}
            <div className="garden_service2_wrapper clv_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="clv_heading">
                                <h3>Shop By Categories</h3>
                                <div className="clv_underline"><img src="images/garden_underline.png" alt="image" /></div>                              
                            </div>
                        </div>
                    </div>
                    <div className="garden_service2_section">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="service2_block">
                                    <a href="#">
                                        <div className="service2_image"><img src="images/garden_service4.png" alt="image" /></div>
                                        <div className="service2_content">
                                            <h3>Seeds</h3>
                                            <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>                           
                            <div className="col-md-4">
                                <div className="service2_block">
                                    <a href="#">
                                        <div className="service2_image"><img src="images/garden_service6.png" alt="image" /></div>
                                        <div className="service2_content">
                                            <h3>Fertilizers</h3>
                                            <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                        </div>
                                    </a>
                                </div>                            
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="service2_block">
                                    <a href="#">
                                        <div className="service2_image"><img src="images/garden_service7.png" alt="image" /></div>
                                        <div className="service2_content">
                                            <h3>Soil Testing</h3>
                                            <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                        </div>
                                    </a>
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
                                    <a href="#">
                                        <div className="service2_image"><img src="images/garden_service9.png" alt="image" /></div>
                                        <div className="service2_content">
                                            <h3>Types Of Soil</h3>
                                            <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                        </div>
                                    </a>
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