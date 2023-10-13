import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import {Link} from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import {mostViewSort} from "../../utils/commonFunctions";

import science41 from '../../doc/img/science/science41.jpg';

const posts = [
    {
        photo: science41,
        title: 'Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy'
    },
    {
        photo: science41,
        title: 'Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy'
    },
    {
        photo: science41,
        title: 'Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy'
    },
    {
        photo: science41,
        title: 'Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy'
    },
    {
        photo: science41,
        title: 'Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy'
    },
    {
        photo: science41,
        title: 'Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy'
    },
    {
        photo: science41,
        title: 'Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy'
    },
    {
        photo: science41,
        title: 'Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy'
    },
];
const ScienceNews = () => {
    const [swiper, setSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };
    const params = {
        slidesPerView: 2,
        spaceBetween: 0,
        slidesPerColumn: 2,
        breakpoints: {
            1024: {
                slidesPerView: 2,
                slidesPerColumn: 2,
            },
            768: {
                slidesPerView: 1,
                slidesPerColumn: 1,
            },
            300: {
                slidesPerView: 1,
                slidesPerColumn: 1,
            },
        }
    };
    return (
        <div className="science_news border-radious5 mb30 shadow7 padding20">
            <h3 className="widget-title">Science News</h3>
            <div className="science_carousel multipleRowCarousel nav_style4">
                <Swiper getSwiper={setSwiper} {...params}>
                    {mostViewSort(posts).map((item, i) => (
                        <div key={i} className="single_post mb30 type18 rashed">
                            <div className="single_post_text">
                                <h4><Link to="/post1">{item.title}</Link></h4>
                                <div className="space-10"/>
                            </div>
                            <div className="science_mid">
                                <div className="row">
                                    <div className="col-sm-4 align-self-center">
                                        <div className="border-radious3">
                                            <div className="img_wap">
                                                <Link to="/"><img src={item.photo} alt="thumb"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8 align-self-center">
                                        <p className="post-p">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="book_mark">
                                <div className="bookmark_icon"><FontAwesome name="bookmark"/></div>
                                <h6>QuomodoSoft <span>March 25, 2020</span></h6>
                            </div>
                        </div>
                    ))}
                </Swiper>
                <div className="owl-nav">
                    <div className="owl-prev" onClick={goPrev}><FontAwesome name="angle-left"/></div>
                    <div className="owl-next" onClick={goNext}><FontAwesome name="angle-right"/></div>
                </div>
            </div>
        </div>
    );
};

export default ScienceNews;