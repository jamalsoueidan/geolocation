import React from 'react'
import { Gps, List, Toggle } from './names'

const findIcon = (attributes) => {
  let Component = null;
  switch (attributes.name.toLowerCase()) {
    case "toggle":
      Component = Toggle
      break;
    case "list":
      Component = List
      break;
    case "gps":
      Component = Gps
      break;
    case "search":
      Component = Gps
      break;
  }
  if(!Component) return  null;
  return <Component {...attributes} />
}

export default ({name, fill}) => findIcon({name, fill})
