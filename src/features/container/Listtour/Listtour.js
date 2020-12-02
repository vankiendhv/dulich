import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Breadcrumb, Carousel, Pagination, Rate, Select } from 'antd'
import { HomeOutlined, BoldOutlined, CommentOutlined } from "@ant-design/icons";
import { Button, TextField } from '@material-ui/core';
import { Option } from 'antd/lib/mentions';
import Search from 'antd/lib/input/Search';
import g1 from './../../images/g1.jpg'
import { Link } from 'react-router-dom';
import Footer from '../trangchu/footer/Footer'
import './listtour.css'

export class Listtour extends Component {
    state = {
        list: "trong"
    }
    handleChange = (value) => {
        this.setState({
            list: value
        })
    }
    render() {
        return (
            <div id="list-tour">
                <div className="breadcrumb">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/"><i className="fas fa-home mr-2"></i>Trang chủ</Link></li>
                            <li className="breadcrumb-item"><Link to="/list-tour" disabled>Tour du lịch</Link></li>
                        </ol>
                    </nav>
                </div>
                <div className="container">
                    <div className="row mb-4 bg-white rounded">
                        <div className="col-md-4 border-right pb-3 bg ">
                            <h4 className="pt-4">Tìm Kiếm tour</h4>
                            <Search placeholder="Tìm kiếm tour" onSearch={value => console.log(value)} enterButton />

                            <h4 className="mt-3">Loại tour</h4>
                            <Select className="w-100" defaultValue="trong" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="trong">Tour trong nước</Option>
                                <Option value="ngoai">Tour nước ngoài</Option>
                            </Select>
                            <h4 className="mt-3">Đánh giá</h4>
                            <div className="star-mid">
                                <Link><Rate value="5" disabled /><span className="ml-2">từ 5 sao</span><br /></Link>
                                <Link><Rate value="4" disabled /><span className="ml-2">từ 4 sao</span><br /></Link>
                                <Link><Rate value="3" disabled /><span className="ml-2">từ 3 sao</span><br /></Link>
                                <Link><Rate value="2" disabled /><span className="ml-2">từ 2 sao</span><br /></Link>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="title text-center mt-3">
                                {this.state.list === 'trong' ? <h3>Tour trong nước</h3> : <h3>Tour nước ngoài</h3>}
                                <div className="hr w-25"></div>
                            </div>
                            <div className="box-tour">
                                <div className="container">
                                    <div className="row mt-4">
                                        <div className="col-md-6 mb-3">
                                            <Link to="/tour">
                                                <div className="img ">
                                                    <img src={g1} className="img-fluid rounded" alt="" />
                                                </div>
                                                <div className="content_tour">
                                                    <div className="title_tour">Hà Nội</div>
                                                    <div className="time"><i className="far fa-clock mr-2"></i>20/7/2020<i className="fas fa-car ml-2"></i></div>
                                                    <div className="star float-left">
                                                        <Rate value="4" disabled />
                                                    </div>
                                                    <div className="money float-left ml-3 text-warning">
                                                        <del>3.000.000 VNĐ</del> <br />
                                                        4.000.000 VNĐ
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <Link to="/tour">
                                                <div className="img ">
                                                    <img src={g1} className="img-fluid rounded" alt="" />
                                                </div>
                                                <div className="content_tour">
                                                    <div className="title_tour">Hà Nội</div>
                                                    <div className="star float-left">
                                                        <Rate value="4" disabled />
                                                    </div>
                                                    <div className="money float-left ml-3 text-warning">
                                                        <del>3.000.000 VNĐ</del> <br />
                                                        4.000.000 VNĐ
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <Link to="/tour">
                                                <div className="img ">
                                                    <img src={g1} className="img-fluid rounded" alt="" />
                                                </div>
                                                <div className="content_tour">
                                                    <div className="title_tour">Hà Nội</div>
                                                    <div className="star float-left">
                                                        <Rate value="4" disabled />
                                                    </div>
                                                    <div className="money float-left ml-3 text-warning">
                                                        <del>3.000.000 VNĐ</del> <br />
                                                        4.000.000 VNĐ
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <Link to="/tour">
                                                <div className="img ">
                                                    <img src={g1} className="img-fluid rounded" alt="" />
                                                </div>
                                                <div className="content_tour">
                                                    <div className="title_tour">Hà Nội</div>
                                                    <div className="star float-left">
                                                        <Rate value="4" disabled />
                                                    </div>
                                                    <div className="money float-left ml-3 text-warning">
                                                        <del>3.000.000 VNĐ</del> <br />
                                                        4.000.000 VNĐ
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                    </div>
                                    <Pagination className="text-right" size="small" total={50} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Listtour)
