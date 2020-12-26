import { Rate } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Tournuocngoai(props) {
  const tours = useSelector(state => state.tours.tour.data);
  const tour = [];
  if (tours) {
    var sort = []
    for (let i = 0; i < tours.length; i++) {
      sort.unshift(tours[i])
    }
    for (let i = 0; i < sort.length; i++) {
      if (sort[i].status === 1 && sort[i].vitri === 2 && tour.length < 6) {
        tour.push(sort[i])
      }
    }
  }
  const binhluans = useSelector(state => state.binhluans.binhluan.data);

  const tinhdiem = (id) => {
    var binhluanload = []
    if (binhluans) {
      for (let i = 0; i < binhluans.length; i++) {
        if (binhluans[i].status === +1 && binhluans[i].tourId === id) {
          binhluanload.push(binhluans[i]);
        }
      }
    }
    var tong = new Number()
    if (binhluans) {
      for (let i = 0; i < binhluanload.length; i++) {
        tong += binhluanload[i].star
      }
    }
    var diem = Math.round((tong / +binhluanload.length) * 10) / 10
    if (isNaN(diem)) {
      diem = 0
    }
    return diem
  }
  return (
    <div className="mt-5 mb-5 tour" id="tour">

      <div className="heading text-center">
        <span>du lịch nước ngoài</span>
        <div className="hr"></div>
        <p className="mb-4">
          Du lịch nước ngoài đem lại cho mọi người sự mới mẻ về một đất nước khác và hiểu rõ về các quốc gia hơn.
      </p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {tour.map(ok => (
            <div className="col-md-4 mb-2" key={ok.id}>
              <Link to={`/tour/${ok.id}`}>
                <div className="img rounded">
                  <img src={ok.avatar} className="img-fluid" alt="" />
                </div>
                <div className="content_tour">
                  <div className="title_tour">{ok.name}</div>
                  <div className="star float-left">
                    <Rate value={tinhdiem(ok.id)} disabled />
                  </div>
                  <div className="money float-left ml-3 text-warning">
                    {(ok.gianguoilon).toLocaleString()} VNĐ<br />
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

Tournuocngoai.propTypes = {

}

export default Tournuocngoai