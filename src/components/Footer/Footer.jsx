import React from "react";
import "./Footer.scss"
const Footer = () => {
  return (

<div className="footer">
<div className="top">
  <div className="item">
    <h1>Categories</h1>
    <span>Livingroom</span>
    <span>Bedroom</span>
    <span>Couch</span>
    <span>Sofa</span>
    <span>New Arrivals</span>
  </div>
  <div className="item">
    <h1>Links</h1>
    <span>FAQ</span>
    <span>Pages</span>
    <span>Stores</span>
  </div>
  <div className="item">
    <h1>About</h1>
    <span>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam
    </span>
  </div>
  <div className="item">
    <h1>Contact</h1>
    <span>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam
    </span>
  </div>
</div>
<div className="bottom">
  <div className="left">
    <span className="logo">ILIAMI</span>
    <span className="copyright">Copyright 2023.All rights reserved</span>
  </div>
  <div className="right">
    <img className="img" src="../../../public/img/payment.png"/>
  </div>
</div>
</div>
  );
};


export default Footer;

