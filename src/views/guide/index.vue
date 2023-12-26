<template>
  <div class="guide">
    <i18n path="guidePage.tips" tag="p">
      <template slot="link">
        <el-link href="https://github.com/kamranahmedse/driver.js" type="primary" target="_blank">
          driver.js
        </el-link>
      </template>
    </i18n>

    <el-button icon="el-icon-question" type="primary" @click="drive">{{ $t('guidePage.open') }}</el-button>
  </div>
</template>

<script>
import { driver } from 'driver.js'
import getSteps from './steps'

import 'driver.js/dist/driver.css'

export default {
  name: 'Guide',
  methods: {
    drive() {
      const steps = getSteps()
      const drive = driver({
        nextBtnText: this.$t('guidePage.next'),
        prevBtnText: this.$t('guidePage.prev'),
        doneBtnText: this.$t('guidePage.done'),
        stagePadding: 2,
        showProgress: true,
        progressText: '{{current}} / {{total}}',
        steps,
      })

      drive.drive()
    },
  },
}
</script>

<style lang="scss" scoped>
.guide {
  padding: 20px;

  p {
    background-color: #eef1f6;
    padding: 8px 24px;
    margin: 0 0 20px;
    border-radius: 4px;
    line-height: 32px;
    font-size: 16px;
    color: #2c3e50;
  }
}
</style>
