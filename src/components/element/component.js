import React from 'react'
import classNames from 'classnames'

require('./stylesheet.css')

class Element extends React.Component {
  render() {
    const className = classNames(
      "element",
      this.props.className
    )

    let attributes = {}
    const { center, onClick } = this.props
    if(center) {
      attributes['style'] = { textAlign: "center" }
    }

    if(onClick) {
      attributes['onClick'] = onClick;
      attributes['style']['cursor'] = "pointer";
    }

    return(
      <div className={className} {...attributes}>
        <div className="elementContent">{this.props.children}</div>
      </div>
    )
  }
}

export default Element
