import React from 'react'
import { connect } from 'react-redux';
import { actions } from 'redux-router5';
import { Main, MainBody, MainHeader, HeaderCenter, HeaderRight} from 'layouts/chrome'
import Icon from 'components/icon'
import L from 'leaflet'
import PlaceItem from './place'

class ResultPage extends React.Component {
  get renderBody() {
    const { places, coordinates } = this.props;
    const currentPosition = L.latLng(coordinates.latitude, coordinates.longitude)

    return places.map( (p, index) => {
      let current = L.latLng(p.lat, p.lng);
      let kilometer = parseFloat(current.distanceTo(currentPosition) / 1000);
      return <PlaceItem key={index} kilometer={kilometer.toFixed(2)} place={p} />
    })
  }

  render() {
    const { places } = this.props;
    return(
      <Main>
        <MainHeader>
          <HeaderCenter>{places.length} vandpibe cafeer fundet!</HeaderCenter>
        </MainHeader>
        <MainBody>
          {this.renderBody}
        </MainBody>
      </Main>
    )
  }
}

export default ResultPage;
