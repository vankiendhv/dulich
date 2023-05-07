import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button } from "@material-ui/core";
import { Modal, Popconfirm, Popover, Spin, Table, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hoadonData, removehoadon } from "./hoadonSlice";
function Hoadon() {
    const [isShowHotel, setIsShowHotel] = useState(false);
    const [isShowService, setIsShowService] = useState(false);
    const [infoHotel, setInfoHotel] = useState({});
    const [infoService, setInfoService] = useState([]);
    const columns = [
        {
            title: "Người dùng",
            dataIndex: "name",
        },
        {
            title: "Số điện thoại",
            dataIndex: "sdt",
        },
        {
            title: "Tour",
            dataIndex: "tour",
        },
        {
            title: "Ngày đi",
            dataIndex: "date",
        },
        {
            title: "Số lượng",
            dataIndex: "soluong",
        },
        {
            title: "Khách sạn",
            dataIndex: "hotel",
        },
        {
            title: "Dịch vụ",
            dataIndex: "service",
        },
        {
            title: "Tổng tiền",
            dataIndex: "tien",
        },

        {
            title: "Action",
            dataIndex: "action",
        },
    ];

    const hoadons = useSelector((state) => state.hoadons.hoadon.data);
    const soluong = (nguoilon, treem, embe) => {
        return nguoilon + treem + embe;
    };
    const loading = useSelector((state) => state.hoadons.loading);
    const dispatch = useDispatch();
    const actionResult = async () => {
        await dispatch(hoadonData());
    };

    const hangdleDelete = (e) => {
        dispatch(removehoadon(e));
        setTimeout(() => {
            actionResult();
        }, 500);
    };
    const tongtien = (nguoilon, treem, embe, gnl, gte, geb) => {
        return (nguoilon * gnl + treem * gte + embe * geb).toLocaleString();
    };
    const title = (nguoilon, treem, embe) => {
        return (
            <div>
                <span>Người lớn: {nguoilon}</span>
                <br />
                <span>Trẻ em: {treem}</span>
                <br />
                <span>Em bé: {embe}</span>
            </div>
        );
    };

    const handleClickViewHotel = (hotelString) => {
        let hotel = JSON.parse(hotelString)
        const groupedHotel = hotel.reduce((groups, user) => {
            const hotelName = user.hotelName;
            if (!groups[hotelName]) {
                groups[hotelName] = [];
            }
            groups[hotelName].push(user);
            return groups;
        }, {});
        setIsShowHotel(true)
        setInfoHotel(groupedHotel)
    }

    const handleClickViewService = (service) => {
        setIsShowService(true)
        setInfoService(JSON.parse(service))
    }

    const handleOk = () => {
        setIsShowHotel(false)
    }

    const handleOkService = () => {
        setIsShowService(false)
    }
    return (
        <div id="admin">
            <div className="heading">
                <h4>Hoá đơn</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                {loading ? (
                    <div className="spin">
                        <Spin className="mt-5" />
                    </div>
                ) : (
                    <Table
                        columns={columns}
                        dataSource={hoadons.map((ok, index) => ({
                            key: index + 1,
                            name: <span>{ok.User.name}</span>,
                            sdt: <span>{ok.User.sdt}</span>,
                            tour: <span>{ok.Tour.name}</span>,
                            date: <span>{ok.ngaydi}</span>,
                            soluong: (
                                <Tooltip title={title(ok.nguoilon, ok.treem, ok.embe)}>
                                    <span>{soluong(ok.nguoilon, ok.treem, ok.embe)}</span>
                                </Tooltip>
                            ),
                            tien: (
                                <span>
                                    {ok.thanhtien?.toLocaleString()}{" "}
                                    vnđ
                                </span>
                            ),
                            hotel: (ok.hotel && <p onClick={() => handleClickViewHotel(ok.hotel)}>Open</p>),
                            service: ok.hotel && <p onClick={() => handleClickViewService(ok.service)}>Open</p>,
                            action: (
                                <div className="action">
                                    <Popconfirm
                                        title="Bạn có muốn xoá？"
                                        onConfirm={() => {
                                            hangdleDelete(ok.id);
                                        }}
                                        icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                                    >
                                        <i className="far fa-trash-alt"></i>
                                    </Popconfirm>
                                </div>
                            ),
                        }))}
                    />
                )}
            </div>
            <Modal title="Thông tin khách sạn" visible={isShowHotel} onOk={handleOk} onCancel={handleOk} width="50%">
                {Object.entries(infoHotel).map(([hotelName, room]) => (
                    <div key={hotelName}>
                        <p>Khách sạn: {hotelName}</p>
                        <div className="rooms">
                            <p>Phòng:</p>
                            <div className="row">
                                {
                                    room?.map(data => (
                                        <div className="col-md-6" style={{ marginBottom: 20 }} key={data.id} >
                                            <div className={`room`}>
                                                <img src={data.imgRooms[0]?.urlImg ?? "https://pix8.agoda.net/hotelImages/159186/71699211/70d12ed128533df944afc2bae811fa6e.jpg?ca=16&ce=1"} alt="" />
                                                <div className="content">
                                                    <div>
                                                        <h4>{data.name}</h4>
                                                        <div className="info">Giá: {data.price?.toLocaleString()} vnđ</div>
                                                        <div className="info">Số lượng: {data.total}</div>
                                                        <div className="info">Loại phòng: {data.TypeRoom.name}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </Modal>
            <Modal title="Thông tin dịch vụ" visible={isShowService} onOk={handleOkService} onCancel={handleOkService} width="50%">
                {infoService?.map(item => (
                    <div key={item.id} style={{
                        padding: "10px 0"
                    }}>
                        <span>Dịch vụ: {item.name}</span>
                        <br />
                        <span>Giá: {(item.price).toLocaleString()} vnđ</span>
                    </div>
                ))}
            </Modal>
        </div>
    );
}

export default Hoadon;
