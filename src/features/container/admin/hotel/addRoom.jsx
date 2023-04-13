import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom';
import { Select, message } from 'antd';
import { Option } from 'antd/lib/mentions'
import roomApi from '../../../../api/room';

function AddRoom() {
    const { id: idHotel, idRoom } = useParams();
    const [state, setState] = useState({ status: 1, name: '', description: "", total: 0, price: 0, idTypeRoom: 1, idsua: '', addPeople: 0, moneyForOne: 0 });

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
                    status: data.status,
                    name: data.name,
                    total: data.total,
                    price: data.price,
                    addPeople: data.addPeople,
                    moneyForOne: data.moneyForOne,
                    idTypeRoom: data.typeRoomId,
                })
            })
        }
    }, [idRoom])

    const { name, price, total, idTypeRoom, addPeople, moneyForOne } = state;
    const history = useHistory();

    const handleTypeRoom = (id) => {
        setState({ ...state, idTypeRoom: id })
    }

    const onSubmit = e => {
        e.preventDefault();
        if (name.trim() === "" || price <= 0 || total <= 0 || addPeople <= 0 || moneyForOne <= 0) {
            message.error("Xin hãy nhập đầy đủ thông tin!");
        } else {
            if (idRoom) {
                roomApi.editRoom({ name, id: idRoom, typeRoomId: idTypeRoom, status: false, hotelId: +idHotel, price, total, addPeople, moneyForOne }).then(data => {
                    history.push(`/admin/room/${idHotel}`);
                })
            } else {
                roomApi.postRoom({ name, typeRoomId: idTypeRoom, status: false, hotelId: +idHotel, price, total, moneyForOne, addPeople }).then(data => {
                    history.push(`/admin/room/${idHotel}`);
                })
            }
        }
    }
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
                        <label htmlFor="">Loại phòng</label>
                        <br />
                        <Select className="w-50" value={idTypeRoom} onChange={handleTypeRoom}>
                            <Option value={1}>Phòng thường</Option>
                            <Option value={2}>Phòng vip</Option>
                        </Select>
                    </div>

                    <div className="text-center mtb"><Button type="submit" color="primary" variant="contained">{idRoom ? "Sửa phòng" : "Thêm phòng"}</Button></div>
                </form>
            </div>
        </div>
    )
}

export default AddRoom