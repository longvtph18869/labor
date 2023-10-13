import React from 'react';
import {Link} from "react-router-dom";
import TrendingCarousel from "../TrendingCarousel";
import FontAwesome from "../uiStyle/FontAwesome";

import big_img from '../../doc/img/trending/trend22.jpg';

const TrendingNewsTwo = () => {
    return (
        <div className="white_bg tranding3 padding20 border-radious5 mb30">
            <div className="row">
                <div className="col-12">
                    <div className="heading">
                        <h2 className="widget-title">Trending News</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="single_post post_type3 xs-mb90 post_type15">
                        <div className="post_img border-radious5">
                            <Link to="/">
                                <img src={big_img} alt="big_img"/>
                            </Link>
                            <span className="tranding border_tranding"><FontAwesome name='bolt'/></span>
                        </div>
                        <div className="single_post_text">
                            <h4><Link to="/post1">Japan’s virus puzzled the world luck running out?</Link></h4>
                            <div className="space-10"/>
                            <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat
                                amphitheater and a swimming pond with sandy shower…</p>
                            <div className="space-20"/>
                            <div className="meta3"><Link to="/">TECHNOLOGY</Link>
                                <Link to="/">March 26, 2020</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <TrendingCarousel/>
                </div>
            </div>
        </div>
    );
};

export default TrendingNewsTwo;