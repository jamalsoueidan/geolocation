import React from 'react'
import { connect } from 'react-redux';
import { actions } from 'redux-router5';
import { Main, MainBody, MainHeader, HeaderCenter, HeaderRight} from 'layouts/chrome'
import Icon from 'components/icon'
import sphere from 'sphere-knn'

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}

class ClosestPage extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.findClosestPlace.bind(this), () => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }, options);
  }

  get concatPlaces() {
    return this.props.cities.reduce((accumulator, city) => accumulator.concat(city.children), [])
                            .filter(p => p.coordinates)
                            .map(p => Object.assign({}, p.coordinates, p));
  }
  get places() {
    if(this._places) return this._places;
    this._places = this.concatPlaces;
    return this._places;
  }

  findClosestPlace(pos) {
    const { latitude, longitude } = pos.coords;
    const points = sphere(this.places)(latitude, longitude, 2)
  }

  render() {
    return(
      <Main>
        <MainHeader>
          <HeaderCenter>Søg nærmest</HeaderCenter>
        </MainHeader>
        <MainBody>
          Om 10 sekunder spørger dig om tilladelse til at få din position for at finde den nærmest vandpibe cafe i nærheden af dig!<br />
          Hvis du ved en fejl har nægtet tilladelsen, så skal du reloade siden.
        </MainBody>
      </Main>
    )
  }
}

const mapStateProps = (state) => ({
  cities: state.cities
})

export default connect(mapStateProps, { navigateTo: actions.navigateTo})(ClosestPage);
