import React from "react";
import { Component } from "react";
import "./icon.css";
import {  FaFacebookF, FaFacebookMessenger, FaTwitter,FaInstagram, FaPhone } from "react-icons/fa";
class Icon extends Component {
  render() {
    return (
      <div>
        <div className="all-icon">
          <a className="status" href="https://www.facebook.com/">
            <FaFacebookF/>
          </a>
          <a href="https://www.messenger.com/">
            <i class="fa fa-search"></i>
            <FaFacebookMessenger />
          </a>
          <a href="https://twitter.com/">
            <i class="fa fa-envelope"></i>
            <FaTwitter/>
          </a>
          <a href="https://www.instagram.com/">
            <i class="fa fa-globe"></i>
            <FaInstagram/>
          </a>
          <a href="http://phone.com/">
            <i class="fa fa-trash"></i>
            <FaPhone />
          </a>
        </div>
      </div>
    );
  }
}
export default Icon;
