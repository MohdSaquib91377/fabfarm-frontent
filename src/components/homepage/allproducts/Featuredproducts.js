import axios from '../../API/axios';
import React, { useEffect, useState } from 'react'
import './product.css'
import { useNavigate } from 'react-router-dom';
import { setMainCategory, setProducts } from '../../../redux/actions/productActions';
import { connect } from 'react-redux';
import Basiccarousel from '../../util/productstemplates/Basiccarousel';
const Featuredproducts = ({ setProducts, setMainCategory }) => {
    let Navigate = useNavigate();
    const [featuredproducts, setFeaturedProducts] = useState([]);
    const [allCatProducts, setAllCatProducts] = useState([]);

    const viewMoreButton = (id, products) => {
        setProducts(products)
        setMainCategory(false)
        Navigate(`/shop/${products[0]?.category?.id}/${id}`)
    }

    useEffect(() => {
        const fecthFeaturedProducts = async () => {
            try {
                const res = await axios.get('/api/v1/store/category-product/')
                setFeaturedProducts(res.data)
            } catch (error) {
                console(error)
            }
        }
        fecthFeaturedProducts();
    }, [])
    useEffect(() => {
        let mounted = true;
        if (mounted) {
            featuredproducts.map((content) => {
                const { products } = content;
                return products.map(items => {
                    return setAllCatProducts(allCatProducts => [...allCatProducts, items])
                })
            })
        }
        return () => {
            mounted = false;
        }
    }, [featuredproducts])
    useEffect(() => {
        if (allCatProducts.length !== 0) {
            setProducts(allCatProducts)
        }
    }, [allCatProducts])
    return (
        <div className="garden_about_wrapper clv_section">
            <div className="container pageTitle">
                {featuredproducts.map((allproducts, i) => {
                    const { id, name, products } = allproducts;
                    return (
                        <div key={i} style={{
                            marginTop: '30px'
                        }}>
                            <h3>{name}</h3>
                            <Basiccarousel products={products} />
                            <button
                                style={{
                                    position: 'relative',
                                    float: 'right'
                                }}
                                onClick={() => viewMoreButton(id, products)}>
                                View more
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        setProducts: (products) => dispatch(setProducts(products)),
        setMainCategory: (boolean) => dispatch(setMainCategory(boolean))
    }
}

export default connect(null, mapDispatchToProps)(Featuredproducts)