import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import big_img from '../../doc/img/header/sider-top3.jpg';
import col26 from '../../doc/img/header/widget/col26.jpg';
import col21 from '../../doc/img/header/widget/col21.jpg';
import col22 from '../../doc/img/header/widget/col22.jpg';
import col23 from '../../doc/img/header/widget/col23.jpg';
import col24 from '../../doc/img/header/widget/col24.jpg';
import col25 from '../../doc/img/header/widget/col25.jpg';

const posts = [
    {
        image: col21,
        title: 'The city with highest quality of life in world.',
        category: 'TECHNOLOGY',
    },
    {
        image: col22,
        title: 'Fire shows that will improve your…',
        category: 'TECHNOLOGY',
    },
    {
        image: col23,
        title: 'Mutul fund mark from down up to 15%.',
        category: 'TECHNOLOGY',
    },
    {
        image: col24,
        title: 'Danny meyer’s form latest restaurantes…',
        category: 'TECHNOLOGY',
    },
    {
        image: col25,
        title: 'Wright begins in rehab assignment at the..',
        category: 'TECHNOLOGY',
    },
];

const PostGalleryTwo = () => {
    return (
        <div className="post_gallary_area theme3_bg mb40 padding-top-30">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-xl-6">
                        <div className="single_post post_type6 border-radious7 xs-mb30">
                            <div className="post_img gradient1">
                                <div className="img_wrap">
                                    <Link to="/">
                                        <img src={big_img} alt="big_img"/>
                                    </Link>
                                </div>
                                <span className="tranding">
									<FontAwesome name="play"/>
								</span>
                            </div>
                            <div className="single_post_text">

                                <h4><Link to="/video_post1">Japan’s virus success has puzzled the world. Is its luck
                                    running out?</Link></h4>
                                <div className="space-5"/>

                                <p className="post-p">The property, complete with 30-seat screening from room, a
                                    100-seat amphitheater and a swimming pond with sandy shower…</p>

                                <div className="space-20"/>
                                <div className="meta meta_separator1"><Link to="/">TECHNOLOGY</Link>
                                    <Link to="/">March 26, 2020</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-xl-block col-xl-3">
                        <div className="white_bg padding15 border-radious5 sm-mt30">
                            {posts.map((item, i) => (
                                <div key={i} className="single_post type14 widgets_small">
                                    <div className="post_img">
                                        <div className="img_wrap">
                                            <Link to="/">
                                                <img src={item.image} alt="thumb"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single_post_text">
                                        <h4><Link to="/post">{item.title}</Link></h4>
                                        <div className="meta4"><Link to="/">{item.category}</Link></div>
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
                    <div className="d-none d-lg-block col-lg-4 col-xl-3">
                        <div className="single_post post_type3 post_type15 mb30 border-radious5 sm-mt30">
                            <div className="post_img">
                                <div className="img_wrap">
                                    <Link to="/">
                                        <img src={col26} alt="col26"/>
                                    </Link>
                                </div>
                                <span className="tranding border_tranding">
									<FontAwesome name="bolt"/>
								</span>
                            </div>
                            <div className="single_post_text white_bg padding20">
                                <h4><Link to="/post1">Japan’s virus puzzled the world luck running out?</Link></h4>
                                <div className="space-10"/>
                                <p className="post-p">The property, complete with 30-seat screening from room, a
                                    100-seat amphitheater and a swimming pond with sandy shower…</p>
                                <div className="space-20"/>
                                <div className="meta3"><Link to="/">TECHNOLOGY</Link>
                                    <Link to="/">March 26, 2020</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostGalleryTwo;