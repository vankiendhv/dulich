import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './nav.css'
import Headers from './../header/Header'
import Doanhthu from './../Doanhthu/Doanhthu'
import Themtintuc from './../tintuc/Themtintuc'
import Tintuc from './../tintuc/Tintuc'
import Chitiettintuc from './../tintuc/Chitiettintuc'
import Themloaitour from './../Loaitour/Themloaitour'
import Loaitour from './../Loaitour/Loaitour'
import { Link, Route, Switch } from 'react-router-dom';
import Taikhoan from '../taikhoan/Taikhoan';
import Chitiettaikhoan from '../taikhoan/Chitiettaikhoan'
import Chitietquocgia from "../Quocgia/Chitietquocgia"
import Themquocgia from '../Quocgia/Themquocgia'
import Quocgia from '../Quocgia/Quocgia';
import Themdiadiem from '../DiaDiem/Themdiadiem';
import Mangxahoi from '../mxh/Mangxahoi';
import Themmangxahoi from '../mxh/Themmangxahoi';
import Diadiem from '../DiaDiem/Diadiem';
import Tour from "../Tour/Tour"
import Themtour from "../Tour/Themtour"
import Chitiettour from "../Tour/Chitiettour";
import Binhluan from "../Binhluan/Binhluan"
import Chitietbinhluan from '../Binhluan/Chitietbinhluan';
import Tag from "../Tag/Tag";
import Themtag from "../Tag/Themtag";
import Anh from "../Anh/Anh";
import Dichvu from "../Dichvu/Dichvu";
import Themdichvu from "../Dichvu/Themdichvu"
import Hoadon from "../Hoadon/Hoadon";
import Role from "../Role/Role";
import Themrole from '../Role/Themrole';
import Lienhe from "../Lienhe/Lienhe";
import Themlienhe from "../Lienhe/Themlienhe";
import Ngaydi from "..//Ngaydi/Ngaydi";
import Camnangdulich from "../Camnangdulich/Camnangdulich";
import Themcamnang from "../Camnangdulich/Themcamnang";
import { useSelector } from 'react-redux';

