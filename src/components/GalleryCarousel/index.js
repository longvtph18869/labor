import React from 'react';
import {Link} from "react-router-dom";
import gallery41 from '../../doc/img/gallary/gallery41.jpg';
import gallery42 from '../../doc/img/gallary/gallery42.jpg';
import Swiper from 'react-id-swiper';

const galleryPosts = [
    {
        photo: gallery41,
        title: 'Japan’s virus success has puzzled the world. Is its luck running out?',
    },
    {
        photo: gallery42,
        title: 'Japan’s virus success has puzzled the world. Is its luck running out?',
    },
];

const GalleryCarousel = () => {
    const params = {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.owl-dots',
            clickable: true
        }
    };
    return (
        <div className="dots_style1 mb30">
            <div className="gallary_carousel">
                <Swiper {...params}>
                    {galleryPosts.map((item, i) => (
                        <div key={i} className="single_post post_type6 border-radious7 xs-mb30">
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
                                <h4><Link to="/">{item.title}</Link></h4>
                            </div>
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default GalleryCarousel;