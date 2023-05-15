<template>
  <div class="header-search" :class="{ 'header-search--expand': isExpand }" @click.stop="toggle">
    <svg-icon icon-class="search" />

    <el-select
      ref="select"
      v-model="keywords"
      :remote-method="handleSearch"
      filterable
      default-first-option
      remote
      placeholder=""
      @change="change"
    >
      <el-option
        v-for="item in options"
        :key="item.path"
        :label="item.title.join(' / ')"
        :value="item.path"
      />
    </el-select>
  </div>
</template>

<script>
import Fuse from 'fuse.js'
import pinyin from 'pinyin'
import { mapGetters } from 'vuex'
import { resolvePath, isExternal } from '@/utils/path'

export default {
  name: 'HeaderSearch',
  data() {
    return {
      isExpand: false,
      keywords: '',
      options: [],
      searchPool: [],
      fuse: null,
    }
  },
  computed: {
    ...mapGetters(['app', 'routes']),
    language() {
      return this.app.language
    },
    isChinese() {
      return this.language === 'zh'
    },
    pinyinSearch() {
      return this.app.pinyinSearch
    },
  },
  watch: {
    routes: {
      handler() {
        this.init()
      },
      immediate: true,
    },
    pinyinSearch() {
      this.initFuse()
    },
    isExpand(value) {
      if (value) {
        document.body.addEventListener('click', this.close)
      } else {
        document.body.removeEventListener('click', this.close)
      }
    },
  },
  methods: {
    init() {
      this.searchPool = this.generateRoutes(this.routes)

      this.addPinyinTitle()
      this.initFuse()
    },

    generateRoutes(routes, basePath = '', prefixTitles = []) {
      const result = []

      routes.forEach(route => {
        const { path, meta, children } = route
        const { hidden, title } = meta || {}

        if (hidden) return

        const item = {
          path: isExternal(path) ? path : resolvePath(basePath, path),
          title: [...prefixTitles, ...(title ? [title] : [])],
        }

        if (children?.length) {
          const childrenRoutes = this.generateRoutes(children, item.path, item.title)

          if (childrenRoutes?.length) {
            result.push(...childrenRoutes)
          }
        } else {
          result.push(item)
        }
      })

      return result
    },

    addPinyinTitle() {
      const toPinyin = words => pinyin(words, { style: pinyin.STYLE_NORMAL }).join('')

      this.searchPool.forEach(item => {
        item.pinyinTitle = item.title.map(words => toPinyin(words))
      })
    },

    initFuse() {
      const keys = [
        { name: 'title', weight: 0.7 },
        { name: 'path', weight: 0.3 },
      ]

      if (this.isChinese && this.pinyinSearch) {
        keys.push({ name: 'pinyinTitle', weight: 0.3 })
      }

      this.fuse = new Fuse(this.searchPool, { keys, threshold: 0.4 })
    },

    handleSearch(text) {
      if (text) {
        this.options = this.fuse.search(text).map(({ item }) => item)
      } else {
        this.options = []
      }
    },

    change(path) {
      if (isExternal(path)) {
        this.linkTo(path)
      } else {
        this.$router.push(path)
      }

      this.keywords = ''
      this.options = []
      this.isExpand = false
    },

    linkTo(path) {
      const link = document.createElement('a')

      link.href = path
      link.target = '_blank'
      link.rel = 'noreferrer noopener'

      link.click()
    },

    toggle() {
      this.isExpand = !this.isExpand

      if (this.isExpand) {
        this.$refs.select?.focus()
      }
    },

    close() {
      this.isExpand = false
      this.options = []
    },
  },
}
</script>

<style lang="scss" scoped>
.header-search {
  display: inline-block;
}

.svg-icon {
  vertical-align: middle;
}

.el-select {
  width: 0;
  transition: width 0.2s;
  overflow: hidden;
  vertical-align: middle;

  ::v-deep {
    input {
      padding: 0;
      border-radius: 0;
      border: none;
      border-bottom: 1px solid #d9d9d9 !important;
      vertical-align: middle;
    }

    .el-input__suffix {
      display: none;
    }
  }
}

// expand
.header-search--expand {
  .el-select {
    width: 210px;
    margin-left: 10px;
  }
}
</style>
