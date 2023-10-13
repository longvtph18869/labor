import React, {Fragment} from 'react';
import BreadCrumb from "../../components/BreadCrumb";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import {Link} from "react-router-dom";
import WidgetTab from "../../components/WidgetTab";
import WidgetTrendingNews from "../../components/WidgetTrendingNews";
import NewsLetter from "../../components/NewsLetter";
import EntertainmentNews from "../../components/EntertainmentNews";
import MostShareWidget from "../../components/MostShareWidget";
import FollowUs from "../../components/FollowUs";

// images
import banner2 from "../../doc/img/bg/sidebar-1.png";
import enter1 from '../../doc/img/entertrainment/enter1.jpg';
import enter2 from '../../doc/img/entertrainment/enter2.jpg';
import enter3 from '../../doc/img/entertrainment/enter3.jpg';
import enter4 from '../../doc/img/entertrainment/enter4.jpg';
import calendar from '../../doc/img/icon/calendar.png';
import BannerSection from "../../components/BannerSection";

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

const ArchiveDarkPage = () => {
    return (
        <Fragment>
            <BreadCrumb className="white" title="Archive">
                <Fragment>
                    <div className="space-50"/>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="table_content">
                                <h2 className="widget-title">Archive:2020</h2>
                                <ul>
                                    <li><Link to="/">January</Link>
                                    </li>
                                    <li><Link to="/">February</Link>
                                    </li>
                                    <li><Link to="/">March</Link>
                                    </li>
                                    <li><Link className="active" to="/">April</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="table_content border_black_left pl-md-5">
                                <h2 className="widget-title">Years list</h2>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="yearList">
                                            <ul>
                                                <li><Link to="/">2000</Link></li>
                                                <li><Link to="/">2001</Link></li>
                                                <li><Link to="/">2002</Link></li>
                                                <li><Link to="/">2003</Link></li>
                                                <li><Link className="active" to="/">2004</Link></li>
                                                <li><Link to="/">2005</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="yearList">
                                            <ul>
                                                <li><Link to="/">2006</Link></li>
                                                <li><Link to="/">2007</Link></li>
                                                <li><Link to="/">2008</Link></li>
                                                <li><Link to="/">2009</Link></li>
                                                <li><Link to="/">2010</Link></li>
                                                <li><Link to="/">2011</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="yearList">
                                            <ul>
                                                <li><Link to="/">2012</Link></li>
                                                <li><Link to="/">2013</Link></li>
                                                <li><Link to="/">2014</Link></li>
                                                <li><Link to="/">2015</Link></li>
                                                <li><Link to="/">2016</Link></li>
                                                <li><Link to="/">2017</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="yearList">
                                            <ul>
                                                <li><Link to="/">2018</Link></li>
                                                <li><Link to="/">2019</Link></li>
                                                <li><Link to="/">2014</Link></li>
                                                <li><Link to="/">2015</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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
                                <div className="col-6 align-self-center">
                                    <div className="heading">
                                        <h2 className="widget-title">Archive</h2>
                                    </div>
                                </div>
                                <div className="col-6 text-right">
                                    <div className="calender">
                                        <img src={calendar} alt="calendar"/>
                                    </div>
                                </div>
                            </div>
                            <div className="about_posts_tab">
                                <div className="row justify-content-center">
                                    <EntertainmentNews headerHide={true} entertainments={entertainments}/>
                                </div>
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
                            <WidgetTab dark={true}/>
                            <FollowUs title="Follow Us"/>
                            <WidgetTrendingNews dark={true}/>
                            <div className="banner2 mb30">
                                <Link to="/">
                                    <img src={banner2} alt="thumb"/>
                                </Link>
                            </div>
                            <MostShareWidget dark={true} title="Most Share"/>
                            <NewsLetter/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-30"/>
            <BannerSection className="parimay_bg padding5050"/>
            <div className="space-50"/>
        </Fragment>
    )
};

export default ArchiveDarkPage;