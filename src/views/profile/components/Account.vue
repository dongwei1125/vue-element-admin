<template>
  <el-form :model="form">
    <el-form-item :label="$t('profile.username')" prop="username">
      <el-input v-model.trim="form.username" />
    </el-form-item>
    <el-form-item :label="$t('profile.email')" prop="email">
      <el-input v-model.trim="form.email" />
    </el-form-item>

    <el-button type="primary" @click="handleSubmit">{{ $t('profile.submit') }}</el-button>
  </el-form>
</template>

<script>
const form = {
  username: '',
  email: '',
}

export default {
  name: 'Account',
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      form: { ...form },
    }
  },
  methods: {
    handleSubmit() {
      this.$message.success(this.$t('profile.submitSuccess'))
    },
  },
}
</script>
