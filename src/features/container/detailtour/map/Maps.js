import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react';
import './map.css'
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export class Maps extends Component {
    static defaultProps = {
        center: {
            lat: 18.6589972,
            lng: 105.6936946
        },
        zoom: 17
    };

    render() {
        const AnyReactComponent = ({ text }) => (
            <div style={{
                color: 'white',
                background: 'grey',
                padding: '15px 10px',
                display: 'inline-flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '100%',
                transform: 'translate(-50%, -50%)'
            }}>
                {text}
            </div>
        );
        return (
            // <div style={{ height: '50vh', width: '100%' }}>
            //     <GoogleMapReact
            //         // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            //         defaultCenter={this.props.center}
            //         defaultZoom={this.props.zoom}
            //     >
            //         <AnyReactComponent
            //             lat={18.6589972}
            //             lng={105.6936946}
            //             text="travel"
            //         />
            //     </GoogleMapReact>
            // </div>
            <div id="map-container-google-1" className="z-depth-1-half map-container mb-3">
                <iframe className="w-100" src="https://maps.google.com/maps?q=daihocvinh&t=&z=18&ie=UTF8&iwloc=&output=embed" frameBorder={0} style={{ border: 0 }} allowFullScreen />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Maps)
