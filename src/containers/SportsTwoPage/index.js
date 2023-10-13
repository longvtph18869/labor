import React, {Fragment} from 'react';
import Whatsnew from "../../components/Whatsnew";
import {Link} from "react-router-dom";
import NewsLetter from "../../components/NewsLetter";
import FollowUs from "../../components/FollowUs";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import BannerSection from "../../components/BannerSection";
import WidgetTrendingNewsTwo from "../../components/WidgetTrendingNewsTwo";

import sd_banner_img from '../../doc/img/bg/sidebar-1.png';
import video21 from '../../doc/img/video/video21.jpg';

const sports_news = [
    {
        photo: video21,
        category: 'SPORTS',
        date: 'April 26, 2020',
        time: '8:36mm',
        title: 'ICC Men’s Cricket World Cup digital content delivers record-breaking numbers',
    },
    {
        photo: video21,
        category: 'SPORTS',
        date: 'April 26, 2020',
        time: '8:36mm',
        title: 'ICC Men’s Cricket World Cup digital content delivers record-breaking numbers',
    },
    {
        photo: video21,
        category: 'SPORTS',
        date: 'April 26, 2020',
        time: '8:36mm',
        title: 'ICC Men’s Cricket World Cup digital content delivers record-breaking numbers',
    },
    {
        photo: video21,
        category: 'SPORTS',
        date: 'April 26, 2020',
        time: '8:36mm',
        title: 'ICC Men’s Cricket World Cup digital content delivers record-breaking numbers',
    },
    {
        photo: video21,
        category: 'SPORTS',
        date: 'April 26, 2020',
        time: '8:36mm',
        title: 'ICC Men’s Cricket World Cup digital content delivers record-breaking numbers',
    },
];
const SportsTwoPage = () => {
    return (
        <Fragment>
            <div className="archives layout3 post post1 padding-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bridcrumb"><Link to="/">Home</Link> / Categories / Sports</div>
                        </div>
                    </div>
                    <div className="space-30"/>
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <div className="categories_title">
                                        <h5>Category: <Link to="/">Sports</Link></h5>
                                    </div>
                                </div>
                            </div>
                            {sports_news.map((item, i) => (
                                <div key={i} className="single_post post_type3 post_type11 post_type21 xs-mb30 mb30">

                                    <div className="post_img border-radious7">
                                        <div className="img_wrap">
                                            <Link to="/" className="play_btn">
                                                <img src={item.photo} alt="thumb"/>
                                            </Link>
                                        </div>
                                        <Link to="/" className="youtube_middle"><FontAwesome name="youtube"/></Link>
                                        <div className="sport_meta_ab inline">
                                            <ul>
                                                <li>{item.category}</li>
                                                <li>{item.date}</li>
                                                <li>{item.time}</li>
                                            </ul>
                                        </div>
                                        <div className="social_share">
                                            <ul className="meta_share inline">
                                                <li><Link to="/"><FontAwesome name="bookmark"/></Link></li>
                                                <li><Link to="/"><FontAwesome name="share"/></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single_post_text">
                                        <h4><Link to="/post1">{item.title}</Link></h4>
                                        <div className="space-10"/>
                                        <ul className=" like_cm">
                                            <li><Link to="/"><FontAwesome name="eye"/> 6745</Link></li>
                                            <li><Link to="/"><FontAwesome name="heart"/> 6745</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                            <div className="row">
                                <div className="col-12">
                                    <div className="cpagination v3 padding5050">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li>
                                                    <Link to="/" aria-label="Previous"> <span
                                                        aria-hidden="true"><FontAwesome name="caret-left"/></span>
                                                    </Link>
                                                </li>
                                                <li><Link to="/">1</Link></li>
                                                <li><Link to="/">..</Link></li>
                                                <li><Link to="/">5</Link></li>
                                                <li>
                                                    <Link to="/" aria-label="Next"> <span
                                                        aria-hidden="true"><FontAwesome name="caret-right"/></span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <FollowUs
                                title="Contact Us"
                                className="follow_box widget sociai_style3 mb30 white_bg padding20 white_bg border-radious5 inner_socail4"
                            />
                            <WidgetTrendingNewsTwo/>
                            <div className="banner2 mb30">
                                <Link to="/">
                                    <img className="border-radious5" src={sd_banner_img} alt="sd_banner_img"/>
                                </Link>
                            </div>
                            <Whatsnew className="most_widget3 white_bg mb30 padding20 border-radious5"
                                      title="Most View"/>
                            <NewsLetter className="mb-0 news3bg padding20 white_bg border-radious5"/>
                        </div>
                    </div>
                </div>
            </div>
            <BannerSection className="padding5050 theme3_bg layout3"/>
        </Fragment>
    );
};

export default SportsTwoPage;