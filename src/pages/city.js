import React from 'react'
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { Main } from 'layouts/chrome'
import { Element } from 'components/element'
import PlaceItem from './place/item'
import ReactSVG from 'react-svg'

require('./stylesheet.css')

class City extends React.Component {
  get renderPlaces() {
    const {city} = this.props
    return city.children.map(place =>
      <PlaceItem key={place.id} place={place} />
    )
  }

  get title() {
    const { city } = this.props
    return(
      <div>
        <div className="left">
          <Element center={true}>{city.name.capitalize()}</Element>
        </div>
        <div className="right">
          <Element center={true}><ReactSVG path="dist/list.svg" /></Element>
          <Element center={true}><ReactSVG path="dist/gps.svg" /></Element>
        </div>
      </div>
    )
  }

  render() {
    const { city } = this.props
    if(!city) return null;
    return(
      <Main title={this.title}>
        <h1>{city.name}</h1>
        <div className="cityPlaces">
          {this.renderPlaces}
        </div>
      </Main>
    )
  }
}

const selectCurrent = state => {
  const route = state.router.route;
  const city = route.params.city
  const cities = state.cities;
  return cities.find(c => c.name === city)
}

const mapStateProps = (state) => ({
  city: selectCurrent(state),
  ...routeNodeSelector('application.city')(state)
})

export default connect(mapStateProps)(City);
