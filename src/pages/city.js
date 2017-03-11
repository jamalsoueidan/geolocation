import React from 'react'
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { Main, MainBody, MainHeader, HeaderCenter, HeaderRight } from 'layouts/chrome'
import { Element } from 'components/element'
import { Icon } from 'components/icon'
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

  get header() {
    const { city } = this.props
    return(
      <MainHeader>
        <HeaderCenter>
          <Element center>{city.name.capitalize()}</Element>
        </HeaderCenter>
        <HeaderRight>
          <Element icon><Icon name="list" fill="#00556C" /></Element>
          <Element icon><Icon name="gps" fill="#00556C"/></Element>
        </HeaderRight>
      </MainHeader>
    )
  }

  get body() {
    const { city } = this.props
    return(
      <MainBody>
        <div className="cityPlaces">
          {this.renderPlaces}
        </div>
      </MainBody>
    )
  }

  render() {
    const { city } = this.props
    if(!city) return null;
    return(
      <Main>
        {this.header}
        {this.body}
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
