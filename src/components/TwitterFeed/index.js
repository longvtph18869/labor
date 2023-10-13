import React from 'react';
import FontAwesome from "../uiStyle/FontAwesome";

const twitts = [
    {
        title: 'Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project',
        linkText: '@newspark #TECHNOLOGY https://dribbble.com/subash_chandra',
        date: 'March 26, 2020'
    },
    {
        title: 'Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project',
        linkText: '@newspark #TECHNOLOGY https://dribbble.com/subash_chandra',
        date: 'March 26, 2020'
    },
    {
        title: 'Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project',
        linkText: '@newspark #TECHNOLOGY https://dribbble.com/subash_chandra',
        date: 'March 26, 2020'
    },
];

const TwitterFeed = () => {
    return (
        <div className="twitter_feeds">
            <h3 className="widget-title2">Twitter feed</h3>
            {twitts.map((item, i) => (
                <div key={i} className="single_twitter_feed border_white_bottom">
                    <div className="twitter_feed_icon"><FontAwesome name="twitter"/>
                    </div>
                    <h6>{item.title}… <span>{item.linkText}</span></h6>
                    <p>{item.date}</p>
                </div>
            ))}
        </div>
    );
};

export default TwitterFeed;