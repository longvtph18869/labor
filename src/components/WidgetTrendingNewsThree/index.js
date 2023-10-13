import React from 'react';
import video32 from "../../doc/img/blog/video32.jpg";
import blog_small1 from "../../doc/img/blog/blog_small1.jpg";
import FontAwesome from "../uiStyle/FontAwesome";
import {Link} from "react-router-dom";

const trends = [
    {
        photo: blog_small1,
        title: 'Copa: Luis Suarez from devastated US'
    },
    {
        photo: blog_small1,
        title: 'Copa: Luis Suarez from devastated US'
    },
    {
        photo: blog_small1,
        title: 'Copa: Luis Suarez from devastated US'
    },
    {
        photo: blog_small1,
        title: 'Copa: Luis Suarez from devastated US'
    },
];
const WidgetTrendingNewsThree = () => {
    return (
        <div className="tranding3_side white_bg mb30 padding20 white_bg border-radious5">
            <h3 className="widget-title">Tranding News</h3>
            <div className="single_post post_type3 post_type15 mb10">
                <div className="post_img border-radious5">
                    <div className="img_wrap">
                        <img src={video32} alt="video32"/>
                    </div>
                    <span className="tranding border_tranding"><FontAwesome name="bolt"/></span>
                </div>
                <div className="single_post_text"><Link to="/post1">Japan’s virus puzzled the world luck running
                    out?</Link>
                    <div className="space-10"/>
                    <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat
                        amphitheater and a swimming pond with sandy shower…</p>
                    <div className="space-20"/>
                    <div className="meta3"><Link to="/">TECHNOLOGY</Link>
                        <Link to="/">March 26, 2020</Link>
                    </div>
                </div>
            </div>
            {trends.map((item, i) => (
                <div key={i} className="single_post type10 type16 widgets_small mb15">
                    <div className="post_img">
                        <Link to="">
                            <img src={item.photo} alt="thumb"/>
                        </Link>
                    </div>
                    <div className="single_post_text">
                        <h4><Link to="/post1">{item.title}</Link></h4>
                        <div className="meta4"><Link to="/">TECHNOLOGY</Link></div>
                        <div className="space-5"/>
                        <div className="border_black"/>
                        <div className="space-15"/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WidgetTrendingNewsThree;