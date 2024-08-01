<template>
  <el-form :model="form" label-width="90px">
    <el-row>
      <el-col :span="8">
        <el-form-item :label="$t('articleCreate.author')">
          <el-select filterable remote>
            <el-option v-for="index in []" :key="index" :label="item" :value="item" />
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :span="10">
        <el-form-item :label="$t('articleCreate.publishTime')">
          <el-date-picker v-model="form.publishTime" type="datetime" format="yyyy/MM/dd HH:mm:ss" />
        </el-form-item>
      </el-col>

      <el-col :span="6">
        <el-form-item :label="$t('articleCreate.importance')">
          <el-rate v-model="form.importance" :max="3" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item :label="$t('articleCreate.summary')">
      <summary-input
        v-model="form.summary"
        :maxlength="120"
        :placeholder="$t('articleCreate.inputSummary')"
      />
    </el-form-item>

    <tinymce v-model="form.content" />
  </el-form>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import SummaryInput from './SummaryInput.vue'

const form = {
  author: '',
  publishTime: '',
  importance: 0,
  summary: '',
}

export default {
  components: { Tinymce, SummaryInput },
  data() {
    return {
      form: { ...form },
    }
  },
}
</script>

<style scoped>
.el-rate {
  display: inline-block;
}
</style>
