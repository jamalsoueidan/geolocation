import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import { routes } from 'config/router'
import LinkTo from 'components/link_to'

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
      route: context.router.getState()
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

  render() {
    const { route } = this.state
    if(route) {
      const selectNode = findRouteByName(route.name, routes)
      if(selectNode && selectNode.component) {
        const ComponentRender = selectNode.component;
        return <ComponentRender />
      } else {
        return(
          <div className="layout">
            <div className="layoutTopbar">
              jamal
            </div>
            <div className="layoutSidebar">
              hej med jer
            </div>

            <div className="layoutMain">
              <ul>
                <li><LinkTo name="application.barchart">Barchart</LinkTo></li>
                <li><LinkTo name="application.dropdown">Dropdown</LinkTo></li>
                <li><LinkTo name="application.list">List</LinkTo></li>
              </ul>
            </div>

            <div className="layoutToggle">X</div>
          </div>
        )
      }
    }
  }
}

Application.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect((state) => routeNodeSelector(''))(Application);
