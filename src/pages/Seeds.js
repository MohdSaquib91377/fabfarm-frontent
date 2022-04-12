import React from 'react';
import { addToCart } from '../redux/actions/productActions';
import { connect } from 'react-redux';
const Seeds = ({ products, addToCart }) => {
    const seedList = products.map((product, i) => {
        const { id, image, title, description, Qty: { first_otp, second_otp }, price } = product;
        return (
            <div className="col" key={i}>
                <div className="prodView">
                    <img src={process.env.PUBLIC_URL + image} alt={title} />
                    <h3>{title}</h3>
                    <p>
                        {description}
                    </p>
                </div>
                <div className="requiredQty">
                    <label>Qty</label>
                    <select>
                        <option>{first_otp}</option>
                        <option>{second_otp}</option>
                    </select>
                </div>
                <div className="prodPrice">
                    <h4>₹ {price}</h4>
                </div>
                <hr />
                <div className="addCart">
                    <button onClick={() => addToCart(id)}>ADD TO CART</button>
                </div>
            </div>
        );
    })
    return (
        <section className="container">
            <div className="seedsGrid">
                <div className="inner">
                    <div className="figArt">
                        <div className="col">
                            <div className="fig">
                                <img src={process.env.PUBLIC_URL + "images/icons/flax-seed-XL.png"} alt="" />
                            </div>
                            <hr />
                            <div className="art">
                                <h3>
                                    Seeds
                                </h3>
                            </div>
                        </div>
                        <div className="col">
                            <div className="fig">
                                <img src={process.env.PUBLIC_URL + "images/icons/fertilizer-XL.png"} alt="" />
                            </div>
                            <hr />

                            <div className="art">
                                <h3>
                                    Fertilizers
                                </h3>
                            </div>
                        </div>
                        <div className="col">
                            <div className="fig">
                                <img src={process.env.PUBLIC_URL + "images/icons/planting-XL.png"} alt="" />
                            </div>
                            <hr />

                            <div className="art">
                                <h3>
                                    Types of soil
                                </h3>
                            </div>
                        </div>
                        <div className="col">
                            <div className="fig">
                                <img src={process.env.PUBLIC_URL + "images/icons/soil-testing.png"} alt="" />
                            </div>
                            <hr />

                            <div className="art">
                                <h3>
                                    Soil Testing
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="breadcrumb">
                        <a href="#">shop</a>/<a>seeds</a>
                    </div>
                </div>
            </div>
            <div className="productList">
                <div className="inner">
                    <div className="prodSearch snd-right">
                        <input type="text" placeholder="Search" />
                        <button type="submit">
                            {/* <!-- <img src={process.env.PUBLIC_URL +"images/icons/search-sm.png"}> --> */}
                        </button>
                    </div>
                    <div className="snd-clear"></div>

                    <div className="productGrid">
                        {seedList}
                    </div>
                    <div className="buttonMore">
                        <a href="#">
                            show more+
                        </a>
                    </div>
                </div>
            </div>

        </section>
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