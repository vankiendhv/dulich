import React, { useEffect, useState } from 'react'
import { Button, IconButton } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom';
import { Modal, Select, Upload, message } from 'antd';
import { Option } from 'antd/lib/mentions'
import roomApi from '../../../../api/room';
import { PlusOutlined } from '@ant-design/icons';
import { storage } from '../../../../firebase';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function AddRoom() {
    const { id: idHotel, idRoom } = useParams();
    const [state, setState] = useState({
        status: 1,
        name: '',
        description: "",
        total: 0,
        price: 0,
        idTypeRoom: 1,
        addPeople: 0,
        moneyForOne: 0,
        previewVisible: "",
        previewImage: "",
        fileList: [],
        previewTitle: "",

    });
    const [loading, setLoading] = useState(false);

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        if (idRoom) {
            roomApi.getOne(idRoom).then(data => {
                setState({
                    ...state,
                    status: data.status,
                    name: data.name,
                    total: data.total,
                    price: data.price,
                    addPeople: data.addPeople,
                    moneyForOne: data.moneyForOne,
                    idTypeRoom: data.typeRoomId,
                    description: data.description,
                })
            })
        }
    }, [idRoom])

    const { name, price, total, idTypeRoom, addPeople, moneyForOne, description, previewVisible, previewImage, fileList, previewTitle } = state;
    const history = useHistory();

    const handleTypeRoom = (id) => {
        setState({ ...state, idTypeRoom: id })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (name.trim() === "" || price <= 0 || total <= 0 || addPeople <= 0 || moneyForOne <= 0) {
            message.error("Xin hãy nhập đầy đủ thông tin!");
        } else {
            setLoading(true)
            let imgRooms = [];
            if (idRoom) {
                if (fileList.length) {
                    await roomApi.deleteImg(idRoom);

                    for (let i = 0; i < fileList.length; i++) {
                        await storage.ref(`imagesRoom/${fileList[i].originFileObj.name}`).put(fileList[i].originFileObj)
                        const linkImg = await storage.ref("imagesRoom").child(fileList[i].originFileObj.name).getDownloadURL();
                        imgRooms.push({ "roomId": idRoom, "urlImg": linkImg })
                    }
                    await roomApi.addImg(imgRooms);
                }
                roomApi.editRoom({ name, id: idRoom, typeRoomId: idTypeRoom, description, status: false, hotelId: +idHotel, price, total, addPeople, moneyForOne }).then(data => {
                    history.push(`/admin/room/${idHotel}`);
                })
            } else {
                for (let i = 0; i < fileList.length; i++) {
                    await storage.ref(`imagesRoom/${fileList[i].originFileObj.name}`).put(fileList[i].originFileObj)
                    const linkImg = await storage.ref("imagesRoom").child(fileList[i].originFileObj.name).getDownloadURL();
                    imgRooms.push({ "urlImg": linkImg })
                }
                roomApi.postRoom({ name, typeRoomId: idTypeRoom, description, status: false, hotelId: +idHotel, price, total, moneyForOne, addPeople, imgRooms }).then(data => {
                    history.push(`/admin/room/${idHotel}`);
                })
            }
        }
    }

    const handleChange = ({ fileList }) => {
        setState({ ...state, fileList: fileList });
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setState({
            ...state,
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    const handleCancel = () => setState({ ...state, previewVisible: false });

    return (
        <div id="admin">
            <div className="heading">
                <h4>{idRoom ? "Sửa phòng" : "Thêm phòng"}</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <form action="" method="post" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Tên phòng</label>
                        <input type="text" name="name" value={name} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Ảnh phòng</label>
                        <Upload
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
                        <label htmlFor="">Giá phòng</label>
                        <input type="number" min={0} name="price" value={price} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Số lượng</label>
                        <input type="number" min={0} name="total" value={total} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Số lượng người tối đa được chèn thêm</label>
                        <input type="number" min={0} name="addPeople" value={addPeople} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Giá cho một người thêm</label>
                        <input type="number" min={0} name="moneyForOne" value={moneyForOne} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Chi tiết phòng</label>
                        <textarea name="description" value={description} onChange={onChange} id="" cols="30" rows="10" className="form-control w-50"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Loại phòng</label>
                        <br />
                        <Select className="w-50" value={idTypeRoom} onChange={handleTypeRoom}>
                            <Option value={1}>Phòng thường</Option>
                            <Option value={2}>Phòng vip</Option>
                        </Select>
                    </div>

                    <div className="text-center mtb">
                        {loading ? <div className="spinner-border text-success" role="status"><span className="sr-only">Loading...</span></div> : ''}
                        <Button disabled={loading} type="submit" color="primary" variant="contained">{idRoom ? "Sửa phòng" : "Thêm phòng"}</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddRoom