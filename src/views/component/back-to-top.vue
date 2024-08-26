<template>
  <div class="back-to-top">
    <ul>
      <li>
        <p class="tips">{{ $t('componentPage.backToTop') }}</p>
      </li>
      <li>
        <p class="tips">{{ $t('componentPage.backToTopDesc') }}</p>
      </li>

      <li v-for="i in 50" :key="i">{{ i }}</li>
    </ul>

    <el-tooltip placement="top" content="tooltip">
      <back-to-top />
    </el-tooltip>
  </div>
</template>

<script>
import BackToTop from '@/components/BackToTop'

export default {
  name: 'BackToTopPage',
  components: { BackToTop },
}
</script>

<style lang="scss" scoped>
ul {
  padding: 20px;
  margin: 0;

  li {
    padding: 10px;
    margin: 0;
    list-style: none;
  }
}

.tips {
  padding: 8px 24px;
  margin: 0;
  border-radius: 2px;
  font-size: 16px;
  color: #2c3e50;
  line-height: 32px;
  background-color: #eef1f6;
}
</style>
