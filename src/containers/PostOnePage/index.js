import React, { Fragment } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import { Link } from "react-router-dom";
import WidgetTab from "../../components/WidgetTab";
import WidgetTrendingNews from "../../components/WidgetTrendingNews";
import NewsLetter from "../../components/NewsLetter";
import MostShareWidget from "../../components/MostShareWidget";
import FollowUs from "../../components/FollowUs";
import BannerSection from "../../components/BannerSection";
import PostOnePagination from "../../components/PostOnePagination";

// images
import banner2 from "../../doc/img/bg/sidebar-1.png";
import big2 from "../../doc/img/blog/big2.jpg";
import author2 from "../../doc/img/author/author2.png";
import quote from "../../doc/img/icon/q.png";
import quote_1 from "../../doc/img/blog/quote_1.jpg";
import big1 from "../../doc/img/blog/big1.jpg";
import smail1 from "../../doc/img/blog/smail1.jpg";
import single_post1 from "../../doc/img/blog/single_post1.jpg";
import OurBlogSection from "../../components/OurBlogSection";
import BlogComment from "../../components/BlogComment";

const PostOnePage = () => {
  return (
    <Fragment>
      <div className="archives post post1">
        <BreadCrumb className="shadow5" title="Tin Tức Nhật Bản" />
        <span className="space-30" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8">
              <div class="img-news">
                <a title="Banner bài viết">
                  <img
                    src="https://nhatban24h.vn/public/media/files/Tuyen-nhan-su-va-ctv-tuyen-sinh-du-hoc.gif"
                    alt="Banner bài viết"
                    title="Banner bài viết"
                  />
                </a>
              </div>
              <div className="space-20" />
              <div className="single_post_heading">
                <h2>
                  Có nên đi Nhật vào thời điểm này khi dịch hết đồng Yên lại
                  giảm mạnh
                </h2>
                <div className="space-10" />
                <div className="page_comments">
                  <ul className="inline">
                    <li>
                      <FontAwesome name="clock-o" />
                      12/10/2023
                    </li>
                    <li>
                      <FontAwesome name="eye" />
                      1563
                    </li>
                    <li>
                      <FontAwesome name="comment" />
                      52
                    </li>
                  </ul>
                </div>
                <div className="space-10" />
                <blockquote>
                  <p>
                    <span>
                      <span>
                        <a href="http://nhatban24h.vn/co-nen-di-nhat-vao-thoi-diem-nay-khi-dich-covid-dang-dan-on-dinh_6027.html">
                          <strong>
                            Có nên đi Nhật vào thời điểm này khi dịch hết đồng
                            Yên lại giảm mạnh?
                          </strong>
                        </a>
                        &nbsp;trúng tuyển có bay được không? tình hình dịch bệnh
                        bên Nhật thế nào? vì sao nên đăng ký ngay tại thời điểm
                        này? Gần đây trên website Nhật Bản 24h&nbsp;nhận được
                        rất nhiều yêu cầu tìm hiểu thông tin chương trình tham
                        gia xuất khẩu lao động Nhật Bản và rất nhiều câu hỏi
                        liên quan đến Dịch covid thì tham gia như thế nào? sau
                        đây là những giải đáp của chúng tôi&nbsp;
                      </span>
                    </span>
                  </p>
                </blockquote>
              </div>
              <div className="space-40" />
              <img
                style={{ width: "100%", height: "auto" }}
                src="https://nhatban24h.vn/public/media/images/TIN-TUC-MOI/Xuat-khau-lao-dong-Nhat-Ban3.png"
                alt="thumb"
              />
              <div className="space-20" />
              <p>
                Dưới đây là 5 lý do để trả lời cho câu hỏi " Có nên đi Nhật tại
                thời điểm này không khi dịch hết đồng Yên lại giàm mạnh? các bạn
                hãy đọc hết các lý do dưới bài viết nhé
                <br />
                <br />
                <a href="#1">
                  <strong>
                    1. Năm 2020 - 2021 đưa 90.000 lao động đi làm việc ở nước
                    ngoài theo kế hoạch được Chính phủ và Bộ giao
                  </strong>
                </a>
                <p>
                  Về phía Cục Quản lý lao động ngoài nước, ông Nguyễn Gia Liêm
                  cho biết, năm 2021, Cục sẽ tập trung thực hiện ngay kế hoạch
                  được Chính phủ và Bộ giao là đưa 90.000 lao động Việt Nam đi
                  làm việc ở nước ngoài, tập trung vào các thị trường có thu
                  nhập cao, ổn định; tiếp tục chủ trì, phối hợp các đơn vị liên
                  quan hoàn thiện thể chế, xây dựng dự thảo trình Bộ để trình
                  Chính phủ ban hành Nghị định và các văn bản hướng dẫn thi hành
                  Luật NLĐ Việt Nam đi làm việc ở nước ngoài theo hợp đồng (sửa
                  đổi); tiếp tục phối hợp chặt chẽ với cơ quan đại diện ngoại
                  giao, cơ quan hữu quan của các quốc gia, vùng lãnh thổ tiếp
                  nhận lao động theo dõi sát sao tình hình NLĐ làm việc ở nước
                  ngoài; kịp thời xử lý các vấn đề phát sinh, bảo đảm quyền và
                  lợi ích hợp pháp của NLĐ cũng như tổ chức đưa NLĐ hết hạn hợp
                  đồng về nước theo chỉ đạo của Chính phủ cũng như kịp thời
                  thông tin và hướng dẫn các doanh nghiệp hoạt động dịch vụ
                  trong bối cảnh dịch Covid-19 vẫn diễn biến phức tạp tại các
                  quốc gia, vùng lãnh thổ tiếp nhận lao động.
                </p>
                <br />
                <div class="img-news">
                  <a title="Banner bài viết">
                    <img
                      src="https://nhatban24h.vn/public/media/images/TIN-TUC-MOI/Xuat-khau-lao-dong-Nhat-Ban2.png"
                      alt="Banner bài viết"
                      title="Banner bài viết"
                    />
                  </a>
                </div>
                <br />
                <p>
                  Ông Nguyễn Gia Liêm, Phó Cục trưởng Quản lý lao động ngoài
                  nước (Bộ LĐ-TB&XH) cho biết, dịch bệnh vẫn đang gây ảnh hưởng
                  nghiêm trọng đến mọi hoạt động trên phạm vi toàn cầu. Tuy
                  nhiên, một số quốc gia và vùng lãnh thổ tiếp nhận lao động
                  Việt Nam về cơ bản đã khống chế được dịch Covid-19, từng bước
                  nới lỏng các biện pháp cách ly, giãn cách xã hội để khởi động
                  lại và tiếp tục đẩy mạnh các hoạt động phát triển kinh tế,
                  trong đó có việc tiếp nhận trở lại lao động nước ngoài.{" "}
                </p>
                <p>
                  Đối với thị trường không có chính sách hạn chế về tiếp nhận
                  lao động nước ngoài, Bộ LĐ-TB&XH đề nghị các doanh nghiệp chủ
                  động trao đổi ý kiến với đối tác trên cơ sở chính sách, quy
                  định của nước sở tại để bảo đảm NLĐ nhập cảnh hợp pháp, an
                  toàn, bảo đảm tốt nhất quyền lợi của NLĐ trong trường hợp phải
                  thực hiện cách ly sau nhập cảnh; bảo đảm việc khám, chữa bệnh,
                  chăm sóc y tế cho NLĐ trong trường hợp nghi hoặc bị nhiễm dịch
                  bệnh.{" "}
                </p>
                <p>
                  Đặc biệt, doanh nghiệp cần thông tin đầy đủ, rõ ràng tới NLĐ
                  các chính sách được hưởng, trách nhiệm phải thực hiện liên
                  quan phòng, chống dịch Covid-19; đồng thời, quán triệt NLĐ chủ
                  động các biện pháp phòng, chống dịch bệnh, tuân thủ nghiêm
                  ngặt các yêu cầu về y tế của cơ quan chức năng Việt Nam và các
                  nước, vùng lãnh thổ tiếp nhận lao động; thực hiện đầy đủ các
                  chế độ tiền lương, sinh hoạt của NLĐ theo hợp đồng đã ký và
                  quy định sở tại trong trường hợp phải khám, chữa bệnh; giãn,
                  giảm giờ làm, nghỉ việc do ảnh hưởng của dịch Covid-19.{" "}
                </p>
                <p>
                  Đối với công tác tư vấn, tuyển chọn, đào tạo NLĐ trước khi đi
                  làm việc ở nước ngoài, các doanh nghiệp nghiêm túc thực hiện
                  hướng dẫn của cơ quan chức năng địa phương về phòng, chống
                  dịch bệnh; kết hợp đào tạo trực tuyến đối với lao động chưa
                  thể tập trung đào tạo trực tiếp.
                </p>
                <br />
                <br />A shortage of several hundred ventilators in New York
                City, the epicentre of the outbreak in the US, prompted Mr Cuomo
                to say that he will order the machines be taken from various
                parts of the state and give them to harder-hit areas.
                <br />
                <br />
                Amid a deepening crisis, top health official{" "}
                <span className="bold"> Dr Anthony Fauci</span> has said he
                believes all states should issue stay-at-home orders.
                <br />
                <br />
                “I don’t understand why that’s not happening,” Dr Fauci told CNN
                on Thursday. “If you look at what’s going on in this country, I
                just don’t understand why we’re not do ingthat.”
                <br />
                <br />
                “You’ve got to put your foot on the accelerator to bring that
                number down,” he added, referring to infection and death rates.
              </p>
              <div className="space-40" />
              <div className="points">
                <ul>
                  <li>Should more of us wear face masks?</li>
                  <li>Why some countries wear face masks and others don’t</li>
                  <li>Coronavirus: Are homemade face masks safe?</li>
                </ul>
              </div>
              <div className="space-40" />
              <p>
                The comments from Dr Fauci, who heads the National Institute of
                Allergy and Infectious Diseases, appeared to contradict those of
                President Trump, who has consistently dismissed the notion of a
                nationwide lockdown.
                <br />
                <br />
                “It’s awfully tough to say, ‘close it down.’ We have to have a
                little bit of flexibility,” Mr Trump said on Wednesday.
              </p>
              <div className="space-40" />
              <h3>What’s the debate over masks?</h3>
              <div className="space-20" />
              <p>
                Both the US Centers for Disease Control (CDC) and the World
                Health Organization (WHO) are reassessing their guidance on face
                masks, as experts race to find ways to fight the highly
                contagious virus.
                <br />
                <br />
                Covid-19 is carried in airborne droplets from people coughing or
                sneezing, but there is some dispute over how far people should
                distance themselves from each other, and whether masks are
                useful when used by the public.
              </p>
              <div className="space-40" />
              <div className="row">
                <div className="col-md-6">
                  <img src={smail1} alt="smail1" />
                </div>
                <div className="col-md-6">
                  <p>
                    The WHO advises that ordinary face masks are only effective
                    if combined with careful hand-washing and social-distancing,
                    and so far it does not recommend them generally for healthy
                    people.
                    <br />
                    <br />
                    However, More and more health experts now say there are
                    benefits. They argue that the public use of masks can
                    primarily help by preventing asymptomatic patients - people
                    who have been infected with Covid-19 but are not aware, and
                    not displaying any symptoms - from unknowingly spreading the
                    virus to others.
                  </p>
                </div>
              </div>
              <div className="space-40" />
              <p>
                Masks may also help lower the risk of individuals catching the
                virus through the droplets from another person’s sneeze or a
                cough - and people can be taught how put masks on and take them
                off correctly, they argue.
                <br />
                <br />
                On Thursday New York mayor Bill de Blasio urged all New Yorkers
                to cover their faces when outside and near others, but not to
                use surgical masks, which are in short supply.
                <br />
                <br />
                “It could be a scarf. It could be something you create yourself
                at home. It could be a bandana,” he said. Governor Cuomo weighed
                in on Friday, saying “i think it’s fair to say that the masks
                couldn’t hurt unless they gave you a false sense of security.”
                <br />
                <br />
                Meanwhile, residents in Laredo, Texas will now face a $1,000
                (£816) fine if they fail to cover their noses and mouths while
                outside, after city officials issued an emergency ordinance to
                its approximately 250,000 residents this week.
              </p>
              <div className="space-40" />
              <h3>Which states are not in lockdown?</h3>
              <div className="space-20" />
              <p>
                Both the US Centers for Disease Control (CDC) and the World
                Health Organization (WHO) are reassessing their guidance on face
                masks, as experts race to find ways to fight the highly
                contagious virus.
                <br />
                <br />
                Covid-19 is carried in airborne droplets from people coughing or
                sneezing, but there is some dispute over how far people should
                distance themselves from each other, and whether masks are
                useful when used by the public.
              </p>
              <div className="space-40" />
              <img src={big1} alt="big1" />
              <p className="img_desc">
                <span>I just had a baby - now I’m going to the frontline.</span>
              </p>
              <div className="space-40" />
              <p>
                Masks may also help lower the risk of individuals catching the
                virus through the droplets from another person’s sneeze or a
                cough - and people can be taught how put masks on and take them
                off correctly, they argue.
                <br />
                <br />
                On Thursday New York mayor Bill de Blasio urged all New Yorkers
                to cover their faces when outside and near others, but not to
                use surgical masks, which are in short supply.
                <br />
                <br />
                Meanwhile, residents in Laredo, Texas will now face a $1,000
                (£816) fine if they fail to cover their noses and mouths while
                outside, after city officials issued an emergency ordinance to
                its approximately 250,000 residents this week.
              </p>
              <div className="space-40" />
              <div className="row">
                <div className="col-md-5">
                  <img src={quote_1} alt="quote" />
                </div>
                <div className="col-md-7">
                  <div className="qhote">
                    <img src={quote} alt="quote" />
                    <p>
                      I must explain to you how all this mistake idea denouncing
                      pleasure and praising pain was born and I will give you a
                      complete account of the system, and expound the actual
                      teachings of the great explorer of the truth, the
                      master-builder of human happiness. .
                    </p>
                    <div className="author">
                      <div className="author_img">
                        <div className="author_img_wrap">
                          <img src={author2} alt="author2" />
                        </div>
                      </div>
                      <Link to="/">Shuvas Chandra</Link>
                      <ul>
                        <li>Founder at Seative Digital</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-40" />
              <p>
                The next day I came back to my team and said, This is what I
                just heard, we have to get ready, he said. We knew that it
                wasn’t going to be long before we were going to have to deal
                with it.
                <br />
                <br />
                Mr. Hogan has also leaned on his wife, Yumi Hogan, a Korean
                immigrant, who was also at the governor’s convention, which
                included a dinner at the Korean ambassador’s home. As the first
                Korean first lady in American history, Ms. Hogan has become
                something of an icon in South Korea. I just grabbed my wife and
                said, Look, you speak Korean. You know the president. You know
                the first lady. You know the ambassador. Let’s talk to them in
                Korean, and tell them we need their help. Companies in South
                Korea said would tests.
              </p>
              <div className="space-40" />
              <img src={big2} alt="big2" />
              <div className="space-40" />
              <p>
                In global terms the US has the most Covid-19 cases - more than
                245,000. And on Thursday the US authorities said more than 1,000
                had died in the past 24 hours - the highest daily toll so far in
                the world.
                <br />
                <br />
                Hospitals and morgues in New York are struggling to cope with
                the pandemic, and New York Governor Andrew Cuomo has warned that
                New York risks running out of ventilators for patients in six
                days.
              </p>
              <div className="space-40" />
              <div className="tags">
                <ul className="inline">
                  <li className="tag_list">
                    <FontAwesome name="tag" /> tags
                  </li>
                  <li>
                    <Link to="/">Health</Link>
                  </li>
                  <li>
                    <Link to="/">World</Link>
                  </li>
                  <li>
                    <Link to="/">Corona</Link>
                  </li>
                </ul>
              </div>
              <div className="space-40" />
              <div className="border_black" />
              <div className="space-40" />
              <PostOnePagination />
            </div>
            <div className="col-md-6 col-lg-4">
              <WidgetTab />
              <FollowUs title="Follow Us" />
              <WidgetTrendingNews />
              <div className="banner2 mb30">
                <Link to="/">
                  <img src={banner2} alt="thumb" />
                </Link>
              </div>
              <MostShareWidget title="Most Share" />
              <NewsLetter />
            </div>
          </div>
        </div>
      </div>
      <div className="space-60" />
      <OurBlogSection />
      <div className="space-60" />
      <BlogComment />
      <div className="space-100" />
      <BannerSection />
    </Fragment>
  );
};

export default PostOnePage;
