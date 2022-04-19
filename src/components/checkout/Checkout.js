import React from 'react'

const Checkout = () => {
    return (
        <main id="main-container" className="main-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="section-content">
                            <h5 className="section-content__title">Billing Details</h5>
                        </div>
                        <form action="#" method="post" className="form-box">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-box__single-group">
                                        <label for="form-first-name">First Name</label>
                                        <input type="text" id="form-first-name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-box__single-group">
                                        <label for="form-last-name">Last Name</label>
                                        <input type="text" id="form-last-name" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-box__single-group">
                                        <label for="form-company-name">Company Name</label>
                                        <input type="text" id="form-company-name" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-box__single-group">
                                        <label for="form-country">* Country</label>
                                        <select id="form-country">
                                            <option value="select-country" selected>Select a country</option>
                                            <option value="BD">Bangladesh</option>
                                            <option value="US">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="TR">Turkey</option>
                                            <option value="CA">Canada</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-box__single-group">
                                        <label for="form-address-1">Street Address</label>
                                        <input type="text" id="form-address-1" placeholder="House number and street name" />
                                        <input type="text" className="m-t-10" id="form-address-2" placeholder="Apartment, suite, unit etc." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-box__single-group">
                                        <label for="form-state">* Region / State</label>
                                        <select id="form-state">
                                            <option value="Dha" selected>Dhaka</option>
                                            <option value="Kha">Khulna</option>
                                            <option value="Raj">Rajshahi</option>
                                            <option value="Syl">Sylet</option>
                                            <option value="Chi">Chittagong</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-box__single-group">
                                        <label for="form-zipcode">* Zip/Postal Code</label>
                                        <input type="text" id="form-zipcode" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-box__single-group">
                                        <label for="form-phone">Phone</label>
                                        <input type="text" id="form-phone" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-box__single-group">
                                        <label for="form-email">Email Address</label>
                                        <input type="email" id="form-email" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="m-tb-20">
                                        <label for="check-account">
                                            <input type="checkbox" name="check-account" className="creat-account" id="check-account" />
                                            <span>Create an account?</span>
                                        </label>
                                        <div className="toogle-form open-create-account">
                                            <div className="form-box__single-group">
                                                <label for="form-email-new-account">Email Address</label>
                                                <input type="email" id="form-email-new-account" />
                                            </div>
                                            <div className="form-box__single-group">
                                                <label for="form-password-new-account">Password</label>
                                                <input type="password" id="form-password-new-account" />
                                            </div>
                                            <div className="from-box__buttons m-t-25">
                                                <button className="btn btn--box btn--small btn--radius btn--green btn--green-hover-black btn--uppercase btn--weight" type="submit">REGISTER</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-box__single-group">
                                        <h6>Additional information</h6>
                                        <label for="form-additional-info">Order notes</label>
                                        <textarea id="form-additional-info" rows="5" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="m-tb-20">
                                        <label for="shipping-account">
                                            <input type="checkbox" name="check-account" className="shipping-account" id="shipping-account" />
                                            <span>Ship to a different address?</span>
                                        </label>
                                        <div className="toogle-form open-shipping-account">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-box__single-group">
                                                        <label for="shipping-form-first-name">First Name</label>
                                                        <input type="text" id="shipping-form-first-name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-box__single-group">
                                                        <label for="shipping-form-last-name">Last Name</label>
                                                        <input type="text" id="shipping-form-last-name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-box__single-group">
                                                        <label for="shipping-form-company-name">Company Name</label>
                                                        <input type="text" id="shipping-form-company-name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-box__single-group">
                                                        <label for="shipping-form-country">* Country</label>
                                                        <select id="shipping-form-country">
                                                            <option value="select-country" selected>Select a country</option>
                                                            <option value="BD">Bangladesh</option>
                                                            <option value="US">USA</option>
                                                            <option value="UK">UK</option>
                                                            <option value="TR">Turkey</option>
                                                            <option value="CA">Canada</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-box__single-group">
                                                        <label for="shipping-form-address-1">Street Address</label>
                                                        <input type="text" id="shipping-form-address-1" placeholder="House number and street name" />
                                                        <input type="text" className="m-t-10" id="shipping-form-address-2" placeholder="Apartment, suite, unit etc." />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-box__single-group">
                                                        <label for="shipping-form-state">* Region / State</label>
                                                        <select id="shipping-form-state">
                                                            <option value="Dha" selected>Dhaka</option>
                                                            <option value="Kha">Khulna</option>
                                                            <option value="Raj">Rajshahi</option>
                                                            <option value="Syl">Sylet</option>
                                                            <option value="Chi">Chittagong</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-box__single-group">
                                                        <label for="shipping-form-zipcode">* Zip/Postal Code</label>
                                                        <input type="text" id="shipping-form-zipcode" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-box__single-group">
                                                        <label for="shipping-form-phone">Phone</label>
                                                        <input type="text" id="shipping-form-phone" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-box__single-group">
                                                        <label for="shipping-form-email">Email Address</label>
                                                        <input type="email" id="shipping-form-email" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-5">
                        <div className="your-order-section">
                            <div className="section-content">
                                <h5 className="section-content__title">Your order</h5>
                            </div>
                            <div className="your-order-box gray-bg m-t-40 m-b-30">
                                <div className="your-order-product-info">
                                    <div className="your-order-top d-flex justify-content-between">
                                        <h6 className="your-order-top-left font--bold">Product</h6>
                                        <h6 className="your-order-top-right font--bold">Total</h6>
                                    </div>
                                    <ul className="your-order-middle">
                                        <li className="d-flex justify-content-between">
                                            <span className="your-order-middle-left font--semi-bold">Product Name X 1</span>
                                            <span className="your-order-middle-right font--semi-bold">$329</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <span className="your-order-middle-left font--semi-bold">Product Name X 1</span>
                                            <span className="your-order-middle-right font--semi-bold">$329</span>
                                        </li>
                                    </ul>
                                    <div className="your-order-bottom d-flex justify-content-between">
                                        <h6 className="your-order-bottom-left font--bold">Shipping</h6>
                                        <span className="your-order-bottom-right font--semi-bold">Free shipping</span>
                                    </div>
                                    <div className="your-order-total d-flex justify-content-between">
                                        <h5 className="your-order-total-left font--bold">Total</h5>
                                        <h5 className="your-order-total-right font--bold">$329</h5>
                                    </div>

                                    <div className="payment-method">
                                        <div className="payment-accordion element-mrg">
                                            <div className="panel-group" id="accordion">
                                                <div className="panel payment-accordion">
                                                    <div className="panel-heading" id="method-one">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse" data-parent="#accordion" href="#method1" aria-expanded="false">
                                                                Direct bank transfer <i className="far fa-chevron-down"></i>
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="method1" className="panel-collapse collapse">
                                                        <div className="panel-body">
                                                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel payment-accordion">
                                                    <div className="panel-heading" id="method-two">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse" data-parent="#accordion" href="#method2" aria-expanded="false">
                                                                Check payments <i className="far fa-chevron-down"></i>
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="method2" className="panel-collapse collapse" >
                                                        <div className="panel-body">
                                                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel payment-accordion">
                                                    <div className="panel-heading" id="method-three">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse" data-parent="#accordion" href="#method3" aria-expanded="false">
                                                                Cash on delivery <i className="far fa-chevron-down"></i>
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="method3" className="panel-collapse collapse">
                                                        <div className="panel-body">
                                                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn--small btn--radius btn--green btn--green-hover-black btn--uppercase font--bold" type="submit">PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Checkout