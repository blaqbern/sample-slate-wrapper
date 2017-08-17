import React, { Component } from 'react'
import { Editor, Raw } from 'slate'
import '../styles/SampleSlateWrapper.css'
import MarkHotkey from '../slate/plugins/MarkHotkey'

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

  render() {
    const { state, schema } = this.state
    return (
      <div>
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
