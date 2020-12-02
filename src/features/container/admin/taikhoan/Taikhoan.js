import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'
import { Link } from 'react-router-dom'
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
var sts = 1;
const data = [
    {
        key: '1',
        name: <Link>John Brown</Link>,
        email: 98,
        avatar: 60,
        status: <div className="action">{sts === 1 ? <Link><i className="far fa-thumbs-up "></i></Link> : <Link><i className="far fa-thumbs-down "></i></Link>}</div>,
        action: <div className="action"><Link><i className="far fa-edit mr-4"></i></Link><Link><i className="far fa-trash-alt"></i></Link></div>
    },
    {
        key: '2',
        name: 'Jim Green',
        email: 98,
        avatar: 66,
        status: <div className="action"><Link><i className="far fa-thumbs-down"></i></Link></div>,
    },
    {
        key: '3',
        name: 'Joe Black',
        email: 98,
        avatar: 90,
        status: 70,
    },
    {
        key: '4',
        name: 'Jim Red',
        email: 88,
        avatar: 99,
        status: 89,
    },
    {
        key: '5',
        name: 'Jim Red',
        email: 88,
        avatar: 99,
        status: 89,
    },
    {
        key: '6',
        name: 'Jim Red',
        email: 88,
        avatar: 99,
        status: 89,
    },
    {
        key: '7',
        name: 'Jim Red',
        email: 88,
        avatar: 99,
        status: 89,
    },
    {
        key: '8',
        name: 'Jim Red',
        email: 88,
        avatar: 99,
        status: 89,
    },
    {
        key: '9',
        name: 'Jim Red',
        email: 88,
        avatar: 99,
        status: 89,
    },
    {
        key: '10',
        name: 'Jim Red',
        email: 88,
        avatar: 99,
        status: 89,
    },
    {
        key: '11',
        name: 'Jim Red',
        email: 88,
        avatar: 99,
        status: 89,
    },
];
function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}
export class Taikhoan extends Component {
    render() {
        return (
            <div id="admin">
                <div className="heading">
                    <h4>Quản lý tài khoản</h4>
                    <div className="hr"></div>
                </div>
                <div className="content">
                    <Table columns={columns} dataSource={data} onChange={onChange} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Taikhoan)
