import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Drawer, message } from 'antd';
import { Button } from '@material-ui/core';

function Suathongtin(props) {
    const [state, setState] = useState({
        collapsed2: false,
        visible2: true
    });
    console.log("ok");
    const onClose2 = () => {
        setState({
            ...state,
            visible2: false
        })
    };
    const onChange = (e) => {
        console.log(e);
    }
    const name = ''
    return (
        <div>
            {/* <Drawer
                style={{ zIndex: '100001' }}
                className="drawer-menu"
                title="Sửa thông tin cá nhân"
                placement="right"
                onClose={onClose2}
                visible={state.visible2}
            >
                <form action="" method="post">
                    <div className="form-group">
                        <label htmlFor="">Tên người dùng</label>
                        <input type="text" name="name" value={name} onChange={onChange} className="form-control " placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Giới tính</label>
                        <input type="text" name="name" value={name} onChange={onChange} className="form-control " placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Số điện thoại</label>
                        <input type="text" name="name" value={name} onChange={onChange} className="form-control " placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Địa chỉ</label>
                        <input type="text" name="name" value={name} onChange={onChange} className="form-control " placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Ngày sinh</label>
                        <input type="text" name="name" value={name} onChange={onChange} className="form-control " placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Tiêu đề bài viết</label>
                        <input type="text" name="name" value={name} onChange={onChange} className="form-control " placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="text-center">
                        <Button variant="contained" color="primary" className=" mt-2">Sửa đổi</Button>
                    </div>
                </form>
            </Drawer>*/}
        </div>
    )
}

Suathongtin.propTypes = {

}

export default Suathongtin

