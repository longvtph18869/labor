import React, {Fragment} from 'react';
import PostGalleryTwo from "../../components/PostGalleryTwo";
import TrendingNewsTwo from "../../components/TrendingNewsTwo";
import FeatureNewsTwo from "../../components/FeatureNewsTwo";
import BusinessNewsTwo from "../../components/BusinessNewsTwo";
import MostViewTwo from "../../components/MostViewTwo";
import banner2 from "../../doc/img/bg/sidebar-1.png";
import banner3 from "../../doc/img/bg/banner1.png";
import WidgetFinance from "../../components/WidgetFinance";
import VideoNews from "../../components/VideoNews";
import WidgetTabTwo from "../../components/WidgetTabTwo";
import Opinion from "../../components/Opinion";
import Whatsnew from "../../components/Whatsnew";
import {Link} from "react-router-dom";
import NewsLetter from "../../components/NewsLetter";
import FollowUs from "../../components/FollowUs";
import MostViewThree from "../../components/MostViewThree";
import Sports from "../../components/Sports";
import International from "../../components/International";

const HomePageTwo = () => {
    return (
        <Fragment>
            <PostGalleryTwo/>
            <div className="total3 mb30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <TrendingNewsTwo/>
                            <FeatureNewsTwo/>
                            <BusinessNewsTwo/>
                        </div>
                        <div className="col-lg-4">
                            <div className="row justify-content-center">
                                <div className="col-md-6 col-lg-12">
                                    <MostViewTwo/>
                                </div>
                                <div className="col-md-6 col-lg-12 d-md-none d-lg-block">
                                    <div className="banner2 mb30 border-radious5">
                                        <Link to="/">
                                            <img src={banner2} alt="thumb"/>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-12">
                                    <WidgetFinance/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoNews/>
            <div className="mix3 mb30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xl-3">
                            <WidgetTabTwo className="sm-mt0 md-mt0"/>
                        </div>
                        <div className="col-md-6 col-xl-5 d-lg-none d-xl-block">
                            <Opinion/>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <Whatsnew title="Whats new"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mix_elements">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-md-12">
                            <div className="banner_area mb30 xs-mt60">
                                <Link to="/">
                                    <img src={banner3} alt="banner3"/>
                                </Link>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <NewsLetter className="white_bg border-radious5"/>
                                    <Sports/>
                                </div>
                                <div className="col-md-6">
                                    <MostViewThree/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 d-md-none d-xl-block col-md-12">
                            <div className="row">
                                <div className="col-md-6 col-lg-12">
                                    <FollowUs
                                        title="Contact Us"
                                        className="border-radious5 white_bg padding20 sm-mt30"/>
                                </div>
                                <div className="col-md-6 col-lg-12">
                                    <International/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-70"/>
        </Fragment>
    );
};

export default HomePageTwo;