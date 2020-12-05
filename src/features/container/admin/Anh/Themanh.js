import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addanh, anhData, updateanh } from './anhSlice';

function Themanh(props) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [state, setState] = useState({ status: 1, name: '', idsua: '' });
    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }
    const actionResult = async () => { await dispatch(anhData()) }
    const history = useHistory()
    const anh = useSelector(state => state.anhs.anh.data.find(x => x.id === +id));
    useEffect(() => {
        if (id) {
            setState({
                status: anh.status,
                name: anh.name,
                idsua: id
            })
        }
    }, [])
    const { name } = state;
    const onSubmit = e => {
        e.preventDefault();
        if (id) {
            dispatch(updateanh(state));
        } else {
            const action = addanh(state);
            dispatch(action);
        }
        setTimeout(() => {
            actionResult();
        }, 700);
        history.push("/admin/anh");
    }
    return (
        <div id="admin">
            <div className="heading">
                <h4>{id ? "Sửa ảnh" : "Thêm ảnh"}</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <form action="" method="post" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Link ảnh</label>
                        <input type="text" name="name" value={name} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="text-center mtb"><Button type="submit" color="primary" variant="contained">{id ? "Sửa ảnh" : "Thêm ảnh"}</Button></div>
                </form>
            </div>
        </div>
    )
}

Themanh.propTypes = {

}

export default Themanh