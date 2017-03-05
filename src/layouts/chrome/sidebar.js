import React from 'react'
import { routes } from 'config/router'
import { List, Item } from 'components/list'
import LinkTo from 'components/link_to'

const Sidebar = () => (
  <div className="layoutSidebar">
    <List>
      <Item className="header">
        Header
      </Item>
      <List className="items" data={routes} itemRenderer={(route) => (
        <LinkTo name={route.name}>{route.name}</LinkTo>
      )}/>
    </List>
  </div>
)

export default Sidebar
