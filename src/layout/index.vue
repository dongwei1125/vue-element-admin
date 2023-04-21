<template>
  <div class="layout">
    <sidebar />

    <div class="main">
      <div class="header" :class="classes">
        <navbar />
        <tags-view />
      </div>

      <main-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar.vue'
import TagsView from './components/TagsView.vue'
import MainView from './components/MainView.vue'

export default {
  name: 'Layout',
  components: { Sidebar, Navbar, TagsView, MainView },
  computed: {
    header() {
      return this.$store.getters.header
    },
    hidden() {
      return !this.header.show
    },
    fixed() {
      return this.header.fixed
    },
    hiddenTagsView() {
      return !this.header.tagsView
    },
    classes() {
      return {
        'header--hidden': this.hidden,
        'header--fixed': this.fixed,
        'header--hidden-tags-view': this.hiddenTagsView,
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

// hidden tagsView
.header--hidden-tags-view {
  > .tags-view {
    display: none;
  }

  + .main-view {
    min-height: calc(100vh - 50px);
  }
}

// hidden header
.header--hidden {
  display: none;

  + .main-view {
    min-height: 100vh;
    padding-top: 0 !important;
  }
}

// fixed header
.header--fixed {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9;
  background-color: #fff;
  transition: left 0.28s;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);

  + .main-view {
    min-height: 100vh;
    padding-top: 84px;
  }

  &.header--hidden-tags-view + .main-view {
    padding-top: 50px;
  }
}
</style>
