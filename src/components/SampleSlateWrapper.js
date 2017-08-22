import React, { Component } from 'react'
import { Editor } from 'slate'
import Toolbar from './Toolbar'

import { initializeSlate } from '../slate/initialize'
import { schema } from '../slate/schema'
import { plugins } from '../slate/plugins'
import { markActions } from '../slate/toolbar/actions'

import '../styles/SampleSlateWrapper.css'

export default class SampleSlateWrapper extends Component {
  state = { state: initializeSlate('A single line of text'), schema }
  onChange = state => this.setState({ state })
  setMark = (event, type) => {
    event.preventDefault()
    this.setState({
      state: this.state.state.transform().toggleMark(type).apply()
    })
  }
  hasMark = type => this.state.state.marks.some(mark => mark.type === type)

  render() {
    return (
      <div>
        <Toolbar
          setMark={this.setMark}
          hasMark={this.hasMark}
          markActions={markActions}
        />
        <Editor
          state={this.state.state}
          schema={this.state.schema}
          plugins={plugins}
          onChange={this.onChange}
          className="myEditor"
        />
      </div>
    )
  }
}
