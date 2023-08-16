<template>
  <div class="directive-permission">
    <switch-roles @change="change" />

    <div :key="key" class="content">
      <div class="item">
        <span v-permission="['admin']">
          {{ $t('permissionPage.only') }}
          <el-tag size="small">admin</el-tag>
          {{ $t('permissionPage.see') }}
        </span>

        <el-tag v-permission="['admin']" type="info">v-permission="['admin']"</el-tag>
      </div>

      <div class="item">
        <span v-permission="['user']">
          {{ $t('permissionPage.only') }}
          <el-tag size="small">user</el-tag>
          {{ $t('permissionPage.see') }}
        </span>

        <el-tag v-permission="['user']" type="info">v-permission="['user']"</el-tag>
      </div>

      <div class="item">
        <span v-permission="['admin', 'user']">
          {{ $t('permissionPage.both') }}
          <el-tag size="small">admin</el-tag>
          {{ $t('permissionPage.and') }}
          <el-tag size="small">user</el-tag>
          {{ $t('permissionPage.see') }}
        </span>

        <el-tag v-permission="['admin', 'user']" type="info">v-permission="['admin', 'user']"</el-tag>
      </div>
    </div>

    <p class="tips">
      {{ $t('permissionPage.tips') }}
      <br />
      {{ $t('permissionPage.eg') }}
    </p>

    <el-tabs type="border-card">
      <el-tab-pane v-if="hasPermission(['admin'])" label="Admin">
        admin {{ $t('permissionPage.see') }}

        <el-tag type="info">v-if="hasPermission(['admin'])"</el-tag>
      </el-tab-pane>

      <el-tab-pane v-if="hasPermission(['user'])" label="User">
        user {{ $t('permissionPage.see') }}

        <el-tag type="info">v-if="hasPermission(['user'])"</el-tag>
      </el-tab-pane>

      <el-tab-pane v-if="hasPermission(['admin', 'user'])" label="Admin / User">
        {{ $t('permissionPage.both') }} admin {{ $t('permissionPage.and') }} user
        {{ $t('permissionPage.see') }}

        <el-tag type="info">v-if="hasPermission(['admin', 'user'])"</el-tag>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import permission from '@/directives/permission'
import { hasPermission } from '@/utils/permission'

import SwitchRoles from './components/SwitchRoles.vue'

export default {
  name: 'DirectivePermission',
  directives: { permission },
  components: { SwitchRoles },
  data() {
    return {
      key: 1,
    }
  },
  methods: {
    hasPermission,

    change() {
      this.key++
    },
  },
}
</script>

<style lang="scss" scoped>
.directive-permission {
  padding: 20px;
}

.content {
  margin: 30px 0 60px;

  .item {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }

    > span:not(.el-tag) {
      display: inline-block;
      padding: 8px 16px;
      border-radius: 4px;
      color: #67c23a;
      background-color: #f0f9eb;
    }

    .el-tag {
      margin: 0 10px;
    }
  }
}

.tips {
  padding: 8px 24px;
  border-radius: 2px;
  font-size: 16px;
  color: #2c3e50;
  line-height: 32px;
  background-color: #eef1f6;
  margin-bottom: 20px;
}

.el-tabs {
  width: 550px;
}
</style>
