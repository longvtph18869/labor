import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../_PrivateRoute';
import HomePage from "../HomePage";
import HomePageTwo from "../HomePageTwo";
import BusinessPage from "../BusinessPage";
import EntertainmentPage from "../EntertainmentPage";
import FeaturePage from "../FeaturePage";
import SportsPage from "../SportsPage";
import TrendingPage from "../TrendingPage";
import AboutUsPage from "../AboutUsPage";
import ArchivePage from "../ArchivePage";
import ContactUsPage from "../ContactUsPage";
import NotFoundPage from "../NotFoundPage";
import PostOnePage from "../PostOnePage";
import PostTwoPage from "../PostTwoPage";
import PostThreePage from "../PostThreePage";
import VideoPostOnePage from "../VideoPostOnePage";
import VideoPostTwoPage from "../VideoPostTwoPage";
import VideoPostThreePage from "../VideoPostThreePage";
import AudioPostOnePage from "../AudioPostOnePage";
import AudioPostTwoPage from "../AudioPostTwoPage";
import AudioPostThreePage from "../AudioPostThreePage";
import PostOneLeftSidebarPage from "../PostOneLeftSidebarPage";
import BusinessTwoPage from "../BusinessTwoPage";
import EntertainmentTwoPage from "../EntertainmentTwoPage";
import FeatureTwoPage from "../FeatureTwoPage";
import SportsTwoPage from "../SportsTwoPage";
import TrendingTwoPage from "../TrendingTwoPage";
import AboutUsPageTwo from "../AboutUsTwoPage";
import ArchiveTwoPage from "../ArchiveTwoPage";
import PostOneHTwoPage from "../PostOneHTwoPage";
import PostTwoHTwoPage from "../PostTwoHTwoPage";
import PostThreeHTwoPage from "../PostThreeHTwoPage";
import VideoPostOneHTwoPage from "../VideoPostOneHTwoPage";
import VideoPostTwoHTwoPage from "../VideoPostTwoHTwoPage";
import VideoPostThreeHTwoPage from "../VideoPostThreeHTwoPage";
import AudioPostOneHTwoPage from "../AudioPostOneHTwoPage";
import AudioPostTwoHTwoPage from "../AudioPostTwoHTwoPage";
import AudioPostThreeHTwoPage from "../AudioPostThreeHTwoPage";
import PostOneHTwoLeftSidebarPage from "../PostOneHTwoLeftSidebarPage";
import HomePageThree from "../HomePageThree";
import BusinessThreePage from "../BusinessThreePage";
import EntertainmentThreePage from "../EntertainmentThreePage";
import FeatureThreePage from "../FeatureThreePage";
import SportsThreePage from "../SportsThreePage";
import TrendingThreePage from "../TrendingThreePage";
import AboutUsThreePage from "../AboutUsThreePage";
import ArchiveThreePage from "../ArchiveThreePage";
import ContactUsThreePage from "../ContactUsThreePage";
import NotFoundThreePage from "../NotFoundThreePage";
import PostOneHThreePage from "../PostOneHThreePage";
import PostTwoHThreePage from "../PostTwoHThreePage";
import PostThreeHThreePage from "../PostThreeHThreePage";
import VideoPostOneHThreePage from "../VideoPostOneHThreePage";
import VideoPostTwoHThreePage from "../VideoPostTwoHThreePage";
import VideoPostThreeHThreePage from "../VideoPostThreeHThreePage";
import AudioPostOneHThreePage from "../AudioPostOneHThreePage";
import AudioPostTwoHThreePage from "../AudioPostTwoHThreePage";
import AudioPostThreeHThreePage from "../AudioPostThreeHThreePage";
import PostOneHThreeLeftSidebarPage from "../PostOneHThreeLeftSidebarPage";
import HomeDarkPage from "../HomeDarkPage";
import BusinessDarkPage from "../BusinessDarkPage";
import EntertainmentDarkPage from "../EntertainmentDarkPage";
import FeatureDarkPage from "../FeatureDarkPage";
import SportsDarkPage from "../SportsDarkPage";
import TrendingDarkPage from "../TrendingDarkPage";
import AboutUsDarkPage from "../AboutUsDarkPage";
import ArchiveDarkPage from "../ArchiveDarkPage";
import ContactUsDarkPage from "../ContactUsDarkPage";
import NotFoundDarkPage from "../NotFoundDarkPage";
import PostOneDarkPage from "../PostOneDarkPage";
import PostTwoDarkPage from "../PostTwoDarkPage";
import PostThreeDarkPage from "../PostThreeDarkPage";
import VideoPostOneDarkPage from "../VideoPostOneDarkPage";
import VideoPostTwoDarkPage from "../VideoPostTwoDarkPage";
import VideoPostThreeDarkPage from "../VideoPostThreeDarkPage";
import AudioPostOneDarkPage from "../AudioPostOneDarkPage";
import AudioPostTwoDarkPage from "../AudioPostTwoDarkPage";
import AudioPostThreeDarkPage from "../AudioPostThreeDarkPage";
import PostOneLeftSidebarDarkPage from "../PostOneLeftSidebarDarkPage";
// import PublicRoute from '../_PublicRoute';

