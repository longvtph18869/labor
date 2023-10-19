import React, { Fragment } from "react";
import PostCarousel from "../../components/PostCarousel";
import PostGallery from "../../components/PostGallery";
import FeatureNews from "../../components/FeatureNews";
import TrendingNews from "../../components/TrendingNews";
import FollowUs from "../../components/FollowUs";
import MostView from "../../components/MostView";
import MixCarousel from "../../components/MixCarousel";
import VideoPost from "../../components/VideoPost";
import EntertainmentNews from "../../components/EntertainmentNews";
import { Link } from "react-router-dom";
import SportsNews from "../../components/SportsNews";
import BusinessNews from "../../components/BusinessNews";
import MostShareWidget from "../../components/MostShareWidget";
import UpcomingMatches from "../../components/UpcomingMatches";
import NewsLetter from "../../components/NewsLetter";
import CategoriesWidget from "../../components/CategoriesWidget";

// images
import banner1 from "../../doc/img/bg/banner1.png";
import banner2 from "../../doc/img/bg/sidebar-1.png";
import business1 from "../../doc/img/business/business1.jpg";
import business2 from "../../doc/img/business/business2.jpg";
import business3 from "../../doc/img/business/business3.jpg";
import enter1 from "../../doc/img/entertrainment/enter1.jpg";
import enter2 from "../../doc/img/entertrainment/enter2.jpg";
import enter3 from "../../doc/img/entertrainment/enter3.jpg";
import enter4 from "../../doc/img/entertrainment/enter4.jpg";
import Heading from "../../components/uiStyle/Heading";

const entertainments = [
  {
    image:
      "https://nhatban24h.vn/public/media/images/%C3%9Ac/du%20h%E1%BB%8Dc%20%C3%BAc%20chi%20ti%E1%BA%BFt%20t%E1%BB%AB%20a%20%C4%91%E1%BA%BFn%20z.png",
    category: "Du Học",
    date: "18/10/2023",
    title: "Du học Úc 2024 cách nhìn tổng quan nhất từ A đến Z",
    body: "Du học Úc dần trở thành xu hướng lựa chọn của những bạn trẻ khát khao được vươn ra thế giới để học hỏi những điều mới lạ, đó cũng là lựa chọn...",
  },
  {
    image:
      "https://nhatban24h.vn/public/media/images/wetech%20jsc/Truong-Dai-hoc-Nam-Uc.png",
    category: "Du Học",
    date: "18/10/2023",
    title: "Tuyển sinh du học tại trường đại học Nam Úc",
    body: "Trường Đại học Nam Úc là một trong những trường đại học top đầu và được săn đón nhiều nhất bởi nhiều học sinh bản địa và các du học sinh…",
  },
  {
    image:
      "https://nhatban24h.vn/public/media/images/du-hoc-han-quoc/cac-loai-hoc-bong-du-hoc-han-quoc.png",
    category: "Du Học",
    date: "18/10/2023",
    title: "Các loại học bổng Hàn Quốc 2024 du học sinh nên biết",
    body: "Khi có học bổng Hàn Quốc, bạn sẽ giảm bớt được khá nhiều chi phí để trả cho việc học tập và sinh hoạt ở nước ngoài…",
  },
  {
    image:
      "https://nhatban24h.vn/public/media/images/du-hoc-han-quoc/Du-hoc-Han-Quoc1.png",
    category: "Du Học",
    date: "17/10/2023",
    title: "Tổng hợp các chương trình du học Hàn Quốc 2024 ",
    body: "Các chương trình du học Hàn Quốc khá đa dạng và mỗi hình thức đều có những đặc điểm riêng. Ví dụ: chương trình du học Hàn hệ Đại học và hệ Cao đẳng…",
  },
];

const businessNews = [
  {
    image:
      "https://xuatkhaulaodong.com.vn/images/2017/04/22/nghe-thuat-gap-giay-origami.png",
    category: "Đời sống văn hóa",
    date: "10/10/2023",
    title: "6 cách gấp giấy Origami - Nhật Bản đơn giản và độc đáo nhất",
    body: "Origami là nghệ thuật gấp giấy có xuất xứ từ Nhật Bản. Chữ Origami được bắt nguồn từ hai chữ là oru là gấp và Kami là giấy. Origami được dùng từ năm 1880…",
  },
  {
    image:
      "https://xuatkhaulaodong.com.vn/images/2019/03/26/visa-kinh-doanh-min.jpg",
    category: "Đời sống văn hóa",
    date: "10/10/2023",
    title: "Visa kinh doanh là gì? Những lý do khiến bạn bị TRƯỢT visa kinh doanh ở Nhật!",
    body: "Nhật Bản được đánh giá là thị trường khá tiềm năng cho việc kinh doanh, vì vậy mà rất nhiều người dự định sang Nhật phát triển sự nghiệp…",
  },
  {
    image: "https://xuatkhaulaodong.com.vn/images/2019/12/10/0-kumamoto-nhat-min.jpg",
    category: "Đời sống văn hóa",
    date: "10/10/2023",
    title: "​Đi XKLĐ Nhật Bản tại tỉnh Kumamoto nên chọn đơn hàng gì LƯƠNG CAO?",
    body: "Kumamoto là một tỉnh nằm phía nam Nhật Bản, do đó thời tiết khá mát mẻ, dễ chịu, độ ẩm khá cao không gay gắt như ở miền Bắc…",
  },
];

