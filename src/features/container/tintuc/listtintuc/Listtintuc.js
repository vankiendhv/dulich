import React, { Component } from "react";
import { connect } from "react-redux";
import { Breadcrumb } from "antd";
import { HomeOutlined, BoldOutlined } from "@ant-design/icons";
import "./listtintuc.css";
import img from "./../../../images/cauvang.png";
import { Link } from "react-router-dom";
export class Listtintuc extends Component {
  render() {
    return (
      <div id="listtintuc">
        <div className="breadcrumb">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/"><i className="fas fa-home mr-2"></i>Trang chủ</Link></li>
              <li className="breadcrumb-item"><Link to="/list-tour">Tour du lịch</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Tên tour</li>
            </ol>
          </nav>
        </div>
        <div className="title-new">
          <div className="hr-new "></div>
          <h3 className=" ">Tour trong nước </h3>
        </div>
        <div className="content-new">
          <div className="box-new ">
            <div className="w-new">

              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="img-new">
                    <img src={img} className="img-fluid" alt="" />
                  </div>
                  <div className="title-new mt-2">
                    <Link to="/detail-new" className="">6 bãi biển đẹp nhất Phú Quốc</Link>
                    <p className="text-justify">
                      Phú Quốc sở hữu những đường bờ biển dài bất tận, có thể kể
                      đến bãi Sao, bãi Dài, đồng thời vẫn còn rất nhiều bãi biển
                      hoang sơ khác đẹp tựa thiên đường mang đến cảm giác yên
                      bình, ...
                    </p>
                    <span>
                      <i className="far fa-clock"></i> 3/07/2020 17:09
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="img-new">
                        <img
                          src={img}
                          className="img-fluid w-25 float-left"
                          alt=""
                        />
                      </div>
                      <div className="title-new float-left w-75">
                        <Link className="">6 bãi biển đẹp nhất Phú Quốc</Link>
                        <p className="text-justify ">
                          Phú Quốc sở hữu những đường bờ biển dài bất tận, có
                          thể kể đến bãi Sao, bãi Dài, đồng thời vẫn còn rất
                          nhiều bãi biển hoang sơ khác đẹp tựa thiên đường mang
                          đến cảm giác yên bình, ...
                        </p>
                        <span>
                          <i className="far fa-clock"></i> 3/07/2020 17:09
                        </span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="img-new">
                        <img
                          src={img}
                          className="img-fluid w-25 float-left"
                          alt=""
                        />
                      </div>
                      <div className="title-new float-left w-75">
                        <Link className="">6 bãi biển đẹp nhất Phú Quốc</Link>
                        <p className="text-justify ">
                          Phú Quốc sở hữu những đường bờ biển dài bất tận, có
                          thể kể đến bãi Sao, bãi Dài, đồng thời vẫn còn rất
                          nhiều bãi biển hoang sơ khác đẹp tựa thiên đường mang
                          đến cảm giác yên bình, ...
                        </p>
                        <span>
                          <i className="far fa-clock"></i> 3/07/2020 17:09
                        </span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="img-new">
                        <img
                          src={img}
                          className="img-fluid w-25 float-left"
                          alt=""
                        />
                      </div>
                      <div className="title-new float-left w-75">
                        <Link className="">6 bãi biển đẹp nhất Phú Quốc</Link>
                        <p className="text-justify ">
                          Phú Quốc sở hữu những đường bờ biển dài bất tận, có
                          thể kể đến bãi Sao, bãi Dài, đồng thời vẫn còn rất
                          nhiều bãi biển hoang sơ khác đẹp tựa thiên đường mang
                          đến cảm giác yên bình, ...
                        </p>
                        <span>
                          <i className="far fa-clock"></i> 3/07/2020 17:09
                        </span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="img-new">
                        <img
                          src={img}
                          className="img-fluid w-25 float-left"
                          alt=""
                        />
                      </div>
                      <div className="title-new float-left w-75">
                        <Link className="">6 bãi biển đẹp nhất Phú Quốc</Link>
                        <p className="text-justify ">
                          Phú Quốc sở hữu những đường bờ biển dài bất tận, có
                          thể kể đến bãi Sao, bãi Dài, đồng thời vẫn còn rất
                          nhiều bãi biển hoang sơ khác đẹp tựa thiên đường mang
                          đến cảm giác yên bình, ...
                        </p>
                        <span>
                          <i className="far fa-clock"></i> 3/07/2020 17:09
                        </span>
                      </div>
                    </div>
                  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Listtintuc);
