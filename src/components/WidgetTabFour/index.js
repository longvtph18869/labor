import React, {Fragment, useState} from 'react';
import {TabContent, TabPane, Nav, NavItem, Fade} from 'reactstrap';
import classnames from 'classnames';
import {Link} from "react-router-dom";

import thumb1 from '../../doc/img/header/widget/tab1.jpg';
import thumb2 from '../../doc/img/header/widget/tab2.jpg';
import thumb3 from '../../doc/img/header/widget/tab3.jpg';
import thumb4 from '../../doc/img/header/widget/tab4.jpg';
import thumb5 from '../../doc/img/header/widget/tab5.jpg';

const data = [
    {
        image: thumb1,
        title: 'The city with highest quality of life in world.',
        category: 'Technology',
    },
    {
        image: thumb2,
        title: 'The city with highest quality of life in world.',
        category: 'Technology',
    },
    {
        image: thumb3,
        title: 'The city with highest quality of life in world.',
        category: 'Technology',
    },
    {
        image: thumb4,
        title: 'The city with highest quality of life in world.',
        category: 'Technology',
    },
    {
        image: thumb5,
        title: 'The city with highest quality of life in world.',
        category: 'Technology',
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
                                <Link to="/post1">{item.title}</Link>
                                <p className="meta">{item.category}</p>
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

const WidgetTabFour = ({className}) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div className={`widget_tab tab3 v4inner theme3_bg padding20 border-radious5 ${className}`}>
            <Nav tabs>
                <NavItem>
                    <Link
                        to="/"
                        className={classnames({active: activeTab === '1'})}
                        onClick={() => {
                            toggle('1');
                        }}
                    >
                        RELATED
                    </Link>
                </NavItem>
                <NavItem>
                    <Link
                        to="/"
                        className={classnames({active: activeTab === '2'})}
                        onClick={() => {
                            toggle('2');
                        }}
                    >
                        RELATED
                    </Link>
                </NavItem>
                <NavItem>
                    <Link
                        to="/"
                        className={classnames({active: activeTab === '3'})}
                        onClick={() => {
                            toggle('3');
                        }}
                    >
                        POPULAR
                    </Link>
                </NavItem>
            </Nav>
            <div className="space-20"/>
            <TabContent activeTab={activeTab}>
                <TabPane tabId='1'><WidgetTabPane a_id={activeTab} id="1" arr={data}/></TabPane>
                <TabPane tabId='2'><WidgetTabPane a_id={activeTab} id="2" arr={data}/></TabPane>
                <TabPane tabId='3'><WidgetTabPane a_id={activeTab} id="3" arr={data}/></TabPane>
            </TabContent>
        </div>
    );
};

export default WidgetTabFour;