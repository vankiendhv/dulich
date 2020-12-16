import { Avatar } from "antd";
import React from "react";
import "./ykien.css";

function ykienkhachhang(props) {
  return (
    <div className="mt-5 tour" id="ykien">
      <div className="heading text-center pt-5">
        <span>ý kiến khách hàng</span>
        <div className="hr"></div>
        <p className="mb-4">
          Những đánh giá của khách hàng sau khi trải nghiệm đặt tour trên
          website.
      </p>
      </div>
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-4 ">
            <div className="content-yk text-center rounded">
              <p>
                <i className="fa fa-quote-left mr-3"></i>
              Lorem Ipsum has been the industry's standard since the 1500s.
              Praesent ullamcorper dui turpis.Nulla non laoreet eleifend.
              <i className="fa fa-quote-right ml-3"></i>
              </p>
            </div>
            <div className="avatar-yk text-center">
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                className="mt-3 mb-2"
              />
              <br />
              <strong>Nguyễn Thị Đào</strong>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="content-yk text-center rounded">
              <p>
                <i className="fa fa-quote-left mr-3"></i>
              Lorem Ipsum has been the industry's standard since the 1500s.
              Praesent ullamcorper dui turpis.Nulla non laoreet eleifend.
              <i className="fa fa-quote-right ml-3"></i>
              </p>
            </div>
            <div className="avatar-yk text-center">
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                className="mt-3 mb-2"
              />
              <br />
              <strong>Nguyễn Thị Đào</strong>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="content-yk text-center rounded">
              <p>
                <i className="fa fa-quote-left mr-3"></i>
              Lorem Ipsum has been the industry's standard since the 1500s.
              Praesent ullamcorper dui turpis.Nulla non laoreet eleifend.
              <i className="fa fa-quote-right ml-3"></i>
              </p>
            </div>
            <div className="avatar-yk text-center">
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                className="mt-3 mb-2"
              />
              <br />
              <strong>Nguyễn Thị Đào</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

ykienkhachhang.propTypes = {

}

export default ykienkhachhang