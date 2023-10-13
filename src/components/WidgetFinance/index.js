import React from 'react';
import finance21 from '../../doc/img/finance/finance21.jpg';
import finance22 from '../../doc/img/finance/finance22.jpg';
import finance23 from '../../doc/img/finance/finance23.jpg';
import finance24 from '../../doc/img/finance/finance24.jpg';
import FontAwesome from "../uiStyle/FontAwesome";
import {Link} from "react-router-dom";

const finance = [
    {
        image: finance21,
        date: 'April 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
        body: 'The property, complete with seates screening from room amphitheater pond with sandy shower…'
    },
    {
        image: finance22,
        date: 'April 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
        body: 'The property, complete with seates screening from room amphitheater pond with sandy shower…'
    },
    {
        image: finance23,
        date: 'April 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
        body: 'The property, complete with seates screening from room amphitheater pond with sandy shower…'
    },
    {
        image: finance24,
        date: 'April 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
        body: 'The property, complete with seates screening from room amphitheater pond with sandy shower…'
    },
];
const WidgetFinance = () => {
    return (
        <div className="finance mb30 white_bg border-radious5 padding20 sm-mt30">
            <div className="heading">
                <h3 className="widget-title">Finance</h3>
            </div>
            {finance.map((item, i) => (
                <div key={i} className="single_post mb30 type18">
                    <div className="post_img">
                        <div className="img_wrap">
                            <Link to="/">
                                <img src={item.image} alt="thumb"/>
                            </Link>
                        </div>
                        <span className="batch3 date">{item.date}</span>
                    </div>
                    <div className="single_post_text">
                        <h4><Link to="/post1">{item.title}</Link></h4>
                        <div className="space-10"/>
                        <p className="post-p">{item.body}</p>
                        <ul className="mt20 like_cm">
                            <li><Link to="/"><FontAwesome name="eye"/> 6745</Link></li>
                            <li><Link to="/"><FontAwesome name="heart"/> 6745</Link></li>
                            <li><Link to="/"><FontAwesome name="share"/> 6745</Link></li>
                        </ul>
                    </div>
                </div>
            ))}
            <Link to="/" className="showmore">Show more</Link>
        </div>
    );
};

export default WidgetFinance;