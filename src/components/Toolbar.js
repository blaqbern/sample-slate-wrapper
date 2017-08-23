import React from 'react'
import ToolbarButton from './ToolbarButton'

export default function Toolbar({
  setMark,
  markActions,
  hasMark,
}) {
  return (
    <div className="slateToolbar">
      <div className="buttonPanel">
        {markActions.map((action, index) =>
          <ToolbarButton
            key={index}
            icon={action.icon}
            type={action.type}
            handleClick={setMark}
            isActive={hasMark(action.type)}
          />
        )}
      </div>
    </div>
  )
}
