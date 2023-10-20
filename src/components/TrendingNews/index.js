import React, { Fragment } from "react";
import Heading from "../uiStyle/Heading";
import TrendingNewsSlider from "../TrendingNewsSlider";
import { Link } from "react-router-dom";

const trendingNews = [
  {
    image:
      "https://nhatban24h.vn/public/media/images/don-hang/Ng%C3%A0nh%20x%C3%A2y%20d%E1%BB%B1ng%20Nh%E1%BA%ADt%20B%E1%BA%A3n.png",
    category: "Nhật Bản",
    date: "10/10/2023",
    title: "Tìm hiểu ngành xây dựng tại Nhật Bản nên hay không nên đi?",
  },
  {
    image: "https://nhatban24h.vn/public/media/images/don-hang/Xu%E1%BA%A5t%20kh%E1%BA%A9u%20lao%20%C4%91%E1%BB%99ng%20nh%E1%BA%ADt%20b%E1%BA%A3n%20th%C3%A1ng%2011.jpg",
    category: "Nhật Bản",
    date: "24/09/2023",
    title: "Top 17 đơn hàng đi Nhật Bản cho nam và nữ thi tuyển tháng 10/2023",
  },
  {
    image: "https://nhatban24h.vn/public/media/images/TIN-TUC-MOI/%C4%90i%20Nh%E1%BA%ADt%20n%C3%AAn%20ch%E1%BB%8Dn%20t%E1%BB%89nh%20n%C3%A0o.png",
    category: "Nhật Bản",
    date: "14/09/2023",
    title: "Đi Nhật nên chọn tỉnh nào trong 9 tỉnh thành phố có lương cao nhất này?",
  },
  {
    image: "https://nhatban24h.vn/public/media/images/du-lich-nhat-ban/B%E1%BA%A3n%20%C4%91%E1%BB%93%20Nh%E1%BA%ADt%20B%E1%BA%A3n.png",
    category: "Nhật Bản",
    date: "24/04/2023",
    title: "Các loại bản đồ Nhật Bản bạn đã biết chưa?",
  },
  {
    image: "https://nhatban24h.vn/public/media/images/Nhat-ban/quy-dinh-nhap-canh-nhat-ban.png",
    category: "Nhật Bản",
    date: "09/06/2023",
    title: "Quy định điều kiện nhập cảnh vào Nhật Bản mới nhất năm 2023",
  },
  {
    image: "https://nhatban24h.vn/public/media/images/cong-xuong-nhat-ban/don-hang-cong-xuong-tai-Nhat-Ban.png",
    category: "Nhật Bản",
    date: "11/04/2023",
    title: "Tìm hiểu đơn hàng công xưởng tại Nhật Bản top đơn hàng tăng ca nhiều",
  },
];

const TrendingNews = ({ dark }) => {
  return (
    <Fragment>
      <Heading title="TIN TỨC NHẬT BẢN" more={true} />
      <TrendingNewsSlider />
      {dark ? (
        <div className="border_white" />
      ) : (
        <div className="border_black" />
      )}
      <div className="space-30" />
      <div className="row">
        <div className="col-lg-6">
          {trendingNews.slice(0, 3).map((item, i) => (
            <Fragment key={i}>
              <div className="single_post widgets_small">
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
              </div>
              <div className="space-15" />
              {dark ? (
                <div className="border_white" />
              ) : (
                <div className="border_black" />
              )}
              <div className="space-15" />
            </Fragment>
          ))}
        </div>
        <div className="col-lg-6">
          {trendingNews.slice(3, 6).map((item, i) => (
            <Fragment key={i}>
              <div className="single_post widgets_small">
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
              </div>
              <div className="space-15" />
              {dark ? (
                <div className="border_white" />
              ) : (
                <div className="border_black" />
              )}
              <div className="space-15" />
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default TrendingNews;
