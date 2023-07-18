<template>
  <div class="error-401">
    <el-button type="primary" icon="el-icon-arrow-left" @click="backTo">返回</el-button>

    <el-row>
      <el-col :span="12">
        <div class="oops">{{ $t('error401Page.oops') }}</div>
        <div class="title">{{ $t('error401Page.title') }}</div>
        <div class="desc">{{ $t('error401Page.desc') }}</div>

        <ul>
          <li>{{ $t('error401Page.or') }}</li>
          <li>
            <router-link to="/">
              <el-link type="primary">{{ $t('error401Page.back') }}</el-link>
            </router-link>
          </li>
          <li>
            <el-link type="primary" href="https://www.jd.com/" target="_blank">
              {{ $t('error401Page.look') }}
            </el-link>
          </li>
          <li>
            <el-link type="primary" @click="visible = true">{{ $t('error401Page.view') }}</el-link>
          </li>
        </ul>
      </el-col>

      <el-col :span="12">
        <img src="@/assets/error/401.gif" alt="" />
      </el-col>
    </el-row>

    <el-dialog :visible.sync="visible" width="30%" :title="$t('error401Page.dialog')" append-to-body>
      <img src="@/assets/error/dance.gif" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Error401',
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    backTo() {
      this.$router.back()
    },
  },
}
</script>

<style lang="scss" scoped>
.error-401 {
  width: 800px;
  padding: 0 50px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}

.oops {
  font-size: 60px;
  color: #484848;
  font-weight: 700;
  margin: 0.67em 0;
}

.title {
  font-size: 1.5em;
  margin: 0.83em 0;
  font-weight: bold;
}

.desc {
  font-size: 0.67em;
  margin: 2.33em 0;
  font-weight: bold;
}

ul {
  font-size: 14px;
  margin: 1em 0;
  padding-left: 40px;

  li {
    padding-bottom: 5px;
    list-style: disc;
  }
}

.el-dialog img {
  width: 100%;
}
</style>
