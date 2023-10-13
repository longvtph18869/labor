import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
import Swiper from 'react-id-swiper';
import FontAwesome from "../uiStyle/FontAwesome";

import pop51 from '../../doc/img/popular/pop51.jpg';
import pop52 from '../../doc/img/popular/pop52.jpg';
import pop53 from '../../doc/img/popular/pop53.jpg';
import pop54 from '../../doc/img/popular/pop54.jpg';
import pop56 from '../../doc/img/popular/pop56.jpg';
import gallery42 from '../../doc/img/gallary/gallery42.jpg';

const populerPosts = [
    {
        photo: pop51,
        title: 'The city with highest quality of life in world.'
    },
    {
        photo: pop52,
        title: 'The city with highest quality of life in world.'
    },
    {
        photo: pop53,
        title: 'The city with highest quality of life in world.'
    },
    {
        photo: pop54,
        title: 'The city with highest quality of life in world.'
    },
    {
        photo: pop56,
        title: 'The city with highest quality of life in world.'
    },
];

const galleryPosts = [
    {
        photo: gallery42,
        title: 'apan’s virus success has puzzled the world. Is its luck running out?'
    },
    {
        photo: gallery42,
        title: 'apan’s virus success has puzzled the world. Is its luck running out?'
    },
    {
        photo: gallery42,
        title: 'apan’s virus success has puzzled the world. Is its luck running out?'
    },
];

const BusinessImageCarousel = () => {
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
        loop: true,
    };

    return (
        <div className="row">
            <div className="col-lg-7">
                <div className="image_carousel nav_style4 mb30">
                    <Swiper getSwiper={setSwiper} {...params}>
                        {galleryPosts.map((item, i) => (
                            <div key={i} className="single_post gradient1 post_type6 border-radious7 xs-mb30">
                                <div className="post_img gradient1">
                                    <div className="img_wrap">
                                        <Link to="/">
                                            <img src={item.photo} alt="thumb"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="single_post_text">
                                    <p className="meta meta_style4">Business <span>&nbsp;| &nbsp; March 26, 2020</span>
                                    </p>
                                    <h4><Link to="/video_post1">{item.title}</Link></h4>
                                </div>
                            </div>
                        ))}
                    </Swiper>
                    <div className="owl-nav">
                        <div onClick={goPrev} className="owl-prev"><FontAwesome name="angle-left"/></div>
                        <div onClick={goNext} className="owl-next"><FontAwesome name="angle-right"/></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="padding20 white_bg border-radious5 mb30">
                    <p className="meta before">Technology</p>
                    <div className="space-15"/>
                    {populerPosts.map((item, i) => (
                        <Fragment key={i}>
                            <div className="single_post type10 type16 type22 widgets_small mb15">
                                <div className="post_img">
                                    <div className="img_wrap">
                                        <Link to="/"><img src={item.photo} alt="thumb"/></Link>
                                    </div>
                                </div>
                                <div className="single_post_text">
                                    <h4><Link to="/">{item.title}</Link></h4>
                                </div>
                            </div>
                            {i + 1 < populerPosts.length ? <Fragment>
                                <div className="space-15"/>
                                <div className="border4"/>
                                <div className="space-15"/>
                            </Fragment> : null}
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BusinessImageCarousel;