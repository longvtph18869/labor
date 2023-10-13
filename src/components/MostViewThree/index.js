import React, {Fragment} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import {Link} from "react-router-dom";

// images
import most26 from '../../doc/img/most_view/most26.jpg';
import most27 from '../../doc/img/most_view/most27.jpg';
import most28 from '../../doc/img/most_view/most28.jpg';

const posts = [
    {
        photo: most26,
        date: 'April 26, 2020',
        author: 'QuomodoSoft',
        title: 'Copa America: Luis Suarez from devastated US',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        photo: most27,
        date: 'April 26, 2020',
        author: 'QuomodoSoft',
        title: 'Copa America: Luis Suarez from devastated US',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        photo: most28,
        date: 'April 26, 2020',
        author: 'QuomodoSoft',
        title: 'Copa America: Luis Suarez from devastated US',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
];
const MostViewThree = () => {
    return (
        <div className="most_view3 white_bg padding20 border-radiuos5">
            <h3 className="widget-title">Most view</h3>
            {posts.map((item, i) => (
                <Fragment key={i}>
                    <div key={i} className="single_post type18">
                        <div className="post_img">
                            <div className="img_wrap">
                                <Link to="/"><img src={item.photo} alt="thumb"/></Link>
                            </div>
                            <span className="batch3 date">{item.date}</span>
                        </div>
                        <div className="single_post_text">
                            <h4><Link to="/post1">{item.title}</Link></h4>
                            <div className="space-10"/>
                            <p className="post-p">{item.description}</p>
                            <div className="view_author_details">
                                <div className="space-10"/>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="view_author align-self-center">
                                            <FontAwesome name="user-circle mr-1"/>
                                            <Link to="/">{item.author}</Link>
                                        </div>
                                    </div>
                                    <div className="col-6 text-right align-self-center">
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {i + 1 < posts.length ? <Fragment>
                        <div className="space-20"/>
                        <div className="border_black"/>
                        <div className="space-20"/>
                    </Fragment> : null}
                </Fragment>
            ))}
            <div className="space-20"/>
            <Link to="/" className="showmore">Show more</Link>
        </div>
    );
};

export default MostViewThree;