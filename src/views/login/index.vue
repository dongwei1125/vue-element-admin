<template>
  <div class="login">
    <el-form ref="form" class="login-form" :model="form" :rules="rules">
      <h3 class="title">系统登录</h3>

      <el-form-item prop="username">
        <span class="icon">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model.trim="form.username" placeholder="用户名"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <span class="icon">
          <svg-icon icon-class="password" />
        </span>
        <el-input ref="password" v-model="form.password" :type="passwordType" placeholder="密码"></el-input>
        <span class="icon password" @click="toggle">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye-close' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-button type="primary" class="login-btn" :loading="loading" @click="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: 'admin',
        password: '123456',
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '长度至少为 6 位', trigger: 'blur' },
        ],
      },
      passwordType: 'password',
      loading: false,
    }
  },
  computed: {
    redirect() {
      return this.$route.query.redirect
    },
  },
  methods: {
    toggle() {
      this.passwordType = this.passwordType === 'password' ? '' : 'password'

      this.$nextTick(() => {
        this.$refs.password?.focus()
      })
    },

    handleLogin() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true

          this.$store
            .dispatch('user/login', this.form)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' })
            })
            .finally(() => {
              this.loading = false
            })
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
$light-gray: #eee;

.el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.1);

  .el-input {
    height: 47px;
    width: 85%;

    ::v-deep input {
      background-color: transparent;
      border: none;
      height: inherit;
      color: $light-gray;
      font-family: sans-serif;
    }
  }
}
</style>

<style lang="scss" scoped>
$background-color: #2d3a4b;
$dark-gray: #889aa4;
$light-gray: #eee;

.login {
  height: 100%;
  background-color: $background-color;
}

.login-form {
  width: 520px;
  padding: 160px 35px 0;
  margin: 0 auto;

  .title {
    font-size: 26px;
    color: $light-gray;
    margin: 0 0 40px 0;
    text-align: center;
    font-weight: bold;
  }
}

span.icon {
  display: inline-block;
  padding: 5px 0px 4px 15px;
  color: $dark-gray;

  &.password {
    font-size: 16px;
    cursor: pointer;
    user-select: none;
  }
}

.login-btn {
  width: 100%;
}
</style>
