import React from "react";
import { Link } from "react-router-dom";
import Heading from "../uiStyle/Heading";

const BusinessNews = ({ businessNews, headerHide }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="businerss_news">
          <Heading title="ĐỜI SỐNG VĂN HÓA" more={true} />
          <div className="row">
            <div className="col-12">
              {businessNews.map((item, i) => (
                <div
                  key={i}
                  className="single_post post_type3 post_type12 mb30"
                >
                  <div className="post_img">
                    <div className="img_wrap">
                      <Link to="/">
                        <img src={item.image} alt="thumb" />
                      </Link>
                    </div>
                  </div>
                  <div className="single_post_text">
                    <div className="meta3">
                      <Link to="/">{item.category}</Link>
                      <Link to="#">{item.date}</Link>
                    </div>
                    <h4>
                      <Link to="/post1">
                      {item.title}
                      </Link>
                    </h4>
                    <div className="space-10" />
                    <p className="post-p">
                    {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessNews;
