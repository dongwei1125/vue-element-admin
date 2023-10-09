<template>
  <vue-codemirror ref="codemirror" v-model="json" :options="options" />
</template>

<script>
import CodeMirror from 'codemirror'
import { codemirror } from 'vue-codemirror'

import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'

import 'codemirror/theme/idea.css'

import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/indent-fold.js'
import 'codemirror/addon/fold/comment-fold.js'

export default {
  name: 'Codemirror',
  components: {
    VueCodemirror: codemirror,
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
      options: {
        mode: 'application/json',
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        theme: 'idea',
        lineNumbers: true,
        scrollbarStyle: null,
        readOnly: this.disabled ? 'nocursor' : false,
        foldGutter: {
          rangeFinder: new CodeMirror.fold.combine(CodeMirror.fold.indent, CodeMirror.fold.comment),
        },
      },
    }
  },
  computed: {
    json: {
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
    codemirror() {
      return this.$refs.codemirror?.codemirror
    },
  },
  mounted() {
    this.setSize()
  },
  methods: {
    setSize() {
      this.$nextTick(() => {
        this.codemirror?.setSize(undefined, this.formattedHeight)
      })
    },
  },
}
</script>
