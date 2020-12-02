import { Progress } from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './doanhthu.css'
export class Doanhthu extends Component {
    state = {
        time: ""
    }
    componentDidMount() {
        this.clock();
    }
    clock = () => {
        setInterval(() => {
            var d = new Date;
            var second = d.getSeconds();
            var min = d.getMinutes();
            var hour = d.getHours();
            if (d.getSeconds() < 10) {
                second = "0" + d.getSeconds();
            }
            if (min < 10) {
                min = "0" + d.getMinutes();
            }
            if (hour < 10) {
                hour = "0" + d.getHours();
            }
            var time = hour + ":" + min + ":" + second;
            this.setState({
                time: time
            })
        }, 1000);
    }
    render() {
        return (
            <div id="doanhthu">
                <div className="time">
                    {this.state.time}
                </div>
                <h4>Doanh thu công ty</h4>
                <div className="row">
                    <div className="col-md">
                        <div className="float-left mr-2">
                            <div className="icon">
                                <i className="fas fa-dollar-sign"></i>
                            </div>
                        </div>
                        <div className="monney">
                            <span><strong>$430</strong></span><br />
                            <span>Tổng thu nhập</span>
                        </div>
                    </div>

                    <div className="col-md">
                        <div className="float-right mr-2">
                            <div className="icon">
                                <i className="fas fa-money-bill-alt"></i>
                            </div>
                        </div>
                        <div className="monney float-right">
                            <span><strong>$430</strong></span><br />
                            <span>Lợi nhuận</span>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="float-left mr-2">
                            <div className="icon">
                                <i className="fas fa-chart-pie"></i>
                            </div>
                        </div>
                        <div className="monney">
                            <span><strong>$430</strong></span><br />
                            <span>Tổng chi</span>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="float-left mr-2">
                            <div className="icon">
                                <i className="fas fa-users"></i>
                            </div>
                        </div>
                        <div className="monney">
                            <span><strong>430</strong></span><br />
                            <span>Tổng người dùng</span>
                        </div>
                    </div>
                </div>
                <h4 className="mt-4 mb-2">Chỉ tiêu</h4>
                <div className="container text-center">
                    <div className="row pt-3 pb-2">
                        <div className="col-md-3">
                            <Progress strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }} type="dashboard" percent={100} />

                            <div>
                                <h5>Chỉ tiêu ngày</h5>
                                <div className="hr"></div>
                                <div>
                                    <span>Tổng chi: <span className="gold">3,000,000</span></span><br />
                                    <span>Tổng thu: <span className="gold">9,000,000</span></span><br />
                                    <span>Doanh thu: <span className="gold">6,000,000</span></span><br />
                                    <span>Chỉ tiêu: <span className="gold">5,000,000</span></span><br />
                                    <span>Vượt chỉ tiêu: <span className="gold">1,000,000</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Progress strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }} type="dashboard" percent={100} />

                            <div>
                                <h5>Chỉ tiêu tuần</h5>
                                <div className="hr"></div>
                                <div>
                                    <span>Tổng chi: <span className="gold">3,000,000</span></span><br />
                                    <span>Tổng thu: <span className="gold">9,000,000</span></span><br />
                                    <span>Doanh thu: <span className="gold">6,000,000</span></span><br />
                                    <span>Chỉ tiêu: <span className="gold">5,000,000</span></span><br />
                                    <span>Vượt chỉ tiêu: <span className="gold">1,000,000</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Progress strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }} type="dashboard" percent={100} />

                            <div>
                                <h5>Chỉ tiêu tháng</h5>
                                <div className="hr"></div>
                                <div>
                                    <span>Tổng chi: <span className="gold">3,000,000</span></span><br />
                                    <span>Tổng thu: <span className="gold">9,000,000</span></span><br />
                                    <span>Doanh thu: <span className="gold">6,000,000</span></span><br />
                                    <span>Chỉ tiêu: <span className="gold">5,000,000</span></span><br />
                                    <span>Vượt chỉ tiêu: <span className="gold">1,000,000</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Progress strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }} type="dashboard" percent={100} />

                            <div>
                                <h5>Chỉ tiêu năm</h5>
                                <div className="hr"></div>
                                <div>
                                    <span>Tổng chi: <span className="gold">3,000,000</span></span><br />
                                    <span>Tổng thu: <span className="gold">9,000,000</span></span><br />
                                    <span>Doanh thu: <span className="gold">6,000,000</span></span><br />
                                    <span>Chỉ tiêu: <span className="gold">5,000,000</span></span><br />
                                    <span>Vượt chỉ tiêu: <span className="gold">1,000,000</span></span>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Doanhthu)
