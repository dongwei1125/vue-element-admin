<template>
  <div class="read-image">
    <div class="read-image-content">
      <el-upload
        action="#"
        drag
        :before-upload="beforeUpload"
        :http-request="httpRequest"
        :show-file-list="false"
      >
        <i class="el-icon-upload" />
        <p>{{ $t('avatarUpload.tips') }}</p>
      </el-upload>

      <transition name="zoom-in-top">
        <div v-if="showError" class="read-image-error">{{ errorMessage }}</div>
      </transition>
    </div>

    <div class="read-image-footer">
      <el-button type="text" @click="handleCancel">{{ $t('avatarUpload.cancel') }}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReadImage',
  props: {
    maxSize: {
      type: Number,
      default: 10240,
    },
  },
  data() {
    return {
      showError: false,
      errorMessage: '',
    }
  },
  methods: {
    init() {
      this.showError = false
      this.errorMessage = ''
    },

    handleCancel() {
      this.$emit('cancel')
    },

    beforeUpload(file) {
      const { type, size } = file

      if (!type.includes('image')) {
        this.showError = true
        this.errorMessage = this.$t('avatarUpload.onlyImage')

        return false
      }

      if (size / 1024 > this.maxSize) {
        this.showError = true
        this.errorMessage = this.$t('avatarUpload.outOfSize', { size: `${this.maxSize} KB` })

        return false
      }

      return true
    },

    httpRequest({ file }) {
      const fr = new FileReader()

      fr.readAsDataURL(file)

      fr.onload = () => {
        const base64 = fr.result

        this.$emit('success', base64)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$color: #409eff;

.read-image {
  height: 100%;
  position: relative;
}

.read-image-content {
  position: relative;

  .read-image-error {
    color: #f56c6c;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    left: 0;
  }
}

.read-image-footer {
  position: absolute;
  right: 0;
  bottom: 0;

  .el-button {
    width: 100px;
  }
}

::v-deep {
  .el-upload {
    width: 100%;
  }

  .el-upload-dragger {
    width: 100%;
    height: 170px;
    border: 1px dashed rgba(0, 0, 0, 0.08);
    background-color: rgba(0, 0, 0, 0.03);

    &:hover {
      border-color: $color;
      background-color: rgba(0, 0, 0, 0.05);
    }

    &.is-dragover {
      border-color: $color;
      background-color: mix(#fff, $color, 90%);
    }

    i {
      font-size: 50px;
      color: rgba(0, 0, 0, 0.3);
      margin: 35px 0 0;
    }

    p {
      font-size: 14px;
      line-height: 30px;
      color: #666;
    }
  }
}

// transition
.zoom-in-top-enter-active,
.zoom-in-top-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center top;
}

.zoom-in-top-enter,
.zoom-in-top-leave-active {
  opacity: 0;
  transform: scaleY(0);
}
</style>
