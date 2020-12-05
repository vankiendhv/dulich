import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Popconfirm, Spin, Table } from 'antd'
import { Button } from '@material-ui/core';
import { binhluanData, removebinhluan, updatebinhluan } from './binhluanSlice';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
function Binhluan(props) {
    const columns = [
        {
            title: 'Người dùng',
            dataIndex: 'user',
        },
        {
            title: 'Tuor',
            dataIndex: 'tour',
        },
        {
            title: 'Bình luận',
            dataIndex: 'binhluan',
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
    const binhluans = useSelector(state => state.binhluans.binhluan.data);
    const loading = useSelector(state => state.binhluans.loading)
    const dispatch = useDispatch();
    const actionResult = async () => { await dispatch(binhluanData()) }
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    useEffect(() => {
        //actionResult();
    }, [])
    const history = useHistory()
    const hangdleDelete = e => {
        dispatch(removebinhluan(e));
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    const hangdleInfor = (id) => {
        history.push(`/admin/chitietbinhluan/${id}`)
    }
    const handleStatus = (e, id) => {
        if (e === 1) {
            dispatch(updatebinhluan({ status: 0, idsua: id }))
        } else {
            dispatch(updatebinhluan({ status: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    return (
        <div id="admin">
            <div className="heading">
                <h4>Bình luận</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <div className="add">
                    {/* <Link to={`${props.url}/thembinhluan`}><Button variant="outlined" color="secondary"><i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới</Button></Link> */}
                </div>
                {loading ? <div className="spin"><Spin className="mt-5" /></div> :
                    <Table columns={columns} dataSource={binhluans.map((ok, index) => (
                        {
                            key: index + 1,
                            user: <p>{ok.User.name}</p>,
                            tour: <p>{ok.Tour.name}</p>,
                            binhluan: <p>{ok.binhluan}</p>,
                            status: <div className="action">{ok.status === 1 ? <Link onClick={() => { handleStatus(ok.status, ok.id) }}><i className="far fa-thumbs-up "></i></Link> : <Link onClick={() => handleStatus(ok.status, ok.id)}><i className="far fa-thumbs-down "></i></Link>}</div>,
                            action:
                                <div className="action">
                                    <Link onClick={() => hangdleInfor(ok.id)}><i className="fas fa-info-circle mr-4"></i></Link>
                                    <Popconfirm title="Bạn có muốn xoá？" onConfirm={() => { hangdleDelete(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                                        <Link ><i className="far fa-trash-alt" ></i></Link>
                                    </Popconfirm>
                                </div>
                        }))}
                        onChange={onChange} />
                }
            </div>

        </div >

    )
}

Binhluan.propTypes = {

}

export default Binhluan