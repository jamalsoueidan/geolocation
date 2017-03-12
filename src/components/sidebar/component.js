import React from 'react'
import { withRoute } from 'react-router5';
import { routes } from 'config/router'
import { Badge, Icon, Element, ElementContent, List, ListItem } from 'components'

require('./stylesheet.css')

class Sidebar extends React.Component {
  onClick(city, evt) {
    evt.preventDefault();
    router.navigate("application.city", {city: city.name, mode: 'map'});
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
          <Element onClick={() => console.log("ok")}>
            <ElementContent icon><Icon name="search" fill="white" /></ElementContent>
            <ElementContent text>Søg nærmest</ElementContent>
          </Element>
        </ListItem>
        <ListItem className="header">
          <Element>Vælge by:</Element>
        </ListItem>
        <List className="items" data={data} itemRenderer={(city, index) => (
          <Element onClick={this.onClick.bind(this, city)} selected={(selectedCity === city.name)}>
            <ElementContent text>{city.name.capitalize()}</ElementContent>
            <ElementContent icon><Badge>{city.children.length}</Badge></ElementContent>
          </Element>
        )}/>
      </List>
    )
  }
}

export default withRoute(Sidebar)
