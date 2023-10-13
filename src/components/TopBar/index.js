import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import FontAwesome from "../uiStyle/FontAwesome";

const TopBar = ({ className, dark }) => {
  const [swiper, setSwiper] = useState(null);
  const currentDate = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("vi-VN", options);
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <div className={`topbar ${className ? className : ""}`} id="top">
      <div className="container">
        <div className="row">
          <div className="col-md-8 align-self-center">
            <div className={`trancarousel_area ${dark ? "white" : ""}`}>
              <p className="trand">CÔNG TY TNHH XKLĐ & DU HỌC QUẢNG BÌNH</p>
              <div className="nav_style1">
                <Swiper
                  getSwiper={setSwiper}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  
                  className="trancarousel"
                  {...params}
                >
                  <div className="trancarousel_item">
                    <p>
                      <Link to="/">
                        'Cẩm nang' hướng dẫn 'săn' vé đi Nhật Free cùng hàng
                        ngàn
                      </Link>
                    </p>
                  </div>
                  <div className="trancarousel_item">
                    <p>
                      <Link to="/">
                        Lương lên đến 35 triệu/tháng với 183 vị trí tuyển dụng
                        làm
                      </Link>
                    </p>
                  </div>
                  <div className="trancarousel_item">
                    <p>
                      <Link to="/">
                        Chi phí Xuất khẩu lao động Nhật Bản mới nhất tại Esuhai
                      </Link>
                    </p>
                  </div>
                </Swiper>
                <div className="navBtns">
                  <button className="navBtn prevBtn" onClick={goPrev}>
                    <FontAwesome name="angle-left" />
                  </button>
                  <button className="navBtn nextBtn" onClick={goNext}>
                    <FontAwesome name="angle-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 align-self-center">
            <div className="top_date_social text-right">
              <div className={`paper_date ${dark ? "white" : ""}`}>
                <p>{formattedDate}</p>
              </div>
              <div className={`social1 ${dark ? "white" : ""}`}>
                <ul className="inline">
                  <li>
                    <Link to="#">
                      <FontAwesome name="twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FontAwesome name="facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FontAwesome name="youtube-play" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FontAwesome name="instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
