import React from 'react'
import HeaderLeft from './header_left'
import HeaderRight from './header_right'
import layout from 'data/layout'
import { Element } from 'components/element'
import { Icon } from 'components/icon'
import { connect } from 'react-redux';

const Toggle = ({onClick}) => (
  <div className="layoutToggle" onClick={onClick}>
    <Element center={true}>
      <Icon name="toggle" fill="#00556C" />
    </Element>
  </div>
)

class MainHeader extends React.Component {
  onToggle() {
    const { update, layout } = this.props;
    update({
      toggle: !layout.toggle
    })
  }

  render() {
    const { showToggle, children } = this.props;
    return (
      <div className="layoutMainHeader">
        {showToggle && <HeaderLeft><Toggle onClick={this.onToggle.bind(this)} /></HeaderLeft>}
        {children}
      </div>
    )
  }
}

MainHeader.defaultProps = {
  showToggle: true
}

MainHeader.propTypes = {
  showToggle: React.PropTypes.bool
}

export default connect((state) => ({ layout: state.layout }), { update: layout.actions.update })(MainHeader);
