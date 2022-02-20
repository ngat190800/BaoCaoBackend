import React, { useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

import { FaBackward, FaRegistered } from "react-icons/fa";
import './login.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});

  const handleSumit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    await axios.post("http://localhost:4000/login", user).then((data) => {
      localStorage.setItem("keyUser", data.data.user.username);
      setData(data.data.user.role);
    });
  };

  if (data === "user") {
    return <Redirect to="/home" />;
  }

  return (
    <div className="container">
      <form action method="post" className="formLogin" onSubmit={handleSumit}>
        <h1 className="title-form">Đăng nhập vào website</h1>
        <div className="input-box">
          <i />
          <input
            type="text"
            value={username}
            className="form-control"
            placeholder="Usernamr"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-box">
          <i />
          <input
            type="password"
            value={password}
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
       <p> Quay lại trang chủ</p>
      <Link to="/home" className="icon-size"> <FaBackward /></Link> 
         <div className="btn-box">
           <p className="register"><FaRegistered/>
          <Link to ="./register">   Tôi chưa có tài khoản</Link></p>
          <button type="submit"> Đăng nhập</button>
        </div>
      </form>
      {/* <form className="container form-signin" onSubmit={handleSumit}>
        <h2 className="form-signin-heading">
          {" "}
          Đăng nhập tài khoản người dùng{" "}
        </h2>
        <label for="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="text"
          value={username}
          className="form-control"
          placeholder="Usernamr"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          value={password}
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit"> Đăng nhập</button>
        <Link to="/home">Quay lại trang chủ</Link>
      </form> */}
    </div>
  );
}

export default Login;
