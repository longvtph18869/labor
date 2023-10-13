import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from 'react-id-swiper';
import {mostViewSort} from "../../utils/commonFunctions";

// images
import whats21 from '../../doc/img/whats/whats21.jpg';
import whats22 from '../../doc/img/whats/whats22.jpg';
import whats23 from '../../doc/img/whats/whats23.jpg';
import whats24 from '../../doc/img/whats/whats24.jpg';
import whats25 from '../../doc/img/whats/whats25.jpg';

const posts = [
    {
        image: whats21,
        category: 'TECHNOLOGY',
        title: 'Copa: Luis Suarez from devastated US',
    },
    {
        image: whats22,
        category: 'TECHNOLOGY',
        title: 'Copa: Luis Suarez from devastated US',
    },
    {
        image: whats23,
        category: 'TECHNOLOGY',
        title: 'Copa: Luis Suarez from devastated US',
    },
    {
        image: whats24,
        category: 'TECHNOLOGY',
        title: 'Copa: Luis Suarez from devastated US',
    },
    {
        image: whats25,
        category: 'TECHNOLOGY',
        title: 'Copa: Luis Suarez from devastated US',
    },
];

const Whatsnew = ({className, title}) => {
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
        loops: true,
        slidesPerView: 1,
        slidesPerColumn: 6,
    };
    return (
        <div className={`${className ? className : 'white_bg padding20 border-radious5 sm-mt30'}`}>
            <h2 className="widget-title">{title}</h2>
            <div className="popular_carousel multipleRowCarousel nav_style1">
                {/*CAROUSEL START*/}
                <Swiper getSwiper={setSwiper} {...params}>
                    {mostViewSort(posts).map((item, i) => (
                        <div key={i} className="single_post type10 type16 widgets_small">
                            <div className="post_img">
                                <div className="img_wrap">
                                    <Link to="/">
                                        <img src={item.image} alt="thubm"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="single_post_text">
                                <h4><Link to="/post1">{item.title}</Link></h4>
                                <div className="meta4"><Link to="/">{item.category}</Link></div>
                                {i + 1 < posts.length ? <Fragment>
                                    <div className="space-5"/>
                                    <div className="border_black"/>
                                    <div className="space-15"/>
                                </Fragment> : null}
                            </div>
                        </div>
                    ))}
                </Swiper>
                <div className="navBtns">
                    <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left"/></div>
                    <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right"/></div>
                </div>
                {/*CAROUSEL END*/}
            </div>
        </div>
    );
};

export default Whatsnew;