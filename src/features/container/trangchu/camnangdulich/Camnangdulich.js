import React, { Component } from "react";
import { useSelector } from "react-redux";
import "./camnang.css";

function Camnangdulich(props) {
  const camnangs = useSelector(state => state.camnangdulichs.camnangdulich.data);
  var camnang = [];
  if (camnangs) {
    for (let i = 0; i < camnangs.length; i++) {
      if (camnangs[i].status === 1) {
        camnang.push(camnangs[i])
      }
    }
  }
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
          {!camnang ? '' :
            camnang.map(ok => (
              <div className="col-md-3" key={ok.id}>
                <div className="head_cn">
                  <i className={ok.icon}></i>
                </div>
                <div className="content_cn text-center">
                  <p className="text-center">{ok.name}</p>
                  <span>
                    {ok.content}
                  </span>
                </div>
              </div>

            ))
          }
          {/* <div className="col-md-3">
          <div className="head_cn text-center">
            <i className="fas fa-map-marker-alt "></i>
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
            <i className="far fa-credit-card "></i>
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
            <i className="fas fa-car "></i>
          </div>
          <div className="content_cn text-center">
            <p className="text-center">Phương tiện di chuyển</p>
            <span>
              Thông tin các phương tiện bạn có thể sử dụng để thăm các địa
              điểm đẹp trong chuyến đi.
            </span>
          </div>
        </div> */}
        </div>
      </div>
    </div>

  )
}

Camnangdulich.propTypes = {

}

export default Camnangdulich