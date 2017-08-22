import { Raw } from 'slate'

export function initializeSlate(initialString) {
  return Raw.deserialize({
    nodes: [
      {
        kind: 'block',
        type: 'paragraph',
        nodes: [
          {
            kind: 'text',
            text: initialString,
          }
        ],
      },
    ],
  }, { terse: true })
}
