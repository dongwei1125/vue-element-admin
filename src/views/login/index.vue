<template>
  <div class="login">
    <el-form ref="form" class="login-form" :model="form" :rules="rules">
      <div class="title">
        <h3>{{ $t('login.title') }}</h3>

        <language />
      </div>

      <el-form-item prop="username">
        <span class="icon">
          <svg-icon icon-class="user" />
        </span>

        <el-input v-model.trim="form.username" :placeholder="$t('login.username')" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="icon">
          <svg-icon icon-class="password" />
        </span>

        <el-input
          ref="password"
          v-model="form.password"
          :type="passwordType"
          :placeholder="$t('login.password')"
        />

        <span class="eye-icon" @click="toggle">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye-close' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-button type="primary" class="login-btn" :loading="loading" @click="login">
        {{ $t('login.login') }}
      </el-button>

      <div class="login-extra">
        <thirdparty-login />
      </div>
    </el-form>
  </div>
</template>

<script>
import Language from '@/components/Language'
import ThirdpartyLogin from './ThirdpartyLogin.vue'

export default {
  name: 'Login',
  components: { Language, ThirdpartyLogin },
  data() {
    return {
      form: {
        username: 'admin',
        password: '123456',
      },
      passwordType: 'password',
      loading: false,
    }
  },
  computed: {
    redirect() {
      return this.$route.query.redirect
    },
    rules() {
      return {
        username: [{ required: true, message: this.$t('login.inputUsername'), trigger: 'blur' }],
        password: [
          { required: true, message: this.$t('login.inputPassword'), trigger: 'blur' },
          { min: 6, message: this.$t('login.passwordMinLength'), trigger: 'blur' },
        ],
      }
    },
  },
  methods: {
    toggle() {
      this.passwordType = this.passwordType === 'password' ? '' : 'password'

      this.$nextTick(() => {
        this.$refs.password?.focus()
      })
    },

    login() {
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
$pageBackgroundColor: #2d3a4b;
$darkGray: #889aa4;
$lightGray: #eee;

.login {
  height: 100%;
  background-color: $pageBackgroundColor;
}

.login-form {
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
}

.el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);

  .el-input {
    height: 47px;
    width: 85%;

    ::v-deep input {
      background-color: transparent;
      border: none;
      height: inherit;
      color: $lightGray;
      font-family: sans-serif;
    }
  }
}

.title {
  position: relative;
  margin: 0 0 40px 0;

  h3 {
    margin: 0;
    font-size: 26px;
    color: $lightGray;
    text-align: center;
    font-weight: bold;
  }

  .language {
    position: absolute;
    right: 0;
    top: 5px;
    cursor: pointer;

    ::v-deep .el-dropdown {
      color: #fff;
      font-size: 18px;
    }
  }
}

.icon {
  display: inline-block;
  padding: 5px 0px 4px 15px;
  color: $darkGray;
}

.eye-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: $darkGray;
  cursor: pointer;
  user-select: none;
}

.login-btn {
  width: 100%;
}

.login-extra {
  text-align: right;
  margin-top: 30px;
}
</style>
