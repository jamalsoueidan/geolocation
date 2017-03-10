import React from 'react'
import { Element } from 'components/element'
import ReactSVG from 'react-svg'

const Toggle = ({onClick}) => (
  <div className="layoutToggle" onClick={onClick}>
    <Element center={true}>
      <ReactSVG path="dist/toggle.svg" />
    </Element>
  </div>
)

export default Toggle
