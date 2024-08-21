<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="100px">
    <sticky :z-index="11" :class-name="`sticky-action ${status}`">
      <comment-dropdown v-model="form.commentOpened" />
      <platform-dropdown v-model="form.platform" />
      <url-dropdown v-model="form.url" />

      <el-button :loading="loading" type="success" @click="handlePublish">
        {{ $t('articleCreate.publish') }}
      </el-button>
      <el-button :loading="loading" type="warning" @click="handleDraft">
        {{ $t('articleCreate.draft') }}
      </el-button>
    </sticky>

    <div class="article-form-content">
      <p class="tips">{{ $t('articleCreate.tips') }}</p>

      <el-form-item label-width="0px" prop="title">
        <material-input v-model="form.title" :maxlength="100">{{ $t('articleCreate.title') }}</material-input>
      </el-form-item>

      <el-row>
        <el-col :span="8">
          <el-form-item :label="$t('articleCreate.author')" prop="author">
            <user-select v-model="form.author" :placeholder="$t('articleCreate.authorPlaceholder')" />
          </el-form-item>
        </el-col>

        <el-col :span="10">
          <el-form-item :label="$t('articleCreate.publishTime')" prop="datetime">
            <el-date-picker
              v-model="form.publishTime"
              type="datetime"
              format="yyyy/MM/dd HH:mm:ss"
              value-format="yyyy/MM/dd HH:mm:ss"
            />
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item :label="$t('articleCreate.importance')" prop="importance">
            <el-rate v-model="form.importance" :max="3" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item :label="$t('articleCreate.summary')" prop="summary">
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
import CommentDropdown from './CommentDropdown.vue'
import PlatformDropdown from './PlatformDropdown.vue'
import UrlDropdown from './UrlDropdown.vue'
import Sticky from '@/components/Sticky'
import MaterialInput from '@/components/MaterialInput'
import UserSelect from './UserSelect.vue'
import SummaryInput from './SummaryInput.vue'
import Tinymce from '@/components/Tinymce'
import UploadImage from '@/components/UploadImage'

const form = {
  status: 'draft',
  commentOpened: false,
  platform: [],
  url: '',
  title: '',
  author: '',
  publishTime: '',
  importance: 0,
  summary: '',
  content: '',
  imageUrl: '',
}

export default {
  components: {
    CommentDropdown,
    PlatformDropdown,
    UrlDropdown,
    Sticky,
    MaterialInput,
    UserSelect,
    SummaryInput,
    Tinymce,
    UploadImage,
  },
  data() {
    return {
      form: { ...form },
      rules: {
        title: [
          {
            required: true,
            message: this.$t('articleCreate.inputTitle'),
          },
        ],
        content: [
          {
            required: true,
            message: this.$t('articleCreate.inputContent'),
          },
        ],
        imageUrl: [
          {
            required: true,
            message: this.$t('articleCreate.uploadImage'),
          },
        ],
      },
      loading: false,
    }
  },
  computed: {
    status() {
      return this.form.status
    },
  },
  methods: {
    init(form) {
      Object.assign(this.form, { ...form })
    },

    handlePublish() {
      this.$refs.form?.validate(valid => {
        if (valid) {
          this.loading = true
          setTimeout(() => {
            this.$notify({
              title: this.$t('articleCreate.success'),
              message: this.$t('articleCreate.publishSuccess'),
              type: 'success',
              duration: 2000,
            })

            this.form.status = 'published'
            this.loading = false
          }, 50)
        }
      })
    },

    handleDraft() {
      this.$refs.form?.validate(valid => {
        if (valid) {
          this.loading = true
          setTimeout(() => {
            this.$message({
              message: this.$t('articleCreate.saveSuccess'),
              type: 'success',
              showClose: true,
              duration: 1000,
            })

            this.form.status = 'draft'
            this.loading = false
          }, 50)
        }
      })
    },
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

<style lang="scss">
.sticky-action {
  height: 50px;
  line-height: 50px;
  text-align: right;
  padding-right: 20px;
  background-color: #d0d0d0;

  &.published {
    background: linear-gradient(
      90deg,
      rgba(32, 182, 249, 1) 0%,
      rgba(32, 182, 249, 1) 0%,
      rgba(33, 120, 241, 1) 100%,
      rgba(33, 120, 241, 1) 100%
    );
  }

  .el-dropdown {
    margin-right: 10px;
  }
}
</style>
