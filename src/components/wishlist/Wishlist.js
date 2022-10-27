import { faIndianRupee, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useBannerImages from "../../hooks/useBannerImages";
import Tabtitle from "../../pages/Tabtitle";
import { setPopup, setPopupMessage } from "../../redux/actions/productActions";

const Wishlist = ({ setPopup, setPopupMessage }) => {
    Tabtitle("FAB | Wish List");
    const banner = useBannerImages("wishlist");
    const axiosPrivate = useAxiosPrivate();
    const [wishlistItems, setWishlistItems] = useState([]);
    const [onclickRemove, setOnlickRemove] = useState(false);
    const [loader, setLoader] = useState(false);
    const removeItem = (id) => {
        axiosPrivate
            .delete(`/api/v1/wishlist/wishlist/add-to-wishlist/`, {
                data: {
                    product_id: id,
                },
            })
            .then(() => {
                setPopup(true)
                setPopupMessage('Product removed from wishlist')
                setOnlickRemove(!onclickRemove);
            })
            .catch((error) => {
                throw error;
            });
    };
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getWishList = async () => {
            try {
                setLoader(true)
                const response = await axiosPrivate.get(
                    "/api/v1/wishlist/wishlist/add-to-wishlist/"
                );
                isMounted && setWishlistItems(response.data);
                setLoader(false)
            } catch (error) {
                setLoader(false)
                throw error;
            }
        };
        getWishList();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [onclickRemove]);
    const wishlist = wishlistItems.map((data, i) => {
        const {
            product: { id, name, image, price, category },
        } = data;
        return (
            <div key={i} className="order_list_top wishlistListTop">
                <div
                    style={{
                        height: "100px",
                        width: "100px",
                    }}
                >
                    <Link to={`/shop/${category.id}/product/${id}`}>
                        <img
                            src={process.env.REACT_APP_BASE_URL + image[0].image}
                            alt={name}
                        />
                    </Link>
                </div>
                <Link to={`/shop/${category.id}/product/${id}`}>
                    <h6>{name}</h6>
                </Link>
                {/* <h6>price: {price}</h6> */}
                <h6>
                    <FontAwesomeIcon icon={faIndianRupee} /> {price.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}
                </h6>
                <button className="buttonViewMore" onClick={() => removeItem(id)}>
                    {/* <FontAwesomeIcon color="red" icon={faTrash} /> */}
                    Remove
                </button>
            </div>
        );
    });
    return (
        <>
            <div
                className="breadcrumb_wrapper"
                style={{
                    minHeight: "250px",
                    backgroundImage: `url(${banner[0]?.image_or_video})`,
                }}
            >
                <div className="container" style={{ marginTop: "130px" }}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="breadcrumb_inner">
                                <h3>Wish list</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="breadcrumb_block">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li> &nbsp;Wish list</li>
                    </ul>
                </div> */}
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-12  my-3">
                        <p className="m-0">
                            <span className="breadcrum-width-dot">
                                <Link to="/">Home </Link>{" "}
                            </span>
                            <span className="breadcrum-width-dot">&nbsp;{">"}&nbsp;</span>
                            <span className="breadcrum-width-dot">Wish List </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="p-3">
                    <div
                        className="parent-wishlist"
                        style={{
                            position: "unset",
                            margin: "50px auto",
                            top: "200px",
                            overflow: "auto",
                            width: "auto",
                        }}
                    >
                        {!loader ? wishlistItems.length !== 0 ? wishlist : "No items" : <FaSpinner icon="spinner" className="spinner" />}
                    </div>
                </div>
            </div>
        </>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        setPopup: (boolean) => dispatch(setPopup(boolean)),
        setPopupMessage: (string) => dispatch(setPopupMessage(string))
    }
}
export default connect(null, mapDispatchToProps)(Wishlist);
