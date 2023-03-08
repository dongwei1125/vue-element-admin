<template>
  <div class="login-container">
    <el-form ref="form" class="login-form" :model="form">
      <h3 class="title">登录</h3>

      <el-form-item prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
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
    }
  },
}
</script>

<style lang="scss" scoped>
$bg-color: #2d3a4b;
$light-gray: #eee;

.login-container {
  height: 100%;
  background-color: $bg-color;
}

.login-form {
  width: 520px;
  padding: 160px 35px 0;
  margin: 0 auto;

  .title {
    font-size: 26px;
    color: $light_gray;
    margin: 0 0 40px 0;
    text-align: center;
    font-weight: bold;
  }
}
</style>