const Routes = () => {
    return (
        <Switch>
            {/*home one routes*/}
            <PrivateRoute
                exact
                path="/"
                parentClass="theme-1"
                component={HomePage}/>
            <PrivateRoute
                exact
                path="/business"
                parentClass="theme-1"
                component={BusinessPage}/>
            <PrivateRoute
                exact
                path="/entertainment"
                parentClass="theme-1"
                component={EntertainmentPage}/>
            <PrivateRoute
                exact
                path="/features"
                parentClass="theme-1"
                component={FeaturePage}/>
            <PrivateRoute
                exact
                path="/trending"
                parentClass="theme-1"
                component={TrendingPage}/>
            <PrivateRoute
                exact
                path="/sports"
                parentClass="theme-1"
                component={SportsPage}/>
            <PrivateRoute
                exact
                path="/about"
                parentClass="theme-1"
                component={AboutUsPage}/>
            <PrivateRoute
                exact
                path="/archive"
                parentClass="theme-1"
                component={ArchivePage}/>
            <PrivateRoute
                exact
                path="/contact"
                parentClass="theme-1"
                component={ContactUsPage}/>
            <PrivateRoute
                exact
                path="/404"
                parentClass="theme-1"
                component={NotFoundPage}/>
            <PrivateRoute
                exact
                path="/post1"
                parentClass="theme-1"
                component={PostOnePage}/>
            <PrivateRoute
                exact
                path="/post2"
                parentClass="theme-1"
                component={PostTwoPage}/>
            <PrivateRoute
                exact
                path="/post3"
                parentClass="theme-1"
                component={PostThreePage}/>
            <PrivateRoute
                exact
                path="/video_post1"
                parentClass="theme-1"
                component={VideoPostOnePage}/>
            <PrivateRoute
                exact
                path="/video_post2"
                parentClass="theme-1"
                component={VideoPostTwoPage}/>
            <PrivateRoute
                exact
                path="/video_post3"
                parentClass="theme-1"
                component={VideoPostThreePage}/>
            <PrivateRoute
                exact
                path="/audio_post1"
                parentClass="theme-1"
                component={AudioPostOnePage}/>
            <PrivateRoute
                exact
                path="/audio_post2"
                parentClass="theme-1"
                component={AudioPostTwoPage}/>
            <PrivateRoute
                exact
                path="/audio_post3"
                parentClass="theme-1"
                component={AudioPostThreePage}/>
            <PrivateRoute
                exact
                path="/left_post2"
                parentClass="theme-1"
                component={PostOneLeftSidebarPage}/>

            {/*home two routes*/}
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3 theme3_bg"
                path="/home-two"
                component={HomePageTwo}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3 theme3_bg"
                path="/home-two/business"
                component={BusinessTwoPage}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3 theme3_bg"
                path="/home-two/entertainment"
                component={EntertainmentTwoPage}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3 theme3_bg"
                path="/home-two/features"
                component={FeatureTwoPage}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3 theme3_bg"
                path="/home-two/sports"
                component={SportsTwoPage}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3 theme3_bg"
                path="/home-two/trending"
                component={TrendingTwoPage}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3 theme3_bg"
                path="/home-two/about"
                component={AboutUsPageTwo}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3 theme3_bg"
                path="/home-two/archive"
                component={ArchiveTwoPage}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3 theme3_bg"
                path="/home-two/contact"
                component={ContactUsPage}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3"
                path="/home-two/post1"
                component={PostOneHTwoPage}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3"
                path="/home-two/post2"
                component={PostTwoHTwoPage}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3"
                path="/home-two/post3"
                component={PostThreeHTwoPage}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3"
                path="/home-two/video_post1"
                component={VideoPostOneHTwoPage}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3"
                path="/home-two/video_post2"
                component={VideoPostTwoHTwoPage}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3"
                path="/home-two/video_post3"
                component={VideoPostThreeHTwoPage}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3"
                path="/home-two/audio_post1"
                component={AudioPostOneHTwoPage}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3"
                path="/home-two/audio_post2"
                component={AudioPostTwoHTwoPage}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3"
                path="/home-two/audio_post3"
                component={AudioPostThreeHTwoPage}/>
            <PrivateRoute
                exact
                home_style={2}
                parentClass="theme-3"
                path="/home-two/left_post2"
                component={PostOneHTwoLeftSidebarPage}/>

            {/*home page three*/}
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4"
                path="/home-three"
                component={HomePageThree}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4 bg4"
                path="/home-three/business"
                component={BusinessThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4 bg4"
                path="/home-three/entertainment"
                component={EntertainmentThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4 bg4"
                path="/home-three/features"
                component={FeatureThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4 bg4"
                path="/home-three/sports"
                component={SportsThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4 bg4"
                path="/home-three/trending"
                component={TrendingThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4 bg4"
                path="/home-three/about"
                component={AboutUsThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4 bg4"
                path="/home-three/archive"
                component={ArchiveThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4 bg4"
                path="/home-three/contact"
                component={ContactUsThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4 bg4"
                path="/home-three/404"
                component={NotFoundThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4"
                path="/home-three/post1"
                component={PostOneHThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4"
                path="/home-three/post2"
                component={PostTwoHThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4 theme3_bg"
                path="/home-three/post3"
                component={PostThreeHThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4"
                path="/home-three/video_post1"
                component={VideoPostOneHThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4"
                path="/home-three/video_post2"
                component={VideoPostTwoHThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4"
                path="/home-three/video_post3"
                component={VideoPostThreeHThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4"
                path="/home-three/audio_post1"
                component={AudioPostOneHThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4"
                path="/home-three/audio_post2"
                component={AudioPostTwoHThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4"
                path="/home-three/audio_post3"
                component={AudioPostThreeHThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4"
                path="/home-three/left_post2"
                component={PostOneHThreeLeftSidebarPage}/>

            {/*home dark version*/}
            <PrivateRoute
                exact
                home_style={4}
                path="/dark"
                parentClass="dark-theme primay_bg"
                component={HomeDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/business"
                parentClass="dark-theme primay_bg"
                component={BusinessDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/entertainment"
                parentClass="dark-theme primay_bg"
                component={EntertainmentDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/features"
                parentClass="dark-theme primay_bg"
                component={FeatureDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/sports"
                parentClass="dark-theme primay_bg"
                component={SportsDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/trending"
                parentClass="dark-theme primay_bg"
                component={TrendingDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/about"
                parentClass="dark-theme primay_bg"
                component={AboutUsDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/archive"
                parentClass="dark-theme primay_bg"
                component={ArchiveDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/contact"
                parentClass="dark-theme primay_bg"
                component={ContactUsDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/404"
                parentClass="dark-theme primay_bg"
                component={NotFoundDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/post1"
                parentClass="dark-theme primay_bg"
                component={PostOneDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/post2"
                parentClass="dark-theme primay_bg"
                component={PostTwoDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/post3"
                parentClass="dark-theme primay_bg"
                component={PostThreeDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/video_post1"
                parentClass="dark-theme primay_bg"
                component={VideoPostOneDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/video_post2"
                parentClass="dark-theme primay_bg"
                component={VideoPostTwoDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/video_post3"
                parentClass="dark-theme primay_bg"
                component={VideoPostThreeDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/audio_post1"
                parentClass="dark-theme primay_bg"
                component={AudioPostOneDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/audio_post2"
                parentClass="dark-theme primay_bg"
                component={AudioPostTwoDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/audio_post3"
                parentClass="dark-theme primay_bg"
                component={AudioPostThreeDarkPage}/>
            <PrivateRoute
                exact
                home_style={4}
                path="/dark/left_post2"
                parentClass="dark-theme primay_bg"
                component={PostOneLeftSidebarDarkPage}/>

            <Route exact component={NotFoundPage}/>
        </Switch>
    );
};
export default Routes