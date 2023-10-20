import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";

const trendingNews = [
  {
    category: "Nhật Bản",
    date: "12/10/2023",
    title:
      "Có nên đi Nhật vào thời điểm này khi dịch hết đồng Yên lại giảm mạnh",
    body: "Gần đây Nhật Bản 24h nhận được rất nhiều câu hỏi về đi xkld Nhật Bản trong khi dịch covid đang phức tạp hay có nên đi nhật vào thời điểm này không?...",
    image:
      "https://nhatban24h.vn/public/media/images/TIN-TUC-MOI/Xuat-khau-lao-dong-Nhat-Ban3.png",
  },
  {
    category: "Nhật Bản",
    date: "10/10/2023",
    title: "Làm nông nghiệp ở Nhật Bản có gì hấp dẫn?",
    body: "Làm nông nghiệp ở Nhật Bản và Top đơn hàng lương cao thường được người lao động và các tu nghiệp sinh Việt Nam lựa chọn nhiều cho mình...",
    image:
      "https://nhatban24h.vn/public/media/images/TIN-TUC-MOI/L%C3%A0m%20n%C3%B4ng%20nghi%E1%BB%87p%20%E1%BB%9F%20Nh%E1%BA%ADt%20B%E1%BA%A3n.png",
  },
  {
    category: "Nhật Bản",
    date: "10/10/2023",
    title:
      "Tìm hiểu ngành chăn nuôi ở Nhật Bản top đơn hàng lương cao truyền thống",
    body: "Ngành chăn nuôi ở Nhật Bản được quan tâm nhiều nhất, là một trong những đơn hàng hấp dẫn đem lại mức thu nhập cao...",
    image:
      "https://nhatban24h.vn/public/media/images/TIN-TUC-MOI/Ng%C3%A0nh%20ch%C4%83n%20nu%C3%B4i%20%E1%BB%9F%20Nh%E1%BA%ADt%20B%E1%BA%A3n.png",
  },
];
const TrendingNewsSlider = () => {
  // const [swiper, setSwiper] = useState(null);

  // const goNext = () => {
  //   if (swiper !== null) {
  //     swiper.slideNext();
  //   }
  // };

  // const goPrev = () => {
  //   if (swiper !== null) {
  //     swiper.slidePrev();
  //   }
  // };
  const params = {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  };
  return (
    <div className="carousel_post2_type3 nav_style1">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="trancarousel"
        {...params}
      >
        {trendingNews.map((item, i) => (
          <div key={i} className="single_post post_type3">
            <div className="post_img">
              <div className="img_wrap">
                <img src={item.image} alt="thumb" />
              </div>
            </div>
            <div className="single_post_text">
              <div className="meta3">
                <Link to="/">{item.category}</Link>
                <Link to="/">{item.date}</Link>
              </div>
              <h4>
                <Link to="/post1">{item.title}</Link>
              </h4>
              <div className="space-10" />
              <p className="post-p">{item.body}</p>
            </div>
          </div>
        ))}
      </Swiper>
      {/* <div className="navBtns">
                <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left"/></div>
                <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right"/></div>
            </div> */}
    </div>
  );
};

export default TrendingNewsSlider;
