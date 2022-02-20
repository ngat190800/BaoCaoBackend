import React from "react";
import { Component } from "react";
import "./Style.css";
import ProductList from "../../components/productList";
import Footer from "../footer/footer";
import {CheckRole} from '../login/index';
class Home extends Component {
  render() {
  console.log(CheckRole());
    const checkUser = localStorage.getItem('keyUser');


    return (
      <div>
        <div className="banner-home">
          <div>
            <div className="text-banner">
              <img
                src="./assets/image/home/logo-white.png"
                alt=""
                className="logo-white"
              />
              <div className="title-banner">Thế giới hàng nội địa Nhật</div>
              <p className="describe-text">
                Chúng tôi luôn mong muốn mang đến cho bạn những sản
                phẩm tốt và chất lượng nhất. Chúng tôi luôn quan tâm đến nguồn
                hàng hóa bạn đang sử dụng mỗi ngày và đó là động lực để chúng
                tôi cải thiện các sản phẩm.
              </p>
              <div className="star-ex"> khám phá </div>
            </div>
          </div>
        </div>
        <div className="about-us container">
          <div className="row">
            {/* Hiển thị ảnh trên đầu trang  */}
            <div className="col-12 col-md-7 col-sm-12 col-lg-7">
              <div className="img-about-us">
                <div className="img-us">
                <img src="https://artia.vn/wp-content/uploads/2020/11/chup-anh-dep-cho-mau-quang-cao-my-pham.jpg" />
                  <img src="https://lh3.googleusercontent.com/proxy/kqqYCGw-mTlA6A5aX24amLPC_gL4RzYziss1_w88s_h7Zmp4I0G7Hv3sdCOsIi0DI3sUsb0opGINYs_YO5LcHple89OlfRkx9hWhPyI" />
                 
                </div>
                {/* <div className="img-us-2">
                  <img src="./assets/image/home/about2.png" alt="" />
                  <div className="content-about-us-2"> Play Video</div>
                </div> */}
              </div>
            </div>
            <div className="col-12 col-md-5 col-sm-12 col-lg-5 content-abouts">
              <Infomation />
            </div>
          </div>
        </div>
        <div className="product-title">
          <div className="row">
            <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12 col-12 text-center organic-product">
            Japan
              <p className="text-center">Sản phẩm</p>
            </div>
          </div>
          <ProductList />
          <Footer />
        </div>
      </div>
    );
  }
}
export default Home;

function Infomation() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 col-xs-12 col-sm-12 text-center organic-about">
        Japan
        </div>
        <div className="col-md-5 col-sm-12 about-us-one">About us</div>
      </div>
      <hr />
      <div className="row" style={{ paddingTop: "20px" }}>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 content-about-one">
          Ngọt là một trang web chuyên cung cấp các mặt hàng nội địa Nhật chất lượng. Chúng
          tôi tin rằng tất cả mọi người có quyền được sử dụng những sản phẩm tốt nhất!
          Chúng tôi cung cấp cho cộng đồng của chúng tôi mỹ phẩm, thực phẩm chức năng và đồ gia dụng mỗi năm.
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 content-about-two">
        Hàng Nhật từ lâu vốn đã nổi tiếng bởi chất lượng vượt trội, khả năng bền bỉ qua thời gian. Nhắc tới đồ Nhật là nhắc tới những sản phẩm có những ưu điểm vượt trội từ đồ gia dụng, bỉm sữa, các thiết bị điện tử cho tới các mặt hàng cao cấp như điện thoại, ô tô, máy tính... Tuy nhiên, hàng hóa ở Nhật có sự phân hóa rất đa dạng giữa hàng nội địa Nhật và hàng xuất khẩu cả về kiểu dáng cũng như chất lượng.
        </div>
      </div>
      {/* <div className="row">
        <div
          className="col-12 col-sm-12 col-md-12 col-lg-12"
          content-about-three
          style={{ marginTop: "20px" }}
        >
          Vật nuôi hữu cơ được nuôi để lấy thịt, trứng và các sản phẩm từ sữa
          phải có ra ngoài trời và được cung cấp thức ăn hữu cơ. Họ có thể không
          được sử dụng thuốc kháng sinh, hormone tăng trưởng hoặc bất kỳ sản
          phẩm phụ nào của động vật.
        </div>
      </div> */}
      {/* <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 img-about-us-end">
          <img src="./assets/image/home/about-us.png" width="50%" alt="" />
        </div>
      </div> */}
    </div>
  );
}
