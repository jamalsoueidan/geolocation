import React from 'react'
import { withRoute } from 'react-router5';
import { routes } from 'config/router'
import { List, Item } from 'components/list'
import { Element, ElementContent } from 'components/element'
import Badge from 'components/badge'

require('./stylesheet.css')

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
        <Item>
          <Element onClick={() => console.log("ok")}>Søg nærmest</Element>
        </Item>
        <Item className="header">
          <Element>Vælge by:</Element>
        </Item>
        <List className="items" data={data} itemRenderer={(city, index) => (
          <Element onClick={this.onClick.bind(this, city)} selected={(selectedCity === city.name)}>
            <ElementContent>{city.name.capitalize()}</ElementContent>
            <ElementContent><Badge>{city.children.length}</Badge></ElementContent>
          </Element>
        )}/>
      </List>
    )
  }
}

export default withRoute(Sidebar)
