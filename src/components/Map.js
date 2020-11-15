import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import image from '../images/earthquake.png'

const mapStyles = {
  width: "37%",
  height: "51%",
};

class MapContainer extends React.Component {
  render() {
    const quakes = this.props.quakes;
    const quakeMarker = quakes.map((item) => {
      return (
        <Marker
          position={{
            lat: item.geometry.coordinates[1],
            lng: item.geometry.coordinates[0],
          }}
          icon={{
            url: image,
            scaledSize: new window.google.maps.Size(30,30),
            origin: new window.google.maps.Point(0,0),
            anchor: new window.google.maps.Point(0,0)
          }}
          key={item.id}
        />
      );
    });
    return (
      <Map
        google={this.props.google}
        zoom={1}
        style={mapStyles}
        initialCenter={{
          lat: 47.608013,
          lng: -122.335167,
        }}
      >
        {quakeMarker}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg",
})(MapContainer);
