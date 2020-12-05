import React, { useEffect } from 'react'
import { Spin, Table } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { userData } from './taikhoanSlice';

function Taikhoan(props) {
    const columns = [
        {
            title: 'tên',
            dataIndex: 'name',
        },
        {
            title: 'email',
            dataIndex: 'email',
        },
        {
            title: 'ảnh',
            dataIndex: 'avatar',
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
    const users = useSelector(state => state.taikhoan.user.data);
    const loading = useSelector(state => state.taikhoan.loading)
    const dispatch = useDispatch();
    const actionResult = async () => { await dispatch(userData()) }
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    useEffect(() => {
        //actionResult();
    }, [])
    return (
        <div id="admin">
            <div className="heading">
                <h4>Quản lý tài khoản</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                {loading ? <div className="spin"><Spin className="mt-5" /></div> :
                    <Table columns={columns} dataSource={users.map((ok, index) => (
                        {
                            key: index + 1,
                            name: <Link to={`${props.url}/chitiettaikhoan/${ok.id}`}>{ok.name}</Link>,
                            email: <p>{ok.email}</p>,
                            avatar: ok.avatar ? <img width="100px" height="120px" src={ok.avatar} alt="" /> : <img width="100px" height="120px" src="https://i.pinimg.com/originals/2b/df/58/2bdf587201cb0ad510f41391b6410621.png" alt="" />,
                            status: <div className="action">{ok.status === 1 ? <Link><i className="far fa-thumbs-up "></i></Link> : <Link><i className="far fa-thumbs-down "></i></Link>}</div>,
                            action: <div className="action"><Link to={`${props.url}/suatintuc/${ok.id}`}><i className="far fa-edit mr-4"></i></Link><Link ><i className="far fa-trash-alt" ></i></Link></div>
                        }))}
                        onChange={onChange} />
                }
            </div>
        </div>
    )
}

Taikhoan.propTypes = {

}

export default Taikhoan