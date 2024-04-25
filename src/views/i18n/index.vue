<template>
  <div class="i18n">
    <div class="i18n-header">
      <el-card>
        <template slot="header">
          <svg-icon icon-class="i18n" />
          <span class="title">{{ $t('i18nPage.title') }}</span>
        </template>

        <el-radio-group v-model="lang">
          <el-radio v-for="item in langs" :key="item.value" border :label="item.value">
            {{ item.label }}
          </el-radio>
        </el-radio-group>

        <el-tag type="info" class="tag">{{ $t('i18nPage.tips') }}</el-tag>
      </el-card>
    </div>

    <div class="i18n-content">
      <el-row :gutter="20">
        <el-col :span="12" :xs="24">
          <div class="item">
            <el-date-picker v-model="date" type="date" />
          </div>

          <div class="item">
            <el-select v-model="value">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="$t(item.label)"
                :value="item.value"
              />
            </el-select>
          </div>

          <div class="item">
            <el-button>{{ $t('i18nPage.default') }}</el-button>
            <el-button type="primary">{{ $t('i18nPage.primary') }}</el-button>
            <el-button type="success">{{ $t('i18nPage.success') }}</el-button>
            <el-button type="info">{{ $t('i18nPage.info') }}</el-button>
            <el-button type="warning">{{ $t('i18nPage.warning') }}</el-button>
            <el-button type="danger">{{ $t('i18nPage.danger') }}</el-button>
          </div>
        </el-col>

        <el-col :span="12" :xs="24">
          <el-table :data="tableData" highlight-current-row border>
            <el-table-column :label="$t('i18nPage.name')" prop="name" width="100px" align="center" />
            <el-table-column :label="$t('i18nPage.date')" prop="date" width="120px" align="center" />
            <el-table-column :label="$t('i18nPage.address')" prop="address" />
          </el-table>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getPageTitle } from '@/utils/page'

export default {
  name: 'I18n',
  data() {
    return {
      langs: [
        { label: '中文', value: 'zh' },
        { label: 'English', value: 'en' },
      ],
      options: [
        {
          value: '1',
          label: 'i18nPage.one',
        },
        {
          value: '2',
          label: 'i18nPage.two',
        },
        {
          value: '3',
          label: 'i18nPage.three',
        },
      ],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
      date: '',
      value: '',
    }
  },
  computed: {
    title() {
      return this.$route.meta?.title
    },
    lang: {
      get() {
        return this.$store.state.app.language
      },
      set(value) {
        this.$i18n.locale = value

        document.title = getPageTitle(this.title)

        this.$store.dispatch('app/updateLanguage', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.i18n {
  padding-top: 40px;
}

.i18n-header {
  width: 600px;
  max-width: 100%;
  margin: 0 auto;

  .title {
    margin-left: 10px;
  }

  .tag {
    display: block;
    margin-top: 15px;
  }
}

.i18n-content {
  margin: 100px 15px 0;

  .item {
    padding: 25px;
  }
}
</style>
