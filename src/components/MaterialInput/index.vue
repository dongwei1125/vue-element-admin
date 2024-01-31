<template>
  <div class="material-input" :class="{ 'material-input--raised': !isEmpty }">
    <input
      v-bind="$attrs"
      :value="value"
      :disabled="inputDisabled"
      @input="handleInput"
      @change="handleChange"
      @blur="handleBlur"
    />

    <i v-if="icon" class="material-input-icon" :class="icon" />

    <span class="material-input-bar" />

    <span class="material-input-label">
      <slot />
    </span>
  </div>
</template>

<script>
import emitter from './emitter'

export default {
  name: 'MaterialInput',
  mixins: [emitter],
  inject: {
    elForm: {
      default: '',
    },
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    icon: String, // eslint-disable-line
    value: [String, Number], // eslint-disable-line
    disabled: {
      type: Boolean,
      default: false,
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    isEmpty() {
      return this.value == null || this.value === ''
    },
    inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled
    },
  },
  watch: {
    value(val) {
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', [val])
      }
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },

    handleChange(e) {
      this.$emit('change', e.target.value)
    },

    handleBlur(e) {
      this.$emit('blur', e)

      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.blur', [this.value])
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$color: #409eff;
$label-color: #9e9e9e;
$border-color: #e0e0e0;
$input-text-color: #606266;

.material-input {
  margin-top: 36px;
  position: relative;
}

.material-input--raised {
  .material-input-label {
    top: -28px;
    left: 0;
    font-weight: bold;
  }
}

.material-input-icon {
  position: absolute;
  left: 0;
  top: 12px;
  width: 30px;
  height: 16px;
  line-height: 16px;
  color: $label-color;
  font-size: 16px;
  text-align: center;
  pointer-events: none;
}

input {
  display: block;
  width: 100%;
  font-size: 16px;
  padding: 12px 12px 2px 6px;
  outline: none;
  border: none;
  color: $input-text-color;
  line-height: 1;
  border-bottom: 1px solid $border-color;
  text-indent: 30px;

  &::placeholder {
    opacity: 0;
  }

  &:focus {
    &::placeholder {
      opacity: 1;
    }

    ~ .material-input-icon {
      color: $color;
    }

    ~ .material-input-bar {
      &::before,
      &::after {
        width: 50%;
      }
    }

    ~ .material-input-label {
      top: -28px;
      left: 0;
      color: $color;
      font-weight: bold;
    }
  }
}

.material-input-bar {
  position: relative;
  display: block;
  width: 100%;

  &::before,
  &::after {
    content: '';
    height: 1px;
    width: 0;
    position: absolute;
    bottom: 0;
    transition: width 0.2s ease;
    background-color: $color;
  }

  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
}

.material-input-label {
  position: absolute;
  left: 30px;
  top: 0;
  font-size: 16px;
  color: $label-color;
  transition: all 0.2s ease;
  pointer-events: none;
}
</style>
