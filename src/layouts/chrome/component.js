import React from 'react';
import classNames from 'classnames'
import { Main } from './main'
import { connect } from 'react-redux';

require('./stylesheet.css')

class Application extends React.Component {
  render() {
    const { topbar, sidebar, title, main, layout } = this.props;

    const className = classNames({
      layout: true,
      toggle: layout.toggle
    })

    return(
      <div className={className}>
        <div className="layoutTopbar">
          {topbar}
        </div>

        <div className="layoutSidebar">
          {sidebar}
        </div>

        {main}
      </div>
    )
  }
}

Application.propTypes = {
  topbar: React.PropTypes.element.isRequired,
  sidebar: React.PropTypes.element.isRequired,
  main: React.PropTypes.element.isRequired
};

const mapStateProps = state => ({ layout: state.layout })

export default connect(mapStateProps)(Application);
