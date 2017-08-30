import React from 'react'
import { object, func } from 'prop-types'
import ToolbarButton from './components/ToolbarButton'
import ToolbarColorChooser from './components/ToolbarColorChooser'

import { schema } from './schema'

import './styles/SampleSlateWrapper.css'

export default function Toolbar(options) {
  return {
    schema,
    render(props, state, editor) {
      const { actions } = options

      const hasMark = type => state.marks.some(mark => mark.type === type)
      const setMark = (event, type) => {
        event.preventDefault()
        editor.setState({
          state: state.transform().toggleMark(type).focus().apply()
        })
      }

      const hasMarkWithValue = (type, value) => state.marks.some(
        mark => mark.type === type && mark.data.get('value') === value
      )
      const setMarkWithValue = (event, type, value) => {
        event.preventDefault()
        const { document, selection } = state
        const marksOfTypeCleared = document.getMarksAtRange(selection).reduce((reduction, mark) => {
          if (mark.type === type) return reduction.transform().removeMark(mark).apply()
          return reduction
        }, state)

        editor.setState({
          state: marksOfTypeCleared
            .transform()
            .addMark({ type, data: { value } })
            .focus()
            .apply(),
        })
      }

      return (
        <div class="slateWrapper">
          <div className="slateToolbar">
            <div className="buttonPanel">
              {actions.markToggle.map((action, index) =>
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
              {actions.markWithData.map((action, index) =>
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
          {props.children}
        </div>
      )
    }
  }
}
