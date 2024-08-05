<template>
  <div class="summary-input">
    <el-input
      v-model="content"
      :rows="1"
      type="textarea"
      autosize
      :placeholder="placeholder"
      :maxlength="maxlength"
    />
    <span class="words">{{ length }}/{{ maxlength }}</span>
  </div>
</template>

<script>
export default {
  name: 'SummaryInput',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    maxlength: Number, // eslint-disable-line
  },
  computed: {
    content: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('change', value)
      },
    },
    length() {
      return this.value.length
    },
  },
}
</script>

<style scoped>
.summary-input {
  display: inline-block;
  width: 100%;
  position: relative;
}

.words {
  font-size: 12px;
  color: #909399;
  position: absolute;
  right: 0;
  top: 0;
  white-space: nowrap;
}

::v-deep textarea {
  padding-right: 60px;
  resize: none;
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid #bfcbd9;
  overflow: hidden;
}
</style>
