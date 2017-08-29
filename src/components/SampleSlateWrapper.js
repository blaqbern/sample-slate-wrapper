import React, { Component } from 'react'
import { Editor } from 'slate'
import Toolbar from './Toolbar'

import '../styles/SampleSlateWrapper.css'

import { initializeSlate } from '../slate/initialize'
import { schema } from '../slate/schema'
import { plugins } from '../slate/plugins'
import { markActions } from '../slate/toolbar/actions'

export default class SampleSlateWrapper extends Component {
  state = { state: initializeSlate(), schema }

  onChange = state => this.setState({ state })

  hasMark = type => this.state.state.marks.some(mark => mark.type === type)
  setMark = (event, type) => {
    event.preventDefault()
    this.setState({
      state: this.state.state.transform().toggleMark(type).focus().apply()
    })
  }

  hasMarkWithValue = (type, value) => this.state.state.marks.some(
    mark => mark.type === type && mark.data.get('value') === value
  )
  setMarkWithValue = (event, type, value) => {
    event.preventDefault()
    const { state } = this.state
    const { document, selection } = state
    const marksOfTypeCleared = document.getMarksAtRange(selection).reduce((reduction, mark) => {
      if (mark.type === type) return reduction.transform().removeMark(mark).apply()
      return reduction
    }, state)

    this.setState({
      state: marksOfTypeCleared
        .transform()
        .addMark({ type, data: { value } })
        .focus()
        .apply(),
    })
  }

  render() {
    return (
      <div className="slateWrapper">
        <Toolbar
          markActions={markActions}
          setMark={this.setMark}
          hasMark={this.hasMark}
          setMarkWithValue={this.setMarkWithValue}
          hasMarkWithValue={this.hasMarkWithValue}
        />
        <Editor
          state={this.state.state}
          schema={this.state.schema}
          plugins={plugins}
          onChange={this.onChange}
          className="slateEditor"
        />
      </div>
    )
  }
}