const HomePage = () => {
  return (
    <Fragment>
      <FeatureNews />
      <PostCarousel className="fifth_bg" />
      <PostGallery className="fifth_bg" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <TrendingNews />
          </div>
          <div className="col-md-12 col-lg-4">
            <FollowUs title="THEO DÕI CHÚNG TÔI" />
            <MostView />
          </div>
        </div>
      </div>
      {/* <div className="content_banner">
        <div className="content_banner_bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
                <div className="content_banner_button">
                  <a href="/gioi-thieu/tuyen-ngon">Tuyên ngôn Esuhai</a>
                </div>
                <div className="content_banner_title">
                  <span className="content_banner_title_up">
                    Chọn giáo dục &amp; việc làm là CƠ SỞ CỐT LÕI
                  </span>
                  <span className="content_banner_title_lower">
                    cho sự phát triển một xã hội phồn vinh &amp; bền vững nhất
                  </span>
                </div>
                <div className="content_banner_all hidden-xs hidden-sm">
                  <a href="/gioi-thieu/tuyen-ngon">Xem tất cả</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <MixCarousel className="half_bg1" /> */}
      {/* <VideoPost className="pt30 half_bg60" /> */}
      <div className="entertrainments">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Heading title="TIN TỨC TUYỂN SINH DU HỌC" more={true} />
              {/*CAROUSEL START*/}
              <div className="entertrainment_carousel mb30">
                <div className="entertrainment_item">
                  <div className="row justify-content-center">
                    <EntertainmentNews entertainments={entertainments} />
                  </div>
                </div>
              </div>
              {/*CAROUSEL END*/}
              <SportsNews />
              <div className="banner_area mt50 mb60 xs-mt60">
                <Link to="/">
                  <img src={banner1} alt="banner1" />
                </Link>
              </div>
              <BusinessNews businessNews={businessNews} />
            </div>
            <div className="col-lg-4">
              <div class="banner-home pc">
                <a>
                  <img
                    class="banner_home"
                    src="https://nhatban24h.vn/public/media/files/banner-top/41-don-hang-Singapore-moi-nhat-tuyen-lien-tuc.png"
                    alt="Hỗ trợ đăng ký trực tiếp trên Website nhatban24h"
                    title="Hỗ trợ đăng ký trực tiếp trên Website nhatban24h"
                  />
                </a>
                <a>
                  <img
                    class="banner_home"
                    src="https://nhatban24h.vn/public/media/files/banner/Du-hoc-Han-Quoc.png"
                    alt="Nhóm Zalo xuất khẩu lao động các nước"
                    title="Nhóm Zalo xuất khẩu lao động các nước"
                  />
                </a>
                <a>
                  <img
                    class="banner_home"
                    src="https://nhatban24h.vn/public/media/files/banner-top/xuat-khau-lao-dong-Ba-Lan.png"
                    alt="Xuất khẩu lao động Ba lan cần biết 8 điều này"
                    title="Xuất khẩu lao động Ba lan cần biết 8 điều này"
                  />
                </a>
                <a>
                  <img
                    class="banner_home"
                    src="https://nhatban24h.vn/public/media/files/Tuyen-dung-ky-su-Nhat-Ban.png"
                    alt="Tuyển dụng kỹ sư Nhật Bản"
                    title="Tuyển dụng kỹ sư Nhật Bản"
                  />
                </a>
                <a>
                  <img
                    class="banner_home"
                    src="https://nhatban24h.vn/public/media/files/banner-top/11-ly-do-ban-nen-di-du-hoc-nghe-tai-Duc-hon-cac-nuoc-khac.png"
                    alt="Tuyển sinh du học nghề tại Đức"
                    title="Tuyển sinh du học nghề tại Đức"
                  />
                </a>
                <a>
                  <img
                    class="banner_home"
                    src="https://nhatban24h.vn/public/media/files/banner-top/Tuyen-sinh-du-hoc-Uc-khong-can-Ielts-(1).png"
                    alt="Tuyển sinh du học Úc không cần Ielts"
                    title="Tuyển sinh du học Úc không cần Ielts"
                  />
                </a>
                <a>
                  <img
                    class="banner_home"
                    src="https://nhatban24h.vn/public/media/files/banner-top/Top-9-thi-truong-xuat-khau-lao-dong-dang-tot-nhat-Viet-Nam.png"
                    alt="Top 9 thị trường xuất khẩu lao động đang tốt nhất Việt Nam"
                    title="Top 9 thị trường xuất khẩu lao động đang tốt nhất Việt Nam"
                  />
                </a>
                <a>
                  <img
                    class="banner_home"
                    src="https://nhatban24h.vn/public/media/files/banner-top/Banner-Ho-tro-TTC.jpg"
                    alt="Top 9 thị trường xuất khẩu lao động đang tốt nhất Việt Nam"
                    title="Top 9 thị trường xuất khẩu lao động đang tốt nhất Việt Nam"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-70" />
    </Fragment>
  );
};

export default HomePage;
