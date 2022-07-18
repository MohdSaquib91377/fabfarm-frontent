import React from 'react'
import Basiccarousel from '../util/productstemplates/Basiccarousel';

const Relatedproducts = ({ products }) => {
    return (
        <>
            <div className="product m-t-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Start Section Title */}
                            <div className="section-content section-content--border m-b-35">
                                <h5 className="section-content__title">Related Product
                                </h5>
                                <a href="shop-sidebar-grid-left.html" className="btn btn--icon-left btn--small btn--radius btn--transparent btn--border-green btn--border-green-hover-green font--regular text-capitalize">More Products<i className="fal fa-angle-right"></i></a>
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

export default Relatedproducts