import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Chitiettintuc extends Component {
    render() {
        return (
            <div id="admin">
                <div className="heading">
                    <h4>Chi tiết tin tức</h4>
                    <div className="hr"></div>
                </div>
                <div className="content">
                    <div className="ct">
                        <p>Tên tin tức:&emsp; <b><i>Những điều cần biết khi đi du lịch ở chợ bò</i></b></p>
                        <p>Tên tác giả:&emsp; <b><i>Trần thị lài em</i></b></p>
                        <p>Ngày đăng:&emsp; <b><i>20/10/2020</i></b></p>
                        <p>Facebook:&emsp; </p>
                        <p>Twitch:&emsp; </p>
                        <p>Instagram:&emsp; </p>
                        <p>Tóm tắt:&emsp;</p>
                        <div className="container">
                            <p>ok hello chao các bạn</p>
                        </div>
                        <p>Nội dung:</p>
                        <div className="container">
                            <p>ok cc</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Chitiettintuc)
