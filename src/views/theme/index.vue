<template>
  <div class="theme">
    <el-card class="theme-header">
      <template slot="header">{{ $t('themePage.title') }}</template>

      <div>
        <span class="title">{{ $t('themePage.dark') }}</span>
        <el-switch v-model="dark" />
        <p class="tips">
          {{ $t('themePage.tips') }}
          <el-link href="https://dongwei1125.github.io/theme-dark" type="primary" target="_blank">
            element-theme-darkplus
          </el-link>
        </p>
      </div>
    </el-card>

    <div ref="body" class="theme-content">
      <div class="item">
        <el-button>{{ $t('themePage.default') }}</el-button>
        <el-button type="primary">{{ $t('themePage.primary') }}</el-button>
        <el-button type="success">{{ $t('themePage.success') }}</el-button>
        <el-button type="info">{{ $t('themePage.info') }}</el-button>
        <el-button type="warning">{{ $t('themePage.warning') }}</el-button>
        <el-button type="danger">{{ $t('themePage.danger') }}</el-button>
      </div>

      <div class="item">
        <el-button plain>{{ $t('themePage.plain') }}</el-button>
        <el-button type="primary" plain>{{ $t('themePage.primary') }}</el-button>
        <el-button type="success" plain>{{ $t('themePage.success') }}</el-button>
        <el-button type="info" plain>{{ $t('themePage.info') }}</el-button>
        <el-button type="warning" plain>{{ $t('themePage.warning') }}</el-button>
        <el-button type="danger" plain>{{ $t('themePage.danger') }}</el-button>
      </div>

      <div class="item">
        <el-tag>{{ $t('themePage.one') }}</el-tag>
        <el-tag type="success">{{ $t('themePage.two') }}</el-tag>
        <el-tag type="info">{{ $t('themePage.three') }}</el-tag>
        <el-tag type="warning">{{ $t('themePage.four') }}</el-tag>
        <el-tag type="danger">{{ $t('themePage.five') }}</el-tag>
      </div>
    </div>
  </div>
</template>

<script>
import { hasClass, addClass, removeClass } from '@/utils/dom'

const DarkClassName = 'dark'

export default {
  name: 'Theme',
  data() {
    return {
      dark: false,
    }
  },
  watch: {
    dark(value) {
      if (value) {
        this.open()
      } else {
        this.close()
      }
    },
  },
  methods: {
    open() {
      const withoutDarkClassName = !hasClass(this.$refs.body, DarkClassName)

      if (withoutDarkClassName) {
        addClass(this.$refs.body, DarkClassName)
      }
    },

    close() {
      removeClass(this.$refs.body, DarkClassName)
    },
  },
}
</script>

<style lang="scss" scoped>
.theme {
  padding: 20px;
}

.theme-header {
  width: 470px;
  max-width: 100%;
  margin: 0 auto;

  a {
    color: #409eff;
  }

  .title {
    margin-right: 12px;
  }

  .tips {
    padding: 8px 24px;
    margin: 20px 0 0;
    border-radius: 2px;
    font-size: 16px;
    color: #2c3e50;
    line-height: 32px;
    background-color: #eef1f6;
  }
}

.theme-content {
  width: 75%;
  padding: 20px;
  margin: 0 auto;
  border-radius: 5px;

  &.dark {
    background: #141414;
  }

  .item {
    margin-bottom: 24px;
  }

  .el-tag {
    margin-right: 15px;
  }
}
</style>
