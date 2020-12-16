import React, { useEffect } from 'react'
import { Popconfirm, Spin, Table } from 'antd'
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { lienheData, removelienhe, updatelienhe } from './lienheSlice';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { diadiemData } from '../DiaDiem/diadiemSlice';
function Lienhe(props) {

    const columns = [
        {
            title: 'email',
            dataIndex: 'email',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'sdt',
        },
        {
            title: 'địa chỉ',
            dataIndex: 'diachi',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            dataIndex: 'action'
        }
    ];

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    const lienhe = useSelector(state => state.lienhes.lienhe.data);
    const loading = useSelector(state => state.lienhes.loading)
    const dispatch = useDispatch();
    const actionResult = async () => { await dispatch(lienheData()) }

    const history = useHistory()
    const hangdleDelete = e => {
        dispatch(removelienhe(e));
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    const hangdleEdit = (id) => {
        history.replace(`${props.url}/sualienhe/${id}`)
    }
    const handleStatus = (e, id) => {
        if (e === 1) {
            dispatch(updatelienhe({ status: 0, idsua: id }))
        } else {
            dispatch(updatelienhe({ status: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    return (
        <div id="admin">
            <div className="heading">
                <h4>Liên hệ</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <div className="add">
                    <Link to={`${props.url}/themlienhe`}><Button variant="outlined" color="secondary"><i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới</Button></Link>
                </div>
                {loading ? <div className="spin"><Spin className="mt-5" /></div> :
                    <Table columns={columns} dataSource={lienhe.map((ok, index) => (
                        {
                            key: index + 1,
                            sdt: <span>{ok.sdt}</span>,
                            name: <Link to={`${props.url}/chitietlienhe/${ok.id}`}>{ok.name}</Link>,
                            email: <span>{ok.email}</span>,
                            diachi: <span>{ok.diachi}</span>,
                            status: <div className="action">{ok.status === 1 ? <Link onClick={() => { handleStatus(ok.status, ok.id) }}><i className="far fa-thumbs-up "></i></Link> : <Link onClick={() => handleStatus(ok.status, ok.id)}><i className="far fa-thumbs-down "></i></Link>}</div>,
                            action:
                                <div className="action">
                                    <Popconfirm title="Bạn có muốn sửa？" onConfirm={() => { hangdleEdit(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                                        <Link ><i className="far fa-edit mr-4"></i></Link>
                                    </Popconfirm>
                                    <Popconfirm title="Bạn có muốn xoá？" onConfirm={() => { hangdleDelete(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                                        <Link ><i className="far fa-trash-alt" ></i></Link>
                                    </Popconfirm>
                                </div>
                        }))}
                        onChange={onChange} />
                }
            </div>
        </div>
    )
}

Lienhe.propTypes = {

}

export default Lienhe