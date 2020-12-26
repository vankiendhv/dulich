
import React, { useEffect, useState } from 'react'
import { Button, IconButton } from '@material-ui/core'
import { Checkbox, Col, Row, Select, Spin, Upload } from 'antd'
import { Option } from 'antd/lib/mentions'
import { useDispatch, useSelector } from 'react-redux'
import JoditEditor from "jodit-react";
import { useHistory, useParams } from 'react-router-dom'
import "./tour.css"
import Modal from 'antd/lib/modal/Modal'
import { storage } from "../../../../firebase"
import { PlusOutlined } from '@ant-design/icons'
import { addtour, tourData } from './tourSlice'
import { loaitourData } from '../Loaitour/loaitourSlice'
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
function Themtour(props) {
    const hangdlevitri = e => {
        setState({
            ...state,
            vitri: e
        })
    }
    // const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const actionResult = async () => { await dispatch(tourData()) }
    const actionloaitour = async () => { await dispatch(loaitourData()) }
    useEffect(() => {
        //actionloaitour()
    }, [])
    const loaitour = useSelector(state => state.loaitours.loaitour.data)
    const dichvu = useSelector(state => state.dichvus.dichvu.data)
    const loadloaitour = useSelector(state => state.loaitours.loading)
    const [state, setState] = useState({ vitri: 1, dichvuId: [], diadiemId: [], loaitourId: [], load: false, linkImg: '', tenanh: '', img: '', previewVisible: false, previewImage: '', previewTitle: '', fileList: [], name: '', avatar: '', gianguoilon: '', giatreem: '', giaembe: '', trailer: '', bando: '', status: 1 })
    const { vitri, linkImg, dichvuId, name, diadiemId, loaitourId, load, avatar, status, bando, giaembe, gianguoilon, giatreem, trailer, tenanh, img, previewVisible, previewImage, fileList, previewTitle } = state;
    const onSubmit = async (e) => {
        e.preventDefault();
        // if (name.trim() === "" || tenanh.trim() === "" || tacgia.trim() === "" || facebook.trim() === "" || twitch.trim() === "" || instagram.trim() === "" || content.trim() === "" || tomtat.trim() === "") {
        //     message.error("Xin hãy nhập đầy đủ thông tin!");
        // } else {
        //     if (id) {
        //         if (img != undefined) {
        //             storage.ref(`images/${img.name}`).put(img);
        //             const anh = await storage.ref("images").child(img.name).getDownloadURL();
        //             var tourTags = []
        //             for (let i = 0; i < tagId.length; i++) {
        //                 tourTags.push({ tagId: tagId[i] })
        //             }
        //             dispatch(updatetour({ idsua, name, content, tomtat, facebook, instagram, twitch, status, tacgia, anh, tenanh, tourTags }));
        //         } else {
        //             var tourTags = []
        //             for (let i = 0; i < tagId.length; i++) {
        //                 tourTags.push({ tagId: tagId[i] })
        //             }
        //             dispatch(updatetour({ idsua, name, content, tomtat, facebook, instagram, twitch, status, tacgia, anh, tenanh, tourTags }));
        //         }
        //     } else {
        setState({ ...state, load: true })
        await storage.ref(`imagestour/${img.name}`).put(img)
        const avatar = await storage.ref("imagestour").child(img.name).getDownloadURL();
        var Anhs = [];
        for (let i = 0; i < fileList.length; i++) {
            await storage.ref(`imagestour/${fileList[i].originFileObj.name}`).put(fileList[i].originFileObj)
            const banner = await storage.ref("imagestour").child(fileList[i].originFileObj.name).getDownloadURL();
            Anhs.push({ tenanh: fileList[i].originFileObj.name, link: banner, banner: 0, status: 1 })
        }
        var TourLoaitours = [];
        for (let i = 0; i < loaitourId.length; i++) {
            TourLoaitours.push({ loaitourId: loaitourId[i] })
        }
        var DichvuTours = [];
        for (let i = 0; i < dichvuId.length; i++) {
            DichvuTours.push({ dichvuId: dichvuId[i] })
        }
        var TourDiadiems = [];
        for (let i = 0; i < diadiemId.length; i++) {
            TourDiadiems.push({ diadiemId: diadiemId[i] })
        }
        var TourNgaydis = [];
        for (let i = 0; i < ngaydiId.length; i++) {
            TourNgaydis.push({ ngaydiId: ngaydiId[i] });
        }
        await dispatch(addtour({ name, vitri, luuy, chitiettour, status, tenanh, avatar, gianguoilon, giatreem, giaembe, trailer, bando, Anhs, TourDiadiems, TourLoaitours, DichvuTours, TourNgaydis }));
        //     }
        setTimeout(() => {
            actionResult();
        }, 800);
        history.push("/admin/tour");
        // }
    }
    //const children = [];
    // for (let i = 10; i < 36; i++) {
    //     children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    // }
    // const tour = useSelector(state => state.tours.find(x => x.id === id))
    // console.log({ tour });

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const data = [];

    for (let i = 0; i < loaitour.length; i++) {
        data.push(<Option key={loaitour[i].id}>{loaitour[i].name}</Option>);
    }
    const dichvudata = [];

    for (let i = 0; i < dichvu.length; i++) {
        dichvudata.push(<Option key={dichvu[i].id}>{dichvu[i].name}</Option>);
    }

    const [luuy, setluuy] = useState('')
    const [chitiettour, setchitiettour] = useState('')

    const hangdelimage = (e) => {
        setState({
            ...state,
            linkImg: URL.createObjectURL(e.target.files[0]),
            tenanh: e.target.files[0].name,
            img: e.target.files[0],
        });
    }

    const handleCancel = () => setState({ ...state, previewVisible: false });

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


    const handleChange = ({ fileList }) => {
        setState({ ...state, fileList: fileList });
    };
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const onId = e => {
        setState({
            ...state,
            loaitourId: e
        })
    }
    const ondichvu = e => {
        setState({
            ...state,
            dichvuId: e
        })
    }
    const quocgias = useSelector(state => state.quocgias.quocgia.data)
    var tenquocgia = [];
    for (let i = 0; i < quocgias.length; i++) {
        tenquocgia.push(quocgias[i])
    }
    var dd = [];
    for (let i = 0; i < quocgias.length; i++) {
        var d_d = [];
        for (let j = 0; j < quocgias[i].Diadiems.length; j++) {
            d_d.push({ id: quocgias[i].Diadiems[j].id, name: quocgias[i].Diadiems[j].name })
        }
        var qg = quocgias[i].id
        dd.push({ qg: qg, diadiem: d_d })
    }
    const quocgiaData = tenquocgia;
    const [laydiadiem, setlaydiadiem] = useState([]);
    const handlequocgiaChange = value => {
        setlaydiadiem(dd.find(x => x.qg === +value).diadiem)
    };
    var selectdiadiem = []

    for (let i = 0; i < laydiadiem.length; i++) {
        selectdiadiem.push(<Option key={laydiadiem[i].id}>{laydiadiem[i].name}</Option>);
    }
    const onSeconddiadiemChange = value => {
        setState({ ...state, diadiemId: value })
    };
    const [isModalVisible, setIsModalVisible] = useState(false);
    const ngaydi = useSelector(state => state.ngaydis.ngaydi.data);
    const loadingngaydi = useSelector(state => state.ngaydis.loading);
    const [ngaydiId, setngaydiId] = useState([])
    const onchangeNgaydi = (e) => {
        setngaydiId(e)
    }
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancelModal = () => {
        setIsModalVisible(false);
    }
    return (
        <div id="admin">
            <div className="heading">
                <h4>Thêm tour</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <form action="" method="post" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Tên tour</label>
                        <input type="text" name="name" value={name} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Vị trí</label><br />
                        <Select className="w-50" value={vitri} onChange={hangdlevitri}>
                            <Option value={1}>Trong nước</Option>
                            <Option value={2}>Nước ngoài</Option>
                        </Select><br />
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
                            <span>{tenanh}</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Banner</label>
                        <Upload
                            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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
                        <label htmlFor="">Ngày đi</label>

                        <span className="text-warning" onClick={showModal}>
                            <IconButton color="primary" className="mr-5 ml-4" aria-label="upload picture" component="span">
                                <i className="far fa-calendar-alt" ></i>
                            </IconButton>
                        </span>
                        <div className="form-group">
                            <Modal title="Chọn ngày khởi hành" visible={isModalVisible} onOk={handleOk} onCancel={handleCancelModal}>
                                <Checkbox.Group style={{ width: '100%' }} onChange={onchangeNgaydi}>
                                    {loadingngaydi ? <div className="spin"><Spin className="mt-5" /></div> :
                                        ngaydi.map(ok => (
                                            <Row key={ok.id}>
                                                <Col span={8}>
                                                    <Checkbox value={ok.id}>{ok.ngay}</Checkbox>
                                                </Col>
                                            </Row>
                                        ))
                                    }
                                </Checkbox.Group>
                            </Modal>
                        </div>
                        <label htmlFor="">Dịch vụ</label><br />
                        {loadloaitour ?
                            <span>
                                <Select className="w-25 ml-4" >
                                </Select><Spin />
                            </span>
                            :
                            <Select mode="tags" onChange={ondichvu} className="w-50" placeholder="Tags Mode">
                                {dichvudata}
                            </Select>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Loại tour</label><br />
                        {loadloaitour ?
                            <span>
                                <Select className="w-25 ml-4" >
                                </Select><Spin />
                            </span>
                            :
                            <Select mode="tags" onChange={onId} className="w-50" placeholder="Tags Mode">
                                {data}
                            </Select>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Quốc gia</label><br />
                        <Select className="w-50" onChange={handlequocgiaChange}>
                            {quocgiaData.map(quocgia => (
                                <Option key={quocgia.id}>{quocgia.name}</Option>
                            ))}
                        </Select><br />
                        <label htmlFor="">Địa điểm</label><br />

                        <Select mode="tags" onChange={onSeconddiadiemChange} className="w-50" placeholder="Tags Mode">
                            {selectdiadiem}
                        </Select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Trailer</label>
                        <input type="text" name="trailer" value={trailer} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Giá người lớn</label>
                        <input type="number" name="gianguoilon" value={gianguoilon} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Giá trẻ em</label>
                        <input type="number" name="giatreem" value={giatreem} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Giá em bé</label>
                        <input type="number" name="giaembe" value={giaembe} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Bản đồ</label>
                        <input type="text" name="bando" value={bando} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="">Chi tiết tour</label>
                        <JoditEditor
                            value={chitiettour}
                            tabIndex={1} // tabIndex of textarea
                            onChange={e => setchitiettour(e)}
                        />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="">Lưu ý</label>
                        <JoditEditor
                            value={luuy}
                            tabIndex={1} // tabIndex of textarea
                            onChange={e => setluuy(e)}
                        />
                    </div>

                    <div className="text-center mtb">
                        {load ? <div className="spinner-border text-success" role="status"><span className="sr-only">Loading...</span></div> : ''}
                        <Button type="submit" variant="contained" color="primary">Thêm tour</Button>
                    </div>
                </form>
            </div>
        </div>

    )
}

Themtour.propTypes = {

}

export default Themtour