import React, {useState} from 'react';
import {Link} from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from 'react-id-swiper';

// images
import {mostViewSort} from "../../utils/commonFunctions";

const mostView = [
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy zhang a chinese busy woman and dhaka',
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Harbour amid a Slowen down in singer city',
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Cheap smartphone sensor could help you old food safe',
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'The secret to moving this ancient sphinx screening',
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy zhang a chinese busy woman and dhaka',
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'The billionaire Philan thropist read to learn',
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy zhang a chinese busy woman and dhaka',
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'The billionaire Philan thropist read to learn',
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Cheap smartphone sensor could help you',
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Ratiffe to be Director of nation talent Trump',
    }
];

const MostShareWidget = ({title, dark}) => {
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
        <div className="widget tab_widgets mb30">
            <h2 className="widget-title">{title ? title : 'Most View'}</h2>
            <div className="post_type2_carousel multipleRowCarousel nav_style1">
                {/*CAROUSEL START*/}
                <Swiper getSwiper={setSwiper} {...params}>
                    {mostViewSort(mostView).map((item, i) => (
                        <div key={i} className="carousel_items">
                            <div className="single_post widgets_small widgets_type4">
                                <div className="post_img number">
                                    <h2>{item.id}</h2>
                                </div>
                                <div className="single_post_text">
                                    <div className="meta2"><Link to="#">TECHNOLOGY</Link>
                                        <Link to="#">March 26, 2020</Link>
                                    </div>
                                    <h4><Link to="/post1">Nancy zhang a chinese busy woman and dhaka</Link></h4>
                                    <ul className="inline socail_share">
                                        <li><Link to="#"><FontAwesome name="twitter"/>2.2K</Link></li>
                                        <li><Link to="#"><FontAwesome name="facebook-f"/>2.2K</Link></li>
                                    </ul>
                                    <div className="space-15"/>
                                    {dark ? <div className="border_white"/> : <div className="border_black"/>}
                                </div>
                            </div>
                            <div className="space-15"/>
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

export default MostShareWidget;