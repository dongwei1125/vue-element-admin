import { setStyle } from '@/utils/dom'

import './index.scss'

const onClick = el => {
  const handler = e => {
    setStyle(el, 'position', 'relative')
    setStyle(el, 'overflow', 'hidden')

    const rect = el.getBoundingClientRect()
    const max = Math.max(rect.width, rect.height)

    var $ripple = el.querySelector('.waves-ripple')

    if ($ripple) {
      $ripple.className = 'waves-ripple'
    } else {
      $ripple = document.createElement('span')
      $ripple.className = 'waves-ripple'

      setStyle($ripple, 'width', `${max}px`)
      setStyle($ripple, 'height', `${max}px`)
      el.appendChild($ripple)
    }

    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

    const left = e.pageX - rect.left - scrollLeft
    const top = e.pageY - rect.top - scrollTop

    const translateX = left - max / 2
    const translateY = top - max / 2

    setStyle($ripple, 'left', `${translateX}px`)
    setStyle($ripple, 'top', `${translateY}px`)

    $ripple.className = 'waves-ripple is-active'
  }

  el._waves_click_callback = handler

  return handler
}

export default {
  bind(el) {
    el.addEventListener('click', onClick(el))
  },
  update(el) {
    el.removeEventListener('click', el._waves_click_callback)
    el.addEventListener('click', onClick(el))
  },
  unbind(el) {
    document.removeEventListener('click', el._waves_click_callback)

    delete el._waves_click_callback
  },
}
