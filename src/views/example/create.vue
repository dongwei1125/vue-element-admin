<template>
  <div class="article-create">
    <sticky></sticky>

    <p class="tips">{{ $t('articleCreate.tips') }}</p>

    <article-form />
  </div>
</template>

<script>
import Sticky from '@/components/Sticky'
import ArticleForm from './components/ArticleForm.vue'

export default {
  name: 'ArticleCreate',
  components: { Sticky, ArticleForm },
}
</script>

<style lang="scss" scoped>
.article-create {
  padding: 40px 45px 20px 50px;
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
