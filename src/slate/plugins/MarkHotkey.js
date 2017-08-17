import keycode from 'keycode'

export default function MarkHotkey(options) {
  const { type, key, isAltKey = false } = options

  return {
    onKeyDown(event, data, state) {
      if (!event.metaKey || event.which !== keycode(key) || !event.altKey === isAltKey) return
      event.preventDefault()

      return state
        .transform()
        .toggleMark(type)
        .apply()
    }
  }
}
