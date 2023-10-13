import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from 'react-id-swiper';

// images
import trends1 from '../../doc/img/trending/transm23.jpg';
import trends2 from '../../doc/img/trending/transm24.jpg';
import trends3 from '../../doc/img/trending/transm25.jpg';
import trends4 from '../../doc/img/trending/transm26.jpg';
import trends5 from '../../doc/img/trending/transm27.jpg';

import {mostViewSort} from "../../utils/commonFunctions";

const trends = [
    {
        image: trends1,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends5,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends1,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends5,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
];

const TrendingCarousel = () => {
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
        slidesPerView: 1,
        slidesPerColumn: 6,
    };
    return (
        <div className="popular_carousel multipleRowCarousel nav_style1">
            <Swiper getSwiper={setSwiper} {...params}>
                {mostViewSort(trends).map((item, i) => (
                    <div key={i}
                         className={`single_post type10 type16 widgets_small ${i + 2 < trends.length ? 'mb15' : ''}`}>
                        <div className="post_img">
                            <div className="img_wrap">
                                <Link to="/">
                                    <img src={item.image} alt="thumb"/>
                                </Link>
                            </div>
                        </div>
                        <div className="single_post_text">
                            <h4><Link to="/post1">{item.title}</Link></h4>
                            <div className="meta4"><Link to="/">{item.category}</Link></div>
                            {i + 2 < trends.length ? <Fragment>
                                <div className="space-10"/>
                                <div className="border_black"/>
                                <div className="space-10"/>
                            </Fragment> : ''}
                        </div>
                    </div>
                ))}
            </Swiper>
            <div className="navBtns">
                <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left"/></div>
                <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right"/></div>
            </div>
        </div>
    );
};

export default TrendingCarousel;