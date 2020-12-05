import { Spin } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
function Chitietquocgia(props) {
    const { id } = useParams();
    const tour = useSelector(state => state.tours.tour.data.find(x => x.id === +id));
    const loading = useSelector(state => state.tours.loading);
    return (
        <div id="admin">
            <div className="heading">
                <h4>Chi tiết quốc gia</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <div className="ct">
                    {loading ? <div className="spin"><Spin className="mt-5" /></div> :
                        <div>
                            <p>Tên tour:&emsp; <b><i>{tour.name}</i></b></p>
                            <p>Giá tiền người lớn:&emsp; <b><i>{tour.name}</i></b></p>
                            <p>Giá trẻ em:&emsp; <b><i>{tour.name}</i></b></p>
                            <p>Giá em bé:&emsp; <b><i>{tour.name}</i></b></p>
                            <p>Trailer:&emsp; <b><i>{tour.name}</i></b></p>
                            <p>Lưu ý:&emsp; <b><i>{tour.name}</i></b></p>
                            <p>Chi tiết tour:&emsp; <b><i>{tour.name}</i></b></p>
                            <p>Banner: </p>{tour.Anhs.map(oki => (
                                <div><strong>- &emsp;{oki.name}</strong></div>
                            ))}
                            <p>Bản đồ:&emsp; </p>
                            <div id="map-container-google-1" className="z-depth-1-half map-container mb-3">
                                <iframe className="w-100" src={tour.bando} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}

Chitietquocgia.propTypes = {

}

export default Chitietquocgia
