import { Rate } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Tour.css";
function Tourtrongnuoc(props) {
  const tours = useSelector(state => state.tours.tour.data);
  const tour = [];
  if (tours) {
    var sort = []
    for (let i = 0; i < tours.length; i++) {
      sort.unshift(tours[i])
    }
    for (let i = 0; i < sort.length; i++) {
      if (sort[i].status === 1 && sort[i].vitri === 1 && tour.length < 6) {
        tour.push(sort[i])
      }
    }
  }
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
          {tour.map(ok => (
            <div className="col-md-4 mb-2">
              <Link to={`/tour/${ok.id}`}>
                <div className="img rounded">
                  <img src={ok.avatar} className="img-fluid" alt="" />
                </div>
                <div className="content_tour">
                  <div className="title_tour">{ok.name}</div>
                  <div className="star float-left">
                    <Rate value="4" disabled />
                  </div>
                  <div className="money float-left ml-3 text-warning">
                    {ok.gianguoilon} VNĐ<br />
                    <del> 4.000.000 VNĐ</del>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="xem-them mt-3">
        <Link to="/list-tour">Xem Thêm &gt;&gt;</Link>
      </div>
    </div>

  )
}

Tourtrongnuoc.propTypes = {

}

export default Tourtrongnuoc