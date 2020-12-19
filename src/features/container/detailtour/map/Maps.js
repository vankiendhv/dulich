import React from 'react'
import { useSelector } from 'react-redux';
import './map.css'
function Maps(props) {
    const tours = useSelector(state => state.tours.tour.data);
    const tour = [];
    if (tours) {
        for (let i = 0; i < tours.length; i++) {
            if (tours[i].id === +props.id) {
                tour.push(tours[i])
            }
        }
    }
    return (
        <div id="map-container-google-1" className="z-depth-1-half map-container mb-3">
            {tour.map(ok => (
                <iframe className="w-100" src={ok.bando} frameBorder={0} style={{ border: 0 }} allowFullScreen />
            ))}
        </div>
    )
}

Maps.propTypes = {

}

export default Maps
