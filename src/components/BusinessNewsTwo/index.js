import React, {Fragment} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import {Link} from "react-router-dom";
// images
import business21 from '../../doc/img/business/business21.jpg';
import arrow3 from '../../doc/img/icon/arrow3.png';
import business22 from '../../doc/img/business/business22.jpg';
import business23 from '../../doc/img/business/business23.jpg';
import business24 from '../../doc/img/business/business24.jpg';
import business25 from '../../doc/img/business/business25.jpg';
import business26 from '../../doc/img/business/business26.jpg';

const business = [
    {
        photo: business21,
        date: 'April 26, 2020',
        title: 'She tried for many years pregnant & happy and thing going..',
        description: 'She tried for so many years and now she finally pregnant happy and things are going well & it just happens that this pregnancy takes place with this epidemic…',
    },
    {
        photo: business22,
        date: 'April 26, 2020',
        title: 'She tried for many years pregnant & happy and thing going..',
        description: 'She tried for so many years and now she finally pregnant happy and things are going well & it just happens that this pregnancy takes place with this epidemic…',
    },
    {
        photo: business23,
        date: 'April 26, 2020',
        title: 'She tried for many years pregnant & happy and thing going..',
        description: 'She tried for so many years and now she finally pregnant happy and things are going well & it just happens that this pregnancy takes place with this epidemic…',
    },
    {
        photo: business24,
        date: 'April 26, 2020',
        title: 'She tried for many years pregnant & happy and thing going..',
        description: 'She tried for so many years and now she finally pregnant happy and things are going well & it just happens that this pregnancy takes place with this epidemic…',
    },
    {
        photo: business25,
        date: 'April 26, 2020',
        title: 'She tried for many years pregnant & happy and thing going..',
        description: 'She tried for so many years and now she finally pregnant happy and things are going well & it just happens that this pregnancy takes place with this epidemic…',
    },
    {
        photo: business26,
        date: 'April 26, 2020',
        title: 'She tried for many years pregnant & happy and thing going..',
        description: 'She tried for so many years and now she finally pregnant happy and things are going well & it just happens that this pregnancy takes place with this epidemic…',
    },
];
const BusinessNewsTwo = () => {
    return (
        <div className="business3 padding20 white_bg border-radious5">
            <h4 className="widget-title">Business</h4>
            {business.map((item, i) => (
                <div key={i} className="single_post post_type12 type20">
                    <div className="post_img border-radious5">
                        <div className="img_wrap">
                            <Link to="/business">
                                <img src={item.photo} alt="thumb"/>
                            </Link>
                        </div>
                        <span className="tranding border_tranding"><FontAwesome name="bolt"/></span>
                    </div>
                    <div className="single_post_text">
                        <h4><Link to="/post1">{item.title}</Link></h4>
                        <div className="row">
                            <div className="col-6 align-self-center">
                                <div className="meta_col">
                                    <p>{item.date}</p>
                                </div>
                            </div>
                            <div className="col-6 text-right align-self-center">
                                <ul className="meta_share inline">
                                    <li><Link to="/"><FontAwesome name="bookmark"/></Link></li>
                                    <li><Link to="/"><FontAwesome name="share"/></Link></li>
                                </ul>
                            </div>
                        </div>
                        <p className="post-p">{item.description}</p>
                        <div className="space-10"/>
                        <Link to="/business" className="readmore3">Read more <img src={arrow3} alt="arrow3"/></Link>
                        {i + 1 < business.length ? <Fragment>
                            <div className="space-10"/>
                            <div className="border_black"/>
                            <div className="space-15"/>
                        </Fragment> : null}
                    </div>
                </div>
            ))}
            <Link to="/" className="showmore">Show more</Link>
        </div>
    );
};

export default BusinessNewsTwo;