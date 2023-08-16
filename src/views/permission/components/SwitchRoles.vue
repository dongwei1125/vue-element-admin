<template>
  <div>
    <p>{{ $t('permissionPage.roles') }}{{ role }}</p>

    <span>{{ $t('permissionPage.switch') }}</span>
    <el-radio-group v-model="role">
      <el-radio-button label="admin" />
      <el-radio-button label="user" />
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: 'SwitchRoles',
  computed: {
    roles() {
      return this.$store.getters.roles
    },
    role: {
      get() {
        const [role] = this.roles

        return role
      },
      set(value) {
        this.$store.dispatch('user/updateRoles', [value]).then(() => {
          this.$emit('change')
        })
      },
    },
  },
}
</script>
