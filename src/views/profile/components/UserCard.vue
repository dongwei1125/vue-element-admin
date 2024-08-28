<template>
  <el-card>
    <template slot="header">{{ $t('profile.about') }}</template>

    <div class="info">
      <pan-thumb :image="require('@/assets/rock-bg.gif')" height="100px" width="100px">
        <div>{{ $t('profile.hello') }}</div>
        <span>{{ roles }}</span>
      </pan-thumb>

      <div class="username">{{ user.name }}</div>
      <div class="role">{{ roles }}</div>
    </div>

    <div class="education">
      <div class="header">
        <svg-icon icon-class="education" />
        <span>{{ $t('profile.education') }}</span>
      </div>
      <div class="description">{{ user.education }}</div>
    </div>

    <div class="skills">
      <div class="header">
        <svg-icon icon-class="skill" />
        <span>{{ $t('profile.skills') }}</span>
      </div>

      <div class="progress">
        <div v-for="(item, index) in user.skills" :key="index" class="progress-item">
          <span>{{ item.name }}</span>
          <el-progress :percentage="item.progress" :status="item.progress == 100 ? 'success' : undefined" />
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'

export default {
  name: 'UserCard',
  components: { PanThumb },
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    roles() {
      return (this.user.roles || []).join(' ')
    },
  },
}
</script>

<style lang="scss" scoped>
.info {
  padding-top: 10px;
  text-align: center;

  .username {
    font-weight: bold;
    text-align: center;
    padding: 10px 0;
  }

  .role {
    font-size: 14px;
    color: #777;
  }
}

.education {
  margin-top: 20px;
  padding: 15px 0;
}

.header {
  font-size: 14px;
  color: #606266;
  border-bottom: 1px solid #dfe6ec;
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-weight: 700;

  > span {
    padding-left: 4px;
  }
}

.description {
  color: #777;
  font-size: 14px;
}

.skills {
  padding: 15px 0;
}

.progress {
  font-size: 14px;

  .progress-item {
    > span {
      padding-left: 4px;
      color: #606266;
    }
  }
}
</style>