export default function Nav(props) {
    const { Header, Sider, Content } = Layout;
    const [state, setState] = useState({
        collapsed: true,
        visible: true
    })
    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };
    const user = useSelector(state => state.infor.infor.data);
    const quanlytintuc = (
        <div>
            <Route exact path={props.path}>
                <Doanhthu />
            </Route>
            <Route path={`${props.path}/tintuc`}  >
                <Tintuc url={props.url} />
            </Route>
            <Route path={`${props.path}/themtintuc`}  >
                <Themtintuc />
            </Route>
            <Route path={`${props.path}/suatintuc/:id`}  >
                <Themtintuc />
            </Route>
        </div>
    )
    const quanlybinhluan = (
        <div>
            <Route exact path={props.path}>
                <Doanhthu />
            </Route>
            <Route path={`${props.path}/binhluan`}  >
                <Binhluan url={props.url} />
            </Route>
            <Route path={`${props.path}/chitietbinhluan/:id`}  >
                <Chitietbinhluan />
            </Route>
        </div>
    )
    const quanlytour = (
        <div>
            <Route exact path={props.path}>
                <Doanhthu />
            </Route>
            <Route path={`${props.path}/tour`}  >
                <Tour url={props.url} />
            </Route>
            <Route path={`${props.path}/chitiettour/:id`}  >
                <Chitiettour />
            </Route>
            <Route path={`${props.path}/themtour`}  >
                <Themtour />
            </Route>
            <Route path={`${props.path}/suatour/:id`}  >
                <Themtour />
            </Route>
            <Route path={`${props.path}/sualoaitour/:id`}  >
                <Themloaitour />
            </Route>
            <Route path={`${props.path}/loaitour`}  >
                <Loaitour url={props.url} />
            </Route>
            <Route path={`${props.path}/themloaitour`}  >
                <Themloaitour />
            </Route>
            <Route path={`${props.path}/suaquocgia/:id`}  >
                <Themquocgia />
            </Route>
            <Route path={`${props.path}/quocgia`}  >
                <Quocgia url={props.url} />
            </Route>
            <Route path={`${props.path}/themquocgia`}  >
                <Themquocgia />
            </Route>
            <Route path={`${props.path}/diadiem`}  >
                <Diadiem url={props.url} />
            </Route>
            <Route path={`${props.path}/themdiadiem`}  >
                <Themdiadiem />
            </Route>
            <Route path={`${props.path}/suadiadiem/:id`}  >
                <Themdiadiem />
            </Route>
        </div>
    )
    const admin = (
        <div>
            <Route exact path={props.path}>
                <Doanhthu />
            </Route>
            <Route path={`${props.path}/tintuc`}  >
                <Tintuc url={props.url} />
            </Route>
            <Route path={`${props.path}/themtintuc`}  >
                <Themtintuc />
            </Route>
            <Route path={`${props.path}/suatintuc/:id`}  >
                <Themtintuc />
            </Route>
            <Route path={`${props.path}/diadiem`}  >
                <Diadiem url={props.url} />
            </Route>
            <Route path={`${props.path}/themdiadiem`}  >
                <Themdiadiem />
            </Route>
            <Route path={`${props.path}/suadiadiem/:id`}  >
                <Themdiadiem />
            </Route>
            <Route path={`${props.path}/tag`}  >
                <Tag url={props.url} />
            </Route>
            <Route path={`${props.path}/camnangdulich`}  >
                <Camnangdulich url={props.url} />
            </Route>
            <Route path={`${props.path}/lienhe`}  >
                <Lienhe url={props.url} />
            </Route>
            <Route path={`${props.path}/ngaydi`}  >
                <Ngaydi />
            </Route>
            <Route path={`${props.path}/hoadon`}  >
                <Hoadon url={props.url} />
            </Route>
            <Route path={`${props.path}/anh`}  >
                <Anh url={props.url} />
            </Route>
            <Route path={`${props.path}/dichvu`}  >
                <Dichvu url={props.url} />
            </Route>
            <Route path={`${props.path}/binhluan`}  >
                <Binhluan url={props.url} />
            </Route>
            <Route path={`${props.path}/tour`}  >
                <Tour url={props.url} />
            </Route>
            <Route path={`${props.path}/role`}  >
                <Role url={props.url} />
            </Route>

            <Route path={`${props.path}/themcamnangdulich`}  >
                <Themcamnang />
            </Route>
            <Route path={`${props.path}/themtag`}  >
                <Themtag />
            </Route>
            <Route path={`${props.path}/themlienhe`}  >
                <Themlienhe />
            </Route>
            <Route path={`${props.path}/themrole`}  >
                <Themrole />
            </Route>
            <Route path={`${props.path}/themdichvu`}  >
                <Themdichvu />
            </Route>

            <Route path={`${props.path}/chitietbinhluan/:id`}  >
                <Chitietbinhluan />
            </Route>
            <Route path={`${props.path}/chitiettour/:id`}  >
                <Chitiettour />
            </Route>
            <Route path={`${props.path}/chitietquocgia/:id`}  >
                <Chitietquocgia />
            </Route>
            <Route path={`${props.path}/suacamnangdulich/:id`}  >
                <Themcamnang />
            </Route>
            <Route path={`${props.path}/suarole/:id`}  >
                <Themrole />
            </Route>
            <Route path={`${props.path}/sualienhe/:id`}  >
                <Themlienhe />
            </Route>
            <Route path={`${props.path}/suamangxahoi/:id`}  >
                <Themmangxahoi />
            </Route>
            <Route path={`${props.path}/suatag/:id`}  >
                <Themtag />
            </Route>
            <Route path={`${props.path}/suadichvu/:id`}  >
                <Themdichvu />
            </Route>
            <Route path={`${props.path}/sualoaitour/:id`}  >
                <Themloaitour />
            </Route>
            <Route path={`${props.path}/suaquocgia/:id`}  >
                <Themquocgia />
            </Route>

            <Route path={`${props.path}/quocgia`}  >
                <Quocgia url={props.url} />
            </Route>
            <Route path={`${props.path}/loaitour`}  >
                <Loaitour url={props.url} />
            </Route>
            <Route path={`${props.path}/taikhoan`}  >
                <Taikhoan url={props.url} />
            </Route>
            <Route path={`${props.path}/mangxahoi`}  >
                <Mangxahoi url={props.url} />
            </Route>
            <Route path={`${props.path}/themloaitour`}  >
                <Themloaitour />
            </Route>
            <Route path={`${props.path}/chitiettaikhoan/:id`}  >
                <Chitiettaikhoan />
            </Route>
            <Route path={`${props.path}/themquocgia`}  >
                <Themquocgia />
            </Route>

            <Route path={`${props.path}/themtour`}  >
                <Themtour />
            </Route>

            <Route path={`${props.path}/suatour/:id`}  >
                <Themtour />
            </Route>
            <Route path={`${props.path}/themmangxahoi`}  >
                <Themmangxahoi />
            </Route>
        </div>
    )
    const menu_quanlytintuc = (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={state.collapsed === true ? <span className="fas fa-tachometer-alt" ></span> : <span className="fas fa-tachometer-alt mr-2"></span>}>
                <Link to="/admin">Doanh thu</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={state.collapsed === true ? <span className="far fa-newspaper" ></span> : <span className="far fa-newspaper mr-2"></span>}>
                <Link to={`${props.url}/tintuc`}>Quản lý tin tức</Link>
            </Menu.Item>
        </Menu>
    )
    const menu_quanlybinhluan = (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={state.collapsed === true ? <span className="fas fa-tachometer-alt" ></span> : <span className="fas fa-tachometer-alt mr-2"></span>}>
                <Link to="/admin">Doanh thu</Link>
            </Menu.Item>
            <Menu.Item key="9" icon={state.collapsed === true ? <span className="fas fa-comments" ></span> : <span className="fas fa-comments mr-2"></span>}>
                <Link to={`${props.url}/binhluan`}>Quản lý bình luận</Link>
            </Menu.Item>
        </Menu>
    )
    const menu_quanlytour = (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={state.collapsed === true ? <span className="fas fa-tachometer-alt" ></span> : <span className="fas fa-tachometer-alt mr-2"></span>}>
                <Link to="/admin">Doanh thu</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={state.collapsed === true ? <span className="fas fa-luggage-cart" ></span> : <span className="fas fa-luggage-cart mr-2"></span>}>
                <Link to={`${props.url}/tour`}>Quản lý tour</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={state.collapsed === true ? <span className="fas fa-flag-usa" ></span> : <span className="fas fa-flag-usa mr-2"></span>}>
                <Link to={`${props.url}/quocgia`}>Quản lý quốc gia</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={state.collapsed === true ? <span className="fas fa-atlas" ></span> : <span className="fas fa-atlas mr-2"></span>}>
                <Link to={`${props.url}/loaitour`}>Quản lý loại tour</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={state.collapsed === true ? <span className="fas fa-place-of-worship" ></span> : <span className="fas fa-place-of-worship mr-2"></span>}>
                <Link to={`${props.url}/diadiem`}>Quản lý địa điểm</Link>
            </Menu.Item>
        </Menu>
    )
    const menu_quanlyadmin = (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={state.collapsed === true ? <span className="fas fa-tachometer-alt" ></span> : <span className="fas fa-tachometer-alt mr-2"></span>}>
                <Link to="/admin">Doanh thu</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={state.collapsed === true ? <span className="fas fa-luggage-cart" ></span> : <span className="fas fa-luggage-cart mr-2"></span>}>
                <Link to={`${props.url}/tour`}>Quản lý tour</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={state.collapsed === true ? <span className="fas fa-users" ></span> : <span className="fas fa-users mr-2"></span>}>
                <Link to={`${props.url}/taikhoan`}>Quản lý tài khoản</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={state.collapsed === true ? <span className="far fa-newspaper" ></span> : <span className="far fa-newspaper mr-2"></span>}>
                <Link to={`${props.url}/tintuc`}>Quản lý tin tức</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={state.collapsed === true ? <span className="fas fa-flag-usa" ></span> : <span className="fas fa-flag-usa mr-2"></span>}>
                <Link to={`${props.url}/quocgia`}>Quản lý quốc gia</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={state.collapsed === true ? <span className="fas fa-atlas" ></span> : <span className="fas fa-atlas mr-2"></span>}>
                <Link to={`${props.url}/loaitour`}>Quản lý loại tour</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={state.collapsed === true ? <span className="fas  fa-share-alt" ></span> : <span className="fas  fa-share-alt mr-2"></span>}>
                <Link to={`${props.url}/mangxahoi`}>Quản lý mạng xã hội</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={state.collapsed === true ? <span className="fas fa-place-of-worship" ></span> : <span className="fas fa-place-of-worship mr-2"></span>}>
                <Link to={`${props.url}/diadiem`}>Quản lý địa điểm</Link>
            </Menu.Item>
            <Menu.Item key="9" icon={state.collapsed === true ? <span className="fas fa-comments" ></span> : <span className="fas fa-comments mr-2"></span>}>
                <Link to={`${props.url}/binhluan`}>Quản lý bình luận</Link>
            </Menu.Item>
            <Menu.Item key="10" icon={state.collapsed === true ? <span className="fas fa-tags" ></span> : <span className="fas fa-tags mr-2"></span>}>
                <Link to={`${props.url}/tag`}>Quản lý tag</Link>
            </Menu.Item>
            <Menu.Item key="11" icon={state.collapsed === true ? <span className="fas fa-images" ></span> : <span className="fas fa-images mr-2"></span>}>
                <Link to={`${props.url}/anh`}>Quản lý ảnh</Link>
            </Menu.Item>
            <Menu.Item key="12" icon={state.collapsed === true ? <span className="fab fa-phoenix-framework" ></span> : <span className="fab fa-phoenix-framework mr-2"></span>}>
                <Link to={`${props.url}/dichvu`}>Quản lý dịch vụ</Link>
            </Menu.Item>
            <Menu.Item key="13" icon={state.collapsed === true ? <span className="fas fa-file-alt" ></span> : <span className="fas fa-file-alt mr-2"></span>}>
                <Link to={`${props.url}/hoadon`}>Quản lý hoá đơn</Link>
            </Menu.Item>
            <Menu.Item key="14" icon={state.collapsed === true ? <span className="fas fa-user-tag" ></span> : <span className="fas fa-user-tag mr-2"></span>}>
                <Link to={`${props.url}/role`}>Quản lý phân quyền</Link>
            </Menu.Item>
            <Menu.Item key="15" icon={state.collapsed === true ? <span className="fas fa-id-card" ></span> : <span className="fas fa-id-card mr-2"></span>}>
                <Link to={`${props.url}/lienhe`}>Quản lý liên hệ</Link>
            </Menu.Item>
            <Menu.Item key="16" icon={state.collapsed === true ? <span className="fas fa-clock" ></span> : <span className="fas fa-clock mr-2"></span>}>
                <Link to={`${props.url}/ngaydi`}>Quản lý Ngày đi</Link>
            </Menu.Item>
            <Menu.Item key="17" icon={state.collapsed === true ? <span className="fas fa-book" ></span> : <span className="fas fa-book mr-2"></span>}>
                <Link to={`${props.url}/camnangdulich`}>Cẩm nang du lịch</Link>
            </Menu.Item>
        </Menu>
    )
    const Menu_Authentication = (role) => {
        switch (role) {
            case "admin":
                return menu_quanlyadmin
                break;
            case "quản lý tin tức":
                return menu_quanlytintuc
                break;
            case "biên tập viên":
                return menu_quanlytintuc
                break;
            case "quản lý bình luận":
                return menu_quanlybinhluan
                break;
            case "quản lý tour":
                return menu_quanlytour
                break;
            default:
                break;
        }
    }
    const Authentication = (role) => {
        switch (role) {
            case "admin":
                return admin
                break;
            case "quản lý tin tức":
                return quanlytintuc
                break;
            case "biên tập viên":
                return quanlytintuc
                break;
            case "quản lý bình luận":
                return quanlybinhluan
                break;
            case "quản lý tour":
                return quanlytour
                break;
            default:
                break;
        }
    }
    return (
        <div id="nav">
            <Layout>
                <Sider trigger={null} collapsible collapsed={state.collapsed}>
                    <div className="logo" >
                        <Link to="/">
                            <p className="text-center w-100">
                                {state.collapsed === true ? <i className="fas fa-user-shield"></i> : <strong>Administration</strong>}
                            </p>
                        </Link>
                    </div>
                    {user ? Menu_Authentication(user.role) : ''}
                </Sider>

                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <Headers />
                        {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            {user ? Authentication(user.role) : ""}
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </div >
    )
}