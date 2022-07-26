import React, { useEffect, useState } from 'react'
import axios from '../API/axios'
import { useNavigate } from 'react-router-dom'
import { setMainCategory } from '../../redux/actions/productActions';
import { connect } from 'react-redux';

const Services = ({ category, setMainCategory }) => {
    let Navigate = useNavigate();
    
    const navigate = (id) => {
        setMainCategory(true)
        Navigate(`/shop/${id}/`)
    }
   

    return (
        <>
            <div className="garden_about_wrapper clv_section">
                <div className="container">
                    <div className="garden_service_wrapper">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="garden_service_block" onClick={() => navigate(category[0]?.id)}>
                                    <div className="service_image">
                                        <span><img src={process.env.PUBLIC_URL + "/images/garden_service1.png"} alt="" /></span>
                                    </div>
                                    <h3>{category[0]?.name}</h3>
                                    <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="garden_service_block" onClick={() => navigate(category[1]?.id)}>
                                    <div className="service_image">
                                        <span><img src={process.env.PUBLIC_URL + "/images/garden_service1.png"} alt="" /></span>
                                    </div>
                                    <h3>{category[1]?.name}</h3>
                                    <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="garden_service_block" onClick={() => navigate(category[2]?.id)}>
                                    <div className="service_image">
                                        <span><img src={process.env.PUBLIC_URL + "/images/garden_service2.png"} alt="" /></span>
                                    </div>
                                    <h3>{category[2]?.name}</h3>
                                    <p>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="garden_service_block" onClick={() => navigate(category[3]?.id)}>
                                    <div className="service_image">
                                        <span><img src={process.env.PUBLIC_URL + "/images/garden_service3.png"} alt="" /></span>
                                    </div>
                                    <h3>{category[3]?.name}</h3>
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
const mapDispatchToProps = (dispatch) => {
    return {
        setMainCategory: (boolean) => dispatch(setMainCategory(boolean)),
    };
};
export default connect(null, mapDispatchToProps)(Services)