import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const EntertainmentNews = ({entertainments}) => {
    return (
        <Fragment>
            {entertainments.map((item, i) => (
                <div key={i} className="col-lg-6">
                    <div className="single_post post_type3 mb30">
                        <div className="post_img">
                            <div className="img_wrap">
                                <Link to="/">
                                    <img src={item.image} alt="thumb"/>
                                </Link>
                            </div>
                        </div>
                        <div className="single_post_text">
                            <div className="meta3"><Link to="/">TECHNOLOGY</Link>
                                <Link to="/">{item.date}</Link>
                            </div>
                            <h4><Link to="/post1">{item.title}</Link></h4>
                            <div className="space-10"/>
                            <p className="post-p">{item.body}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    );
};

export default EntertainmentNews;