import React, {Fragment} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";

const twits = [
    {
        date: 'March 26, 2020',
        tag_line: '@newspark #technology https://dribbble.com/subash_chandra',
        title: 'Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project…'
    },
    {
        date: 'March 26, 2020',
        tag_line: '@newspark #technology https://dribbble.com/subash_chandra',
        title: 'Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project…'
    },
];
const TwitterfeedTwo = () => {
    return (
        <div className="twitter_feeds mb30">
            <h3 className="widget-title2">Twitter feed</h3>
            {twits.map((item, i) => (
                <Fragment key={i}>
                    <div className="single_twitter_feed">
                        <div className="twitter_feed_icon"><FontAwesome name="twitter"/></div>
                        <h6>{item.title}<span>{item.tag_line}</span></h6>
                        <p>{item.date}</p>
                    </div>
                    {i + 1 < twits.length ? <Fragment>
                        <div className="space-30"/>
                        <div className="border_black"/>
                        <div className="space-30"/>
                    </Fragment> : ''}
                </Fragment>
            ))}
        </div>
    );
};

export default TwitterfeedTwo;