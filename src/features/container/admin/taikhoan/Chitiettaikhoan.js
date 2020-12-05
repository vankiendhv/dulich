import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import "./taikhoan.css"
function Chitiettaikhoan(props) {
    const { id } = useParams();
    const user = useSelector(state => state.taikhoan.user.data.find(x => x.id === +id));
    return (
        <div id="admin">
            <div className="heading">
                <h4>Chi tiết tài khoản</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <div className="ct">
                    <div className="text-center"><img src={user.avatar} className="avatar-ct" alt="" /></div>
                    <p>Tên người dùng:&emsp; <b><i>{user.name}</i></b></p>
                    <p>Email:&emsp; <b><i>{user.email}</i></b></p>
                    <p>Số điện thoại:&emsp; <b><i></i>{user.sdt}</b></p>
                    <p>Giới tính:&emsp; <b><i>{user.gioitinh === 1 ? "Nam" : "Nữ"}</i></b></p>
                    <p>Ngày sinh:&emsp; <b><i>{user.ngaysinh}</i></b></p>
                    <p>Địa chỉ:&emsp; <b><i>{user.diachi}</i></b></p>
                    <p>Website:&emsp; <b><i>Lai.com.vn</i></b></p>
                    <p>Châm ngôn:</p>
                    <div className="container">
                        <p>Có làm thì mới có ăn</p>
                    </div>
                    <p>Chức vụ:&emsp; <b><i>Kiểm duyệt</i></b></p>
                    <p>Bộ phận:&emsp; <b><i>Kiểm duyệt</i></b></p>
                    <p>Github:&emsp; <b><i>Kiểm duyệt</i></b></p>
                    <p>Facebook:&emsp; <b><i>Kiểm duyệt</i></b></p>
                    <p>Kỹ năng:</p>
                    <div className="container">
                        <p>C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

Chitiettaikhoan.propTypes = {

}

export default Chitiettaikhoan