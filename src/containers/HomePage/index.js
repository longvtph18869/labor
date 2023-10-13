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

const entertainments = [
  {
    image: enter1,
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "There may be no consoles in the future ea exec says",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    image: enter2,
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "There may be no consoles in the future ea exec says",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    image: enter3,
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "There may be no consoles in the future ea exec says",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    image: enter4,
    category: "TECHNOLOGY",
    date: "March 26, 2020",
    title: "There may be no consoles in the future ea exec says",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
];

const businessNews = [
  {
    image: business1,
    category: "uiux.subash",
    date: "March 26, 2020",
    title: "Copa America: Luis Suarez from devastated US",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…",
  },
  {
    image: business2,
    category: "uiux.subash",
    date: "March 26, 2020",
    title: "Copa America: Luis Suarez from devastated US",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…",
  },
  {
    image: business3,
    category: "uiux.subash",
    date: "March 26, 2020",
    title: "Copa America: Luis Suarez from devastated US",
    body: "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…",
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
            <FollowUs title="Follow Us" />
            <MostView />
          </div>
        </div>
      </div>
      <div className="content_banner">
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
      </div>
      <MixCarousel className="half_bg1" />
      <VideoPost className="pt30 half_bg60" />
      <div className="entertrainments">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="heading">
                    <h2 className="widget-title">Entertrainment News</h2>
                  </div>
                </div>
              </div>
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
              <div className="row">
                <div className="col-lg-12">
                  <MostShareWidget title="Most share" />
                </div>
                <div className="col-lg-12">
                  <UpcomingMatches />
                </div>
                <div className="col-lg-12">
                  <NewsLetter />
                </div>
                <div className="col-lg-12">
                  <CategoriesWidget />
                </div>
                <div className="col-lg-12">
                  <div className="banner2 mb30">
                    <Link to="/">
                      <img src={banner2} alt="thumb" />
                    </Link>
                  </div>
                </div>
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
