import React, { useState } from "react";
import { Link } from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from "react-id-swiper";

// images
import sports2 from "../../doc/img/sports/sports2.jpg";
import sports3 from "../../doc/img/sports/sports3.jpg";
import sports4 from "../../doc/img/sports/sports4.jpg";
import sports5 from "../../doc/img/sports/sports5.jpg";
import sports6 from "../../doc/img/sports/sports6.jpg";
import blog_small1 from "../../doc/img/blog/blog_small1.jpg";
import blog_small2 from "../../doc/img/blog/blog_small2.jpg";
import blog_small3 from "../../doc/img/blog/blog_small3.jpg";
import blog_small4 from "../../doc/img/blog/blog_small4.jpg";
import blog_small5 from "../../doc/img/blog/blog_small5.jpg";

import { mostViewSort } from "../../utils/commonFunctions";

const mostView = [
  {
    image:
      "https://xuatkhaulaodong.com.vn/images/2018/01/03/0-2-cap-nhat-ty-gia-dong-yen-2018-1-man-bang-bao-nhieu-tien-viet.jpg",
    category: "Kinh tế - Chính trị",
    date: "18/10/2023",
    title: "Cập nhật tỷ giá đồng Yên hôm nay - 1 Yên bằng bao nhiêu tiền Việt",
  },
  {
    image: "https://xuatkhaulaodong.com.vn/images/2021/08/25/xuat-khau-lao-dong.jpg",
    category: "Kinh tế - Chính trị",
    date: "18/10/2023",
    title: "Giữa dịch Covid 19 bao giờ TTS có thể xuất cảnh?",
  },
  {
    image: "https://xuatkhaulaodong.com.vn/images/2021/08/24/xuat-khau-lao-dong.jpg",
    category: "Kinh tế - Chính trị",
    date: "18/10/2023",
    title: "Người lao động cần chuẩn bị gì khi tham gia XKLĐ Nhật giữa dịch bệnh?",
  },
  {
    image: "https://xuatkhaulaodong.com.vn/images/2020/07/15/0-1-xuat-khau-lao-dong-nhat.jpg",
    category: "Kinh tế - Chính trị",
    date: "18/10/2023",
    title: "Những biện pháp đối ứng dành cho DHS bị ảnh hưởng bởi dịch Covid 19",
  },
  {
    image: "https://xuatkhaulaodong.com.vn/images/2020/09/01/1-xuat-khau-lao-dong-nhat-ban-(1).jpg",
    category: "Kinh tế - Chính trị",
    date: "18/10/2023",
    title: "Đề xuất mở 4 chuyến bay/ tuần với đường bay Nhật - Việt từ 15/9",
  },
  {
    image: "https://xuatkhaulaodong.com.vn/images/2018/11/01/saga-nhat-ban-min.jpg",
    category: "Kinh tế - Chính trị",
    date: "18/10/2023",
    title: "Tỉnh Saga Nhật Bản – vùng đất LÝ TƯỞNG cho các lao động Việt yêu màu xanh lá!",
  },
  {
    image: "https://xuatkhaulaodong.com.vn/images/2018/10/25/HOAN-THUE-THU-NHAP-CHO-KY-SU-min.jpg",
    category: "Kinh tế - Chính trị",
    date: "18/10/2023",
    title: "Hướng dẫn thủ tục hoàn thuế thu nhập cá nhân cho kỹ sư đi Nhật NHANH NHẤT!",
  },
  {
    image: "https://xuatkhaulaodong.com.vn/images/2018/10/18/0-tang-thue-tieu-thu-min.jpg",
    category: "Kinh tế - Chính trị",
    date: "18/10/2023",
    title: "Nhật Bản TĂNG thuế tiêu dùng khiến cộng đồng người Việt ở Nhật “ĐẮNG LÒNG”!",
  },
  {
    image: "https://xuatkhaulaodong.com.vn/images/2017/11/14/nhung-noi-vat-va-cua-cong-nhan-may-mac-tai-viet-nam-lieu-co-ai-thau-min.jpg",
    category: "Kinh tế - Chính trị",
    date: "18/10/2023",
    title: "Những nỗi vất vả của công nhân may mặc tại Việt Nam - Liệu có ai thấu?",
  },
  {
    image: "https://xuatkhaulaodong.com.vn/images/2018/11/12/dieu-chinh-thue-cuoi-nam.jpg",
    category: "Kinh tế - Chính trị",
    date: "18/10/2023",
    title: "Hỏi đáp điều chỉnh thuế cuối năm ở Nhật cho kỹ sư, lao động xuất khẩu tại Nhật!",
  },
];

const SportsCarousel = ({ dark }) => {
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
    <div className="widget tab_widgets">
      <div className="post_type2_carousel multipleRowCarousel nav_style1">
        {/*CAROUSEL START*/}
        <Swiper getSwiper={setSwiper} {...params}>
          {mostView.map((item, i) => (
            <div key={i} className="single_post2_carousel">
              <div className="single_post widgets_small">
                <div className="post_img">
                  <div className="img_wrap">
                    <Link to="/">
                      <img src={item.image} alt="thumb" />
                    </Link>
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
              </div>
              <div className="space-15" />
              {dark ? (
                <div className="border_white" />
              ) : (
                <div className="border_black" />
              )}
              <div className="space-15" />
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SportsCarousel;
