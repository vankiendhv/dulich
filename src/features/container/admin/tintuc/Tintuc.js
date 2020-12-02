
import { Button } from '@material-ui/core';
import { Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './tintuc.css'
import { fetchPosts, removeTintuc } from "./tintucSlice"
function Tintuc(props) {
    const dispatch = useDispatch()
    const tintucs = useSelector(state => state.tintucs);
    const handleDelete = (e) => {
        console.log(e);
        const action = removeTintuc(e)
        dispatch(action);
    }
    // useEffect(() => {
    //     console.log(fetchPosts);
    // }, [])
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
    var sts = 1;

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    }

    const data = () => {

        if (tintucs !== "") {
            var tt = (tintucs.map((ok, index) => (
                {
                    key: index + 1,
                    name: <p>{ok.name}</p>,
                    author: <p>{ok.author}</p>,
                    date: <p>{ok.date}</p>,
                    status: <div className="action">{sts === 1 ? <Link><i className="far fa-thumbs-up "></i></Link> : <Link><i className="far fa-thumbs-down "></i></Link>}</div>,
                    action: <div className="action"><Link to={`${props.url}/suatintuc/${ok.id}`}><i className="far fa-edit mr-4"></i></Link><Link ><i className="far fa-trash-alt" onClick={() => { handleDelete(ok.id) }}></i></Link></div>
                }
            )))
            console.log(tt);
            return (
                tt
            );
        } else {
            return [];
        }
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
                {/* <div className="text-right">
                <span>(*) Bấm vào <strong>tiêu đề</strong> để xem chi tiết</span><br />
                <span><i className="far fa-thumbs-up text-primary"></i> : hiện  <i className="far fa-thumbs-down text-danger ml-4"></i> : ẩn</span>
            </div> */}
                <Table columns={columns}
                    // dataSource={
                    //     tintucs.map((ok, index) => (
                    //         {
                    //             key: index + 1,
                    //             name: <p>{ok.name}</p>,
                    //             author: <p>{ok.author}</p>,
                    //             date: <p>{ok.date}</p>,
                    //             status: <div className="action">{sts === 1 ? <Link><i className="far fa-thumbs-up "></i></Link> : <Link><i className="far fa-thumbs-down "></i></Link>}</div>,
                    //             action: <div className="action"><Link to={`${props.url}/suatintuc/${ok.id}`}><i className="far fa-edit mr-4"></i></Link><Link ><i className="far fa-trash-alt" onClick={() => { handleDelete(ok.id) }}></i></Link></div>
                    //         }))}
                    onChange={onChange} />
                {/* <table class="table table-striped table-inverse table-responsive">
                    <thead class="thead-inverse">
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>author</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>2</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
                <table width="100%">
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>author</th>
                        <th>date</th>
                        <th>action</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                </table> */}
            </div>
        </div>
    )
}

Tintuc.propTypes = {

}

export default Tintuc
