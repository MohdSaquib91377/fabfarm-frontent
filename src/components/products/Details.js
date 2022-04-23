import React, { useState } from 'react'

const Details = () => {
    const [detailsState, setDetailsState] = useState('product-desc');
    return (
        <>
            <div className="product-details-tab-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product-details-content">
                                <ul className="tablist tablist--style-black tablist--style-title tablist--style-gap-30 nav">
                                    <li><button className={detailsState == 'product-desc' ? 'nav-link active' : 'nav-link'} onClick={() => setDetailsState('product-desc')}>Description</button></li>
                                    <li><button className={detailsState == 'product-dis' ? 'nav-link active' : 'nav-link'} onClick={() => setDetailsState('product-dis')}>Product Details</button></li>
                                    <li><button className={detailsState == 'product-review' ? 'nav-link active' : 'nav-link'} onClick={() => setDetailsState('product-review')}>Reviews</button></li>
                                </ul>
                                <div className="product-details-tab-box">
                                    <div className="tab-content">
                                        {/* Start Tab -  Product Description */}
                                        <div className={detailsState == 'product-desc' ? 'tab-pane show active' : 'tab-pane'} id="product-desc">
                                            <div className="para__content">
                                                <p className="para__text">Use the Canon VIXIA GX10 Camcorder to capture UHD 4K video at 60 fps, recording in MP4 to dual SD memory card slots. This camcorder packs several pro-style features into its compact form, including Dual-Pixel Autofocus (DPAF). The GX10's 1" 8.29MP CMOS sensor and dual DIGIC DV 6 image processors support Wide DR Gamma with high sensitivity and low noise. Slow and fast-motion recording up to 120 fps offers special looks for highlighting sports and other special events. Smooth, steady shooting is assisted by the GX10's five-axis optical image stabilization. For composing and viewing your footage, the VIXIA GX10 incorporates a flip-out 3.5" touchscreen LCD, and a 0.24" electronic viewfinder. </p>
                                                <p className="para__text">Additional GX10 features include an HDMI 2.0 port for outputting your 4K UHD footage, assignable user buttons, and remote control using the included WL-D89 controller. Wi-Fi connectivity offers live streaming, FTP file sharing, and remote control via iOS and Android apps.</p>
                                                <h6 className="para__title">Product Highlights:</h6>
                                                <ul className="para__list">
                                                    <li>UHD 4K Output up to 60 fps</li>
                                                    <li>8.29MP, 1" CMOS Sensor</li>
                                                    <li>Dual-Pixel CMOS Autofocus Feature</li>
                                                    <li>Integrated 15x Optical Zoom Lens</li>
                                                    <li>2 x DIGIC DV 6 Processors</li>
                                                    <li>5-Axis Optical Image Stabilization</li>
                                                    <li>Wide Dynamic Range Support</li>
                                                    <li>Records 4K UHD/HD to Dual SD Card Slots</li>
                                                    <li>3.5" Touchscreen LCD &amp; 0.24" EVF</li>
                                                    <li>Live Stream/FTP/Remote App via Wi-Fi</li>
                                                </ul>
                                            </div>
                                        </div>  {/* End Tab - Product Description */}

                                        {/* Start Tab - Product Details */}
                                        <div className={detailsState == 'product-dis' ? 'tab-pane show active' : 'tab-pane'} id="product-dis">
                                            <div className="product-dis__content">
                                                <a href="#" className="product-dis__img m-b-30"><img src="assets/img/logo/another-logo.jpg" alt="" /></a>
                                                <div className="table-responsive-md">
                                                    <table className="product-dis__list table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td className="product-dis__title">Weight</td>
                                                                <td className="product-dis__text">400 g</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="product-dis__title">Materials</td>
                                                                <td className="product-dis__text">60% cotton, 40% polyester</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="product-dis__title">Dimensions</td>
                                                                <td className="product-dis__text">10 x 10 x 15 cm</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="product-dis__title">Other Info</td>
                                                                <td className="product-dis__text">American heirloom jean shorts pug seitan letterpress</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>  {/* End Tab - Product Details */}

                                        {/* Start Tab - Product Review */}
                                        <div className={detailsState == 'product-review' ? 'tab-pane show active' : 'tab-pane'} id="product-review">
                                            {/* Start - Review Comment */}
                                            <ul className="comment">
                                                {/* Start - Review Comment list*/}
                                                <li className="comment__list">
                                                    <div className="comment__wrapper">
                                                        <div className="comment__img">
                                                            <img src="assets/img/user/image-1.png" alt="" />
                                                        </div>
                                                        <div className="comment__content">
                                                            <div className="comment__content-top">
                                                                <div className="comment__content-left">
                                                                    <h6 className="comment__name">Kaedyn Fraser</h6>
                                                                    <ul className="product__review">
                                                                        <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                        <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                        <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                        <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                        <li className="product__review--blank"><i className="icon-star"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="comment__content-right">
                                                                    <a href="#" className="link--gray link--icon-left m-b-5"><i className="fas fa-reply"></i>Reply</a>
                                                                </div>
                                                            </div>

                                                            <div className="para__content">
                                                                <p className="para__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Start - Review Comment Reply*/}
                                                    <ul className="comment__reply">
                                                        <li className="comment__reply-list">
                                                            <div className="comment__wrapper">
                                                                <div className="comment__img">
                                                                    <img src="assets/img/user/image-2.png" alt="" />
                                                                </div>
                                                                <div className="comment__content">
                                                                    <div className="comment__content-top">
                                                                        <div className="comment__content-left">
                                                                            <h6 className="comment__name">Oaklee Odom</h6>
                                                                        </div>
                                                                        <div className="comment__content-right">
                                                                            <a href="#" className="link--gray link--icon-left m-b-5"><i className="fas fa-reply"></i>Reply</a>
                                                                        </div>
                                                                    </div>

                                                                    <div className="para__content">
                                                                        <p className="para__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat. </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul> {/* End - Review Comment Reply*/}
                                                </li> {/* End - Review Comment list*/}
                                                {/* Start - Review Comment list*/}
                                                <li className="comment__list">
                                                    <div className="comment__wrapper">
                                                        <div className="comment__img">
                                                            <img src="assets/img/user/image-3.png" alt="" />
                                                        </div>
                                                        <div className="comment__content">
                                                            <div className="comment__content-top">
                                                                <div className="comment__content-left">
                                                                    <h6 className="comment__name">Jaydin Jones</h6>
                                                                    <ul className="product__review">
                                                                        <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                        <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                        <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                        <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                        <li className="product__review--blank"><i className="icon-star"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="comment__content-right">
                                                                    <a href="#" className="link--gray link--icon-left m-b-5"><i className="fas fa-reply"></i>Reply</a>
                                                                </div>
                                                            </div>

                                                            <div className="para__content">
                                                                <p className="para__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li> {/* End - Review Comment list*/}
                                            </ul>  {/* End - Review Comment */}

                                            {/* Start Add Review Form*/}
                                            <div className="review-form m-t-40">
                                                <div className="section-content">
                                                    <h6 className="font--bold text-uppercase">ADD A REVIEW</h6>
                                                    <p className="section-content__desc">Your email address will not be published. Required fields are marked *</p>
                                                </div>
                                                <form className="form-box" action="#" method="post">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-box__single-group">
                                                                <label htmlFor="form-name">Your Rating*</label>
                                                                <ul className="product__review">
                                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                    <li className="product__review--fill"><i className="icon-star"></i></li>
                                                                    <li className="product__review--blank"><i className="icon-star"></i></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-box__single-group">
                                                                <label htmlFor="form-name">Your Name*</label>
                                                                <input type="text" id="form-name" placeholder="Enter your name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-box__single-group">
                                                                <label htmlFor="form-email">Your Email*</label>
                                                                <input type="email" id="form-email" placeholder="Enter your email" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-box__single-group">
                                                                <label htmlFor="form-review">Your review*</label>
                                                                <textarea id="form-review" rows="8" placeholder="Write a review"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <button className="btn btn--box btn--small btn--black btn--black-hover-green btn--uppercase font--bold m-t-30" type="submit">Submit</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div> {/* End Add Review Form- */}
                                        </div>  {/* Start Tab - Product Review */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details