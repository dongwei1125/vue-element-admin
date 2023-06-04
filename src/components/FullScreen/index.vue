<template>
  <div v-if="isEnabled" class="full-screen" @click="toggle">
    <svg-icon :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'FullScreen',
  data() {
    return {
      isFullscreen: false,
      isEnabled: false,
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destory()
  },
  methods: {
    init() {
      this.isEnabled = screenfull.isEnabled

      if (this.isEnabled) {
        screenfull.on('change', this.change)
      }
    },

    destory() {
      if (this.isEnabled) {
        screenfull.off('change', this.change)
      }
    },

    change() {
      this.isFullscreen = screenfull.isFullscreen
    },

    toggle() {
      screenfull.toggle()
    },
  },
}
</script>

<style scoped>
.full-screen {
  display: inline-block;
}
</style>
