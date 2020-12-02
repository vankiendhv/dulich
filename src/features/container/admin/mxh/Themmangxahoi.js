import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Themmangxahoi extends Component {
    render() {
        return (
            <div id="admin">
                <div className="heading">
                    <h4>Thêm mạng xã hội</h4>
                    <div className="hr"></div>
                </div>
                <div className="content">
                    <form action="" method="post">
                        <div className="form-group">
                            <label htmlFor="">Tên mạng xã hội</label>
                            <input type="text" name="" id="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">icon</label>
                            <input type="text" name="" id="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Mã màu</label>
                            <input type="text" name="" id="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                        </div>
                        <div className="text-center mtb"><Button variant="contained" color="primary">Thêm mạng xã hội</Button></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Themmangxahoi)
