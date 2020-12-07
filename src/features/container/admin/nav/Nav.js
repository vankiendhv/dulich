import React, { Component } from 'react'
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
import Themanh from "../Anh/Themanh";
import Dichvu from "../Dichvu/Dichvu";
import Themdichvu from "../Dichvu/Themdichvu"
import Hoadon from "../Hoadon/Hoadon";
import Role from "../Role/Role";
import Themrole from '../Role/Themrole';
const { Header, Sider, Content } = Layout;

export default class Nav extends Component {
    state = {
        collapsed: true,
        visible: true
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    stylenav = () => {
        return {
            marginRight: "200px",
            transition: '0.5s'
        }
    }
    render() {
        return (
            <div id="nav">
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" >
                            <Link to="/">
                                <p className="text-center w-100">
                                    {this.state.collapsed === true ? <i className="fas fa-user-shield"></i> : <strong>Administration</strong>}
                                </p>
                            </Link>
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={this.state.collapsed === true ? <span className="fas fa-tachometer-alt" style={this.stylenav()}></span> : <span className="fas fa-tachometer-alt mr-2"></span>}>
                                <Link to="/admin">Doanh thu</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={this.state.collapsed === true ? <span className="fas fa-luggage-cart" style={this.stylenav()}></span> : <span className="fas fa-luggage-cart mr-2"></span>}>
                                <Link to={`${this.props.url}/tour`}>Quản lý tour</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={this.state.collapsed === true ? <span className="fas fa-users" style={this.stylenav()}></span> : <span className="fas fa-users mr-2"></span>}>
                                <Link to={`${this.props.url}/taikhoan`}>Quản lý tài khoản</Link>
                            </Menu.Item>
                            <Menu.Item key="4" icon={this.state.collapsed === true ? <span className="far fa-newspaper" style={this.stylenav()}></span> : <span className="far fa-newspaper mr-2"></span>}>
                                <Link to={`${this.props.url}/tintuc`}>Quản lý tin tức</Link>
                            </Menu.Item>
                            <Menu.Item key="5" icon={this.state.collapsed === true ? <span className="fas fa-flag-usa" style={this.stylenav()}></span> : <span className="fas fa-flag-usa mr-2"></span>}>
                                <Link to={`${this.props.url}/quocgia`}>Quản lý quốc gia</Link>
                            </Menu.Item>
                            <Menu.Item key="6" icon={this.state.collapsed === true ? <span className="fas fa-atlas" style={this.stylenav()}></span> : <span className="fas fa-atlas mr-2"></span>}>
                                <Link to={`${this.props.url}/loaitour`}>Quản lý loại tour</Link>
                            </Menu.Item>
                            <Menu.Item key="7" icon={this.state.collapsed === true ? <span className="fas  fa-share-alt" style={this.stylenav()}></span> : <span className="fas  fa-share-alt mr-2"></span>}>
                                <Link to={`${this.props.url}/mangxahoi`}>Quản lý mạng xã hội</Link>
                            </Menu.Item>
                            <Menu.Item key="8" icon={this.state.collapsed === true ? <span className="fas fa-place-of-worship" style={this.stylenav()}></span> : <span className="fas fa-place-of-worship mr-2"></span>}>
                                <Link to={`${this.props.url}/diadiem`}>Quản lý địa điểm</Link>
                            </Menu.Item>
                            <Menu.Item key="9" icon={this.state.collapsed === true ? <span className="fas fa-comments" style={this.stylenav()}></span> : <span className="fas fa-comments mr-2"></span>}>
                                <Link to={`${this.props.url}/binhluan`}>Quản lý bình luận</Link>
                            </Menu.Item>
                            <Menu.Item key="10" icon={this.state.collapsed === true ? <span className="fas fa-tags" style={this.stylenav()}></span> : <span className="fas fa-tags mr-2"></span>}>
                                <Link to={`${this.props.url}/tag`}>Quản lý tag</Link>
                            </Menu.Item>
                            <Menu.Item key="11" icon={this.state.collapsed === true ? <span className="fas fa-images" style={this.stylenav()}></span> : <span className="fas fa-images mr-2"></span>}>
                                <Link to={`${this.props.url}/anh`}>Quản lý ảnh</Link>
                            </Menu.Item>
                            <Menu.Item key="12" icon={this.state.collapsed === true ? <span className="fab fa-phoenix-framework" style={this.stylenav()}></span> : <span className="fab fa-phoenix-framework mr-2"></span>}>
                                <Link to={`${this.props.url}/dichvu`}>Quản lý dịch vụ</Link>
                            </Menu.Item>
                            <Menu.Item key="13" icon={this.state.collapsed === true ? <span className="fas fa-file-alt" style={this.stylenav()}></span> : <span className="fas fa-file-alt mr-2"></span>}>
                                <Link to={`${this.props.url}/hoadon`}>Quản lý hoá đơn</Link>
                            </Menu.Item>
                            <Menu.Item key="14" icon={this.state.collapsed === true ? <span className="fas fa-user-tag" style={this.stylenav()}></span> : <span className="fas fa-user-tag mr-2"></span>}>
                                <Link to={`${this.props.url}/role`}>Quản lý phân quyền</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>

                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            <Headers onClick={this.showDrawer} />
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
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
                                <Route exact path={this.props.path}>
                                    <Doanhthu />
                                </Route>
                                <Route path={`${this.props.path}/tintuc`}  >
                                    <Tintuc url={this.props.url} />
                                </Route>
                                <Route path={`${this.props.path}/tag`}  >
                                    <Tag url={this.props.url} />
                                </Route>
                                <Route path={`${this.props.path}/hoadon`}  >
                                    <Hoadon url={this.props.url} />
                                </Route>
                                <Route path={`${this.props.path}/anh`}  >
                                    <Anh url={this.props.url} />
                                </Route>
                                <Route path={`${this.props.path}/dichvu`}  >
                                    <Dichvu url={this.props.url} />
                                </Route>
                                <Route path={`${this.props.path}/binhluan`}  >
                                    <Binhluan url={this.props.url} />
                                </Route>
                                <Route path={`${this.props.path}/tour`}  >
                                    <Tour url={this.props.url} />
                                </Route>
                                <Route path={`${this.props.path}/role`}  >
                                    <Role url={this.props.url} />
                                </Route>
                                <Route path={`${this.props.path}/themtintuc`}  >
                                    <Themtintuc />
                                </Route>
                                <Route path={`${this.props.path}/themtag`}  >
                                    <Themtag />
                                </Route>
                                <Route path={`${this.props.path}/themrole`}  >
                                    <Themrole />
                                </Route>
                                <Route path={`${this.props.path}/themdichvu`}  >
                                    <Themdichvu />
                                </Route>
                                <Route path={`${this.props.path}/themanh`}  >
                                    <Themanh />
                                </Route>
                                <Route path={`${this.props.path}/chitiettintuc/:id`}  >
                                    <Chitiettintuc />
                                </Route>
                                <Route path={`${this.props.path}/chitietbinhluan/:id`}  >
                                    <Chitietbinhluan />
                                </Route>
                                <Route path={`${this.props.path}/chitiettour/:id`}  >
                                    <Chitiettour />
                                </Route>
                                <Route path={`${this.props.path}/chitietquocgia/:id`}  >
                                    <Chitietquocgia />
                                </Route>
                                <Route path={`${this.props.path}/suatintuc/:id`}  >
                                    <Themtintuc />
                                </Route>
                                <Route path={`${this.props.path}/suarole/:id`}  >
                                    <Themrole />
                                </Route>
                                <Route path={`${this.props.path}/suamangxahoi/:id`}  >
                                    <Themmangxahoi />
                                </Route>
                                <Route path={`${this.props.path}/suatag/:id`}  >
                                    <Themtag />
                                </Route>
                                <Route path={`${this.props.path}/suadichvu/:id`}  >
                                    <Themdichvu />
                                </Route>
                                <Route path={`${this.props.path}/suaanh/:id`}  >
                                    <Themanh />
                                </Route>
                                <Route path={`${this.props.path}/sualoaitour/:id`}  >
                                    <Themloaitour />
                                </Route>
                                <Route path={`${this.props.path}/suaquocgia/:id`}  >
                                    <Themquocgia />
                                </Route>
                                <Route path={`${this.props.path}/suadiadiem/:id`}  >
                                    <Themdiadiem />
                                </Route>
                                <Route path={`${this.props.path}/quocgia`}  >
                                    <Quocgia url={this.props.url} />
                                </Route>
                                <Route path={`${this.props.path}/loaitour`}  >
                                    <Loaitour url={this.props.url} />
                                </Route>
                                <Route path={`${this.props.path}/taikhoan`}  >
                                    <Taikhoan url={this.props.url} />
                                </Route>
                                <Route path={`${this.props.path}/mangxahoi`}  >
                                    <Mangxahoi url={this.props.url} />
                                </Route>
                                <Route path={`${this.props.path}/themloaitour`}  >
                                    <Themloaitour />
                                </Route>
                                <Route path={`${this.props.path}/chitiettaikhoan/:id`}  >
                                    <Chitiettaikhoan />
                                </Route>
                                <Route path={`${this.props.path}/themquocgia`}  >
                                    <Themquocgia />
                                </Route>
                                <Route path={`${this.props.path}/themdiadiem`}  >
                                    <Themdiadiem />
                                </Route>
                                <Route path={`${this.props.path}/themtour`}  >
                                    <Themtour />
                                </Route>
                                <Route path={`${this.props.path}/themmangxahoi`}  >
                                    <Themmangxahoi />
                                </Route>
                                <Route path={`${this.props.path}/diadiem`}  >
                                    <Diadiem url={this.props.url} />
                                </Route>
                                <Route path={`${this.props.path}/themdiadiem`}  >
                                    <Themdiadiem />
                                </Route>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </div >
        )
    }
}
