import { Pagination, Progress, Rate } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './danhgia.css'
export class Danhgia extends Component {
    render() {
        return (
            <div id="nx">
                <div className="heading-nx">
                    <h3>Đánh giá</h3>
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <p className="scores">4.5</p>
                            <Rate className="rate" value="4" disabled />
                            <p>732 nhận xét</p>
                        </div>
                        <div className="col-md-10">
                            <div>
                                <Rate className="rate " value="5" disabled />
                                <Progress percent={50} showInfo={false} />
                                <span>200</span>
                            </div>
                            <div>
                                <Rate className="rate" value="4" disabled />
                                <Progress percent={50} showInfo={false} />
                                <span>200</span>
                            </div>
                            <div>
                                <Rate className="rate" value="3" disabled />
                                <Progress percent={10} showInfo={false} />
                                <span>200</span>
                            </div>
                            <div>
                                <Rate className="rate" value="2" disabled />
                                <Progress percent={50} showInfo={false} />
                                <span>200</span>
                            </div>
                            <div>
                                <Rate className="rate" value="1" disabled />
                                <Progress percent={50} showInfo={false} />
                                <span>200</span>
                            </div>
                        </div>
                    </div>
                    <div className="container"><hr /></div>
                    <div>
                        <div className="mb-5">
                            <div className="avatar float-left">
                                <Avatar className="mr-2" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </div>
                            <div className="tt-user">
                                <strong>Nguyễn Lâm Anh Thy</strong>
                                <i className="fas fa-check"></i><span className="text-success font-weight-bolder"> Khác hàng đã trải nghiệm tour</span><br />
                                <span className="text-primary">Nhận xét vào 06 tháng 09, 2019</span>
                            </div>
                            <div className="clear nx">
                                <Rate className="rate" value="5" disabled /><br />
                                <strong>Cực kỳ hài lòng</strong><br />
                                <span className="content-nx">nhỏ xinh và tiện dụng, có thể tháo khóa dễ dàng để cắt điều chỉnh dây :) cám ơn tiki nhé. ship hàng cực nhanh và nhiệt tình nữa. 5 sao</span>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="avatar float-left">
                                <Avatar className="mr-2" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </div>
                            <div className="tt-user">
                                <strong>Nguyễn Lâm Anh Thy</strong>
                                <i className="fas fa-check"></i><span className="text-success font-weight-bolder"> Khác hàng đã trải nghiệm tour</span><br />
                                <span className="text-primary">Nhận xét vào 06 tháng 09, 2019</span>
                            </div>
                            <div className="clear nx">
                                <Rate className="rate" value="5" disabled /><br />
                                <strong>Cực kỳ hài lòng</strong><br />
                                <span className="content-nx">nhỏ xinh và tiện dụng, có thể tháo khóa dễ dàng để cắt điều chỉnh dây :) cám ơn tiki nhé. ship hàng cực nhanh và nhiệt tình nữa. 5 sao</span>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="avatar float-left">
                                <Avatar className="mr-2" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </div>
                            <div className="tt-user">
                                <strong>Nguyễn Lâm Anh Thy</strong>
                                <i className="fas fa-check"></i><span className="text-success font-weight-bolder"> Khác hàng đã trải nghiệm tour</span><br />
                                <span className="text-primary">Nhận xét vào 06 tháng 09, 2019</span>
                            </div>
                            <div className="clear nx">
                                <Rate className="rate" value="5" disabled /><br />
                                <strong>Cực kỳ hài lòng</strong><br />
                                <span className="content-nx">nhỏ xinh và tiện dụng, có thể tháo khóa dễ dàng để cắt điều chỉnh dây :) cám ơn tiki nhé. ship hàng cực nhanh và nhiệt tình nữa. 5 sao</span>
                            </div>
                        </div>
                        <Pagination className="float-right" size="small" total={50} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Danhgia)
