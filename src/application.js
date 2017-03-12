import React from 'react';
import classNames from 'classnames'
import { Sidebar, Topbar } from 'components'
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { routes } from 'config/router'
import { HomePage } from 'pages'
import { Chrome } from 'layouts'

const findRouteByName = (routeName, routes) => {
  return routes.find(route => route.name === routeName)
}

require('./stylesheet.css')

class Application extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.router = context.router;
    this.routerChange = this.routerChange.bind(this);

    this.state = {
      route: context.router.getState(),
    }
  }

  routerChange() {
    this.setState({
      route: this.router.getState()
    })
  }

  componentDidMount() {
    this.router.addListener(this.routerChange)
  }

  componentWillUnmount() {
    this.router.removeListener(this.routerChange)
  }

  get componentRender() {
    const { route } = this.state
    if(route) {
      const selectNode = findRouteByName(route.name, routes)
      if(selectNode && selectNode.component) {
        const ComponentRender = selectNode.component;
        return <ComponentRender />
      }
    }
    return <HomePage />;
  }

  render() {
    return(
      <Chrome topbar={<Topbar />} sidebar={<Sidebar data={this.props.cities} />} main={this.componentRender} />
    )
  }
}

Application.contextTypes = {
  router: React.PropTypes.object.isRequired
}

const mapStateProps = (state) => ({
  cities: state.cities,
  ...routeNodeSelector('')(state)
})

export default connect(mapStateProps)(Application);
