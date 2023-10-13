import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import hside4 from "../../doc/img/header/slider/hside4.jpg";
import hside5 from "../../doc/img/header/slider/hside5.jpg";
import hside6 from "../../doc/img/header/slider/hside6.jpg";
import hside1 from "../../doc/img/header/slider/hside1.jpg";
import hside2 from "../../doc/img/header/slider/hside2.jpg";
import hside3 from "../../doc/img/header/slider/hside3.jpg";
import FontAwesome from "../uiStyle/FontAwesome";

const postSlider = [
  {
    title:
      "Tư vấn trực tiếp từ Tổng Giám đốc Lê Long Sơn: chọn ngành - chọn nghề - chọn nơi làm việc",
    body: "People have been infected",
    date: new Date(),
    image: hside1,
  },
  {
    title:
      "Tư vấn trực tiếp từ Tổng Giám đốc Lê Long Sơn: chọn ngành - chọn nghề - chọn nơi làm việc",
    body: "People have been infected",
    date: new Date(),
    image: hside2,
  },
  {
    title:
      "Tư vấn trực tiếp từ Tổng Giám đốc Lê Long Sơn: chọn ngành - chọn nghề - chọn nơi làm việc",
    body: "People have been infected",
    date: new Date(),
    image: hside3,
  },
  {
    title:
      "Tư vấn trực tiếp từ Tổng Giám đốc Lê Long Sơn: chọn ngành - chọn nghề - chọn nơi làm việc",
    body: "People have been infected",
    date: new Date(),
    image: hside4,
  },
  {
    title:
      "Tư vấn trực tiếp từ Tổng Giám đốc Lê Long Sơn: chọn ngành - chọn nghề - chọn nơi làm việc",
    body: "People have been infected",
    date: new Date(),
    image: hside5,
  },
  {
    title:
      "Tư vấn trực tiếp từ Tổng Giám đốc Lê Long Sơn: chọn ngành - chọn nghề - chọn nơi làm việc",
    body: "People have been infected",
    date: new Date(),
    image: hside6,
  },
];

const PostCarousel = ({ className }) => {
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
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  };
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  return (
    <div className={className ? className : ""}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="carousel_posts1 owl-carousel nav_style2 mb20 mt20">
              {/*CAROUSEL START*/}
              <div className="position-relative">
                <Swiper
                  getSwiper={setSwiper}
                  className="trancarousel"
                  {...params}
                >
                  {postSlider.map((item, i) => (
                    <div
                      key={i}
                      className="single_post widgets_small post_type5"
                    >
                      <div className="post_img">
                        <div className="img_wrap">
                          <Link to="/">
                            <img src={item.image} alt="slider5" />
                          </Link>
                        </div>
                      </div>
                      <div
                        className="single_post_text"
                        style={{ marginLeft: "15px" }}
                      >
                        <p>{formatDate(item.date)}</p>
                        <h4>
                          <Link to="/post1">{item.title.slice(0, 65)}...</Link>
                        </h4>
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
            </div>
            {/*CAROUSEL END*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCarousel;
