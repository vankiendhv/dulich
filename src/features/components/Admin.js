import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from "./../container/admin/nav/Nav"
export class Admin extends Component {
    render() {
        return (
            <div>
                <Nav url={this.props.url} path={this.props.path} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
