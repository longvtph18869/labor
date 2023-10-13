import React from 'react';

// image
import video4 from '../../doc/img/bg/video4.jpg';
import {Link} from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";

const blog = [
    {
        photo: video4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Japan’s virus puzzled the world luck running out?',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        photo: video4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Japan’s virus puzzled the world luck running out?',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        photo: video4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Japan’s virus puzzled the world luck running out?',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
];
const OurBlogSectionTwo = () => {
    return (
        <div className="theme3_bg section-padding layout3">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading">
                            <h2 className="widget-title">Our Latest Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {blog.map((item, i) => (
                        <div key={i} className="col-md-6 col-lg-4">
                            <div className="single_post post_type3 mb30 post_type15 border-radious5">
                                <div className="post_img border-radious5">
                                    <div className="img_wrap">
                                        <img src={item.photo} alt="thumb"/>
                                    </div>
                                    <span className="tranding border_tranding"><FontAwesome name="bolt"/></span>
                                </div>
                                <div className="single_post_text padding20 white_bg">
                                    <Link to="/">{item.title}</Link>
                                    <div className="space-10"/>
                                    <p className="post-p">{item.description}</p>
                                    <div className="space-20"/>
                                    <div className="meta3">
                                        <Link to="/">{item.category}</Link>
                                        <Link to="/">{item.date}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurBlogSectionTwo;