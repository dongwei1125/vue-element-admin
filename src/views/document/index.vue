<template>
  <div class="document">
    <a target="_blank" href="https://github.com/dongwei1125/vue-element-admin/">
      {{ $t('documentPage.github') }}
    </a>

    <dropdown :title="$t('documentPage.component')" :items="items" />
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown'

export default {
  name: 'Document',
  components: { Dropdown },
  computed: {
    items() {
      return [
        { title: this.$t('route.tinymce'), path: '/component/tinymce' },
        { title: this.$t('route.markdown'), path: '/component/markdown' },
        { title: this.$t('route.jsonEditor'), path: '/component/json-editor' },
        { title: this.$t('route.splitPane'), path: '/component/split-pane' },
        { title: this.$t('route.avatarUpload'), path: '/component/avatar-upload' },
        { title: this.$t('route.dropzone'), path: '/component/dropzone' },
        { title: this.$t('route.sticky'), path: '/component/sticky' },
        { title: this.$t('route.countTo'), path: '/component/count-to' },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.document {
  padding: 70px;

  a {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    padding: 0 16px;
    margin: 0 16px 16px 0;
    font-size: 20px;
    text-align: center;
    color: #fff;
    background-color: #000;
    cursor: pointer;
  }
}
</style>
