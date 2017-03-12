import React from 'react'
import ReactSVG from 'react-svg'
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { Main } from 'layouts/chrome'
import { Element } from 'components/element'
import { actions } from 'redux-router5';

class PlacePage extends React.Component {
  get title() {
    const { place } = this.props;
    return(
      <div>
        <div className="left">
          <Element>{place.name.capitalize()} Vandpibe Cafe</Element>
        </div>
        <div className="right">
          <Element center={true}><ReactSVG path="dist/facebook.svg" /></Element>
          <Element center={true}><ReactSVG path="dist/road.svg" /></Element>
        </div>
      </div>
    )
  }
  render() {
    const { place } = this.props;
    if(!place) return null;
    return(
      <Main title={this.title}>
        <div className="place">
          <h2>{place.name}</h2>
          <img src={place.image} />
        </div>
      </Main>
    )
  }
}

const selectCurrent = state => {
  const route = state.router.route;
  const { city, place } = route.params
  return state.cities.find(c => c.name === city).children.find(p => p.name === place)
}

const mapStateProps = (state) => ({
  place: selectCurrent(state),
  ...routeNodeSelector('application.city.place')(state)
})

export default connect(mapStateProps, { navigateTo: actions.navigateTo })(PlacePage);
