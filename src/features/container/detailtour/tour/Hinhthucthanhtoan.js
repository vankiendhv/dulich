import React, { Component } from 'react'
import { Radio } from 'antd';
import { connect } from 'react-redux'

export class Hinhthucthanhtoan extends Component {
    state = {
        value: 1,
    };

    onChange = e => {
        this.setState({
            value: e.target.value,
        });
    };
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        const { value } = this.state;
        return (
            <div>
                <Radio.Group onChange={this.onChange} value={value}>
                    <Radio style={radioStyle} value={1}>
                        Thanh toán trực tiếp
        </Radio>
                    <Radio style={radioStyle} value={2}>
                        Thanh toán phương thức chuyển khoản
        </Radio>
                    <Radio style={radioStyle} value={3}>
                        Thanh toán thẻ tín dụng
        </Radio>
                </Radio.Group>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Hinhthucthanhtoan)
