import React from 'react'
import classNames from 'classnames'

require('./stylesheet.css')

const ElementContent = ({center, children}) => {
  const className = classNames("elementContent", { "center": center })
  return <div className={className}>{children}</div>
}

class Element extends React.Component {
  get renderChildren() {
    const { children, center } = this.props;
    const countChildren = React.Children.count(children)
    if (countChildren === 1) {
      return <ElementContent center={center}>{children}</ElementContent>
    } else {
      return children;
    }
  }

  get hasOnClick() {
    const { onClick }  = this.props;
    return (onClick ? true : false)
  }

  get shouldCenterText() {
    const { center } = this.props;
    return ( center ? true: false )
  }

  render() {
    let attributes = {}
    const { onClick, selected, children } = this.props

    if(this.hasOnClick) {
      attributes['onClick'] = onClick;
    }

    const childrenClassName = "children" + React.Children.count(children);
    const className = classNames(
      this.props.className, childrenClassName,
      {
        "element": true,
        "clickable": this.hasOnClick,
        "selected": selected,
        "header": !this.hasOnClick
      }
    )

    return(
      <div className={className} {...attributes}>
        {this.renderChildren}
      </div>
    )
  }
}

export { Element as default, ElementContent }
