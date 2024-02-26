<template>
  <el-dialog
    append-to-body
    width="600px"
    custom-class="avatar-upload"
    :visible.sync="show"
    :close-on-click-modal="false"
  >
    <i class="el-icon-close" @click="show = false" />

    <div class="avatar-upload-content">
      <read-image
        v-if="step === STEPS.READ"
        ref="readImage"
        :max-size="maxSize"
        @cancel="onReadImageCancel"
        @success="onReadImageSuccess"
      />

      <image-cropper
        v-show="step === STEPS.CROP"
        :circle="circle"
        :square="square"
        :source-image-base64="sourceImageBase64"
        @back="onImageCropperBack"
        @next="onImageCropperNext"
      />

      <upload-result
        v-if="step === STEPS.UPLOAD"
        :action="action"
        :params="params"
        :headers="headers"
        :target-image-base64="targetImageBase64"
        @back="onUploadResultBack"
        @close="onUploadResultClose"
        @success="onUploadResultSuccess"
        @fail="onUploadResultFail"
      />
    </div>
  </el-dialog>
</template>

<script>
import lang from './lang'
import { STEPS } from './constant'

import ReadImage from './ReadImage.vue'
import ImageCropper from './ImageCropper.vue'
import UploadResult from './UploadResult.vue'

export default {
  name: 'AvatarUpload',
  components: { ReadImage, ImageCropper, UploadResult },
  mixins: [lang],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: true,
    },
    square: {
      type: Boolean,
      default: true,
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
    maxSize: {
      type: Number,
      default: 10240,
    },
  },
  data() {
    return {
      STEPS,
      step: STEPS.READ,
      sourceImageBase64: '',
      targetImageBase64: '',
    }
  },
  computed: {
    show: {
      get() {
        return this.visible
      },
      set(value) {
        this.$emit('update:visible', value)
      },
    },
  },
  watch: {
    visible(value) {
      if (value) {
        this.init()
      }
    },
  },
  methods: {
    init() {
      this.step = STEPS.READ
      this.sourceImageBase64 = ''
      this.targetImageBase64 = ''

      this.$nextTick(() => {
        this.$refs.readImage?.init()
      })
    },

    onReadImageCancel() {
      this.show = false
    },

    onReadImageSuccess(base64) {
      this.step = STEPS.CROP
      this.sourceImageBase64 = base64
    },

    onImageCropperBack() {
      this.step = STEPS.READ
    },

    onImageCropperNext(base64) {
      this.step = STEPS.UPLOAD
      this.targetImageBase64 = base64
    },

    onUploadResultBack() {
      this.step = STEPS.CROP
    },

    onUploadResultClose() {
      this.show = false
    },

    onUploadResultSuccess(responce) {
      this.$emit('success', responce)
    },

    onUploadResultFail(error) {
      this.$emit('fail', error)
    },
  },
}
</script>

<style lang="scss">
.avatar-upload {
  .el-dialog__header,
  .el-dialog__footer {
    display: none;
  }

  .el-dialog__body {
    height: 330px;
    padding: 25px;
    position: relative;

    > .el-icon-close {
      position: absolute;
      right: -30px;
      top: -30px;
      font-size: 24px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      transform: rotate(0);
      transition: transform 0.18s;

      &:hover {
        transform: rotate(90deg);
      }
    }
  }

  .avatar-upload-content {
    height: 100%;
  }
}
</style>
