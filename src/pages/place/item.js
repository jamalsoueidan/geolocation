import React from 'react'
import { withRoute } from 'react-router5';

class PlaceItem extends React.Component {
  onClick() {
    const { data, router } = this.props;
    const route = router.getState();
    router.navigate("application.city.place", { place: data.name, city: route.params.city });
  }

  render() {
    const { data } = this.props;
    return(
      <div className="placeItem" onClick={this.onClick.bind(this)}>
        <h2>{data.name}</h2>
        <img src={data.image} />
      </div>
    )
  }
}

export default withRoute(PlaceItem)
