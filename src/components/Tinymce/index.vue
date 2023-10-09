<template>
  <div v-if="visible" :style="{ width: formattedWidth }">
    <editor v-model="html" :init="init" :disabled="disabled" />
  </div>
</template>

<script>
import { getLanguage } from '@/i18n'
import plugins from './plugins'
import toolbar from './toolbar'

import Editor from '@tinymce/tinymce-vue'

const langs = { en: 'en', zh: 'zh_CN' }
const lang = getLanguage()

export default {
  name: 'Tinymce',
  components: { Editor },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    height: {
      type: [Number, String],
      default: 600,
    },
    width: {
      type: [Number, String],
      default: 'auto',
    },
  },
  data() {
    return {
      init: {
        toolbar,
        plugins,
        height: this.height,
        language: langs[lang],
        default_link_target: '_blank',
      },
      visible: true,
    }
  },
  computed: {
    language() {
      return this.$store.getters.app.language
    },
    html: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('change', value)
      },
    },
    formattedWidth() {
      const width = this.width

      if (/^[\d]+(\.[\d]+)?$/.test(width)) {
        return `${width}px`
      }

      return width
    },
  },
  watch: {
    language() {
      this.updateLanguage()
    },
  },
  methods: {
    updateLanguage() {
      this.destroyTinymce()

      this.init.language = langs[this.language]

      this.$nextTick(() => {
        this.createTinymce()
      })
    },

    createTinymce() {
      this.visible = true
    },

    destroyTinymce() {
      this.visible = false
    },
  },
}
</script>

<style>
.tox-notifications-container {
  display: none;
}
</style>
