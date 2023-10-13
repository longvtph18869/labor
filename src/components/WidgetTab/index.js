import React, {Fragment, useState} from 'react';
import {TabContent, TabPane, Nav, NavItem, Fade} from 'reactstrap';
import classnames from 'classnames';
import {Link} from "react-router-dom";

import thumb1 from '../../doc/img/header/sider-top.png';
import thumb2 from '../../doc/img/header/sider-top2.jpg';
import thumb3 from '../../doc/img/header/widget/sider-top.png'
import thumb4 from '../../doc/img/header/widget/tab4.jpg';
import thumb5 from '../../doc/img/header/widget/tab5.jpg';

const data = [
    {
        image: thumb1,
        title: 'Xuất khẩu lao động Nhật Bản 2023 chi phí, điều kiện và mức lương mới nhất',
        category: 'Nhật Bản',
        date: "15/09/2023",
    },
    {
        image: thumb2,
        title: 'Top 17 đơn hàng đi Nhật Bản cho nam và nữ thi tuyển tháng 09/2023',
        category: 'Nhật Bản',
        date: "15/09/2023",
    },
    {
        image: thumb3,
        title: 'Dân số Nhật Bản 2022 - 2023 và những vấn đề liên quan',
        category: 'Nhật Bản',
        date: "15/09/2023",
    },
    {
        image: thumb3,
        title: 'Dân số Nhật Bản 2022 - 2023 và những vấn đề liên quan',
        category: 'Nhật Bản',
        date: "15/09/2023",
    },
    
];

const WidgetTabPane = ({arr, a_id, id, dark}) => {
    return (
        <Fade in={id === a_id}>
            <div className="widget tab_widgets">
                {arr.map((item, i) => (
                    <Fragment key={i}>
                        <div className="single_post widgets_small">
                            <div className="post_img">
                                <div className="img_wrap">
                                    <Link to="/">
                                        <img src={item.image} alt="thumb"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="single_post_text">
                                <div className="meta2 meta_separator1"><Link to="#">{item.category}</Link>
                                    <Link to="#">{item.date}</Link>
                                </div>
                                <h4><Link to="/post1">{item.title.slice(0,50)}...</Link></h4>
                            </div>
                        </div>
                        <div className="space-15"/>
                        {dark ? <div className="border_white"/> : <div className="border_black"/>}
                        <div className="space-15"/>
                    </Fragment>
                ))}
            </div>
        </Fade>
    )
};

const WidgetTab = ({className, dark}) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div className={`widget_tab ${className}`}>
            {/* <Nav tabs>
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
            </Nav> */}
            <TabContent activeTab={activeTab}>
                <TabPane tabId='1'><WidgetTabPane dark={dark} a_id={activeTab} id="1" arr={data}/></TabPane>
                <TabPane tabId='2'><WidgetTabPane dark={dark} a_id={activeTab} id="2" arr={data}/></TabPane>
                <TabPane tabId='3'><WidgetTabPane dark={dark} a_id={activeTab} id="3" arr={data}/></TabPane>
            </TabContent>
        </div>
    );
};

export default WidgetTab;