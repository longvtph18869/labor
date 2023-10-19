import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from "react-id-swiper";

// images
import mostsm1 from "../../doc/img/most_view/mostsm1.jpg";
import mostsm2 from "../../doc/img/most_view/mostsm2.jpg";
import mostsm3 from "../../doc/img/most_view/mostsm3.jpg";
import mostsm4 from "../../doc/img/most_view/mostsm4.jpg";
import mostsm5 from "../../doc/img/most_view/mostsm5.jpg";
import { mostViewSort } from "../../utils/commonFunctions";

const mostView = [
  {
    image: "https://nhatban24h.vn/public/media/images/du-hoc-han-quoc/Muc-luong-co-ban-o-Han-Quoc-2023-trung-binh-1-thang-bao-nhieu.png",
    category: "Hàn Quốc",
    date: "16/10/2023",
    title: "Mức lương cơ bản ở Hàn Quốc 2023 trung bình 1 tháng bao nhiêu?",
  },
  {
    image: "https://nhatban24h.vn/public/media/images/TIN-TUC-MOI/Xuat-khau-lao-dong-singapore1.png",
    category: "Singapore",
    date: "16/10/2023",
    title: "Xuất khẩu lao động Singapore 2023 có gì hay ho?",
  },
  {
    image: "https://nhatban24h.vn/public/media/images/Hylap/Tim-hieu-ve-Hy-Lap-thi-truong-xuat-khau-lao-dong-Chau-Au-moi.png",
    category: "Hy Lạp",
    date: "7/10/2023",
    title: "Tìm hiểu về Hy Lạp thị trường xuất khẩu lao động Châu Âu mới",
  },
  {
    image: "https://nhatban24h.vn/public/media/images/visa%20HQ/Xuat-khau-lao-dong-Han-Quoc.png",
    category: "Hàn Quốc",
    date: "6/10/2023",
    title: "Xuất khẩu lao động Hàn Quốc dần đang khởi sắc và nhiều cơ hội mới",
  },
  {
    image: "https://nhatban24h.vn/public/media/images/so/Xuat-khau-lao-dong-Dai-Loan.png",
    category: "Đài Loan",
    date: "5/10/2023",
    title: "Xuất khẩu lao động Đài Loan 2023 chi phí và các dạng đơn hàng tốt nhất",
  },
  {
    image: "https://nhatban24h.vn/public/media/images/Ky-su-dai-loan/ky-su-Dai-Loan.png",
    category: "Đài Loan",
    date: "2/10/2023",
    title: "Tuyển dụng kỹ sư Đài Loan các ngành nghề phí rẻ lương cao",
  },
];

const MostView = ({ no_margin, title, dark }) => {
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
    slidesPerView: 1,
    slidesPerColumn: 6,
  };
  return (
    <div className={`widget tab_widgets ${no_margin ? "" : "mb10"}`}>
      <h2 className="widget-title">
        {title ? title : "TIN TỨC VIỆC LÀM NGOÀI NƯỚC"}
      </h2>
      <div className="post_type2_carousel multipleRowCarousel nav_style1">
        <Swiper getSwiper={setSwiper} {...params}>
          {mostView.map((item, i) => (
            <div key={i} className="single_post2_carousel">
              <div className="single_post widgets_small type8">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src={item.image} alt="thumb" />
                  </div>
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    <Link to="/">{item.category}</Link>
                    <Link to="/">{item.date}</Link>
                  </div>
                  <h4>
                    <Link to="/post1">{item.title}</Link>
                  </h4>
                </div>
                <div className="type8_count">
                  <h2>{item.id}</h2>
                </div>
              </div>
              {i + 1 < mostView.length ? (
                <Fragment>
                  <div className="space-15" />
                  {dark ? (
                    <div className="border_white" />
                  ) : (
                    <div className="border_black" />
                  )}
                  <div className="space-15" />
                </Fragment>
              ) : null}
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MostView;
