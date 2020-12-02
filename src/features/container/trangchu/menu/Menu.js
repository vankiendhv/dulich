import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-scroll";
import { Link as Linkrt } from "react-router-dom";
import logo from "../../../images/your-logo.png";
import "./menu.css";
import Avatar from "antd/lib/avatar/avatar";
export class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">

          <Linkrt
            className="navbar-brand"
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Travel
          </Linkrt>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="banner"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Trang chủ<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="dichvu"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Dịch vụ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="news"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Tin tức
                </Link>
              </li>
              <li className="nav-item fie">
                <Linkrt to="/admin" className="nav-link">Admin</Linkrt>
              </li>
              <li className="nav-item">
                <Linkrt className="nav-link" to="/dangnhap">
                  <Avatar size="small" >VK</Avatar>
                </Linkrt>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
