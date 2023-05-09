<template>
  <el-tooltip content="元素大小">
    <div class="element-size">
      <el-dropdown trigger="click" @command="updateSize">
        <div>
          <svg-icon icon-class="size" />
        </div>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="item of options"
            :key="item.value"
            :command="item.value"
            :disabled="item.value === size"
          >
            {{ item.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-tooltip>
</template>

<script>
export default {
  name: 'ElementSize',
  data() {
    return {
      options: [
        { label: '默认', value: 'default' },
        { label: '中等', value: 'medium' },
        { label: '小', value: 'small' },
        { label: '超小', value: 'mini' },
      ],
    }
  },
  computed: {
    size() {
      return this.$store.getters.app.size
    },
  },
  methods: {
    updateSize(size) {
      this.$ELEMENT.size = size
      this.$store.dispatch('app/updateSize', size)
      this.refreshView()
    },

    refreshView() {
      this.$router.replace({
        path: '/redirect' + this.$route.fullPath,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.element-size {
  display: inline-block;
}
</style>
