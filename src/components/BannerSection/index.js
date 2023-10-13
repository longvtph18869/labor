import React from 'react';
import bannerImg from '../../doc/img/bg/banner1.png';
import {Link} from "react-router-dom";

const BannerSection = ({className}) => {
    return (
        <div className={`${className ? className : 'padding5050 fourth_bg'}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="banner1">
                            <Link to="/">
                                <img src={bannerImg} alt="bannerImg"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;