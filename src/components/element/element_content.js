import React from 'react'
import classNames from 'classnames'

export default (props) => {
  const { icon, text, center, children } = props;

  const className = classNames("elementContent", {
    "icon": icon || center,
    "text": text
  })

  return <div className={className}>{children}</div>
}
