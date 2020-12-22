
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button } from '@material-ui/core';
import { Popconfirm, Spin, Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { dichvuData, removedichvu, updatedichvu } from './dichvuSlice';
function Dichvu(props) {

    const columns = [
        {
            title: 'Loại tour',
            dataIndex: 'name',
        },
        {
            title: 'Mô tả',
            dataIndex: 'mota',
        },
        {
            title: 'icon',
            dataIndex: 'icon',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'status',
        },
        {
            title: 'hiện trang chủ',
            dataIndex: 'loadhome',
        },
        {
            title: 'Action',
            dataIndex: 'action'
        }
    ];

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    const dichvus = useSelector(state => state.dichvus.dichvu.data);
    const loading = useSelector(state => state.dichvus.loading)
    const dispatch = useDispatch();
    const actionResult = async () => { await dispatch(dichvuData()) }

    const history = useHistory()
    const hangdleDelete = e => {
        dispatch(removedichvu(e));
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    const hangdleEdit = (id) => {
        history.replace(`${props.url}/suadichvu/${id}`)
    }
    const handleStatus = (e, id) => {
        if (e === 1) {
            dispatch(updatedichvu({ status: 0, idsua: id }))
        } else {
            dispatch(updatedichvu({ status: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    const handleLoadhome = (e, id) => {
        if (e === 1) {
            dispatch(updatedichvu({ loadhome: 0, idsua: id }))
        } else {
            dispatch(updatedichvu({ loadhome: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }

    return (
        <div id="admin">
            <div className="heading">
                <h4>Dịch vụ</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <div className="add">
                    <Link to={`${props.url}/themdichvu`}><Button variant="outlined" color="secondary"><i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới</Button></Link>
                </div>
                {loading ? <div className="spin"><Spin className="mt-5" /></div> :
                    <Table columns={columns} dataSource={dichvus.map((ok, index) => (
                        {
                            key: index + 1,
                            name: <span>{ok.name}</span>,
                            mota: <span>{ok.mota}</span>,
                            icon: <span className={`${ok.icon} text-success`} style={{ fontSize: "1.5rem" }}></span>,
                            loadhome: <div className="action">{ok.loadhome === 1 ? <Link onClick={() => { handleLoadhome(ok.loadhome, ok.id) }}><i className="fas fa-check text-success "></i></Link> : <Link onClick={() => handleLoadhome(ok.loadhome, ok.id)}><i className="fas fa-times text-danger"></i></Link>}</div>,
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
                    />
                }
            </div>
        </div>
    )
}

Dichvu.propTypes = {

}

export default Dichvu