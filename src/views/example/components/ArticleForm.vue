<template>
  <el-form :model="form" label-width="90px">
    <el-row>
      <el-col :span="8">
        <el-form-item :label="$t('articleCreate.author')">
          <el-select
            v-model="form.author"
            :remote-method="remoteMethod"
            filterable
            default-first-option
            remote
            :placeholder="$t('articleCreate.authorPlaceholder')"
          >
            <el-option v-for="user in userList" :key="user.id" :label="user.name" :value="user.id" />
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

    <el-form-item prop="content">
      <tinymce v-model="form.content" />
    </el-form-item>

    <el-form-item prop="imageUrl">
      <upload-image v-model="form.imageUrl" action="#" />
    </el-form-item>
  </el-form>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import SummaryInput from './SummaryInput.vue'
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
  components: { Tinymce, SummaryInput, UploadImage },
  data() {
    return {
      form: { ...form },
      userList: [],
    }
  },
  methods: {
    remoteMethod(queryString) {
      setTimeout(() => {
        const userList = [
          {
            id: '5cb8779d-5a82-4832-a971-033a0f4513ca',
            name: 'Brian',
          },
          {
            id: '7d916fed-e0da-4834-84d3-65ef5260494f',
            name: 'Ronald',
          },
          {
            id: 'd4754d26-40d7-468b-afe7-ee27c4647eca',
            name: 'Jose',
          },
          {
            id: 'd4c3fc77-1073-4cf3-b0b1-a5cdd4928135',
            name: 'Jeffrey',
          },
          {
            id: '044081a0-d435-4f18-84c0-f688bfaf4685',
            name: 'John',
          },
          {
            id: '98de4225-e84f-4063-990a-180d15df4b20',
            name: 'Joseph',
          },
          {
            id: 'd68e72e1-56cb-48a7-a92a-d81b878d75f4',
            name: 'Michelle',
          },
          {
            id: '30bed7df-9305-464d-a413-f8a509c5dad1',
            name: 'Jessica',
          },
          {
            id: '22f8e94b-cf12-4c08-bf63-21f13572daca',
            name: 'Richard',
          },
        ]

        this.userList = userList.filter(user => user.name.includes(queryString))
      }, 50)
    },
  },
}
</script>

<style scoped>
.el-rate {
  display: inline-block;
}
</style>
