import React, {Fragment, useState} from 'react';
import MainMenuThree from "../../components/MainMenuThree";
import BannerSectionThree from "../../components/BannerSectionThree";
import FollowUs from "../../components/FollowUs";
import WidgetFinanceTwo from "../../components/WidgetFinanceTwo";
import NewsLetter from "../../components/NewsLetter";
import {Link} from "react-router-dom";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import {Fade, Nav, NavItem, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";
import BreadCrumb from "../../components/BreadCrumb";
import CategoryFour from "../../components/CategoryFour";

import banner4 from '../../doc/img/bg/banner4.png';
import finance41 from "../../doc/img/finance/finance41.jpg";
import calendarImg from '../../doc/img/icon/calendar.png';
import author1 from '../../doc/img/author/author1.png';
import video32 from '../../doc/img/blog/video32.jpg';

const news = [
    {
        photo: video32,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Japan’s virus puzzled the world luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        photo: video32,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Japan’s virus puzzled the world luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        photo: video32,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Japan’s virus puzzled the world luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        photo: video32,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Japan’s virus puzzled the world luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        photo: video32,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Japan’s virus puzzled the world luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        photo: video32,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Japan’s virus puzzled the world luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        photo: video32,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Japan’s virus puzzled the world luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        photo: video32,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Japan’s virus puzzled the world luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        photo: video32,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Japan’s virus puzzled the world luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        photo: video32,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Japan’s virus puzzled the world luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
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

const AboutUsThreePage = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    return (
        <Fragment>
            <MainMenuThree/>
            <BreadCrumb className="shadow5 layout3" title="about">
                <Fragment>
                    <div className="space-50"/>
                    <div className="row">
                        <div className="col-12">
                            <div className="author_about">
                                <div className="author_img">
                                    <div className="author_wrap">
                                        <img src={author1} alt="author1"/>
                                    </div>
                                </div>
                                <div className="author_content"><Link to="/">QuomodoSoft</Link>
                                    <ul className="inline">
                                        <li>News Writer</li>
                                        <li>Since: April 25, 2020</li>
                                    </ul>
                                </div>
                                <p>QuomodoSoft is an investigative reporter for Newspark, based in Bangladesh. He
                                    started at
                                    The Times in 1999 covering Mayor Rudolph W. Giuliani and then the Sept. 11,
                                    2001,
                                    attacks.</p>
                                <br/>
                                <p>He is a three-time winner of the Pulitzer Prize for explanatory reporting,
                                    investigative reporting and as part of team for foreign reporting. He
                                    previously
                                    worked at The Bangladesh Post and The Hartford Courant.</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-50"/>
                </Fragment>
            </BreadCrumb>
            <div className="archives padding-top-30 layout3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <div className="row">
                                <div className="col-10 align-self-center">
                                    <div className="about_post_list">
                                        <Nav tabs>
                                            <NavItem>
                                                <div
                                                    className={classnames({active: activeTab === '1'})}
                                                    onClick={() => {
                                                        toggle('1');
                                                    }}
                                                >
                                                    Latest news
                                                </div>
                                            </NavItem>
                                            <NavItem>
                                                <div
                                                    className={classnames({active: activeTab === '2'})}
                                                    onClick={() => {
                                                        toggle('2');
                                                    }}
                                                >
                                                    Popular news
                                                </div>
                                            </NavItem>
                                        </Nav>
                                    </div>
                                </div>
                                <div className="col-2 text-right align-self-center">
                                    <div className="calender mb20">
                                        <img src={calendarImg} alt="calendar"/>
                                    </div>
                                </div>
                            </div>
                            <div className="about_posts_tab">
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <Fade in={activeTab === '1'}>
                                            <div className="row justify-content-center">
                                                {news.map((item, i) => (
                                                    <div key={i} className="col-lg-6">
                                                        <div
                                                            className="single_post post_type3 shadow7 mb30 post_type15 border-radious5">
                                                            <div className="post_img border-radious5">
                                                                <div className="img_wrap">
                                                                    <img src={item.photo} alt="thumb"/>
                                                                </div>
                                                                <span className="tranding border_tranding"><FontAwesome
                                                                    name="bolt"/></span>
                                                            </div>
                                                            <div className="single_post_text padding20 white_bg">
                                                                <Link to="/post1">{item.title}</Link>
                                                                <div className="space-10"/>
                                                                <p className="post-p">{item.body}</p>
                                                                <div className="space-20"/>
                                                                <div className="meta3"><Link to="/">{item.category}</Link>
                                                                    <Link to="/">{item.date}</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Fade>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Fade in={activeTab === '2'}>
                                            <div className="row justify-content-center">
                                                {news.map((item, i) => (
                                                    <div key={i} className="col-lg-6">
                                                        <div
                                                            className="single_post post_type3 mb30 post_type15 border-radious5">
                                                            <div className="post_img border-radious5">
                                                                <div className="img_wrap">
                                                                    <img src={item.photo} alt="thumb"/>
                                                                </div>
                                                                <span className="tranding border_tranding"><FontAwesome
                                                                    name="bolt"/></span>
                                                            </div>
                                                            <div className="single_post_text padding20 white_bg">
                                                                <Link to="/post1">{item.title}</Link>
                                                                <div className="space-10"/>
                                                                <p className="post-p">{item.body}</p>
                                                                <div className="space-20"/>
                                                                <div className="meta3"><Link to="/">{item.category}</Link>
                                                                    <Link to="/">{item.date}</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Fade>
                                    </TabPane>
                                </TabContent>
                            </div>

                            <div className="cpagination v4 padding5050">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link className="page-link" to="/" aria-label="Previous">
                                                <span aria-hidden="true">
                                                    <FontAwesome name="caret-left"/>
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="/">1</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="/">..</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="/">5</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="/" aria-label="Next">
                                                <span aria-hidden="true">
                                                    <FontAwesome name="caret-right"/>
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <FollowUs title="Follow Us"/>
                            <div className="banner2 mb30 border-radious5">
                                <Link to="">
                                    <img src={banner4} alt="banner4"/>
                                </Link>
                            </div>
                            <WidgetFinanceTwo data={financePosts} title="Finance"/>
                            <NewsLetter titleClass="white" className="news_letter4 border-radious5"/>
                            <CategoryFour/>
                        </div>
                    </div>
                </div>
            </div>
            <BannerSectionThree/>
        </Fragment>
    );
};

export default AboutUsThreePage;