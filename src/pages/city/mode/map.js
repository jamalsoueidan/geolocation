import React from 'react'
import PlaceItem from './place/item'
import L from 'leaflet'
import { connect } from 'react-redux';
import { actions } from 'redux-router5';

class CityMap extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick(place) {
    const route = this.props.route;
    this.props.navigateTo("application.city.place", { place: place.name, city: route.params.city });
  }

  _init() {
    this.map = L.map('map').setView(this.props.city.coordinates, 15);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  componentDidMount() {
    this._init();
    this.createMarkers()
  }

  createMarkers() {
    if(this.groupMarkers) this.map.removeLayer(this.groupMarkers)
    const { city } = this.props;
    let icon;
    const markers = city.children.filter(p => p.coordinates).map(p => {
      icon = L.divIcon({
          className: '',
          html: '<div style="background-color: #fff; padding: 6px 6px 2px 6px; border:1px solid #000;"><img src="' + p.image + '" style="width:100%;height:100%;"/></div>',
          iconSize: [100, 50],
          iconAnchor: null
      });
      return L.marker(p.coordinates, { icon }).on('click', this.onClick.bind(this, p))
    });
    this.groupMarkers = new L.FeatureGroup(markers)
    this.map.addLayer(this.groupMarkers)
    this.map.fitBounds(this.groupMarkers.getBounds().pad(0.5));
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.layout.toggle !== this.props.layout.toggle) {
      this.map.invalidateSize();
    }
    const { city } = this.props;
    this.map.setView(city.coordinates, 13)
    this.createMarkers()
  }

  render() {
    return(<div className="map" id="map"></div>)
  }
}

const mapStateProps = state => ({ layout: state.layout })

export default connect(mapStateProps, { navigateTo: actions.navigateTo })(CityMap);
