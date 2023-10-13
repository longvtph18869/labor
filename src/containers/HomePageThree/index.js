import React, {Fragment} from 'react';
import MainMenuThree from "../../components/MainMenuThree";
import HeroArea from "../../components/HeroArea";
import TrendingNewsThree from "../../components/TrendingNewsThree";
import BusinessCarousel from "../../components/BusinessCarousel";
import BusinessImageCarousel from "../../components/BusinessImageCarousel";
import WidgetFinanceTwo from "../../components/WidgetFinanceTwo";
import {Link} from "react-router-dom";
import VIdeoNewsSection from "../../components/VIdeoNewsSection";
import InternationalNews from "../../components/InternationalNews";
import ScienceNews from "../../components/ScienceNews";
import SportsNewsTwo from "../../components/SportsNewsTwo";
import GalleryCarousel from "../../components/GalleryCarousel";
import WidgetTabThree from "../../components/WidgetTabThree";
import FollowUs from "../../components/FollowUs";
import WidgetOpinionNews from "../../components/WidgetOpinionNews";
import NewsLetter from "../../components/NewsLetter";
import CategoryFour from "../../components/CategoryFour";

import banner4 from '../../doc/img/bg/banner4.png';
import banner42 from '../../doc/img/bg/banner42.png';
import finance41 from '../../doc/img/finance/finance41.jpg';
import international41 from '../../doc/img/international/international41.jpg';
import international42 from '../../doc/img/international/international42.jpg';
import international43 from '../../doc/img/international/international43.jpg';
import international44 from '../../doc/img/international/international44.jpg';
import international45 from '../../doc/img/international/international45.jpg';

const internationalPosts = [
    {
        photo: international41,
        title: 'Investors explain COVID-19’s impact on consumer startups',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with',
    },
    {
        photo: international42,
        title: 'Investors explain COVID-19’s impact on consumer startups',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with',
    },
    {
        photo: international43,
        title: 'Investors explain COVID-19’s impact on consumer startups',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with',
    },
    {
        photo: international44,
        title: 'Investors explain COVID-19’s impact on consumer startups',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with',
    },
    {
        photo: international45,
        title: 'Investors explain COVID-19’s impact on consumer startups',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with',
    },
    {
        photo: international43,
        title: 'Investors explain COVID-19’s impact on consumer startups',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with',
    },
];

const financePosts = [
    {
        photo: finance41,
        title: 'Copa America: Luis Suarez from devastated US',
        description: 'The property, complete with seates screening from room amphitheater pond with sandy'
    },
    {
        photo: finance41,
        title: 'Copa America: Luis Suarez from devastated US',
        description: 'The property, complete with seates screening from room amphitheater pond with sandy'
    },
];
const financePosts2 = [
    {
        photo: finance41,
        title: 'Copa America: Luis Suarez from devastated US',
        description: 'The property, complete with seates screening from room amphitheater pond with sandy'
    },
    {
        photo: finance41,
        title: 'Copa America: Luis Suarez from devastated US',
        description: 'The property, complete with seates screening from room amphitheater pond with sandy'
    },
    {
        photo: finance41,
        title: 'Copa America: Luis Suarez from devastated US',
        description: 'The property, complete with seates screening from room amphitheater pond with sandy'
    },
];

const HomePageThree = () => {
    return (
        <Fragment>
            <div className="wrapper_welcome">
                <MainMenuThree className="home4menu"/>
                <HeroArea/>
                <div className="bg4">
                    <div className="space-60"/>
                    <div className="total3 mb30">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-xl-8">
                                    <TrendingNewsThree/>
                                    <BusinessCarousel/>
                                    <BusinessImageCarousel/>
                                </div>
                                <div className="col-md-6 col-xl-4 d-md-none d-xl-block">
                                    <WidgetFinanceTwo data={financePosts} title="Finance"/>
                                    <div className="banner2 mb30 border-radious5">
                                        <Link to="/">
                                            <img src={banner4} alt="banner4"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <VIdeoNewsSection/>
                    </div>
                    <div className="inernational4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-xl-8">
                                    <InternationalNews data={internationalPosts} className="mb30" title={true} showMore={true}/>
                                    <div className="banner_area mb30 xs-mt60">
                                        <Link to="/">
                                            <img src={banner42} alt="banner42"/>
                                        </Link>
                                    </div>
                                    <ScienceNews/>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <SportsNewsTwo/>
                                        </div>
                                        <div className="col-md-6">
                                            <GalleryCarousel/>
                                            <WidgetTabThree/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-xl-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-xl-12 col-md-6">
                                            <FollowUs className="padding20 white_bg shadow7" title="Follow Us"/>
                                            <WidgetOpinionNews/>
                                        </div>
                                        <div className="col-md-6 col-xl-12">
                                            <NewsLetter titleClass="white" className="news_letter4 border-radious5"/>
                                            <CategoryFour/>
                                            <WidgetFinanceTwo data={financePosts2} title="Inernational"/>
                                            <div className="banner2 mb30 border-radious5  d-md-none d-xl-block">
                                                <Link to="/">
                                                    <img src={banner4} alt="banner4"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-60"/>
                </div>
            </div>
        </Fragment>
    );
};

export default HomePageThree;