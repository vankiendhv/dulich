import React from "react";
import { Link as Linkrt } from "react-router-dom";
import robot from "../../../images/robot.jpg";
import "./tintuc.css";
function Tintuc(props) {
  const style = () => {
    return {
      color: "black",
      textShadow: "none",
    };
  };
  return (
    <div id="news">
      <div className="heading text-center">
        <span>Tin tức du lịch</span>
        <div className="hr"></div>
        <p className="mb-4">
          Cập nhật các tin tức mới nhất về các tour du lịch trong nước và
          ngoài nước một cách nhanh chóng.
      </p>
      </div>
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-6 mb-3">
            <Linkrt to='/detail-new'>
              <div className="news-box">
                <img src={robot} className="img-fluid" alt="" />
                <div className="heading mt-2">
                  <strong>20 Năm Huyền Thoại X-Men</strong>
                </div>
                <div className="content-news">
                  <p>
                    14.07.2020 là kỷ niệm 20 năm ngày loạt phim kinh điển
                    X-Men công chiếu.
                </p>
                </div>
              </div>
            </Linkrt>
          </div>
          <div className="col-sm-6">
            <a href="">
              <div className="news-box">
                <img src={robot} className="img-fluid" alt="" />
                <div className="heading mt-2">
                  <strong>20 Năm Huyền Thoại X-Men</strong>
                </div>
                <div className="content-news">
                  <p>
                    14.07.2020 là kỷ niệm 20 năm ngày loạt phim kinh điển
                    X-Men công chiếu.
                </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-3">
            <a href="">
              <div className="news-box">
                <img src={robot} className="img-fluid" alt="" />
                <div className="heading mt-2">
                  <strong>20 Năm Huyền Thoại X-Men</strong>
                </div>
                <div className="content-news">
                  <p>
                    14.07.2020 là kỷ niệm 20 năm ngày loạt phim kinh điển
                    X-Men công chiếu.
                </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6 mb-3">
            <a href="">
              <div className="news-box">
                <img src={robot} className="img-fluid" alt="" />
                <div className="heading mt-2">
                  <strong>20 Năm Huyền Thoại X-Men</strong>
                </div>
                <div className="content-news">
                  <p>
                    14.07.2020 là kỷ niệm 20 năm ngày loạt phim kinh điển
                    X-Men công chiếu.
                </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <div className="row ">
              <div className="col-md-12">
                <a href="">
                  <div className="news-box">
                    <img src={robot} className="float-left w-25" alt="" />
                    <div className="heading mt-2">
                      <strong>20 Năm Huyền Thoại X-Men</strong>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-12">
                <a href="">
                  <div className="news-box">
                    <img src={robot} className="float-left w-25" alt="" />
                    <div className="heading mt-2">
                      <strong>20 Năm Huyền Thoại X-Men</strong>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-12">
                <a href="">
                  <div className="news-box">
                    <img
                      src={robot}
                      width=""
                      className="float-left w-25"
                      alt=""
                    />
                    <div className="heading mt-2">
                      <strong>20 Năm Huyền Thoại X-Men</strong>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-12">
                <a href="">
                  <div className="news-box">
                    <img
                      src={robot}
                      width=""
                      className="float-left w-25"
                      alt=""
                    />
                    <div className="heading mt-2">
                      <strong>20 Năm Huyền Thoại X-Men</strong>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xem-them">
        <Linkrt to="/listtintuc">Xem Thêm &gt;&gt;</Linkrt>
      </div>
    </div>

  )
}

Tintuc.propTypes = {

}

export default Tintuc