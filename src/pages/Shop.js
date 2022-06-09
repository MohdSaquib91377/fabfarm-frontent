import React, { useEffect, useState } from 'react';
import { addToCart, setProducts, loadCurrentItem } from '../redux/actions/productActions';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee, faSearch } from '@fortawesome/free-solid-svg-icons';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from '../components/API/axios';
import Tabtitle from './Tabtitle';

const Shop = ({ addToCart }) => {
    let { categoryId } = useParams();
    const [productView, setProductView] = useState('');
    const [products, setProducts] = useState([])
    const [filterData, setFilterData] = useState([])
    const [applyFilter, setApplyFilter] = useState(false);
    const [page, setPage] = useState(1);
    // const [priceValue, setPriceValue] = useState([1, 1000])
    Tabtitle('FAB | Shop')

    const fetchproducts = async () => {
        try {
            const res = await axios.get(`/api/v1/store/category-details/${categoryId}/`)
            setProducts(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    const handleFilter = (event) => {
        setApplyFilter(true)
        const searchWord = event.target.value;
        const filterData = products.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        })
        setFilterData(filterData)
    }


    useEffect(() => {
        fetchproducts();
    }, []);

    const productFilterList = filterData.map((product, i) => {
        const { id, image: [{ image }], name, description, price } = product;
        return (
            <li key={i}>

                <div className="product_item_block">
                    <div className="org_product_block">
                        <span className="product_label">30% off</span>
                        <Link to={`/shop/${categoryId}/product/${id}`}>
                            <div className="org_product_image"><img src={process.env.REACT_APP_BASE_URL + image} alt={name} /></div>
                        </Link>
                        <Link to={`/shop/${categoryId}/product/${id}`}><h4 >{name}</h4></Link>
                        <h3><span><FontAwesomeIcon icon={faIndianRupee} /></span>{price}</h3>
                        <button onClick={() => addToCart(id)}>add to cart</button>
                    </div>
                    <div className="content_block">
                        <div className="product_price_box">
                            <Link to={`/shop/${categoryId}/product/${id}`}>
                                <h3>
                                    {name}
                                </h3>
                            </Link>
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

            </li >
        );
    })
    const productList = products.map((product, i) => {
        const { id, image: [{ image }], name, description, price } = product;
        return (
            <li key={i}>

                <div className="product_item_block">
                    <div className="org_product_block">
                        <span className="product_label">30% off</span>
                        <Link to={`/shop/${categoryId}/product/${id}`}>
                            <div className="org_product_image"><img src={process.env.REACT_APP_BASE_URL + image} alt={name} /></div>
                        </Link>
                        <Link to={`/shop/${categoryId}/product/${id}`}><h4 >{name}</h4></Link>
                        <h3><span><FontAwesomeIcon icon={faIndianRupee} /></span>{price}</h3>
                        <button onClick={() => addToCart(id)}>add to cart</button>
                    </div>
                    <div className="content_block">
                        <div className="product_price_box">
                            <Link to={`/shop/${categoryId}/product/${id}`}>
                                <h3>
                                    {name}
                                </h3>
                            </Link>
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

            </li >
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
                                <h3>{products.length !== 0 ? products[0].category : undefined}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb_block">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li> &nbsp; {products.length !== 0 ? products[0].category : undefined}</li>
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
                                        <h3>filter by price</h3>
                                    </div>
                                    <div className="ds_progress_rangeslider Range_slider">
                                        {/* <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                            <div className="ui-slider-range ui-corner-all ui-widget-header"></div><span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span><span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span></div>

                                        <div className="price_range"><p><span id="amount"></span></p></div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">

                            <div className="product_list_section">
                                <div className="product_list_filter">
                                    <ul>

                                        <li>
                                            <select>
                                                <option value="sort by popularity">sort by popularity</option>
                                                <option value="sort by price">sort by price</option>
                                                {/* <option value="sort by category">sort by category</option> */}
                                            </select>
                                        </li>
                                        <li>
                                            <ul className="list_view_toggle">
                                                <li><span>view style</span></li>
                                                <li>
                                                    <button onClick={() => setProductView('list')} className={productView !== 'list' ? "grid_view" : "active grid_view"}>
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
                                                    <button onClick={() => setProductView('grid')} className={productView !== 'list' ? "active list_view" : "list_view"}>
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
                                        <li>
                                            <div className="sidebar_search">
                                                <input type="text" name='search' onChange={handleFilter} placeholder="Search here" />
                                                <span><FontAwesomeIcon icon={faSearch} /></span>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                                <InfiniteScroll
                                    dataLength={products.length} //This is important field to render the next data
                                    next={() => setPage(page + 1)}
                                    hasMore={true}
                                    // loader={<h4>Loading...</h4>}
                                    scrollableTarget='products_list'
                                    endMessage={
                                        <p style={{ textAlign: 'center' }}>
                                            <b>Yay! You have seen it all</b>
                                        </p>
                                    }
                                >
                                    <div id='products_list' className={productView !== 'list' ? "product_items_section product_list_view" : "product_items_section"}>
                                        <ul>
                                            {applyFilter ?
                                                filterData.length !== 0 ? productFilterList : "no data found" :
                                                productList
                                            }
                                        </ul>
                                    </div>
                                </InfiniteScroll>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
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
        // loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);