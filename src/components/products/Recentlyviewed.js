import React from 'react'
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { setMainCategory } from '../../redux/actions/productActions';
import Basiccarousel from '../util/productstemplates/Basiccarousel';

const Recentlyviewed = ({ products, setMainCategory }) => {
    return (
        <>
            <div className="product m-t-100 m-b-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Start Section Title */}
                            <div className="section-content section-contRelatedent--border m-b-35">
                                <h5 className="section-content__title">recently views
                                </h5>
                                {/* <Link
                                    to={`/shop/${products[0]?.category?.id}/${products[0]?.sub_category?.id}`}
                                    onClick={() => setMainCategory(false)}
                                    className="btn btn--icon-left btn--small btn--radius btn--transparent btn--border-green btn--border-green-hover-green font--regular text-capitalize">
                                    More Products<i className="fal fa-angle-right"></i>
                                </Link> */}
                            </div>  {/* End Section Title */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="default-slider default-slider--hover-bg-red product-default-slider">
                                <div className="product-default-slider-4grid-1rows gap__col--30 gap__row--40">

                                    {/* Start Single Default Product */}
                                    <Basiccarousel products={products} />
                                    {/* End Single Default Product */}

                                    {/* Start Single Default Product */}

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
        setMainCategory: (boolean) => dispatch(setMainCategory(boolean))
    }
}
export default connect(null, mapDispatchToProps)(Recentlyviewed)