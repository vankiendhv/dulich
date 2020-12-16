
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button } from '@material-ui/core';
import { Checkbox, Col, Popconfirm, Row, Spin, Table } from 'antd'
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { ngaydiData } from '../Ngaydi/ngaydiSlice';
import { removetour, updatetour } from './tourSlice';
import { tourData } from './tourSlice';
function Tour(props) {
    const dispatch = useDispatch()
    const tours = useSelector(state => state.tours.tour.data);
    const ngaydi = useSelector(state => state.ngaydis.ngaydi.data);
    const loadingngaydi = useSelector(state => state.ngaydis.loading);

    const loading = useSelector(state => state.tours.Loading);
    const history = useHistory();
    const actionResult = async () => await dispatch(tourData());
    const actionngaydi = async () => await dispatch(ngaydiData());
    useEffect(() => {
        actionResult();
        actionngaydi();
    }, [])

    const columns = [{
        title: 'Mã',
        dataIndex: 'id',
        sorter: {
            compare: (a, b) => b.id - a.id,
        },
    },
    {
        title: 'Tên tour',
        dataIndex: 'name',
    },
    {
        title: "Ảnh",
        dataIndex: "anh"
    },
    {
        title: 'tình trạng',
        dataIndex: 'status',
    },
    {
        title: 'Action',
        dataIndex: 'action'
    }
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    }
    const hangdleDelete = e => {
        dispatch(removetour(e));
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    const hangdleEdit = (id) => {
        history.replace(`${props.url}/suatour/${id}`)
    }
    const handleStatus = (e, id) => {
        if (e === 1) {
            dispatch(updatetour({ status: 0, idsua: id }))
        } else {
            dispatch(updatetour({ status: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [idtour, setidtour] = useState('')

    const showModal = (id) => {
        setIsModalVisible(true);
        setidtour(id)
    };

    const handleOk = () => {
        setIsModalVisible(false);
        dispatch(updatetour({ idsua: idtour }))
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const [idngaydi, setidngaydi] = useState([])
    const onchangeNgaydi = (e) => {
        setidngaydi(e)
    }
    return (
        <div id="admin">
            <div className="heading">
                <h4>Quản lý tour</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <div className="add">
                    <Link to={`${props.url}/themtour`}><Button variant="outlined" color="secondary"><i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới</Button></Link>
                </div>
                {loading ? <div className="spin"><Spin className="mt-5" /></div> :
                    <Table columns={columns} dataSource={tours.map((ok, index) => (
                        {
                            key: index + 1,
                            id: ok.id,
                            name: <Link to={`${props.url}/chitiettour/${ok.id}`}>{ok.name}</Link>,
                            anh: <img src={ok.avatar} width="200px" height="150px" alt="" />,
                            status: <div className="action">{ok.status === 1 ? <Link onClick={() => { handleStatus(ok.status, ok.id) }}><i className="far fa-thumbs-up "></i></Link> : <Link onClick={() => handleStatus(ok.status, ok.id)}><i className="far fa-thumbs-down "></i></Link>}</div>,
                            action:
                                <div className="action">
                                    <span className="text-warning" onClick={() => showModal(ok.id)}>
                                        <i className="far fa-calendar-alt mr-4" style={{ cursor: "pointer" }}></i>
                                    </span>
                                    <Popconfirm title="Bạn có muốn sửa？" onConfirm={() => { hangdleEdit(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                                        <i className="far fa-edit mr-4" style={{ cursor: "pointer" }}></i>
                                    </Popconfirm>
                                    <Popconfirm title="Bạn có muốn xoá？" onConfirm={() => { hangdleDelete(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                                        <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
                                    </Popconfirm>
                                </div>
                        }))}
                        onChange={onChange} />}
                <Modal title="Chọn ngày khởi hành" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Checkbox.Group style={{ width: '100%' }} onChange={onchangeNgaydi}>
                        {loadingngaydi ? <div className="spin"><Spin className="mt-5" /></div> :
                            ngaydi.map(ok => (
                                <Row>
                                    <Col span={8}>
                                        <Checkbox value={ok.id}>{ok.ngay}</Checkbox>
                                    </Col>
                                </Row>
                            ))
                        }
                    </Checkbox.Group>
                </Modal>
            </div>
        </div>
    )
}

Tour.propTypes = {

}

export default Tour
