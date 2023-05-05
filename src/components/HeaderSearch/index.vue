<template>
  <div class="header-search" :class="{ 'header-search--expend': isExpend }" @click.stop="toggle">
    <svg-icon icon-class="search" />

    <el-select ref="select" v-model="keywords" filterable remote placeholder="">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'HeaderSearch',
  data() {
    return {
      isExpend: false,
      keyWords: '',
      options: [],
      pool: [],
    }
  },
  computed: {
    routes() {
      return this.$store.getters.routes
    },
  },
  watch: {
    routes() {},
    isExpend(value) {
      if (value) {
        document.body.addEventListener('click', this.close)
      } else {
        document.body.removeEventListener('click', this.close)
      }
    },
  },
  methods: {
    toggle() {
      this.isExpend = !this.isExpend

      if (this.isExpend) {
        this.$refs.select?.focus()
      }
    },

    close() {
      this.isExpend = false
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

// expend
.header-search--expend {
  .el-select {
    width: 210px;
    margin-left: 10px;
  }
}
</style>
