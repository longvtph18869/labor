import React, {Fragment} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import fultab41 from '../../doc/img/tab/fultab41.jpg';
import {Link} from "react-router-dom";

const videoPosts = [
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
    {
        title: 'Cheers, darling. Virtual cheers. How to throw a virtual cocktail party',
    },
];
const VIdeoNewsSection = () => {
    return (
        <div className="v4video primay_bg section-padding2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tatal_videos4">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="tatal_video4"
                                         style={{background: `url(${fultab41}) center/cover no-repeat`}}>
                                        <div className="video4_content"><Link to="/">Investors explain corona impact on
                                            consumer startups</Link>
                                            <div className="video4_video">
                                                <div className="video4_icon"><FontAwesome name="play"/>
                                                </div>
                                                <h6>BUSINESS <span>March 26, 2020</span></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="video4_list scroll_bar padding20">
                                        {videoPosts.map((item, i) => (
                                            <Fragment key={i}>
                                                <div className="single_video_list">
                                                    <div className="video_list_author"><FontAwesome name="play-circle"/>
                                                        <h6>Business <span>May 2020</span></h6>
                                                    </div>
                                                    <h4><Link to="/">{item.title}</Link></h4>
                                                </div>
                                                {i + 1 < videoPosts.length ? <Fragment>
                                                    <div className="space-15"/>
                                                    <div className="border4"/>
                                                    <div className="space-15"/>
                                                </Fragment> : null}
                                            </Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VIdeoNewsSection;