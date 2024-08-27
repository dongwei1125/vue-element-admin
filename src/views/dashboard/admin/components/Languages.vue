<template>
  <div class="languages">
    <el-card>
      <div slot="header">
        <div class="languages-header">
          <img src="@/assets/bg.jpeg" />
        </div>
      </div>

      <div class="languages-content">
        <pan-thumb :image="require('@/assets/rock-bg.gif')" width="70px" height="70px" />

        <text-hover-effect text="vue-element-admin" />

        <div class="item">
          <span>Vue</span>
          <el-progress :percentage="60" />
        </div>
        <div class="item">
          <span>JavaScript</span>
          <el-progress :percentage="28" status="success" />
        </div>
        <div class="item">
          <span>SCSS</span>
          <el-progress :percentage="8" status="warning" />
        </div>
        <div class="item">
          <span>Other</span>
          <el-progress :percentage="4" status="exception" />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import PanThumb from '@/components/PanThumb'
import TextHoverEffect from '@/components/TextHoverEffect'

export default {
  name: 'Languages',
  components: { PanThumb, TextHoverEffect },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .el-card__header {
    padding: 0;
  }

  .pan-thumb {
    padding: 5px;
    background-color: #fff;
    box-shadow: none;
  }

  .text-hover-effect {
    position: absolute;
    right: 0;
    top: 0;
  }
}

.languages-header {
  height: 220px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;

    &:hover {
      transform: scale(1.1, 1.1);
      filter: contrast(130%);
    }
  }
}

.languages-content {
  padding-top: 35px;
  position: relative;

  .pan-thumb {
    position: absolute;
    left: 0;
    top: -45px;
  }

  .item {
    margin-bottom: 10px;

    > span {
      font-size: 14px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
