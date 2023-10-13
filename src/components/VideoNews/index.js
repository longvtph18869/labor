import React, {Fragment, useState} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import {Link} from "react-router-dom";
import ModalVideo from 'react-modal-video'

// images
import video21 from '../../doc/img/video/video21.jpg';
import video22 from '../../doc/img/video/video22.jpg';
import video23 from '../../doc/img/video/video23.jpg';
import video24 from '../../doc/img/video/video24.jpg';
import video25 from '../../doc/img/video/video25.jpg';
import video26 from '../../doc/img/video/video26.jpg';
import video27 from '../../doc/img/video/video27.jpg';

const posts = [
    {
        photo: video22,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'The property complete with a 30 seat screen room.',
    },
    {
        photo: video23,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'The property complete with a 30 seat screen room.',
    },
    {
        photo: video24,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'The property complete with a 30 seat screen room.',
    },
    {
        photo: video25,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'The property complete with a 30 seat screen room.',
    },
    {
        photo: video26,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'The property complete with a 30 seat screen room.',
    },
    {
        photo: video27,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'The property complete with a 30 seat screen room.',
    },
];

const VideoNews = () => {
    const [vModal, setvModal] = useState(false);
    return (
        <Fragment>
            <div className="mb30">
                <div className="container">
                    <div className="video_posts padding20 white_bg border-radious5">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading">
                                    <h2 className="widget-title">Video News</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="single_post post_type3 post_type11 post_type21 xs-mb30">
                                    <div className="post_img border-radious7">
                                        <div className="img_wrap">
                                            <Link to="/" className="play_btn">
                                                <img src={video21} alt="video21"/>
                                            </Link>
                                        </div>
                                        <p onClick={() => setvModal(true)} className="youtube_middle"><FontAwesome
                                            name="youtube-play"/></p>
                                        <div className="sport_meta_ab inline">
                                            <ul>
                                                <li>SPORTS</li>
                                                <li>April 26, 2020</li>
                                                <li>8:36mm</li>
                                            </ul>
                                        </div>
                                        <div className="social_share">
                                            <ul className="meta_share inline">
                                                <li><Link to="/"><FontAwesome name="bookmark"/></Link></li>
                                                <li><Link to="/"><FontAwesome name="share"/></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single_post_text">
                                        <h4><Link to="/post1">ICC Men’s Cricket World Cup digital content delivers
                                            record-breaking numbers</Link></h4>
                                        <div className="space-10"/>
                                        <ul className=" like_cm">
                                            <li><Link to="/"><FontAwesome name="eye"/>6745</Link></li>
                                            <li><Link to="/"><FontAwesome name="heart"/>6745</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                {posts.map((item, i) => (
                                    <div key={i} className="single_post type14 type22 widgets_small sm-mt30">
                                        <div className="post_img">
                                            <div className="img_wrap">
                                                <div className="img_wrap">
                                                    <Link to="/" className="play_btn">
                                                        <img src={item.photo} alt="thumb"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single_post_text">
                                            <h4><Link to="/post1">{item.title}</Link></h4>
                                            <div className="meta2"><Link to="/">{item.category}</Link>
                                                <Link to="/">{item.date}</Link>
                                            </div>
                                            {i + 1 < posts.length ? <Fragment>
                                                <div className="space-5"/>
                                                <div className="border_black"/>
                                                <div className="space-15"/>
                                            </Fragment> : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo channel='youtube' isOpen={vModal} videoId="Fkd9TWUtFm0"
                        onClose={() => setvModal(false)}/>
        </Fragment>
    );
};

export default VideoNews;