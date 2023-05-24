<template>
  <drawer :visible.sync="visible">
    <div class="settings">
      <h3 class="settings-title">{{ $t('settings.title') }}</h3>

      <div class="settings-item">
        <span>{{ $t('settings.theme') }}</span>
        <theme-picker />
      </div>

      <div class="settings-item top-divider">
        <span>{{ $t('settings.sidebar') }}</span>
        <el-switch v-model="sidebar" />
      </div>

      <div class="settings-item">
        <span>{{ $t('settings.sidebarLogo') }}</span>
        <el-switch v-model="sidebarLogo" :disabled="!sidebar" />
      </div>

      <div class="settings-item top-divider">
        <span>{{ $t('settings.header') }}</span>
        <el-switch v-model="header" />
      </div>

      <div class="settings-item">
        <span>{{ $t('settings.fixedHeader') }}</span>
        <el-switch v-model="fixedHeader" :disabled="!header" />
      </div>

      <div class="settings-item">
        <span>{{ $t('settings.tagsView') }}</span>
        <el-switch v-model="tagsView" :disabled="!header" />
      </div>

      <div v-if="isChinese" class="settings-item top-divider">
        <span>菜单拼音搜索</span>
        <el-switch v-model="pinyinSearch" />
      </div>
    </div>
  </drawer>
</template>

<script>
import ThemePicker from '@/components/ThemePicker'
import Drawer from './Drawer.vue'

export default {
  name: 'Settings',
  components: { ThemePicker, Drawer },
  data() {
    return {
      visible: false,
    }
  },
  computed: {
    app() {
      return this.$store.getters.app
    },
    language() {
      return this.app.language
    },
    isChinese() {
      return this.language === 'zh'
    },
    sidebar: {
      get() {
        return this.app.sidebar.show
      },
      set(value) {
        this.$store.dispatch('app/displaySideBar', value)
      },
    },
    sidebarLogo: {
      get() {
        return this.app.sidebar.logo
      },
      set(value) {
        this.$store.dispatch('app/displaySideBarLogo', value)
      },
    },
    header: {
      get() {
        return this.app.header.show
      },
      set(value) {
        this.$store.dispatch('app/displayHeader', value)
      },
    },
    fixedHeader: {
      get() {
        return this.app.header.fixed
      },
      set(value) {
        this.$store.dispatch('app/fixedHeader', value)
      },
    },
    tagsView: {
      get() {
        return this.app.header.tagsView
      },
      set(value) {
        this.$store.dispatch('app/displayTagsView', value)
      },
    },
    pinyinSearch: {
      get() {
        return this.app.pinyinSearch
      },
      set(value) {
        this.$store.dispatch('app/usePinyinSearch', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.settings {
  padding: 24px;
  height: 100%;
}

.settings-title {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  margin: 12px 0;
}

.settings-item {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  padding: 12px 0;
  text-align: right;

  > span {
    float: left;
  }
}

.top-divider {
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #f2f2f2;
  }
}
</style>
