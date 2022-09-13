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
    const [applyFilter, setApplyFilter] = useState(false);
    // const [page, setPage] = useState(2);
    const [loader, setLoader] = useState(false);
    // const [minPrice, setMinPrice] = useState(0)
    // const [maxPrice, setMaxPrice] = useState(5000)
    const [priceValue, setPriceValue] = useState([0, 5000])
    const [searchText, setSearchText] = useState('')
    const sortByInitialValues = {
        sortPriceLowToHigh: false,
        sortPriceHighToLow: false,
        sortByPopularity: false
    }
    const [selectedSortMethod, setSelectedSortMethod] = useState(sortByInitialValues)
    Tabtitle('FAB | Shop')
    const banner = useBannerImages('shop')
    const handleFilter = (event) => {
        setApplyFilter(!applyFilter)
        setSearchText(event.target.value)
    }
    const handePriceFilterChange = (event, value) => {
        setApplyFilter(!applyFilter)
        setPriceValue(value);
    }
    const handleSelectChange = (event) => {
        setApplyFilter(!applyFilter)
        setSelectedSortMethod({ ...sortByInitialValues, [event.target.value]: true })
    }
    const handlePriceRange = index => e => {
        let newAr = [...priceValue];
        newAr[index] = e.target.value;
        setPriceValue(newAr)
        setApplyFilter(!applyFilter)
    }
    useEffect(() => {
        let isMounted = true
        const { sortPriceLowToHigh, sortPriceHighToLow, sortByPopularity } = selectedSortMethod;
        setLoader(true)
        setTimeout(() => {
            if (isMounted) {
                setProducts([])
                mainCategory ?
                    axios.get(`/api/v1/search/product/?search=${searchText}&category_id=${categoryId}&min_price=${priceValue[0]}&max_price=${priceValue[1]}&sort_by_asec=${sortPriceLowToHigh}&sort_by_desc=${sortPriceHighToLow}&sort_by_popularity=${sortByPopularity}`)
                        .then(response => {
                            setProducts(response.data)
                            setLoader(false)
                        })
                        .catch(error => {
                            throw error
                        })
                    :
                    axios.get(`/api/v1/search/product/?search=${searchText}&sub_category_id=${subCategoryID}&min_price=${priceValue[0]}&max_price=${priceValue[1]}&sort_by_asec=${sortPriceLowToHigh}&sort_by_desc=${sortPriceHighToLow}&sort_by_popularity=${sortByPopularity}`)
                        .then(response => {
                            setProducts(response.data)
                            setLoader(false)
                        })
                        .catch(error => {
                            throw error;
                        })
            }
        }, 1000)

        return () => {
            isMounted = false
        }
    }, [mainCategory, categoryId, subCategoryID, applyFilter])

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
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-12  my-3">
                        <p className='m-0'>
                            <span className='breadcrum-width-dot'><Link to='/'>Home </Link>  </span>

                            {
                                mainCategory ?
                                    <>
                                        <span className='breadcrum-width-dot'>&nbsp;{'>'}&nbsp;</span>
                                        <span className='breadcrum-width-dot maibn'>&nbsp; {products.length !== 0 ? products[0]?.category?.name : undefined} </span>
                                    </>
                                    :
                                    <>

                                        <span className='breadcrum-width-dot'>&nbsp;{'>'}&nbsp;</span>
                                        <span className='breadcrum-width-dot'> <Link onClick={() => { setMainCategory(true) }} to={`/shop/${products[0]?.category?.id}/`}> &nbsp; {products.length !== 0 ? products[0]?.category?.name : undefined}</Link></span>
                                        <span className='breadcrum-width-dot'>&nbsp;{'>'}&nbsp;</span>
                                        <span className='breadcrum-width-dot subbb'> &nbsp; {products.length !== 0 ? products[0]?.sub_category.name : undefined}</span>
                                    </>
                            }

                        </p>
                    </div>
                </div>
            </div>
            {/* <!--Produst List--> */}
            <div className="products_wrapper clv_section pt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 position-relative">
                            <div className="product_sidebar">
                                <div className="product_block">
                                    <div className="sidebar_heading">
                                        <select onChange={handleSelectChange}>
                                            <option selected disabled>Sort </option>
                                            <option value='sortPriceLowToHigh'>Price Low To High </option>
                                            <option value='sortPriceHighToLow'>Price High To Low </option>
                                            <option value='sortByPopularity'>Popularity </option>
                                            {/* <option value="sort by category">Sort by Category</option> */}
                                        </select>
                                    </div>
                                    <div className="sidebar_heading">
                                        <h3>filter by price</h3>
                                    </div>
                                    <div className="ds_progress_rangeslider Range_slider">
                                        <div className={classes.root}
                                        >
                                            <Slider
                                                value={priceValue}
                                                min={0}
                                                max={5000}
                                                valueLabelDisplay='auto'
                                                onChange={handePriceFilterChange}
                                                classes={{
                                                    thumb: classes.thumb,
                                                    rail: classes.rail,
                                                    track: classes.track
                                                }}
                                            />
                                        </div>
                                        <div className='Range_slider_fields'>
                                            <input
                                                type='number'
                                                placeholder='min'
                                                name='minPrice'
                                                onChange={handlePriceRange(0)}
                                                value={priceValue[0]}
                                            />
                                            <input
                                                type='number'
                                                placeholder='max'
                                                name='maxPrice'
                                                onChange={handlePriceRange(1)}
                                                value={priceValue[1]}
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
                                        {
                                            loader ?
                                                <div>Loading...</div>
                                                :
                                                products.length !== 0 ?
                                                    products.map((product, i) => {
                                                        return (
                                                            <Productcomponent key={i} product={product} i={i} categoryId={categoryId} />
                                                        );
                                                    })
                                                    :
                                                    <div style={{fontSize:"20px"}}>No data Found</div>
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