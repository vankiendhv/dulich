import { Button, Carousel, Modal, Rate } from 'antd'
import React from 'react'
import img1 from "../../hotels/img/1.jpg"
import img6 from "../../hotels/img/6.jpg"


export default function ModalDetailRoom({ isModalRoom = true, onOk, data, onChoose, isRoomActive }) {
    console.log('data:', data)

    const handleOk = () => {
        onOk()
    }

    return (
        <Modal title="Chi tiết phòng" visible={isModalRoom} onOk={handleOk} onCancel={handleOk} width="80%" >
            <div id="detailHotel">
                <div className="content container">
                    <div className="content___title">
                        <div className="content___title---name">
                            <h3>{data.name}</h3>
                        </div>
                        <div className="content___title---star">
                            Đánh giá:<Rate className="pl-2 mr-3" disabled defaultValue={4} /> 4/5 trong Đánh giá
                        </div>
                    </div>
                    <hr />
                    <div className="content___box row">
                        <div className="col-md-8">
                            <div className="content___box---slide">
                                {data?.imgRooms?.length ?
                                    <Carousel autoplay >
                                        {data.imgRooms?.map(ok => (
                                            <div className="w-100 h-100" key={ok.id}>
                                                <img src={ok.urlImg} width="760px" height="400px" alt="" />
                                            </div>
                                        ))}

                                    </Carousel>
                                    : <Carousel autoplay >
                                        <div className="w-100 h-100">
                                            <img src="https://pix8.agoda.net/hotelImages/159186/71699211/70d12ed128533df944afc2bae811fa6e.jpg?ca=16&ce=1" width="760px" height="400px" alt="" />
                                        </div>
                                    </Carousel>
                                }
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pdBox">
                                <div className="content___box---infor"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-around",
                                        height: "100%"
                                    }}
                                >
                                    <div className="content___box---infor---table">
                                        <table>
                                            <tr>
                                                <td className="pr-5">Số sao</td>
                                                <td><Rate disabled defaultValue={4} /></td>
                                            </tr>
                                            <tr>
                                                <td className="pr-5">Tổng số người</td>
                                                <td>{data.total}</td>
                                            </tr>
                                            <tr>
                                                <td className="pr-5">Giá từ</td>
                                                <td>{data.price?.toLocaleString()} vnđ</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="content___box---infor---btn">
                                        <Button onClick={(e) => onChoose(e, data)} className="btn-dt pl-5 pr-5" variant="contained" color="secondary">
                                            {isRoomActive ? "Bỏ chọn" : "Chọn ngay"}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ marginTop: 20 }}>
                    <div>
                        {data.description}
                    </div>
                </div>
            </div>
        </Modal>
    )
}
