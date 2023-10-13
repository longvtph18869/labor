import React, {Fragment} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import {Link} from "react-router-dom";

// images
import trendbig1 from '../../doc/img/trending/trendbig1.jpg';
import transm4 from '../../doc/img/trending/transm4.jpg';
import transm5 from '../../doc/img/trending/transm5.jpg';
import transm6 from '../../doc/img/trending/transm6.jpg';

const posts = [
    {
        photo: transm4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy Zhang a Chinese busy woman and Dhaka',
    },
    {
        photo: transm5,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'U.S. Response subash says he will label regions by risk of…',
    },
    {
        photo: transm6,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Venezuela elan govt and opposit the property collect',
    },
];

const WidgetTrendingNews = ({dark}) => {
    return (
        <div className="trending_widget mb30">
            <h2 className="widget-title">Tending News</h2>
            <div className="single_post post_type3">
                <div className="post_img">
                    <div className="img_wrap">
                        <img src={trendbig1} alt="trendbig1"/>
                    </div>
                    <span className="tranding"><FontAwesome name="bolt"/></span>
                </div>
                <div className="single_post_text">
                    <div className="meta3"><Link to="/">TECHNOLOGY</Link>
                        <Link to="/">March 26, 2020</Link>
                    </div>
                    <h4><Link to="/post1">There may be no consoles in the future ea exec says</Link></h4>
                    <div className="space-10"/>
                    <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat
                        amphitheater and a swimming pond with sandy shower…</p>
                </div>
            </div>

            {posts.map((item, i) => (
                <Fragment key={i}>
                    <div className="space-15"/>
                    {dark ? <div className="border_white"/> : <div className="border_black"/>}
                    <div className="space-30"/>
                    <div className="single_post widgets_small">
                        <div className="post_img">
                            <div className="img_wrap">
                                <img src={item.photo} alt="thumb"/>
                            </div>
                            <span className="tranding"><FontAwesome name="bolt"/></span>
                        </div>
                        <div className="single_post_text">
                            <div className="meta2"><Link to="/">{item.category}</Link>
                                <Link to="/">{item.date}</Link>
                            </div>
                            <h4><Link to="/post1">{item.title}</Link></h4>
                        </div>
                    </div>
                </Fragment>
            ))}
        </div>
    );
};

export default WidgetTrendingNews;