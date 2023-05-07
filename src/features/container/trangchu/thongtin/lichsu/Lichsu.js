import React, { useState } from 'react'
import "./lichsu.css"
import { Modal, Spin } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function Lichsu() {
    const [isShowHotel, setIsShowHotel] = useState(false);
    const [isShowService, setIsShowService] = useState(false);
    const [infoHotel, setInfoHotel] = useState({});
    const [infoService, setInfoService] = useState([]);
    const infor = useSelector(state => state.infor.infor.data)
    const hoadons = useSelector(state => state.hoadons.hoadon.data)
    let thongtin = []
    if (hoadons && infor) {
        for (let i = 0; i < hoadons.length; i++) {
            if (hoadons[i].userId === infor.id) {
                thongtin.push(hoadons[i])
            }
        }
    }

    const handleClickViewHotel = (e, hotelString) => {
        let hotel = JSON.parse(hotelString)
        const groupedHotel = hotel.reduce((groups, user) => {
            const hotelName = user.hotelName;
            if (!groups[hotelName]) {
                groups[hotelName] = [];
            }
            groups[hotelName].push(user);
            return groups;
        }, {});
        e.stopPropagation()
        e.preventDefault()
        setIsShowHotel(true)
        setInfoHotel(groupedHotel)
    }

    const handleClickViewService = (e, service) => {
        e.preventDefault()
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
        <div className="history">
            <div className="history__header">
                <h3 className='text-center'>Lịch sử đặt tour</h3>
                <div className="hr"></div>
            </div>
            <div className="history__content">
                {thongtin.length === 0 ? <div className="spin"><Spin className="mt-5" /></div> :
                    thongtin.map((ok, index) => (
                        <Link to={`/tour/${ok.tourId}`} key={index}>
                            <div className="history__box" style={{ position: "relative" }} >
                                <div style={{
                                    top: 10,
                                    right: 10,
                                    position: 'absolute',
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 5,
                                    zIndex: 1000
                                }}>
                                    {
                                        ok.hotel &&
                                        <button onClick={(e) => handleClickViewHotel(e, ok.hotel)}>xem khách sạn</button>
                                    }
                                    {
                                        ok.service &&
                                        <button onClick={(e) => handleClickViewService(e, ok.service)}>xem dịch vụ</button>
                                    }
                                </div>
                                <img src={ok.Tour.avatar} alt="" />
                                <div className="history__tour">
                                    <div className="history--title">
                                        <div className="history--name">{ok.Tour.name}</div>
                                    </div>
                                    <div className="history--infor">
                                        <table>
                                            <tr>
                                                <th>Ngày khởi hành &emsp;&emsp;</th>
                                                <th>{ok.ngaydi}</th>
                                            </tr>
                                            <tr>
                                                <th>Thời gian</th>
                                                <th>{ok.Tour.thoigian}</th>
                                            </tr>
                                            <tr>
                                                <th>Nơi khởi hành</th>
                                                <th>Vinh</th>
                                            </tr>
                                        </table>
                                        <table className="nmn">
                                            <tr>
                                                <th>Số người lớn &emsp;&emsp;</th>
                                                <th>{ok.nguoilon}</th>
                                            </tr>
                                            <tr>
                                                <th>Số trẻ em</th>
                                                <th>{ok.treem}</th>
                                            </tr>
                                            <tr>
                                                <th>Số em bé</th>
                                                <th>{ok.embe}</th>
                                            </tr>
                                            <tr>
                                                <th>Tổng tiền</th>
                                                <th>{(ok.thanhtien)?.toLocaleString()} vnđ</th>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
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
    )
}
