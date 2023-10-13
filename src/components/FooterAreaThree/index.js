import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import logo42 from "../../doc/img/logo/logo42.png";
import FontAwesome from "../uiStyle/FontAwesome";
import FooterNewsCategories from "../FooterNewsCategories";
import FooterMoreNewsTwo from "../FooterMoreNewsTwo";
import NewsLetter from "../NewsLetter";
import FollowUs from "../FollowUs";

import phone_black from "../../doc/img/icon/phone4.png";
import speaker_black from "../../doc/img/icon/speaker4.png";
import envelope_black from "../../doc/img/icon/envelope4.png";
import banner4 from "../../doc/img/bg/banner4.png";

const twitts = [
    {
        title: 'Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project',
        linkText: '@newspark #technology https://dribbble.com/subash_chandra',
        date: 'March 26, 2020',
    },
    {
        title: 'Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project',
        linkText: '@newspark #technology https://dribbble.com/subash_chandra',
        date: 'March 26, 2020',
    },
];

const FooterAreaThree = () => {
    return (
        <div className="footer footer_area3 ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="single_footer3 mb30">
                            <div className="logo">
                                <Link to="/home-three">
                                    <img src={logo42} alt="logo"/>
                                </Link>
                                <div className="space-10"/>
                            </div>
                            <p><span>Newspark</span> vitae elementum ros. Pellentesquees Leo sed mi ullamcorper
                                tristique mauris varius. congue enim in arcu maximus feugiat vitae ut quam finibus
                                risus molestie viverra.</p>
                        </div>
                        <div className="footer_contact">
                            <h3 className="widget-title2">Newspark news services</h3>
                            <div className="single_fcontact">
                                <div className="fcicon">
                                    <img src={phone_black} alt="phone_black"/>
                                </div>
                                <Link to="/">On your mobile</Link>
                            </div>
                            <div className="single_fcontact">
                                <div className="fcicon">
                                    <img src={speaker_black} alt="speaker_black"/>
                                </div>
                                <Link to="/">On smart speakers</Link>
                            </div>
                            <div className="single_fcontact">
                                <div className="fcicon">
                                    <img src={envelope_black} alt="envelope_black"/>
                                </div>
                                <Link to="/">Contact Newspark news</Link>
                            </div>
                        </div>
                        <div className="space-30"/>
                        <div className="border_black"/>
                        <div className="space-30"/>
                        <div className="single_footer_nav mb30">
                            <FooterNewsCategories/>
                        </div>
                        <div className="space-30"/>
                        <div className="border_black"/>
                        <div className="space-30"/>
                        <div className="twitter_feeds mb30">
                            <h3 className="widget-title">Twitter feed</h3>
                            {twitts.map((item, i) => (
                                <Fragment key={i}>
                                    <div key={i} className="single_twitter_feed">
                                        <div className="twitter_feed_icon"><FontAwesome name="twitter"/>
                                        </div>
                                        <h6>{item.title}… <span>{item.linkText}</span></h6>
                                        <p>{item.date}</p>
                                    </div>
                                    {i + 1 < twitts.length ? <Fragment>
                                        <div className="space-30"/>
                                        <div className="border_black"/>
                                        <div className="space-30"/>
                                    </Fragment> : null}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-8">
                        <div className="contacts3">
                            <div className="single_contact3">
                                <h6>Let's Talk</h6>
                                <Link to="/">+41 27 966 26690</Link>
                                <Link to="/">+880 1945 381758</Link>
                            </div>
                            <div className="single_contact3">
                                <h6>Let's Chat</h6>
                                <a href="mailto:hello@newspark.com">hello@newspark.com</a>
                                <a href="mailto:adsales@newspark.com">adsales@newspark.com</a>
                            </div>
                            <div className="single_contact3">
                                <h6>Headquaters</h6>
                                <p>44 Canal Center Plaza #200
                                    <br/>Alexandria, VA 22314, USA</p>
                            </div>
                        </div>
                        <div className="space-30"/>
                        <div className="border_black"/>
                        <div className="space-30"/>
                        <div className="row">
                            <div className="col-lg-6">
                                <FooterMoreNewsTwo/>
                            </div>
                            <div className="col-lg-6">
                                <NewsLetter/>
                                <FollowUs title="Follow Us"/>
                                <div className="banner2 mb30 ">
                                    <Link to="/" className="border-radious5">
                                        <img src={banner4} alt="banner"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="download_btn v4">
                            <div className="space-15"/>
                            <div className="border_black"/>
                            <div className="space-15"/>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="apps_desc">
                                        <h3 className="apps_title">Newspark app download</h3>
                                        <div className="space-5"/>
                                        <p>Free sign & download, iOS & Android app</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="download_btn_group">
                                        <Link className="app_btn" to="/"> <FontAwesome name="android"/>
                                            Download on the <span>google play</span>
                                        </Link>
                                        <Link className="app_btn" to="/"> <FontAwesome name="apple"/>
                                            Download on the <span>app store</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <p>&copy; Copyright 2020, All Rights Reserved</p>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="copyright_menus text-right">
                                <div className="language"/>
                                <div className="copyright_menu inline">
                                    <ul>
                                        <li><Link to="/">About</Link></li>
                                        <li><Link to="/">Advertise</Link></li>
                                        <li><Link to="/">Privacy & Policy</Link></li>
                                        <li><Link to="/">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterAreaThree;