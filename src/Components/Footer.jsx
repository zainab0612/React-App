import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer(props) {
  return (
    <>
      <div className="container-fluid bg-dark text-white py-3">
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="h4 my-4"><u>{props.sectionTitle1}</u></div>
            <div className="fs-1"><FiTwitter className="px-1" /><FaSquareFacebook className="px-1" /><FaInstagram className="px-1" /></div>
          </div>
          <div className="col-md-4 text-center">
            <div className="h4 my-4"><u>{props.sectionTitle2}</u></div>
            <div className="h5">Home</div>
            <div className="h5">About</div>
            <div className="h5">Services</div>
            <div className="h5">Contact Us</div>

          </div>
          <div className="col-md-4 text-center">
            <div className="h4 my-4"><u>{props.sectionTitle3}</u></div>
            <div className="h6">Phone:+514-592013</div>
            <div className="h6">Address: Office# 106, Karachi,Pakistan</div>
            <div className="h6">Email:a2ztechverse@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white py-3">
        <div className="row">
        <div className="col text-center text-white">CopyRight 2023 All Rights Reserved <br />Developed & Designed By A2Z Techverse</div>
        </div>
        </div>
    </>
  );
}

export default Footer;
