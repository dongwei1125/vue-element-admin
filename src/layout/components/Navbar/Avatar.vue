<template>
  <div class="avatar">
    <el-dropdown trigger="click">
      <div>
        <img src="@/assets/rock.gif" class="" />
        <i class="el-icon-caret-bottom" />
      </div>

      <el-dropdown-menu slot="dropdown">
        <router-link to="/profile">
          <el-dropdown-item>个人中心</el-dropdown-item>
        </router-link>
        <router-link to="/update">
          <el-dropdown-item>修改密码</el-dropdown-item>
        </router-link>

        <el-dropdown-item divided @click.native="handleLogout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  methods: {
    async handleLogout() {
      await this.$confirm('请确认是否退出系统?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).catch(() => {})
      await this.$store.dispatch('user/logout')

      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  display: inline-block;
}

.el-dropdown > div {
  position: relative;
  padding-right: 20px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    vertical-align: bottom;
  }

  i {
    position: absolute;
    right: 0;
    bottom: 8px;
    font-size: 12px;
  }
}
</style>
