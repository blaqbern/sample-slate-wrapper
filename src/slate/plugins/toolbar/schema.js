import React from 'react'

export const schema = {
  marks: {
    bold: props => <strong>{props.children}</strong>,
    italic: props => <em>{props.children}</em>,
    strikethrough: props => <del>{props.children}</del>,
    underline: props => <u>{props.children}</u>,
    code: props => <code>{props.children}</code>,
    textColor: props =>
      <span style={{ color: props.mark.data.get('value') }}>
        {props.children}
      </span>,
  },
}
