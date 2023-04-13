import React, { useEffect, useState } from 'react';
import { Modal, Select } from 'antd';
import hotelApi from "../../../../api/hotel"
import roomApi from "../../../../api/room"
import { Option } from 'antd/lib/mentions';
import "./room.css"

const ModalHotel = ({ isModalHotelOpen = true, setIsModalHotelOpen }) => {

    const [hotels, setHotels] = useState([]);
    const [valueHotel, setValueHotel] = useState(null);
    const [roomActive, setRoomActive] = useState([]);

    const [rooms, setRooms] = useState(null);

    useEffect(() => {
        hotelApi.getAll().then(data => {
            setValueHotel(data[0].id)
            setHotels(data)
        })
    }, []);

    useEffect(() => {
        if (valueHotel) {
            roomApi.getAll({ id: valueHotel, status: false }).then(data => {
                setRooms(data)
            })
        }
    }, [valueHotel]);

    const handleOk = () => {
        // setIsModalHotelOpen(false);
    };

    const handleCancel = () => {
        // setIsModalHotelOpen(false);
    };

    const onChange = (value) => {
        setValueHotel(value)
    }

    const handleClickRoom = (room) => {
        let index = roomActive.findIndex(r => r?.id === room.id)
        if (index >= 0) {
            let newData = [...roomActive];
            newData.splice(index, 1);
            setRoomActive(newData)
        } else {
            setRoomActive((prev) => [...prev, room])
        }
    }

    const checkRoomActive = (room) => {
        return roomActive.some(r => r.id === room.id && r.hotelId === room.hotelId);
    }

    const handleAddPeople = (event) => {
        event.stopPropagation()
        console.log("ok")
    }

    return (
        <Modal title="Khách sạn" visible={isModalHotelOpen} onOk={handleOk} onCancel={handleCancel} width="80%">
            <p>Chọn khách sạn:</p>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a hotel"
                onChange={onChange}
                value={valueHotel}
                filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {hotels.map(data => (
                    <Option value={data.id} key={data.id}>{data.name}</Option>
                ))}
            </Select>
            <div className="rooms">
                <p>Phòng:</p>
                <div className="row">
                    {
                        rooms?.map(data => (
                            <div className="col-md-6" style={{ marginBottom: 20 }} key={data.id}
                                onClick={() => handleClickRoom(data)}
                            >
                                <div className={`room ${checkRoomActive(data) ? 'active' : null}`}>
                                    <img src="https://pix8.agoda.net/hotelImages/159186/71699211/70d12ed128533df944afc2bae811fa6e.jpg?ca=16&ce=1" alt="" />
                                    <div className="content">
                                        <div>
                                            <h4>{data.name}</h4>
                                            <div className="info">Giá: {data.price?.toLocaleString()} vnđ</div>
                                            <div className="info">Số lượng: {data.total}</div>
                                            <div className="info">Loại phòng: {data.TypeRoom.name}</div>
                                            <button onClick={handleAddPeople}>Thêm người</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Modal>
    );
};
export default ModalHotel;