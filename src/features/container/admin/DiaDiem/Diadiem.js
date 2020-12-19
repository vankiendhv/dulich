import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Popconfirm, Spin, Table } from 'antd'
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { diadiemData, removediadiem, updatediadiem } from './diadiemSlice';
import { QuestionCircleOutlined } from '@ant-design/icons';

function Diadiem(props) {

    const columns = [
        {
            title: 'tên địa điểm',
            dataIndex: 'name',
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
    const diadiems = useSelector(state => state.diadiems.diadiem.data);
    const loading = useSelector(state => state.diadiems.loading)
    const dispatch = useDispatch();
    const actionResult = async () => { await dispatch(diadiemData()) }
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    useEffect(() => {
        //actionResult();
    }, [])
    const history = useHistory()
    const hangdleDelete = e => {
        dispatch(removediadiem(e));
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    const hangdleEdit = (id) => {
        history.replace(`${props.url}/suadiadiem/${id}`)
    }
    const handleStatus = (e, id) => {
        if (e === 1) {
            dispatch(updatediadiem({ status: 0, idsua: id }))
        } else {
            dispatch(updatediadiem({ status: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    return (
        <div id="admin">
            <div className="heading">
                <h4>Địa điểm</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <div className="add">
                    <Link to={`${props.url}/themdiadiem`}><Button variant="outlined" color="secondary"><i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới</Button></Link>
                </div>
                {loading ? <div className="spin"><Spin className="mt-5" /></div> :
                    <Table columns={columns} dataSource={diadiems.map((ok, index) => (
                        {
                            key: index + 1,
                            name: <span>{ok.name}</span>,
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

Diadiem.propTypes = {

}

export default Diadiem