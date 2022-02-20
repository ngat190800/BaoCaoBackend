import React, { Component } from "react";
import "./Footer.css";
import ItemFooter from "./Item";
import{Link} from "react-router-dom"
class Footer extends React.Component {
  render() {
    const itemFooter = [
      {
        img: "https://cdn3.vectorstock.com/i/1000x1000/96/82/pink-street-shop-icon-cartoon-style-vector-21369682.jpg",
        title: "SHOPS",
        content1: "Mỹ phẩm",
        content2: "Thực phẩm chức năng",
        content3: "Thuốc điều trị",
        content4: "Đồ ăn vặt",
        content5: "Đồ gia dụng",
      },
      {
        img: "https://thumbs.dreamstime.com/z/paper-cut-chat-question-icon-isolated-pink-background-help-speech-bubble-symbol-faq-sign-question-mark-sign-paper-paper-cut-199325425.jpg",
        title: "Information",
        content1: "About Us",
        content2: "Customize Service",
        content3: " New Collection",
        content4: "Best Sellers",
        content5: "Privacy Policy",
      },
      {
        img: "https://previews.123rf.com/images/arhimicrostok/arhimicrostok1709/arhimicrostok170901259/86905920-connection-mark-user-sign-icon-person-symbol-human-avatar-flat-style-.jpg",
        title: "User Area",
        content1: "My car",
        content2: "My account",
        content3: "With list",
        content4: "Login",
        content5: "Check out",
      },
      {
        img: "https://thumbs.dreamstime.com/b/paper-cut-chat-question-icon-isolated-pink-background-help-speech-bubble-symbol-faq-sign-question-mark-sign-paper-paper-cut-199325425.jpg",
        title: "Hướng dẫn-phục vụ",
        content1: "Getting Started",
        content2: "FAQs",
        content3: "Buying Guide",
        content4: "Order Return",
        content5: "Affiliate Program",
      },
      {
        img: "https://cdn1.vectorstock.com/i/1000x1000/66/20/map-pointer-location-icon-pink-pin-on-white-vector-21806620.jpg",
        content1: "Khoa CNTT - HVNN Viet Nam",
      },
      {
        img: "https://previews.123rf.com/images/faysalfarhan/faysalfarhan1605/faysalfarhan160502560/56751118-contact-us-customer-care-icon-pink-glossy-round-button.jpg",
        content1: "ĐT: 0123456789",
      },
    ];
    return (
      <div>
        <div className="newsletters">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4">
                <div className="organic">
                  {" "}
                  <p>Japan </p>
                </div>
                <div className="out-newsletter">
                  <p> Best of Products</p>
                </div>
                <div className="miss-the-update">
                  {" "}
                  Don’t miss the any update{" "}
                </div>
              </div>
              <div className=" col-xl-8 col-8 col-lg-8 col-md-8 col-sm-8">
                <Input />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-xl-12 col-12 col-lg-12 col-md-12 col-sm-12">
            <div className="group-organic-instagrams">
              <p className="organic-instagrams">Japan </p>
              <p className="instagrams">Products</p>
            </div>
          </div>
        </div>
        <div className="container">
          <ItemFooter itemFooter={itemFooter} />
        </div>

        <Trakemark />
      </div>
    );
  }
}
export default Footer;

class Input extends React.Component {
  shoot() {
    alert("Bạn phải đăng nhập tài khoản");
    
  }
  render() {
    return (
      <div>
        <form className="input-btn">
          <input
            placeholder="Ý kiến đóng góp..."
            className="text-add"
            type="text"
          ></input>
          <button onClick={this.shoot}>
            GỬI Ý KIẾN</button>
        </form>
      </div>
    );
  }
}
class Trakemark extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="title-footer">
                 @2022_NguyenThiNgat<br/>
                Tổng đài tư vấn và hỗ trợ khách hàng: 1900 0000
              </div>
            </div>
            <div className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="bank">
                <img src="https://img.favpng.com/23/13/3/logo-payment-visa-mastercard-paypal-png-favpng-Ny6jxPjJke3h8zQjde5A5axE5_t.jpg" alt="" />
                <img src="https://vtcgame.vn/Content/images/icon_vcoin.png" alt="" />
                <img src="https://www.indovinabank.com.vn/themes/ivb/assets/icons/rgt-card.svg" alt="" />
                <img src="https://m.thebank.vn/uploads/2019/06/20/y-nghia-logo-ngan-hang-dong-a.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
