import Clipboard from 'clipboard'

export default {
  bind(el, { arg, value }) {
    if (arg === 'success') {
      el._clipboard_success_callback = value
    } else if (arg === 'error') {
      el._clipboard_error_callback = value
    } else {
      const clipboard = (el._clipboard = new Clipboard(el, () => value))

      clipboard.on('success', result => {
        el._clipboard_success_callback?.(result)
      })

      clipboard.on('error', error => {
        el._clipboard_error_callback?.(error)
      })
    }
  },
  update(el, { arg, value }) {
    if (!arg) {
      el._clipboard.text = () => value
    }
  },
  unbind(el) {
    delete el._clipboard_success_callback
    delete el._clipboard_error_callback

    el._clipboard?.destroy()

    delete el._clipboard
  },
}
