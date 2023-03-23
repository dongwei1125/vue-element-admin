<script>
import { isExternal } from '@/utils'

export default {
  name: 'ItemLink',
  functional: true,
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  render(_, context) {
    const children = context.children
    const { to } = context.props

    return isExternal(to) ? (
      <a href={to} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    ) : (
      <router-link to={to}>{children}</router-link>
    )
  },
}
</script>