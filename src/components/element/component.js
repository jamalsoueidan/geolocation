import React from 'react'
import classNames from 'classnames'

require('./stylesheet.css')

class Element extends React.Component {
  render() {
    const className = classNames(
      "element",
      this.props.className
    )

    return(
      <div className={className}>
        <div className="elementContent">{this.props.children}</div>
      </div>
    )
  }
}

export default Element
