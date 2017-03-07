import React from 'react'
import LinkTo from 'components/link_to'
import { routes } from 'config/router'
import { List, Item } from 'components/list'
import { Element } from 'components/element'

const Sidebar = () => (
  <div className="layoutSidebar">
    <List>
      <Item className="header">
        <Element>Header</Element>
      </Item>
      <List className="items" data={routes} itemRenderer={(route) => (
        <Element><LinkTo name={route.name} params={{city: 'kbh', place: 'roma'}}>{route.name}</LinkTo></Element>
      )}/>
    </List>
  </div>
)

export default Sidebar
