<template>
  <div class="count-to">
    <p class="tips">
      <el-link href="https://github.com/PanJiaChen/vue-countTo" type="primary" target="_blank">
        vue-count-to
      </el-link>
    </p>

    <vue-count-to
      ref="vueCountTo"
      class="vue-count-to"
      :start-val="form.startVal"
      :end-val="form.endVal"
      :duration="form.duration"
      :decimals="form.decimals"
      :separator="form.separator"
      :prefix="form.prefix"
      :suffix="form.suffix"
      :autoplay="false"
    />

    <el-form :model="form" label-position="top">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="startVal">
            <el-input-number v-model="form.startVal" controls-position="right" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="endVal">
            <el-input-number v-model="form.endVal" controls-position="right" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="duration">
            <el-input-number v-model="form.duration" controls-position="right" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <div class="btn">
            <el-button type="success" @click="start">开始</el-button>
            <el-button type="danger" @click="pauseResume">暂停/恢复</el-button>
          </div>
        </el-col>
      </el-row>

      <br />

      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="decimals">
            <el-input-number v-model="form.decimals" controls-position="right" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="separator">
            <el-input v-model="form.separator" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="prefix">
            <el-input v-model="form.prefix" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="suffix">
            <el-input v-model="form.suffix" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <p class="template">{{ template }}</p>
  </div>
</template>

<script>
import VueCountTo from 'vue-count-to'

export default {
  name: 'CountToPage',
  components: { VueCountTo },
  data() {
    return {
      form: {
        startVal: 0,
        endVal: 2023,
        duration: 4000,
        decimals: 0,
        separator: ',',
        prefix: '¥ ',
        suffix: ' rmb',
      },
    }
  },
  computed: {
    template() {
      const { startVal, endVal, duration, decimals, separator, prefix, suffix } = this.form

      return `<vue-count-to
        :start-val="${startVal}"
        :end-val="${endVal}"
        :duration="${duration}"
        :decimals="${decimals}"
        :separator="${separator}"
        :prefix="${prefix}"
        :suffix="${suffix}"
        :autoplay="false"
      />`
    },
  },
  methods: {
    start() {
      this.$refs.vueCountTo.start()
    },

    pauseResume() {
      this.$refs.vueCountTo.pauseResume()
    },
  },
}
</script>

<style lang="scss" scoped>
.count-to {
  padding: 20px;
}

.vue-count-to {
  color: #f6416c;
  margin: 10px 0;
  font-size: 80px;
  font-weight: 500;
  display: block;
  text-align: center;
}

.tips {
  padding: 8px 24px;
  margin: 0 0 20px;
  border-radius: 2px;
  font-size: 16px;
  color: #2c3e50;
  line-height: 32px;
  background-color: #eef1f6;
}

.template {
  padding: 8px 24px;
  margin: 0 0 20px;
  border-radius: 2px;
  font-size: 16px;
  color: #2c3e50;
  line-height: 32px;
  background-color: #eef1f6;
  font-family: Consolas;
  word-break: break-all;
}

.el-form {
  text-align: center;

  .el-row {
    width: 70%;
    display: inline-block;
  }

  .el-input-number {
    width: 100%;
  }

  .btn {
    padding-top: 50px;
    text-align: left;
  }
}

::v-deep {
  .el-form-item__label {
    width: 100%;
    color: #2f4f4f;
    font-size: 16px;
    font-weight: 700;
  }
}
</style>
