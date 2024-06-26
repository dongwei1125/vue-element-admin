import Sortable from 'sortablejs'
import { addClass } from '@/utils/dom'

import './index.scss'

export default {
  bind(el, _, vnode) {
    addClass(el, 'el-select--draggable')

    const $span = el.querySelector('.el-select__tags > span')
    const context = vnode.context

    new Sortable($span, {
      ghostClass: 'el-tag--ghost',
      onEnd(evt) {
        const [targetItem] = context.value.splice(evt.oldIndex, 1)

        context.value.splice(evt.newIndex, 0, targetItem)
      },
    })
  },
}
