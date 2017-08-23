import React from 'react'
import ToolbarButton from './ToolbarButton'
import ToolbarColorChooser from './ToolbarColorChooser'

export default function Toolbar({
  markActions,
  setMark,
  hasMark,
  setMarkWithValue,
  hasMarkWithValue,
}) {
  return (
    <div className="slateToolbar">
      <div className="buttonPanel">
        {markActions.formatting.map((action, index) =>
          <ToolbarButton
            key={index}
            icon={action.icon}
            type={action.type}
            handleClick={setMark}
            isActive={hasMark(action.type)}
          />
        )}
      </div>

      <div className="buttonPanel">
        {markActions.styling.map((action, index) =>
          <ToolbarColorChooser
            key={index}
            icon={action.icon}
            type={action.type}
            values={action.values}
            handleSelect={setMarkWithValue}
            hasMarkWithValue={hasMarkWithValue}
          />
        )}
      </div>
    </div>
  )
}
