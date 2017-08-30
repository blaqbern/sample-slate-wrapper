import React, { Component } from 'react'
import { string, array, func } from 'prop-types'

import '../styles/SlateToolbarColorChooser.css'

export default class ToolbarColorChooser extends Component {
  state = { collapsed: true }

  handleDropdownClick = e => this.setState({ collapsed: !this.state.collapsed })
  handleColorSelect = e => {
    const nextColor = e.target.value
    this.props.handleSelect(e, this.props.type, nextColor)
    this.setState({ collapsed: true })
  }

  render() {
    const { icon, values, hasMarkWithValue, type } = this.props
    const { collapsed } = this.state
    const [currentColor] = values.filter(v => hasMarkWithValue('textColor', v))

    return (
      <span className={`${type}Chooser`}>
        <div
          style={{ color: currentColor }}
          className="slateToolbarButton"
          onClick={this.handleDropdownClick}
        >
          {icon}
        </div>

        {collapsed ? null :
          <div className="colorPicker">
            {values.map((value, index) =>
              <div key={index} className="colorSwatch" style={{ background: value }}>
                <input
                  type="color"
                  value={value}
                  readOnly
                  onClick={this.handleColorSelect}
                />
              </div>
            )}
          </div>
        }
      </span>
    )
  }
}
ToolbarColorChooser.propTypes = {
  icon: string,
  type: string,
  values: array,
  handleSelect: func,
  hasMarkWithValue: func,
}
