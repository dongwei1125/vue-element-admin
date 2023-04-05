<template>
  <div class="layout">
    <sidebar />

    <div class="main">
      <div :class="['header', classes]">
        <navbar />
        <tags-view />
      </div>

      <main-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar.vue'
import TagsView from './components/TagsView.vue'
import MainView from './components/MainView.vue'

export default {
  name: 'Layout',
  components: { Sidebar, Navbar, TagsView, MainView },
  computed: {
    ...mapGetters(['header']),
    hidden() {
      return !this.header.show
    },
    fixed() {
      return this.header.fixed
    },
    classes() {
      return {
        'header--hidden': this.hidden,
        'header--fixed': this.fixed,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
}

// hidden header
.header--hidden {
  display: none;

  + .main-view {
    min-height: 100vh;
  }
}
</style>
