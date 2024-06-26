import React from 'react'
import { useRef, useState, useEffect } from "react";
import Countup from '../countup/Countup'

const Counter = () => {
    const boxRef = useRef();
    const [y, setY] = useState();
    const getPosition = () => {
        const y = boxRef.current.offsetTop;
        setY(y);
    }
    useEffect(() => {
        getPosition();
    }, []);
    useEffect(() => {
        window.addEventListener("resize", getPosition);
    }, []);
    return (
        <div className="clv_counter_wrapper m-b-30 clv_section" ref={boxRef}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-8">
                        <div className="clv_heading white_heading">
                            <h3>We Are The Experts Of This Field.</h3>
                            <div className="clv_underline"><img src="/images/underline2.png" alt="image" /></div>
                        </div>
                    </div>
                </div>
                <div className="counter_section">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="counter_block">
                                <div className="counter_img">
                                    <span className="red_bg"><img src="/images/counter_customer.png" alt="image" className="img-fluid" /></span>
                                </div>
                                <div className="counter_text">
                                    <h4><span className="count_no" data-to="26" data-speed="3000">
                                        <Countup start={0} end={26} timer={50} scrollStart={y} />
                                    </span><span>k+</span></h4>
                                    <h5>happy customers</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="counter_block">
                                <div className="counter_img">
                                    <span className="yellow_bg"><img src="/images/counter_project.png" alt="image" className="img-fluid" /></span>
                                </div>
                                <div className="counter_text">
                                    <h4><span className="count_no" data-to="700" data-speed="3000">
                                        <Countup start={0} end={700} timer={50} scrollStart={y} />
                                    </span><span>+</span></h4>
                                    <h5>Seeds Types</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="counter_block">
                                <div className="counter_img">
                                    <span className="orange_bg"><img src="/images/counter_branch.png" alt="image" className="img-fluid" /></span>
                                </div>
                                <div className="counter_text">
                                    <h4><span className="count_no" data-to="200" data-speed="3000">
                                        <Countup start={0} end={200} timer={50} scrollStart={y} />
                                    </span><span>+</span></h4>
                                    <h5>Soil Types</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="counter_block">
                                <div className="counter_img">
                                    <span className="blue_bg"><img src="/images/counter_winner.png" alt="image" className="img-fluid" /></span>
                                </div>
                                <div className="counter_text">
                                    <h4><span className="count_no" data-to="6" data-speed="3000">
                                        <Countup start={0} end={6} timer={100} scrollStart={y} />
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