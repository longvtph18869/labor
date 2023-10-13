import React, { useState } from "react";
import Heading from "../uiStyle/Heading";
import Swiper from "react-id-swiper";

import fnewsImg2 from "../../doc/img/feature/may.jpg";
import fnewsImg3 from "../../doc/img/feature/feature3.jpg";
import fnewsImg4 from "../../doc/img/feature/feature4.jpg";
import { Link } from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";

const news1 = [
  {
    image: fnewsImg2,
    category: "Chế biến thực phẩm",
    count: "50 nữ",
    address: "Tokyo, Nhật Bản",
    luong: "15 man (Cam kết, Khoảng 25 trđ/tháng)",
    time: "3 năm",
  },
  {
    image: fnewsImg2,
    category: "Chế biến thực phẩm",
    count: "50 nữ",
    address: "Tokyo, Nhật Bản",
    luong: "15 man (Cam kết, Khoảng 25 trđ/tháng)",
    time: "3 năm",
  },
  {
    image: fnewsImg2,
    category: "Chế biến thực phẩm",
    count: "50 nữ",
    address: "Tokyo, Nhật Bản",
    luong: "15 man (Cam kết, Khoảng 25 trđ/tháng)",
    time: "3 năm",
  },
  {
    image: fnewsImg2,
    category: "Chế biến thực phẩm",
    count: "50 nữ",
    address: "Tokyo, Nhật Bản",
    luong: "15 man (Cam kết, Khoảng 25 trđ/tháng)",
    time: "3 năm",
  },
];

const news = [
  {
    image:
      "https://images.pexels.com/photos/356269/pexels-photo-356269.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "XKLĐ Nhật Bản",
  },
  {
    image:
      "https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "XKLĐ Hàn Quốc",
  },
  {
    image:
      "https://images.pexels.com/photos/18276983/pexels-photo-18276983/free-photo-of-c-u-xe-l-a-ph-ng-ti-n-cong-c-ng-d-i.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "XKLĐ Đài Loan",
  },
  {
    image:
      "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "XKLĐ Singapore",
  },
  {
    image:
      "https://images.pexels.com/photos/18250812/pexels-photo-18250812/free-photo-of-m-c-toa-nha-cay-c.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "XKLĐ Ba Lan",
  },
  {
    image:
      "https://images.pexels.com/photos/814760/pexels-photo-814760.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "XKLĐ Belarus",
  },
];
const news2 = [
  {
    image:
      "https://images.pexels.com/photos/380707/pexels-photo-380707.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Du học Hàn Quốc",
  },
  {
    image:
      "https://images.pexels.com/photos/1325837/pexels-photo-1325837.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Du học Nhật Bản",
  },
  {
    image:
      "https://images.pexels.com/photos/3073037/pexels-photo-3073037.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Du học Đài Loan",
  },
  {
    image:
      "https://images.pexels.com/photos/1057840/pexels-photo-1057840.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Du học Đức",
  },
];
const FeatureNews = ({ className }) => {
  const [swiper, setSwiper] = useState(null);

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
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  };
  return (
    <>
      <div
        className={`feature_carousel_area mt30 mb40 ${
          className ? className : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="container section-title-container">
                <h2 className="section-title section-title-center">
                  <b></b>
                  <span className="section-title-main">
                    XUẤT KHẨU LAO ĐỘNG Ở ĐÂU?
                  </span>
                  <b></b>
                </h2>
                <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                  Chúng tôi sẽ giúp bạn lựa chọn được nước đi XKLĐ nhanh gọn và
                  thuận tiện nhất!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/*CAROUSEL START*/}
              <div className="feature_carousel nav_style2">
                <Swiper
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  getSwiper={setSwiper}
                  {...params}
                >
                  {news.map((item, i) => (
                    <div key={i} className="single_post post_type3">
                      <div className="post_img">
                        <div className="img_wrap">
                          <img src={item.image} alt="thumb" />
                        </div>
                      </div>
                      <div
                        className="single_post_text"
                        style={{ padding: "10px" }}
                      >
                        <div className="meta3" style={{ textAlign: "center" }}>
                          <h3 style={{ fontSize: "15px" }} to="/">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </Swiper>
                {/* <div className="owl-nav">
                  <div onClick={goPrev} className="owl-prev">
                    <FontAwesome name="angle-left" />
                  </div>
                  <div onClick={goNext} className="owl-next">
                    <FontAwesome name="angle-right" />
                  </div>
                </div> */}
              </div>
              {/*CAROUSEL END*/}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`feature_carousel_area mt30 mb40 ${
          className ? className : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="container section-title-container">
                <h2 className="section-title section-title-center">
                  <b></b>
                  <span className="section-title-main">
                    ĐIỂM ĐẾN DU HỌC HÀNG ĐẦU?
                  </span>
                  <b></b>
                </h2>
                <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                  Chúng tôi sẽ giúp bạn lựa chọn được điểm đến & lộ trình học
                  tập phù hợp nhất!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/*CAROUSEL START*/}
              <div className="feature_carousel nav_style2">
                <Swiper getSwiper={setSwiper} {...params}>
                  {news2.map((item, i) => (
                    <div key={i} className="single_post post_type3">
                      <div className="post_img">
                        <div className="img_wrap">
                          <img src={item.image} alt="thumb" />
                        </div>
                      </div>
                      <div
                        className="single_post_text"
                        style={{ padding: "10px" }}
                      >
                        <div className="meta3" style={{ textAlign: "center" }}>
                          <h3 style={{ fontSize: "15px" }} to="/">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </Swiper>
                {/* <div className="owl-nav">
                  <div onClick={goPrev} className="owl-prev">
                    <FontAwesome name="angle-left" />
                  </div>
                  <div onClick={goNext} className="owl-next">
                    <FontAwesome name="angle-right" />
                  </div>
                </div> */}
              </div>
              {/*CAROUSEL END*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureNews;
