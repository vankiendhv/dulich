import React, { useEffect, useState } from 'react'
import { Modal, Progress } from 'antd'
import { Button } from '@material-ui/core';
import './doanhthu.css'
import { useDispatch, useSelector } from 'react-redux';
import { chitieuData } from './chitieuSlice';

export default function Doanhthu() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [state, setState] = useState({ chitieuthang: "", chitieungay: "", chitieutuan: "", chitieunam: "" });

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };
    const dispatch = useDispatch();
    const actionChitiet = async () => await dispatch(chitieuData());
    const chitieu = useSelector(state => state.chitieu.chitieu.data);
    useEffect(() => {
        if (chitieu) {
            setState({
                ...state,
                chitieungay: chitieu[0].chitieungay,
                chitieutuan: chitieu[0].chitieutuan,
                chitieuthang: chitieu[0].chitieuthang,
                chitieunam: chitieu[0].chitieunam
            })
        } else {
            actionChitiet();
        }
    }, [chitieu])

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const { chitieunam, chitieuthang, chitieungay, chitieutuan } = state
    return (
        <div id="doanhthu">
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
                                <span>Chỉ tiêu: <span className="gold">{chitieungay}</span></span><br />
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
                                <span>Chỉ tiêu: <span className="gold">{chitieutuan}</span></span><br />
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
                                <span>Chỉ tiêu: <span className="gold">{chitieuthang}</span></span><br />
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
                                <span>Chỉ tiêu: <span className="gold">{chitieunam}</span></span><br />
                                <span>Vượt chỉ tiêu: <span className="gold">1,000,000</span></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Button className="float-right mt-4" onClick={showModal} variant="contained" color="primary">
                Đặt chỉ tiêu
            </Button>
            <Modal title="Đặt chỉ tiêu" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div class="form-group">
                    <label for="">Chỉ tiêu ngày</label>
                    <input type="number" name="chitieungay" value={chitieungay} onChange={onChange} id="" class="form-control" placeholder="" aria-describedby="helpId" />
                </div>
                <div class="form-group">
                    <label for="">Chỉ tiêu tuần</label>
                    <input type="number" name="chitieutuan" value={chitieutuan} onChange={onChange} id="" class="form-control" placeholder="" aria-describedby="helpId" />
                </div>
                <div class="form-group">
                    <label for="">Chỉ tiêu tháng</label>
                    <input type="number" name="chitieuthang" value={chitieuthang} onChange={onChange} id="" class="form-control" placeholder="" aria-describedby="helpId" />
                </div>
                <div class="form-group">
                    <label for="">Chỉ tiêu năm</label>
                    <input type="number" name="chitieunam" value={chitieunam} onChange={onChange} id="" class="form-control" placeholder="" aria-describedby="helpId" />
                </div>
            </Modal>
        </div>

    )
}