import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import TopBar from "../../components/TopBar";
import LogoArea from "../../components/LogoArea";
import MainMenu from "../../components/MainMenu";
import FooterArea from "../../components/FooterArea";
import TopBarTwo from "../../components/TopBarTwo";
import LogoAreaTwo from "../../components/LogoAreaTwo";
import MainMenuTwo from "../../components/MainMenuTwo";
import FooterAreaTwo from "../../components/FooterAreaTwo";
import LogoAreaThree from "../../components/LogoAreaThree";
import FooterAreaThree from "../../components/FooterAreaThree";

const PrivateRoute = (props) => {
    const {component: Component, ...rest} = props;
    return (
        <div className={props.parentClass}>
            {
                props.home_style === 2 ?
                    <Fragment>
                        {/*=== home two ===*/}
                        <TopBarTwo/>
                        <div className="border_black"/>
                        <LogoAreaTwo/>
                        <MainMenuTwo/>
                    </Fragment>
                    : props.home_style === 3 ?
                    <Fragment>
                        {/*=== home three ===*/}
                        <LogoAreaThree/>
                    </Fragment>
                    : props.home_style === 4 ?
                        <Fragment>
                            {/*=== home dark version ===*/}
                            <TopBar dark={true}/>
                            <div className="border_white"/>
                            <LogoArea dark={true} className="dark-2"/>
                            <MainMenu dark={true} className="dark-2"/>
                        </Fragment>
                        :
                        <Fragment>
                            {/*=== home one/default ===*/}
                            <TopBar className="white_bg"/>
                            <div className="border_black"/>
                            <LogoArea className="white_bg"/>
                            <MainMenu/>
                        </Fragment>
            }

            <Route
                {...rest}
                render={props => (
                    <Component {...props} />
                )}
            />

            {props.home_style === 2 ?
                <FooterAreaTwo/>
                : props.home_style === 3 ?
                    <FooterAreaThree/>
                    : props.home_style === 4 ?
                        <FooterArea className="dark-2"/>
                        : <FooterArea className="primay_bg"/>}
        </div>
    )
};
export default PrivateRoute;
