<template>
  <el-dialog :visible.sync="show" :title="title">
    <el-form ref="form" :model="form" :rules="rules" label-width="100px" label-position="left">
      <el-form-item :label="$t('complexTable.title')" prop="title">
        <el-input v-model="form.title" type="textarea" />
      </el-form-item>

      <el-form-item :label="$t('complexTable.datetime')" prop="datetime">
        <el-date-picker
          v-model="form.datetime"
          format="yyyy/MM/dd HH:mm"
          value-format="yyyy/MM/dd HH:mm"
          type="datetime"
          placeholder=""
        />
      </el-form-item>

      <el-form-item :label="$t('complexTable.status')" prop="status">
        <el-select v-model="form.status" clearable placeholder="">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="$t(item.label)"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item :label="$t('complexTable.importance')" prop="importance">
        <el-rate v-model="form.importance" :max="5" />
      </el-form-item>

      <el-form-item :label="$t('complexTable.author')" prop="author">
        <el-input v-model="form.author" clearable />
      </el-form-item>
    </el-form>

    <template slot="footer">
      <el-button @click="show = false">{{ $t('complexTable.cancel') }}</el-button>
      <el-button type="primary" @click="submit">{{ $t('complexTable.submit') }}</el-button>
    </template>
  </el-dialog>
</template>

<script>
const form = {
  title: '',
  datetime: '',
  status: '',
  importance: 0,
  author: '',
  pageviews: 0,
}

export default {
  name: 'ArticleDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    row: {
      type: Object,
      default: () => ({}),
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      statusOptions: [
        {
          label: 'complexTable.published',
          value: 'published',
        },
        {
          label: 'complexTable.draft',
          value: 'draft',
        },
      ],
      form: { ...form },
    }
  },
  computed: {
    show: {
      get() {
        return this.visible
      },
      set(value) {
        this.$emit('update:visible', value)
      },
    },
    title() {
      return this.isEdit ? this.$t('complexTable.editArticle') : this.$t('complexTable.addArticle')
    },
    rules() {
      return {
        title: [
          {
            required: true,
            message: this.$t('complexTable.inputTitle'),
          },
        ],
        datetime: [
          {
            required: true,
            message: this.$t('complexTable.selectDatetime'),
          },
        ],
        status: [
          {
            required: true,
            message: this.$t('complexTable.selectStatus'),
          },
        ],
      }
    },
  },
  watch: {
    visible(value) {
      if (value) {
        this.init()
      }
    },
  },
  methods: {
    init() {
      if (this.isEdit) {
        Object.assign(this.form, { ...this.row })
      } else {
        this.form = { ...form }
      }

      this.$nextTick(() => {
        this.$refs.form?.clearValidate()
      })
    },

    submit() {
      this.$refs.form?.validate(valid => {
        if (!valid) return

        this.show = false
        this.$emit(this.isEdit ? 'edit' : 'add', {
          id: Date.now(),
          ...this.form,
        })
      })
    },
  },
}
</script>

<style scoped>
.el-form {
  width: 400px;
  margin-left: 50px;
}

.el-rate {
  margin-top: 8px;
}
</style>
