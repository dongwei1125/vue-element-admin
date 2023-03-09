<template>
  <div class="login-container">
    <el-form ref="form" class="login-form" :model="form">
      <h3 class="title">登录</h3>

      <el-form-item prop="username">
        <span class="icon">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <span class="icon">
          <svg-icon icon-class="password" />
        </span>
        <el-input v-model="form.password" :type="passwordType"></el-input>
        <span class="icon password" @click="toggle">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye-close' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-button type="primary" class="login-btn">登录</el-button>
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
      passwordType: 'password',
    }
  },
  methods: {
    toggle() {
      this.passwordType = this.passwordType === 'password' ? '' : 'password'
    },
  },
}
</script>

<style lang="scss" scoped>
$light-gray: #eee;

::v-deep .el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.1);

  .el-input {
    height: 47px;
    width: 85%;

    input {
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

.login-container {
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
