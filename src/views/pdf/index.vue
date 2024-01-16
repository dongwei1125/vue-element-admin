<template>
  <div class="pdf">
    <p class="tips">{{ $t('pdfPage.tips') }}</p>

    <router-link target="_blank" to="/pdf/download">
      <el-button type="primary">{{ $t('pdfPage.download') }}</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PDF',
}
</script>

<style lang="scss" scoped>
.pdf {
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
