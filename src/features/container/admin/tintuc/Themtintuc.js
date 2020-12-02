
import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import { connect, useDispatch, useSelector } from 'react-redux'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { addTintuc } from './tintucSlice'
import { useHistory, useParams } from 'react-router-dom'
function Themtintuc(props) {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        if (!tintuc) {
            e.preventDefault();
            const action = addTintuc(e);
            console.log({ action });
            dispatch(action);
            history.push('/admin/tintuc')
            return;
        } else {
            console.log("edit");
        }
    }
    const children = [];
    // for (let i = 10; i < 36; i++) {
    //     children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    // }
    const tintuc = useSelector(state => state.tintucs.find(x => x.id === id))
    console.log({ tintuc });
    const [name, editname] = useState(tintuc ? tintuc.name : '')
    const onChange = (e) => {
        editname(e.target.value)
    }
    return (
        <div id="admin">
            <div className="heading">
                <h4>Thêm tin tức</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <form action="" method="post" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Tiêu đề bài viết</label>
                        <input type="text" name="" value={name} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Tóm tắt</label>
                        <input type="text" name="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="">Nội dung</label>
                        <CKEditor
                            editor={ClassicEditor}
                        // onReady={editor => {
                        //     // You can store the "editor" and use when it is needed.
                        //     console.log('Editor is ready to use!', editor);
                        // }}
                        // onChange={(event, editor) => {
                        //     const data = editor.getData();
                        //     console.log({ event, editor, data });
                        // }}
                        // onBlur={(event, editor) => {
                        //     console.log('Blur.', editor);
                        // }}
                        // onFocus={(event, editor) => {
                        //     console.log('Focus.', editor);
                        // }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Tác giả</label>
                        <input type="text" name="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Facebook</label>
                        <input type="text" name="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Twitch</label>
                        <input type="text" name="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Instagram</label>
                        <input type="text" name="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Tình trạng</label>
                        <Select defaultValue="ẩn" className="w-25 ml-4" onChange={handleChange}>
                            <Option value="ẩn">ẩn</Option>
                            <Option value="hiện">hiện</Option>
                        </Select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Tags liên quan</label>
                        <Select mode="tags" className="w-25 ml-4" placeholder="Tags Mode">
                            {children}
                        </Select>
                    </div>
                    <div className="text-center mtb"><Button type="submit" variant="contained" color="primary" >{tintuc ? "Sửa tin tức" : "Thêm tin"}</Button></div>
                </form>
            </div>
        </div>

    )
}

Themtintuc.propTypes = {

}

export default Themtintuc




