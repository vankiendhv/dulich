
import { Button } from '@material-ui/core';
import { Spin, Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './tintuc.css'
import { removeTintuc, tintucData } from "./tintucSlice"
function Tintuc(props) {
    const dispatch = useDispatch()
    const tintucs = useSelector(state => state.tintucs.tintuc.data);
    const loading = useSelector(state => state.tintucs.Loading);
    const handleDelete = (e) => {
        console.log(e);
        const action = removeTintuc(e)
        dispatch(action);
    }
    const actionResult = async () => await dispatch(tintucData());
    useEffect(() => {
        actionResult();
    }, [])

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
            title: 'Ngày đăng',
            dataIndex: 'date',
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

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
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
                        author: <p>{ok.tacgia}</p>,
                        date: <p>{ok.date}</p>,
                        status: <div className="action">{ok.status === 1 ? <Link><i className="far fa-thumbs-up "></i></Link> : <Link><i className="far fa-thumbs-down "></i></Link>}</div>,
                        action: <div className="action"><Link to={`${props.url}/suatintuc/${ok.id}`}><i className="far fa-edit mr-4"></i></Link><Link ><i className="far fa-trash-alt" onClick={() => { handleDelete(ok.id) }}></i></Link></div>
                    }))}
                    onChange={onChange} />}
            </div>
        </div>
    )
}

Tintuc.propTypes = {

}

export default Tintuc
