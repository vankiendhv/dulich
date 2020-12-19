import React from "react";
import { useSelector } from "react-redux";
import { Link as Linkrt } from "react-router-dom";
import robot from "../../../images/robot.jpg";
import "./tintuc.css";
function Tintuc(props) {
  const tintucs = useSelector(state => state.tintucs.tintuc.data);
  const tintuc1 = [];
  const tintuc2 = [];
  const tintuc3 = [];
  if (tintucs) {
    for (let i = 0; i < tintucs.length; i++) {
      if (tintucs[i].status === 1) {
        if (tintuc1.length < 2) {
          tintuc1.push(tintucs[i])
        } else {
          if (tintuc2.length < 2) {
            tintuc2.push(tintucs[i])
          } else {
            if (tintuc3.length < 4) {
              tintuc3.push(tintucs[i])
            }
          }
        }
      }
    }
  }
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
          {tintuc1.map(ok => (
            <div className="col-sm-6 mb-3">
              <Linkrt to={`/detail-new/${ok.id}`}>
                <div className="news-box">
                  <img src={ok.anh} width="540px" height="303px" alt="" />
                  <div className="heading mt-2">
                    <strong>{ok.name}</strong>
                  </div>
                  <div className="content-news">
                    <p>
                      {ok.tomtat}
                    </p>
                  </div>
                </div>
              </Linkrt>
            </div>

          ))}
        </div>
        <div className="row">
          {tintuc2.map(ok => (
            <div className="col-md-4 col-sm-6 mb-3">
              <Linkrt to={`/detail-new/${ok.id}`}>
                <div className="news-box">
                  <img src={ok.anh} width="350px" height="196px" className="img-fluid" alt="" />
                  <div className="heading mt-2">
                    <strong>{ok.name}</strong>
                  </div>
                  <div className="content-news">
                    <p>
                      {ok.tomtat}
                    </p>
                  </div>
                </div>
              </Linkrt>
            </div>
          ))}
          <div className="col-md-4">
            <div className="row ">
              {tintuc3.map(ok => (
                <div className="col-md-12">
                  <Linkrt to={`/detail-new/${ok.id}`}>
                    <div className="news-box">
                      <img src={ok.anh} className="float-left" alt="" />
                      <div className=" heading mt-2">
                        <strong style={{ fontSize: ".9rem" }}>{ok.name}</strong>
                      </div>
                    </div>
                  </Linkrt>
                </div>

              ))}
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