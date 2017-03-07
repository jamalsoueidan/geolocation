import React from 'react';
import classNames from 'classnames'
import Main from './main'
import Toggle from './toggle'

require('./stylesheet.css')

class Application extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      toggle: false
    }
  }

  onToggle() {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    const { topbar, sidebar, title, main } = this.props;

    const className = classNames({
      layout: true,
      toggle: this.state.toggle
    })

    return(
      <div className={className}>
        <div className="layoutTopbar">
          {topbar}
        </div>

        <div className="layoutSidebar">
          {sidebar}
        </div>

        <Main title={title}>
          {main}
        </Main>

        <Toggle onClick={this.onToggle.bind(this)}/>
      </div>
    )
  }
}

Application.propTypes = {
  topbar: React.PropTypes.element.isRequired,
  sidebar: React.PropTypes.element.isRequired,
  main: React.PropTypes.element.isRequired,
  title: React.PropTypes.string.isRequired
};

export default Application;
