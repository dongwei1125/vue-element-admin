<template>
  <div class="profile">
    <el-row :gutter="20">
      <el-col :span="6" :xs="24">
        <user-card :user="user" />
      </el-col>

      <el-col :span="18" :xs="24">
        <el-card>
          <el-tabs v-model="activeTab">
            <el-tab-pane :label="$t('profile.activity')" name="activity">
              <activity />
            </el-tab-pane>
            <el-tab-pane :label="$t('profile.timeline')" name="timeline">
              <timeline />
            </el-tab-pane>
            <el-tab-pane :label="$t('profile.account')" name="account">
              <account />
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserCard from './components/UserCard.vue'
import Activity from './components/Activity.vue'
import Timeline from './components/Timeline.vue'
import Account from './components/Account.vue'

export default {
  name: 'Profile',
  components: { UserCard, Activity, Timeline, Account },
  data() {
    return {
      activeTab: 'activity',
    }
  },
  computed: {
    user() {
      return this.$store.state.user.info
    },
  },
}
</script>

<style scoped>
.profile {
  padding: 20px;
}
</style>
