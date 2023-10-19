import React from "react";
import { Link } from "react-router-dom";
import sportsbig1 from "../../doc/img/sports/sportsbig1.jpg";
import SportsCarousel from "../SportsCarousel";
import FontAwesome from "../uiStyle/FontAwesome";
import Heading from "../uiStyle/Heading";

const SportsNews = ({ dark }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="sports">
          <Heading title="KINH TẾ - CHÍNH TRỊ" more={true} />
          <div className="row">
            <div className="col-md-6">
              <div className="single_post post_type3 mb30">
                <div className="post_img">
                  <Link to="/">
                    <img
                      src="https://xuatkhaulaodong.com.vn/images/2018/10/17/fukuoka-min.jpg"
                      alt="sportsbig1"
                    />
                  </Link>
                </div>
                <div className="single_post_text">
                  <div className="meta3">
                    <Link to="/">Kinh tế - Chính trị</Link>
                    <Link to="/">15/10/2023</Link>
                  </div>
                  <h4>
                    <Link to="/post1">
                      Tỉnh Fukuoka Nhật Bản – ĐẤT LÀNH cho lao động Việt lập
                      nghiệp
                    </Link>
                  </h4>
                  <div className="space-10" />
                  <p className="post-p">
                    Fukuoka là vùng đất bình yên nhất của Nhật Bản do ít chịu
                    ảnh hưởng của động đất, sóng thần. Có lẽ đây chính là lý do
                    mà lao động Việt nên lựa chọn Fukuoka là điểm đến để lập
                    nghiệp...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sports_carousel nav_style1">
                <SportsCarousel dark={dark ? dark : false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsNews;
