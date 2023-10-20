import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";

const EntertainmentNews = ({ entertainments }) => {
  return (
    <Fragment>
      {entertainments.map((item, i) => (
        <div key={i} className="col-lg-12">
          <div className="single_post post_type3 post_type12 post-lst-type mb30">
            <div className="post_img">
              <div className="img_wrap">
                <Link to="/">
                  <img src={item.image} alt="thumb" />
                </Link>
              </div>
            </div>
            <div className="single_post_text">
              <h4>
                <Link to="/post1">{item.title}</Link>
              </h4>
              <div className="page_comments">
                <ul className="inline">
                  <li>
                    <FontAwesome name="clock-o" />
                    {item.date}
                  </li>
                  <li>
                    <FontAwesome name="eye" />
                    1563
                  </li>
                  <li>
                    <FontAwesome name="comment" />
                    52
                  </li>
                </ul>
              </div>
              <div className="space-10" />
              <p className="post-p">{item.body}</p>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default EntertainmentNews;
