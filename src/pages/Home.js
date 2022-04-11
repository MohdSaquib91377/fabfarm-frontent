import React from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
const Home = () => {
    return (
        <section className="container">
            <div className="banner">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={50}
                    totalSlides={2}
                    interval={5000}
                    isPlaying={true}
                >
                    <Slider                    >
                        <Slide
                            index={0}
                        >
                            <img src={process.env.PUBLIC_URL + "images/banner1.jpg"} alt="" />
                            <span className="bannerBG"></span>

                        </Slide>
                        <Slide
                            index={1}
                        >
                            <img src={process.env.PUBLIC_URL + "images/banner2.jpg"} alt="" />
                            <span className="bannerBG"></span>
                        </Slide>
                    </Slider>
                </CarouselProvider>
                <div className="inner">
                    <div className="bannerArt">
                        <div className="insider">
                            <h2>WELCOME TO</h2>
                            <p>Farmers Allaince For Business</p>
                            <a href="#">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mainGrid1">
                <div className="inner">
                    <div className="title">
                        <h1>
                            Farming is not just for growing crops, it is for the cultivation of human beings !!!
                        </h1>
                    </div>
                    <div className="insider">

                        <div className="col fig">
                            <img src={process.env.PUBLIC_URL + "images/corn-stalk-big.jpg"} alt="" />
                        </div>
                        <div className="col art">
                            <h4>What is Lorem Ipsum?</h4>
                            <p>“Lorem Ipsum is simply dummy text of,<span><br /></span> the printing and typesetting<span><br /></span>
                                industry. Lorem Ipsum <span><br /></span>
                                has been the industry's <span><br /></span>
                                standard dummy text”</p>
                            <div className="smallFig"><img src={process.env.PUBLIC_URL + "images/corn-stalk.png"} alt="" /></div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mainGrid2">
                <div className="inner">
                    <div className="thumbBlog">
                        <img src={process.env.PUBLIC_URL + "images/sunflower.png"} alt="" />
                        <img src={process.env.PUBLIC_URL + "images/flax-seeds2.png"} alt="" />
                        <img src={process.env.PUBLIC_URL + "images/mustard.png"} alt="" />
                        <img src={process.env.PUBLIC_URL + "images/black-sesame.png"} alt="" />
                    </div>

                    <div className="button">
                        <a href="#">+ Shop all seeds</a>
                    </div>
                </div>
            </div>

            <div className="mainGrid3">
                <div className="inner">
                    <div className="col bgArt">
                        <div className="pattern">
                            <h3>
                                What is <br />
                                <span>Lorem Ipsum?</span>
                            </h3>
                            <p>
                                “Lorem Ipsum is simply<span><br /></span>
                                dummy text of the printing<span><br /></span>
                                and typesetting <span><br /></span>
                                industry” .
                            </p>
                        </div>
                        <div className="seeds">
                            <img src={process.env.PUBLIC_URL + "images/flax-seeds.png"} alt="" />
                        </div>
                        <div className="butn">
                            <a href="#">Shop</a>
                        </div>
                    </div>

                    <div className="col art">
                        <h2>
                            What is Lorem Ipsum?
                        </h2>
                        <p>
                            “Lorem Ipsum is simply dummy text of <span><br /></span>
                            the printing and typesetting<span><br /></span>
                            industry. Lorem Ipsum <span><br /></span>
                            has been the industry's <span><br /></span>
                            standard dummy text”
                        </p>
                    </div>
                </div>
            </div>

            <div className="mainGrid4">
                <div className="inner">
                    <div className="figArt">
                        <div className="col">
                            <div className="insider">
                                <img src={process.env.PUBLIC_URL + "images/typesOfSeeds.png"} alt="" />
                                <h4>Types Of Seeds</h4>
                            </div>
                        </div>

                        <div className="col">
                            <div className="insider">
                                <img src={process.env.PUBLIC_URL + "images/fertilizers.png"} alt="" />
                                <h4>Fertilizers</h4>
                            </div>
                        </div>

                        <div className="col">
                            <div className="insider">
                                <img src={process.env.PUBLIC_URL + "images/soilTesting.png"} alt="" />
                                <h4>Soil Testing</h4>
                                <img src={process.env.PUBLIC_URL + "images/flax-seeds.png"} alt="" />
                            </div>
                        </div>

                        <div className="col">
                            <div className="insider">
                                <img src={process.env.PUBLIC_URL + "images/typeOfSoil.png"} alt="" />
                                <h4>Types Of Soil</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home