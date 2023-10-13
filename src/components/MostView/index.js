import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from 'react-id-swiper';

// images
import mostsm1 from '../../doc/img/most_view/mostsm1.jpg';
import mostsm2 from '../../doc/img/most_view/mostsm2.jpg';
import mostsm3 from '../../doc/img/most_view/mostsm3.jpg';
import mostsm4 from '../../doc/img/most_view/mostsm4.jpg';
import mostsm5 from '../../doc/img/most_view/mostsm5.jpg';
import {mostViewSort} from "../../utils/commonFunctions";

const mostView = [
    {
        image: mostsm1,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy zhang a chinese busy woman and dhaka',
    },
    {
        image: mostsm2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'The billionaire Philan thropist read to learn',
    },
    {
        image: mostsm3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Cheap smartphone sensor could help you',
    },
    {
        image: mostsm4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Ratiffe to be Director of nation talent Trump',
    },
    {
        image: mostsm5,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy zhang a chinese busy woman and dhaka',
    },
    {
        image: mostsm1,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'The billionaire Philan thropist read to learn',
    },
    {
        image: mostsm1,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy zhang a chinese busy woman and dhaka',
    },
    {
        image: mostsm2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'The billionaire Philan thropist read to learn',
    },
    {
        image: mostsm3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Cheap smartphone sensor could help you',
    },
    {
        image: mostsm4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Ratiffe to be Director of nation talent Trump',
    },
    {
        image: mostsm5,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy zhang a chinese busy woman and dhaka',
    },
    {
        image: mostsm1,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'The billionaire Philan thropist read to learn',
    }
];

const MostView = ({no_margin, title, dark}) => {
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
        slidesPerView: 1,
        slidesPerColumn: 6,
    };
    return (
        <div className={`widget tab_widgets ${no_margin ? '' : 'mb30'}`}>
            <h2 className="widget-title">{title ? title : 'Most View'}</h2>
            <div className="post_type2_carousel multipleRowCarousel nav_style1">
                {/*CAROUSEL START*/}
                <Swiper getSwiper={setSwiper} {...params}>
                    {mostViewSort(mostView).map((item, i) => (
                        <div key={i} className="single_post2_carousel">
                            <div className="single_post widgets_small type8">
                                <div className="post_img">
                                    <div className="img_wrap">
                                        <img src={item.image} alt="thumb"/>
                                    </div>
                                    <span className="tranding">
										<FontAwesome name="bolt"/>
									</span>
                                </div>
                                <div className="single_post_text">
                                    <div className="meta2"><Link to="/">{item.category}</Link>
                                        <Link to="/">{item.date}</Link>
                                    </div>
                                    <h4><Link to="/post1">{item.title}</Link></h4>
                                </div>
                                <div className="type8_count">
                                    <h2>{item.id}</h2>
                                </div>
                            </div>
                            {i + 2 < mostView.length ? <Fragment>
                                <div className="space-15"/>
                                {dark ? <div className="border_white"/> : <div className="border_black"/>}
                                <div className="space-15"/>
                            </Fragment> : null}
                        </div>
                    ))}
                </Swiper>
                <div className="navBtns">
                    <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left"/></div>
                    <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right"/></div>
                </div>
                {/*CAROUSEL END*/}
            </div>
        </div>
    );
};

export default MostView;