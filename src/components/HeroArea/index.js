import React, {useState} from 'react';
import Swiper from 'react-id-swiper';

import hero1 from '../../doc/img/bg/hero1.jpg';
import hero2 from '../../doc/img/bg/hero2.jpg';
import hero3 from '../../doc/img/bg/hero3.jpg';

const slider = [
    {
        photo: hero1,
        category: 'Business',
        date: 'March 2020',
        title: 'Setting politics aside, Sequoia raises $3.4 billion for US and China investments',
    },
    {
        photo: hero2,
        category: 'Business',
        date: 'March 2020',
        title: 'Setting politics aside, Sequoia raises $3.4 billion for US and China investments',
    },
    {
        photo: hero3,
        category: 'Business',
        date: 'March 2020',
        title: 'Setting politics aside, Sequoia raises $3.4 billion for US and China investments',
    },
    {
        photo: hero1,
        category: 'Business',
        date: 'March 2020',
        title: 'Setting politics aside, Sequoia raises $3.4 billion for US and China investments',
    },
];
const HeroArea = () => {
    const [activeIndex, setActiveIndex] = useState('0');
    const params = {
        activeSlideKey: activeIndex,
        effect: 'fade',
    };
    return (
        <div className="wrapper_items">
            <div className="wrapper_carousel wlc_slider_demo2">
                <Swiper {...params}>
                    {slider.map((item, i) => (
                        <div key={i} className="welcome4_area_wrap wlc_overlay"
                             style={{background: `url(${item.photo}) center/cover no-repeat`}}>
                            <div className="welcome4_area">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="welcome_txt">
                                                <p className="title_meta">{item.category} <span>| {item.date}</span></p>
                                                <h1>{item.title}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Swiper>
            </div>
            <div className="container d-md-block d-none">
                <div className="row">
                    <div className="col-12">
                        <div className="welcome_list">
                            <div className="wlc_slide_demo1 d-flex">
                                <div className={`single_news_list ${activeIndex === '0' ? 'active' : ''}`}
                                     onClick={() => setActiveIndex('0')}>
                                    <p><span>01</span> Business</p>
                                    <h4>Setting politics aside, Sequoia raises $3.4 billion for US and China
                                        investments</h4>
                                </div>
                                <div className={`single_news_list ${activeIndex === '1' ? 'active' : ''}`}
                                     onClick={() => setActiveIndex('1')}>
                                    <p><span>02</span> Technology</p>
                                    <h4>Dan Levy tries to guess James Corden’s team are wearing pants or PJs over
                                        Zoom.</h4>
                                </div>
                                <div className={`single_news_list ${activeIndex === '2' ? 'active' : ''}`}
                                     onClick={() => setActiveIndex('2')}>
                                    <p><span>03</span> Science</p>
                                    <h4>Everything you need to know about contact lenses during the coronavirus
                                        pandemic</h4>
                                </div>
                                <div className={`single_news_list ${activeIndex === '3' ? 'active' : ''}`}
                                     onClick={() => setActiveIndex('3')}>
                                    <p><span>04</span> Food</p>
                                    <h4>How to spend as little time at the grocery store as possible</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;