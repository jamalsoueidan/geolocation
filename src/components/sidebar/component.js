import React from 'react'
import { withRoute } from 'react-router5';
import { routes } from 'config/router'
import { Badge, Icon, Element, ElementContent, List, ListItem } from 'components'

require('./stylesheet.css')

class Sidebar extends React.Component {
  onClickCity(city, evt) {
    evt.preventDefault();
    const route = router.getState();
    let mode = "map";
    if(route.name === "application.city") {
      mode = route.params.mode;
    }
    router.navigate("application.city", {city: city.name, mode});
  }

  onClickClosest() {
    router.navigate("application.closest");
  }

  onClickAdd() {
    router.navigate("application.add");
  }

  render() {
    const { data, route } = this.props;
    let selectedCity = null;
    if(route.name === "application.city") {
      selectedCity = route.params.city;
    }

    return(
      <List>
        <ListItem>
          <Element onClick={this.onClickClosest.bind(this)}>
            <ElementContent icon><Icon name="search" fill="white" /></ElementContent>
            <ElementContent text>Find nærmest</ElementContent>
          </Element>
        </ListItem>
        <ListItem>
          <Element onClick={this.onClickAdd.bind(this)}>
            <ElementContent icon><Icon name="add" fill="white" /></ElementContent>
            <ElementContent text>Tilføj Vandpibe Cafe</ElementContent>
          </Element>
        </ListItem>
        <ListItem className="header">
          <Element>Vælge by:</Element>
        </ListItem>
        <List className="items" data={data} itemRenderer={(city, index) => (
          <Element onClick={this.onClickCity.bind(this, city)} selected={(selectedCity === city.name)}>
            <ElementContent text>{city.name.capitalize()}</ElementContent>
            <ElementContent icon><Badge>{city.children.length}</Badge></ElementContent>
          </Element>
        )}/>
      </List>
    )
  }
}

export default withRoute(Sidebar)
