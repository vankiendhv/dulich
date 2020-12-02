import { Button } from '@material-ui/core'
import { Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Themdiadiem extends Component {
    render() {
        return (
            <div id="admin">
                <div className="heading">
                    <h4>Thêm địa điểm</h4>
                    <div className="hr"></div>
                </div>
                <div className="content">
                    <form action="" method="post">
                        <div className="form-group">
                            <label htmlhtmlFor="">Quốc gia</label>
                            <Select defaultValue="ẩn" className="w-25 ml-4" onChange={this.handleChange}>
                                <Option value="ẩn">ẩn</Option>
                                <Option value="hiện">hiện</Option>
                            </Select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Địa điểm</label>
                            <input type="text" name="" id="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                        </div>
                        <div className="text-center mtb"><Button color="primary" variant="contained">Thêm địa điểm</Button></div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Themdiadiem)
