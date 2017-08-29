import React, { Component } from 'react'
import { string, func, bool } from 'prop-types'

import '../styles/SlateToolbarButton.css'

export default function ToolbarButton({
  icon,
  handleClick,
  isActive,
  type,
}) {
  const handleButtonClick = e => handleClick(e, type)

  return (
    <div
      className={`slateToolbarButton ${isActive ? 'active' : ''}` }
      onClick={handleButtonClick}
    >
      {icon}
    </div>
  )
}
ToolbarButton.propTypes = {
  icon: string,
  handleClick: func,
  isActive: bool,
  type: string,
}
