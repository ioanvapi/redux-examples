import React, { PropTypes } from 'react';
import {
  GoogleMapLoader,
  GoogleMap
} from 'react-google-maps';

//{lat: -25.363882, lng: 131.044922 }
const GoogleMapComp = ({lat, lng}) => {
  return (
    <GoogleMapLoader
      containerElement={ <div style={{height: '100%'}} /> }
      googleMapElement={
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{lat, lng}}
        >
        </GoogleMap>
      }
    >
    </GoogleMapLoader>
  )
};

GoogleMapComp.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default GoogleMapComp;