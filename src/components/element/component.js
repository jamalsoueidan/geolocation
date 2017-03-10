import React from 'react'
import classNames from 'classnames'

require('./stylesheet.css')

class Element extends React.Component {
  render() {
    let attributes = {}
    const { center, onClick, selected } = this.props
    if(center) {
      attributes['style'] = { textAlign: "center" }
    }

    let onClickClassName = false;
    if(onClick) {
      attributes['onClick'] = onClick;
      onClickClassName = true;
    }

    const className = classNames(
      this.props.className,
      {
        "element": true,
        "clickable": onClickClassName,
        "selected": selected
      }
    )

    return(
      <div className={className}>
        <div className="elementContent" {...attributes}>{this.props.children}</div>
      </div>
    )
  }
}

export default Element
