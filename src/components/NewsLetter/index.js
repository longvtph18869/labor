import React from 'react';

const NewsLetter = ({className, input_white, titleClass}) => {
    return (
        <div className={`box widget news_letter mb30 ${className ? className : ''}`}>
            <h2 className={`widget-title ${titleClass}`}>News Letter</h2>
            <p>Your email address will not be this published. Required fields are News Today.</p>
            <div className="space-20"/>
            <div className="signup_form">
                <form>
                    <input className={`signup ${input_white ? 'white_bg' : ''}`} type="email"
                           placeholder="Your email address"/>
                    <button type="button" className="cbtn">sign up</button>
                </form>
                <div className="space-10"/>
                <p>We hate spam as much as you do</p>
            </div>
        </div>
    );
};

export default NewsLetter;