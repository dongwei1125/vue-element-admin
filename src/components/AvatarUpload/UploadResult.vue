<template>
  <div class="upload-result">
    <div class="upload-result-content">
      <div v-if="status === STATUS.UPLOADING" class="loading">
        <p>
          <i class="el-icon-loading" />
          <span>{{ $t('avatarUpload.loading') }}</span>
        </p>
        <el-progress :percentage="progress" />
      </div>

      <div v-if="status === STATUS.SUCCESS" class="success">
        <i class="el-icon-check" />
        <span>{{ $t('avatarUpload.succed') }}</span>
      </div>

      <div v-if="status === STATUS.FAIL" class="fail">
        <i class="el-icon-close" />
        <span>{{ $t('avatarUpload.failed') }}</span>
      </div>
    </div>

    <div class="upload-result-footer">
      <el-button type="text" @click="handleBack">{{ $t('avatarUpload.back') }}</el-button>
      <el-button type="text" @click="handleClose">{{ $t('avatarUpload.close') }}</el-button>
    </div>
  </div>
</template>

<script>
import { STATUS } from './constant'
import { http, base64ToFile, objectToFormData } from './utils'

export default {
  name: 'UploadResult',
  props: {
    targetImageBase64: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    params: {
      type: Object,
      default: () => ({}),
    },
    headers: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      STATUS,
      status: STATUS.UPLOADING,
      progress: 0,
    }
  },
  computed: {
    request() {
      return data =>
        http.post(this.action, data, {
          headers: this.headers,
          onUploadProgress: this.onUploadProgress,
        })
    },
  },
  mounted() {
    this.uploding()
  },
  methods: {
    uploding() {
      const file = base64ToFile(this.targetImageBase64)
      const data = { file, ...this.params }
      const formdata = objectToFormData(data)

      this.request(formdata)
        .then(responce => {
          this.onUploadSuccess(responce)
        })
        .catch(error => {
          this.onUploadFail(error)
        })
    },

    onUploadSuccess(responce) {
      this.progress = 100
      this.status = STATUS.SUCCESS

      this.$emit('success', responce)
    },

    onUploadFail(error) {
      this.status = STATUS.FAIL

      this.$emit('fail', error)
    },

    onUploadProgress(e) {
      const { loaded, total } = e
      const t = total + 1

      this.progress = Math.floor((loaded / t) * 100)
    },

    handleBack() {
      this.$emit('back')
    },

    handleClose() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.upload-result {
  height: 100%;
  position: relative;
}

.upload-result-content {
  height: 170px;
  padding: 35px;
  border: 1px dashed rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.03);
  text-align: center;

  .loading {
    p {
      padding: 15px;
      margin: 0;
      font-size: 14px;
      color: #999;
      line-height: 30px;
    }

    i {
      margin-right: 6px;
    }
  }

  .success {
    height: 100px;
    line-height: 100px;
    color: #409eff;

    i {
      font-weight: bold;
      margin-right: 6px;
    }
  }

  .fail {
    height: 100px;
    line-height: 100px;
    color: #f56c6c;

    i {
      font-weight: bold;
      margin-right: 6px;
    }
  }
}

.upload-result-footer {
  position: absolute;
  right: 0;
  bottom: 0;

  .el-button {
    width: 100px;
  }
}
</style>
