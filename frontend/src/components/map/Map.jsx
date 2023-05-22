import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './Map.css'

const MapPage = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDai9DZUeaV_ZS-mzeHcsR7aJYz8_4PDsE"
    });


    return( 
    <div className="map">
        {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{width: '100%', height: '100%'}}
              center={{lat:-21.785790653287357, 
                    lng:-46.565488132152005}}
              zoom={15}
            ></GoogleMap>
        ) : (
        <></>
      )}
    </div>
  );
};

export default MapPage;
    
        

