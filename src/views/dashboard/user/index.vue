<template>
  <div class="user-dashboard">
    <pan-thumb :image="require('@/assets/rock-bg.gif')">
      <div class="label">
        {{ $t('dashboardPage.roles') }}
        <span>{{ roles.join(' ') }}</span>
      </div>
    </pan-thumb>

    <div class="desc">
      <h1>{{ $t('dashboardPage.hello') }}</h1>
      <h5>{{ $t('dashboardPage.user') }}</h5>
    </div>

    <github-corner />
  </div>
</template>

<script>
import PanThumb from '@/components/PanThumb'
import GithubCorner from '@/components/GithubCorner'

export default {
  name: 'UserDashboard',
  components: { PanThumb, GithubCorner },
  computed: {
    roles() {
      return this.$store.getters.roles
    },
  },
}
</script>

<style lang="scss" scoped>
.user-dashboard {
  height: 100%;
  padding: 50px 60px 0px;
  background-color: #e3e3e3;
}

::v-deep .pan-thumb {
  float: left;

  .label {
    text-align: center;

    span {
      color: #333;
      font-size: 12px;
      font-weight: 700;
      display: block;
    }
  }
}

.desc {
  display: inline-block;
  height: 150px;
  margin-left: 40px;

  h1 {
    font-size: 48px;
    line-height: 48px;
    color: #212121;
    margin: 25px 0 36px;
    font-weight: normal;
  }

  h5 {
    font-size: 20px;
    font-weight: normal;
    margin: 0;
  }
}

::v-deep .github-corner {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
