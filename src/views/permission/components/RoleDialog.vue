<template>
  <el-dialog :visible.sync="show" :title="title">
    <el-form ref="form" :model="form" :rules="rules" label-width="100px" label-position="left">
      <el-form-item :label="$t('permissionPage.key')" prop="key">
        <el-input v-model="form.key" />
      </el-form-item>

      <el-form-item :label="$t('permissionPage.name')" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>

      <el-form-item :label="$t('permissionPage.desc')" prop="desc">
        <el-input v-model="form.desc" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" />
      </el-form-item>

      <el-form-item :label="$t('permissionPage.menu')" prop="menuKeys">
        <menu-tree v-model="form.menuKeys" />
      </el-form-item>
    </el-form>

    <template slot="footer">
      <el-button @click="show = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script>
import MenuTree from './MenuTree'

const form = {
  key: '',
  name: '',
  desc: '',
  menuKeys: [],
}

export default {
  name: 'RoleDialog',
  components: { MenuTree },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
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
    rules() {
      return {
        key: [
          {
            required: true,
            message: this.$t('permissionPage.inputKey'),
          },
        ],
        name: [
          {
            required: true,
            message: this.$t('permissionPage.inputRole'),
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
