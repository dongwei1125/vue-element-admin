<template>
  <div class="avatar-upload-page">
    <i18n path="componentPage.avatar" tag="p" class="tips">
      <template slot="link">
        <el-link href="https://github.com/xyxiao001/vue-cropper" type="primary" target="_blank">
          vue-cropper
        </el-link>
      </template>
    </i18n>

    <pan-thumb :image="image" />

    <el-button type="primary" icon="el-icon-upload" @click="visible = true">
      {{ $t('componentPage.updateAvatar') }}
    </el-button>

    <avatar-upload :visible.sync="visible" :action="action" @success="onSuccess" @fail="onFail" />
  </div>
</template>

<script>
import PanThumb from '@/components/PanThumb'
import AvatarUpload from '@/components/AvatarUpload'

export default {
  name: 'AvatarUploadPage',
  components: { PanThumb, AvatarUpload },
  data() {
    return {
      image: require('@/assets/iron-man.png'),
      action: '/vue-element-admin/upload',
      visible: false,
    }
  },
  methods: {
    onSuccess(e) {
      console.log(e)
    },

    onFail(e) {
      console.log(e)
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar-upload-page {
  padding: 20px;

  > .el-button {
    display: block;
    margin-top: 20px;
  }
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
