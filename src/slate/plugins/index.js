import MarkHotkey from './MarkHotkey'
import Toolbar from './toolbar/Toolbar'

import { actions } from './toolbar/actions'

export const plugins = [
  MarkHotkey({ type: 'bold', key: 'b' }),
  MarkHotkey({ type: 'italic', key: 'i' }),
  MarkHotkey({ type: 'strikethrough', key: 's' }),
  MarkHotkey({ type: 'underline', key: 'u' }),
  MarkHotkey({ type: 'code', key: 'c', isAltKey: true }),
  Toolbar({ actions }),
]
