import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Swiper from 'react-id-swiper';
import FontAwesome from "../uiStyle/FontAwesome";

const TopBarTwo = () => {
    const [swiper, setSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };
    const params = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    };
    return (
        <div className="topbar white_bg" id="top">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 align-self-center">
                        <div className="trancarousel_area">
                            <p className="trand">Tranding</p>
                            <div className="trancarousel nav_style1">
                                <Swiper getSwiper={setSwiper} className="trancarousel" {...params}>
                                    <div className="trancarousel_item">
                                        <p><Link to="/">Top 10 Best Movies of 2018 So Far: Great Movies To Watch
                                            Now</Link>
                                        </p>
                                    </div>
                                    <div className="trancarousel_item">
                                        <p><Link to="/">Top 10 Best Movies of 2018 So Far: Great Movies To Watch
                                            Now</Link>
                                        </p>
                                    </div>
                                    <div className="trancarousel_item">
                                        <p><Link to="/">Top 10 Best Movies of 2018 So Far: Great Movies To Watch
                                            Now</Link>
                                        </p>
                                    </div>
                                </Swiper>
                                <div className="navBtns">
                                    <button className="navBtn prevBtn" onClick={goPrev}><FontAwesome name="angle-left"/>
                                    </button>
                                    <button className="navBtn nextBtn" onClick={goNext}><FontAwesome
                                        name="angle-right"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 align-self-center">
                        <div className="top_date_social text-right">
                            <div className="social1">
                                <ul className="inline">
                                    <li><Link to="/"><FontAwesome name="twitter"/></Link></li>
                                    <li><Link to="/"><FontAwesome name="facebook-f"/></Link></li>
                                    <li><Link to="/"><FontAwesome name="youtube-play"/></Link></li>
                                    <li><Link to="/"><FontAwesome name="instagram"/></Link></li>
                                </ul>
                            </div>
                            <div className="user3"><FontAwesome name="user-circle"/></div>
                            <div className="lang-3"><Link to="#">English <FontAwesome name="angle-down"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBarTwo;