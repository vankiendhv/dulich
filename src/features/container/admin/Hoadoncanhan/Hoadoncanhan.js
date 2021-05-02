import React, { useEffect, useState } from 'react'
import { Popconfirm, Spin, Table } from 'antd'
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import taikhoanApi from "../../../../api/taikhoanApi";
import { hoadoncanhanData, removehoadoncanhan, updatehoadoncanhan } from './hoadoncanhanSlice';
import { QuestionCircleOutlined } from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';
function Hoadoncanhan() {
    const match = useRouteMatch()
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const columns = [
        {
            title: 'Người dùng',
            dataIndex: 'user',
        },
        {
            title: 'Nơi khởi hành',
            dataIndex: 'nxp',
        },
        {
            title: 'Địa điểm đi',
            dataIndex: 'ddd',
        },
        {
            title: 'Ngày khởi hành',
            dataIndex: 'nkh',
        },
        {
            title: 'Kiểm duyệt',
            dataIndex: 'kd'
        }
    ];
    const actionResult = async () => { await dispatch(hoadoncanhanData()) }
    useEffect(() => {
        actionResult();
    }, [])
    const hoadoncanhan = useSelector(state => state.hoadoncanhans.hoadoncanhan.data);
    const loading = useSelector(state => state.hoadoncanhans.loading)
    const dispatch = useDispatch();
    const history = useHistory()
    const hangdleDelete = e => {
        dispatch(removehoadoncanhan(e));
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    const hangdleEdit = (id) => {
        history.replace(`${match.url}/suahoadoncanhan/${id}`)
    }
    const handleStatus = (e, id) => {
        if (e === 1) {
            dispatch(updatehoadoncanhan({ status: 0, idsua: id }))
        } else {
            dispatch(updatehoadoncanhan({ status: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    return (
        <div id="admin">
            <div className="heading">
                <h4>Hoá đơn cá nhân</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                {loading ? <div className="spin"><Spin className="mt-5" /></div> :
                    <Table columns={columns} dataSource={hoadoncanhan.map((ok, index) => (
                        {
                            key: index + 1,
                            user: <span>{ok.userId}</span>,
                            nxp: <span>{ok.noikhoihanh}</span>,
                            nkh: <span>{ok.ngaykhoihanh}</span>,
                            ddd: <span>{ok.diadiemdi}</span>,
                            kd: <div className="action">{ok.kiemduyet === 1 ? <span onClick={() => { handleStatus(ok.status, ok.id) }}><i className="far fa-thumbs-up text-primary"></i></span> : <span onClick={showModal}><i className="far fa-thumbs-down "></i></span>}</div>,

                        }))} />
                }
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        </div>
    )
}

Hoadoncanhan.propTypes = {
}

export default Hoadoncanhan