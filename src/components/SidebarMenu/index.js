import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import {Collapse} from "reactstrap";

import './style.scss';

const SidebarMenu = ({menus, sideShow, setSideShow, className}) => {
    const [sMenu, setSMenu] = useState(null);
    const [stMenu, setSTMenu] = useState(null);
    return (
        <div className={`sidebarMenu ${sideShow ? '' : 'hideSideMenu'} ${className ? className : ''}`}>
            <span className="clox" onClick={() => setSideShow(false)}>Close</span>
            <ul className="navBar">
                {menus.length > 0 ? menus.map((item, i) => (
                    <li key={i}
                        className={`${item.child ? 'has_sub' : ''}`}>
                        {item.child ?
                            <p
                                onClick={() => setSMenu(item.id === sMenu ? null : item.id)}
                                className={sMenu === item.id ? 'active' : ''}
                            >{item.linkText}
                                <FontAwesome
                                    name={sMenu === item.id ? 'angle-down active' : 'angle-down'}/></p>
                            : <NavLink exact className={sMenu === item.id ? 'active' : ''}
                                       to={item.link}>{item.linkText}</NavLink>}
                        {item.child ?
                            <Collapse isOpen={sMenu === item.id}>
                                <ul className="subMenu">
                                    {item.submenu.map((sub_item, i) => (
                                        <li key={i}
                                            className={`${sub_item.child ? 'has_sub' : ''}`}>
                                            {sub_item.child ?
                                                <p
                                                    onClick={() => setSTMenu(sub_item.id === stMenu ? null : sub_item.id)}
                                                    className={stMenu === sub_item.id ? 'active' : ''}
                                                >{sub_item.linkText}
                                                    <FontAwesome
                                                        name={stMenu === sub_item.id ? 'angle-down active' : 'angle-down'}/>
                                                </p>
                                                : <NavLink exact
                                                           to={sub_item.link}>{sub_item.linkText}</NavLink>}
                                            {sub_item.third_menu ?
                                                <Collapse isOpen={stMenu === sub_item.id}>
                                                    <ul className="thirdMenu">
                                                        {sub_item.third_menu.map((third_item, i) => (
                                                            <li key={i}><NavLink
                                                                to={third_item.link}>{third_item.linkText}</NavLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </Collapse> : null}
                                        </li>
                                    ))}
                                </ul>
                            </Collapse>
                            : null
                        }
                    </li>
                )) : null}
            </ul>
        </div>
    );
};

export default SidebarMenu;