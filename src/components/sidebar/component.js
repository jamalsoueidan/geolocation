import React from 'react'
import { withRoute } from 'react-router5';
import { routes } from 'config/router'
import { List, Item } from 'components/list'
import { Element } from 'components/element'

class Sidebar extends React.Component {
  onClick(city, evt) {
    evt.preventDefault();
    router.navigate("application.city", {city: city.name});
  }

  render() {
    const { data, route } = this.props;
    let selectedCity = null;
    if(route.name === "application.city") {
      selectedCity = route.params.city;
    }

    return(
      <List>
        <Item className="header">
          <Element>Vælge by:</Element>
        </Item>
        <List className="items" data={data} itemRenderer={(city) => (
          <Element onClick={this.onClick.bind(this, city)} selected={(selectedCity === city.name)}>{city.name.capitalizeFirstLetter()}</Element>
        )}/>
      </List>
    )
  }
}

export default withRoute(Sidebar)
