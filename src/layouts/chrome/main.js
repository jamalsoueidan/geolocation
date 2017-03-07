import React from 'react'
import { Element } from 'components/element'
import ReactSVG from 'react-svg'

const sample = () => {}

const Main = ({title, children}) => (
  <div className="layoutMain">
    <div className="layoutMainTitle">
      <Element>{title}</Element>
      <Element center={true} onClick={sample}><ReactSVG path="dist/gps.svg" style={{ width: 24 }} /></Element>
    </div>
    <div className="layoutMainBody">
      {children}
    </div>
  </div>
)

export default Main
