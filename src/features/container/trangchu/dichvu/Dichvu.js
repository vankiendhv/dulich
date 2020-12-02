import React, { Component } from "react";
import { connect } from "react-redux";
import "./dichvu.css";
export class DIchvu extends Component {
  render() {
    return (
      <div>
        <div className=" mb-5 tour" id="dichvu">
          <div className="heading text-center pt-5">
            <span>Dịch vụ công ty</span>
            <div className="hr"></div>
            <p className="mb-4">
              Các dịch vụ mà công ty sẽ cung cấp trong quá trình khách hàng sử
              dụng tour.
            </p>
          </div>
          <div className="container">
            <div className="row justify-content-center pb-5 text-center">
              <div className="col-md-4 border-left-top">
                <div className="icon">
                  <span className="fa fa-coffee"></span>
                </div>
                <div className="content-dv">
                  <strong>Dịch vụ 1</strong>
                  <p>
                    Quisque sagittis lacus eu lorem sodalesd enean adipiscing.
                  </p>
                </div>
              </div>
              <div className="col-md-4 border-mid-top ">
                <div className="icon">
                  <span className="fa fa-coffee"></span>
                </div>
                <div className="content-dv">
                  <strong>Dịch vụ 2</strong>
                  <p>
                    Quisque sagittis lacus eu lorem sodalesd enean adipiscing.
                  </p>
                </div>
              </div>
              <div className="col-md-4 border-right-top">
                <div className="icon">
                  <span className="fa fa-coffee"></span>
                </div>
                <div className="content-dv">
                  <strong>Dịch vụ 3</strong>
                  <p>
                    Quisque sagittis lacus eu lorem sodalesd enean adipiscing.
                  </p>
                </div>
              </div>
              <div className="col-md-4 border-left-top">
                <div className="icon">
                  <span className="fa fa-coffee"></span>
                </div>
                <div className="content-dv">
                  <strong>Dịch vụ 1</strong>
                  <p>
                    Quisque sagittis lacus eu lorem sodalesd enean adipiscing.
                  </p>
                </div>
              </div>
              <div className="col-md-4 border-mid-top ">
                <div className="icon">
                  <span className="fa fa-coffee"></span>
                </div>
                <div className="content-dv">
                  <strong>Dịch vụ 2</strong>
                  <p>
                    Quisque sagittis lacus eu lorem sodalesd enean adipiscing.
                  </p>
                </div>
              </div>
              <div className="col-md-4 border-right-top">
                <div className="icon">
                  <span className="fa fa-coffee"></span>
                </div>
                <div className="content-dv">
                  <strong>Dịch vụ 3</strong>
                  <p>
                    Quisque sagittis lacus eu lorem sodalesd enean adipiscing.
                  </p>
                </div>
              </div>
              <div className="col-md-4 border-left-bot">
                <div className="icon">
                  <span className="fa fa-coffee"></span>
                </div>
                <div className="content-dv">
                  <strong>Dịch vụ 7</strong>
                  <p>
                    Quisque sagittis lacus eu lorem sodalesd enean adipiscing.
                  </p>
                </div>
              </div>
              <div className="col-md-4 border-mid-bot ">
                <div className="icon">
                  <span className="fa fa-coffee"></span>
                </div>
                <div className="content-dv">
                  <strong>Dịch vụ 8</strong>
                  <p>
                    Quisque sagittis lacus eu lorem sodalesd enean adipiscing.
                  </p>
                </div>
              </div>
              <div className="col-md-4 border-right-bot">
                <div className="icon">
                  <span className="fa fa-coffee"></span>
                </div>
                <div className="content-dv">
                  <strong>Dịch vụ 9</strong>
                  <p>
                    Quisque sagittis lacus eu lorem sodalesd enean adipiscing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DIchvu);
