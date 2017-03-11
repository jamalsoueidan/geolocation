import React from 'react'

export default class extends React.Component {
  render() {
    let { name, fill, children, size } = this.props;
    if(!size) size = 512;
    if(!fill) fill = "black"
    const attributes = {
      className: "icon",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: `0 0 ${size} ${size}`,
      "aria-labelledby": "title",
      preserveAspectRatio: "xMidYMid meet",
      style: {
        fill: fill,
        verticalAlign: "middle",
        width: "24px",
        height: "24px"
      }
    }

    return <svg {...attributes}>{children}</svg>
  }
}
