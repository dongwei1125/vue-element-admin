import { addClass, setStyle } from '@/utils/dom'

import './index.scss'

export default {
  bind(el) {
    const $dialog = el.querySelector('.el-dialog')
    const $dialogHeader = el.querySelector('.el-dialog__header')

    addClass($dialog, 'el-dialog--draggable')

    const transform = { offsetX: 0, offsetY: 0 }

    const onMousedown = e => {
      const downX = e.clientX
      const downY = e.clientY
      const { offsetX, offsetY } = transform

      const { left, top, width, height } = $dialog.getBoundingClientRect()

      const clientWidth = document.documentElement.clientWidth
      const clientHeight = document.documentElement.clientHeight

      const minTranslateX = -left + offsetX
      const minTranslateY = -top + offsetY
      const maxTranslateX = clientWidth - left - width + offsetX
      const maxTranslateY = clientHeight - top - height + offsetY

      const onMousemove = e => {
        const translateX = Math.min(Math.max(offsetX + e.clientX - downX, minTranslateX), maxTranslateX)
        const translateY = Math.min(Math.max(offsetY + e.clientY - downY, minTranslateY), maxTranslateY)

        Object.assign(transform, { offsetX: translateX, offsetY: translateY })

        setStyle($dialog, 'transform', `translate(${translateX}px, ${translateY}px)`)
      }

      const onMouseup = () => {
        document.removeEventListener('mousemove', onMousemove)
        document.removeEventListener('mouseup', onMouseup)
      }

      document.addEventListener('mousemove', onMousemove)
      document.addEventListener('mouseup', onMouseup)
    }

    $dialogHeader.addEventListener('mousedown', onMousedown)
  },
}
