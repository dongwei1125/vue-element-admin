<template>
  <div class="article-create">
    <sticky></sticky>

    <el-form>
      <el-row>
        <el-col :span="8">
          <el-form-item label="作者">
            <el-select filterable remote>
              <el-option v-for="index in []" :key="index" :label="item" :value="item" />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="10">
          <el-form-item label="发布时间">
            <el-date-picker type="datetime" format="yyyy/MM/dd HH:mm:ss" />
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="影响力">
            <el-rate :max="3" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="摘要">
        <el-input :rows="1" type="textarea" autosize />
      </el-form-item>

      <tinymce v-model="form.content" />
    </el-form>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky'
import Tinymce from '@/components/Tinymce'

export default {
  name: 'ArticleCreate',
  components: { Sticky, Tinymce },
  data() {
    return {
      form: {
        content: '',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.article-create {
  padding: 40px 45px 20px 50px;
}
</style>
