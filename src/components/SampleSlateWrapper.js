import React, { Component } from 'react'
import { Editor } from 'slate'
import Toolbar from './Toolbar'

import { initializeSlate } from '../slate/initialize'
import { schema } from '../slate/schema'
import { plugins } from '../slate/plugins'
import { markActions } from '../slate/toolbar/actions'

import '../styles/SampleSlateWrapper.css'

export default class SampleSlateWrapper extends Component {
  state = { state: initializeSlate(), schema }
  onChange = state => this.setState({ state })
  setMark = (event, type) => {
    event.preventDefault()
    this.setState({
      state: this.state.state.transform().toggleMark(type).apply()
    })
  }
  setMarkWithValue = (event, type, value) => {
    event.preventDefault()
    const { state } = this.state
    const [current] = [...state.marks].filter(mark => mark.type === type)
    const nextState = {
      state: this.state.state
        .transform()
        .removeMark(current || type)
        .addMark({ type, data: { dataValue: value } })
        .apply(),
    }
    this.setState(nextState)
  }
  hasMark = type => this.state.state.marks.some(mark => mark.type === type)
  hasMarkWithValue = (type, dataValue) => this.state.state.marks.some(
    mark => mark.type === type && mark.data.get('dataValue') === dataValue
  )

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
