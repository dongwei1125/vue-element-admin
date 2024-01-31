<template>
  <div class="component-mixin">
    <el-row>
      <el-card>
        <template slot="header">{{ $t('componentPage.buttons') }}</template>

        <div class="card-content">
          <el-row>
            <el-col :span="4">
              <router-link to="/document/index">
                <pan-button background-color="#324157">{{ $t('componentPage.documentation') }}</pan-button>
              </router-link>
            </el-col>

            <el-col :span="4">
              <router-link to="/icons/index">
                <pan-button background-color="#3a71a8">{{ $t('componentPage.icons') }}</pan-button>
              </router-link>
            </el-col>

            <el-col :span="4">
              <router-link to="/excel/export">
                <pan-button background-color="#e65d6e">{{ $t('componentPage.excel') }}</pan-button>
              </router-link>
            </el-col>

            <el-col :span="4">
              <router-link to="/table/complex">
                <pan-button background-color="#30b08f">{{ $t('componentPage.table') }}</pan-button>
              </router-link>
            </el-col>

            <el-col :span="4">
              <router-link to="/example/create">
                <pan-button background-color="#4ab7bd">{{ $t('componentPage.form') }}</pan-button>
              </router-link>
            </el-col>

            <el-col :span="4">
              <router-link to="/theme/index">
                <pan-button background-color="#fec171">{{ $t('componentPage.theme') }}</pan-button>
              </router-link>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <template slot="header">{{ $t('componentPage.materialInput') }}</template>

          <div class="card-content">
            <el-form :model="form" :rules="rules">
              <el-form-item prop="title">
                <material-input v-model="form.title">标题</material-input>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card>
          <template slot="header">{{ $t('componentPage.imageHover') }}</template>

          <div class="card-content">
            <pan-thumb :image="require('@/assets/iron-man.png')" width="100px" height="100px">
              vue-element-admin
            </pan-thumb>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card>
          <template slot="header">{{ $t('componentPage.waves') }}</template>

          <div class="card-content">
            <el-button v-waves type="primary">{{ $t('componentPage.waves') }}</el-button>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card>
          <template slot="header">{{ $t('componentPage.hoverText') }}</template>

          <div class="card-content">
            <text-hover-effect text="vue-element-admin" />
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="dropdown-card">
          <template slot="header">{{ $t('componentPage.share') }}</template>

          <div class="card-content">
            <dropdown :title="$t('documentPage.component')" :items="items">
              <template slot="item" slot-scope="{ item }">{{ $t(item.title) }}</template>
            </dropdown>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanButton from '@/components/PanButton'
import MaterialInput from '@/components/MaterialInput'
import PanThumb from '@/components/PanThumb'
import TextHoverEffect from '@/components/TextHoverEffect'
import Dropdown from '@/components/Dropdown'

import waves from '@/directives/waves'

export default {
  name: 'ComponentMixinPage',
  components: { PanButton, MaterialInput, PanThumb, TextHoverEffect, Dropdown },
  directives: { waves },
  data() {
    return {
      form: { title: '' },
      items: [
        { title: 'route.tinymce', path: '/component/tinymce' },
        { title: 'route.markdown', path: '/component/markdown' },
        { title: 'route.jsonEditor', path: '/component/json-editor' },
        { title: 'route.splitPane', path: '/component/split-pane' },
        { title: 'route.avatarUpload', path: '/component/avatar-upload' },
      ],
    }
  },
  computed: {
    rules() {
      return {
        title: [
          { required: true, message: this.$t('componentPage.inputContent') },
          { min: 3, max: 5, message: this.$t('componentPage.lengthLimit') },
        ],
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.component-mixin {
  padding: 20px;
}

.el-row {
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
}

.card-content {
  min-height: 120px;
}

.dropdown-card .card-content {
  height: 360px;
  text-align: center;
}

::v-deep {
  .pan-thumb-text {
    text-align: center;
  }
}
</style>
