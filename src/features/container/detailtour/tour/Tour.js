import { Carousel, message, Rate } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './tour.css'
import { Button } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import Detail from '../detail/Detail';
import Footer from '../../trangchu/footer/Footer'
import Modal from 'antd/lib/modal/Modal';
import Hinhthucthanhtoan from './Hinhthucthanhtoan'
import Dieukhoan from './Dieukhoan'
import { binhluanData } from '../../admin/Binhluan/binhluanSlice';
import { addhoadon } from '../../admin/Hoadon/hoadonSlice';
function Tour(props) {
  localStorage.setItem("menu", "nothome");
  const { id } = useParams()

  const binhluans = useSelector(state => state.binhluans.binhluan.data);
  var binhluanload = []
  if (binhluans) {
    for (let i = 0; i < binhluans.length; i++) {
      if (binhluans[i].tourId === +id && binhluans[i].status === +1) {
        binhluanload.push(binhluans[i]);
      }
    }
  }
  const users = useSelector(state => state.taikhoan.user.data);

  // useEffect(() => {
  //   if (users) {
  //     console.log("ok");
  //     if (emailLocal) {
  //       console.log(users.find(x => x.email === emailLocal));
  //     }
  //   }
  // }, [])
  const tinhdiem = () => {
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

  const dispatch = useDispatch();
  const actionbinhluan = async () => { await dispatch(binhluanData()) }
  useEffect(() => {
    actionbinhluan();
  }, [])
  const tours = useSelector(state => state.tours.tour.data);
  const tour = [];
  if (tours) {
    for (let i = 0; i < tours.length; i++) {
      if (tours[i].id === +id) {
        tour.push(tours[i])
      }
    }
  }

  const [state, setState] = useState({
    visible: false,
    visible2: false,
    name: "",
    email: "",
    sdt: "",
    diachi: "",
    nguoilon: 1,
    treem: 0,
    embe: 0,
    dieukhoan: false
  })
  const showModal = () => {
    if (localStorage.getItem("user")) {
      var user = users.find(x => x.email === localStorage.getItem("user"));
      setState({
        ...state,
        visible: true,
        name: user.name,
        diachi: user.diachi,
        sdt: user.sdt,
        email: user.email
      });
    } else {
      message.warning("Bạn cần đăng nhập trước!")
    }
  };

  const handleOk = e => {
    if (name === "" || sdt === "" || diachi === "" || email === "" || !name || !sdt || !diachi || !email) {
      message.warning('Bạn cần cập nhật thông tin cho tài khoản!');
    } else {
      var songuoi = tour[0].songuoi;
      if (songuoiconlai(songuoi) === 0) {
        message.warning("Đã hết chỗ quý khách vui lòng chọn thời gian khác!")
      } else {
        if (tong > songuoiconlai(songuoi)) {
          message.warning("Vượt quá số người cho phép!")
        } else {
          setState({
            ...state,
            visible2: true,
          });
        }
      }
    }
  };

  const handleCancel = e => {
    setState({
      ...state,
      visible: false,
    });
  };
  const handleOk2 = e => {
    if (state.dieukhoan === false) {
      message.warning("Bạn chưa đồng ý điều khoản của chúng tôi!")
    } else {
      var userId = users.find(x => x.email === localStorage.getItem("user")).id;
      var tourId = id
      console.log(userId, +tourId);
      dispatch(addhoadon({ tourId, userId, nguoilon, treem, embe }));
      setState({
        ...state,
        visible2: false,
        visible: false
      });
    }
  };

  const handleCancel2 = e => {
    setState({
      ...state,
      visible2: false,
    });
  };
  const onchange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const hoadons = useSelector(state => state.hoadons.hoadon.data);
  const songuoiconlai = (e) => {
    var tonghd = new Number();
    if (hoadons) {
      for (let i = 0; i < hoadons.length; i++) {
        if (hoadons[i].tourId === +id) {
          tonghd += (hoadons[i].nguoilon + hoadons[i].treem + hoadons[i].embe)
        }
      }
    }
    return (e - tonghd);
  }
  const thanhtien = (gia_nl, gia_te, gia_eb) => {
    return ((gia_nl * nguoilon) + (gia_te * treem) + (gia_eb * embe)).toLocaleString();
  }
  const { name, sdt, diachi, email, nguoilon, treem, embe } = state
  var tong = Number(nguoilon) + Number(treem) + Number(embe);
  return (
    <div id="detail-tour">
      <div className="breadcrumb">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/"><i className="fas fa-home mr-2"></i>Trang chủ</Link></li>
            <li className="breadcrumb-item"><Link to="/list-tour">Tour du lịch</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Tên tour</li>
          </ol>
        </nav>
      </div>
      { tour.map(ok => (
        <div className="box-tour" key={ok.id}>
          <div className="container bg-white">
            <div className="row justify-content-center" >
              <div className="col-lg-8">
                <Carousel autoplay>
                  {ok.Anhs.map(oki => (
                    <div>
                      <img src={oki.link} width="760px" height="430px" alt="" />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="col-lg-4 position-relative ">
                <div className=" pl-3">
                  <div className="star float-left">
                    <Rate value={tinhdiem()} disabled />
                  </div>
                  <div className="icon-comment">
                    <span><strong>{tinhdiem()}/5</strong> điểm với <strong>{binhluanload.length}</strong> đánh giá</span>
                  </div>
                  <div className="view">
                    <span className="mr-3"><i className="far fa-thumbs-up mr-1"></i> 200</span>
                    <span><i className="far fa-comment-dots mr-1"></i> {binhluanload.length}</span>
                  </div>

                  <hr className="hr-tour" />
                  <div className="tt-tour">
                    <table className="w-100">
                      <tr>
                        <td><span>Khởi hành:</span></td>
                        <td><span>13/02/2020</span></td>
                        <td><Link>Đổi ngày</Link></td>
                      </tr>
                      <tr>
                        <td><span>Thời gian:</span></td>
                        <td><span>{ok.thoigian} ngày</span></td>
                      </tr>
                      <tr>
                        <td><span>Nơi khởi hành:</span></td>
                        <td><span>Hà Nội</span></td>
                      </tr>
                    </table>
                  </div>
                  <Button className="float-right position-absolute btn-dt" onClick={showModal} variant="contained" color="secondary">
                    <Link >Đặt tour</Link>
                  </Button>
                  <div className="price position-absolute">
                    <span><strong className="text-danger">{(ok.gianguoilon).toLocaleString()}</strong> vnd</span>
                    <br />
                    <span>Số chỗ còn lại: {songuoiconlai(ok.songuoi)}</span>
                  </div>
                </div>
              </div>
            </div>
            <Detail id={id} />
          </div>
        </div>

      ))}
      <Footer />
      <Modal
        title="Đặt tour"
        visible={state.visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h4 className="text-center text-primary">Thông tin liên lạc</h4>
        <div className="form-group">
          <label htmlFor="">Họ tên(*)</label>
          <input type="text"
            className="form-control" name="name" disabled value={name} onChange={onchange} aria-describedby="helpId" placeholder="" />
        </div>
        <div className="form-group">
          <label htmlFor="">Email(*)</label>
          <input type="email"
            className="form-control" name="email" disabled value={email} onChange={onchange} aria-describedby="helpId" placeholder="" />
        </div>
        <div className="form-group">
          <label htmlFor="">Số điện thoại(*)</label>
          <input type="text"
            className="form-control" name="sdt" disabled value={sdt} onChange={onchange} aria-describedby="helpId" placeholder="" />
        </div>
        <div className="form-group">
          <label htmlFor="">Địa chỉ</label>
          <input type="text"
            className="form-control" name="diachi" disabled value={diachi} onChange={onchange} aria-describedby="helpId" placeholder="" />
        </div>
        <h4 className="text-center text-primary">Số người</h4>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="">Người lớn</label>
              <input type="number"
                className="form-control" name="nguoilon" min="1" value={nguoilon} onChange={onchange} aria-describedby="helpId" placeholder="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="">Trẻ em</label>
              <input type="number"
                className="form-control" name="treem" min="0" value={treem} onChange={onchange} aria-describedby="helpId" placeholder="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="">Em bé</label>
              <input type="number"
                className="form-control" value={embe} name="embe" min="0" onChange={onchange} aria-describedby="helpId" placeholder="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="">Tổng</label>
              <input type="number" disabled
                className="form-control" name="tong" value={tong} aria-describedby="helpId" placeholder="" />
            </div>
          </div>
        </div>
        <h4 className="text-center text-primary">Thành tiền</h4>
        {tour.map(ok => (
          <p key={ok.id}>Số tiền cần phải trả: <strong className="text-danger">{thanhtien(ok.gianguoilon, ok.giatreem, ok.giaembe)}</strong></p>
        ))}
      </Modal>
      <Modal
        title="Đặt tour"
        visible={state.visible2}
        onOk={handleOk2}
        onCancel={handleCancel2}
      >
        <h4 className="text-center text-primary">Hình thức thanh toán</h4>
        <Hinhthucthanhtoan />
        <h4 className="text-center text-primary">Điều khoản</h4>
        <div className="dieukhoan">
          <Dieukhoan />
        </div>
        <input type="checkbox" onChange={onchange} className="mt-3" name="dieukhoan" id="dk" />
        <label htmlFor="dk" className="ml-3"><strong>Tôi đồng ý với điều khoản ở trên</strong></label>
      </Modal>
    </div>

  )
}

Tour.propTypes = {

}

export default Tour