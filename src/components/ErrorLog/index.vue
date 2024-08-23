<template>
  <div class="error-log">
    <el-badge is-dot>
      <el-button size="small" type="danger" @click="handleOpen">
        <svg-icon icon-class="bug" />
      </el-button>
    </el-badge>

    <log-dialog :visible.sync="visible" />
  </div>
</template>

<script>
import LogDialog from './LogDialog.vue'

export default {
  name: 'ErrorLog',
  components: { LogDialog },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    handleOpen() {
      this.visible = true
    },
  },
}
</script>

<style scoped>
.error-log {
  display: inline-block;
}

.el-badge {
  line-height: 25px;
  margin-top: -5px;
}

.el-button {
  padding: 8px 10px;
}
</style>
