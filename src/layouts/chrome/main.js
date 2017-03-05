import React from 'react'


const Main = ({title, children}) => (
  <div className="layoutMain">
    <div className="layoutMainTitle">
      {title}
    </div>
    <div className="layoutMainBody">
      {children}
    </div>
  </div>
)

export default Main
