import React from 'react'
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';

class City extends React.Component {
  render() {
    const { city } = this.props
    return(<div>{city.name}</div>)
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
