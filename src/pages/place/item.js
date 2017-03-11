import React from 'react'
import { withRoute } from 'react-router5';

class PlaceItem extends React.Component {
  onClick() {
    const { place, router } = this.props;
    const route = router.getState();
    router.navigate("application.city.place", { place: place.name, city: route.params.city });
  }

  render() {
    const { place } = this.props;
    return(
      <div className="placeItem" onClick={this.onClick.bind(this)}>
        <div className="placeTitle"><div className="hide">{place.name.toUpperCase()}</div></div>
        <h2>{place.name.toUpperCase()}</h2>
        <img src={place.image} />
      </div>
    )
  }
}

export default withRoute(PlaceItem)
