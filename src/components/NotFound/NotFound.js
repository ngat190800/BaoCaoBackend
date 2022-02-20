import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./notFound.css";
export default class NotFound extends Component {
  render() {
    return (
      <div className="pageNotFound">
        <div className="not-found">
          <div style={{ marginTop: 10 }}>
            <div className="add-product">
              Trang web hiện không khả dụng
              <div> Trang web hiện không khả dụng</div>
              <div> Trang web hiện không khả dụng</div>
              <div> Trang web hiện không khả dụng</div>
              <div> Trang web hiện không khả dụng</div>
            </div>
          </div>

          <div className="notfound-top">
            <h1>404</h1>
          </div>
          <div className="content">
            <img src="images/#FF6699.png" alt="" title />
            <h3>
              Để truy nhập và thực hiện bạn phải truy nhập vào trang web. Hãy
              đăng nhập tại đây!
            </h3>
            <Link to="/login">
              <button type="button" className="snip">
                Đăng nhập
              </button>
            </Link>
            <h3>Nếu bạn chưa có tài khoản. Hãy đăng ký tài khoản tại đây!</h3>
            <Link to="/register"><button type="button" className="snip">
            Đăng ký
              </button></Link>
            <ul className="social-icon">
              <li>
                <a className="fa" href="#">
                  {" "}
                </a>
              </li>
              <li>
                <a className="tw" href="#">
                  {" "}
                </a>
              </li>
              <li>
                <a className="g" href="#">
                  {" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="clear"> </div>
        </div>
        <div className="copyright">
          <p>
            © 2021 HVNNVN | Địa chỉ liên hệ{" "}
            <a href="https://fita.vnua.edu.vn/en/" target="_blank">
              {" "}
              FITA - VNUA{" "}
            </a>
          </p>
        </div>
      </div>
    );
  }
}
