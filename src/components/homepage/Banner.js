import React from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';
import useBannerImages from '../../hooks/useBannerImages';
const Banner = () => {
    const bannerimages = useBannerImages('home');
    const Banner = bannerimages.map((items, index) => {
        const { image_or_video, caption, description } = items;
        return (
            <Slide
                index={index}
                key={index}
                style={{
                    background: `url(${image_or_video}) no-repeat 0 0`,
                }}
            >
                <div style={{ position: 'absolute', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="clv_slide_inner" style={{ maxWidth: '800px' }}>
                        <h1>{caption}</h1>
                        <p>{description}</p>
                        <div className="banner_btn">
                            <span className="left_line"></span>
                            <Link to='/contact' className="clv_btn">Contact us</Link>
                            <span className="right_line"></span>
                        </div>
                    </div>
                </div>
            </Slide>
        )
    })

    return (
        <>
            <CarouselProvider
                totalSlides={bannerimages.length}
                interval={5000}
                isPlaying={true}
                style={{
                    minHeight: '100vh'
                }}
            >
                <Slider>
                    {
                        Banner
                    }
                </Slider>
            </CarouselProvider>
        </>
    )
}

export default Banner