import React from 'react';
import trend22 from '../../doc/img/trending/trend22.jpg';
import FontAwesome from "../uiStyle/FontAwesome";
import {Link} from "react-router-dom";

const trendingPost = [
    {
        photo: trend22,
        title: 'Japan’s virus puzzled the world luck running out?',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        photo: trend22,
        title: 'Japan’s virus puzzled the world luck running out?',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        photo: trend22,
        title: 'Japan’s virus puzzled the world luck running out?',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
];
const WidgetTrendingNewsTwo = () => {
    return (
        <div className="trending_widget white_bg mb30 padding20 border-radious5">
            <h2 className="widget-title">Trending News</h2>
            {trendingPost.map((item, i) => (
                <div key={i} className={`single_post post_type3 post_type15 ${i+1 < trendingPost.length ? 'mb30' : ''}`}>
                    <div className="post_img border-radious5">
                        <Link to="/">
                            <img src={item.photo} alt="thumb"/>
                        </Link>
                        <span className="tranding border_tranding"><FontAwesome name="bolt"/></span>
                    </div>
                    <div className="single_post_text">
                        <h4><Link to="/post1">{item.title}</Link></h4>
                        <div className="space-10"/>
                        <p className="post-p">{item.description}</p>
                        <div className="space-20"/>
                        <div className="meta3"><Link to="/">TECHNOLOGY</Link>
                            <Link to="/">March 26, 2020</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WidgetTrendingNewsTwo;