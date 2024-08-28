<template>
  <div class="thirdparty-login">
    <el-button type="primary" @click="handleLogin">{{ $t('login.thirdparty') }}</el-button>

    <el-dialog
      :title="$t('login.thirdparty')"
      append-to-body
      :visible.sync="visible"
      custom-class="thirdparty-login-dialog"
    >
      <div class="button">
        <div class="wechat-icon"><svg-icon icon-class="wechat" class="icon" /></div>
        <span>WeChat</span>
      </div>

      <div class="button">
        <div class="qq-icon"><svg-icon icon-class="qq" class="icon" /></div>
        <span>QQ</span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ThirdpartyLogin',
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    handleLogin() {
      this.visible = true
    },
  },
}
</script>

<style scoped>
.thirdparty-login {
  display: inline-block;
}
</style>

<style lang="scss">
.thirdparty-login-dialog {
  .button {
    width: 100px;
    height: 40px;
    display: inline-block;
    align-items: center;
    cursor: pointer;

    > span {
      float: left;
      color: #606266;
      margin: 16px 0 0 8px;
    }

    + .button {
      margin-left: 50px;
    }
  }

  .wechat-icon {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 4px;
    background-color: #00c800;
    float: left;

    svg {
      color: #fff;
      font-size: 24px;
      margin-top: 8px;
    }
  }

  .qq-icon {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 4px;
    background-color: #6ba2d6;
    float: left;

    svg {
      color: #fff;
      font-size: 24px;
      margin-top: 8px;
    }
  }
}
</style>
