import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom';
import { message } from 'antd';
import hotelApi from '../../../../api/hotel';

function AddHotel() {
    const { id } = useParams();
    const [state, setState] = useState({ status: 1, name: '', description: "", idsua: '' });

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        if (id) {
            hotelApi.getOne(id).then(data => {
                console.log(data)
                setState({
                    status: data.status,
                    name: data.name,
                    description: data.description,
                    idsua: id
                })
            })
        }
    }, [id])

    const { name, description } = state;
    const history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        if (name.trim() === "" || description.trim() === "") {
            message.error("Xin hãy nhập đầy đủ thông tin!");
        } else {
            if (id) {
                hotelApi.editHotel({ name, description, id }).then(data => {
                    history.push("/admin/hotel");
                })
            } else {
                hotelApi.postHotel({ name, description }).then(data => {
                    history.push("/admin/hotel");
                })
            }
        }
    }
    return (
        <div id="admin">
            <div className="heading">
                <h4>{id ? "Sửa khách sạn" : "Thêm khách sạn"}</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <form action="" method="post" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Tên khách sạn</label>
                        <input type="text" name="name" value={name} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Thông tin khách sạn</label>
                        <br />
                        <textarea name="description" value={description} className="form-control w-50" onChange={onChange} cols="30" rows="5"></textarea>
                    </div>
                    <div className="text-center mtb"><Button type="submit" color="primary" variant="contained">{id ? "Sửa khách sạn" : "Thêm khách sạn"}</Button></div>
                </form>
            </div>
        </div>
    )
}

export default AddHotel