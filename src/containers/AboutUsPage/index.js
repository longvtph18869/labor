import React, {Fragment, useState} from 'react';
import BreadCrumb from "../../components/BreadCrumb";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import {Link} from "react-router-dom";
import WidgetTab from "../../components/WidgetTab";
import WidgetTrendingNews from "../../components/WidgetTrendingNews";
import NewsLetter from "../../components/NewsLetter";
import EntertainmentNews from "../../components/EntertainmentNews";
import {Fade, Nav, NavItem, TabContent, TabPane} from "reactstrap";
import MostShareWidget from "../../components/MostShareWidget";
import BannerSection from "../../components/BannerSection";
import classnames from 'classnames';

// images
import banner2 from "../../doc/img/bg/sidebar-1.png";
import enter1 from '../../doc/img/entertrainment/enter1.jpg';
import enter2 from '../../doc/img/entertrainment/enter2.jpg';
import enter3 from '../../doc/img/entertrainment/enter3.jpg';
import enter4 from '../../doc/img/entertrainment/enter4.jpg';
import author1 from '../../doc/img/author/author1.png';
import calendar from '../../doc/img/icon/calendar.png';

const entertainments = [
    {
        image: enter1,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: enter2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: enter3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: enter4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: enter1,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: enter2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: enter3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: enter2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: enter3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: enter4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: enter3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: enter4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
];

const AboutUsPage = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    return (
        <Fragment>
            <BreadCrumb className="shadow5" title="Archive">
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
            <div className="archives padding-top-30">
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
                                        <img src={calendar} alt="calendar"/>
                                    </div>
                                </div>
                            </div>
                            <div className="about_posts_tab">
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <Fade in={activeTab === '1'}>
                                            <div className="row justify-content-center">
                                                <EntertainmentNews headerHide={true} entertainments={entertainments}/>
                                            </div>
                                        </Fade>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Fade in={activeTab === '2'}>
                                            <div className="row justify-content-center">
                                                <EntertainmentNews headerHide={true} entertainments={entertainments}/>
                                            </div>
                                        </Fade>
                                    </TabPane>
                                </TabContent>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="cpagination">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <Link className="page-link" to="/" aria-label="Previous">
                                                                <span aria-hidden="true"><FontAwesome
                                                                    name="caret-left"/></span>
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
                                                                <span aria-hidden="true"><FontAwesome
                                                                    name="caret-right"/></span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <WidgetTab/>
                            <WidgetTrendingNews/>
                            <div className="banner2 mb30">
                                <Link to="/">
                                    <img src={banner2} alt="thumb"/>
                                </Link>
                            </div>
                            <MostShareWidget title="Most Share"/>
                            <NewsLetter/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-70"/>
            <BannerSection/>
        </Fragment>
    )
};

export default AboutUsPage;