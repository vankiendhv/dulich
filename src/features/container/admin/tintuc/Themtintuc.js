
import React, { useEffect, useState } from 'react'
import { Button, IconButton } from '@material-ui/core'
import { message, Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import { useDispatch, useSelector } from 'react-redux'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { addtintuc, tintucData, updatetintuc } from './tintucSlice'
import { useHistory, useParams } from 'react-router-dom'
import { storage } from "../../../../firebase"
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
function Themtintuc(props) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const actionResult = async () => { await dispatch(tintucData()) }
    // const actionTintuctag = async () => { await dispatch(tintuctagData()) }
    const [state, setState] = useState({ tenanh: '', name: '', idsua: '', status: 1, facebook: '', twitch: '', instagram: '', tag: [], anh: '', img: '', linkImg: '', tomtat: '', content: '', tacgia: '', tagId: [] })
    useEffect(() => {
        // actionTintuctag();
        actionResult();
        //     if (id) {
        //         setState({
        //             status: tintuc.status,
        //             name: tintuc.name,
        //             idsua: id
        //         })
        //     }
        return (
            setState({
                ...state,
                tag: data
            })
        )
    }, [])
    // const editorConfiguration = {
    //     plugins: [Essentials, Bold, Italic, Paragraph],
    //     toolbar: ['bold', 'italic']
    // };
    const { tenanh, linkImg, img, name, tacgia, tag, facebook, twitch, instagram, anh, content, status, tomtat, tagId } = state;
    const onSubmit = e => {
        e.preventDefault();
        if (name === "" || img === "" || tacgia === "" || facebook === "" || twitch === "" || instagram === "" || content === "" || tomtat === "") {
            message.error("Xin hãy nhập đầy đủ thông tin!");
        } else {
            if (id) {
                dispatch(updatetintuc(state));
            } else {
                upFirebase();
                var TintucTags = []
                for (let i = 0; i < tagId.length; i++) {
                    TintucTags.push({ tagId: tagId[i] })
                }
                dispatch(addtintuc({ name, content, tomtat, facebook, instagram, twitch, status, tacgia, TintucTags }));

            }
            setTimeout(() => {
                actionResult();
            }, 800);
            history.push("/admin/tintuc");
        }
    }
    const tags = useSelector(state => state.tags.tag.data);
    const data = [];

    for (let i = 0; i < tags.length; i++) {
        data.push(<Option key={tags[i].id}>{tags[i].name}</Option>);
    }

    const tintuc = useSelector(state => state.tintucs.tintuc.data.find(x => x.id === +id))
    const tintucs = useSelector(state => state.tintucs.tintuc.data)
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleChange = (value) => {
        setState({
            ...state,
            tagId: value
        })
    }
    const hangdelimage = (e) => {
        setState({
            ...state,
            linkImg: URL.createObjectURL(e.target.files[0]),
            tenanh: e.target.files[0].name,
            img: e.target.files[0],
        });
    }

    const upFirebase = () => {
        const uploadTask = storage.ref(`images/${img.name}`).put(img);
        uploadTask.on(
            "state_change",
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(img.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                        setState({
                            ...state,
                            anh: "ok"
                        })
                    })
            }
        )
    }
    return (
        <div id="admin">
            <div className="heading">
                <h4>Thêm tin tức</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <form action="" method="post" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Tiêu đề bài viết</label>
                        <input type="text" name="name" value={name} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="">Thêm poster</label>
                            <input accept="image/*" id="icon-button-file" type="file" onChange={hangdelimage} />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" className="mr-5 ml-4" aria-label="upload picture" component="span">
                                    <i className="fas fa-camera-retro"></i>
                                </IconButton>
                            </label>
                            {linkImg ? <img src={linkImg} className="ml-5" height="150px" width="250px" alt="" /> : ''}
                            <br />
                            <span>{tenanh}</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Tóm tắt</label>
                        <textarea name="tomtat" onChange={onChange} cols="30" value={tomtat} className="form-control w-50" rows="4"></textarea>
                    </div>
                    <div className="form-group ">
                        <label htmlFor="">Nội dung</label>
                        <CKEditor
                            // config={editorConfiguration}
                            editor={ClassicEditor}
                            name="content"
                            value={content}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setState({
                                    ...state,
                                    content: data
                                })
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Tác giả</label>
                        <input type="text" name="tacgia" value={tacgia} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Facebook</label>
                        <input type="text" name="facebook" value={facebook} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Twitch</label>
                        <input type="text" name="twitch" value={twitch} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Instagram</label>
                        <input type="text" name="instagram" value={instagram} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Tags liên quan</label>
                        <Select mode="tags" onChange={handleChange} className="w-50 ml-4" placeholder="Tags Mode">
                            {tag}
                        </Select>
                    </div>
                    <div className="text-center mtb"><Button type="submit" variant="contained" color="primary" >{id ? "Sửa tin tức" : "Thêm tin"}</Button></div>
                </form>
            </div>
        </div>
    )
}

Themtintuc.propTypes = {

}

export default Themtintuc