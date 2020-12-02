import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Table } from 'antd'
import { Button } from '@material-ui/core';

const columns = [
    {
        title: 'Loại tour',
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
var sts = 1;
const data = [
    {
        key: '1',
        name: <div><Link>John Brown</Link></div>,
        status: <div className="action">{sts === 1 ? <Link><i className="far fa-thumbs-up "></i></Link> : <Link><i className="far fa-thumbs-down "></i></Link>}</div>,
        action: <div className="action"><Link><i className="far fa-edit mr-4"></i></Link><Link><i className="far fa-trash-alt"></i></Link></div>
    },
    {
        key: '2',
        name: 'Jim Green',
        status: <div className="action"><Link><i className="far fa-thumbs-down "></i></Link></div>,
    },
    {
        key: '3',
        name: 'Joe Black',
        status: 70,
    },
    {
        key: '4',
        name: 'Jim Red',
        status: 89,
    },
    {
        key: '5',
        name: 'Jim Red',
        status: 89,
    },
    {
        key: '6',
        name: 'Jim Red',
        status: 89,
    },
    {
        key: '7',
        name: 'Jim Red',
        status: 89,
    },
    {
        key: '8',
        name: 'Jim Red',
        status: 89,
    },
    {
        key: '9',
        name: 'Jim Red',
        status: 89,
    },
    {
        key: '10',
        name: 'Jim Red',
        status: 89,
    },
    {
        key: '11',
        name: 'Jim Red',
        status: 89,
    },
];
function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}
export class Loaitour extends Component {
    render() {
        return (
            <div id="admin">
                <div className="heading">
                    <h4>Loại tour</h4>
                    <div className="hr"></div>
                </div>
                <div className="content">
                    <div className="add">
                        <Link to={`${this.props.url}/themloaitour`}><Button variant="outlined" color="secondary"><i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới</Button></Link>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Loaitour)
