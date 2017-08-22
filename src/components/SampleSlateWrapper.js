import React, { Component } from 'react'
import { Editor, Raw } from 'slate'
import Toolbar from './Toolbar'
import MarkHotkey from '../slate/plugins/MarkHotkey'

import '../styles/SampleSlateWrapper.css'

const initialState = Raw.deserialize({
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: 'A single line of text',
        }
      ],
    },
  ],
}, { terse: true })

export default class SampleSlateWrapper extends Component {
  state = {
    state: initialState,
    schema: {
      marks: {
        bold: props => <strong>{props.children}</strong>,
        italic: props => <em>{props.children}</em>,
        strikethrough: props => <del>{props.children}</del>,
        underline: props => <u>{props.children}</u>,
        code: props => <code>{props.children}</code>,
      },
    },
  }
  onChange = state => this.setState({ state })
  setMark = (event, type) => {
    event.preventDefault()

    const { state } = this.state
    const nextState = state.transform().toggleMark(type).apply()
    this.setState({ state: nextState })
  }
  hasMark = type => this.state.state.marks.some(mark => mark.type === type)

  render() {
    const { state, schema } = this.state
    return (
      <div>
        <Toolbar
          setMark={this.setMark}
          hasMark={this.hasMark}
          markActions={[
            { icon: ' B ', type: 'bold' },
            { icon: ' I ', type: 'italic' },
            { icon: ' S ', type: 'strikethrough' },
            { icon: ' U ', type: 'underline' },
            { icon: ' </> ', type: 'code' },
          ]}
        />
        <Editor
          plugins={[
            MarkHotkey({ type: 'bold', key: 'b' }),
            MarkHotkey({ type: 'italic', key: 'i' }),
            MarkHotkey({ type: 'strikethrough', key: 's' }),
            MarkHotkey({ type: 'underline', key: 'u' }),
            MarkHotkey({ type: 'code', key: 'c', isAltKey: true }),
          ]}
          state={state}
          schema={schema}
          onChange={this.onChange}
          className="myEditor"
        />
      </div>
    )
  }
}
