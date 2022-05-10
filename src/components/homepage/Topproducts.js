import React from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
const Topproducts = () => {
    const seeds = [
        {
            name: 'Spinach Seeds / Palak Seeds',
            price: 25,
            offer: '30% off'
        },
        {
            name: 'Spinach Seeds / Palak Seeds',
            price: 25,
            offer: '30% off'
        },
        {
            name: 'Spinach Seeds / Palak Seeds',
            price: 25,
            offer: '30% off'
        },
        {
            name: 'Spinach Seeds / Palak Seeds',
            price: 25,
            offer: '30% off'
        },
        {
            name: 'Spinach Seeds / Palak Seeds',
            price: 25,
            offer: '30% off'
        },
        {
            name: 'Spinach Seeds / Palak Seeds',
            price: 25,
            offer: '30% off'
        },
        {
            name: 'Spinach Seeds / Palak Seeds',
            price: 25,
            offer: '30% off'
        },
    ]
    const productSeeds = seeds.map((items, index) => {
        const { name, price, offer } = items;
        return (
            <Slide
                index={index}
                key={index}
            >
                <div className="garden_shop_slide" style={{ height: '420px', width: '250px' }}>
                    <div className="item_image">
                        <img src="images/home/pumpkin-seeds.jpg" alt="image" className="img-fluid" />
                    </div>
                    <div className="item_details">
                        <div className="item_name">
                            <h5>{name}</h5>
                        </div>
                        <h6><span><i className="fa fa-usd" aria-hidden="true"></i></span>{price}</h6>
                    </div>
                    <span className="label">{offer}</span>
                    <input type="checkbox" id="wishlist_1" />
                    <label htmlFor="wishlist_1">
                        <span className="wish_icon"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                        <span className="wish_icon"><i className="fa fa-heart" aria-hidden="true"></i></span>
                    </label>
                </div>
            </Slide>
        );
    })  
    return (
        <>
            <div className="garden_shop_wrapper clv_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="clv_heading">
                                <h3>Seeds</h3>
                                <div className="clv_underline"><img src="images/garden_underline.png" alt="image" /></div>
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="garden_shop_slider">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <CarouselProvider
                                            naturalSlideWidth={100}
                                            naturalSlideHeight={160}
                                            totalSlides={productSeeds.length}
                                            interval={5000}
                                            isPlaying={true}
                                            visibleSlides={4}
                                            infinite={true}
                                        >
                                            <Slider>
                                                {productSeeds}
                                            </Slider>
                                        </CarouselProvider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!--Shop--> */}
            <div className="garden_shop_wrapper clv_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="clv_heading">
                                <h3>Fertilizers</h3>
                                <div className="clv_underline"><img src="images/garden_underline.png" alt="image" /></div>
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="garden_shop_slider">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <CarouselProvider
                                                naturalSlideWidth={100}
                                                naturalSlideHeight={160}
                                                totalSlides={productSeeds.length}
                                                interval={5000}
                                                isPlaying={true}
                                                visibleSlides={4}
                                                infinite={true}
                                            >
                                                <Slider>
                                                    {productSeeds}
                                                </Slider>
                                            </CarouselProvider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--Seeds--> */}
            <div className="garden_shop_wrapper clv_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="clv_heading">
                                <h3>Soils</h3>
                                <div className="clv_underline"><img src="images/garden_underline.png" alt="image" /></div>
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="garden_shop_slider">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <CarouselProvider
                                                naturalSlideWidth={100}
                                                naturalSlideHeight={160}
                                                totalSlides={productSeeds.length}
                                                interval={5000}
                                                isPlaying={true}
                                                visibleSlides={4}
                                                infinite={true}
                                            >
                                                <Slider>
                                                    {productSeeds}
                                                </Slider>
                                            </CarouselProvider>
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

export default Topproducts