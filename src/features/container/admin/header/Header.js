
import { Avatar, Button } from '@material-ui/core'
import { Drawer } from 'antd'
import React, { useState } from 'react'
import avatarjpg from './avatara.jpg'
import './header.css'
function Header(props) {
    const [state, setState] = useState({
        collapsed: false,
        visible: false
    });

    const showDrawer = () => {
        console.log("ok");
        setState({
            ...state,
            visible: true
        })
    };

    const onClose = () => {
        setState({
            ...state,
            visible: false
        })
    };
    return (
        <div id="header" >
            <ul className="navbar-nav float-right" onClick={showDrawer}>
                <li className="nav-item mr-3 mt-2" >Nguyễn Thị Lài</li>
                <li className="nav-item ">
                    <Avatar alt="Remy Sharp" src={avatarjpg} name="as" className="pick" />
                </li>
            </ul>
            <Drawer
                title="Thông tin admin"
                placement="right"
                onClose={onClose}
                visible={state.visible}
            >
                <div>
                    <div className="center"><img src={avatarjpg} className="avatar-admin" alt="" /></div>
                    <h4>Cá nhân</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="mb-2"><span>Họ tên:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Nguyễn Thị Lài</span></p>
                            <p className="mb-2"><span>Công ty:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Du lịch Nghệ An</span></p>
                            <p className="mb-2"><span>Ngày sinh:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">20/10/2020</span></p>
                        </div>
                        <div className="col-md-6">
                            <p className="mb-2"><span>Account:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Laist@gmail.com</span></p>
                            <p className="mb-2"><span>Địa chỉ:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Thành phố vinh</span></p>
                            <p className="mb-2"><span>Website:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Laisatthu.com.vn</span></p>
                        </div>
                        <p className="tab"><span>Châm ngôn:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Có làm thì mới có ăn</span></p>
                    </div>
                </div>
                <hr />
                <h4>Công ty</h4>
                <div className="row">
                    <div className="col-md-6">
                        <p className="mb-2"><span>Chức vụ:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Admin</span></p>
                        <p className="mb-2"><span>Bộ phận:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Kiểm duyệt</span></p>
                    </div>
                    <div className="col-md-6">
                        <p className="mb-2"><span>Trách nhiệm:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Kiểm duyệt</span></p>
                        <p className="mb-2"><span>Giám sát:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Trần Sang</span></p>
                    </div>
                    <p className="tab"><span>Kỹ năng:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user text-justify">C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc.</span></p>
                </div>
                <hr />
                <h4>Liên hệ</h4>
                <div className="row">
                    <div className="col-md-6">
                        <p className="mb-2"><span>Email:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Admin</span></p>
                        <p className="mb-2"><span>Github:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Kiểm duyệt</span></p>
                    </div>
                    <div className="col-md-6">
                        <p className="mb-2"><span>Phone Number:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Kiểm duyệt</span></p>
                        <p className="mb-2"><span>Facebook:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Trần Sang</span></p>
                    </div>
                </div>
                <Button variant="contained" color="secondary" className="float-right mt-2">Đăng xuất</Button>
            </Drawer>
        </div >

    )
}

Header.propTypes = {

}

export default Header