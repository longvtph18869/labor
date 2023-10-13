import React, { Component } from "react";
import { Link } from "react-router-dom";
import WidgetTab from "../WidgetTab";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import FontAwesome from "../uiStyle/FontAwesome";
import ModalVideo from "react-modal-video";

// images
import gsil1 from "../../doc/img/blog/post_gsi1.jpg";
import gsil2 from "../../doc/img/blog/post_gsi2.jpg";
import gsil3 from "../../doc/img/blog/post_gsi3.jpg";
import gsil4 from "../../doc/img/blog/post_gsi4.jpg";
import gsil5 from "../../doc/img/blog/post_gsi5.jpg";
import gsil6 from "../../doc/img/blog/post_gsi6.jpg";
import gsil7 from "../../doc/img/blog/post_gsi7.jpg";
import sliderImg1 from "../../doc/img/header/sider-top.png";
import sliderImg2 from "../../doc/img/header/sider-top2.jpg";

import "./style.scss";
import Heading from "../uiStyle/Heading";

const thumbs = [sliderImg1, sliderImg2];
const postSlider = [
  {
    image: sliderImg1,
    title:
      "Lương cơ bản ở Nhật năm 2023 tăng lên tới 1041 yên/H cho 47 tỉnh mới nhất",
    body: "“Mức lương cơ bản trung bình hàng tháng sẽ tăng cho những du học sinh, tu nghiệp sinh, lao động người Việt từ 960 Yên lên 1041 Yên/H và quyết định này được áp dụng bắt đầu từ sau ngày 01/10/2021, tốc độ tăng khoảng 7,72%, số tiền tăng lên khoảng 300 Yên tương đương với 12%.",
    category: "Nhật Bản",
    date: new Date(),
  },
  {
    image: sliderImg2,
    title:
      "Lương cơ bản ở Nhật năm 2023 tăng lên tới 1041 yên/H cho 47 tỉnh mới nhất",
    body: "“Mức lương cơ bản trung bình hàng tháng sẽ tăng cho những du học sinh, tu nghiệp sinh, lao động người Việt từ 960 Yên lên 1041 Yên/H và quyết định này được áp dụng bắt đầu từ sau ngày 01/10/2021, tốc độ tăng khoảng 7,72%, số tiền tăng lên khoảng 300 Yên tương đương với 12%.",
    category: "Nhật Bản",
    date: new Date(),
  },
];

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${className} slider_arrow arrow_right slick-arrow`}
    >
      <FontAwesome name="angle-right" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${className} slider_arrow arrow_left slick-arrow`}
    >
      <FontAwesome name="angle-left" />
    </div>
  );
}

class PostGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      vModal: false,
      videoId: "0r6C3z3TEKw",
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  modalHandler = (value) => {
    this.setState({
      vModal: value,
    });
  };

  render() {
    const { className } = this.props;
    const { nav1, nav2, vModal, videoId } = this.state;

    const navSettings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToShow: 8,
      swipeToSlide: true,
      focusOnSelect: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 8,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    };
    function formatDate(date) {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
    return (
      <div className={`post_gallary_area mb40 ${className}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-xl-8">
                  <div className="row">
                    <div className="col-12">
                      <Heading title="TIN TỨC NỔI BẬT" />
                    </div>
                  </div>
                  <div className="slider_demo2">
                    <Slider
                      asNavFor={nav2}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      arrows={false}
                      fade={true}
                      ref={(slider) => (this.slider1 = slider)}
                    >
                      {postSlider.slice(0, 9).map((item, i) => (
                        <div key={i} className="single_post post_type3">
                          <div className="post_img">
                            <div className="img_wrap">
                              <img src={item.image} alt="thumb" />
                            </div>
                          </div>
                          <div className="single_post_text">
                            <div className="meta3">
                              <Link to="/">{item.category}</Link>
                              <Link to="/">{formatDate(item.date)}</Link>
                            </div>
                            <h4>
                              <Link to="/post1">{item.title}</Link>
                            </h4>
                            <div className="space-10" />
                            <p className="post-p">{item.body}</p>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  {/* <div className="slider_demo1">
                    <Slider
                      ref={(slider) => (this.slider2 = slider)}
                      asNavFor={nav1}
                      {...navSettings}
                    >
                      {thumbs.slice(0, 9).map((item, i) => (
                        <div key={i} className="single_gallary_item">
                          <img src={item} alt="thumb" style={{height:"66px"}} />
                        </div>
                      ))}
                    </Slider>
                  </div> */}
                </div>
                <div className="col-xl-4">
                  <div className="row">
                    <div className="col-12">
                      <Heading title="TIN TỨC MỚI NHẤT" more={true} />
                    </div>
                  </div>
                  <WidgetTab dark={true} />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="banner-home pc mb10">
                <a>
                  <img src="https://nhatban24h.vn/public/media/files/xkld-nhat-ban-phi-re.gif" />
                </a>
              </div>
              <div class="banner-home pc mb10">
                <a>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgoOczfPdlOYIc2_hewpGuM_7pTM2obUBmeg&usqp=CAU" />
                </a>
              </div>
              <div class="banner-home pc ">
                <a>
                  <img src="https://xkldvietnam.com/wp-content/uploads/2023/02/xuat-khau-lao-dong-dubai.gif" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={vModal}
          videoId={videoId}
          onClose={() => this.modalHandler(false)}
        />
      </div>
    );
  }
}

export default PostGallery;
