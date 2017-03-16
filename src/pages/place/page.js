import React from 'react'
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { Main, MainBody, MainHeader, HeaderCenter, HeaderRight } from 'layouts/chrome'
import { Element, Icon } from 'components'
import { actions } from 'redux-router5';

require('./stylesheet.css')

class PlacePage extends React.Component {
  onDirection() {
    const { place } = this.props;

  }

  onFacebook() {
    const { place } = this.props;

  }

  get title() {
    const { place } = this.props;
    return(
      <MainHeader>
        <HeaderCenter>
          <Element>{place.name.capitalize()}</Element>
        </HeaderCenter>
        <HeaderRight>
          <Element icon><a href="http://maps.google.com/?daddr=37.322778,-122.031944" target="_blank"><Icon name="direction" /></a></Element>
          <Element icon><a href={place.social.facebook} target="_blank"><Icon name="facebook" /></a></Element>
        </HeaderRight>
      </MainHeader>
    )
  }

  get body() {
    const { place } = this.props;
    console.log(place)
    return (
      <MainBody>
        <div className="placePage">
          <div className="img">
            <img src={place.image} />
          </div>

          <div className="meta">
            <h1>{place.name.capitalize()}</h1>
            <p>{place.description}</p>
          </div>

          <address>
            <h2>Kontakt oplysninger:</h2>
            {place.address}<br/>
            {place.postalCode} {place.city.capitalize()}<br/>
            Danmark<br/>
            Tel: +44 {place.phone}<br/>
          </address>
        </div>
      </MainBody>
    )
  }

  render() {
    const { place } = this.props;
    if(!place) return null;
    return(
      <Main>
        {this.title}
        {this.body}
      </Main>
    )
  }
}

const selectCurrent = state => {
  const route = state.router.route;
  const { city, place } = route.params
  return state.cities.find(c => c.name === city).places.find(p => p.name === place)
}

const mapStateProps = (state) => ({
  place: selectCurrent(state),
  ...routeNodeSelector('application.city.place')(state)
})

export default connect(mapStateProps, { navigateTo: actions.navigateTo })(PlacePage);
