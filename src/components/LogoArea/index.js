import React from "react";
import { Link } from "react-router-dom";
import logo from "../../doc/img/logo/logo.png";
import logoDark from "../../doc/img/logo/footer_logo.png";

const LogoArea = ({ className, dark }) => {
  return (
    <div className={`logo_area ${className ? className : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="logo">
              <Link to="/">
                <img src={dark ? logoDark : logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 align-self-center d-lg-flex">
            <div className="hotline Module Module-138">
              <div className="ModuleContent" style={{width:"175px",margin:"0 auto"}}>
                <table>
                  <tbody>
                    <tr>
                      <td> Hotline: </td>
                      <td>
                        <a href="tel:+84392133732">+84 392133732</a>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td> Email: </td>
                      <td>
                        <a href="email:abc@gmail.com">abc@gmail.com</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="dang-ky Module Module-161">
              <div className="ModuleContent">
                <a href="/">
                  Đăng ký ứng tuyển
                  <em className="fa fa-caret-right" style={{marginLeft:"10px"}}></em>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoArea;
