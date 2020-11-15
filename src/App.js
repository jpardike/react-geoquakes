import React from "react";
import axios from 'axios';
import Quakes from "./components/Quakes";
import MapContainer from "./components/Map";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quakes: []
    };
  };

  componentDidMount() {
    axios
      .get(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"
      )
      .then((response) => this.setState({ quakes: response.data.features }))
      .catch((err) => console.log(err));
  }
  
  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer quakes={this.state.quakes} />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week:</h1>
          <Quakes quakes={this.state.quakes} />
        </div>
      </div>
    );
  }
}

export default App;
