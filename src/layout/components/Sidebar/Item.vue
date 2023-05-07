<script>
export default {
  name: 'Item',
  functional: true,
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  render(_, context) {
    const { title, icon } = context.props
    const vnodes = []

    if (icon) {
      if (icon.includes('el-icon')) {
        vnodes.push(<i class={[icon, 'submenu-el-icon']}></i>)
      } else {
        vnodes.push(<svg-icon icon-class={icon} />)
      }
    }

    if (title) {
      vnodes.push(<span slot="title">{title}</span>)
    }

    return vnodes
  },
}
</script>

<style scoped>
.submenu-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
