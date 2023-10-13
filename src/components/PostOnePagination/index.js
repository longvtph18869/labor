import React from 'react';
import {Link} from "react-router-dom";

const PostOnePagination = ({className}) => {
    return (
        <div className="next_prev">
            <div className="row">
                <div className="col-lg-6 align-self-center">
                    <div className={`${className ? className : 'next_prv_single border_left3'}`}>
                        <p>PREVIOUS NEWS</p>
                        <h3><Link to="/">Kushner puts himself in middle of white house’s
                            chaotic coronavirus response.</Link></h3>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center">
                    <div className={`${className ? className : 'next_prv_single border_left3'}`}>
                        <p>NEXT NEWS</p>
                        <h3><Link to="/">C.I.A. Hunts for authentic virus totals in
                            china, dismissing government tallies</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostOnePagination;