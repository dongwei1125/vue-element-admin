import { hasPermission } from '@/utils/permission'

function isRemoveNode(el, binding) {
  const roles = binding.value

  if (!hasPermission(roles)) {
    el.parentNode && el.parentNode.removeChild(el)
  }
}

export default {
  inserted(el, binding) {
    isRemoveNode(el, binding)
  },
  update(el, binding) {
    isRemoveNode(el, binding)
  },
}
