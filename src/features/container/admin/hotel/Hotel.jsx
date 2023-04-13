import React, { useEffect, useState } from 'react'
import { Popconfirm, Spin, Table } from 'antd'
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { QuestionCircleOutlined } from '@ant-design/icons';
import hotelApi from '../../../../api/hotel';
function Hotel() {
    const match = useRouteMatch();
    const [data, setData] = useState([]);
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        hotelApi.getAll().then(data => {
            setData(data);
        })
    }, [isReload]);

    const columns = [
        {
            title: 'Tên khách sạn',
            dataIndex: 'name',
        },
        {
            title: 'Phòng',
            dataIndex: 'room',
        },
        {
            title: 'Action',
            dataIndex: 'action'
        }
    ];

    const history = useHistory();

    const hangdleDelete = (id) => {
        hotelApi.deleteHotel(id).then(data => {
            setIsReload(!isReload);
        })
    }
    const hangdleEdit = (id) => {
        history.replace(`${match.url}/editHotel/${id}`)
    }

    return (
        <div id="admin">
            <div className="heading">
                <h4>Khách sạn</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <div className="add">
                    <Link to={`${match.url}/addHotel`}><Button variant="outlined" color="secondary"><i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới</Button></Link>
                </div>
                {!data.length ? <div className="spin"><Spin className="mt-5" /></div> :
                    <Table columns={columns} dataSource={data.map((ok, index) => (
                        {
                            key: index + 1,
                            name: <p>{ok.name}</p>,
                            room: <Link to={`/admin/room/${ok.id}`}><i className="fas fa-home mr-4"></i></Link>,
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

export default Hotel