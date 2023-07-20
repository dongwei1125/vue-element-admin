<template>
  <div class="dropdown">
    <span class="title" @click="clickTitle">{{ title }}</span>

    <div v-for="(item, index) in items" :key="index" class="dropdown-item" :style="style(index)">
      <router-link :to="item.path">{{ item.title }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    style() {
      return function (i) {
        const $t = 0.1
        const $n = this.items.length

        const t = this.isActive ? ($n - i - 1) * $t : i * $t
        const y = this.isActive ? i * 60 : -60

        return {
          transitionDelay: `${t}s`,
          transform: `translate3d(0, ${y}px, 0)`,
        }
      }
    },
  },
  methods: {
    clickTitle() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown {
  display: inline-block;
  position: relative;

  .title {
    display: inline-block;
    width: 250px;
    height: 60px;
    line-height: 60px;
    padding: 0 16px;
    font-size: 20px;
    text-align: center;
    color: #fff;
    background-color: #000;
    position: relative;
    z-index: 1;
    cursor: pointer;
  }

  .dropdown-item {
    width: 210px;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    text-align: center;
    color: #000;
    background-color: #e0e0e0;
    position: absolute;
    left: 20px;
    transform: translate3d(0, -60px, 0);
    transition: transform 0.28s ease;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #000;
    }
  }
}
</style>
