
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Avatar, Button } from '@material-ui/core'
import { Drawer, Popconfirm } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './header.css'
import { userroleData } from './userroleSlice'
function Header(props) {
    const [state, setState] = useState({
        collapsed: false,
        visible: false
    });

    const showDrawer = () => {
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
    const userroles = useSelector(state => state.userroles.userrole.data);
    const dispatch = useDispatch()
    const taikhoan = useSelector(state => state.taikhoan.user.data);
    const actionuserrole = async () => { await dispatch(userroleData()) }
    useEffect(() => {
        actionuserrole()
    }, [])
    var user = []
    if (taikhoan) {
        for (let i = 0; i < taikhoan.length; i++) {
            if (taikhoan[i].email === localStorage.getItem("user")) {
                user.push(taikhoan[i])
            }
        }
    }
    var userrole = [];
    if (userroles) {
        if (user.length === 1) {
            userrole.push(userroles.find(x => x.userId === +user[0].id))
        }
    }
    const history = useHistory()
    const logout = () => {
        localStorage.removeItem("user");
        history.push("/");
    }
    return (
        <div id="header" >
            {!user ? '' :
                user.map(ok => (
                    <ul className="navbar-nav float-right" onClick={showDrawer} key={ok.id}>
                        <li className="nav-item mr-3 mt-2" >{ok.name}</li>
                        <li className="nav-item ">
                            <Avatar alt="Remy Sharp" src={ok.avatar} name="as" className="pick" />
                        </li>
                    </ul>
                ))
            }
            {!user ? '' :
                user.map(ok => (
                    <Drawer
                        key={ok.id}
                        title="Thông tin admin"
                        placement="right"
                        onClose={onClose}
                        visible={state.visible}
                    >
                        <div>
                            <div className="center"><img src={ok.avatar} className="avatar-admin" alt="" /></div>
                            <h4>Cá nhân</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="mb-2"><span>Họ tên:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{ok.name}</span></p>
                                    <p className="mb-2"><span>Công ty:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Du lịch Nghệ An</span></p>
                                    <p className="mb-2"><span>Ngày sinh:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{ok.ngaysinh}</span></p>
                                </div>
                                <div className="col-md-6">
                                    <p className="mb-2"><span>Account:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{ok.email}</span></p>
                                    <p className="mb-2"><span>Địa chỉ:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{ok.diachi}</span></p>
                                    <p className="mb-2"><span>Website:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Laisatthu.com.vn</span></p>
                                </div>
                                <p className="tab"><span>Châm ngôn:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{!userrole ? "" : userrole[0].chamngon}</span></p>
                            </div>
                        </div>
                        <hr />
                        <h4>Công ty</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="mb-2"><span>Chức vụ:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Người quản lý</span></p>
                                <p className="mb-2"><span>Bộ phận:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{ok.Roles[0].name}</span></p>
                            </div>
                            <div className="col-md-6">
                                <p className="mb-2"><span>Trách nhiệm:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{ok.Roles[0].mota}</span></p>
                                <p className="mb-2"><span>Giám sát:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">Trần Sang</span></p>
                            </div>
                            <p className="tab"><span>Kỹ năng:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user text-justify">{!userrole ? "" : userrole[0].kynang}</span></p>
                        </div>
                        <hr />
                        <h4>Liên hệ</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="mb-2"><span>Email:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{ok.email}</span></p>
                                <p className="mb-2"><span>Github:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{!userrole ? "" : userrole[0].github}</span></p>
                            </div>
                            <div className="col-md-6">
                                <p className="mb-2"><span>Phone Number:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{ok.sdt}</span></p>
                                <p className="mb-2"><span>Facebook:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{!userrole ? "" : userrole[0].facebook}</span></p>
                            </div>
                        </div>
                        <Popconfirm title="Bạn có muốn đăng xuất không？" onConfirm={() => { logout() }} icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                            <Button variant="contained" color="secondary" className="float-right mt-2">Đăng xuất</Button>
                        </Popconfirm>

                    </Drawer>

                ))}
        </div >

    )
}

Header.propTypes = {

}

export default Header