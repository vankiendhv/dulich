import React, { useEffect, useState } from 'react'
import { Popconfirm, Spin, Table } from 'antd'
import { Link, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { QuestionCircleOutlined } from '@ant-design/icons';
import roomApi from '../../../../api/room';
import hotelApi from '../../../../api/hotel';
function Room() {
    const match = useRouteMatch();
    const [data, setData] = useState(undefined);
    const [infoHotel, setInfoHotel] = useState({});
    const [isReload, setIsReload] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        hotelApi.getOne(id).then(data => {
            setInfoHotel(data)
        })
        roomApi.getAll({ id }).then(data => {
            setData(data);
        })
    }, [isReload, id]);

    const columns = [
        {
            title: 'Tên phòng',
            dataIndex: 'name',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'status',
        },
        {
            title: 'Số người',
            dataIndex: 'total',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
        },
        {
            title: 'Loại phòng',
            dataIndex: 'typeRoom',
        },
        {
            title: 'Action',
            dataIndex: 'action'
        }
    ];

    const history = useHistory();

    const hangdleDelete = (id) => {
        roomApi.deleteRoom(id).then(data => {
            setIsReload(!isReload);
        })
    }

    const hangdleEdit = (idRoom) => {
        history.replace(`${match.url}/editRoom/${idRoom}`)
    }

    const handleUpdateStatus = (id, status) => {
        roomApi.editRoom({ id, status: !status }).then(data => {
            setIsReload(!isReload)
        })
    }

    return (
        <div id="admin">
            <div className="heading">
                <h4>Khách sạn {infoHotel?.name}</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <div className="add">
                    <Link to={`${match.url}/addRoom`}><Button variant="outlined" color="secondary"><i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới</Button></Link>
                </div>
                {!data ? <div className="spin"><Spin className="mt-5" /></div> :
                    <Table columns={columns} dataSource={data.map((ok, index) => (
                        {
                            key: index + 1,
                            name: <p>{ok.name}</p>,
                            status: <Link to="#" onClick={() => handleUpdateStatus(ok.id, ok.status)}>{!ok.status ? <i className="fas fa-battery-empty mr-4"></i> : <i className="fas fa-battery-full mr-4"></i>}</Link>,
                            price: <p>{ok.price.toLocaleString()} vnđ</p>,
                            total: <p>{ok.total.toLocaleString()}</p>,
                            typeRoom: <p>{ok.TypeRoom.name}</p>,
                            action:
                                <div className="action">
                                    <Popconfirm title="Bạn có muốn sửa？" onConfirm={() => { hangdleEdit(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                                        <Link to="#"><i className="far fa-edit mr-4"></i></Link>
                                    </Popconfirm>
                                    <Popconfirm title="Bạn có muốn xoá？" onConfirm={() => { hangdleDelete(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                                        <Link to="#"><i className="far fa-trash-alt" ></i></Link>
                                    </Popconfirm>
                                </div>
                        }))}
                    />
                }
            </div>
        </div>
    )
}

export default Room