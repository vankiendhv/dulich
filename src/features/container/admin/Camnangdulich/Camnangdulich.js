import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Popconfirm, Spin, Table } from 'antd'
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { camnangdulichData, removecamnangdulich, updatecamnangdulich } from './camnangdulichSlice';
import { QuestionCircleOutlined } from '@ant-design/icons';

function Camnangdulich(props) {

    const columns = [
        {
            title: 'tên',
            dataIndex: 'name',
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
            title: 'Action',
            dataIndex: 'action'
        }
    ];
    const camnangdulichs = useSelector(state => state.camnangdulichs.camnangdulich.data);
    const loading = useSelector(state => state.camnangdulichs.loading)
    const dispatch = useDispatch();
    const actionResult = async () => { await dispatch(camnangdulichData()) }
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    useEffect(() => {
        //actionResult();
    }, [])
    const history = useHistory()
    const hangdleDelete = e => {
        dispatch(removecamnangdulich(e));
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    const hangdleEdit = (id) => {
        history.replace(`${props.url}/suacamnangdulich/${id}`)
    }
    const handleStatus = (e, id) => {
        if (e === 1) {
            dispatch(updatecamnangdulich({ status: 0, idsua: id }))
        } else {
            dispatch(updatecamnangdulich({ status: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    return (
        <div id="admin">
            <div className="heading">
                <h4>Cẩm nang du lịch</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <div className="add">
                    <Link to={`${props.url}/themcamnangdulich`}><Button variant="outlined" color="secondary"><i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới</Button></Link>
                </div>
                {loading ? <div className="spin"><Spin className="mt-5" /></div> :
                    <Table columns={columns} dataSource={camnangdulichs.map((ok, index) => (
                        {
                            key: index + 1,
                            name: <span>{ok.name}</span>,
                            icon: <span>{ok.icon}</span>,
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

Camnangdulich.propTypes = {

}

export default Camnangdulich