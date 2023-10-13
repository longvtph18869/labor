import React from 'react';
import {Link} from "react-router-dom";

import union from '../../doc/img/icon/union.png';
import category1 from '../../doc/img/categories/category1.jpg';
import category2 from '../../doc/img/categories/category2.jpg';
import category3 from '../../doc/img/categories/category3.jpg';
import category4 from '../../doc/img/categories/category4.jpg';
import category5 from '../../doc/img/categories/category5.jpg';
import category6 from '../../doc/img/categories/category6.jpg';

const categories = [
    {
        small_img: union,
        big_image: category1,
        title: 'Restaurant',
    },
    {
        small_img: union,
        big_image: category2,
        title: 'Entertainment',
    },
    {
        small_img: union,
        big_image: category3,
        title: 'Feature',
    },
    {
        small_img: union,
        big_image: category4,
        title: 'Business',
    },
    {
        small_img: union,
        big_image: category5,
        title: 'Trending',
    },
    {
        small_img: union,
        big_image: category6,
        title: 'Sports',
    },
];

const CategoriesWidget = () => {
    return (
        <div className="widget category mb30">
            <div className="row">
                <div className="col-6 align-self-center">
                    <h2 className="widget-title">Categories</h2>
                </div>
                <div className="col-6 text-right align-self-center">
                    <Link to="/" className="see_all mb20">See All</Link>
                </div>
            </div>
            <ul>
                {categories.map((item, i) => (
                    <li key={i}>
                        <Link to="/" style={{background: `url(${item.big_image})`}}> <span>{item.title}</span>
                            <img src={item.small_img} alt="category"/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesWidget;