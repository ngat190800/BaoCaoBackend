import React from "react";
import { checkLogin } from "../login/index";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FaShoppingCart, FaUser, FaUserGraduate } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./menu.css";
export default function Menu() {
  const [name, setName] = React.useState();
  const ten = localStorage.getItem("keyUser");
  React.useEffect(() => {
    setName(ten);
  }, [ten]);
  const history = useHistory();
  function logOut() {
    localStorage.clear();
    history.push("/home");
  }
  const number = useSelector((state) => state.cart.lists.length);

  const [numberCart, setNumber] = React.useState();
  React.useEffect(() => {
    setNumber(number);
  }, [number]);
  return (
    <div>
      <div className="menu">
        <p className="nav-item nav-link active" href="#">
          <Link to={"/home"} className="nav-link">
            HOME
          </Link>
          {/* <i className="fas fa-angle-down" />
                      <span className="sr-only">(current)</span> */}
        </p>
        <p className="nav-item nav-link active" href="#">
          <Link to={"/About"} className="nav-link">
            GIỚI THIỆU
          </Link>
        </p>
        <p className="nav-item nav-link active" href="#">
          <Link to={"/product"} className="nav-link">
            SẢN PHẨM
          </Link>
        </p>
        {/* <p className="nav-item nav-link active" href="#">
                      <Link to={"/sale"} className="nav-link">
                        KHUYẾN MÃI
                      </Link>
                    </p> */}
        <p className="nav-item nav-link active" href="#">
          <Link to={"/Contact"} className="nav-link">
            LIÊN HỆ
          </Link>
        </p>
        <p className="nav-item nav-link active numberCartPar" href="#">
          <Link to="/cart" className="nav-link">
            <FaShoppingCart />
          </Link>
          <div className="numberCartChil">{numberCart}</div>
        </p>
        <p className="nav-item nav-link active" href="#">
          <Link to={"/create"} className="nav-link">
            <FaUserGraduate />
          </Link>
        </p>
        {checkLogin() === 0 ? (
          <div className="signin-signout">
            <span className="nav-item nav-link active" href="#">
              <Link to={"/login"} className="nav-link">
                Đăng nhập
              </Link>
            </span>
            <span className="nav-item nav-link active" href="#">
              <Link to={"/register"} className="nav-link">
                Đăng kí
              </Link>
            </span>
          </div>
        ) : (
          <div className="signin-signout">
            <p className="nav-item nav-link active">
              <span className="nav-link">
                <FaUser /> {name}
              </span>
            </p>
            <p className="nav-item nav-link active" href="#">
              <Link onClick={logOut} className="nav-link">
                Đăng xuất
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
