import React, { Component } from 'react'
import { Editor } from 'slate'

import { initializeSlate } from '../slate/initialize'
import { plugins } from '../slate/plugins'

export default class SampleSlateWrapper extends Component {
  state = { state: initializeSlate() }
  onChange = state => this.setState({ state })

  render() {
    return (
      <Editor
        state={this.state.state}
        plugins={plugins}
        onChange={this.onChange}
        className="slateEditor"
      />
    )
  }
}
