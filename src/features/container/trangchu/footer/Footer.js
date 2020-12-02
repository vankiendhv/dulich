import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Map_home from "../map/Map-home";
import "./footer.css";
export class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <footer className="page-footer font-small blue pt-4 container">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase text-danger">Footer Content</h5>
                <p>Công ty du lịch hàng đầu Việt Nam</p>
                <h5 className="text-uppercase text-danger mt-3">Liên hệ</h5>
                <p>
                  <strong>Số điện thoại: </strong>
                  <i>+84234938503</i>
                </p>
                <p>
                  <strong>Địa chỉ: </strong>
                  <i>Lê Duẩn, thành phố Vinh, Tỉnh Nghệ An</i>
                </p>
              </div>
              <hr className="clearfix w-100 d-md-none pb-3" />
              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase text-danger">Links</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">
                      <span className="fa fa-angle-double-right mr-2"></span>
                      Trang chủ
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="fa fa-angle-double-right mr-2"></span>Tin
                      tức
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="fa fa-angle-double-right mr-2"></span>
                      Dịch vụ
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="fa fa-angle-double-right mr-2"></span>
                      Khuyến mãi
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 mb-md-0 mb-3 mxh">
                <h5 className="text-uppercase text-danger">Mạng xã hội</h5>
                <Link>
                  <div className="icon_footer" style={{
                    background: "#3f64ab"
                  }}>
                    <i className="fab fa-facebook-f" ></i>
                  </div>
                </Link>
                <Link>
                  <div className="icon_footer" style={{ background: "#1d9ceb" }}>
                    <i className="fab fa-twitter"></i>
                  </div>
                </Link>
                <Link>
                  <div className="icon_footer" style={{ background: "linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%" }}>
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="https://mdbootstrap.com/">
              Công ty thương mại Vinhtravel.
            </a>
          </div>
        </footer>
      </div >
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
