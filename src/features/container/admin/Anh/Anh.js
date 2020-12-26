
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popconfirm, Spin, Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { anhData, removeanh, updateanh } from './anhSlice';
function Anh(props) {

    const columns = [
        {
            title: 'Tour',
            dataIndex: 'name',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'status',
        },
        {
            title: 'Ảnh',
            dataIndex: 'link',
        },
        {
            title: 'Banner',
            dataIndex: 'banner',
        },
        {
            title: 'Action',
            dataIndex: 'action'
        }
    ];

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    const anhs = useSelector(state => state.anhs.anh.data);
    const loading = useSelector(state => state.anhs.loading)
    const dispatch = useDispatch();
    const actionResult = async () => { await dispatch(anhData()) }

    const history = useHistory()
    const hangdleDelete = e => {
        dispatch(removeanh(e));
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    const hangdleEdit = (id) => {
        history.replace(`${props.url}/suaanh/${id}`)
    }
    const handleStatus = (e, id) => {
        if (e === 1) {
            dispatch(updateanh({ status: 0, idsua: id }))
        } else {
            dispatch(updateanh({ status: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    const handleBanner = (e, id) => {
        if (e === 1) {
            dispatch(updateanh({ banner: 0, idsua: id }))
        } else {
            dispatch(updateanh({ banner: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    return (
        <div id="admin">
            <div className="heading">
                <h4>Ảnh</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <div className="add">
                    {/* <Link to={`${props.url}/`}><Button variant="outlined" color="secondary"><i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới</Button></Link> */}
                </div>
                {loading ? <div className="spin"><Spin className="mt-5" /></div> :
                    <Table columns={columns} dataSource={anhs.map((ok, index) => (
                        {
                            key: index + 1,
                            name: <span>{ok.Tour.name}</span>,
                            link: <img src={ok.link} width="200px" height="150px" alt="" />,
                            banner: <div className="action">{ok.banner === 1 ? <Link onClick={() => { handleBanner(ok.banner, ok.id) }}><i className="fas fa-check text-success"></i></Link> : <Link onClick={() => handleBanner(ok.banner, ok.id)}><i className="fas fa-times text-danger"></i></Link>}</div>,
                            status: <div className="action">{ok.status === 1 ? <Link onClick={() => { handleStatus(ok.status, ok.id) }}><i className="far fa-thumbs-up "></i></Link> : <Link onClick={() => handleStatus(ok.status, ok.id)}><i className="far fa-thumbs-down "></i></Link>}</div>,
                            action:
                                <div className="action">

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

Anh.propTypes = {

}

export default Anh