import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Chitiettaikhoan extends Component {
    render() {
        return (
            <div id="admin">
                <div className="heading">
                    <h4>Chi tiết tài khoản</h4>
                    <div className="hr"></div>
                </div>
                <div className="content">
                    <div className="ct">
                        <p>Tên người dùng:&emsp; <b><i>Lài sát thủ</i></b></p>
                        <p>Email:&emsp; <b><i>Laist@gmail.com</i></b></p>
                        <p>Số điện thoại:&emsp; <b><i></i>0386927552</b></p>
                        <p>Giới tính:&emsp; <b><i>Nam thẳng</i></b></p>
                        <p>Ngày sinh:&emsp; <b><i>20/10/2020</i></b></p>
                        <p>Địa chỉ:&emsp; <b><i>Thành phố vinh,nghệ an</i></b></p>
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
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Chitiettaikhoan)
