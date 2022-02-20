import React, { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import { FaBackward, FaRegistered } from "react-icons/fa";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSumit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    const res = axios.post("http://localhost:4000/register", user);

    console.log(res);
  };

  return (
    <>
     
      <div className="container">
      <form action method="post" className="formLogin" onSubmit={handleSumit}>
        <h1 className="title-form">Đăng nhập ký tài khoản</h1>
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
          <Link to ="./login">   Đã có tài khoản</Link></p>
          <button type="submit"> Đăng ký</button>
        </div>
      </form></div>
    </>
  );
}

export default Register;
