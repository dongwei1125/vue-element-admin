<template>
  <div class="document">
    <a target="_blank" href="https://github.com/dongwei1125/vue-element-admin/">
      {{ $t('documentPage.github') }}
    </a>

    <dropdown :title="$t('documentPage.component')" :items="items">
      <template slot="item" slot-scope="{ item }">{{ $t(item.title) }}</template>
    </dropdown>
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown'

export default {
  name: 'Document',
  components: { Dropdown },
  data() {
    return {
      items: [
        { title: 'route.tinymce', path: '/component/tinymce' },
        { title: 'route.markdown', path: '/component/markdown' },
        { title: 'route.jsonEditor', path: '/component/json-editor' },
        { title: 'route.splitPane', path: '/component/split-pane' },
        { title: 'route.avatarUpload', path: '/component/avatar-upload' },
        { title: 'route.dropzone', path: '/component/dropzone' },
        { title: 'route.sticky', path: '/component/sticky' },
        { title: 'route.countTo', path: '/component/count-to' },
      ],
    }
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
