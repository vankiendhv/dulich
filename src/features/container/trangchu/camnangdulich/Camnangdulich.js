import React, { Component } from "react";
import { connect } from "react-redux";
import "./camnang.css";
export class Camnangdulich extends Component {
  render() {
    return (
      <div className="mt-3" id="camnang">
        <div className="heading text-center">
          <span>cẩm nang du lịch</span>
          <div className="hr"></div>
          <p className="mb-4">
            Tất cả những thông tin hữu ích mà bạn cần để thêm vào vào hành trang
            du lịch của mình
          </p>
        </div>
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-3">
              <div className="head_cn text-center">
                <i className="fab fa-pagelines mt-2 mb-3"></i>
              </div>
              <div className="content_cn text-center">
                <p className="text-center">Mùa du lịch</p>
                <span>
                  Những thời điểm tốt nhất dành cho du lịch của từng địa điểm mà
                  bạn muốn đến.
                </span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="head_cn text-center">
                <i className="fas fa-map-marker-alt mt-2 mb-3"></i>
              </div>
              <div className="content_cn text-center">
                <p className="text-center">Địa điểm đẹp</p>
                <span>
                  Các điểm đến, danh lam thắng cảnh của những thành phố bạn sẽ
                  tới tham quan trong chuyến đi.
                </span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="head_cn text-center">
                <i className="far fa-credit-card mt-2 mb-3"></i>
              </div>
              <div className="content_cn text-center">
                <p className="text-center">Chi phí</p>
                <span>
                  Thông tin những khoản chi phí phát sinh mà bạn cần dự phòng
                  cho chuyến đi của mình.
                </span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="head_cn text-center">
                <i className="fas fa-car mt-2 mb-3"></i>
              </div>
              <div className="content_cn text-center">
                <p className="text-center">Phương tiện di chuyển</p>
                <span>
                  Thông tin các phương tiện bạn có thể sử dụng để thăm các địa
                  điểm đẹp trong chuyến đi.
                </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Camnangdulich);
