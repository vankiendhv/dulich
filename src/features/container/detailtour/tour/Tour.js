import { Carousel, DatePicker, message, Rate, Select, Space, Spin } from 'antd'
import React, { Component } from 'react'
import { connect, useSelector } from 'react-redux'
import anh from '../../../images/cauvang.png'
import './tour.css'
import { Button } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import Detail from '../detail/Detail';
import Footer from '../../trangchu/footer/Footer'
import Modal from 'antd/lib/modal/Modal';
import Hinhthucthanhtoan from './Hinhthucthanhtoan'
import Dieukhoan from './Dieukhoan'
function Tour(props) {
  const { id } = useParams()
  const tours = useSelector(state => state.tours.tour.data);
  const tour = tours.find(x => x.id === +id)
  if(tour){
    console.log("ko")
  }else{
    console.log("ok")
  }
  console.log(tour);
  const [state, setState] = [{
    visible: false,
    visible2: false,
    hoten: "",
    email: "",
    sdt: "",
    diachi: "",
    nguoilon: 1,
    treem: 0,
    embe: 0,
    dieukhoan: false
  }]
  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const handleOk = e => {
    // if (hoten === "" || sdt === "" || diachi === "" || email === "") {
    //   message.warning('Bạn cần nhập đầy đủ thông tin!');
    // } else {
    setState({
      ...state,
      visible2: true,
    });
    // }
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
      setState({
        ...state,
        visible2: false,
        visible: false
      });
    }
  };

  const handleCancel2 = e => {
    console.log(e);
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
    setState({
      ...state,
      dieukhoan: e.target.checked
    })
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  const onChangedate = (date, dateString) => {
    console.log(date, dateString);
  }
  const { hoten, sdt, diachi, email, nguoilon, treem, embe } = state
  var tong = Number(nguoilon) + Number(treem) + Number(embe);
  const { Option } = Select
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
      {tour === undefined ? <div className="spin"><Spin className="mt-5" /></div> :''
      //  tour.map(ok => (
      //   <div className="box-tour">
      //     <div className="container bg-white">
      //       <div className="row justify-content-center" >
      //         <div className="col-lg-8">
      //           <Carousel autoplay>
      //             {ok.Anhs.map(oki => (
      //               <div>
      //                 <img src={oki.link} className="w-100 h-100" alt="" />
      //               </div>
      //             ))}
      //           </Carousel>
      //         </div>
      //         <div className="col-lg-4 position-relative ">
      //           <div className=" pl-3">
      //             <div className="star float-left">
      //               <Rate value="4" disabled />
      //             </div>
      //             <div className="icon-comment">
      //               <span><strong>4/5</strong> điểm với <strong>200</strong> đánh giá</span>
      //             </div>
      //             <div className="view">
      //               <span className="mr-3"><i className="far fa-thumbs-up mr-1"></i> 200</span>
      //               <span><i className="far fa-comment-dots mr-1"></i> 50</span>
      //             </div>

      //             <hr className="hr-tour" />
      //             <div className="tt-tour">
      //               <table className="w-100">
      //                 <tr>
      //                   <td><span>Khởi hành:</span></td>
      //                   <td><span>13/02/2020</span></td>
      //                   <td><Link>Đổi ngày</Link></td>
      //                 </tr>
      //                 <tr>
      //                   <td><span>Thời gian:</span></td>
      //                   <td><span>3 ngày</span></td>
      //                 </tr>
      //                 <tr>
      //                   <td><span>Nơi khởi hành:</span></td>
      //                   <td><span>Hà Nội</span></td>
      //                 </tr>
      //               </table>
      //             </div>
      //             <Button className="float-right position-absolute btn-dt" onClick={showModal} variant="contained" color="secondary">
      //               <Link >Đặt tour</Link>
      //             </Button>
      //             <div className="price position-absolute">
      //               <span><strong className="text-danger">{ok.gianguoilon}</strong> vnd</span>
      //               <br />
      //               <span>Số chỗ còn lại: 10</span>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <Detail />
      //     </div>
      //   </div>

      // ))
       }
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
            className="form-control" name="hoten" value={hoten} onChange={onchange} aria-describedby="helpId" placeholder="" />
        </div>
        <div className="form-group">
          <label htmlFor="">Email(*)</label>
          <input type="email"
            className="form-control" name="email" value={email} onChange={onchange} aria-describedby="helpId" placeholder="" />
        </div>
        <div className="form-group">
          <label htmlFor="">Số điện thoại(*)</label>
          <input type="text"
            className="form-control" name="sdt" value={sdt} onChange={onchange} aria-describedby="helpId" placeholder="" />
        </div>
        <div className="form-group">
          <label htmlFor="">Địa chỉ</label>
          <input type="text"
            className="form-control" name="diachi" value={diachi} onChange={onchange} aria-describedby="helpId" placeholder="" />
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
        <p>Số tiền cần phải trả: <strong className="text-danger">5,000,000</strong></p>
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
        <input type="checkbox" onChange={onchange} className="mt-3" name="agree" id="dk" />
        <label htmlhtmlFor="dk" className="ml-3"><strong>Tôi đồng ý với điều khoản ở trên</strong></label>
      </Modal>
    </div>

  )
}

Tour.propTypes = {

}

export default Tour