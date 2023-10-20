import React, { Fragment } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import BusinessNews from "../../components/BusinessNews";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import { Link } from "react-router-dom";
import WidgetTab from "../../components/WidgetTab";
import WidgetTrendingNews from "../../components/WidgetTrendingNews";
import NewsLetter from "../../components/NewsLetter";
import FollowUs from "../../components/FollowUs";

// images
import business1 from "../../doc/img/business/business1.jpg";
import business2 from "../../doc/img/business/business2.jpg";
import business3 from "../../doc/img/business/business3.jpg";
import banner2 from "../../doc/img/bg/sidebar-1.png";
import BannerSection from "../../components/BannerSection";
import EntertainmentNews from "../../components/EntertainmentNews";

const businessNews = [
  {
    image:
      "https://nhatban24h.vn/public/media/images/TIN-TUC-MOI/Xuat-khau-lao-dong-Nhat-Ban3.png",
    category: "uiux.subash",
    date: "12/10/2023",
    title:
      "Có nên đi Nhật vào thời điểm này khi dịch hết đồng Yên lại giảm mạnh",
    body: "Gần đây Nhật Bản 24h nhận được rất nhiều câu hỏi về đi xkld Nhật Bản trong khi dịch covid đang phức tạp hay có nên đi nhật vào thời điểm này không? trúng tuyển liệu có bay được không?…",
  },
  {
    image:
      "https://nhatban24h.vn/public/media/images/TIN-TUC-MOI/L%C3%A0m%20n%C3%B4ng%20nghi%E1%BB%87p%20%E1%BB%9F%20Nh%E1%BA%ADt%20B%E1%BA%A3n.png",
    category: "uiux.subash",
    date: "12/10/2023",
    title: "Làm nông nghiệp ở Nhật Bản có gì hấp dẫn?",
    body: "Các công việc xuất khẩu lao động ở Nhật Bản thường được người lao động và các tu nghiệp sinh Việt Nam lựa chọn cho mình khi đi xuất khẩu lao động ở Nhật Bản đó là: ngành nông nghiệp trồng dâu tây, trồng cà chua,…",
  },
  {
    image:
      "https://nhatban24h.vn/public/media/images/TIN-TUC-MOI/Ng%C3%A0nh%20ch%C4%83n%20nu%C3%B4i%20%E1%BB%9F%20Nh%E1%BA%ADt%20B%E1%BA%A3n.png",
    category: "uiux.subash",
    date: "12/10/2023",
    title:
      "Tìm hiểu ngành chăn nuôi ở Nhật Bản top đơn hàng lương cao truyền thống",
    body: "Xuất khẩu lao động hiện nay gồm rất nhiều ngành nghề, nhưng trong đó, ngành nông nghiệp là được quan tâm nhiều nhất, trong đó chăn nuôi là ngành được quan tâm hàng đầu…",
  },
  {
    image:
      "https://nhatban24h.vn/public/media/images/don-hang/Ng%C3%A0nh%20x%C3%A2y%20d%E1%BB%B1ng%20Nh%E1%BA%ADt%20B%E1%BA%A3n.png",
    category: "uiux.subash",
    date: "12/10/2023",
    title: "Tìm hiểu ngành xây dựng tại Nhật Bản nên hay không nên đi?",
    body: "Trong những năm trở lại đây, ngành xây dựng được người Nhật Bản rất chú trọng. Vì hứng chịu ảnh hưởng của thiên tai như ngập lụt, sóng thần nên việc đầu tư xây dựng lại cơ sở hạ tầng là vô cùng cấp thiết…",
  },
  {
    image:
      "https://nhatban24h.vn/public/media/images/don-hang/Xu%E1%BA%A5t%20kh%E1%BA%A9u%20lao%20%C4%91%E1%BB%99ng%20nh%E1%BA%ADt%20b%E1%BA%A3n%20th%C3%A1ng%2011.jpg",
    category: "uiux.subash",
    date: "12/10/2023",
    title: "Top 17 đơn hàng đi Nhật Bản cho nam và nữ thi tuyển tháng 10/2023",
    body: "Top 17 đơn hàng đi Nhật phí rẻ cho nam và nữ thi tuyển tháng 10/2023 bạn đang tìm kiếm đơn hàng xuất khẩu lao động Nhật Bản tháng 10 năm 2023 phí rẻ lương cao, bạn đang loay hoay chưa chọn…",
  },
  {
    image:
      "https://nhatban24h.vn/public/media/images/TIN-TUC-MOI/%C4%90i%20Nh%E1%BA%ADt%20n%C3%AAn%20ch%E1%BB%8Dn%20t%E1%BB%89nh%20n%C3%A0o.png",
    category: "uiux.subash",
    date: "12/10/2023",
    title:
      "Lương cơ bản ở Nhật năm 2023 tăng lên tới 1041 yên/H cho 47 tỉnh mới nhất",
    body: "Lương cơ bản ở Nhật là gì? Mức lương tối thiểu của 47 tỉnh thành Nhật Bản năm 2023 là bao nhiêu? Đi XKLĐ Nhật Bản 2023 có được tăng lương cơ bản hay không? Trong bài viết dưới đây chúng tôi sẽ giải đáp…",
  },
  {
    image:
      "https://nhatban24h.vn/public/media/images/TIN-TUC-MOI/Xuat-khau-lao-dong-Nhat-Ban.jpg",
    category: "uiux.subash",
    date: "12/10/2023",
    title:
      "Xuất khẩu lao động Nhật Bản 2023 chi phí, điều kiện và mức lương mới nhất",
    body: "Thị trường xuất khẩu lao động Nhật Bản năm 2023 như thế nào? Điều kiện đi XKLĐ Nhật Bản là gì? Chi phí, mức lương xuất khẩu tại Nhật ra sao? Thuận lợi và khó khăn gì khi tìm hiểu đơn hàng…",
  },
  {
    image:
      "https://nhatban24h.vn/public/media/images/wetech%20jsc/N%E1%BB%99i%20dung%20%C4%91o%E1%BA%A1n%20v%C4%83n%20b%E1%BA%A3n%20c%E1%BB%A7a%20b%E1%BA%A1n.png",
    category: "uiux.subash",
    date: "12/10/2023",
    title: "Dân số Nhật Bản 2022 - 2023 và những vấn đề liên quan",
    body: "Vào năm 2022, dân số Nhật Bản là 127,2 triệu người, chiếm tới 1,68 dân số trên thế giới. Nhật Bản thuộc top 11 quốc gia đông dân số nhất trên thế giới. Dân số Nhật Bản biến động như thế nào và các vấn…",
  },
];
const BusinessPage = () => {
  return (
    <Fragment>
      <BreadCrumb title="Đời Sống Văn Hóa" />
      <div className="archives ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8">
              <div className="businerss_news">
                <div className="row">
                  <div className="col-12">
                    <EntertainmentNews
                      headerHide={true}
                      entertainments={businessNews}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="cpagination">
                      <nav aria-label="Page navigation example">
                        <ul
                          className="pagination"
                          style={{ justifyContent: "center" }}
                        >
                          <li className="page-item">
                            <Link
                              className="page-link"
                              to="/"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">
                                <FontAwesome name="caret-left" />
                              </span>
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="/">
                              1
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="/">
                              ..
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="/">
                              5
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link
                              className="page-link"
                              to="/"
                              aria-label="Next"
                            >
                              <span aria-hidden="true">
                                <FontAwesome name="caret-right" />
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <WidgetTab />
              <WidgetTrendingNews />
              <NewsLetter />
              <FollowUs title="Follow Us" />
              <div className="banner2 mb30">
                <Link to="/">
                  <img src={banner2} alt="thumb" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-70" />
      <BannerSection />
    </Fragment>
  );
};

export default BusinessPage;
