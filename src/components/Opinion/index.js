import React from 'react';
import tab21 from '../../doc/img/tab/tab21.jpg';
import {Link} from "react-router-dom";

const Opinion = () => {
    return (
        <div className="opinion white_bg padding20 border-radious5">
            <h3 className="widget-title">Opinion</h3>
            <div className="single_post post_type3 post_type15">
                <div className="post_img border-radious5">
                    <Link to="/">
                        <img src={tab21} alt="thumb"/>
                    </Link>
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
    );
};

export default Opinion;