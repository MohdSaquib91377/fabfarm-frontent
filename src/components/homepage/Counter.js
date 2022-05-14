import React from 'react'
import Countup from '../countup/Countup'

const Counter = () => {
    return (
        <div className="clv_counter_wrapper clv_section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="clv_heading white_heading">
                            <h3>we are an expert in this field</h3>
                            <div className="clv_underline"><img src="images/underline2.png" alt="image" /></div>
                            <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                        </div>
                    </div>
                </div>
                <div className="counter_section">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="counter_block">
                                <div className="counter_img">
                                    <span className="red_bg"><img src="images/counter_customer.png" alt="image" className="img-fluid" /></span>
                                </div>
                                <div className="counter_text">
                                    <h4><span className="count_no" data-to="26" data-speed="3000">
                                        <Countup start={0} end={26} timer={50} />
                                    </span><span>k+</span></h4>
                                    <h5>happy customers</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="counter_block">
                                <div className="counter_img">
                                    <span className="yellow_bg"><img src="images/counter_project.png" alt="image" className="img-fluid" /></span>
                                </div>
                                <div className="counter_text">
                                    <h4><span className="count_no" data-to="700" data-speed="3000">
                                    <Countup start={0} end={700} timer={50} />
                                        </span><span>+</span></h4>
                                    <h5>Seeds Types</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="counter_block">
                                <div className="counter_img">
                                    <span className="orange_bg"><img src="images/counter_branch.png" alt="image" className="img-fluid" /></span>
                                </div>
                                <div className="counter_text">
                                    <h4><span className="count_no" data-to="200" data-speed="3000">
                                        <Countup start={0} end={200} timer={50} />
                                    </span><span>+</span></h4>
                                    <h5>Soil Types</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="counter_block">
                                <div className="counter_img">
                                    <span className="blue_bg"><img src="images/counter_winner.png" alt="image" className="img-fluid" /></span>
                                </div>
                                <div className="counter_text">
                                    <h4><span className="count_no" data-to="6" data-speed="3000">
                                    <Countup start={0} end={6} timer={100} />
                                        </span><span>k+</span></h4>
                                    <h5>award winner</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter