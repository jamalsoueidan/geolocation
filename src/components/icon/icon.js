import React from 'react'
import { Gps, List, Toggle } from './names'

const findIcon = (name) => {
  switch (name.toLowerCase()) {
    case "toggle":
      return <Toggle />
    case "list":
      return <List />
    case "gps":
      return <Gps />
    default:
      return null;
  }
}

export default ({name, fill}) => {
  if (!fill) fill = "black"
  const attributes = {
    className: "icon",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 512 512",
    "aria-labelledby": "title",
    preserveAspectRatio: "xMidYMid meet",
    style: {
      fill: fill,
      verticalAlign: "middle",
      width: "24px",
      height: "24px"
    }
  }


  return (
    <svg {...attributes}>
      {findIcon(name)}
    </svg>
  )
}
