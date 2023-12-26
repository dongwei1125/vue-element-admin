<template>
  <div class="markdown">
    <i18n path="componentPage.markdown" tag="p" class="tips">
      <template slot="link">
        <el-link href="https://github.com/hinesboy/mavonEditor" type="primary" target="_blank">
          mavon-editor
        </el-link>
      </template>
    </i18n>

    <mavon v-model="markdown" />
  </div>
</template>

<script>
import Mavon from '@/components/Mavon'

const markdown = `# Welcome to the MavonEditor demo!

Our [documentation](https://github.com/hinesboy/mavonEditor#api-文档) is a great resource for learning how to configure MavonEditor.`

export default {
  name: 'MarkdownPage',
  components: { Mavon },
  data() {
    return {
      markdown,
    }
  },
}
</script>

<style scoped>
.markdown {
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
