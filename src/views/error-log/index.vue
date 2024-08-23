<template>
  <div class="error-log-page">
    <error-a />
    <error-b />

    <h3>{{ $t('errorLogPage.title') }}</h3>
    <i18n path="errorLogPage.tips" tag="p" class="tips">
      <template slot="link">
        <el-link href="https://v2.cn.vuejs.org/v2/api/#errorHandler" type="primary" target="_blank">
          errorHandler
        </el-link>
      </template>
    </i18n>
  </div>
</template>

<script>
import ErrorA from './components/ErrorTestA'
import ErrorB from './components/ErrorTestB'

export default {
  name: 'ErrorLogPage',
  components: { ErrorA, ErrorB },
}
</script>

<style scoped>
.error-log-page {
  padding: 20px;
}

.tips {
  padding: 8px 24px;
  margin: 0 0 20px;
  border-radius: 2px;
  font-size: 16px;
  color: #2c3e50;
  line-height: 32px;
  background-color: #eef1f6;
}
</style>
