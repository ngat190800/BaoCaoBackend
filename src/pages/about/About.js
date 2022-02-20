import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Footer from "../footer/footer";
import Support from "./support";
import Icon from "../../components/iconContact/icon";
import "./About.css";
class About extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <Content />
        <WhyChooseUs />
        <Icon />
        {/* <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-10">
              <div className="comma">
                <img src="./assets/image/about-us/phay.png" alt="" />
              </div>
              <p className="content1-introduce">
                Nông nghiệp hữu cơ có thể được định nghĩa là một hệ thống quản
                lý và sản xuất nông nghiệp kết hợp mức độ đa dạng sinh học cao
                với các thực hành môi trường bảo tồn tài nguyên thiên nhiên và
                có các tiêu chuẩn khắt khe về quyền lợi động vật. Hơn nữa, canh
                tác hữu cơ đáp ứng nhu cầu ngày càng tăng của người tiêu dùng
                đối với các sản phẩm tự nhiên và đồng thời cho phép bảo vệ môi
                trường trong bối cảnh phát triển nông thôn bền vững. Các doanh
                nghiệp sau đó sẽ được chứng nhận nếu họ đưa ra bằng chứng về
                việc tuân thủ các thông số kỹ thuật nghiêm ngặt khác nhau tùy
                thuộc vào loại hình sản xuất.
              </p>
              <p className="content-two-introduce">David Jones</p>
              <a
                className="content-three-introduce"
                href="http://vietnamorganic.vn/danh-sach-tin2/269/nong-nghiep-huu-co-nguyen-tac-co-ban.html#:~:text=N%C3%B4ng%20nghi%E1%BB%87p%20h%E1%BB%AFu%20c%C6%A1%20k%E1%BA%BFt,(%20Theo%20IFOAM%2D2005)."
              >
                Xem thêm
              </a>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
              <div className="girl-end">
                <img src="./assets/image/about-us/girl.png" alt="" />
              </div>
            </div>
          </div>
        </div> */}
        <Footer />
      </div>
    );
  }
}

function Contact() {
  return (
    <div>
      <Link to="/contact">
        <button className="content-3-suport"> Contact us </button>
      </Link>
    </div>
  );
}
export default About;

class Content extends Component {
  render() {
    return (
      <div className="container">
        <p className="wellcome-content">Welcome to Japan</p>
        <p className="content2">
        Hàng Nhật nội địaa (JDM - Japanese Domestics Market) được hiểu là các loại hàng hóa được sản xuất chỉ dành riêng cho thị trường Nhật, cho người dân Nhật tiêu dùng. Hàng Nhật nội địa có thể được sản xuất bởi các công ty của Nhật hoặc thông qua các công ty đa quốc gia ký hợp đồng sản xuất riêng cho thị trường Nhật.
        </p>
        <p className="content3">
        Hàng Nhật nội địa có một số đặc điểm đó là gần như toàn bộ trên bao bì sản phẩm đều là chữ Nhật ngoài chữ Made in Japan, điều này cho thấy tinh thần dân tộc cực cao của xứ sở Phù Tang. Đặc biệt, đối với các sản phẩm mỹ phẩm thì có hạn dùng là 3 năm kể từ khi mở nắp và thường thì nhà sản xuất họ sẽ không ghi hạn sử dụng mà thay vào đó là kiểm soát bằng mã code
        </p>
        <p className="content4">
        Made in Japan nhưng chưa chắc đó lại là hàng Nhật nội địa. Nguyên do bởi các doanh nghiệp ở Nhật khi sản xuất cùng 1 sản phẩm thường sẽ tạo ra 2 loại: một loại để tiêu dùng trong nước Nhật và loại còn lại để xuất khẩu ra nước ngoài. Chính vì lý do đó mà một số mặt hàng bạn có thể bắt gặp nhãn mác là Made in Japan nhưng chúng lại không phải là hàng nội địa Nhật Bản.
        </p>
      </div>
    );
  }
}
class WhyChooseUs extends Component {
  render() {
    const support = [
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwTGPAQ-FSd61iKxi3zGE3bCj_fj0x51tJxlTmNOSMbm30C51LXhXmY-RmEQNzrwiWjA&usqp=CAU",
        title: " miễn phí vận chuyển 24/7",
        describe: "Miễn phí ship với các thực phẩm hữu cơ",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrqR1u5p3glsM0fMiJd_4RqrMxY8xhLuecXT5HQwiTw_bB3afFcShiqsPpyAL85aHpj_g&usqp=CAU",
        title: "  So sánh giá trị thực",
        describe: "Đảm bảo rẻ nhất và an toàn nhất",
      },
      {
        image:
          "https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-round-tick-warm-icon-image_1357191.jpg",
        title: " Phục vụ tốt nhất",
        describe: "Dịch vụ chăm sóc khách hàng luôn sãn sàng và tận tình",
      },
    ];
    return (
      <div class="content-backgrounnd container">
        <div class="detail-content container">
          <div className="row">
            <div className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 why-choose">
              <p className="content1-suport">Vì sao nên chọn hàng nội địa Nhật?</p>
              <hr />
              <p className="content2-suport">
              Hàng Nhật nội địa có các đặc điểm riêng biệt được thiết kế, chế biến theo những quy tắc, tiêu chuẩn đặc thù phù hợp với thói quen mua sắm, tính cách của người Nhật. Với phương châm "chất lượng sản phẩm là danh dự của quốc gia", cho nên các sản phẩm hàng Nhật nội địa đều có chất lượng rất cao, không ngừng được cải tiến để làm vừa lòng thị trường khó tính bậc nhất thế giới là Nhật Bản.
              </p>
              <Contact />
            </div>
            <div className="col-9 col-xl-9 col-lg-9 col-md-9 col-sm-12 ">
              <Support className="support-content" supports={support} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
