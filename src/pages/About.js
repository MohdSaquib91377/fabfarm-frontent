import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tabtitle from "./Tabtitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import useBannerImages from "../hooks/useBannerImages";
import Abouttestimonial from "../components/about/Abouttestimonial";
import Videopopup from "../components/about/Videopopup";
const About = () => {
  Tabtitle("FAB | About us");
  const banner = useBannerImages("about");
  const [videoPopup, setVideoPopup] = useState(false);
  return (
    <>
      {/* <!--Breadcrumb--> */}
      <div
        className="breadcrumb_wrapper"
        style={{
          minHeight: "250px",
          backgroundImage: `url(${banner[0]?.image_or_video})`,
        }}
      >
        <div className="container" style={{ marginTop: "130px" }}>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="breadcrumb_inner">
                <h3>about us</h3>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="breadcrumb_block">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li>about us</li>
                    </ul>
                </div> */}
      </div>
      {/* <!--About Section--> */}
      <div className="container ">
        <div className="row">
          <div className="col-12  my-3">
            <p className="m-0">
              <span className="breadcrum-width-dot">
                <Link to="/">Home </Link>{" "}
              </span>
              <span className="breadcrum-width-dot">&nbsp;{">"}&nbsp;</span>
              <span className="breadcrum-width-dot">About </span>
            </p>
          </div>
        </div>
      </div>
      <div className="clv_about_wrapper clv_section pt-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_img">
                <img src="/images/hands-g0eecfe8b7_640.jpg" alt="image" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_content">
                <div className="about_heading">
                  <h2>
                    Welcome to Our <span>IICARE</span>
                  </h2>
                  <h6>
                    INTERNATIONAL INSTITUTE FOR CLIMATE ACTION AND RENEWED EARTH
                  </h6>
                  <div className="clv_underline">
                    <img src="/images/underline.png" alt="image" />
                  </div>
                </div>
                <p>
                  iiCARE, with an expansive vision of “Bring acceleration to
                  planet preservation and innovation to forestall climate
                  change”, strives to partner with organisations and climate
                  enthusiasts to co-design and implement end to end nature-based
                  solutions to reduce and mitigate GHG emissions in alignment
                  with the United Nations Sustainable Development Goals.
                </p>
                <div className="video_block">
                  <div className="video_btn">
                    <button
                      onClick={() => setVideoPopup(true)}
                      className="play_video"
                    >
                      <span className="pulse">
                        <FontAwesomeIcon icon={faPlay} />
                      </span>{" "}
                      watch video
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Testimonial--> */}

      <div className="clv_testimonial_wrapper clv_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="clv_heading white_heading">
                <h3>what people say about us</h3>
                <div className="clv_underline">
                  <img src="/images/underline2.png" alt="image" />
                </div>
                <p>
                  Consectetur adipisicing elit sed do eiusmod tempor incididunt
                  ut labore et dole magna aliqua. Ut enim ad minim veniam quis
                  nostrud exercitation.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="testimonial_slider">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <Abouttestimonial />
                  </div>
                  {/* <!-- Add Arrows --> */}
                  <span className="slider_arrow testimonial_left left_arrow">
                    <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                  </span>
                  <span className="slider_arrow testimonial_right right_arrow">
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Videopopup
        videoPopup={videoPopup}
        setVideoPopup={() => setVideoPopup(false)}
      />
    </>
  );
};

export default About;
