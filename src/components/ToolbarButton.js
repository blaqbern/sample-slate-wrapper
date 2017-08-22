import React, { Component } from 'react'

import '../styles/SlateToolbarButton.css'

export default function ToolbarButton({
  icon,
  handleClick,
  isActive,
  type,
}) {
  const handleButtonClick = e => handleClick(e, type)
  console.log('isActive = ', isActive)

  return (
    <span
      className={`slateToolbarButton ${isActive ? 'active' : ''}` }
      onClick={handleButtonClick}
    >
      {icon}
    </span>
  )
}
const { string, func } = React.PropTypes
ToolbarButton.propTypes = { icon: string, handleClick: func }
