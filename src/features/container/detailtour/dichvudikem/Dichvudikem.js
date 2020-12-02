import React, { Component } from 'react'
import { connect } from 'react-redux'
import './dichvudikem.css'
export class Dichvudikem extends Component {
    render() {
        return (
            <div>
                <div className="heading-nx">
                    <h3>Đánh giá</h3>
                </div>
                <div className="container">
                    <div className="dichvudikem">
                        <p>
                            • Bữa ăn theo chương trình <br />
                        • Bảo hiểm <br />
                        • Hướng dẫn viên <br />
                        • Vé tham quan <br />
                        • Vận chuyển
                    </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dichvudikem)
