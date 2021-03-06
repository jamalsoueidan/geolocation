import React from 'react'
import { connect } from 'react-redux';
import { routeNodeSelector, actions } from 'redux-router5';
import { Main, MainBody, MainHeader, HeaderCenter, HeaderRight } from 'layouts/chrome'
import { Element, Icon } from 'components'
import { CityMap, CityList } from './mode'

require('./stylesheet.css')

const LIST = 'list'
const MAP = 'map'

class CityPage extends React.Component {
  get renderPlaces() {
    const { city, route } = this.props
    const mode = route.params.mode;

    let Component;
    if (mode === MAP) {
      Component = CityMap;
    } else {
      Component = CityList;
    }

    return <Component city={city} route={route} />
  }

  onChangeMode(mode) {
    const { navigateTo, route } = this.props;
    navigateTo("application.city", { city: route.params.city, mode}, { reload: true })
  }

  get header() {
    const { city } = this.props
    return(
      <MainHeader>
        <HeaderCenter>
          <Element center>{city.name.capitalize()}</Element>
        </HeaderCenter>
        <HeaderRight>
          <Element onClick={this.onChangeMode.bind(this, 'list')} icon><Icon name="list" /></Element>
          <Element onClick={this.onChangeMode.bind(this, 'map')} icon><Icon name="gps" /></Element>
        </HeaderRight>
      </MainHeader>
    )
  }

  get body() {
    const { city } = this.props
    return(
      <MainBody>
        {this.renderPlaces}
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

export default connect(mapStateProps, { navigateTo: actions.navigateTo})(CityPage);
