<template>
  <div class="tinymce">
    <i18n path="componentPage.tinymce" tag="p" class="tips">
      <template slot="link">
        <el-link href="https://github.com/tinymce/tinymce-vue" type="primary" target="_blank">
          tinymce-vue
        </el-link>
      </template>
    </i18n>

    <el-row :gutter="20">
      <el-col :span="12">
        <tinymce v-model="html" />
      </el-col>

      <el-col :span="12">
        <div v-html="html" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import logo from '@/assets/tinymce.png'

import Tinymce from '@/components/Tinymce'

const html = `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1>
<p style="text-align: center; font-size: 15px;"><img style="width: 110px; height: 97px;" title="TinyMCE Logo" src="${logo}" alt="TinyMCE Logo" />
<ul>
  <li>Our <a href="https://www.tiny.cloud/docs/tinymce/6/vue-cloud">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
  <li>Have a specific question? Visit the <a href="https://www.tiny.cloud/blog/tag/community">Community</a>.</li>
  <li>We also offer enterprise grade support as part of <a href="https://www.tiny.cloud/pricing">TinyMCE premium subscriptions</a>.</li>
</ul>`

export default {
  name: 'TinymcePage',
  components: { Tinymce },
  data() {
    return {
      html,
    }
  },
}
</script>

<style scoped>
.tinymce {
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
