import React from 'react'
import PlaceItem from './place/item'
import L from 'leaflet'
import sphere from 'sphere-knn'

class CityMap extends React.Component {
  componentDidMount() {
    const { city } = this.props;
    this.map = L.map('map').setView(city.coordinates, 15);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.createMarkers(city.children)

    /*const coordinates = city.children.filter(p => p.coordinates).map(p => Object.assign({}, p.coordinates, { id: p.name }))
    const points = sphere(coordinates)(55.676268, 12.567630, 1)*/
  }

  createMarkers(newPlacers) {
    newPlacers.filter(p => p.coordinates).forEach(p => {
      L.marker(p.coordinates).addTo(this.map).bindPopup("<b>Hello world!</b><br />I am a popup.")
    })
  }

  componentDidUpdate() {
    const { city } = this.props;
    this.map.setView(city.coordinates, 13)
  }

  render() {
    return(<div className="map" id="map"></div>)
  }
}

export default CityMap
