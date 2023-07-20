<template>
  <div :style="{ width, height }" class="pan-thumb">
    <div class="pan-thumb-image" :style="{ backgroundImage: `url(${image})` }" />
    <div class="pan-thumb-text">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanThumb',
  props: {
    image: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '150px',
    },
    height: {
      type: String,
      default: '150px',
    },
  },
}
</script>

<style lang="scss" scoped>
.pan-thumb {
  display: inline-block;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px;
  position: relative;

  .pan-thumb-image {
    width: 100%;
    height: 100%;
    background-position: 50%;
    background-size: cover;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    position: relative;
    z-index: 1;
  }

  &:hover .pan-thumb-image {
    transform: rotate(-110deg);
    transform-origin: 95% 40%;
  }

  .pan-thumb-text {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
  }
}
</style>
