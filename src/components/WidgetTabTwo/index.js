import React, {Fragment, useState} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Fade} from 'reactstrap';
import classnames from 'classnames';
import {Link} from "react-router-dom";

import tab21 from '../../doc/img/tab/tab21.jpg';
import tab22 from '../../doc/img/tab/tab22.jpg';
import tab23 from '../../doc/img/tab/tab23.jpg';
import tab24 from '../../doc/img/tab/tab24.jpg';
import tab25 from '../../doc/img/tab/tab25.jpg';

const data = [
    {
        image: tab21,
        title: 'The city with highest quality of life in world.',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020'
    },
    {
        image: tab22,
        title: 'The city with highest quality of life in world.',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020'
    },
    {
        image: tab23,
        title: 'The city with highest quality of life in world.',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020'
    },
    {
        image: tab24,
        title: 'The city with highest quality of life in world.',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020'
    },
    {
        image: tab25,
        title: 'The city with highest quality of life in world.',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020'
    },
];

const WidgetTabPane = ({arr, a_id, id}) => {
    return (
        <Fade in={id === a_id}>
            <div className="widget tab_widgets">
                {arr.map((item, i) => (
                    <Fragment key={i}>
                        <div className="single_post widgets_small type8 type17">
                            <div className="post_img">
                                <div className="img_wrap">
                                    <Link to="/">
                                        <img src={item.image} alt="thumb"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="single_post_text">
                                <h4><Link to="/post1">{item.title}</Link></h4>
                                <div className="meta4"><Link to="#">{item.category}</Link></div>
                                {i + 1 < arr.length ? <Fragment>
                                    <div className="space-5"/>
                                    <div className="border_black"/>
                                    <div className="space-15"/>
                                </Fragment> : null}
                            </div>
                        </div>
                    </Fragment>
                ))}
            </div>
        </Fade>
    )
};

const WidgetTabTwo = ({className}) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div className={`widget_tab tab3 border-radious5 ${className ? className : ''}`}>
            <Nav tabs className="white_bg">
                <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === '1'})}
                        onClick={() => {
                            toggle('1');
                        }}
                    >
                        RELATED
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === '2'})}
                        onClick={() => {
                            toggle('2');
                        }}
                    >
                        RELATED
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === '3'})}
                        onClick={() => {
                            toggle('3');
                        }}
                    >
                        POPULAR
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} className="padding15 white_bg">
                <TabPane tabId='1'><WidgetTabPane a_id={activeTab} id="1" arr={data}/></TabPane>
                <TabPane tabId='2'><WidgetTabPane a_id={activeTab} id="2" arr={data}/></TabPane>
                <TabPane tabId='3'><WidgetTabPane a_id={activeTab} id="3" arr={data}/></TabPane>
            </TabContent>
        </div>
    );
};

export default WidgetTabTwo;