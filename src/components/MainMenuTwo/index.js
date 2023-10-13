import React, {useState} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import {NavLink} from "react-router-dom";
import SidebarMenu from "../SidebarMenu";

const menus = [
    {
        id: 1,
        linkText: 'Home',
        child: true,
        icon: 'angle-down',
        submenu: [
            {
                id: 11,
                link: '/',
                linkText: 'Home 1'
            },
            {
                id: 12,
                link: '/dark',
                linkText: 'Home Dark'
            },
            {
                id: 13,
                new: true,
                link: '/home-two',
                linkText: 'Home 2'
            },
            {
                id: 14,
                link: '/home-three',
                linkText: 'Home 3'
            },
        ]
    },
    {
        id: 2,
        linkText: 'Pages',
        child: true,
        icon: 'angle-down',
        submenu: [
            {
                id: 21,
                link: '/home-two/about',
                linkText: 'About'
            },
            {
                id: 22,
                link: '/home-two/archive',
                linkText: 'Archive'
            },
            {
                id: 23,
                link: '/home-two/contact',
                linkText: 'Contact Us'
            },
            {
                id: 24,
                link: '/home-two/404',
                linkText: '404'
            },
        ]
    },
    {
        id: 3,
        linkText: 'Posts',
        child: true,
        icon: 'angle-down',
        submenu: [
            {
                id: 31,
                child: true,
                linkText: 'General Posts',
                third_menu: [
                    {
                        id: 311,
                        link: '/home-two/post1',
                        linkText: 'Post 1',
                    },
                    {
                        id: 312,
                        link: '/home-two/post2',
                        linkText: 'Post 2',
                    },
                    {
                        id: 313,
                        link: '/home-two/post3',
                        linkText: 'Post 3',
                    },
                ],
            },
            {
                id: 32,
                child: true,
                linkText: 'Video Posts',
                third_menu: [
                    {
                        id: 321,
                        link: '/home-two/video_post1',
                        linkText: 'Video Style 1',
                    },
                    {
                        id: 322,
                        link: '/home-two/video_post2',
                        linkText: 'Video Style 2',
                    },
                    {
                        id: 323,
                        link: '/home-two/video_post3',
                        linkText: 'Video Style 3',
                    },
                ],
            },
            {
                id: 33,
                child: true,
                linkText: 'Audio Posts',
                third_menu: [
                    {
                        id: 331,
                        link: '/home-two/audio_post1',
                        linkText: 'Audio Style 1',
                    },
                    {
                        id: 332,
                        link: '/home-two/audio_post2',
                        linkText: 'Audio Style 2',
                    },
                    {
                        id: 333,
                        link: '/home-two/audio_post3',
                        linkText: 'Audio Style 3',
                    },
                ],
            },
            {
                id: 34,
                child: true,
                linkText: 'Sidebars',
                third_menu: [
                    {
                        id: 341,
                        link: '/home-two/post1',
                        linkText: 'Right Sidebar',
                    },
                    {
                        id: 342,
                        link: '/home-two/left_post2',
                        linkText: 'Left Sidebar',
                    },
                    {
                        id: 343,
                        link: '/home-two/post2',
                        linkText: 'No Sidebar',
                    },
                ],
            },
        ]
    },
    {
        id: 4,
        linkText: 'Categories',
        child: true,
        icon: 'angle-down',
        submenu: [
            {
                id: 41,
                link: '/home-two/business',
                linkText: 'Business'
            },
            {
                id: 42,
                link: '/home-two/entertainment',
                linkText: 'Entertainment'
            },
            {
                id: 43,
                link: '/home-two/features',
                linkText: 'Features'
            },
            {
                id: 44,
                link: '/home-two/sports',
                linkText: 'Sports'
            },
            {
                id: 45,
                link: '/home-two/trending',
                linkText: 'Trending'
            },
        ]
    },
    {
        id: 5,
        linkText: 'World',
        link: '/home-two/world'
    },
    {
        id: 6,
        linkText: 'Sports',
        link: '/home-two/sports'
    },
    {
        id: 7,
        linkText: 'Contact',
        link: '/home-two/contact'
    },
];
const MainMenuTwo = () => {
    const [sideShow, setSideShow] = useState(false);
    return (
        <div className="container">
            <div className="main-menu">
                <div className="main-nav clearfix is-ts-sticky">
                    <div className="row justify-content-between">
                        <nav className="navbar navbar-expand-lg col-lg-8 align-self-center">
                            <div className="site-nav-inner">
                                <button className="navbar-toggler" onClick={() => setSideShow(true)}>
                                    <FontAwesome name="bars"/>
                                </button>
                                <div id="navbarSupportedContent"
                                     className="collapse navbar-collapse navbar-responsive-collapse">
                                    <ul className="nav navbar-nav" id="scroll">
                                        {menus.length > 0 ? menus.map((item, i) => (
                                            <li key={i}
                                                className={`
                                                ${item.child ? 'dropdown' : ''}
                                                nav-item`}>
                                                {item.child ? <NavLink onClick={e => e.preventDefault()} to="/"
                                                                       className="menu-dropdown"
                                                                       data-toggle="dropdown">{item.linkText}
                                                        <FontAwesome
                                                            name={item.icon}/></NavLink>
                                                    : <NavLink to={item.link} className="menu-dropdown"
                                                               data-toggle="dropdown">{item.linkText} <FontAwesome
                                                        name={item.icon}/></NavLink>}

                                                {item.child ?
                                                    <ul className="dropdown-menu" role="menu">
                                                        {item.submenu.map((sub_item, i) => (
                                                            <li key={i}
                                                                className={`${sub_item.child ? 'dropdown-submenu' : null}
                                                        `}>
                                                                {sub_item.child ?
                                                                    <NavLink onClick={e => e.preventDefault()}
                                                                             to="/">{sub_item.linkText}</NavLink>
                                                                    : <NavLink
                                                                        to={sub_item.link}>{sub_item.linkText}</NavLink>}
                                                                {sub_item.third_menu ?
                                                                    <ul className="dropdown-menu">
                                                                        {sub_item.third_menu.map((third_item, i) => (
                                                                            <li key={i}><NavLink
                                                                                to={third_item.link}>{third_item.linkText}</NavLink>
                                                                            </li>
                                                                        ))}
                                                                    </ul> : null}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    : null
                                                }
                                            </li>
                                        )) : null}
                                    </ul>
                                </div>
                                <SidebarMenu className="themeBlue" sideShow={sideShow} setSideShow={setSideShow} menus={menus}/>
                            </div>
                        </nav>
                        <div className="col-lg-3 text-right align-self-center">
                            <div className="date3">
                                <p>Thursday, March 26, 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainMenuTwo;