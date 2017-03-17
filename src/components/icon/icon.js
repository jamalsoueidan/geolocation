import React from 'react'
import * as icons from './names'

const findIcon = (attributes) => {
  let Component = icons[attributes.name.capitalize()];
  if(!Component) return  null;
  if(!attributes.fill) attributes.fill = "currentColor";
  return <Component {...attributes} />
}

export default ({name, fill}) => findIcon({name, fill})
