import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import FontAwesome from '../FontAwesome';

const Heading = ({className, title , more}) => {
    return (
        <div className={`heading ${className ? className : ''}`}>
            <h2 className="widget-title">{title}</h2>
            {more && (
                <Link to="/">Xem thêm<FontAwesome name="angle-right" /></Link>
            )}
        </div>
    );
};

export default Heading;