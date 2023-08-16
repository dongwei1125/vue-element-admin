<template>
  <el-tree ref="tree" :node-key="nodeKey" show-checkbox v-bind="$attrs" @check-change="checkChange" />
</template>

<script>
export default {
  name: 'TreeSelect',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    nodeKey: {
      type: String,
      required: true,
    },
  },
  watch: {
    value: {
      handler(keys) {
        this.setCheckedKeys(keys)
      },
      immediate: true,
    },
  },
  methods: {
    setCheckedKeys(keys) {
      this.$nextTick(() => {
        this.$refs.tree?.setCheckedKeys(keys)
      })
    },

    getCheckedKeys() {
      this.$nextTick(() => {
        const keys = this.$refs.tree?.getCheckedKeys() || []

        this.$emit('change', keys)
      })
    },

    checkChange() {
      this.getCheckedKeys()
    },
  },
}
</script>
