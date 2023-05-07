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
import { resolvePath, isExternal } from '@/utils/path'

export default {
  name: 'HeaderSearch',
  data() {
    return {
      isExpand: false,
      keywords: '',
      options: [],
      optionsPool: [],
      fuse: null,
    }
  },
  computed: {
    routes() {
      return this.$store.getters.routes
    },
  },
  watch: {
    routes: {
      handler() {
        this.initOptionsPool()
        this.initFuse()
      },
      immediate: true,
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
    initOptionsPool() {
      this.optionsPool = this.generateRoutes(this.routes)
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

    initFuse() {
      const options = {
        threshold: 0.4,
        keys: [
          {
            name: 'title',
            weight: 0.7,
          },
          {
            name: 'path',
            weight: 0.3,
          },
        ],
      }

      this.fuse = new Fuse(this.optionsPool, options)
    },

    handleSearch(value) {
      if (value) {
        this.options = this.fuse.search(value).map(({ item }) => item)
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

.el-select {
  width: 0;
  transition: width 0.2s;
  overflow: hidden;
  vertical-align: bottom;

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
