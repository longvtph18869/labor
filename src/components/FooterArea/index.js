import React, {useState} from 'react';
import {Link} from "react-router-dom";
import FooterCopyright from "../FooterCopyright";
import FooterMoreNews from "../FooterMoreNews";
import TwitterFeed from "../TwitterFeed";
import FontAwesome from "../uiStyle/FontAwesome";

import flogo from '../../doc/img/logo/footer_logo.png';
import FooterNewsCategories from "../FooterNewsCategories";

const FooterArea = ({className}) => {
    const [email, setEmail] = useState('');
    const submitHandler = e => {
        e.preventDefault();
        setEmail('')
    };
    return (
        <div className={`footer footer_area1 ${className ? className : ''}`}>
            <div className="container">
                <div className="cta">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <div className="footer_logo logo">
                                <Link to="/">
                                    <img src={flogo} alt="logo"/>
                                </Link>
                            </div>
                            <div className="social2">
                                <ul className="inline">
                                    <li><Link to="#"><FontAwesome name="twitter"/></Link></li>
                                    <li><Link to="#"><FontAwesome name="facebook-f"/></Link></li>
                                    <li><Link to="#"><FontAwesome name="youtube-play"/></Link></li>
                                    <li><Link to="#"><FontAwesome name="instagram"/></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 offset-lg-2 align-self-center">
                            <div className="signup_form">
                                <form onSubmit={submitHandler}>
                                    <input onChange={e => setEmail(e.target.value)} value={email} className="signup"
                                           type="email" placeholder="Your email address"/>
                                    <button type="submit" className="cbtn">sign up</button>
                                </form>
                                <p>We hate spam as much as you do</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border_white"/>
                <div className="space-40"/>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-sm-6 col-lg">
                                <div className="single_footer_nav border_white_right">
                                    <FooterNewsCategories/>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg">
                                <div className="single_footer_nav">
                                    <h3 className="widget-title2">Living</h3>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><Link to="/">Crossword</Link>
                                                </li>
                                                <li><Link to="/">Food</Link>
                                                </li>
                                                <li><Link to="/">Automobiles</Link>
                                                </li>
                                                <li><Link to="/">Education</Link>
                                                </li>
                                                <li><Link to="/">Health</Link>
                                                </li>
                                                <li><Link to="/">Magazine</Link>
                                                </li>
                                                <li><Link to="/">Weddings</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><Link to="/">Classifieds</Link>
                                                </li>
                                                <li><Link to="/">Photographies</Link>
                                                </li>
                                                <li><Link to="/">NYT Store</Link>
                                                </li>
                                                <li><Link to="/">Journalisms</Link>
                                                </li>
                                                <li><Link to="/">Public Editor</Link>
                                                </li>
                                                <li><Link to="/">Tools & Services</Link>
                                                </li>
                                                <li><Link to="/">My Account</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-40"/>
                        <div className="border_white"/>
                        <div className="space-40"/>
                        <div className="row">
                            <div className="col-sm-6 col-lg-5">
                                <div className="single_footer_nav border_white_right">
                                    <h3 className="widget-title2">Opinion</h3>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><Link to="/">Today’s Opinion</Link>
                                                </li>
                                                <li><Link to="/">Op-Ed Contributing</Link>
                                                </li>
                                                <li><Link to="/">Contributing Writers</Link>
                                                </li>
                                                <li><Link to="/">Business News</Link>
                                                </li>
                                                <li><Link to="/">Collections</Link>
                                                </li>
                                                <li><Link to="/">Today’s Paper</Link>
                                                </li>
                                                <li><Link to="/">Saturday Review</Link>
                                                </li>
                                                <li><Link to="/">Product Review</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-7">
                                <TwitterFeed/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <FooterMoreNews/>
                    </div>
                </div>
            </div>
            <FooterCopyright/>
        </div>
    );
};

export default FooterArea;