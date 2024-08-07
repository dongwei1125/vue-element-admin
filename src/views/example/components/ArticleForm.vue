<template>
  <el-form :model="form" label-width="90px">
    <sticky :z-index="11" class-name="sticky-action">
      <el-button type="success">{{ $t('articleCreate.publish') }}</el-button>
      <el-button type="warning"> {{ $t('articleCreate.draft') }} </el-button>
    </sticky>

    <div class="article-form-content">
      <p class="tips">{{ $t('articleCreate.tips') }}</p>

      <el-row>
        <el-col :span="8">
          <el-form-item :label="$t('articleCreate.author')">
            <user-select v-model="form.author" :placeholder="$t('articleCreate.authorPlaceholder')" />
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

      <el-form-item prop="content">
        <tinymce v-model="form.content" />
      </el-form-item>

      <el-form-item prop="imageUrl">
        <upload-image v-model="form.imageUrl" action="#" />
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
import Sticky from '@/components/Sticky'
import UserSelect from './UserSelect.vue'
import SummaryInput from './SummaryInput.vue'
import Tinymce from '@/components/Tinymce'
import UploadImage from '@/components/UploadImage'

const form = {
  author: '',
  publishTime: '',
  importance: 0,
  summary: '',
  content: '',
  imageUrl: '',
}

export default {
  components: { Sticky, UserSelect, SummaryInput, Tinymce, UploadImage },
  data() {
    return {
      form: { ...form },
    }
  },
}
</script>

<style scoped>
.tips {
  padding: 8px 24px;
  margin: 0 0 20px;
  border-radius: 2px;
  font-size: 16px;
  color: #2c3e50;
  line-height: 32px;
  background-color: #eef1f6;
}

.el-rate {
  display: inline-block;
}

.article-form-content {
  padding: 40px 45px 20px 50px;
}
</style>

<style>
.sticky-action {
  height: 50px;
  line-height: 50px;
  text-align: right;
  padding-right: 20px;
  background: linear-gradient(
    90deg,
    rgba(32, 182, 249, 1) 0%,
    rgba(32, 182, 249, 1) 0%,
    rgba(33, 120, 241, 1) 100%,
    rgba(33, 120, 241, 1) 100%
  );
}
</style>
