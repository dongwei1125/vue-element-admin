<template>
  <div class="element-icons">
    <div v-for="(item, index) in icons" :key="index" class="item" @click="handleCopy(generateIconCode(item))">
      <el-tooltip placement="top">
        <template slot="content">{{ generateIconCode(item) }}</template>

        <div>
          <i :class="`el-icon-${item}`" />
          <span>{{ item }}</span>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import icons from './icons'
import { copyText } from '@/utils/clipboard'

export default {
  name: 'ElementIcons',
  data() {
    return {
      icons,
    }
  },
  methods: {
    generateIconCode(symbol) {
      return `<i class="el-icon-${symbol}" />`
    },

    handleCopy(text) {
      copyText(text)
        .then(() => {
          this.$message.success(this.$t('clipboardPage.successfully'))
        })
        .catch(() => {
          this.$message.error(this.$t('clipboardPage.failed'))
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.element-icons {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));

  .item {
    width: 100px;
    height: 85px;
    padding: 20px;
    box-sizing: content-box;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
    text-align: center;

    span {
      display: block;
      font-size: 16px;
      margin-top: 10px;
    }
  }
}
</style>
