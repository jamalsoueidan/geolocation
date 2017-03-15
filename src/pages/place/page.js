import React from 'react'
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { Main, MainBody, MainHeader, HeaderCenter, HeaderRight } from 'layouts/chrome'
import { Element, Icon } from 'components'
import { actions } from 'redux-router5';

class PlacePage extends React.Component {
  get title() {
    const { place } = this.props;
    return(
      <MainHeader>
        <HeaderCenter>
          <Element>{place.name.capitalize()} Vandpibe Cafe</Element>
        </HeaderCenter>
        <HeaderRight>
          <Element  icon><Icon name="direction" /></Element>
          <Element  icon><Icon name="facebook" /></Element>
        </HeaderRight>
      </MainHeader>
    )
  }

  get body() {
    const { place } = this.props;
    return (
      <MainBody>
        <div className="place">
          <h2>{place.name}</h2>
          <img src={place.image} />
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
  return state.cities.find(c => c.name === city).children.find(p => p.name === place)
}

const mapStateProps = (state) => ({
  place: selectCurrent(state),
  ...routeNodeSelector('application.city.place')(state)
})

export default connect(mapStateProps, { navigateTo: actions.navigateTo })(PlacePage);
