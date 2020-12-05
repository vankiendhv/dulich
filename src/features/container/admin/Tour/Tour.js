
import { Button } from '@material-ui/core';
import { Spin, Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { tourData } from './tourSlice';
function Tintuc(props) {
    const dispatch = useDispatch()
    const tours = useSelector(state => state.tours.tour.data);
    const loading = useSelector(state => state.tours.Loading);
    const actionResult = async () => await dispatch(tourData());
    useEffect(() => {
        actionResult();
    }, [])

    const columns = [
        {
            title: 'Tên tour',
            dataIndex: 'name',
        },
        {
            title: "Ảnh",
            dataIndex: "image"
        },
        {
            title: 'tình trạng',
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
                <h4>Quản lý tour</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <div className="add">
                    <Link to={`${props.url}/themtour`}><Button variant="outlined" color="secondary"><i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới</Button></Link>
                </div>
                {loading ? <div className="spin"><Spin className="mt-5" /></div> :
                    <Table columns={columns} dataSource={tours.map((ok, index) => (
                        {
                            key: index + 1,
                            name: <Link to={`${props.url}/chitiettour/${ok.id}`}>{ok.name}</Link>,
                            status: <div className="action">{ok.status === 1 ? <Link><i className="far fa-thumbs-up "></i></Link> : <Link><i className="far fa-thumbs-down "></i></Link>}</div>,
                            action: <div className="action"><Link to={`${props.url}/suatintuc/${ok.id}`}><i className="far fa-edit mr-4"></i></Link><Link ><i className="far fa-trash-alt"></i></Link></div>
                        }))}
                        onChange={onChange} />}
            </div>
        </div>
    )
}

Tintuc.propTypes = {

}

export default Tintuc
