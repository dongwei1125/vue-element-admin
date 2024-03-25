<template>
  <vue-dropzone v-if="visible" :id="id" :options="mergedOptions" v-on="$listeners" />
</template>

<script>
import VueDropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

import lang from './lang'

export default {
  name: 'Dropzone',
  components: { VueDropzone },
  mixins: [lang],
  props: {
    id: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mergedOptions: null,
      visible: true,
    }
  },
  computed: {
    language() {
      return this.$store.getters.app.language
    },
  },
  watch: {
    language() {
      this.updateLanguage()
    },
  },
  created() {
    this.mergeOptions()
  },
  methods: {
    mergeOptions() {
      const langOptions = this.$t('dropzone')

      this.mergedOptions = { ...langOptions, ...this.options }
    },

    updateLanguage() {
      this.destroyDropzone()
      this.mergeOptions()

      this.$nextTick(() => {
        this.createDropzone()
      })
    },

    createDropzone() {
      this.visible = true
    },

    destroyDropzone() {
      this.visible = false
    },
  },
}
</script>
