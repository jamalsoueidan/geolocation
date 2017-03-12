import React from 'react'
import PlaceItem from './place/item'
import L from 'leaflet'

class CityMap extends React.Component {
  componentDidMount() {
    const { city } = this.props;
    this.map = L.map('map').setView(city.position, 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  componentDidUpdate() {
    const { city } = this.props;
    this.map.setView(city.position, 13)
  }

  render() {
    return(<div className="map" id="map"></div>)
  }
}

export default CityMap
