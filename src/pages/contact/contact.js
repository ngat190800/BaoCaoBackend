import React, { Component } from "react";
import "./contact.css";
import Banner from "../../components/banner/Banner";
import Footer from "../footer/footer";
import Map from "../../components/map/map";
class Contact extends Component {
  render() {
    return (
      <div>
        <Banner />
        <div className="container">
          <div className="row">
            <div class=" col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
              <div className="welcom-organic">
                <div style={{ marginTop: 10 }}>
                  <div >
                   ĐÓNG GÓP Ý KIẾN PHẢN HỒI
                  </div>
                </div>
                <div className="text-one">
                  Ý kiến đóng góp của khách hàng là nền tảng để chúng tôi phát
                  triển
                </div>
                <div className="name">
                  {" "}
                  <input type="Name" placeholder="Tên khách hàng" />
                </div>
                <div className="email">
                  <input type="email address" placeholder=" Email" />
                </div>
                <div className="mess">
                  <input
                    type="mess"
                    placeholder="Ý kiến đóng góp "
                    style={{ height: "150px" }}
                  />
                </div>
                <div className="send">
                  <button>Gửi ý kiến</button>
                </div>
              </div>
            </div>
            <div class=" col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div class="map">
                <p className="iframe">
                  <Map />
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Contact;
