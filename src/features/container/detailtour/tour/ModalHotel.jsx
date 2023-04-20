import React, { useEffect, useState } from 'react';
import { Modal, Select } from 'antd';
import hotelApi from "../../../../api/hotel"
import roomApi from "../../../../api/room"
import { Option } from 'antd/lib/mentions';
import "./room.css"
import ModalDetailRoom from './ModalDetailRoom';

const ModalHotel = ({ isModalHotelOpen = true, onClose, onOK, idAddress }) => {

    const [hotels, setHotels] = useState([]);
    const [valueHotel, setValueHotel] = useState(null);
    const [roomActive, setRoomActive] = useState([]);
    const [isModalAddPeople, setIsModalAddPeople] = useState(false);
    const [valueAddPeople, setValueAddPeople] = useState(0);
    const [infoRoomActive, setInfoRoomActive] = useState({});
    const [isModalRoom, setIsModalRoom] = useState(false);

    const [rooms, setRooms] = useState(null);

    useEffect(() => {
        hotelApi.getFollowAddress(idAddress).then(data => {
            if (data.length > 0) {
                setValueHotel(data[0].id)
                setHotels(data)
            }
        })
    }, [idAddress]);

    useEffect(() => {
        if (valueHotel) {
            roomApi.getAll({ id: valueHotel, status: false }).then(data => {
                setRooms(data)
            })
        }
    }, [valueHotel]);

    const handleOk = () => {
        onOK(roomActive);
    };

    const handleCancel = () => {
        onClose()
    };

    const onChange = (value) => {
        setValueHotel(value)
    }

    const handleClickRoom = (e, room) => {
        e.stopPropagation()
        let index = roomActive.findIndex(r => r?.id === room.id)
        if (index >= 0) {
            let newData = [...roomActive];
            newData.splice(index, 1);
            setRoomActive(newData)
        } else {
            setInfoRoomActive(room);
            setRoomActive((prev) => [...prev, room])
        }
        setIsModalRoom(false)
    }

    const checkRoomActive = (room) => {
        return roomActive.some(r => r.id === room.id && r.hotelId === room.hotelId);
    }

    const handleAddPeople = (e) => {
        e.stopPropagation()
        setIsModalAddPeople(true);
    }

    const handleAddPeopleOk = () => {
        let data = { ...infoRoomActive };
        let dataRoomActive = [...roomActive]
        let index = roomActive.findIndex(r => r?.id === infoRoomActive.id);
        const { price: priceDefault, total: totalDefault, moneyForOne } = rooms.filter(r => r.id === infoRoomActive.id)[0];
        data.price = priceDefault + (valueAddPeople * moneyForOne);
        data.total = +totalDefault + +valueAddPeople;
        dataRoomActive[index] = data;

        setValueAddPeople(0);
        setRoomActive(dataRoomActive);
        setIsModalAddPeople(false)
    }

    const handlePeopleCancel = () => {
        setIsModalAddPeople(false)
    }

    const onChangeAddPeople = (e) => {
        const { value } = e.target;
        if (value <= infoRoomActive.addPeople) setValueAddPeople(value)
    }

    const getTotalPrice = (data) => {
        return data.reduce((a, b) => (a + b.price), 0)
    }

    const handleClickOkDetailRoom = () => {
        setIsModalRoom(false)
    }

    const handleClickBoxRoom = (data) => {
        setInfoRoomActive(data);
        setIsModalRoom(true);
    }

    return (
        <Modal title="Khách sạn" visible={isModalHotelOpen} onOk={handleOk} onCancel={handleCancel} width="80%">
            {hotels.length == 0 ?
                <p>Không có khách sạn nào ở địa điểm này</p> :
                <>
                    <div>
                        <p>Phòng đã chọn</p>
                        {
                            roomActive.length ?
                                <>
                                    <ul>
                                        {roomActive.map(room => (
                                            <li key={room.id}>Phòng: {room.name}, số người: {room.total?.toLocaleString()}, giá tiền: {room.price?.toLocaleString()} vnđ</li>
                                        ))}
                                    </ul>
                                    <p>Tổng tiền phòng: {getTotalPrice(roomActive)?.toLocaleString()} vnđ</p>
                                </> :
                                <center>Chưa chọn phòng nào</center>
                        }
                    </div>
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
                        {rooms?.length ?
                            <div className="row">
                                {
                                    rooms?.map(data => (
                                        <div className="col-md-6" style={{ marginBottom: 20 }} key={data.id} onClick={() => handleClickBoxRoom(data)}>
                                            <div className={`room ${checkRoomActive(data) ? 'active' : null}`}>
                                                <img src={data.imgRooms[0]?.urlImg ?? "https://pix8.agoda.net/hotelImages/159186/71699211/70d12ed128533df944afc2bae811fa6e.jpg?ca=16&ce=1"} alt="" />
                                                <div className="content">
                                                    <div>
                                                        <h4>{data.name}</h4>
                                                        <div className="info">Giá: {data.price?.toLocaleString()} vnđ</div>
                                                        <div className="info">Số lượng: {data.total}</div>
                                                        <div className="info">Loại phòng: {data.TypeRoom.name}</div>
                                                        <button onClick={(e) => handleClickRoom(e, data)} className={`btn-choose ${checkRoomActive(data) ? 'active' : null}`}>{checkRoomActive(data) ? 'Bỏ chọn' : 'Chọn phòng'} </button>
                                                        {checkRoomActive(data) && <button onClick={handleAddPeople} className='btn-add-people'>Thêm người</button>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            :
                            <center>Hết phòng</center>

                        }
                    </div>
                </>
            }
            <Modal title="Thêm người" visible={isModalAddPeople} onOk={handleAddPeopleOk} onCancel={handlePeopleCancel} width="50%">
                <form action="" method="post">
                    <p>Với 1 người thêm giá phòng sẽ được tăng thêm: {infoRoomActive?.moneyForOne?.toLocaleString()} vnđ</p>
                    <p>Số lượng người tối đa được thêm: {infoRoomActive.addPeople?.toLocaleString()}</p>
                    <div className="form-group">
                        <label htmlFor="">Nhập số lượng thêm</label>
                        <input type="number" min={0} name="valueAddPeople" max={infoRoomActive.addPeople} value={valueAddPeople} onChange={onChangeAddPeople} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                </form>
            </Modal>
            <ModalDetailRoom isRoomActive={checkRoomActive(infoRoomActive)} isModalRoom={isModalRoom} onOk={handleClickOkDetailRoom} data={infoRoomActive} onChoose={handleClickRoom} />

        </Modal>
    );
};
export default ModalHotel;