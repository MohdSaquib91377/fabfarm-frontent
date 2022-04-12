import React from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
const Banner = () => {
    return (
        <>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={70}
                totalSlides={2}
                interval={5000}
                isPlaying={true}
            >
                <Slider>
                    <Slide
                        index={0}
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}"images/banner1.jpg")`
                        }}
                    >
                        <div style={{ position: 'absolute', height: '100%', width: '100%', backgroundColor: 'rgba(60, 63, 72, 0.88)' }}>
                            <div className="clv_slide_inner" style={{ marginTop: '300px' }}>
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
                    </Slide>
                    <Slide
                        index={1}
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}"images/banner2.jpg")`
                        }}
                    >
                        <div style={{ position: 'absolute', height: '100%', width: '100%', backgroundColor: 'rgba(60, 63, 72, 0.88)' }}>
                            <div className="clv_slide_inner" style={{ marginTop: '300px' }}>
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
                    </Slide>
                </Slider>
            </CarouselProvider>
            {/* <div className="clv_banner_slider">
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
            </div> */}
        </>
    )
}

export default Banner