<template>
  <div>
    <sticky class-name="sub-navbar" :z-index="11">
      <el-dropdown trigger="click">
        <el-button plain>
          {{ $t('componentPage.platform') }}
          <i class="el-icon-caret-bottom el-icon--right" />
        </el-button>

        <el-dropdown-menu slot="dropdown">
          <el-checkbox-group v-model="platforms">
            <el-checkbox v-for="item in platformOptions" :key="item.value" :label="item.value">
              {{ $t(item.label) }}
            </el-checkbox>
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown trigger="click">
        <el-button plain>
          {{ $t('componentPage.link') }}
          <i class="el-icon-caret-bottom el-icon--right" />
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-input v-model="url" :placeholder="$t('componentPage.inputLink')">
            <template slot="prepend">URL</template>
          </el-input>
        </el-dropdown-menu>
      </el-dropdown>

      <el-date-picker
        v-model="datetime"
        type="datetime"
        format="yyyy/MM/dd HH:mm:ss"
        :placeholder="$t('componentPage.releaseTime')"
      />

      <el-button type="success">{{ $t('componentPage.publish') }}</el-button>
    </sticky>

    <ul>
      <li>
        <p class="tips">{{ $t('componentPage.sticky') }}</p>
      </li>

      <li v-for="i in 9" :key="i">{{ i }}</li>

      <li>
        <sticky :sticky-top="200">
          <el-button type="primary">10</el-button>
        </sticky>
      </li>

      <li v-for="i in 40" :key="i + 10">{{ i + 10 }}</li>
    </ul>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky'

export default {
  name: 'StickyPage',
  components: { Sticky },
  data() {
    return {
      platforms: [],
      platformOptions: [
        { value: 'a', label: 'componentPage.platformA' },
        { value: 'b', label: 'componentPage.platformB' },
        { value: 'c', label: 'componentPage.platformC' },
      ],
      url: '',
      datetime: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.el-dropdown,
.el-date-editor {
  margin-right: 6px;
}

ul {
  padding: 20px;
  margin: 0;

  li {
    padding: 10px;
    margin: 0;
    list-style: none;
  }
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

::v-deep .sub-navbar {
  height: 50px;
  line-height: 50px;
  width: 100%;
  text-align: right;
  padding-right: 20px;
  background-image: linear-gradient(
    90deg,
    rgba(32, 182, 249, 1) 0%,
    rgba(32, 182, 249, 1) 0%,
    rgba(33, 120, 241, 1) 100%,
    rgba(33, 120, 241, 1) 100%
  );
  position: relative;
}
</style>
