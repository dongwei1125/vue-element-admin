<template>
  <div class="svg-icons">
    <div v-for="(item, index) in icons" :key="index" class="item" @click="copy(generateIconCode(item))">
      <el-tooltip placement="top">
        <template slot="content">{{ generateIconCode(item) }}</template>

        <div>
          <svg-icon :icon-class="item" />
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
  name: 'SvgIcons',
  data() {
    return {
      icons,
    }
  },
  methods: {
    generateIconCode(symbol) {
      return `<svg-icon icon-class="${symbol}" />`
    },

    copy(text) {
      copyText(text)
        .then(() => {
          this.$message.success(this.$t('clipboardPage.succed'))
        })
        .catch(() => {
          this.$message.error(this.$t('clipboardPage.failed'))
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.svg-icons {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
}

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
</style>
