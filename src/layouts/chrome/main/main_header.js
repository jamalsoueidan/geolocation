import React from 'react'
import HeaderLeft from './header_left'
import HeaderRight from './header_right'
import ReactSVG from 'react-svg'
import layout from 'data/layout'
import { Element } from 'components/element'
import { connect } from 'react-redux';

const Toggle = ({onClick}) => (
  <div className="layoutToggle" onClick={onClick}>
    <Element center={true}>
      <ReactSVG path="dist/toggle.svg" />
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
