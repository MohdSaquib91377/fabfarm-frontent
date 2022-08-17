import React from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setMainCategory } from '../../redux/actions/productActions';

const Servicestwo = ({ category, setMainCategory }) => {

    let Navigate = useNavigate();

    const navigate = (id) => {
        setMainCategory(true)
        Navigate(`/shop/${id}/`)
    }
    return (
        <div className="garden_service2_wrapper clv_section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="clv_heading">
                            <h3>Shop By Categories</h3>
                            <div className="clv_underline"><img src="/images/garden_underline.png" alt="image" /></div>
                        </div>
                    </div>
                </div>
                <div className="garden_service2_section">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="service2_block" onClick={() => navigate(category[0]?.id)}>
                                <div className="service2_image"><img src="/images/garden_service4.png" alt="services" /></div>
                                <div className="service2_content">
                                    <h3>{category[0]?.name}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service2_block" onClick={() => navigate(category[1]?.id)} >
                                <div className="service2_image"><img src="/images/garden_service6.png" alt="image" /></div>
                                <div className="service2_content">
                                    <h3>{category[1]?.name}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="service2_block" onClick={() => navigate(category[2]?.id)}>
                                <div className="service2_image"><img src="/images/garden_service7.png" alt="image" /></div>
                                <div className="service2_content">
                                    <h3>{category[2]?.name}</h3>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-4">
                    <div className="service2_block">
                        <div className="service2_image"><img src="/images/garden_service8.png" alt="image" /></div>
                        <div className="service2_content">
                            <h3>Types Of Soil</h3>
                        </div>
                    </div>
                </div> */}
                        <div className="col-md-4">
                            <div className="service2_block" onClick={() => navigate(category[3]?.id)}>
                                <div className="service2_image"><img src="/images/garden_service9.png" alt="image" /></div>
                                <div className="service2_content">
                                    <h3>{category[3]?.name}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        setMainCategory: (boolean) => dispatch(setMainCategory(boolean)),
    };
};
export default connect(null, mapDispatchToProps)(Servicestwo)