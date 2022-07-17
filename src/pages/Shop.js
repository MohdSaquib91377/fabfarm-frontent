import React, { useEffect, useState } from 'react';
import { setMainCategory, setProducts } from '../redux/actions/productActions';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from '../components/API/axios';
import Tabtitle from './Tabtitle';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core';
import useBannerImages from '../hooks/useBannerImages';
import Productcomponent from '../components/shop/Productcomponent';
import Checkcatradio from '../components/shop/Checkcatradio';

const useStyles = makeStyles({
    root: {
        width: '60%'
    },
    thumb: {
        color: 'green'
    },
    rail: {
        color: 'red'
    },
    track: {
        color: 'yellow'
    },
});


const Shop = ({ mainCategory, setMainCategory }) => {
    const classes = useStyles();
    let { categoryId } = useParams();
    let { subCategoryID } = useParams();
    const [productView, setProductView] = useState('');
    const [products, setProducts] = useState([])
    const [filterData, setFilterData] = useState([])
    const [applyFilter, setApplyFilter] = useState(false);
    // const [page, setPage] = useState(2);
    const [priceValue, setPriceValue] = useState([100, 1000])
    const [selectedSortMethod, setSelectedSortMethod] = useState('popularity')

    Tabtitle('FAB | Shop')
    const banner = useBannerImages('shop')
    const handleFilter = (event) => {
        setApplyFilter(true)
        const searchWord = event.target.value;
        const filterData = products.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        })
        setFilterData(filterData)
    }

    const handePriceFilterChange = (event, value) => {
        setApplyFilter(true)
        setPriceValue(value);
        const filterData = products.filter((value) => {
            return value.price > priceValue[0] && value.price < priceValue[1];
        })
        setFilterData(filterData)
    }
    console.log(subCategoryID)
    const handleSelectChange = (event) => {
        setSelectedSortMethod(event.target.value)
        setApplyFilter(true)
    }

    useEffect(() => {
        let isMounted = true

        if (isMounted) {
            const fetchproducts = async () => {
                try {
                    if (mainCategory) {
                        const res = await axios.get(`/api/v1/store/parent-category-details/${categoryId}/`)
                        setProducts(res.data[0]?.products)
                    } else {
                        const res = await axios.get(`/api/v1/store/category-details/${subCategoryID}/`)
                        setProducts(res.data)
                    }
                } catch (error) {
                    throw (error);
                }
            }
            fetchproducts();
        }

        return () => {
            isMounted = false
        }
    }, [mainCategory, categoryId, subCategoryID])


    useEffect(() => {
        if (selectedSortMethod === 'price') {
            const filterData = products.sort((a, b) => {
                return a.price > b.price ? 1 : -1;
            })
            setFilterData(filterData)
        } else {
            setApplyFilter(false)
        }
    }, [selectedSortMethod, products])
    const productFilterList = filterData.map((product, i) => {
        return (
            <Productcomponent product={product} i={i} categoryId={categoryId} />

        );
    })
    const productList = products.map((product, i) => {
        return (
            <Productcomponent product={product} i={i} categoryId={categoryId} />
        );
    })
    return (
        <>
            {/* <!--Breadcrumb--> */}
            <div className="breadcrumb_wrapper"
                style={{
                    minHeight: '250px',
                    backgroundImage: `url(${banner[0]?.image_or_video})`
                }}
            >
                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="breadcrumb_inner">
                                <h3>{products.length !== 0 ? products[0]?.category?.name : undefined}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb_block">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        {
                            mainCategory ?
                                <li> &nbsp; {products.length !== 0 ? products[0]?.category?.name : undefined}</li>
                                :
                                <>
                                    <li> <Link onClick={() => { setMainCategory(true) }} to={`/shop/${products[0]?.category?.id}/`}> &nbsp; {products.length !== 0 ? products[0]?.category?.name : undefined}</Link></li>
                                    <li> &nbsp; {products.length !== 0 ? products[0]?.sub_category_name : undefined}</li>
                                </>
                        }
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
                                        <div className={classes.root}
                                        >
                                            <Slider
                                                value={priceValue}
                                                min={100}
                                                max={1000}
                                                valueLabelDisplay='auto'
                                                onChange={handePriceFilterChange}
                                                classes={{
                                                    thumb: classes.thumb,
                                                    rail: classes.rail,
                                                    track: classes.track
                                                }}
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div className="product_block">
                                    <div className="sidebar_heading">
                                        <h3>Select Category</h3>
                                    </div>
                                    <div className="ds_progress_rangeslider Range_slider">
                                        <div>
                                            <Checkcatradio products={products} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">

                            <div className="product_list_section">
                                <div className="product_list_filter">
                                    <ul>

                                        <li>
                                            <select onChange={handleSelectChange}>
                                                <option value="popularity">sort by popularity</option>
                                                <option value="price">sort by price </option>
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
                                {/* <InfiniteScroll
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
                                > */}
                                <div id='products_list' className={productView !== 'list' ? "product_items_section product_list_view" : "product_items_section"}>
                                    <ul>
                                        {applyFilter ?
                                            filterData.length !== 0 ? productFilterList : "no data found" :
                                            productList
                                        }
                                    </ul>
                                </div>
                                {/* </InfiniteScroll> */}
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
        mainCategory: state.shop.mainCategory,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setProducts: (product) => dispatch(setProducts(product)),
        setMainCategory: (boolean) => dispatch(setMainCategory(boolean))

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);