import React from 'react';

import fnewsImg2 from '../../doc/img/feature/feature2.jpg';
import fnewsImg3 from '../../doc/img/feature/feature3.jpg';
import fnewsImg4 from '../../doc/img/feature/feature4.jpg';
import {Link} from "react-router-dom";

const news = [
    {
        image: fnewsImg2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Best garden wing supplies for the horticu ltural'
    },
    {
        image: fnewsImg3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US'
    },
    {
        image: fnewsImg4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Best garden wing supplies for the horticu ltural'
    },
    {
        image: fnewsImg3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US'
    },
    {
        image: fnewsImg4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Best garden wing supplies for the horticu ltural'
    },
    {
        image: fnewsImg3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US'
    },
    {
        image: fnewsImg2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Best garden wing supplies for the horticu ltural'
    },
    {
        image: fnewsImg3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US'
    },
    {
        image: fnewsImg4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Best garden wing supplies for the horticu ltural'
    },
    {
        image: fnewsImg3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US'
    },
];

const FeatureNewsAll = () => {
    return (
        <div className="row justify-content-center">
            {news.map((item, i) => (
                <div key={i} className="col-lg-6">
                    <div className="single_post post_type6 post_type7 mb30">
                        <div className="post_img gradient1">
                            <Link to="/"><img src={item.image} alt="thumb"/></Link>
                        </div>
                        <div className="single_post_text">
                            <div className="meta5"><Link to="/">{item.category}</Link>
                                <Link to="/">{item.date}</Link>
                            </div>
                            <h4>
                                <Link to="/post1">{item.title}</Link>
                            </h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeatureNewsAll;