import React from 'react'
import { Gps, List, Toggle, Search, Add, Cart } from './names'

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
      Component = Search
      break;
    case "add":
      Component = Add
      break;
    case "cart":
      Component = Cart
      break;
  }
  if(!Component) return  null;
  if(!attributes.fill) attributes.fill = "currentColor";
  return <Component {...attributes} />
}

export default ({name, fill}) => findIcon({name, fill})
