
import React, { useState } from 'react'
import { Button, IconButton } from '@material-ui/core'
import { Select, Upload } from 'antd'
import { Option } from 'antd/lib/mentions'
import { useDispatch, useSelector } from 'react-redux'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory, useParams } from 'react-router-dom'
import "./tour.css"
import Modal from 'antd/lib/modal/Modal'
import { PlusOutlined } from '@ant-design/icons'
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
function Themtintuc(props) {
    const handleChangea = (value) => {
        console.log(`selected ${value}`);
    }
    // const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        //     if (!tintuc) {
        //         e.preventDefault();
        //         const action = addTintuc(e);
        //         console.log({ action });
        //         dispatch(action);
        //         history.push('/admin/tintuc')
        //         return;
        //     } else {
        //         console.log("edit");
        //     }
    }
    const children = [];
    // for (let i = 10; i < 36; i++) {
    //     children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    // }
    // const tintuc = useSelector(state => state.tintucs.find(x => x.id === id))
    // console.log({ tintuc });
    // const [name, editname] = useState(tintuc ? tintuc.name : '')
    // const onChange = (e) => {
    //     editname(e.target.value)
    // }

    const [tour, setTour] = useState({
        linkImg: '', nameImg: '', img: '', previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [],
    })
    const hangdelimage = (e) => {
        setTour({
            ...tour,
            linkImg: URL.createObjectURL(e.target.files[0]),
            nameImg: e.target.files[0].name,
            img: e.target.files,
        });
    }

    const handleCancel = () => setTour({ ...tour, previewVisible: false });

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setTour({
            ...tour,
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };


    const { linkImg, nameImg, img, previewVisible, previewImage, fileList, previewTitle } = tour;
    const handleChange = ({ fileList }) => setTour({ ...tour, fileList: fileList }); console.log(fileList);;
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <div id="admin">
            <div className="heading">
                <h4>Thêm tour</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <form action="" method="post" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Tên tour</label>
                        <input type="text" name="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Thêm poster</label>
                        <div >
                            <input accept="image/*" id="icon-button-file" type="file" onChange={hangdelimage} />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" className="mr-5 ml-4" aria-label="upload picture" component="span">
                                    <i className="fas fa-camera-retro"></i>
                                </IconButton>
                            </label>
                            {linkImg ? <img src={linkImg} className="ml-5" height="150px" width="100px" alt="" /> : ''}
                            <br />
                            <span>{nameImg}</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Banner</label>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}
                        >
                            {fileList.length >= 8 ? null : uploadButton}
                        </Upload>
                        <Modal
                            visible={previewVisible}
                            title={previewTitle}
                            footer={null}
                            onCancel={handleCancel}
                        >
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Loại tour</label>
                        <input type="text" name="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Trailer</label>
                        <input type="text" name="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Giá người lớn</label>
                        <input type="text" name="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Giá trẻ em</label>
                        <input type="text" name="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Giá em bé</label>
                        <input type="text" name="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Bản đồ</label>
                        <input type="text" name="" className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="">Chi tiết tour</label>
                        <CKEditor
                            editor={ClassicEditor}
                        />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="">Lưu ý</label>
                        <CKEditor
                            editor={ClassicEditor}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Tình trạng</label>
                        <Select defaultValue="ẩn" className="w-25 ml-4" onChange={handleChange}>
                            <Option value="ẩn">ẩn</Option>
                            <Option value="hiện">hiện</Option>
                        </Select>
                    </div>
                    <div className="text-center mtb"><Button type="submit" variant="contained" color="primary" >Thêm tour</Button></div>
                </form>
            </div>
        </div>

    )
}

Themtintuc.propTypes = {

}

export default Themtintuc