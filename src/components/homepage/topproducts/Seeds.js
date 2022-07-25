import React from 'react'
import Topproductscarousel from '../Topproductscarousel'

const Seeds = () => {

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
    return (
        <div className="garden_shop_wrapper clv_section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="clv_heading">
                            <h3>Seeds</h3>
                            <div className="clv_underline"><img src="/images/garden_underline.png" alt="image" /></div>
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
                                        <Topproductscarousel seeds={seeds} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seeds