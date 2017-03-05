import React from 'react'
import { Element } from 'components/element'

const Main = ({title, children}) => (
  <div className="layoutMain">
    <div className="layoutMainTitle">
      <Element>{title}</Element>
    </div>
    <div className="layoutMainBody">
      {children}
    </div>
  </div>
)

export default Main
