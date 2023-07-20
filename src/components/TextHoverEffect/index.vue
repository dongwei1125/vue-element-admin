<template>
  <div class="text-hover-effect">
    {{ text }}

    <span :data-text="text" />
    <span :data-text="text" />
  </div>
</template>

<script>
export default {
  name: 'TextHoverEffect',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.text-hover-effect {
  color: #4dd9d5;
  font-size: 20px;
  font-weight: 800;
  font-family: 'Dosis', sans-serif;
  line-height: 1;
  display: inline-block;
  overflow: hidden;
  transition: 0.5s 0.25s;
  position: relative;

  &:hover {
    transition: none;
    color: transparent;

    &::before {
      transform: translate3d(100%, 0, 0);
    }

    span::before {
      transform: translate3d(0, 0, 0);
      transition-delay: 0.3s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 6px;
    background-color: #3888fa;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -2px;
    transform: translate3d(-100%, 0, 0);
    transition: transform 0.4s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  }
}

span {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 50%;
  overflow: hidden;

  &::before {
    content: attr(data-text);
    color: #3888fa;
    position: absolute;
    left: 0;
    width: 100%;
    transition: transform 0.25s;
  }

  &:first-child::before {
    top: 0;
    transform: translate3d(0, 50%, 0);
  }

  &:last-child {
    top: 50%;

    &::before {
      bottom: 0;
      transform: translate3d(0, -50%, 0);
    }
  }
}
</style>
