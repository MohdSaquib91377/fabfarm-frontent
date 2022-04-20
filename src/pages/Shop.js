import React, { useEffect, useState } from 'react';
import { addToCart, setProducts } from '../redux/actions/productActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee, faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
const Shop = ({ products, addToCart, setProducts }) => {
    const [productView, setProductView] = useState(false);
    const [search, setSearch] = useState('')
    useEffect(() => {
        const fetchproducts = async () => {
            const res = await axios.get(`http://localhost:5000/?q=${search}`)
            setProducts(res.data)
        }
        fetchproducts();
    }, [search]);
    const seedList = products.map((product, i) => {
        const { id, image, title, description, Qty: { first_otp, second_otp }, price } = product;
        return (
            <li key={i}>

                <div className="product_item_block">
                    <div className="org_product_block">
                        <span className="product_label">30% off</span>
                        <Link to={`/shop/${id}`}>
                            <div className="org_product_image"><img src={process.env.PUBLIC_URL + image} alt={title} /></div>
                            <h4>{title}</h4></Link>
                        <h3><span><FontAwesomeIcon icon={faIndianRupee} /></span>{price}</h3>
                        <button onClick={() => addToCart(id)}>add to cart</button>
                    </div>
                    <div className="content_block">
                        <div className="product_price_box">
                            <h3>{title}</h3>
                            <h5><span><FontAwesomeIcon icon={faIndianRupee} /></span>{price}</h5>
                        </div>
                        <p>Farm & Garden</p>
                        <div className="rating_section">
                            <span>4.1</span>
                            <ul>
                                <li><a className="active" href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a className="active" href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a className="active" href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            </ul>
                            <p>151 reviews</p>
                        </div>
                        <ul className="product_code">
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
                                <h3>Shop</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb_block">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li> &nbsp; Shop</li>
                    </ul>
                </div>
            </div>
            {/* <!--Produst List--> */}
            <div className="products_wrapper clv_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="product_sidebar">
                                <div className="product_block">
                                    <div className="sidebar_heading">
                                        <h3>search</h3>
                                        <img src="images/footer_underline.png" alt="image" />
                                    </div>
                                    <div className="sidebar_search">
                                        <input type="text" name='search' onChange={(e) => setSearch(e.target.value)} placeholder="Search here" />
                                        <span><FontAwesomeIcon icon={faSearch} /></span>
                                    </div>
                                </div>
                                <div className="product_block">
                                    <div className="sidebar_heading">
                                        <h3>product categories</h3>
                                        <img src="images/footer_underline.png" alt="image" />
                                    </div>
                                    <div className="product_category">
                                        <ul>
                                            <li>
                                                <input type="checkbox" id="cat1" />
                                                <label htmlFor="cat1">all<span>({products.length})</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="cat2" />
                                                <label htmlFor="cat2">Seeds<span>({products.length})</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="cat3" />
                                                <label htmlFor="cat3">Fertilizers<span>({products.length})</span></label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_block">
                                    <div className="sidebar_heading">
                                        <h3>filter by price</h3>
                                        <img src="images/footer_underline.png" alt="image" />
                                    </div>
                                    <div className="ds_progress_rangeslider Range_slider">
                                        <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                            <div className="ui-slider-range ui-corner-all ui-widget-header"></div><span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span><span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span></div>

                                        <div className="price_range"><p><span id="amount"></span></p></div>

                                    </div>
                                </div>
                                {/* <div className="product_block">
                                    <div className="sidebar_heading">
                                        <h3>discount</h3>
                                        <img src="images/footer_underline.png" alt="image" />
                                    </div>
                                    <div className="product_category">
                                        <ul>
                                            <li>
                                                <input type="checkbox" id="dis1" />
                                                <label htmlFor="dis1">less than 20%<span>(16)</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="dis2" />
                                                <label htmlFor="dis2">20% or more<span>(12)</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="dis3" />
                                                <label htmlFor="dis3">30% or more<span>(156)</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="dis4" />
                                                <label htmlFor="dis4">50% or more<span>(260)</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="dis5" />
                                                <label htmlFor="dis5">70% or more<span>(96)</span></label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="dis6" />
                                                <label htmlFor="dis6">80% or more<span>(12)</span></label>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            {/* <div className="product_section">
                                <div className="ads_section"><img src="https://via.placeholder.com/870x296" alt="image" /></div>
                            </div> */}
                            <div className="product_list_section">
                                <div className="product_list_filter">
                                    <ul>
                                        <li>
                                            <p>showing <span>1-6 of {products.length}</span> result</p>
                                        </li>
                                        <li>
                                            <select>
                                                <option value="sort by popularity">sort by popularity</option>
                                                <option value="sort by price">sort by price</option>
                                                <option value="sort by category">sort by category</option>
                                            </select>
                                        </li>
                                        <li>
                                            <ul className="list_view_toggle">
                                                <li><span>view style</span></li>
                                                <li>
                                                    <button onClick={() => setProductView(false)} className={productView ? "grid_view" : "active grid_view"}>
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
                                                    <button onClick={() => setProductView(true)} className={productView ? "active list_view" : "list_view"}>
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
                                <div className={productView ? "product_items_section product_list_view" : "product_items_section"}>
                                    <ul>
                                        {seedList}
                                    </ul>
                                </div>
                                <div className="blog_pagination_section">
                                    <ul>
                                        <li className="blog_page_arrow">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15">
                                                    <path
                                                        fill="#707070"
                                                        fillRule="evenodd"
                                                        d="M.324 8.222l6.793 6.463a1.144 1.144 0 001.564 0 1.016 1.016 0 000-1.488L2.67 7.478 8.681 1.76a1.019 1.019 0 000-1.49 1.151 1.151 0 00-1.565 0L.323 6.735a1.02 1.02 0 00.001 1.487z"
                                                    ></path>
                                                </svg>
                                                <span>&nbsp; prev</span>
                                            </a>
                                        </li>
                                        <li><a href="#">01</a></li>
                                        <li><a href="#">02</a></li>
                                        <li><a href="#">....</a></li>
                                        <li><a href="#">12</a></li>
                                        <li><a href="#">13</a></li>
                                        <li className="blog_page_arrow">
                                            <a href="#">
                                                <span>next &nbsp;</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="25" className='pt-2' >
                                                    <path
                                                        fill="#707070"
                                                        fillRule="evenodd"
                                                        d="M13.676 12.222l-6.793 6.463a1.144 1.144 0 01-1.564 0 1.016 1.016 0 010-1.488l6.01-5.719-6.01-5.718a1.019 1.019 0 010-1.49 1.151 1.151 0 011.565 0l6.792 6.465c.216.205.324.474.324.743s-.108.539-.324.744z"
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
        setProducts: (product) => dispatch(setProducts(product)),
        addToCart: (id) => dispatch(addToCart(id)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);