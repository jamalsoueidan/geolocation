import React from 'react';
import classNames from 'classnames'
import { Sidebar, Topbar } from 'components'
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { routes } from 'config/router'
import { HomePage } from 'pages'
import { Chrome } from 'layouts'
import * as pages from 'pages'

const findRouteByName = (routeName, routes) => {
  return routes.find(route => route.name === routeName)
}

require('./stylesheet.css')

class Application extends React.Component {
  get componentRender() {
    const { route } = this.props
    if(route) {
      const selectNode = findRouteByName(route.name, routes)
      if(selectNode && selectNode.page) {
        const name = selectNode.page.capitalize() + "Page"
        const ComponentRender = pages[name]
        if(!ComponentRender) return <div>{name} not found in pages</div>
        return <ComponentRender />
      }
    }
    return(<div>No page defined in routes</div>);
  }

  render() {
    return(<Chrome topbar={<Topbar />} sidebar={<Sidebar data={this.props.cities} />} main={this.componentRender} />)
  }
}

const mapStateProps = (state) => ({
  cities: state.cities,
  ...routeNodeSelector('')(state)
})

export default connect(mapStateProps)(Application);
