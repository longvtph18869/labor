import React, {Fragment, useState} from 'react';
import {Nav, NavItem, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";
import Fade from "reactstrap/es/Fade";
import {Link} from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";

const data = [
    {
        title: 'Cheers, darling. Virtual cheer. How to throw a virtual cock tail party',
    },
    {
        title: 'Cheers, darling. Virtual cheer. How to throw a virtual cock tail party',
    },
    {
        title: 'Cheers, darling. Virtual cheer. How to throw a virtual cock tail party',
    },
    {
        title: 'Cheers, darling. Virtual cheer. How to throw a virtual cock tail party',
    },
    {
        title: 'Cheers, darling. Virtual cheer. How to throw a virtual cock tail party',
    },
];

const WidgetTabPane = ({arr, a_id, id}) => {
    return (
        <Fade in={id === a_id}>
            {arr.map((item, i) => (
                <Fragment key={i}>
                    <div className="single_post widgets_small widgets_type4">
                        <div className="post_img number">
                            <h2>{i + 1}</h2>
                        </div>
                        <div className="single_post_text">
                            <h4><Link to="/post1">{item.title}</Link></h4>
                            <div className="row">
                                <div className="col-7 align-self-cnter">
                                    <div className="meta4"><Link to="/">March 20, 2020</Link>
                                    </div>
                                </div>
                                <div className="col-5 align-self-cnter">
                                    <div className="share_meta4 text-right">
                                        <ul className="inline">
                                            <li><Link to="/"><FontAwesome name="bookmark"/></Link></li>
                                            <li><Link to="/"><FontAwesome name="share"/></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {i + 1 < data.length ? <Fragment>
                        <div className="space-15"/>
                        <div className="border4"/>
                        <div className="space-15"/>
                    </Fragment> : null}
                </Fragment>
            ))}
        </Fade>
    )
};
const WidgetTabThree = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    return (
        <div className="tab4 padding20 white_bg border-radious5 shadow7">
            <Nav tabs>
                <NavItem>
                    <Link
                        to="/"
                        className={classnames({active: activeTab === '1'})}
                        onClick={(e) => {
                            e.preventDefault();
                            toggle('1');
                        }}
                    >
                        Food
                    </Link>
                </NavItem>
                <NavItem>
                    <Link
                        to="/"
                        className={classnames({active: activeTab === '2'})}
                        onClick={(e) => {
                            e.preventDefault();
                            toggle('2');
                        }}
                    >
                        Business
                    </Link>
                </NavItem>
                <NavItem>
                    <Link
                        to="/"
                        className={classnames({active: activeTab === '3'})}
                        onClick={(e) => {
                            e.preventDefault();
                            toggle('3');
                        }}
                    >
                        Politics
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

export default WidgetTabThree;