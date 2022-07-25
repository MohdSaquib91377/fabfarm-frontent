import React from 'react'

const Productdetails = () => {
    return (
        <section className="container">
            <div className="productDetails">
                <div className="inner">
                    <div className="surrounder">
                        <div className="fig">
                            <img src={process.env.PUBLIC_URL + "/images/product/pumpkin.png"} alt="" />
                        </div>
                        <div className="art">
                            <h2>Pumpkin seeds</h2>
                            <h3>Flare Seeds Seeds Rare Pumpkin Seeds For<br /> Home Gardening 20 Exotic Seeds Pack Seed</h3>
                            <div className="requiredQty">
                                <label>Qty</label>
                                <select>
                                    <option>500gm</option>
                                    <option>600gm</option>
                                </select>
                            </div>
                            <div className="prodPrice">
                                <h4>₹ 300</h4>
                            </div>
                            <div className="addCart">
                                <a href="#">ADD TO CART</a>
                            </div>
                            <div className="description">
                                <h5>Description:</h5>
                                <p>
                                    SOW SEEDS DIRECTLY 5-6 INCHES APART IN ROWS IN WELL MANURED SOIL . SHOULD BE FREELY WATERED IN DRY WEATHER. FLOWERS, FRUITS, VEGETABLES AND PLANTS NEEDS GOOD SOIL IN ORDER TO GROW UP STRONG AND HEALTHY.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="highlights">
                        <h4>Highlights</h4>
                        <div className="insider">
                            <p>Seed Type: Vegetable</p>
                            <p>Suitable For: Outdoor</p>
                            <p>Organic Plant Seed</p>
                            <p> Seed For: SEEDS Rare Pumpkin Seeds For Home Gardening 20 Exotic Seeds Pack</p>
                            <p>Quantity: 500 gm</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productSimalar productList">
                <div className="inner">
                    <h2>Similar Products</h2>
                    <div className="productGrid">
                        <div className="col">
                            <div className="prodView">
                                <img src={process.env.PUBLIC_URL + "/images/thumb/pumpkin-seeds.jpg"} />
                                <h3>Pumpkin seeds</h3>
                                <p>
                                    Flare Seeds Seeds Rare Spinsh Seeds For Home Gardening 20 Exotic Seeds Pack Seed
                                </p>
                            </div>
                            <div className="requiredQty">
                                <label>Qty</label>
                                <select>
                                    <option>500gm</option>
                                    <option>600gm</option>
                                </select>
                            </div>
                            <div className="prodPrice">
                                <h4>₹ 300</h4>
                            </div>
                            <hr />
                            <div className="addCart">
                                <a href="#">ADD TO CART</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="prodView">
                                <img src={process.env.PUBLIC_URL + "/images/thumb/spinach-seeds.jpg"} />
                                <h3>Spinach Seeds / Palak Seeds</h3>
                                <p>
                                    Flare Seeds Seeds Rare Pumpkin Seeds For Home Gardening 20 Exotic Seeds Pack Seed
                                </p>
                            </div>
                            <div className="requiredQty">
                                <label>Qty</label>
                                <select>
                                    <option>500gm</option>
                                    <option>600gm</option>
                                </select>
                            </div>
                            <div className="prodPrice">
                                <h4>₹ 300</h4>
                            </div>
                            <hr />
                            <div className="addCart">
                                <a href="#">ADD TO CART</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="prodView">
                                <img src={process.env.PUBLIC_URL + "/images/thumb/capsicum-green.jpg"} />
                                <h3>Capsicum Green Vegetable seeds</h3>
                                <p>
                                    Floriculture Greens Seeds Plants Garden Capsicum Green Organic Vegetable F1 Hybrid Seeds Pack Seed
                                </p>
                            </div>
                            <div className="requiredQty">
                                <label>Qty</label>
                                <select>
                                    <option>500gm</option>
                                    <option>600gm</option>
                                </select>
                            </div>
                            <div className="prodPrice">
                                <h4>₹ 300</h4>
                            </div>
                            <hr />
                            <div className="addCart">
                                <a href="#">ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Productdetails