import { Button } from '@material-ui/core'
import { message, Select, Spin } from 'antd'
import { Option } from 'antd/lib/mentions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { quocgiaData } from '../Quocgia/quocgiaSlice';
import { adddiadiem, diadiemData, updatediadiem } from './diadiemSlice';

function Themdiadiem(props) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const diadiem = useSelector(state => state.diadiems.diadiem.data.find(x => x.id === +id));
    useEffect(() => {
        if (id) {
            setState({
                ...state,
                status: diadiem.status,
                name: diadiem.name,
                quocgiaId: diadiem.quocgiaId,
                idsua: id
            })
        }
    }, [])
    const [state, setState] = useState({ name: '', quocgiaId: 9, status: 1, idsua: '' });
    const quocgias = useSelector(state => state.quocgias.quocgia.data);
    const loading = useSelector(state => state.quocgias.loading);
    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const actionResult = async () => { await dispatch(diadiemData()) }
    const actionQuocgia = async () => { await dispatch(quocgiaData()) }
    const history = useHistory()
    const onSubmit = e => {
        e.preventDefault();
        if (state.name !== '') {
            if (id) {
                dispatch(updatediadiem(state));
            } else {
                dispatch(adddiadiem(state))
            }
        } else {
            message.error("Xin hãy nhập thông tin!");
        }
        setTimeout(() => {
            actionResult();
            actionQuocgia();
        }, 700);
        history.push("/admin/diadiem");
    }
    const onId = e => {
        setState({
            ...state,
            quocgiaId: e
        })
    }
    const { name, quocgiaId } = state
    return (
        <div id="admin">
            <div className="heading">
                <h4>{id ? "Sửa địa điểm" : "Thêm địa điểm"}</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <form action="" method="post" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlhtmlFor="">Quốc gia</label>
                        {loading ?
                            <span>
                                <Select className="w-25 ml-4" >
                                </Select><Spin />
                            </span>
                            :
                            <Select defaultValue={quocgiaId} onChange={onId} className="w-25 ml-4" >
                                {quocgias.map(ok => (
                                    <Option value={ok.id} > {ok.name}</Option>
                                ))}
                            </Select>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Địa điểm</label>
                        <input type="text" name="name" value={name} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="text-center mtb"><Button color="primary" type="submit" variant="contained">{id ? "Sửa địa điểm" : "Thêm địa điểm"}</Button></div>
                </form>
            </div>
        </div >

    )
}

Themdiadiem.propTypes = {

}

export default Themdiadiem