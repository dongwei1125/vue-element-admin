<template>
  <div class="upload-image">
    <el-upload
      class="upload-image-uploader"
      :action="action"
      drag
      :multiple="false"
      :show-file-list="false"
      :accept="accept"
      :before-upload="onBeforeUpload"
      :on-success="onSuccess"
    >
      <i class="el-icon-upload" />
      <span class="upload-image-text" v-html="$t('uploadImage.tips')" />
    </el-upload>

    <div class="upload-image-preview1">
      <template v-if="imageUrl">
        <img :src="imageUrl" />

        <div class="upload-image-preview-action">
          <i class="el-icon-delete" @click="onDelete" />
        </div>
      </template>
    </div>

    <div class="upload-image-preview2">
      <template v-if="imageUrl">
        <img :src="imageUrl" />

        <div class="upload-image-preview-action">
          <i class="el-icon-delete" @click="onDelete" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import lang from './lang'

export default {
  name: 'UploadImage',
  mixins: [lang],
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    action: {
      type: String,
      required: true,
    },
    beforeUpload: Function, // eslint-disable-line
  },
  data() {
    return {
      accept: '.jpeg, .jpg, .png',
      fileTypes: ['image/jpeg', 'image/jpg', 'image/png'],
    }
  },
  computed: {
    imageUrl() {
      return this.value
    },
  },
  methods: {
    onBeforeUpload(file) {
      if (!this.fileTypes.includes(file.type)) {
        this.$message.warning(this.$t('uploadImage.onlyImage'))

        return false
      }

      if (this.beforeUpload) {
        return this.beforeUpload(file)
      }
    },

    onSuccess(file) {
      this.$emit('input', file?.files?.file || '')
    },

    onDelete() {
      this.$emit('input', '')
    },
  },
}
</script>

<style lang="scss" scoped>
.upload-image {
  display: flex;
}

.upload-image-uploader {
  width: 35%;
}

.upload-image-text {
  color: #606266;
  font-size: 14px;
  text-align: center;
  display: block;
}

.upload-image-preview1,
.upload-image-preview2 {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover .upload-image-preview-action {
    opacity: 1;
  }
}

.upload-image-preview1 {
  width: 320px;
  height: 180px;
  margin: 0 50px;
}

.upload-image-preview2 {
  width: 200px;
  height: 200px;
}

.upload-image-preview-action {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s;
  cursor: pointer;

  .el-icon-delete {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    color: #fff;
  }
}

::v-deep {
  .el-upload,
  .el-upload-dragger {
    width: 100%;
  }

  em {
    color: #409eff;
  }
}
</style>
