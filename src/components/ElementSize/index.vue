<template>
  <el-tooltip :content="$t('size.title')">
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
            {{ $t(item.label) }}
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
        { label: 'size.default', value: 'default' },
        { label: 'size.medium', value: 'medium' },
        { label: 'size.small', value: 'small' },
        { label: 'size.mini', value: 'mini' },
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

<style scoped>
.element-size {
  display: inline-block;
}
</style>
