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
    } else {
      navigator.geolocation.getCurrentPosition(this.findClosestPlace.bind(this), this.notAccepting.bind(this), options);
    }
  }

  notAccepting(err) {
    this.setState({error: {
      code: 1,
      message: "Du har ikke givet os tilladelse til at få din position, derfor kan vi desværre ikke lokalisere vandpibe cafeer i nærheden af dig!"
    }});
  }

  findClosestPlace(visitorCoordinates) {
    const allPlaces = this.props.cities.reduce((accumulator, city) => accumulator.concat(city.places), []).filter(p => p.coordinates)
    const spherePlaces = allPlaces.map(p => p.coordinates)
    const { latitude, longitude } = visitorCoordinates.coords;

    let places = sphere(spherePlaces)(latitude, longitude, 2)
    places = allPlaces.filter(p => {
      return places.some(pl => pl.lat === p.coordinates.lat && pl.lng === p.coordinates.lng);
    });
    this.setState({places, coordinates: visitorCoordinates.coords})
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
            <div className="page">{error.message}</div>
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
          <div className="page">Om 10 sekunder spørger dig om tilladelse til at få din position for at finde den nærmest vandpibe cafe i nærheden af dig!<br />
          Hvis du ved en fejl har nægtet tilladelsen, så skal du reloade siden.</div>
        </MainBody>
      </Main>
    )
  }
}

const mapStateProps = (state) => ({
  cities: state.cities
})

export default connect(mapStateProps, { navigateTo: actions.navigateTo})(ClosestPage);
