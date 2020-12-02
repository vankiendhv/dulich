import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Themquocgia extends Component {
    render() {
        return (
            <div id="admin">
                <div className="heading">
                    <h4>Thêm quốc gia</h4>
                    <div className="hr"></div>
                </div>
                <div className="content">
                    <form action="" method="post">
                        <div className="form-group">
                            <label htmlFor="">Tên quốc gia</label>
                            <input type="text" name="" id="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                        </div>
                        <div className="text-center mtb"><Button color="primary" variant="contained">Thêm quốc gia</Button></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Themquocgia)
