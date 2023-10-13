import React, {Fragment} from 'react';

import sports21 from '../../doc/img/sports/sports21.jpg';
import sports22 from '../../doc/img/sports/sports22.jpg';
import sports23 from '../../doc/img/sports/sports23.jpg';
import sports24 from '../../doc/img/sports/sports24.jpg';
import sports25 from '../../doc/img/sports/sports25.jpg';
import sports26 from '../../doc/img/sports/sports26.jpg';
import FontAwesome from "../uiStyle/FontAwesome";
import {Link} from "react-router-dom";

const sports = [
    {
        photo: sports22,
        category: 'Technology',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        photo: sports23,
        category: 'Technology',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        photo: sports24,
        category: 'Technology',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        photo: sports25,
        category: 'Technology',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        photo: sports26,
        category: 'Technology',
        title: 'Copa America: Luis Suarez from devastated US',
    },
];
const Sports = () => {
    return (
        <div className="sport_side3 white_bg padding20 border-radious5">
            <h3 className="widget-title">Sports</h3>
            <div className="single_post mb30 type18">
                <div className="post_img">
                    <div className="img_wrap">
                        <Link to="/">
                            <img src={sports21} alt="thumb"/>
                        </Link>
                    </div>
                    <span className="batch3 date">April 26, 2020</span>
                </div>
                <div className="single_post_text">
                    <h4><Link to="/post1">Copa America: Luis Suarez from devastated US</Link></h4>
                    <div className="space-10"/>
                    <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat
                        amphitheater and a swimming pond with sandy shower…</p>
                    <ul className="mt20 like_cm">
                        <li><Link to="/"><FontAwesome name="eye"/> 6745</Link></li>
                        <li><Link to="/"><FontAwesome name="heart"/> 6745</Link></li>
                    </ul>
                </div>
            </div>
            {sports.map((item, i) => (
                <div key={i} className="single_post type10 type16 widgets_small mb15">
                    <div className="post_img">
                        <div className="img_wrap">
                            <Link to="/">
                                <img src={item.photo} alt="thumb"/>
                            </Link>
                        </div>
                    </div>
                    <div className="single_post_text">
                        <h4><Link to="/post1">{item.title}</Link></h4>
                        <p className="meta meta2">{item.category}</p>
                        {i + 1 < sports.length ? <Fragment>
                            <div className="space-5"/>
                            <div className="border_black"/>
                            <div className="space-15"/>
                        </Fragment> : null}
                    </div>
                </div>
            ))}
            <div className="space-20"/>
            <Link to="/" className="showmore">Show more</Link>
        </div>
    );
};

export default Sports;