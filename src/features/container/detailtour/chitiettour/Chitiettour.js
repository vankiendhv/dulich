import React, { Component } from 'react'
import { connect } from 'react-redux'
import './chitiettour.css'
export class Chitiettour extends Component {
    render() {
        return (
            <div id="ct-tour">
                <div className="heading-nx">
                    <h3>Chi tiết</h3>
                </div>
                <div className="container">
                    <div className="content-tour">
                        <p>
                            <b>ĐIỂM NHẤN CỦA TOUR:</b> <br />
                        • Trải nghiệm dịch vụ nghỉ dưỡng 5* trên du thuyền đẳng cấp quốc tế <br />
                        • Thêm nhiều trải nghiệm với các hoạt động giải trí trên vịnh: cooking class, Taichi, Câu mực đêm, Chèo thuyền Kayak,… <br />
                        • Thưởng ngoạn phong cảnh hung vĩ như hòn Con Vịt, hòn Ngón tay, Hang Sáng Tối,… <br />
                        • Đắm chìm giữa cảnh sắc thiên nhiên của Vịnh Lan Hạ <br />
                        • Thoải thích chơi golf , thả mình thư giãn trong bể bơi bốn mùa trên tàu
                        </p>
                        <div className="lichtrinh">
                            <div className="time">
                                <p><b>Ngày 01 :</b></p>
                            </div>
                            <div className="diadiem">
                                <p className="text-center text-danger font-weight-bold  ">HÀ NỘI –TUẦN CHÂU – BƠI TẠI KHU AO ẾCH ( Ăn trưa, tối )</p>
                            </div>
                            <div className="noidung">
                                <p>08:00 Xe của tàu đón khách tại Hà Nội đi đảo Tuần Châu – Hạ Long.
                                11.00 Tàu cao tốc đưa Quý khách từ Tuần Châu đến khu vực bến Gia Luận. Quý khách được trải nghiệm vẻ đẹp kỳ quan thiên nhiên của Vịnh Hạ Long và Lan Hạ.
                                11.45 – 12:00 Quý khách lên tàu thưởng thức đồ uống chào mời. Quản lý tàu cùng Hướng dẫn viên sẽ giới thiệu về lịch trình chi tiết cùng các hướng dẫn an toàn trên tàu. Sau đó quý khách nhận phòng, nghỉ ngơi và chuẩn bị ăn trưa
                                12:00 – 12:30 Quý khách ăn trưa với những món hải sản thơm ngon hấp dẫn được chế biến và trang trí đẹp mắt bởi đầu bếp tiêu chuẩn 5 sao. Quý khách vừa ăn trưa vừa thưởng ngọan phong cảnh hùng vĩ khi qua những hòn đảo lớn nhỏ như hòn con Vịt, hòn Ngón Tay,…
                                Sau bữa trưa, Quý khách nghỉ ngơi, hít thở không khí trong lành. Tàu đưa Quý khách tới khu vực Ao Ếch, Quý khách có thể lựa chọn tự do bơi lội hoặc tự mình chèo thuyền kayak để cảm nhận vẻ đẹp Vịnh Lan Hạ theo một cách rất riêng.
                                Tàu đưa Quý khách tới điểm ngủ đêm. Trên đường, Quý khách vừa ngắm cảnh hoàng hôn trên vịnh vừa tham gia bữa tiệc rượu và hoa quả cùng giao lưu, làm quen với những người bạn mới hoặc thư giãn boong tàu

                                Quý khách tự do nghỉ ngơi, chơi golf hay bơi tại bể bơi bốn mùa trên tàu.

                                19:00 Quý khách thưởng thức bữa tối BBQ trong khung cảnh lãng mạn xung quanh bể bơi bốn mùa.
                                Sau bữa tối, quý khách tự do nghỉ ngơi, tham gia các trò chơi, câu cá, câu mực, thưởng thức đồ uống tại quầy bar ngoài trời, cảm nhận vẻ đẹp vịnh Lan Hạ về đêm hay order và lựa chọn cho mình dịch vụ spa massage (Chi phí tự túc) với đội ngũ nhân viên chuyên nghiệp giàu kinh nghiệm.
Quý khách ngủ đêm trên tàu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Chitiettour)
