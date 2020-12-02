import { Rate } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import g1 from "../../../images/g1.jpg";
import "./Tour.css";
export class Tourtrongnuoc extends Component {
  render() {
    return (
      <div className="mt-5 mb-5 tour" id="tour">
        <div className="heading text-center">
          <span>du lịch trong nước</span>
          <div className="hr"></div>
          <p className="mb-4">
            Du lịch trong nước luôn là lựa chọn tuyệt vời. Những thành phố nhộn
            nhịp, nền văn hóa độc đáo và hấp dẫn.
          </p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-2">
              <Link to="/tour">
                <div className="img rounded">
                  <img src={g1} className="img-fluid" alt="" />
                </div>
                <div className="content_tour">
                  <div className="title_tour">Hà Nội</div>
                  <div className="star float-left">
                    <Rate value="4" disabled />
                  </div>
                  <div className="money float-left ml-3 text-warning">
                    3.000.000 VNĐ<br />
                    <del> 4.000.000 VNĐ</del>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 mb-2">
              <Link to="/tour">
                <div className="img rounded">
                  <img src={g1} className="img-fluid" alt="" />
                </div>
                <div className="content_tour">
                  <div className="title_tour">Hà Nội</div>
                  <div className="star float-left">
                    <Rate value="4" disabled />
                  </div>
                  <div className="money float-left ml-3 text-warning">
                    3.000.000 VNĐ<br />
                    <del> 4.000.000 VNĐ</del>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 mb-2">
              <Link to="/tour">
                <div className="img rounded">
                  <img src={g1} className="img-fluid" alt="" />
                </div>
                <div className="content_tour">
                  <div className="title_tour">Hà Nội</div>
                  <div className="star float-left">
                    <Rate value="4" disabled />
                  </div>
                  <div className="money float-left ml-3 text-warning">
                    3.000.000 VNĐ<br />
                    <del> 4.000.000 VNĐ</del>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 mb-2">
              <Link to="/tour">
                <div className="img rounded">
                  <img src={g1} className="img-fluid" alt="" />
                </div>
                <div className="content_tour">
                  <div className="title_tour">Hà Nội</div>
                  <div className="star float-left">
                    <Rate value="4" disabled />
                  </div>
                  <div className="money float-left ml-3 text-warning">
                    3.000.000 VNĐ<br />
                    <del> 4.000.000 VNĐ</del>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 mb-2">
              <Link to="/tour">
                <div className="img rounded">
                  <img src={g1} className="img-fluid" alt="" />
                </div>
                <div className="content_tour">
                  <div className="title_tour">Hà Nội</div>
                  <div className="star float-left">
                    <Rate value="4" disabled />
                  </div>
                  <div className="money float-left ml-3 text-warning">
                    3.000.000 VNĐ<br />
                    <del> 4.000.000 VNĐ</del>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 mb-2">
              <Link to="/tour">
                <div className="img rounded">
                  <img src={g1} className="img-fluid" alt="" />
                </div>
                <div className="content_tour">
                  <div className="title_tour">Hà Nội</div>
                  <div className="star float-left">
                    <Rate value="4" disabled />
                  </div>
                  <div className="money float-left ml-3 text-warning">
                    3.000.000 VNĐ<br />
                    <del> 4.000.000 VNĐ</del>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
        <div className="xem-them mt-3">
          <Link to="/list-tour">Xem Thêm &gt;&gt;</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Tourtrongnuoc);
