import React from 'react'
import { withRoute } from 'react-router5';

class PlaceItem extends React.Component {
  onClick() {
    const { place } = this.props;
    router.navigate("application.city.place", place.toParams);
  }

  render() {
    const { place, kilometer } = this.props;

    return(
      <div className="placeItem" onClick={this.onClick.bind(this)}>
        <h2>{place.name.toUpperCase()}</h2>
        <img src={place.image} />
        <div className="km">{kilometer} kilometer</div>
      </div>
    )
  }
}

export default withRoute(PlaceItem)
