import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Themloaitour extends Component {
    render() {
        return (
            <div id="admin">
                <div className="heading">
                    <h4>Thêm loại tour</h4>
                    <div className="hr"></div>
                </div>
                <div className="content">
                    <form action="" method="post">
                        <div className="form-group">
                            <label htmlFor="">Tên loại tour</label>
                            <input type="text" name="" id="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                        </div>
                        <div className="text-center mtb"><Button color="primary" variant="contained">Thêm loại tour</Button></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Themloaitour)
