import React from 'react'
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import PlaceItem from './place/item'

require('./stylesheet.css')

class City extends React.Component {
  get renderPlaces() {
    const {city} = this.props
    return city.children.map(place =>
      <PlaceItem key={place.id} data={place} />
    )
  }

  render() {
    const { city } = this.props
    if(!city) return null;
    return(
      <div>
        <h1>{city.name}</h1>
        <div className="cityPlaces">
          {this.renderPlaces}
        </div>
      </div>)
  }
}

const selectCurrent = state => {
  const route = state.router.route;
  const city = route.params.city
  const cities = state.cities;
  console.log(route)
  return cities.find(c => c.name === city)
}

const mapStateProps = (state) => ({
  city: selectCurrent(state),
  ...routeNodeSelector('application.city')(state)
})

export default connect(mapStateProps)(City);
