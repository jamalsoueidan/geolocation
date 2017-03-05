import React from 'react'
import { Element } from 'components/element'

const Toggle = ({onClick}) => (
  <div className="layoutToggle" onClick={onClick}>
    <Element>X</Element>
  </div>
)

export default Toggle
