import React from 'react'
import { connect } from 'react-redux';
import { actions } from 'redux-router5';
import { Main, MainBody, MainHeader, HeaderCenter, HeaderRight} from 'layouts/chrome'
import Icon from 'components/icon'
import sphere from 'sphere-knn'
import ResultPage from './result'

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}

class ClosestPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      places: null,
      coordinates: null,
      error: null
    }
  }

  componentDidMount() {
    if (typeof navigator.geolocation == "undefined") {
      this.setState({error: {
        code: "1234",
        message: "Din browser understøtter ikke geolocation, derfor kan du ikke bruge den funktion."
      }})
      return;
    }
    navigator.geolocation.getCurrentPosition(this.findClosestPlace.bind(this), this.notAccepting.bind(this), options);
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

  notAccepting(err) {
    this.setState({error: {
      code: 1,
      message: "Du har ikke givet os tilladelse til at få din position, derfor kan vi desværre ikke lokalisere vandpibe cafeer i nærheden af dig!"
    }});
  }

  findClosestPlace(pos) {
    const { latitude, longitude } = pos.coords;
    const places = sphere(this.places)(latitude, longitude, 2)
    this.setState({places, coordinates: pos.coords})
  }

  render() {
    const { places, error } = this.state;
    if(places!== null) {
      return <ResultPage {...this.state}/>
    }
    if(error !== null) {
      return(
        <Main>
          <MainHeader>
            <HeaderCenter>Fejl: {error.code}</HeaderCenter>
          </MainHeader>
          <MainBody>
            {error.message}
          </MainBody>
        </Main>
      )
    }
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
