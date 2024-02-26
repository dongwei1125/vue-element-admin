<template>
  <div class="image-cropper">
    <div class="image-cropper-content">
      <div class="image-cropper-content-left">
        <div class="cropper">
          <vue-cropper
            ref="cropper"
            auto-crop
            fixed-box
            fill-color="#fff"
            :can-move-box="false"
            :info="false"
            :auto-crop-width="180"
            :auto-crop-height="180"
            :img="sourceImageBase64"
            @realTime="onRealTime"
          />
        </div>

        <div class="action">
          <div class="btn" @click="handleDecrease">
            <i class="el-icon-minus" />
          </div>
          <div class="btn" @click="handleIncrease">
            <i class="el-icon-plus" />
          </div>
          <div class="btn" @click="handleRotateLeft">
            <i class="el-icon-refresh-left" />
          </div>
          <div class="btn" @click="handleRotateRight">
            <i class="el-icon-refresh-right" />
          </div>
        </div>
      </div>

      <div class="image-cropper-content-right">
        <div v-if="square" class="item">
          <div>
            <img :src="targetImageBase64" alt="" />
          </div>
          <p>{{ $t('avatarUpload.avatarPreview') }}</p>
        </div>

        <div v-if="circle" class="item circle">
          <div>
            <img :src="targetImageBase64" alt="" />
          </div>
          <p>{{ $t('avatarUpload.avatarPreview') }}</p>
        </div>
      </div>
    </div>

    <div class="image-cropper-footer">
      <el-button type="text" @click="handleBack">{{ $t('avatarUpload.back') }}</el-button>
      <el-button type="text" @click="handleNext">{{ $t('avatarUpload.save') }}</el-button>
    </div>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'

export default {
  name: 'ImageCropper',
  components: { VueCropper },
  props: {
    sourceImageBase64: {
      type: String,
      required: true,
    },
    circle: {
      type: Boolean,
      default: true,
    },
    square: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      targetImageBase64: '',
    }
  },
  methods: {
    onRealTime() {
      this.$refs.cropper.getCropData(base64 => {
        this.targetImageBase64 = base64
      })
    },

    handleDecrease() {
      this.$refs.cropper.changeScale(-1)
    },

    handleIncrease() {
      this.$refs.cropper.changeScale(1)
    },

    handleRotateLeft() {
      this.$refs.cropper.rotateLeft()
    },

    handleRotateRight() {
      this.$refs.cropper.rotateRight()
    },

    handleBack() {
      this.$emit('back')
    },

    handleNext() {
      this.$emit('next', this.targetImageBase64)
    },
  },
}
</script>

<style lang="scss" scoped>
.image-cropper {
  height: 100%;
  position: relative;
}

.image-cropper-content {
  height: 240px;

  .image-cropper-content-left {
    width: 240px;
  }

  .image-cropper-content-right {
    position: absolute;
    right: 0;
    top: 0;
  }
}

.image-cropper-content-left {
  .cropper {
    height: 180px;
    overflow: hidden;
    position: relative;

    @mixin shade {
      content: '';
      position: absolute;
      top: 0;
      width: 30px;
      height: 100%;
      background-color: rgba(241, 242, 243, 0.8);
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);
      z-index: 1;
    }

    &::before {
      left: 0;

      @include shade;
    }

    &::after {
      right: 0;

      @include shade;
    }
  }

  .action {
    padding: 0 30px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    .btn {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.08);
      text-align: center;
      line-height: 18px;
      color: #fff;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.14);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
      }
    }
  }
}

.image-cropper-content-right {
  .item {
    float: left;
    margin-left: 16px;

    > div {
      width: 100px;
      height: 100px;
      padding: 5px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 2px;
    }

    &.circle {
      > div {
        border-radius: 50%;
      }

      img {
        border-radius: 50%;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }

    p {
      color: #bbb;
      text-align: center;
    }
  }
}

.image-cropper-footer {
  position: absolute;
  right: 0;
  bottom: 0;

  .el-button {
    width: 100px;
  }
}

::v-deep {
  .vue-cropper {
    background-image: none;
  }

  .cropper-modal {
    background-color: unset;
  }

  .cropper-face {
    opacity: 0;
  }

  .cropper-view-box {
    outline-color: transparent;
  }

  .cropper-crop-box {
    background-color: #e5e5e0;
  }
}
</style>
