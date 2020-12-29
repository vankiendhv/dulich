
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button } from '@material-ui/core';
import { Popconfirm, Popover, Spin, Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { hoadonData, removehoadon, updatehoadon } from './hoadonSlice';
function Hoadon(props) {

    const columns = [
        {
            title: 'Người dùng',
            dataIndex: 'name',
        },
        {
            title: 'Tour',
            dataIndex: 'tour',
        },
        {
            title: 'Số lượng',
            dataIndex: 'soluong',
        },
        {
            title: 'Tổng tiền',
            dataIndex: 'tien',
        },

        {
            title: 'Action',
            dataIndex: 'action'
        }
    ];

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    const hoadons = useSelector(state => state.hoadons.hoadon.data);
    const loading = useSelector(state => state.hoadons.loading)
    const dispatch = useDispatch();
    const actionResult = async () => { await dispatch(hoadonData()) }

    const hangdleDelete = e => {
        dispatch(removehoadon(e));
        setTimeout(() => {
            actionResult();
        }, 500);
    }

    const handleStatus = (e, id) => {
        if (e === 1) {
            dispatch(updatehoadon({ status: 0, idsua: id }))
        } else {
            dispatch(updatehoadon({ status: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }

    return (
        <div id="admin">
            <div className="heading">
                <h4>Hoá đơn</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                {loading ? <div className="spin"><Spin className="mt-5" /></div> :
                    <Table columns={columns} dataSource={hoadons.map((ok, index) => (
                        {
                            key: index + 1,
                            name: <span>{ok.User.name}</span>,
                            tour: <span>{ok.Tour.name}</span>,
                            soluong: <Popover content={<div>
                                <p>Người lớn: {ok.soluong}</p>
                                <p>Trẻ em: {ok.soluong}</p>
                                <p>Em bé: {ok.soluong}</p></div>} title="Số lượng cụ thể">
                                <span>{ok.soluong}</span>
                            </Popover>,
                            tien: <span>10000</span>,
                            action:
                                <div className="action">
                                    <Popconfirm title="Bạn có muốn xoá？" onConfirm={() => { hangdleDelete(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                                        <i className="far fa-trash-alt" ></i>
                                    </Popconfirm>
                                </div>
                        }))}
                    />
                }
            </div>
        </div>
    )
}

Hoadon.propTypes = {

}

export default Hoadon