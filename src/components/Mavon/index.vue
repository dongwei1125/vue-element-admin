<template>
  <mavon-editor
    v-model="markdown"
    :short-cut="false"
    :autofocus="false"
    :editable="!disabled"
    :toolbars="toolbar"
    :style="{ height: formattedHeight }"
    :language="lang"
    preview-background="#fff"
    v-bind="$attrs"
  />
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import { getLanguage } from '@/i18n'
import toolbar from './toolbar'

const langs = { en: 'en', zh: 'zh-CN' }
const lang = getLanguage()

export default {
  name: 'Mavon',
  components: {
    MavonEditor: mavonEditor,
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    height: {
      type: [Number, String],
      default: 600,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      toolbar,
      lang: langs[lang],
    }
  },
  computed: {
    language() {
      return this.$store.getters.app.language
    },
    markdown: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('change', value)
      },
    },
    formattedHeight() {
      const height = this.height

      if (/^[\d]+(\.[\d]+)?$/.test(height)) {
        return `${height}px`
      }

      return height
    },
  },
  watch: {
    language() {
      this.updateLanguage()
    },
  },
  methods: {
    updateLanguage() {
      this.lang = langs[this.language]
    },
  },
}
</script>

<style scoped>
.fullscreen {
  height: initial !important;
}
</style>
