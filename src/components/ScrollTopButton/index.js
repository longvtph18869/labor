import React, {useState, useEffect} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";

const ScrollTopButton = () => {
    const [sticky, setSticky] = useState('');
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (Math.ceil(window.scrollY) >= 200) {
                setSticky('sticky')
            } else {
                setSticky('')
            }
        });
    }, []);

    function scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className={sticky}>
            <div className="up_btn up_btn1" onClick={() => scrollTop()}><FontAwesome name="angle-double-up"/></div>
        </div>
    );
};

export default ScrollTopButton;