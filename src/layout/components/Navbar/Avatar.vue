<template>
  <div class="avatar">
    <el-dropdown trigger="click">
      <div>
        <img src="@/assets/rock.gif" />
        <i class="el-icon-caret-bottom" />
      </div>

      <el-dropdown-menu slot="dropdown" class="avatar-dropdown-menu">
        <router-link to="/profile/index">
          <el-dropdown-item>{{ $t('navbar.profile') }}</el-dropdown-item>
        </router-link>
        <router-link to="/update">
          <el-dropdown-item>{{ $t('navbar.updatePassword') }}</el-dropdown-item>
        </router-link>

        <el-dropdown-item divided @click.native="logout">{{ $t('navbar.logOut') }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  methods: {
    async logout() {
      try {
        await this.$confirm(this.$t('avatar.tips'), this.$t('avatar.title'), {
          confirmButtonText: this.$t('avatar.confirmButtonText'),
          cancelButtonText: this.$t('avatar.cancelButtonText'),
          type: 'warning',
        })
        await this.$store.dispatch('user/logout')

        this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      } catch {}
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

<style>
.avatar-dropdown-menu a {
  text-decoration: none;
}
</style>
