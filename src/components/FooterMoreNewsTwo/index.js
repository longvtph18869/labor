import React, {Fragment} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import {Link} from "react-router-dom";

const news = [
    {
        title: 'Japan’s virus success puzzled the world luck running out?',
        desc: 'The property, complete with seates screening from room amphitheater pond with sandy shower…'
    },
    {
        title: 'Japan’s virus success puzzled the world luck running out?',
        desc: 'The property, complete with seates screening from room amphitheater pond with sandy shower…'
    },
    {
        title: 'Japan’s virus success puzzled the world luck running out?',
        desc: 'The property, complete with seates screening from room amphitheater pond with sandy shower…'
    },
    {
        title: 'Japan’s virus success puzzled the world luck running out?',
        desc: 'The property, complete with seates screening from room amphitheater pond with sandy shower…'
    },
];
const FooterMoreNewsTwo = () => {
    return (
        <div className="footer_more_news mb30">
            <h3 className="widget-title">More news</h3>
            <div className="more_newss">
                {news.map((item, i) => (
                    <Fragment key={i}>
                        <div className="single_more_news">
                            <p className="meta">TECHNOLOGY</p>
                            <Link to="/">{item.title}</Link>
                            <p>{item.desc}</p>
                            <ul className="mt20 like_cm">
                                <li><Link to="/"><FontAwesome name="eye"/> 6745</Link></li>
                                <li><Link to="/"><FontAwesome name="heart"/> 6745</Link></li>
                                <li><Link to="/"><FontAwesome name="share"/> 6745</Link></li>
                            </ul>
                        </div>
                        {i + 1 < news.length ? <Fragment>
                            <div className="space-15"/>
                            <div className="border_black"/>
                            <div className="space-15"/>
                        </Fragment> : null}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default FooterMoreNewsTwo;