<template>
  <transition name="el-fade-in">
    <div v-show="visible" class="back-to-top" @click="backToTop">
      <svg width="16" height="16" viewBox="0 0 17 17" fill="#9aaabf" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.036 15.59a1 1 0 0 1-.997.995H5.032a.996.996 0 0 1-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z"
        />
      </svg>
    </div>
  </transition>
</template>

<script>
const easeInOutQuad = (t, b, c, d) =>
  (t /= d / 2) < 1 ? (c / 2) * t * t + b : (-c / 2) * (--t * (t - 2) - 1) + b

export default {
  name: 'BackToTop',
  props: {
    visibilityHeight: {
      type: Number,
      default: 400,
    },
  },
  data() {
    return {
      visible: false,
      isMoving: false,
      timer: null,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    clearInterval(this.timer)
  },
  methods: {
    handleScroll() {
      this.visible = window.pageYOffset > this.visibilityHeight
    },

    backToTop() {
      if (this.isMoving) return

      this.isMoving = true

      const start = window.pageYOffset
      var i = 0

      this.timer = setInterval(() => {
        const next = Math.floor(easeInOutQuad(10 * i, start, -start, 250))

        if (next > 0) {
          window.scrollTo(0, next)
        } else {
          window.scrollTo(0, 0)
          clearInterval(this.timer)

          this.isMoving = false
        }

        i++
      }, 16.7)
    },
  },
}
</script>

<style lang="scss" scoped>
.back-to-top {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  z-index: 5;
  cursor: pointer;

  &:hover {
    background-color: #f2f6fc;
  }
}
</style>
