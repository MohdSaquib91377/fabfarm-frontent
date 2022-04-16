import React, { useState } from 'react';
import { addToCart } from '../redux/actions/productActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
const Seeds = ({ products, addToCart }) => {
    const [productView, setProductView] = useState(false);
    const seedList = products.map((product, i) => {
        const { id, image, title, description, Qty: { first_otp, second_otp }, price } = product;
        return (
            // <div className="col" key={i}>
            //     <div className="prodView">
            //         <img src={process.env.PUBLIC_URL + image} alt={title} />
            //         <h3>{title}</h3>
            //         <p>
            //             {description}
            //         </p>
            //     </div>
            //     <div className="requiredQty">
            //         <label>Qty</label>
            //         <select>
            //             <option>{first_otp}</option>
            //             <option>{second_otp}</option>
            //         </select>
            //     </div>
            //     <div className="prodPrice">
            //         <h4>₹ {price}</h4>
            //     </div>
            //     <hr />
            //     <div className="addCart">
            //         <button onClick={() => addToCart(id)}>ADD TO CART</button>
            //     </div>
            // </div>
            <li key={i}>
                <div class="product_item_block">
                    <div class="org_product_block">
                        <span class="product_label">30% off</span>
                        <div class="org_product_image"><img src={process.env.PUBLIC_URL + image} alt={title} /></div>
                        <h4>{title}</h4>
                        <h3><span><FontAwesomeIcon icon={faIndianRupee} /></span>{price}</h3>
                        <button onClick={() => addToCart(id)}>add to cart</button>
                    </div>
                    <div class="content_block">
                        <div class="product_price_box">
                            <h3>{title}</h3>
                            <h5><span><FontAwesomeIcon icon={faIndianRupee} /></span>{price}</h5>
                        </div>
                        <p>Farm & Garden</p>
                        <div class="rating_section">
                            <span>4.1</span>
                            <ul>
                                <li><a class="active" href="javascript:;"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a class="active" href="javascript:;"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a class="active" href="javascript:;"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:;"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:;"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                            </ul>
                            <p>151 reviews</p>
                        </div>
                        <ul class="product_code">
                            <li>
                                <p>product code: 12948</p>
                            </li>
                            <li>
                                <p>availability: <span>in stock</span></p>
                            </li>
                        </ul>
                        <p>{description}</p>
                    </div>
                </div>
            </li>
        );
    })
    return (
        <>
            {/* <!--Breadcrumb--> */}
            <div className="breadcrumb_wrapper" style={{ minHeight: '250px' }}>
                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="breadcrumb_inner">
                                <h3>Seeds</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb_block">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li> Seeds</li>
                    </ul>
                </div>
            </div>
            {/* <!--Produst List--> */}
            <div class="products_wrapper clv_section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3">
                            <div class="product_sidebar">
                                <div class="product_block">
                                    <div class="sidebar_heading">
                                        <h3>search</h3>
                                        <img src="images/footer_underline.png" alt="image" />
                                    </div>
                                    <div class="sidebar_search">
                                        <input type="text" placeholder="Search here" />
                                        <a href="javascript:;"><i class="fa fa-search" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                <div class="product_block">
                                    <div class="sidebar_heading">
                                        <h3>product categories</h3>
                                        <img src="images/footer_underline.png" alt="image" />
                                    </div>
                                    <div class="product_category">
                                        <ul>
                                            <li>
                                                <input type="checkbox" id="cat1" checked />
                                                <label for="cat1">all<span>(16)</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="cat2" />
                                                <label for="cat2">Organic Farming<span>(12)</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="cat3" />
                                                <label for="cat3">Organic Green Bell Pepper<span>(156)</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="cat4" />
                                                <label for="cat4">Permaculture<span>(260)</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="cat5" />
                                                <label for="cat5">Precision Farming<span>(96)</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="cat6" />
                                                <label for="cat6">Conservation Agriculture<span>(12)</span></label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="product_block">
                                    <div class="sidebar_heading">
                                        <h3>filter by price</h3>
                                        <img src="images/footer_underline.png" alt="image" />
                                    </div>
                                    <div class="ds_progress_rangeslider Range_slider">
                                        <div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                            <div class="ui-slider-range ui-corner-all ui-widget-header"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span></div>

                                        <div class="price_range"><p><span id="amount"></span></p></div>

                                    </div>
                                </div>
                                <div class="product_block">
                                    <div class="sidebar_heading">
                                        <h3>discount</h3>
                                        <img src="images/footer_underline.png" alt="image" />
                                    </div>
                                    <div class="product_category">
                                        <ul>
                                            <li>
                                                <input type="checkbox" id="dis1" checked />
                                                <label for="dis1">less than 20%<span>(16)</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="dis2" />
                                                <label for="dis2">20% or more<span>(12)</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="dis3" />
                                                <label for="dis3">30% or more<span>(156)</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="dis4" />
                                                <label for="dis4">50% or more<span>(260)</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="dis5" />
                                                <label for="dis5">70% or more<span>(96)</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="dis6" />
                                                <label for="dis6">80% or more<span>(12)</span></label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9">
                            {/* <div class="product_section">
                                <div class="ads_section"><img src="https://via.placeholder.com/870x296" alt="image" /></div>
                            </div> */}
                            <div class="product_list_section">
                                <div class="product_list_filter">
                                    <ul>
                                        <li>
                                            <p>showing <span>1-6 of 9</span> result</p>
                                        </li>
                                        <li>
                                            <select>
                                                <option value="sort by popularity">sort by popularity</option>
                                                <option value="sort by price">sort by price</option>
                                                <option value="sort by category">sort by category</option>
                                            </select>
                                        </li>
                                        <li>
                                            <ul class="list_view_toggle">
                                                <li><span>view style</span></li>
                                                <li>
                                                    <button onClick={() => setProductView(false)} class={productView ? "grid_view" : "active grid_view"}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                                                            <path
                                                                fill="#707070"
                                                                fillRule="evenodd"
                                                                d="M6.861 12V6.861H12V12H6.861zm0-12H12v5.139H6.861V0zM0 6.861h5.139V12H0V6.861zM0 0h5.139v5.139H0V0z"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button onClick={() => setProductView(true)} class={productView ? "active list_view" : "list_view"}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                                            <path
                                                                fill="#707070"
                                                                fillRule="evenodd"
                                                                d="M3.847 10V7.783H12V10H3.847zm0-6.108H12v2.216H3.847V3.892zm0-3.892H12v2.216H3.847V0zM0 7.783h2.297V10H0V7.783zm0-3.891h2.297v2.216H0V3.892zM0 0h2.297v2.216H0V0z"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class={productView ? "product_items_section product_list_view" : "product_items_section"}>
                                    <ul>
                                        {seedList}
                                    </ul>
                                </div>
                                <div class="blog_pagination_section">
                                    <ul>
                                        <li class="blog_page_arrow">
                                            <a href="javascript:;">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15">
                                                    <path
                                                        fill="#707070"
                                                        fillRule="evenodd"
                                                        d="M.324 8.222l6.793 6.463a1.144 1.144 0 001.564 0 1.016 1.016 0 000-1.488L2.67 7.478 8.681 1.76a1.019 1.019 0 000-1.49 1.151 1.151 0 00-1.565 0L.323 6.735a1.02 1.02 0 00.001 1.487z"
                                                    ></path>
                                                </svg>
                                                <span>prev</span>
                                            </a>
                                        </li>
                                        <li><a href="javascript:;">01</a></li>
                                        <li><a href="javascript:;">02</a></li>
                                        <li><a href="javascript:;">....</a></li>
                                        <li><a href="javascript:;">12</a></li>
                                        <li><a href="javascript:;">13</a></li>
                                        <li class="blog_page_arrow">
                                            <a href="javascript:;">
                                                <span>next</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="25">
                                                    <path
                                                        fill="#707070"
                                                        fillRule="evenodd"
                                                        d="M13.676 13.222l-6.793 6.463a1.144 1.144 0 01-1.564 0 1.016 1.016 0 010-1.488l6.01-5.719-6.01-5.718a1.019 1.019 0 010-1.49 1.151 1.151 0 011.565 0l6.792 6.465c.216.205.324.474.324.743s-.108.539-.324.744z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Seeds);