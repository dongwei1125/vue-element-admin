<template>
  <div class="dropzone-page">
    <i18n path="componentPage.dropzone" tag="p" class="tips">
      <template slot="link">
        <el-link href="https://github.com/rowanwins/vue-dropzone" type="primary" target="_blank">
          vue-dropzone
        </el-link>
      </template>
    </i18n>

    <dropzone
      id="dropzone"
      :options="options"
      @vdropzone-success="onSuccess"
      @vdropzone-removed-file="onRemove"
    />
  </div>
</template>

<script>
import Dropzone from '@/components/Dropzone'

export default {
  name: 'DropzonePage',
  components: { Dropzone },
  data() {
    return {
      options: {
        url: '/vue-element-admin/upload',
        addRemoveLinks: true,
        thumbnailWidth: 200,
        thumbnailHeight: 200,
      },
    }
  },
  methods: {
    onSuccess(e) {
      console.log(e)
    },

    onRemove(e) {
      console.log(e)
    },
  },
}
</script>

<style scoped>
.dropzone-page {
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
