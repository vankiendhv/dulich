
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button } from '@material-ui/core';
import { Popconfirm, Spin, Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import './tintuc.css'
import { removetintuc, tintucData, updatetintuc } from "./tintucSlice"
function Tintuc(props) {
    const dispatch = useDispatch()
    const tintucs = useSelector(state => state.tintucs.tintuc.data);
    const loading = useSelector(state => state.tintucs.Loading);

    const actionResult = async () => await dispatch(tintucData());
    const columns = [
        {
            title: 'Tiêu đề',
            dataIndex: 'name',
        },
        {
            title: 'Tác giả',
            dataIndex: 'author',
        },
        {
            title: 'Ảnh',
            dataIndex: 'anh',
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


    const history = useHistory()
    const hangdleDelete = e => {
        dispatch(removetintuc(e));
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    const hangdleEdit = (id) => {
        history.replace(`${props.url}/suatintuc/${id}`)
    }
    const handleStatus = (e, id) => {
        if (e === 1) {
            dispatch(updatetintuc({ status: 0, idsua: id }))
        } else {
            dispatch(updatetintuc({ status: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }

    return (
        <div id="admin">
            <div className="heading">
                <h4>Quản lý tin tức</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <div className="add">
                    <Link to={`${props.url}/themtintuc`}><Button variant="outlined" color="secondary"><i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới</Button></Link>
                </div>
                {loading ? <div className="spin"><Spin className="mt-5" /></div> : <Table columns={columns} dataSource={tintucs.map((ok, index) => (
                    {
                        key: index + 1,
                        name: <Link to={`${props.url}/chitiettintuc/${ok.id}`}>{ok.name}</Link>,
                        author: <span>{ok.tacgia}</span>,
                        anh: <img src={ok.anh} width="200px" height="150px" alt="" />,
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
                />}
            </div>
        </div>
    )
}

Tintuc.propTypes = {

}

export default Tintuc
