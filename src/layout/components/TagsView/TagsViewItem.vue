<template>
  <router-link
    :to="item.path"
    tag="span"
    class="tags-view-item"
    :class="{ 'is-active': isActive }"
    @contextmenu.prevent.native="contextmenu($event)"
  >
    <span>{{ $t(item.meta.title) }}</span>
    <span v-if="!isAffix" class="el-icon-close" @click.prevent.stop="close" />
  </router-link>
</template>

<script>
export default {
  name: 'TagsViewItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.item.path === this.$route.path
    },

    isAffix() {
      return this.item.meta?.affix
    },
  },
  methods: {
    close() {
      this.$emit('close', this.item)
    },

    contextmenu(event) {
      this.$emit('contextmenu', event, this.item)
    },
  },
}
</script>

<style lang="scss" scoped>
.tags-view-item {
  display: inline-block;
  height: 26px;
  line-height: 26px;
  border: 1px solid #d8dce5;
  color: #495060;
  background-color: #fff;
  padding: 0 8px;
  font-size: 12px;
  margin-top: 4px;
  margin-right: 5px;
  cursor: pointer;
  position: relative;

  &.is-active {
    color: #fff;
    background-color: #42b983;
    border-color: #42b983;

    &::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #fff;
      margin-right: 5px;
    }
  }

  &:first-of-type {
    margin-left: 15px;
  }

  &:last-of-type {
    margin-right: 15px;
  }
}

.el-icon-close {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  text-align: center;
  margin-left: 2px;
  vertical-align: 2px;
  transition: all 0.28s;

  &:before {
    display: inline-block;
    transform: scale(0.7);
    vertical-align: -2px;
  }

  &:hover {
    color: #fff;
    background-color: #b4bccc;
  }
}
</style>
