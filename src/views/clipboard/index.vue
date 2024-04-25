<template>
  <div class="clipboard">
    <el-tabs v-model="activeTab">
      <el-tab-pane :label="$t('clipboardPage.functional')" name="functional">
        <el-input v-model="text" />
        <el-button type="primary" icon="el-icon-document" @click="copy">
          {{ $t('clipboardPage.copy') }}
        </el-button>
      </el-tab-pane>

      <el-tab-pane :label="$t('clipboardPage.directive')" name="directive">
        <el-input v-model="text" />
        <el-button
          v-clipboard="text"
          v-clipboard:success="onSuccess"
          v-clipboard:error="onError"
          type="primary"
          icon="el-icon-document"
        >
          {{ $t('clipboardPage.copy') }}
        </el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import clipboard from '@/directives/clipboard'
import { copyText } from '@/utils/clipboard'

export default {
  name: 'Clipboard',
  directives: { clipboard },
  data() {
    return {
      activeTab: 'functional',
      text: 'https://github.com/dongwei1125/vue-element-admin',
    }
  },
  methods: {
    copy() {
      copyText(this.text)
        .then(() => {
          this.$message.success(this.$t('clipboardPage.succed'))
        })
        .catch(() => {
          this.$message.error(this.$t('clipboardPage.failed'))
        })
    },

    onSuccess() {
      this.$message.success(this.$t('clipboardPage.succed'))
    },

    onError() {
      this.$message.error(this.$t('clipboardPage.failed'))
    },
  },
}
</script>

<style scoped>
.clipboard {
  padding: 20px;
}

.el-input {
  width: 400px;
  max-width: 100%;
}
</style>
